// User Storage
let users = JSON.parse(localStorage.getItem("users")) || [];

// Register
function register() {
    const newUsername = document.getElementById("newUsername").value.trim();
    const newPassword = document.getElementById("newPassword").value.trim();

    if (!newUsername || !newPassword) {
        alert("Please fill all fields!");
        return;
    }

    if (users.find(u => u.username === newUsername)) {
        alert("Username already exists!");
        return;
    }

    users.push({ username: newUsername, password: newPassword });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful! You can now login.");

    document.getElementById("newUsername").value = "";
    document.getElementById("newPassword").value = "";
    toggleRegister();
}

// Toggle Register Form
function toggleRegister() {
    const reg = document.getElementById("register-section");
    reg.classList.toggle("hidden");
}

// Login
function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
        alert("Invalid credentials!");
        return;
    }

    localStorage.setItem("loggedInUser", username);
    window.location.href = "profile.html";
}

// Logout
function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
}

// Protect Pages
const user = localStorage.getItem("loggedInUser");
if ((document.getElementById("welcomeMessage") || document.getElementById("subjectDropdown")) && !user) {
    alert("Please login first!");
    window.location.href = "index.html";
}

// Welcome Message
if (document.getElementById("welcomeMessage") && user) {
    document.getElementById("welcomeMessage").innerText = `Welcome, ${user}!`;
}

// Activities
const activities = [
    { id: 1, activity: "Create project file (tables 12-19)", subject: "Maths" },
    { id: 2, activity: "Perform science experiment on chemical reactions", subject: "Science" },
    { id: 3, activity: "Write an essay on global warming", subject: "English" },
    { id: 4, activity: "Prepare timeline of Indian independence", subject: "History" }
];

// Show Activities
function showActivities() {
    const subject = document.getElementById("subjectDropdown").value;
    const list = document.getElementById("activityList");
    list.innerHTML = "";

    if (!subject) return;

    const filtered = activities.filter(a => a.subject === subject);
    if (!filtered.length) {
        list.innerHTML = "<li>No activities found.</li>";
        return;
    }

    filtered.forEach(a => {
        const li = document.createElement("li");
        li.textContent = a.activity;
        list.appendChild(li);
    });
}
