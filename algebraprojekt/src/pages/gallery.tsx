import { useState } from "react";
import Arrow from "../assets/arrow.svg";
type ImageInfo = {
  url: string;
  name: string;
  size: string;
};

const imgInfo: ImageInfo[] = [
  {
    url: "https://source.unsplash.com/random",
    name: "slika1",
    size: "400x200px",
  },
  {
    url: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "slika2",
    size: "400x200px",
  },
  {
    url: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2111&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "slika3",
    size: "400x200px",
  },
  {
    url: "https://source.unsplash.com/random/car",
    name: "slika4",
    size: "400x200px",
  },
  {
    url: "https://source.unsplash.com/random/fruit",
    name: "slika5",
    size: "400x200px",
  },
  {
    url: "https://source.unsplash.com/random/art",
    name: "slika6",
    size: "400x200px",
  },
  {
    url: "https://source.unsplash.com/random/wallpaper",
    name: "slika7",
    size: "400x200px",
  },
  {
    url: "https://source.unsplash.com/random/color",
    name: "slika8",
    size: "400x200px",
  },
];

const Gallery = () => {
  const [data, setData] = useState<ImageInfo[]>(imgInfo);
  const [activeItem, setActiveItem] = useState<ImageInfo | null>(null);

  const handleActiveItem = (image: ImageInfo) => {
    setActiveItem(image);
  };

  const handleDelete = (name: string) => {
    const newState = data.filter((item) => item.name !== name);
    setData(newState);
  };

  return (
    <>
      <a href="/vjezbe">
        <img className="back" src={Arrow} alt="arrow" />
      </a>
      <h1>Gallery</h1>
      <hr />
      <div className="gallery">
        {data.map((image) => {
          return (
            <img
              onClick={() => handleActiveItem(image)}
              className="gallery__img"
              key={image.name}
              src={image.url}
              alt={image.name}
            />
          );
        })}
      </div>
      {activeItem && (
        <>
          <div className="gallery__modal">
            <div
              className="gallery__delete"
              onClick={() => {
                handleDelete(activeItem.name);
                setActiveItem(null);
              }}
            >
              Delete
            </div>
            <div className="gallery__close" onClick={() => setActiveItem(null)}>
              Close
            </div>
            <div className="gallery__info">
              <div>Name: {activeItem.name}</div>
              <div>Size: {activeItem.size}</div>
            </div>
            <img src={activeItem.url} alt={activeItem.name} />
          </div>
          <div
            className="gallery__overlay"
            onClick={() => setActiveItem(null)}
          ></div>
        </>
      )}
    </>
  );
};

export default Gallery;
