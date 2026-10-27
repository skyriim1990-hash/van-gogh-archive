/**
 * ARTWORK DATA
 *
 * The ten paintings the site is built around, and the one place they are
 * defined. The grids, the filters, the detail pages and the prev/next
 * navigation are all generated from this array.
 *
 * Titles, dates, media and dimensions follow the records of the museums that
 * hold the paintings. The photographs are public-domain reproductions kept in
 * src/assets/artworks/ and imported below, so Astro can resize them at build.
 *
 * ---------------------------------------------------------------------------
 * FIELDS
 * ---------------------------------------------------------------------------
 * id          string   URL slug, must stay unique and stable
 * title       string   title of the painting
 * year        string   date as printed, e.g. "April–May 1885"
 * category    string   one of the PERIOD ids below (used by the filters)
 * medium      string   e.g. "Oil on canvas"
 * dimensions  string   e.g. "82 × 114 cm"
 * image       object   the imported photograph
 * alt         string   alt text; built from title, year and medium when empty
 * description string   short note, or "" when there is none
 * ratio       string   CSS aspect-ratio of the photograph, "width / height"
 * selected    boolean  true = part of the homepage shortlist
 * feature     boolean  true = allowed to occupy a large slot in the grid
 */

import thePotatoEaters from '../assets/artworks/the-potato-eaters.jpg';
import selfPortraitWithGreyFeltHat from '../assets/artworks/self-portrait-with-grey-felt-hat.jpg';
import sunflowers from '../assets/artworks/sunflowers.jpg';
import theYellowHouseTheStreet from '../assets/artworks/the-yellow-house-the-street.jpg';
import theBedroom from '../assets/artworks/the-bedroom.jpg';
import wheatfieldWithCrows from '../assets/artworks/wheatfield-with-crows.jpg';
import terraceOfACafeAtNight from '../assets/artworks/terrace-of-a-cafe-at-night.jpg';
import vanGoghsChair from '../assets/artworks/van-goghs-chair.jpg';
import irises from '../assets/artworks/irises.jpg';
import theStarryNight from '../assets/artworks/the-starry-night.jpg';

/**
 * The periods the archive is arranged by — the places Van Gogh worked, in the
 * order he worked in them.
 *
 * This is a closed vocabulary, not an editorial list: a work belongs to the
 * place it was made in, and there is no sixth place. Slugs carry no accent so
 * they stay valid as URL fragments; the label is where Saint-Rémy keeps its.
 */
export const PERIODS = [
  { id: 'nuenen', label: 'Nuenen' },
  { id: 'paris', label: 'Paris' },
  { id: 'arles', label: 'Arles' },
  { id: 'saint-remy', label: 'Saint-Rémy' },
  { id: 'auvers', label: 'Auvers' },
];

/* The filter row: the periods, behind the control that turns filtering off.
   "All" is not a period — no work belongs to it — which is why it is added
   here rather than living in the list above. */
export const CATEGORIES = [{ id: 'all', label: 'All' }, ...PERIODS];

export const artworks = [
  {
    id: 'the-potato-eaters',
    title: 'The Potato Eaters',
    year: 'April–May 1885',
    category: 'nuenen',
    medium: 'Oil on canvas',
    dimensions: '82 × 114 cm',
    image: thePotatoEaters,
    alt: '',
    description: '',
    ratio: '1600 / 1131',
    selected: false,
    feature: false,
  },
  {
    id: 'self-portrait-with-grey-felt-hat',
    title: 'Self-Portrait with Grey Felt Hat',
    year: 'September–October 1887',
    category: 'paris',
    medium: 'Oil on cotton',
    dimensions: '44.5 × 37.2 cm',
    image: selfPortraitWithGreyFeltHat,
    alt: '',
    description: '',
    ratio: '1320 / 1600',
    selected: false,
    feature: false,
  },
  {
    id: 'sunflowers',
    title: 'Sunflowers',
    year: 'January 1889',
    category: 'arles',
    medium: 'Oil on canvas',
    dimensions: '95 × 73 cm',
    image: sunflowers,
    alt: '',
    description: '',
    ratio: '1221 / 1600',
    selected: false,
    feature: false,
  },
  {
    id: 'the-yellow-house-the-street',
    title: 'The Yellow House (The Street)',
    year: 'September 1888',
    category: 'arles',
    medium: 'Oil on canvas',
    dimensions: '72 × 91.5 cm',
    image: theYellowHouseTheStreet,
    alt: '',
    description: '',
    ratio: '1600 / 1241',
    selected: false,
    feature: false,
  },
  {
    id: 'the-bedroom',
    title: 'The Bedroom',
    year: 'October 1888',
    category: 'arles',
    medium: 'Oil on canvas',
    dimensions: '72.4 × 91.3 cm',
    image: theBedroom,
    alt: '',
    description: '',
    ratio: '1600 / 1263',
    selected: false,
    feature: false,
  },
  {
    id: 'wheatfield-with-crows',
    title: 'Wheatfield with Crows',
    year: 'July 1890',
    category: 'auvers',
    medium: 'Oil on canvas',
    dimensions: '50.5 × 103 cm',
    image: wheatfieldWithCrows,
    alt: '',
    description: '',
    ratio: '1600 / 766',
    selected: false,
    feature: false,
  },
  {
    id: 'terrace-of-a-cafe-at-night',
    title: 'Terrace of a Café at Night (Place du Forum)',
    year: 'c. 16 September 1888',
    category: 'arles',
    medium: 'Oil on canvas',
    dimensions: '80.7 × 65.3 cm',
    image: terraceOfACafeAtNight,
    alt: '',
    description: '',
    ratio: '1218 / 1600',
    selected: false,
    feature: false,
  },
  {
    id: 'van-goghs-chair',
    title: 'Van Gogh\'s Chair',
    year: '1888',
    category: 'arles',
    medium: 'Oil on canvas',
    dimensions: '91.8 × 73 cm',
    image: vanGoghsChair,
    alt: '',
    description: '',
    ratio: '1263 / 1600',
    selected: false,
    feature: false,
  },
  {
    id: 'irises',
    title: 'Irises',
    year: '1889',
    category: 'saint-remy',
    medium: 'Oil on canvas',
    dimensions: '74.3 × 94.3 cm',
    image: irises,
    alt: '',
    description: '',
    ratio: '1600 / 1223',
    selected: false,
    feature: false,
  },
  {
    id: 'the-starry-night',
    title: 'The Starry Night',
    year: 'June 1889',
    category: 'saint-remy',
    medium: 'Oil on canvas',
    dimensions: '73.7 × 92.1 cm',
    image: theStarryNight,
    alt: '',
    description: '',
    ratio: '1600 / 1267',
    selected: false,
    feature: false,
  },
];

/** Sequential display number, e.g. "4". */
export function artworkIndex(id) {
  const i = artworks.findIndex((a) => a.id === id);
  return String(i + 1);
}

/** `selected: true` items, in data order — used on the homepage. */
export const selectedArtworks = artworks.filter((a) => a.selected);

/**
 * The works the homepage composition draws on, best first: `selected` works,
 * then `feature` works, then plain order. Order is preserved and duplicates
 * are dropped. Fewer works than slots returns short rather than padded.
 *
 * @param {number} limit  how many slots the composition has
 */
export function homepageArtworks(limit) {
  const chosen = [];
  const seen = new Set();

  for (const group of [selectedArtworks, artworks.filter((a) => a.feature), artworks]) {
    for (const artwork of group) {
      if (seen.has(artwork.id)) continue;

      seen.add(artwork.id);
      chosen.push(artwork);

      if (chosen.length >= limit) return chosen;
    }
  }

  return chosen;
}

/** Neighbours for the prev / next control on a detail page. Wraps around. */
export function neighbours(id) {
  const i = artworks.findIndex((a) => a.id === id);
  if (i === -1) return { prev: null, next: null };
  return {
    prev: artworks[(i - 1 + artworks.length) % artworks.length],
    next: artworks[(i + 1) % artworks.length],
  };
}
