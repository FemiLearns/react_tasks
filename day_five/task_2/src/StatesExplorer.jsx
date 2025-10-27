import React, { useState } from "react";
import "./index.css";

function StatesExplorer() {
const STATES = [
  { name: "Lagos", capital: "Ikeja", region: "South West" },
  { name: "Kano", capital: "Kano", region: "North West" },
  { name: "Rivers", capital: "Port Harcourt", region: "South South" },
  { name: "Enugu", capital: "Enugu", region: "South East" },
  { name: "Kaduna", capital: "Kaduna", region: "North West" },
  { name: "Plateau", capital: "Jos", region: "North Central" },
  { name: "Oyo", capital: "Ibadan", region: "South West" },
  { name: "Anambra", capital: "Awka", region: "South East" },
  { name: "Delta", capital: "Asaba", region: "South South" },
  { name: "Borno", capital: "Maiduguri", region: "North East" },
  { name: "Akwa Ibom", capital: "Uyo", region: "South South" },
  { name: "Imo", capital: "Owerri", region: "South East" },
];

const broadRegion = (zone) => {
  
  if (!zone) return "";
  if (zone.includes("North")) return "North";
  if (zone.includes("South West")) return "West";
  if (zone.includes("South East")) return "East";
  if (zone.includes("South South")) return "South";
  
  return "South";
};

const Regions = ["All", "North", "South", "East", "West"];


  const [query, setQuery] = useState("");
  const [regionFilter, setRegionFilter] = useState("All");

  const normalizedQuery = query.trim().toLowerCase();

  const filtered = STATES.filter((s) => {
    
    if (regionFilter !== "All") {
      const br = broadRegion(s.region);
      if (br !== regionFilter) return false;
    }

    
    if (!normalizedQuery) return true;
    return (
      s.name.toLowerCase().includes(normalizedQuery) ||
      s.capital.toLowerCase().includes(normalizedQuery)
    );
  });

  return (
    <div className="states-container">
      <h2>🇳🇬 Nigerian States</h2>

      <div className="controls">
        <label className="search-label">
          Search:
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type state name or capital (e.g., lagos, ikeja)"
            className="search-input"
          />
        </label>

        <div className="region-filters">
          {Regions.map((r) => (
            <button
              key={r}
              className={`region-btn ${regionFilter === r ? "active" : ""}`}
              onClick={() => setRegionFilter(r)}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="results">
        {filtered.length === 0 ? (
          <div className="no-results">No results found</div>
        ) : (
          <ul className="states-list">
            {filtered.map((s) => (
              <li key={s.name} className="state-item">
                <div className="left">
                  <span className="state-name">{s.name}</span>
                  <span className="dash"> - </span>
                  <span className="capital">Capital: {s.capital}</span>
                </div>
                <div className="region">{`(${s.region})`}</div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="summary">
        Showing {filtered.length} of {STATES.length} states
        {regionFilter !== "All" ? ` | Region: ${regionFilter}` : ""}
      </div>
    </div>
  );
}
export default StatesExplorer;