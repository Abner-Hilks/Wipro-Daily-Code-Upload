"use strict";
// Customers.ts
// User Story 3 — Customer Registration & Management Module
// Loads customer data only after clicking the "Load Customers" button
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a;
// 🔹 Enum for Customer Type
var CustomerType;
(function (CustomerType) {
    CustomerType["Regular"] = "Regular";
    CustomerType["Premium"] = "Premium";
    CustomerType["VIP"] = "VIP";
})(CustomerType || (CustomerType = {}));
// 🔹 Custom Decorator for logging method execution
function LogExecution(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`🟢 Executing: ${propertyKey}`);
        const result = originalMethod.apply(this, args);
        console.log(`✅ Completed: ${propertyKey}`);
        return result;
    };
    return descriptor;
}
// 🔹 Base class for all users
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
// 🔹 Derived class for managing customers
class Customer extends Person {
    constructor(id, name, type, contact) {
        super(id, name);
        this.type = type;
        this.contact = contact;
    }
}
// 🔹 Class that manages all customers
class CustomerManager {
    constructor() {
        this.customers = [];
    }
    registerCustomer(customer) {
        this.customers.push(customer);
    }
    listCustomers() {
        return this.customers;
    }
    [Symbol.iterator]() {
        let index = 0;
        const data = this.customers;
        return {
            next() {
                return index < data.length
                    ? { value: data[index++], done: false }
                    : { value: undefined, done: true };
            }
        };
    }
}
__decorate([
    LogExecution
], CustomerManager.prototype, "registerCustomer", null);
__decorate([
    LogExecution
], CustomerManager.prototype, "listCustomers", null);
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
    if (!listContainer)
        return;
    listContainer.innerHTML = [...manager]
        .map((c) => `
      <li class="list-group-item">
        <strong>${c.name}</strong> [${c.type}]<br>
        <small>${c.contact[0]} | ${c.contact[1]}</small>
      </li>`)
        .join("");
}
// 🔹 Add event listener to button
(_a = document.getElementById("loadBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", loadCustomers);
