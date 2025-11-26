Milestone 2 – Assessment Set 1

Title: React Product Dashboard with Express.js Backend

Integration



This project is built as part of Milestone 2 Assessment – Set 1, demonstrating:



* React Components (functional + class)
* Routing using React Router
* API Integration using Express.js backend
* Form Handling using Formik + Yup
* Context API for global state management
* Bootstrap UI for styling



The project is divided into 3 User Stories.

Each User Story builds upon the previous one.



User Story 1 – Product Catalog (React Basics)

Features:



* Created using create-react-app
* Components:



*      ProductCard (functional)
*      ProductList (class)



* Data passed using props
* 
* Used state to toggle favorite
* 
* Styling done with Bootstrap



Output:



A simple product catalog showing name, price, category, and favorite button.

-------------------------------------------------------------------

ser Story 2 – Product Details with Routing

Features:



* Added React Router
* Created:



*  ProductListPage
*  ProductDetailPage



* Added Express.js backend:



*   GET /products
*   GET /products/:id



* Handled loading \& errors using try...catch
* Clicking “View Details” shows full product info



Output:



Products load from backend. Clicking a card shows detailed info.

-------------------------------------------------------------------

User Story 3 – Add Product Form (Formik + Yup + Context API)

Features:



* Added Formik for form handling
* Added Yup for validation
* Fields included:



*    name
*    price
*    category
*    description



* On submit → POST request sent to backend
* 
* Used Context API to update product list globally
* 
* Used Bootstrap for form styling



Output:



User can add new product. It appears instantly in product list.



