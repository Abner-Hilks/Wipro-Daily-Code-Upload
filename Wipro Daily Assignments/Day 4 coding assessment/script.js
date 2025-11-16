// 🧩 Using the Module Pattern to encapsulate logic and avoid global pollution
const AppModule = (() => {

  // API Endpoints
  const POSTS_API = "https://jsonplaceholder.typicode.com/posts";
  const TODOS_API = "https://jsonplaceholder.typicode.com/todos";

  // DOM Elements
  const postsContainer = document.getElementById("postsContainer");
  const todosContainer = document.getElementById("todosContainer");
  const postError = document.getElementById("postError");
  const todoError = document.getElementById("todoError");

  // ---- Utility: Fetch Wrapper with Error Handling ----
  async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Error ${response.status}: Failed to fetch data`);
      return await response.json();
    } catch (err) {
      console.error("Fetch Error:", err);
      throw err;
    }
  }

  // ---- UI Rendering Functions ----
  function renderPosts(posts) {
    postsContainer.innerHTML = "";
    posts.slice(0, 10).forEach(post => {
      const div = document.createElement("div");
      div.classList.add("post");
      div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      `;
      postsContainer.appendChild(div);
    });
  }

  function renderTodos(todos) {
    todosContainer.innerHTML = "";
    todos.slice(0, 10).forEach(todo => {
      const div = document.createElement("div");
      div.classList.add("todo");
      if (todo.completed) div.classList.add("completed");
      div.textContent = todo.title;
      todosContainer.appendChild(div);
    });
  }

  // ---- Event Handlers ----
  async function handleFetchPosts() {
    postsContainer.innerHTML = `<p class="loading">Loading posts...</p>`;
    postError.textContent = "";
    try {
      const posts = await fetchData(POSTS_API);
      renderPosts(posts);
    } catch (error) {
      postError.textContent = "Failed to load posts. Please try again later.";
      postsContainer.innerHTML = "";
    }
  }

  async function handleFetchTodos() {
    todosContainer.innerHTML = `<p class="loading">Loading todos...</p>`;
    todoError.textContent = "";
    try {
      const todos = await fetchData(TODOS_API);
      renderTodos(todos);
    } catch (error) {
      todoError.textContent = "Failed to load todos. Please try again later.";
      todosContainer.innerHTML = "";
    }
  }

  // ---- Public Methods (Revealing Module Pattern) ----
  return {
    init: () => {
      document.getElementById("fetchPostsBtn").addEventListener("click", handleFetchPosts);
      document.getElementById("fetchTodosBtn").addEventListener("click", handleFetchTodos);
    }
  };
})();

// Initialize the app when DOM is ready
document.addEventListener("DOMContentLoaded", AppModule.init);
