/** Static paths shared by the English and German routes. */
import { publicShows } from '../../components/shows/data';

export async function showPaths() {
  const shows = await publicShows();
  return shows.map((show, i) => ({
    params: { id: show.id },
    props: { show, prev: shows[i - 1], next: shows[i + 1] },
  }));
}
