function ListItem({ title, quantity }) {
  return (
    <div className="flex justify-between">
      <a>{title}</a>
      <a>{quantity}</a>
    </div>
  );
}

export default ListItem;
