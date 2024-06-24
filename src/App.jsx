import { useEffect, useState } from "react";
import { AuthorsList } from "./components/AuthorsList";

const API_URL = "http://localhost:8000";

function App() {
    const [authors, setAuthor] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/authors`)
          .then((res) => res.json())
          .then((data) => setAuthor(data));
      }, []);
    
    return (
        <>
          <h1>authors App</h1>
          <AuthorsList authors={authors} />
        </>
      );
}

export default App
