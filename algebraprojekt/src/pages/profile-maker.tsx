import { MutableRefObject, useRef, useState } from "react";
import Tag from "../components/tag";
import Button from "../components/button";

const ProfileMaker = () => {
  const [name, setName] = useState("Marin Simunovic");
  const [tags, setTags] = useState<string[]>([]);

  const inputRef = useRef(null);

  const addTag = (input: MutableRefObject<HTMLInputElement | null>) => {
    if (input.current) {
      const newTag = input.current.value;
      setTags([...tags, newTag]);
      input.current.value = "";
    }
  };

  return (
    <>
      <div className="profile">
        <div className="profile__card">
          <img
            className="profile__card__img"
            src="https://images.unsplash.com/photo-1710646434776-777e5fc59e64?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile picture"
          />
          <div className="profile__card__name">{name}</div>
          <div className="tag__wrapper mt-4">
            {tags.map((tag, index) => {
              return <Tag key={index}>{tag}</Tag>;
            })}
          </div>
        </div>
        <div className="profile__form">
          <div className="field">
            <label className="field__label" htmlFor="name">
              Name
            </label>
            <input
              className="input"
              defaultValue="Marin Simunovic"
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
            />
          </div>
          <div className="field">
            <label htmlFor="name" className="field__label">
              Tags
            </label>
            <div className="field__group">
              <input className="input" ref={inputRef} type="text" id="name" />
              <Button
                className="button"
                onClick={() => {
                  addTag(inputRef);
                }}
              >
                ADD
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileMaker;
