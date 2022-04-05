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
      <div className="grid grid-cols-3 gap-2  ">
        {dress.map((item) => (
          <Item dress={item} key={item.id}></Item>
        ))}
      </div>
    </dressReview.Provider>
  );
};

export default Review;
