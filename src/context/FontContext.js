import { createContext, useState } from "react";

const FontContext = createContext("Monsterrat");

export const FontProvider = ({ children }) => {
  const [font, setFont] = useState([]);
  const fontChange = (option) => {
    setFont(option.target.value);
    console.log(option.target.value);
  };
  return (
    <FontContext.Provider value={{ font, fontChange }}>
      {children}
    </FontContext.Provider>
  );
};
export default FontContext;
