// Enum for Product Categories
enum Category {
    ELECTRONICS = "Electronics",
    FASHION = "Fashion",
    GROCERY = "Grocery",
    HOME = "Home",
}

// Interface IProduct
interface IProduct {
    id: number;
    name: string;
    category: Category;
    price: number;
    stock: number;
}

// Decorator to log price or stock changes
function LogChanges(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Change Triggered: ${propertyKey}, Arguments:`, args);
        return originalMethod.apply(this, args);
    };
}

// Product Class Implementing Interface
class Product implements IProduct {
    constructor(
        public id: number,
        public name: string,
        public category: Category,
        public price: number,
        public stock: number
    ) {}

    @LogChanges
    updatePrice(newPrice: number) {
        this.price = newPrice;
        console.log(`Updated Price: ${this.name} → ₹${this.price}`);
    }

    @LogChanges
    updateStock(newStock: number) {
        this.stock = newStock;
        console.log(`Updated Stock: ${this.name} → ${this.stock}`);
    }
}

// Storing Products (Array of Tuples)
const productInventory: [number, Product][] = [];

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
