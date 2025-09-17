import { useEffect, useState } from "react";
// import List from "../data.js";
import React from "react";
import CountryCard from "./CountryCards.jsx";
import CountriesShimmer from "./countriesShimmer.jsx";

export default function CountriesList({ query }) {
  const [List, setList] = useState([]);

  //  useeffect hamesha aik hi bar call hoga lekin jab last mai ,[] yai add kare tab aik hi bar call hoga chahy kuch bhi ho aik hi bar
  // call hoga aik to yai use hogya hai ab dosra bataty hai

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,currencies,region,languages,subregion,capital,borders,cca3"
    )
      .then((res) => res.json())
      .then((data) => {
        setList(data);
      });

    // 3rd
    // ab tesra tareeqa isko ham claenup funtion kehty hai  yai tabhi call hota hai jab hamara componenets unmount hota hai matlab
    // wahi components ya page hamare dom sy hat jata hai tabhi yai call hoga to mount and unmount to khud hota hai lekin yaha ham
    // samjny ka liye kasdan apne page or component ko unmount karegy teek hai waha hamne app.js mai lekha hai
    // ab jab bhi hamara page unmount hoga tabhi yai call hoga

    //ab aik aor baat hamne aik interval lagaya hai jab ham unmount karegy tab to components remove hojayega lekin yai setinterval
    // memomry mai chalta rahega tab ham os return wale function mai jab claerinterval lekh dengy tab yai band hojaye sath yai bhi
    // yai bhi aik faida hogya hamara

    // const interval=setInterval(()=>{
    //   console.log("running");

    // },1000)

    // return ()=>{
    //  console.log("CleanUp");
    //  clearInterval(interval);

    // };
  }, []);

  // 2nd kisi function ko monitor karny ka liye use hota hai matlab ham chty hai hamare wo function tab call ho jab yai dosra wla
  // function call ho or change ho for example

  useEffect(() => {
    console.log("hi");
  }, [List]);

  // ab ham chty hai kai yai hi tab call ho jab hamara wo dosra wala function change ho kai jab bhi hamare yai api wla function change or
  //call ho tabhi hamara hi print ho tab ham [] is mai dedengy List data ko [List] ab jab bhi yai list call or change hoga tabhi yai
  //call hoga matlab abhi dobar hi call hoga ik apna wla aor aik jab List call hoga tabhi

  if (List.length === 0) {
    return <CountriesShimmer />;
  }

  return (
    <>
      <div className="countries-container">
        {List.filter((country) =>
          country.name.common.toLowerCase().includes(query)||country.region.toLowerCase().includes(query)        ).map((country) => (
          <CountryCard
            key={country.cca3}
            idd={country.cca3}
            name={country.name.common}
            pic={country.flags.svg}
            Population={country.population}
            Region={country.region}
            Capital={country.capital}
            data={country}
          />
        ))}
      </div>
    </>
  );
}
