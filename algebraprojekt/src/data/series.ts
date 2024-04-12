export type SeriesType = {
  id: string;
  imgUrl: string;
  name: string;
};
export const seriesData: SeriesType[] = [
  {
    id: "1",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb4QxEGcriGcbtnfZr83oTVZkCaU0MgMh906hwmvlDFQ&s",
    name: "Obitelj Soprano",
  },
  {
    id: "2",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUDBL5p70kTQ_eZpHKawWx3KUdoM0NYax_vjoSK7fQA&s",
    name: "Breaking Bad",
  },
  {
    id: "3",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
    name: "Friends",
  },
];
export type TabSeriesType = {
  id: string;
  label: string;
};
export const tabSerieData: TabSeriesType[] = [
  { id: "1", label: "Sopranos" },
  { id: "2", label: "Breaking Bad" },
  { id: "3", label: "Friends" },
];
