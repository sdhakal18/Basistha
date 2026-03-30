import React from 'react';

const Products = () => {
  const productsList = [
    {
      name: "Fresh Milk",
      desc: "Pure, natural, and unprocessed fresh milk directly from our grass-fed cows.",
      img: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Ghee",
      desc: "Authentic, rich, and aromatic clarified butter perfect for traditional cooking.",
      img: "https://images.unsplash.com/photo-1629851608678-a28d54ee4aeb?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Butter",
      desc: "Creamy, freshly churned homemade butter for your daily meals.",
      img: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Yogurt (Dahi)",
      desc: "Thick, creamy, and probiotic-rich traditional yogurt.",
      img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Khowa",
      desc: "Slow-cooked, evaporated milk solids ideal for making rich sweets.",
      img: "https://images.unsplash.com/photo-1616010651913-90dca27ce880?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Traditional Sweets",
      desc: "A wide variety of mouth-watering traditional local sweets like Peda and Lal Mohan.",
      img: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section id="products" className="section products">
      <div className="container">
        <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>Our Products</h4>
        <h2 style={{ color: 'var(--primary-dark)' }}>Fresh from Our Farm to Your Home</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 2rem auto', color: 'var(--text-secondary)' }}>
          We offer a wide range of pure dairy products made locally. Taste the tradition in every bite.
        </p>
        
        <div className="products-grid">
          {productsList.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.img} alt={product.name} className="product-image" />
              <h3 className="product-title">{product.name}</h3>
              <p className="product-desc">{product.desc}</p>
              <a 
                href={`https://wa.me/9779857080374?text=Hi!%20I%20would%20like%20to%20order%20${encodeURIComponent(product.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary" 
                style={{ width: '100%', padding: '0.6rem', textDecoration: 'none' }}
              >
                Order Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
