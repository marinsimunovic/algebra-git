import { useState } from "react";
import Button from "../components/button";
import GalleryImg from "../assets/gallery.svg";
import FollowImg from "../assets/follow.svg";
import Guitar from "../assets/hobbies/guitar.svg";
import Book from "../assets/hobbies/book.svg";
import Camping from "../assets/hobbies/camping.svg";
import Bars from "../assets/bars.svg";
import Spotify from "../assets/spotify.svg";
type MyInfo = {
  url: string;
  name: string;
  surename: string;
  email: string;
  hobbies: {
    [name: string]: string;
  };
  insta: string;
  spotify: string;
  facebook: string;
  location: string;
  birth: string;
  phone: string;
};

const Info: MyInfo = {
  url: "https://www.toonsmag.com/wp-content/uploads/2023/04/Bart-Simpson-cartoon-686x1024.png",
  name: "Marin",
  surename: "Šimunović",
  email: "3simunovic.marin@gmail.com",
  hobbies: {
    guitar:
      "Creative Expression: The guitar offers a vast range of tones, textures, and techniques, allowing players to express themselves creatively through music. Whether composing original pieces or interpreting existing songs, the guitar provides a platform for artistic expression and personal storytelling. Emotional Outlet: Playing the guitar can be a cathartic experience, allowing musicians to channel their emotions into their music. Whether experiencing joy, sadness, love, or anger, the guitar provides a means to express and process complex feelings, serving as a therapeutic outlet for emotional release. Connection with Others: Music has a unique ability to bring people together, and playing the guitar can foster connections with fellow musicians and audiences alike. Whether jamming with friends, performing live on stage, or simply sharing songs with loved ones, playing the guitar facilitates meaningful connections and shared experiences. Personal Growth: Learning to play the guitar requires dedication, discipline, and perseverance. As players overcome challenges, master new techniques, and expand their musical repertoire, they experience personal growth and a sense of achievement. The journey of learning and improvement fosters self-confidence, resilience, and a lifelong love of learning. Escape and Relaxation: Immersing oneself in music can provide a welcome escape from the stresses and pressures of daily life. Whether strumming soothing chords or shredding energetic riffs, playing the guitar offers a form of relaxation and stress relief, transporting players to a state of flow and ,mindfulness.",
    reading:
      "reading:I love books because they are portals to infinite worlds, inviting me to embark on countless adventures without ever leaving my cozy corner. Within their pages, I discover characters who become friends, mentors, or even adversaries, each teaching me something new about the human experience. Books ignite my imagination, transporting me to distant galaxies, historical epochs, or the depths of someone's mind. They offer solace during times of loneliness, enlightenment in moments of confusion, and inspiration when my spirit needs lifting. Through books, I explore different cultures, philosophies, and perspectives, broadening my understanding of the world. The smell of aged paper and the tactile sensation of turning each page evoke a sense of nostalgia and comfort. With each book I read, I evolve, gaining insights and empathy that shape my identity. In the vast universe of literature, I find both refuge and endless possibilities, making my love for books boundless.   Moreover, books serve as timeless repositories of knowledge, capturing the wisdom of generations past and present. They are invaluable sources of information, offering me the opportunity to delve into any subject that piques my curiosity, from science and history to philosophy and art. With each turn of the page, I uncover new perspectives, challenge my assumptions, and expand my intellectual horizons. Whether I seek practical advice, profound insights, or simply a momentary escape, books are steadfast companions, ready to enlighten and enrich my life. In a world often marked by fleeting trends and superficial distractions, the enduring allure of books reminds me of the enduring power of words to inspire, educate, and transform.",
    camping:
      "I love camping because it reconnects me with the raw beauty of nature, offering a much-needed escape from the hustle and bustle of modern life. Amidst towering trees, babbling streams, and star-studded skies, I find solace and serenity. The simplicity of life outdoors strips away the distractions of technology, allowing me to immerse myself fully in the present moment. Each camping trip brings a sense of adventure, as I explore new trails, pitch tents under the open sky, and gather around crackling campfires with friends and family.Camping rejuvenates my spirit, revitalizing me with the fresh air and invigorating landscapes. Whether it's the crisp scent of pine needles, the gentle rustle of leaves in the breeze, or the symphony of nocturnal sounds, nature's sensory delights awaken my senses and instill a profound sense of awe. Far from the noise of the city, I find clarity and perspective, reflecting on life's simple pleasures and reconnecting with what truly matters.Moreover, camping fosters a deep appreciation for sustainability and environmental stewardship. As I tread lightly on the earth, practicing Leave No Trace principles and minimizing my ecological footprint, I develop a greater reverence for the delicate balance of ecosystems and the importance of preserving wilderness areas for future generations.But perhaps most importantly, camping fosters bonds of camaraderie and shared experiences. Whether swapping stories under the stars, cooking meals over a camp stove, or embarking on group hikes, the shared challenges and triumphs of outdoor adventures forge lasting memories and strengthen relationships. In the embrace of nature's grandeur, I find not only solitude but also a profound sense of connection – to the earth, to my loved ones, and to the essence of being alive.",
  },
  insta: "marinsimunovic2",
  spotify: "msimunovic",
  facebook: "Marin Šimunović",
  location: "Croatia",
  birth: "21.02.2002.",
  phone: "+0915099982",
};

const Home = () => {
  const [data] = useState<MyInfo>(Info);
  const [selectedHobby, setSelectedHobby] = useState<string>("guitar");

  const handleHobbyClick = (hobby: string) => {
    setSelectedHobby(hobby);
  };

  return (
    <>
      <div className="user-profile">
        <div className="user-profile-top">
          <div className="user-links">
            <Button>
              <a href="/vjezbe">
                <img className="bars" src={Bars} alt="" />
              </a>
            </Button>
            <div className="user-actions">
              <Button>
                <a href="https://www.tiktok.com/@skunk.bend">
                  <img className="user-img" src={Spotify} alt="" />
                </a>
              </Button>

              <Button>
                <a href="https://www.instagram.com/marinsimunovic2/">
                  <img className="user-img" src={GalleryImg} alt="" />{" "}
                </a>
              </Button>

              <Button>
                <a href="https://m.facebook.com/people/Skunk-bend/100084102875642/">
                  <img className="user-img" src={FollowImg} alt="" />{" "}
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="user">
          <div className="user-info">
            <img className="user-image" src={data.url} alt="img" />
            <div className="user-data">
              <div className="username">
                {data.name} {data.surename}
              </div>
              <div className="location">{data.location}</div>
              <div className="phone">{data.phone}</div>
              <div className="birthday">{data.birth}</div>
            </div>
          </div>
          <div className="user-cards">
            <div className="user-hobbies">
              <div className="user-hobbies-box">
                <h2>My Hobbies</h2>
                <div className="hobbies-buttons">
                  <Button onClick={() => handleHobbyClick("guitar")}>
                    <img className="hobbies-img" src={Guitar} alt="" />
                  </Button>
                  <Button onClick={() => handleHobbyClick("reading")}>
                    <img className="hobbies-img" src={Book} alt="" />
                  </Button>
                  <Button onClick={() => handleHobbyClick("camping")}>
                    <img className="hobbies-img" src={Camping} alt="" />
                  </Button>
                </div>
              </div>
              <div className="selected-hobby-details">
                {selectedHobby && <p>{data.hobbies[selectedHobby]}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
