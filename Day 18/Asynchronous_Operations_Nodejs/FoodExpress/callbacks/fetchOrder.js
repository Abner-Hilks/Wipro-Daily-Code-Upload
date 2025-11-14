function fetchOrder(orderId, callback) {
  console.log("Fetching order details...");

  setTimeout(() => {
    const order = { id: orderId, item: "Sandwich", price: 250 };

    const error = false; //  we can change it to true to test error
    if (error) callback("Order not found", null);
    else callback(null, order);
  }, 1500);
}

fetchOrder(101, (err, order) => {
  if (err) return console.error(err);
  console.log("Order fetched:", order);
});
