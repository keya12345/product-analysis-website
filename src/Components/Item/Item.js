import React from "react";

const Item = ({ dress }) => {
  return (
    <div>
      <h1>name:{dress.name}</h1>
      <img src="{image}" alt="" />
    </div>
  );
};

export default Item;
