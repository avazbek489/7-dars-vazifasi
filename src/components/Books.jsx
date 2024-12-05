import React, { useState } from "react";
import { books } from "../axios";

function Books() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    books.get(`volumes?q=${query}`).then((response) => {
      setResults(response.data.items || []);
    });
  };

  return (
    // Boshlanishi
    <div className="p-4">
      <div className="flex flex-col space-y-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Kitob nomini kiriting"
          className="border p-2"
        />
        <button onClick={handleSearch} className="bg-yellow-500 text-white p-2">
          Search
        </button>
        <div className="grid gap-4">
          {/* Card chiqadigan joy */}
          {results.map((value) => (
            <div key={value.id} className="border p-4">
              <img
                src={value.volumeInfo.imageLinks?.thumbnail}
                alt={value.volumeInfo.title}
                className="w-full h-40 object-cover"
              />
              <h3 className="text-lg font-bold">{value.volumeInfo.title}</h3>
              <p>{value.volumeInfo.authors?.join(", ")}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Books;
