import { useEffect, useState } from "react";
import { AuthorsList } from "./components/AuthorsList";

const API_URL = "http://localhost:8000";

function App() {
    const [authors, setAuthor] = useState([]);

    const onDeleteAuthorClickHandler = (authorId) => {
        fetch(`${API_URL}/authors/${authorId}`, {
          method: "DELETE",
        }).then((res) => {
          if (res.status === 200) {
            setAuthor((prevauthors) =>
              prevauthors.filter((author) => author.id !== authorId)
            );
          }
        });
      };

    useEffect(() => {
        fetch(`${API_URL}/authors`)
          .then((res) => res.json())
          .then((data) => setAuthor(data));
      }, []);
    
    return (
        <>
          <h1>authors App</h1>
          <AuthorsList authors={authors} onDelete={onDeleteAuthorClickHandler}/>
        </>
      );
}

export default App
