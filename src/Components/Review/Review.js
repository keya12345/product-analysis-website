import React, { createContext, useEffect, useState } from "react";
import Item from "../Item/Item";

export const dressReview = createContext("dress");
const Review = () => {
  const [dress, setDress] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setDress(data));
  }, []);
  return (
    <dressReview.Provider value={dress}>
      <div>
        <h1>{dress.length}</h1>
        {dress.map((item) => (
          <Item dress={dress}></Item>
        ))}
      </div>
    </dressReview.Provider>
  );
};

export default Review;
