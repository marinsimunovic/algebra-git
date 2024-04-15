export type GameType = {
  imgUrl: string;
  imgUrl2: string;
  name: string;
  id: string;
  about: string;
  developer: string;
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
    developer: "Rockstar Games",
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
    developer: "CD Projekt Red",
  },
  {
    imgUrl:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTJGm-_E6Q1gD0HmglrtSEl1cWIyla1iCgHeRq9UPSwFnuvR_T3",
    name: "Red Dead Redemption 2",
    id: "Red-Dead-Redemption",
    about:
      "Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. The game is the third entry in the Red Dead series and a prequel to the 2010 game Red Dead Redemption.",
    imgUrl2:
      "https://i.ytimg.com/vi/Dw_oH5oiUSE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLARdodn8pEEtevrHTKm5FJnYsC0EQ",
    developer: "Rockstar Games",
  },
  {
    imgUrl:
      "https://static.posters.cz/image/750/posteri/resident-evil-4-woods-i3528.jpg",
    name: "Resident Evil 4",
    id: "Resident-Evil-4",
    about:
      "Resident Evil 4 je survival horror pucačina u trećem licu koju je razvio Capcom Production Studio 4, a koju su izdali mnogi izdavači, među njima Capcom, Ubisoft, australski Nintendo, Red Ant Enterprises i THQ. Ovo je 6. igra u seriji Resident Evil.",
    imgUrl2:
      "https://www.residentevil.com/re4/assets/images/separateways-gameplay_img01.jpg",
    developer: "Capcom Production Studio 4",
  },
  {
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/hr/5/51/Minecraft_cover.png",
    name: "Minecraft",
    id: "Minecraft",
    about:
      "Minecraft je sandbox videoigra koju je razvio Mojang Studios. Igru je kreirao švedski programer Markus »Notch« Persson programskim jezikom Java. Nakon nekoliko ranih verzija zatvorenih za javnost, prvi je put objavljena u svibnju 2009. godine, prije nego što je u potpunosti objavljena u studenom 2011. Minecraft je postao najprodavanija videoigra u povijesti, s 300 milijuna prodanih kopija i 140 milijuna aktivnih igrača mjesečno na različitim platformama. ",
    imgUrl2:
      "https://www.minecraft.net/content/dam/games/minecraft/screenshots/Mangrove_Biome_2.png",
    developer: "Mojang",
  },
  {
    imgUrl:
      "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png",
    name: "God of War",
    id: "God of War",
    about:
      "God of War je fantastična akcijsko-avanturistička franšiza koju je kreirao David Jaffe, a razvio Santa Monica Studio. Počela je 2005. za konzolu za videoigre PlayStation 2 i postala je vodeća serija za PlayStation, koja se sastoji od devet nastavaka na više platformi.",
    imgUrl2: "https://cdn.mos.cms.futurecdn.net/pxbyFXWMuhZDEJqTDCtv8f.jpeg",
    developer: "Santa Monica Studio",
  },
];
