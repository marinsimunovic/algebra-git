import React, { useEffect, useState } from "react";

type PhoneType = {
  brand: string;
  model: string;
  storage: string;
  id: string;
  color: string;
  price: number;
};

const Phones = () => {
  const [data, setData] = useState<PhoneType[]>([]);

  const getData = () => {
    fetch("http://localhost:3000/phones")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok");
      })
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const putData = () => {
    const fakeData: PhoneType = {
      brand: "asd",
      color: "asd",
      id: "5364",
      model: "asdg",
      price: 325423,
      storage: "afjgnr",
    };

    fetch("http://localhost:3000/phones", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fakeData),
    });
  };

  const deleteData = () => {
    const toDelete = "5364";
    fetch(`http://localhost:3000/phones/${toDelete}`, { method: "DELETE" });
  };

  const editData = () => {
    const toEdit = "5364";
    const fakeData: PhoneType = {
      brand: "asd",
      color: "asd",
      id: "5364",
      model: "asdg",
      price: 325423,
      storage: "afjgnr",
    };
    fetch(`http://localhost:3000/phones/${toEdit}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fakeData),
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div></div>
      <div>
        <button onClick={putData}>Add Phone</button>{" "}
        <button onClick={deleteData}>Delete Phone</button>{" "}
        <button onClick={editData}>Edit Phone</button>
      </div>
    </>
  );
};

export default Phones;
