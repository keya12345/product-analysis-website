import "./Item.css";

const Item = ({ dress }) => {
  return (
    <div className="dressItem">
      <img src={dress.image} alt="" />
      <p className="text-2xl">name:{dress.name}</p>
      <p>review:{dress.details}</p>
      <p className="text-xl">Ratting:{dress.rating}</p>
    </div>
  );
};

export default Item;
