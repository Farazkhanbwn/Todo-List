import React, { memo, useRef, useState } from "react";

function DeleteUser({ name, id, price, keyValue, deleteUser, selectUser }) {
  const [disabledButton, setDisabledButton] = useState(false);
  let disableRef = useRef();

  function deletePerson() {
    // console.log((disableRef.disabled = true));
    setDisabledButton(true);
    setTimeout(() => {
      setDisabledButton(false);
    }, 2000);
    deleteUser(id);
  }
  console.log("delete user component Rendered");

  return (
    <>
      <tr key={keyValue}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{price}</td>
        <td>
          <button
            ref={disableRef}
            id={id}
            disabled={disabledButton}
            onClick={() => deletePerson()}
          >
            {disabledButton ? "deleting..." : "delete"}
          </button>
        </td>
        <td>
          <button onClick={() => selectUser(id)}>Update</button>
        </td>
      </tr>
      {/* ) */}
    </>
  );
}

export default memo(DeleteUser);
