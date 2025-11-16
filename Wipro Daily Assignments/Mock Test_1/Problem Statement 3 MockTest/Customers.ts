// Customers.ts
// User Story 3 — Customer Registration & Management Module
// Loads customer data only after clicking the "Load Customers" button

// 🔹 Enum for Customer Type
enum CustomerType {
  Regular = "Regular",
  Premium = "Premium",
  VIP = "VIP"
}

// 🔹 Tuple type for contact info
type ContactInfo = [string, string]; // [email, phone]

// 🔹 Interface for base person
interface IPerson {
  id: number;
  name: string;
}

// 🔹 Interface for Customer (extends Person)
interface ICustomer extends IPerson {
  type: CustomerType;
  contact: ContactInfo;
}

// 🔹 Custom Decorator for logging method execution
function LogExecution(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`🟢 Executing: ${propertyKey}`);
    const result = originalMethod.apply(this, args);
    console.log(`✅ Completed: ${propertyKey}`);
    return result;
  };
  return descriptor;
}

// 🔹 Base class for all users
class Person implements IPerson {
  constructor(public id: number, public name: string) {}
}

// 🔹 Derived class for managing customers
class Customer extends Person implements ICustomer {
  constructor(
    id: number,
    name: string,
    public type: CustomerType,
    public contact: ContactInfo
  ) {
    super(id, name);
  }
}

// 🔹 Class that manages all customers
class CustomerManager implements Iterable<Customer> {
  private customers: Customer[] = [];

  @LogExecution
  registerCustomer(customer: Customer): void {
    this.customers.push(customer);
  }

  @LogExecution
  listCustomers(): Customer[] {
    return this.customers;
  }

  [Symbol.iterator](): Iterator<Customer> {
    let index = 0;
    const data = this.customers;
    return {
      next(): IteratorResult<Customer> {
        return index < data.length
          ? { value: data[index++], done: false }
          : { value: undefined, done: true };
      }
    };
  }
}

// 🔹 Initialize Manager (no registration yet)
const manager = new CustomerManager();

// 🔹 Load Data on Button Click
function loadCustomers() {
  console.log("📋 Loading Registered Customers...");

  // Register customers only when button is clicked
  manager.registerCustomer(new Customer(1, "Arpit Mahalle", CustomerType.Premium, ["arpit@example.com", "9876543210"]));
  manager.registerCustomer(new Customer(2, "Sarthak Auti", CustomerType.Regular, ["sarthak@example.com", "9988776655"]));
  manager.registerCustomer(new Customer(3, "Anish Awalgaonkar", CustomerType.VIP, ["anish@example.com", "9123456789"]));

  const listContainer = document.getElementById("customerList");
  if (!listContainer) return;

  listContainer.innerHTML = [...manager]
    .map(
      (c) => `
      <li class="list-group-item">
        <strong>${c.name}</strong> [${c.type}]<br>
        <small>${c.contact[0]} | ${c.contact[1]}</small>
      </li>`
    )
    .join("");
}

// 🔹 Add event listener to button
document.getElementById("loadBtn")?.addEventListener("click", loadCustomers);
