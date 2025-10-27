import React, { useState, useMemo } from "react";
import "./index.css";

function ProductCatalog() {
const PRODUCTS = [
  { name: "Laptop", price: 450000, inStock: true, category: "Electronics" },
  { name: "Phone", price: 150000, inStock: false, category: "Electronics" },
  { name: "Headphones", price: 22000, inStock: true, category: "Electronics" },
  { name: "T-Shirt", price: 3500, inStock: true, category: "Clothing" },
  { name: "Jeans", price: 8000, inStock: false, category: "Clothing" },
  { name: "Sneakers", price: 25000, inStock: true, category: "Clothing" },
  { name: "Jollof Rice (1 plate)", price: 1500, inStock: true, category: "Food" },
  { name: "Indomie (Pack)", price: 650, inStock: true, category: "Food" },
  { name: "Chocolate", price: 400, inStock: false, category: "Food" },
];

const Categories = ["All", "Electronics", "Clothing", "Food"];
const SortOptions = ["None", "Low to High", "High to Low"];


  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("None");


  const visibleProducts = useMemo(() => {
    let list = PRODUCTS.filter((p) => (category === "All" ? true : p.category === category));

    if (sortBy === "Low to High") {
      list = [...list].sort((a, b) => a.price - b.price);
    } else if (sortBy === "High to Low") {
      list = [...list].sort((a, b) => b.price - a.price);
    }

    return list;
  }, [category, sortBy]);

  const formatNaira = (n) =>
    n.toLocaleString("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 });

  const handleAddToCart = (product) => {
    // placeholder - replace with real cart logic
    alert(`${product.name} added to cart.`);
  };

  return (
    <div className="catalog-container">
      <h2>🛍️ Product Catalog</h2>

      <div className="controls">
        <div className="filter-group" role="group" aria-label="Category filters">
          {Categories.map((c) => (
            <button
              key={c}
              className={`filter-btn ${category === c ? "active" : ""}`}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="sort-group">
          <label htmlFor="sortSelect">Sort:</label>
          <select
            id="sortSelect"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            {SortOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="summary">
        Showing {visibleProducts.length} of {PRODUCTS.length} products
        {category !== "All" ? ` | Category: ${category}` : ""}
        {sortBy !== "None" ? ` | Sorted: ${sortBy}` : ""}
      </div>

      <ul className="product-list">
        {visibleProducts.map((p, idx) => (
          <li key={`${p.name}-${idx}`} className={`product-item ${p.inStock ? "instock" : "outstock"}`}>
            <div className="product-main">
              <div className="product-title">
                <span className="product-name">{p.name}</span>
                <span className="product-price">{formatNaira(p.price)}</span>
              </div>
              <div className="product-meta">
                <span className="product-category">{p.category}</span>
                {!p.inStock && <span className="badge out">OUT OF STOCK</span>}
                {p.inStock && <span className="badge in">IN STOCK</span>}
              </div>
            </div>

            <div className="product-actions">
              {p.inStock ? (
                <button className="add-btn" onClick={() => handleAddToCart(p)}>
                  Add to Cart
                </button>
              ) : (
                <span className="out-label">Out of Stock</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ProductCatalog;