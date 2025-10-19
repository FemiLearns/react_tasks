import StateCard from "./StateCard";

function App() {
  return (
    <div className="app">
      <h1>Nigeria's States Information</h1>
      <div>
        <StateCard
          state="Lagos"
          capital="Ikeja"
          region="West"
          population="14 million"
          landmark="National Theatre"
        />
        <StateCard
          state="Kano"
          capital="Kano"
          region="North West"
          population="12 million"
          landmark="Emir's Palace"
        />
        <StateCard
          state="Rivers"
          capital="Port Harcourt"
          region="South"
          population="7 million"
          landmark=" Tourist Beach"
        />
        <StateCard
          state="Anambra"
          capital="Awka"
          region="East"
          population="5 million"
          landmark="Ogbunike Caves"
        />
      </div>
    </div>
  );
}

export default App;