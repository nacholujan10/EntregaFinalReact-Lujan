import React from "react";
import { Link } from "react-router-dom";

function Item({ item }) {
  return (
    <div>
      <Link to={`/item/${item.id}`}>{item.name}</Link>
    </div>
  );
}

export default Item;
