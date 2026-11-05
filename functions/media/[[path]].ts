// Cloudflare Pages ignores Range headers on static files and always sends the
// whole file, but Safari needs partial responses (206) to play video and audio.
// This serves those responses for the paths listed in public/_routes.json.

interface Context {
  request: Request;
  env: { ASSETS: { fetch: typeof fetch } };
}

function acceptRanges(response: Response): Response {
  const result = new Response(response.body, response);
  result.headers.set('Accept-Ranges', 'bytes');
  return result;
}

export const onRequest = async ({ request, env }: Context): Promise<Response> => {
  const range = request.headers.get('Range');
  if (!range || request.method !== 'GET') {
    return acceptRanges(await env.ASSETS.fetch(request));
  }

  // A plain request, so Range and conditional headers don't affect the lookup.
  const file = await env.ASSETS.fetch(new Request(request.url));
  if (file.status !== 200) return file;

  const ifRange = request.headers.get('If-Range');
  const match = /^bytes=(\d*)-(\d*)$/.exec(range.trim());
  if ((ifRange && ifRange !== file.headers.get('ETag')) || !match || (!match[1] && !match[2])) {
    return acceptRanges(file);
  }

  const body = await file.arrayBuffer();
  const size = body.byteLength;
  const start = match[1] ? Number(match[1]) : Math.max(size - Number(match[2]), 0);
  const end = match[1] && match[2] ? Math.min(Number(match[2]), size - 1) : size - 1;

  if (start > end || start >= size) {
    return new Response(null, {
      status: 416,
      headers: { 'Content-Range': `bytes */${size}`, 'Accept-Ranges': 'bytes' },
    });
  }

  const headers = new Headers(file.headers);
  headers.delete('Content-Encoding');
  headers.set('Accept-Ranges', 'bytes');
  headers.set('Content-Range', `bytes ${start}-${end}/${size}`);
  headers.set('Content-Length', String(end - start + 1));
  return new Response(body.slice(start, end + 1), { status: 206, headers });
};
