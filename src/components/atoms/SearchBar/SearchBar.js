import { useEffect, useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import data from "./MOCK_DATA.json";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 1000);

  useEffect(() => {
    // use debounced query
  }, [debouncedQuery]);

  return (
    <div>
      <input
        placeholder="Enter Post title"
        onChange={(e) => setQuery(e.target.value)}
      />
      {data
        .filter(
          (p) =>
            debouncedQuery === "" ||
            p.title
              .toLocaleLowerCase()
              .includes(debouncedQuery.toLocaleLowerCase())
        )
        .map((p) => (
          <div key={p.id}>
            <p>Title: {p.title}</p>
            <p>Author: {p.author}</p>
          </div>
        ))}
    </div>
  );
};

export default SearchBar;
