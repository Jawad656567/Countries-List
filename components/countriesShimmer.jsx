import "./countriesShimmer.css";

export default function CountriesShimmer() {
  return (
    <div className="countries-container">
      {Array.from({ length: 100 }).map((_, i) => (
        <div key={i} className="country-card shimmer-card">
          <div className="flag-container"></div>
            <div className="card-text">
              <h3 className="card-title"></h3>
              <p></p>
              <p></p>
              <p></p>
            </div>
        </div>

      ))}
    </div>
  );
}
