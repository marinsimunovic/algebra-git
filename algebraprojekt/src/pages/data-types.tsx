import { useState } from "react";
import Button from "../components/button";

type ProfileType = {
  name: string;
  lastName: string;
  age: number;
  gender: boolean;
  profilePicture?: string;
};

type BookType = {
  title: string;
  author: string;
  pages: number;
  hardCovers: boolean;
};

const defaultProfileValues: ProfileType = {
  age: 22,
  gender: false,
  lastName: "Simunovic",
  name: "Marin",
  profilePicture:
    "https://pbs.twimg.com/profile_images/1572397599323291649/W8RTbXWI_400x400.jpg",
};

const DataTypes = () => {
  //spredamo podatke sa ... npr ...profile
  //muteable znaci da se moze mjenjat
  //kad debagiramo console.log
  //ternarnim operatorima provjeravamo stanja
  //string=ispisujemo? ako je slucajo prazan arr u name
  const [name, setName] = useState<string>("");
  //arr string ,provjeravamo lenght jel imamo nesto il nemamo
  const [names, setNames] = useState<string[]>(["Marin", "Ivan"]);
  //numbeer
  const [homeNumber, setHomeNumber] = useState<number>(8);
  //arr numbers korisiti petlju da prodemo kroz sve podatke i mapiramo sve di nema 1
  const [grades, setGrades] = useState<number[]>([8, 3, 5, 1, 1, 1, 1]);
  //object mora biti profileType = moramo novu varijablu dodat i u nju dodat ProfileType iznad
  const [profile, setProfile] = useState<ProfileType>(defaultProfileValues);
  //ili postojece ili prazan arr
  const [books, setBooks] = useState<BookType[]>([]);
  //boolean pormjena spola cim je kompliciranije moramo napravit novu varijablu i njoj podijeliti
  const [wc, setWc] = useState<boolean>(false);

  const plasticSurgery = () => {
    const newState: ProfileType = {
      ...profile,
      gender: !profile.gender,
    };

    setProfile(newState);
  };

  const addBook = () => {
    const newState: BookType[] = [
      {
        title: "Petar Pan",
        author: "Nemam pojma",
        hardCovers: false,
        pages: 30,
      },
    ];
    setBooks(newState);
  };

  return (
    <>
      <h1>String</h1>
      <div>{name ? name : "Trenutno ime ne postoji. Molimo dodajte ime."}</div>
      <Button
        onClick={() => {
          setName("Igor");
        }}
      >
        Change name
      </Button>
      <hr />
      <h1>Array stringova</h1>
      <div>
        {names.length > 0
          ? names.map((name, index) => {
              return <div key={index}>{name}</div>;
            })
          : "Nema imena u ovom nizu. Dodajte bar jedno ime kako bi ga vidjeli."}
        <Button
          onClick={() => {
            const newState = [...names, "Igor", "Gabrijel", "Mario"];
            setNames(newState);
          }}
        >
          Change names
        </Button>
      </div>
      <hr />
      <h1>Number</h1>
      <div>
        {homeNumber > 0
          ? homeNumber
          : "Kućni broj ne može biti nula ili manji od nule."}
        <Button onClick={() => setHomeNumber(50)}>Change home number</Button>
      </div>
      <hr />
      <h1>Array brojeva</h1>
      <div>
        {grades.length > 0
          ? grades.map((grade, index) => {
              return <div key={index}>{grade > 0 && grade < 6 && grade}</div>;
            })
          : "Nema ocjena"}
        <Button
          onClick={() => {
            let newState: number[] = [];

            grades.forEach((grade) => {
              if (grade > 1) {
                newState.push(grade);
              }
            });
            setGrades(newState);
          }}
        >
          Obriši sve jedinice
        </Button>
      </div>
      <hr />
      <h1>Objekt</h1>
      <div>
        {profile.profilePicture ? (
          <img width={30} src={profile.profilePicture} alt="Profile picture" />
        ) : undefined}

        <div>
          {profile.name}&nbsp;{profile.lastName},{profile.age}
        </div>
        <div>{!profile.gender ? "♀️" : "♂️"}</div>
        <Button onClick={() => plasticSurgery()}>Change gender</Button>
      </div>
      <hr />
      <h1>Array objekata</h1>
      <div>
        {books.length > 0
          ? books.map((book) => {
              return (
                <>
                  <div key={book.title}>
                    {book.title}, {book.author}
                    <div>broj stranica: {book.pages}</div>
                    <div>tvrde korice: {book.hardCovers ? "da" : "ne"}</div>
                  </div>
                </>
              );
            })
          : "Trenutno ne postoji niti jedna knjiga za prikaz"}
        <Button onClick={addBook}>Dodaj knjigu</Button>
      </div>
      <hr />
      <h1>Boolean</h1>
      <div>{wc ? "ima ga" : "nema ga"}</div>
      <Button
        onClick={() => {
          setWc(!wc);
        }}
      >
        Call Toi Toi
      </Button>
    </>
  );
};

export default DataTypes;
