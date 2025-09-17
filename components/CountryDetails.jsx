import React, { useState, useEffect, useContext } from "react";
import "./Countrydetails.css";
import { Link, useLocation, useParams } from "react-router-dom";
import { ThemeContext } from "../context/themeContext";

export default function CountryDetails() {
  //  const countryName = new URLSearchParams(location.search).get('name');
  const params = useParams();
  const { state } = useLocation();
  const [isDark]=useContext(ThemeContext);
console.log(state);

  
  // console.log(countryName);
  const countryName = params.country;
  // console.log(countryName);
  // yaha oper hamne check kany ka liye console kiya hai to claer pata chal raha hai jab ham india per click karty hai tab aik bar to
  // function run hojata aor sath link bhi change hojata hai matlab countryname change hojata hai lekin wo function dobaara run nahi hota
  //  hai lekin dosri bar refresh karny kai baad run hota hai to ham is ko solve karny ka liye yai karengy kai
  // ham useeffect mai countryka name dedengy to jab bhi countryname change hoga to wesy hi wahi function dobara run hoga wo to apko
  // pata hi hoga matlab jasiy hi naem change to wo function dobara run hoga

  const [countrydetail, setDetail] = useState();
  const [notfound, setNotfound] = useState(false);

  // console.log(countrydetail?.borders);
  function updateCountryData(data) {
  
       setDetail({
  name: data.name.common||data.name||data.common,
  population: data.population ,
  region: data.region ,
  subregion: data.subregion || " ",
  capital: data.capital?.[0] || "N/A",
  flags: data.flags?.svg || "",
  nativeName: Object.values(data.name?.nativeName || {})[0]?.common || data.name?.common ,
  languages: Object.values(data.languages || {}).join(", "),
  symbol: Object.values(data.currencies || {})[0]?.name,
    // yaha hamne nesting fetching karni hai abhi to onlly india hai hame ise 
    // dynamic banana hai matlab api fetching ka zariye

  borders: [],
});

        // yaha hoga borders ka data har country ka liye
        // console.log(data.borders);

        if (!data.borders) {
          borders: [];
        }
        Promise.all(
          data.borders.map((border) => {
            return fetch(
              `https://restcountries.com/v3.1/alpha/${border}?fields=name`
            )
              .then((res) => res.json())
              .then((bordersCountry) => bordersCountry.name.common);
          })
        ).then((borders) => {
          setDetail((prev) => ({ ...prev, borders }));
        });

}

  useEffect(() => {
    if(state){
      updateCountryData(state);
      return 
    }


    fetch(
      `https://restcountries.com/v3.1/name/${countryName}?fullText=true&fields=name,flags,population,currencies,region,languages,subregion,capital,borders,cca3`
    )
      .then((res) => res.json())
      .then(([data]) => {
        updateCountryData(data);

      })
      .catch(() => {
        setNotfound(true);
      });
  }, [countryName]);
  if (notfound) {
    return <h1>Country Not Found</h1>;
  }

  return !countrydetail ? (
    "Loading........."
  ) : (
    <main className={!isDark ? "dark": ""}>
      <div className="country-details-container">
        <span className="back-button" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={countrydetail?.flags} alt={countrydetail?.name} />
          <div className="details-text-container">
            <h1>{countrydetail?.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name:</b> {countrydetail?.nativeName||countrydetail.name}
              </p>
              <p>
                <b>Population:</b> {countrydetail?.population}
              </p>
              <p>
                <b>Region:</b> {countrydetail?.region}
              </p>
              <p>
                <b>Sub Region:</b> {countrydetail?.subregion}
              </p>
              <p>
                <b>Capital:</b> {countrydetail?.capital}
              </p>
              <p>
                <b>Top Level Domain:</b> {countrydetail?.tld}
              </p>
              <p>
                <b>Currencies:</b> {countrydetail?.symbol}
              </p>
              <p>
                <b>Languages:</b> {countrydetail?.languages}
              </p>
            </div>

            {countrydetail.borders.length != 0 && (
              <div className="border-countries">
                <b>Border Countries:</b>

                {/* yai hamne is liye link likh liya kyonky ham react mai anchor tag ki jgah link tag lekhty  hai
               ab hamne oper india likha hai is liye india ajayega lekin aik aor masla hai wo yai hai kai hame jab india per
              click karty hai tab hame to india ka page miljata hai lekin wo hame render nahi hota hai matlab refresh 
              karny kai baad wo render hota hai */}
                {countrydetail.borders.map((border) => (
                  <Link key={border} to={`/${border}`}>
                    {border}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
