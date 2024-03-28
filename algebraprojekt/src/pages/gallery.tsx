import { useState } from "react";

type ImageInfo = {
  url: string;
  name: string;
  size: string;
};

const Gallery = () => {
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

  const [selectedImage, setSelectedImage] = useState<ImageInfo | null>(null);

  const handleImageClick = (image: ImageInfo) => {
    if (selectedImage && selectedImage.url === image.url) {
      setSelectedImage(null);
    } else {
      setSelectedImage(image);
    }
  };

  return (
    <>
      <div className="image-gallery">
        {imgInfo.map((image, index) => (
          <div
            key={index}
            className={`image-container ${
              selectedImage && selectedImage.url === image.url ? "selected" : ""
            }`}
            onClick={() => handleImageClick(image)}
          >
            <img src={image.url} alt={image.name} className="slika" />
            {selectedImage && selectedImage.url === image.url && (
              <div className="image-info-card">
                <h2>{image.name}</h2>
                <p>Size: {image.size}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
