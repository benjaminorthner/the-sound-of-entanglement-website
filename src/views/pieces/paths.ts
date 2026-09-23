/** Static paths shared by the English and German routes. */
import { getCollection } from 'astro:content';

export async function piecePaths() {
  const pieces = (await getCollection('pieces')).sort((a, b) => a.data.order - b.data.order);
  return pieces.map((piece, i) => ({
    params: { id: piece.id },
    props: { piece, prev: pieces[i - 1], next: pieces[i + 1] },
  }));
}
