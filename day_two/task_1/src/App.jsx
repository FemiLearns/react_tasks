import './App.css'
import './index.css'
import GreetingsCard from './GreetingsCard'


function App() {
  return (
    <div className="app-container">
      <h1>Greeting Cards</h1>
      <div className="cards-container">      
          <GreetingsCard
          name= "John Doe"
          message= "Happy Birthday!"
          backgroundColor= "#f7c1c1" 
          />
          <GreetingsCard
          name= "Jane Smith"
          message= "Congratulations!"
          backgroundColor= "#c1f7f4" 
          />
          <GreetingsCard
          name= "Mike Johnson"
          message= "Best Wishes!"
          backgroundColor= "#d5f7c1" 
          />
        
      </div>
    </div>
  )
}
  
export default App;
