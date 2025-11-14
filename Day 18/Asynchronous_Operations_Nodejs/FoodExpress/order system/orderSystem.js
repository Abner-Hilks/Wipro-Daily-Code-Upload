function fetchOrder(orderId, callback) {
  console.log("Fetching order...");
  setTimeout(() => {
    callback(null, { id: orderId, item: "Pizza", price: 250 });
  }, 1000);
}

function processPayment(order) {
  console.log("Processing payment...");
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Payment successful: ₹${order.price}`), 1000);
  });
}

async function generateInvoice(order) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Invoice for Order #${order.id}`);
    }, 1000);
  });
}

fetchOrder(101, (err, order) => {
  if (err) return console.error(err);

  console.log("Order Fetched:", order);

  processPayment(order)
    .then(async (msg) => {
      console.log(msg);
      const invoice = await generateInvoice(order);
      console.log(invoice);
      console.log("\nOrder processing completed!");
    })
    .catch(console.error);
});
