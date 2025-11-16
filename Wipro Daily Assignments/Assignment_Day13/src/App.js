import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import BookList from "./components/bookList";
import BookDetails from "./components/bookDetails";
import AddBookForm from "./components/addBookForm";
import RenderMessage from "./components/renderMessage";

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="mt-3">BookVerse: Explore & Navigate Between Pages</h1>

        <RenderMessage
          render={(user) => (
            <p className="text-muted">Welcome back, {user}! Enjoy exploring new reads.</p>
          )}
        />

        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<BookList />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/add" element={<AddBookForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
