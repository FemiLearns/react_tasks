function ProductCard({ name, price, image, instock, featured  }) {
    return (
        <div className="container">
            <div className={`product-card ${featured ? "featured" : ""}`}>
                <img src={image} alt={` ${name} logo`} className="product-image" />
                <h2 className="product-name">{name}</h2>
                <p className="product-price">${price.toFixed(2)}</p>
                <span className={instock ? "in-stock" : "out-of-stock"}>
                    {instock ? "In Stock" : "Out of Stock"}
                </span>
            </div>
            {featured && <div className="featured-badge">Featured</div>}
        </div>
    );
}

export default ProductCard;