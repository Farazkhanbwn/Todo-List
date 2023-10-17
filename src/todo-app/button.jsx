import React, { useState } from "react";

function Button({ userId, deleteUser }) {
  const [disabledButton, setDisabledButton] = useState(false);

  const deleteUsers = () => {
    setDisabledButton(true);
    setTimeout(() => {
      deleteUser(userId);
      setDisabledButton(true);
    }, 2000);
  };

  return (
    <button disabled={disabledButton} onClick={deleteUsers}>
      {disabledButton ? "deleting..." : "delete"}
    </button>
  );
}

export default Button;
