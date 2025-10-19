import './index.css';

function StateCard({ state, capital, region, population, landmark, featured }) {
  const regionColors = {
    North: '#8B4513',
    South: '#008751',
    East: '#FFD700',
    West: '#4169E1'
  }

  const regionKey = Object.keys(regionColors).find(k =>
    (region || '').toLowerCase().includes(k.toLowerCase())
  ) || null

  const backgroundColor = regionKey ? regionColors[regionKey] : '#ffffff'
  const color = backgroundColor === '#FFD700' ? '#000' : '#fff' // readable text on yellow

  return (
    <div className="state-card" style={{ backgroundColor, color }}>
      <h2>{state}</h2>
      <p><strong>Capital:</strong> {capital}</p>
      <p><strong>Region:</strong> {region}</p>
      <p><strong>Population:</strong> {population}</p>
      <p><strong>Landmark:</strong> {landmark}</p>
      {featured && <div className="landmark">{featured}</div>}
    </div>
  )
}

export default StateCard;