function CartItem({ cartItem, removeFromCart }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{cartItem.title}</div>
        {cartItem.price}
      </div>
      <button
        onClick={() => {
          removeFromCart(cartItem);
        }}
        className="badge bg-primary rounded-pill"
      >
        X
      </button>
    </li>
  );
}

export default CartItem;
