import { useOutletContext } from "react-router-dom";
import CountriesList from "./CountriesList";
import SearchBar from "./SeachBar";
import SelectCountries from "./SelectCountries";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/themeContext";



export default function Home() {
  const [query, setQuery] = useState("");
  const [isDark]=useContext(ThemeContext)

  // custom hook const windowsize=useWindowSize()

  //abhi ThemeContext use karny ka liye hame koi dosra cheez use karna hoga jo ham react provide karta hai
  // jis ka name hai useContext 
  return (
    <main  className={!isDark ? "dark": ""}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectCountries setQuery={setQuery} />
      </div>

      {/* custom hook <h1 style={{textAlign: "center"}}>{windowsize.width}X{windowsize.height}</h1> */}
      {query === "unmount" ? null : <CountriesList query={query} />}
      {/* is mai kehrahy hai kai jab bhi hamare searh mai unmount ho tabhi hamare page ko remove kardo  */}

      {/* <CountriesList query={query} /> */}
    </main>
  );
}
