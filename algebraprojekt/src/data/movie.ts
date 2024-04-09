import { MovieType, TabType } from "../types/main";

export const movieData: MovieType[] = [
  {
    id: "1",
    name: "Batman",
    year: "2022",
    genre: ["action", "crime", "drama"],
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BYTExZTdhY2ItNGQ1YS00NjJlLWIxMjYtZTI1MzNlMzY0OTk4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
    imgUrl2: "https://mecinemas.com/assets/img/posters/TheBatman_banner.jpg",
    about:
      "Batman is called to intervene when the mayor of Gotham City is murdered. Soon, his investigation leads him to uncover a web of corruption, linked to his own dark past.On Halloween, Gotham City mayor Don Mitchell Jr. is murdered by the masked serial killer the Riddler. Reclusive billionaire Bruce Wayne, who has operated for two years as the vigilante Batman, investigates the murder alongside the Gotham City Police Department (GCPD). Lieutenant James Gordon discovers a message that the Riddler left for Batman. The following night, the Riddler kills Commissioner Pete Savage and leaves another message for Batman. Batman and Gordon discover that the Riddler left a thumb drive in Mitchell's car containing images of Mitchell with a woman, Annika Kosolov, at the Iceberg Lounge—a nightclub operated by Oswald The Penguin Cobblepot, who is crime boss Carmine Falcone's lieutenant. While the Penguin pleads ignorance, Batman notices that Annika's roommate Selina Kyle works at the club as a waitress. When Annika disappears, Batman sends Selina to the Iceberg Lounge for answers and discovers that Savage was on Falcone's payroll like district attorney Gil Colson.The Riddler abducts Colson, straps a timed collar bomb to his neck and sends him to interrupt Mitchell's funeral. When Batman arrives, the Riddler calls him via Colson's phone and threatens to detonate the bomb if Colson cannot answer three riddles. Colson refuses to answer the third—the name of the informant who gave the GCPD information that led to a historic drug bust ending Salvatore Maroni's operation—and is killed. Batman and Gordon deduce that the informant may be the Penguin and track him to a drug deal. They discover that Maroni's operation transferred to Falcone, with many corrupt GCPD officers involved. Selina inadvertently exposes them when she arrives to steal money and discovers Annika's corpse in the trunk of a car. Batman captures the Penguin after a car chase, but he and Gordon learn that the Penguin is not the informant. ",
    cast: [
      {
        imgUrl:
          "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/487714_v9_bb.jpg",
        movieName: "Batman",
        realName: "Robert Pattinson",
      },
      {
        imgUrl:
          "https://wwd.com/wp-content/uploads/2023/04/GettyImages-1340152588.jpg",
        movieName: "Catwoman",
        realName: "Zoë Kravitz",
      },
      {
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/2/25/Paul_Dano_at_Berlinale_2024_Ausschnitt.jpg",
        movieName: "Riddler",
        realName: "Paul Dano",
      },
      {
        imgUrl:
          "https://goldenglobes.com/wp-content/uploads/2023/10/colin_farrell_-_hfpa.jpg",
        movieName: "Penguin",
        realName: "Colin Farrell",
      },
    ],
  },
  {
    id: "2",
    name: "Batman2",
    year: "2024",
    genre: ["action", "crime", "drama"],
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BMzA0NmZiZWEtOTRjZS00NTk3LTgzOGQtODMwMDg5ZjRiMTI5XkEyXkFqcGdeQXVyMTcxMzQ0MTg4._V1_FMjpg_UX1000_.jpg",
    about: "Not much is known,we just know that the joker might return.",
    cast: [
      {
        imgUrl:
          "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/487714_v9_bb.jpg",
        movieName: "Batman",
        realName: "Robert Pattinson",
      },
      {
        imgUrl:
          "https://wwd.com/wp-content/uploads/2023/04/GettyImages-1340152588.jpg",
        movieName: "Catwoman",
        realName: "Zoë Kravitz",
      },
      {
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/2/25/Paul_Dano_at_Berlinale_2024_Ausschnitt.jpg",
        movieName: "Riddler",
        realName: "Paul Dano",
      },
      {
        imgUrl:
          "https://goldenglobes.com/wp-content/uploads/2023/10/colin_farrell_-_hfpa.jpg",
        movieName: "Penguin",
        realName: "Colin Farrell",
      },
    ],
    imgUrl2:
      "https://static0.moviewebimages.com/wordpress/wp-content/uploads/2024/02/the-batman-joker-keoghan.jpg",
  },
  {
    id: "3",
    name: "Spider-Man: Into the Spider-Verse",
    year: "2018",
    genre: ["animation", "action", "adventure"],
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_FMjpg_UX1000_.jpg",
    about:
      "Teen Miles Morales becomes the Spider-Man of his universe and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
    cast: [
      {
        imgUrl:
          "https://m.media-amazon.com/images/M/MV5BMjAwNDU2OTc5M15BMl5BanBnXkFtZTgwOTk0ODMyNDE@._V1_.jpg",
        movieName: "Spiderman",
        realName: "Shameik Moore",
      },
      {
        imgUrl:
          "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/510415_v9_be.jpg",
        movieName: "SpiderGwen",
        realName: "Hailee Steinfeld",
      },
      {
        imgUrl:
          "https://deadline.com/wp-content/uploads/2017/02/brian-tyree-henry.jpg",
        movieName: "Jeff Moralles",
        realName: "Brian Tyree Henry",
      },
      {
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/OscarIsaac-byPhilipRomano.jpg/640px-OscarIsaac-byPhilipRomano.jpg",
        movieName: "Miguel O'Hara",
        realName: "Oscar Isaac",
      },
    ],
    imgUrl2:
      "https://m.media-amazon.com/images/M/MV5BNjUzNzc3NjQ4OF5BMl5BanBnXkFtZTgwNzgyODI4NjM@._V1_.jpg",
  },
  {
    id: "4",
    name: "Spider-Man: Across the Spider-Verse",
    year: "2023",
    genre: ["animation", "action", "adventure"],
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg",
    about:
      "In an attempt to curb the Spot, a scientist, from harnessing the power of the multiverse, Miles Morales joins forces with Gwen Stacy.",
    cast: [
      {
        imgUrl:
          "https://m.media-amazon.com/images/M/MV5BMjAwNDU2OTc5M15BMl5BanBnXkFtZTgwOTk0ODMyNDE@._V1_.jpg",
        movieName: "Spiderman",
        realName: "Shameik Moore",
      },
      {
        imgUrl:
          "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/510415_v9_be.jpg",
        movieName: "SpiderGwen",
        realName: "Hailee Steinfeld",
      },
      {
        imgUrl:
          "https://deadline.com/wp-content/uploads/2017/02/brian-tyree-henry.jpg",
        movieName: "Jeff Moralles",
        realName: "Brian Tyree Henry",
      },
      {
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/OscarIsaac-byPhilipRomano.jpg/640px-OscarIsaac-byPhilipRomano.jpg",
        movieName: "Miguel O'Hara",
        realName: "Oscar Isaac",
      },
    ],
    imgUrl2:
      "https://ca-times.brightspotcdn.com/dims4/default/324a874/2147483647/strip/true/crop/9560x4000+0+0/resize/1200x502!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fec%2F9d%2F0df9c3db4e12aaf5aa95ea35c3b6%2Fet-spiderman-across-the-spiderverse-2023-001.JPG",
  },
];

export const tabData: TabType[] = [
  { id: "1", label: "Batman" },
  { id: "2", label: "Batman2" },
  { id: "3", label: "Spider-Man: Into the Spider-Verse" },
  { id: "4", label: "Spider-Man: Across the Spider-Verse" },
];
