import Item from "./Item";

const FoodItems = ({ items }) => {
  return (
    <ul class="list-group">
      {items.map((item) => (
        <Item key={item} food={item}></Item>
      ))}
    </ul>
  );
};
export default FoodItems;
