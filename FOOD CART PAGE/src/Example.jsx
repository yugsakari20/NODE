import React from 'react'

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Chinese Samosa',
      note: "Very spicy",
      price: 25,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Italian Pizza',
      note: "No Mushrooms + green peppers",
      price: 699,
      quantity: 1,
    },
    { id: 3, name: "Coke Coca Cola", note: "Diet", price: 200, quantity: 2 },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleDelete = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = 3.0;
  const deliveryFee = 2.5;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="max-w-md mx-auto my-6 bg-white shadow-lg rounded-xl p-4">
      <h2 className="text-xl font-bold mb-4 text-green-800">🛒 My Basket</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 mb-4">Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-start justify-between border-b py-3"
          >
            <div>
              <p className="font-semibold">{item.name}</p>
              {item.note && (
                <p className="text-sm text-gray-600">{item.note}</p>
              )}

              <div className="flex items-center mt-1 gap-2">
                <IconButton
                  size="small"
                  onClick={() => handleQuantityChange(item.id, -1)}
                >
                  <RemoveIcon fontSize="small" />
                </IconButton>
                <span className="text-sm">{item.quantity}</span>
                <IconButton
                  size="small"
                  onClick={() => handleQuantityChange(item.id, 1)}
                >
                  <AddIcon fontSize="small" />
                </IconButton>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <p className="font-semibold">
                ₹{(item.price * item.quantity).toFixed(2)}
              </p>
              <IconButton
                size="small"
                color="error"
                onClick={() => handleDelete(item.id)}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </div>
          </div>
        ))
      )}

      {cartItems.length > 0 && (
        <>
          <div className="mt-4 space-y-2 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>Sub Total:</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Discounts:</span>
              <span className="text-red-600">-₹{discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee:</span>
              <span>₹{deliveryFee.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-4 bg-yellow-400 rounded-lg p-3 flex justify-between font-bold text-lg">
            <span>Total to pay</span>
            <span>₹{total.toFixed(2)}</span>
          </div>

          <div className="mt-4">
            <Button fullWidth variant="outlined" className="mb-2">
              Choose your free item
            </Button>
            <TextField
              fullWidth
              label="Apply Coupon Code"
              variant="outlined"
              size="small"
            />
          </div>

          <div className="mt-4 flex gap-2">
            <Button
              fullWidth
              startIcon={<LocalShippingIcon />}
              variant="outlined"
              color="success"
            >
              Delivery
            </Button>
            <Button
              fullWidth
              startIcon={<StoreIcon />}
              variant="outlined"
              color="success"
            >
              Collection
            </Button>
          </div>

          <Button className="mt-4" fullWidth variant="contained" color="success">
            Checkout!
          </Button>
        </>
      )}
    </div>
  );
}

export default CartPage;