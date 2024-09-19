import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    onSearch(input);
  };

  return (
    <div className="search-bar">
      <input
        className="input-box"
        type="text"
        placeholder="Search for a drink..."
        value={input}
        onChange={handleChange}
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
