import { useDeferredValue, useState, useEffect } from "react";

import styles from "./SearchLang.module.css";

const words = [
  "Java",
  "JavaScript",
  "TypeScript",
  "ActionScript",
  "LiveScript",
  "Ruby",
  "Python",
];

const filterWordsByQuery = async (query: string) => {
  return new Promise<string[]>((resolve) => {
    if (query.length === 0) {
      resolve([]);
    }
    setTimeout(() => {
      const filteredWords = words.filter((word) =>
        word.toLowerCase().includes(query.toLowerCase()),
      );
      resolve(filteredWords);
    }, 1000);
  });
};

const SearchLang = () => {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState<string[]>([]);
  const deferredQuery = useDeferredValue(query);

  const handleInput = (evt) => {
    setQuery(evt.target.value);
  };

  useEffect(() => {
    filterWordsByQuery(deferredQuery).then((result) => setSearchResult(result));
  }, [deferredQuery]);

  return (
    <div className={styles.wrapper}>
      <h2>Language Search</h2>
      <div>
        Search input:{" "}
        <input
          type="text"
          value={query}
          onInput={handleInput}
          placeholder="enter your favorite lang"
        />
      </div>

      <div>
        <h3>Search result:</h3>
        {(searchResult.length > 0 && (
          <ul>
            {searchResult.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        )) || <p>Lang not found...</p>}
      </div>
    </div>
  );
};

export default SearchLang;
