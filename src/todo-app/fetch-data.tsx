import { useEffect, useState } from "react";
import AddUser from "./add-user";

export interface Product {
  id: string;
  name: string;
  price: string;
}

function FetchData() {
  const [product, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [userId, setUserId] = useState<string | null>(null);

  const disabledButton = false;

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    fetch("https://64ea220cbf99bdcc8e6757fe.mockapi.io/product")
      .then((response) => response.json())
      .then((data: Product[]) => {
        setProducts(data);
      });
  };

  const deleteUserData = (id: string) => {
    fetch(`https://64ea220cbf99bdcc8e6757fe.mockapi.io/product/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((response) => {
        console.log(response);
      });
    });
    setProducts([...product]);
  };

  const updateUser = () => {
    const item = { name, price, userId };
    fetch(`https://64ea220cbf99bdcc8e6757fe.mockapi.io/product/${userId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((result) => {
        return result.json();
      })
      .then((response) => {
        console.log(response);
        setProducts([...product]);
      });
  };

  function selectUser(id: string) {
    const item = product.filter((item) => item.id === id);
    setName(item[0].name);
    setPrice(item[0].price);
    setUserId(item[0].id);
  }

  function DelteUser(id: string) {
    // deleteUserData(id);
    // const item = product.filter((item) => item.id === id);
  }

  const updateProduct = (products: Product[]) => {
    setProducts(products);
  };

  return (
    <div>
      <AddUser handleProduct={updateProduct} />

      <h3>User Information</h3>
      <table border={1} cellPadding={5}>
        <tbody>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Price</td>
            <td>Operations</td>
          </tr>

          {product.map((user, key) => (
            <tr key={key}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.price}</td>
              <td>
                <button id={user.id} onClick={() => DelteUser(user.id)}>
                  {disabledButton ? "deleting..." : "delete"}
                </button>
              </td>
              <td>
                <button onClick={() => selectUser(user.id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Update Form</h3>

      <input
        type="text"
        value={name}
        placeholder="Enter Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        value={price}
        placeholder="Enter Price"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <input type="submit" value={"Update"} onClick={updateUser} />
    </div>
  );
}

export default FetchData;
