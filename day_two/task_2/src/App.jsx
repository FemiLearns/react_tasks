import ProductCard from './ProductCard';
import './index.css';
import './app.css';

function App() {
  return (
    <div className="app-container">
      <h1>Product Listings</h1>
      <div className="products-container">
        <ProductCard
          name= "Plantain chips"
          price= {3.99}
          image= "https://www.foodandwine.com/thmb/_MQw4TGJ9dR7nvmMayhjIhdqwwM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Plantain-Chips-FT-RECIPE0623-24212663ea004a3eaccd777221489165.jpg"
          instock= {true}
          featured= {true}
        />
        <ProductCard
          name= "Mango juice"
          price= {2.49}
          image= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9_EdmEpwCqVNWC4san-CQ4ARd6j65IRxwfg&s"
          instock= {false}
          featured= {false}
        />
        <ProductCard
          name= "Coconut water"
          price= {1.99}
          image= "https://images.squarespace-cdn.com/content/v1/5bdccce19d5abb79b601042b/1564327841801-IA7GR4Q1OCN9RMV6ANFL/Coconut-water.jpg?format=1000w"
          instock= {true}
          featured= {false}
        />
      </div>
    </div>
  );
}

export default App;