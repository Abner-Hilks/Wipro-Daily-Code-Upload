function processPayment(order) {
  console.log("Processing payment...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const ok = true; // we can change to false to test failure
      if (ok) resolve(`Payment processed for ₹${order.price}`);
      else reject("Payment failed");
    }, 1500);
  });
}

processPayment({ price: 250 })
  .then(msg => console.log(msg))
  .catch(err => console.error(err));
