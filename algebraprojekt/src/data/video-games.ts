export type GameType = {
  imgUrl: string;
  imgUrl2: string;
  name: string;
  id: string;
  about: string;
};

export const gamesData: GameType[] = [
  {
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png",
    name: "GTA 5",
    id: "gta-5",
    about:
      "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008's Grand Theft Auto IV, and the fifteenth instalment overall.",
    imgUrl2:
      "https://assets.xboxservices.com/assets/0b/17/0b179504-412d-4af7-9e00-3e3d92633577.jpg?n=GTA-V_GLP-Page-Hero-1084_1920x1080.jpg",
  },
  {
    imgUrl:
      "https://images.squarespace-cdn.com/content/v1/54c566cbe4b0f7430cbc6a73/1609671466785-4ABMCKBHYHHMI1NH9RPW/Cyberpunk+2077-01.jpg",
    name: "Cyberpunk 2077",
    id: "Cyberpunk",
    about:
      "Cyberpunk 2077 is a 2020 action role-playing video game developed by CD Projekt Red and published by CD Projekt, and based on Mike Pondsmith's Cyberpunk tabletop game series. The plot is set in the fictional metropolis of Night City, California, within the dystopian Cyberpunk universe.",
    imgUrl2:
      "https://www.cyberpunk.net/build/images/social-thumbnail-en-ddcf4d23.jpg",
  },
  {
    imgUrl:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTJGm-_E6Q1gD0HmglrtSEl1cWIyla1iCgHeRq9UPSwFnuvR_T3",
    name: "Red Dead Redemption 2",
    id: "Red-Dead-Redemption",
    about:
      "Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. The game is the third entry in the Red Dead series and a prequel to the 2010 game Red Dead Redemption.",
    imgUrl2:
      "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg?t=1695140956",
  },
];
