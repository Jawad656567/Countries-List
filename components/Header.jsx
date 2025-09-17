import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

export default function Header() {
  // json parse sy ham string ko json mai convert karahy hai data aor sath ham local storage sy value 
  // get karhay hai matlab agar localstorage mai value fasle to remove toogle class 
  // agar true to add toogle class
const [isDark, setIsDark] =useContext(ThemeContext)
// console.log(JSON.parse(localStorage.getItem("isDarkMode")));
// aik yai tareeqa hai lekin yai acha nahi hai 
// 1st 

// if(isDark){
//         document.body.classList.add("dark");
// }else{
//        document.body.classList.remove("dark");
// }

// 2nd
// ham darik dynamic classes add karengy jaisy header and mai per 
return (
  <header className={`header-container ${!isDark ? "dark": ""}`}>
    <div className="header-content">
      <h2 className="title">
        <a href="/">Where in the world?</a>
      </h2>

      <p
        className="theme-changer"
        onClick={() => {
          setIsDark(!isDark);
          localStorage.setItem("isDarkMode",!isDark)
        }}
      >
        <i className={`fa-solid fa-${isDark ? "moon" : "sun"}`} />
        &nbsp;&nbsp;
        {isDark ? "Light Mode" : "Dark Mode"}
      </p>
    </div>
  </header>
);

}
