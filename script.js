:root {
  --primary: #E8641A;
  --secondary: #1A6B6B;
  --secondary-dark: #145252;
  --bg: #F5F0E8;
  --white: #ffffff;
  --text: #222222;
  --muted: #777777;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: 'Poppins', sans-serif;
}

img {
  max-width: 100%;
  display: block;
}

.custom-navbar {
  background: var(--secondary);
  padding: 10px 0;
}

.logo-only {
  height: 46px;
  width: auto;
  max-width: 180px;
  object-fit: contain;
}

.custom-navbar .nav-link {
  color: var(--white);
  font-weight: 500;
  margin-left: 8px;
}

.custom-navbar .nav-link:hover,
.custom-navbar .nav-link.active {
  color: #ffd7bd;
}

.custom-toggler {
  border-color: rgba(255, 255, 255, 0.35);
}

.navbar-toggler-icon {
  filter: invert(1);
}

.hero-section,
.page-banner {
  background: linear-gradient(135deg, var(--secondary), var(--secondary-dark));
  color: var(--white);
}

.hero-section {
  padding: 60px 0;
}

.page-banner {
  padding: 48px 0;
}

.hero-row,
.banner-row {
  min-height: auto;
}

.hero-pet-img {
  width: 100%;
  max-width: 320px;
  height: auto;
  object-fit: contain;
  margin: 0 auto;
}

.banner-cutout {
  width: 100%;
  max-width: 280px;
  height: auto;
  object-fit: contain;
  margin: 0 auto;
}

.subheading {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  color: #ffe5d6;
  font-size: 1.1rem;
}

.hero-title {
  font-size: 2.8rem;
  line-height: 1.15;
  font-weight: 700;
}

.hero-text {
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 700px;
}

.hero-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: var(--white);
  padding: 9px 16px;
  border-radius: 999px;
  margin: 6px 8px 0 0;
  font-size: 0.92rem;
}

.section-title {
  color: var(--primary);
  font-weight: 700;
}

.delivery-bar {
  background: var(--secondary);
  color: var(--white);
  font-weight: 500;
  font-size: 0.95rem;
}

.btn-brand {
  background: var(--primary);
  color: var(--white);
  border: none;
  padding: 12px 22px;
  border-radius: 12px;
  font-weight: 600;
}

.btn-brand:hover {
  background: #cf5715;
  color: var(--white);
}

.text-link {
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
}

.text-link:hover {
  color: #cf5715;
}

.category-link {
  text-decoration: none;
}

.category-card {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: var(--white);
  border: 3px solid var(--secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-weight: 600;
  color: var(--secondary);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
  transition: 0.25s ease;
  text-align: center;
  padding: 12px;
}

.category-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.12);
}

.product-card {
  border: none;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.08);
  background: var(--white);
  height: 100%;
}

.product-card img {
  height: 220px;
  object-fit: cover;
  width: 100%;
}

.product-card .card-body h5 {
  font-size: 0.98rem;
  line-height: 1.45;
  min-height: 68px;
}

.price {
  color: var(--secondary);
  font-weight: 700;
  font-size: 1.05rem;
}

.info-card,
.form-card {
  background: var(--white);
  border-radius: 18px;
  padding: 24px;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.07);
}

.form-control,
.form-select,
textarea {
  border-radius: 10px;
  padding: 12px;
}

.gallery-img {
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 18px;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.08);
}

.cart-item-img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 12px;
}

.footer {
  background: var(--secondary);
  color: var(--white);
  padding: 30px 0;
  margin-top: 40px;
}

.footer a {
  color: var(--white);
  text-decoration: none;
}

.footer a:hover {
  color: #ffd7bd;
}

.filter-wrap {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}

.filter-btn {
  background: #ffffff;
  border: 2px solid var(--secondary);
  color: var(--secondary);
  padding: 10px 18px;
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease;
}

.filter-btn:hover,
.filter-btn.active {
  background: var(--secondary);
  color: var(--white);
}

.hidden-product {
  display: none !important;
}

@media (max-width: 991px) {
  .hero-section,
  .page-banner {
    text-align: center;
    padding: 42px 0;
  }

  .hero-pet-img,
  .banner-cutout {
    max-width: 220px;
    margin-bottom: 24px;
  }

  .hero-title {
    font-size: 2.15rem;
  }

  .hero-text {
    font-size: 1rem;
    max-width: 100%;
  }
}

@media (max-width: 576px) {
  .logo-only {
    height: 40px;
    max-width: 140px;
  }

  .hero-title {
    font-size: 1.8rem;
  }

  .category-card {
    width: 120px;
    height: 120px;
    font-size: 0.95rem;
  }

  .product-card img {
    height: 200px;
  }
}