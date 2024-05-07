import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export type PhoneType = {
  id: string;
  brand: string;
  model: string;
  storage: string;
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
        throw new Error("Failed to fetch data");
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteData = (id: string) => {
    fetch(`http://localhost:3000/phones/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          getData(); // Move this inside if block
        }
        throw new Error("Failed to delete data");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const editData = (id: string, values: PhoneType) => {
    fetch(`http://localhost:3000/phones/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to update data");
        }
        return res.json();
      })
      .then(() => {
        getData(); // Move this inside if block
      })
      .catch((err) => {
        console.log("Error updating data:", err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <strong>
          {" "}
          <NavLink to={"new"}>Add new phone</NavLink>
        </strong>
      </div>
      <hr />
      <div>
        <table>
          <thead>
            <tr>
              <th>Brand</th>
              <th>Model</th>
              <th>Storage</th>
              <th>Color</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((phone) => {
              const { brand, color, id, model, price, storage } = phone;
              return (
                <tr key={id}>
                  <td>{brand}</td>
                  <td>{model}</td>
                  <td>{storage}</td>
                  <td>{color}</td>
                  <td>{price}</td>
                  <td>
                    <button onClick={() => deleteData(id)}>Delete</button>
                    <button onClick={() => editData(id, phone)}>Edit</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Phones;
