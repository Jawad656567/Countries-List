import { Link } from "react-router-dom";

export default function CountryCard({
  name,
  pic,
  Population,
  Region,
  Capital,
  idd,
  data,
}) {
  // console.log(data);
  return (
    <Link className="country-card" id={idd} to={`/${name}`} state={ data } >
      <img src={pic} alt={`${name} flag`} />
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population:</b> {Population}
        </p>
        <p>
          <b>Region:</b> {Region}
        </p>
        <p>
          <b>Capital:</b> {Capital}
        </p>
      </div>
    </Link>
  );
}
