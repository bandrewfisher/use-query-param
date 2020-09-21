import React from "react";
import "./App.css";
import useQueryParam from "./useQueryParam";

function App() {
  const [search, setSearch] = useQueryParam("search", "");

  return (
    <div className="App">
      <p>
        Type in to the box below, and watch it change in the URL! Refresh the
        page, and the value of the URL "search" parameter will be populated into
        the input box.
      </p>
      <input
        value={search}
        onChange={({ target: { value } }) => setSearch(value)}
      />
    </div>
  );
}

export default App;
