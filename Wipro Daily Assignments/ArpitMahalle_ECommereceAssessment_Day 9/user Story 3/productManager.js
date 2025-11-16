"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Enum for Product Categories
var Category;
(function (Category) {
    Category["ELECTRONICS"] = "Electronics";
    Category["FASHION"] = "Fashion";
    Category["GROCERY"] = "Grocery";
    Category["HOME"] = "Home";
})(Category || (Category = {}));
// Decorator to log price or stock changes
function LogChanges(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Change Triggered: ${propertyKey}, Arguments:`, args);
        return originalMethod.apply(this, args);
    };
}
// Product Class Implementing Interface
class Product {
    constructor(id, name, category, price, stock) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.stock = stock;
    }
    updatePrice(newPrice) {
        this.price = newPrice;
        console.log(`Updated Price: ${this.name} → ₹${this.price}`);
    }
    updateStock(newStock) {
        this.stock = newStock;
        console.log(`Updated Stock: ${this.name} → ${this.stock}`);
    }
}
__decorate([
    LogChanges
], Product.prototype, "updatePrice", null);
__decorate([
    LogChanges
], Product.prototype, "updateStock", null);
// Storing Products (Array of Tuples)
const productInventory = [];
// Creating Products
const p1 = new Product(1, "Laptop", Category.ELECTRONICS, 55000, 10);
const p2 = new Product(2, "Shirt", Category.FASHION, 1200, 40);
const p3 = new Product(3, "Rice Bag", Category.GROCERY, 900, 100);
// Adding to Tuple Array
productInventory.push([p1.id, p1]);
productInventory.push([p2.id, p2]);
productInventory.push([p3.id, p3]);
// Update Product Values
p1.updatePrice(52000);
p2.updateStock(30);
// Display Products using for...of
console.log("\n Product Inventory List:");
for (const [id, product] of productInventory) {
    console.log(`ID: ${id}, Name: ${product.name}, Category: ${product.category}, Price: ₹${product.price}, Stock: ${product.stock}`);
}
