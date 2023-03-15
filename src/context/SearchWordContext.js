import { createContext, useEffect, useState } from "react";
import axios from "axios";
const SearchContext = createContext("");

export const SearchProvider = ({ children }) => {
  const [word, setWord] = useState([]);
  const [meaning, setMeaning] = useState("");
  const options = {
    method: "GET",
    url: "https://mashape-community-urban-dictionary.p.rapidapi.com/define",
    params: { term: `${meaning}` },
    headers: {
      "X-RapidAPI-Key": "f9b691aabdmsh31fb3d143176ee5p114a5ajsna6357dc4e007",
      "X-RapidAPI-Host": "mashape-community-urban-dictionary.p.rapidapi.com",
    },
  };
  const getWord = async () => {
    const response = await axios.request(options);
    setWord(response.data.list);
    console.log(response.data.list);
  };

  useEffect(() => {
    getWord();
    // eslint-disable-next-line
  }, [meaning]);

  const handleSearch = (e) => {
    console.log(e.target.value);
    if (e.target.value === "") {
      return "Not such a thing";
    } else {
      meaning.filter((item) => item.definition || []?.includes(e.target.value));
    }
  };

  return (
    <SearchContext.Provider
      value={{ word, setWord, handleSearch, meaning, setMeaning }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
