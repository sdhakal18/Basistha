import React from 'react';

const Products = () => {
  const productsList = [
    {
      name: "Fresh Milk",
      desc: "Pure, organic, and rich cow and buffalo milk sourced directly from local grass-fed cattle.",
      visual: "bottle",
      pack: "Fresh Milk"
    },
    {
      name: "Ghee",
      desc: "Authentic, rich, and aromatic clarified butter perfect for traditional cooking.",
      visual: "pouch",
      pack: "Pure Ghee"
    },
    {
      name: "Yogurt (Dahi)",
      desc: "Thick, creamy, and probiotic-rich traditional yogurt.",
      visual: "cup",
      pack: "Dahi"
    },
    {
      name: "Mohi",
      desc: "Cool, refreshing buttermilk made for daily drinking and traditional meals.",
      visual: "carton",
      pack: "Mohi"
    },
    {
      name: "Rasbari",
      desc: "Soft, sweet milk-based rasbari prepared for family treats and celebrations.",
      visual: "bowl",
      pack: "Rasbari"
    },
    {
      name: "Ice Cream",
      desc: "Creamy dairy ice cream for a sweet, chilled finish to any day.",
      visual: "tub",
      pack: "Ice Cream"
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
              <div className={`product-image-wrap product-bg-${product.visual}`}>
                <div className={`product-pack product-pack-${product.visual}`} aria-label={`${product.name} package`}>
                  <div className="pack-brand">Basistha Dairy Udhyog PVT Ltd</div>
                  <div className="pack-name">{product.pack}</div>
                  <div className="pack-location">Kudiya 33007, Nepal</div>
                </div>
              </div>
              <p className="product-brand">Basistha Dairy Udhyog PVT Ltd</p>
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
