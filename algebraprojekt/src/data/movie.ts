import { MovieType, TabType } from "../types/main";

export const movieData: MovieType[] = [
  {
    id: "1",
    name: "The Batman",
    year: "2022",
    age: "PG-13",
    length: "2h 56m",
    genre: ["Action", "Crime", "Drama"],
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BYTExZTdhY2ItNGQ1YS00NjJlLWIxMjYtZTI1MzNlMzY0OTk4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
    imgUrl2:
      "https://i.redd.it/in-the-batman-2022-the-cops-chase-batman-when-he-tries-to-v0-on71341prvo81.gif?width=498&auto=webp&s=00ff06bf3ac3f4ab6a76aaff80d8a4aa40bd6d56",
    about:
      "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
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
    name: "Joker",
    year: "2019",
    age: "R",
    length: "2h 2m",
    genre: ["Thriller", "Crime", "Drama"],
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhCB2nSlTC-rrsWF6z4hA_OWQWGpamDa5ZJwLoxFitoQ&s",
    about:
      "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
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
    imgUrl2: "https://media.giphy.com/media/DPSWVkL9t5nh58cMlo/giphy.gif",
  },
  {
    id: "3",
    name: "Spider-Man: Into the Spider-Verse",
    year: "2018",
    age: "PG-13",
    length: "1h 57m",
    genre: ["Animation", "Action", "Adventure"],
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
      "https://media1.giphy.com/media/9tZc9Mzo9K0yOYx38U/200.gif?cid=6c09b952rrd2087ev8ulnk9h33tdr4dilnqi6tjl3tnhfdxk&ep=v1_internal_gif_by_id&rid=200.gif&ct=g",
  },
  {
    id: "4",
    name: "Spider-Man: Across the Spider-Verse",
    year: "2023",
    age: "PG-13",
    length: "2h 20m",
    genre: ["Animation", "Action", "Adventure"],
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
      "https://cdn.vox-cdn.com/uploads/chorus_asset/file/24693275/across_spiderverse_action.gif",
  },
  {
    id: "5",
    name: "Deadpool",
    year: "2016",
    age: "R",
    length: "1h 48m",
    genre: ["Action", "Comedy"],
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/23/Deadpool_%282016_poster%29.png",
    about:
      "A wisecracking mercenary gets experimented on and becomes immortal yet hideously scarred, and sets out to track down the man who ruined his looks.",
    cast: [
      {
        imgUrl:
          "https://images.hellomagazine.com/horizon/square/ef4c1d8f1ca5-ryan-reynolds-at-premiere.jpg",
        movieName: "Deadpool",
        realName: "Ryan Reynolds",
      },
      {
        imgUrl:
          "https://media.carnegie.org/filer_public_thumbnails/filer_public/f0/c0/f0c05f42-ce99-4dba-92a0-223a06e8283a/morena_baccarin-2.jpeg__1200x630_q85_subsampling-2.jpg",
        movieName: "Vanessa",
        realName: "Morena Baccarin",
      },
      {
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Gina_Carano.jpg/220px-Gina_Carano.jpg",
        movieName: "Angel Dust",
        realName: "Gina Carano",
      },
      {
        imgUrl:
          "https://media.themoviedb.org/t/p/w500/AaMTvZkroI8uo5JXQiJ5pSLEgSJ.jpg",
        movieName: "Ajax",
        realName: "Ed Skrein",
      },
    ],
    imgUrl2:
      "https://i.pinimg.com/originals/cf/18/b3/cf18b3797c47f9ee093ee23a2d19f339.gif",
  },
  {
    id: "6",
    name: "Logan",
    year: "2017",
    age: "R",
    length: "2h 17m",
    genre: ["Action", "Drama", "Sci-fi"],
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BYzc5MTU4N2EtYTkyMi00NjdhLTg3NWEtMTY4OTEyMzJhZTAzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_FMjpg_UX1000_.jpg",
    about:
      "In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety.",
    cast: [
      {
        imgUrl:
          "https://images.hellomagazine.com/horizon/square/ef4c1d8f1ca5-ryan-reynolds-at-premiere.jpg",
        movieName: "Deadpool",
        realName: "Ryan Reynolds",
      },
      {
        imgUrl:
          "https://media.carnegie.org/filer_public_thumbnails/filer_public/f0/c0/f0c05f42-ce99-4dba-92a0-223a06e8283a/morena_baccarin-2.jpeg__1200x630_q85_subsampling-2.jpg",
        movieName: "Vanessa",
        realName: "Morena Baccarin",
      },
      {
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Gina_Carano.jpg/220px-Gina_Carano.jpg",
        movieName: "Angel Dust",
        realName: "Gina Carano",
      },
      {
        imgUrl:
          "https://media.themoviedb.org/t/p/w500/AaMTvZkroI8uo5JXQiJ5pSLEgSJ.jpg",
        movieName: "Ajax",
        realName: "Ed Skrein",
      },
    ],
    imgUrl2:
      "https://goatmoviereviews.wordpress.com/wp-content/uploads/2017/03/wjmpmu.gif?w=583",
  },
  {
    id: "7",
    name: "Venom",
    year: "2017",
    age: "PG-13",
    length: "1h 52m",
    genre: ["Action", "Drama", "Sci-fi"],
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BNTFkZjdjN2QtOGE5MS00ZTgzLTgxZjAtYzkyZWQ5MjEzYmZjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg",
    about:
      "A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it.",
    cast: [
      {
        imgUrl:
          "https://images.hellomagazine.com/horizon/square/ef4c1d8f1ca5-ryan-reynolds-at-premiere.jpg",
        movieName: "Deadpool",
        realName: "Ryan Reynolds",
      },
      {
        imgUrl:
          "https://media.carnegie.org/filer_public_thumbnails/filer_public/f0/c0/f0c05f42-ce99-4dba-92a0-223a06e8283a/morena_baccarin-2.jpeg__1200x630_q85_subsampling-2.jpg",
        movieName: "Vanessa",
        realName: "Morena Baccarin",
      },
      {
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Gina_Carano.jpg/220px-Gina_Carano.jpg",
        movieName: "Angel Dust",
        realName: "Gina Carano",
      },
      {
        imgUrl:
          "https://media.themoviedb.org/t/p/w500/AaMTvZkroI8uo5JXQiJ5pSLEgSJ.jpg",
        movieName: "Ajax",
        realName: "Ed Skrein",
      },
    ],
    imgUrl2: "https://i.makeagif.com/media/12-05-2018/bTvnY4.gif",
  },
  {
    id: "8",
    name: "Avengers",
    year: "2012",
    age: "PG-13",
    length: "2h 23m",
    genre: ["Action", "Sci-fi"],
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    about:
      "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    cast: [
      {
        imgUrl:
          "https://images.hellomagazine.com/horizon/square/ef4c1d8f1ca5-ryan-reynolds-at-premiere.jpg",
        movieName: "Deadpool",
        realName: "Ryan Reynolds",
      },
      {
        imgUrl:
          "https://media.carnegie.org/filer_public_thumbnails/filer_public/f0/c0/f0c05f42-ce99-4dba-92a0-223a06e8283a/morena_baccarin-2.jpeg__1200x630_q85_subsampling-2.jpg",
        movieName: "Vanessa",
        realName: "Morena Baccarin",
      },
      {
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Gina_Carano.jpg/220px-Gina_Carano.jpg",
        movieName: "Angel Dust",
        realName: "Gina Carano",
      },
      {
        imgUrl:
          "https://media.themoviedb.org/t/p/w500/AaMTvZkroI8uo5JXQiJ5pSLEgSJ.jpg",
        movieName: "Ajax",
        realName: "Ed Skrein",
      },
    ],
    imgUrl2:
      "https://i.pinimg.com/originals/de/11/b3/de11b30b19435cad436f74c4f252562c.gif",
  },
];

export const tabData: TabType[] = [
  { id: "1", label: "Batman" },
  { id: "2", label: "Joker" },
  { id: "3", label: "Spider-Man: Into the Spider-Verse" },
  { id: "4", label: "Spider-Man: Across the Spider-Verse" },
  { id: "5", label: "Deadpool" },
  { id: "6", label: "Logan" },
  { id: "7", label: "Venom" },
  { id: "8", label: "Avengers" },
];
