import { memo, useRef } from "react";
import { Product } from "./fetch-data";

interface AddUserProps {
  handleProduct: (prev: Product[]) => void;
}

function AddUser(props: AddUserProps) {
  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);

  const postUserData = () => {
    if (nameRef.current && priceRef.current) {
      fetch("https://64ea220cbf99bdcc8e6757fe.mockapi.io/product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          createdAt: new Date().toLocaleString() + "",
          name: nameRef.current.value,
          price: priceRef.current.value,
        }),
      });
    }
  };

  console.log("component Rerendered");

  const submitValue = () => {
    if (nameRef.current && nameRef.current.value !== "") {
      postUserData();
      // props.handleProduct((prev) => [{ ...prev }]);
    }
  };

  return (
    <>
      <h3>Create Users</h3>
      <input type="text" placeholder="Enter Name" ref={nameRef} />
      <br />
      <br />
      <input type="text" placeholder="Enter Price" ref={priceRef} />
      <br />
      <br />
      <input type="submit" onClick={submitValue} />
    </>
  );
}

export default memo(AddUser);
