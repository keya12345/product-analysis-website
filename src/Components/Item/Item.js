import "./Item.css";
import Home from "../Home/Home";
const Item = ({ dress }) => {
  return (
    <div className="dressItem">
      <Home dress={dress} key={dress.id}></Home>
      <img src={dress.image} alt="" />
      <p className="text-2xl">name:{dress.name}</p>
      <p>review:{dress.details}</p>
      <p className="text-xl">Ratting:{dress.rating}</p>
    </div>
  );
};

export default Item;
