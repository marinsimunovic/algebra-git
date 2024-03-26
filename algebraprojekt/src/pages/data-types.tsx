import { useState } from "react";
import Button from "../components/button";
type ProfileType = {
  name: string;
  lastname: string;
  age: number;
  gender: boolean;
  profilePicture?: string;
};

type BookType = {
  title: string;
  author: string;
  pages: number;
  hardCover: boolean;
};

const DataTypes = () => {
  const defaultPropertyVales: ProfileType = {
    age: 22,
    gender: true,
    name: "marin",
    lastname: "simunovic",
  };
  //ternarnim operatorima provjeravamo stanja
  //string=ispisujemo? ako je slucajo prazan arr u name
  const [name, setName] = useState<string>("");
  //arr string ,provjeravamo lenght jel imamo nesto il nemamo
  const [names, setNames] = useState<string[]>(["Marin", "Ivan"]);
  //numbeer
  const [homeNumber, setHomeNumber] = useState<number>(8);
  //arr numbers korisiti petlju da prodemo kroz sve podatke i mapiramo sve di nema 1 
  const [grades, setGrades] = useState<number[]>([8, 3, 5,1,1,1,1]);
  //object mora biti profileType = moramo novu varijablu dodat i u nju dodat ProfileType iznad
  const [profile, setProfile] = useState<ProfileType>(defaultPropertyVales);
  //ili postojece ili prazan arr
  const [books, setBooks] = useState<BookType[]>([]);
  //boolean
  const [wc, setWc] = useState<boolean>(false);

  return (
    <>
      <>
        <h1>String</h1>

        <div>{name ? name : "Trenutno ime nepostoji.molimo dodajte."}</div>
        <Button
          onClick={() => {
            setName("Igor");
          }}
        >
          Change name
        </Button>
        <hr />
        <h1>Arr Stringova</h1>
        <div>
          {names.length > 0
            ? names.map((name, index) => {
                return <div key={index}> {name}</div>;
              })
            : "nema imena upisi"}
        </div>

        <Button onChange={()=>{setNames(["marin","luka","marko"])}}></Button>
        <h1>number</h1>

        <div>
          {homeNumber > 0 ? homeNumber : "broj nemoze bit u minusu ili 0"}
        </div> <Button
          onClick={() => {
            setHomeNumber(45);
          }}
        ><Button/>

        <h1>arr numbers</h1>
        <div>
          {grades.length > 0
            ? grades.map((grade, index) => {
                return (
                  <div key={index}> {grade > 0 && grade < 6 && grade}</div>
                );
              })
            : "nema ocjena"}
            <Button    onClick={() => { 
                
                let newState:number[]=[]
            grades.forEach((grade) => {
                if (grade > 1) {
                  return grade;
                }
              });
            }}
          >Obrisi sve 1</Button>
        </div>

        <h1>Objekt</h1>
        <div>
          {profile.profilePicture ? (
            <img src={profile.profilePicture} alt="Profilepic" />
          ) : (
            ""
          )}
          ;
        </div>
        <div>{profile.name}</div>
      </>
      </>
      <h1>Arr objekata</h1>
      <div>
        {books.length > 0
          ? books.map((book) => {
              return (
                <>
                  <div key={book.title}>
                    {book.title},{book.author}
                  </div>
                </>
              );
            })
          : "trenutno nema knjiga"}
      </div>
    </>
  );
};

export default DataTypes;
