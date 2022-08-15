function Card({ item, cart, addToCart }) {
  return (
    <div className="col-lg-4 mt-2">
      <div className="card" style={{ width: "15rem" }}>
        <img
          src="https://picsum.photos/200/150"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <h6>{item.price}</h6>
          <p className="card-text">This was a nice product.</p>
          <button
            disabled={cart.some((obj) => obj.id === item.id)}
            onClick={() => {
              addToCart(item);
            }}
            className="btn btn-primary"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
