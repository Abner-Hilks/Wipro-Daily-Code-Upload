async function generateInvoice(order) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Invoice generated for Order #${order.id}`);
    }, 1000);
  });
}

async function run() {
  const invoice = await generateInvoice({ id: 101 });
  console.log(invoice);
}

run();
