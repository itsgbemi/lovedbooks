export default function PromoSection() {
return (
<div className="promo-section">
<a href="/deals/holiday-jumpstart" className="main-promo">
<div className="main-promo-image"></div>
<div className="main-promo-content">
<h1>Holiday Jumpstart</h1>
<p>Get 100 bonus points with 4+ books</p>
</div>
</a>
<div className="side-promos">
<a href="/deals/kids-book-fair" className="side-promo">
<div className="side-promo-image side-promo-image-1"></div>
<div className="side-promo-content">
<h3>Kids' Book Fair</h3>
<p>Get the promo code</p>
</div>
</a>
<a href="/deals/indie-next" className="side-promo">
<div className="side-promo-image side-promo-image-2"></div>
<div className="side-promo-content">
<h3>Indie Next</h3>
<p>Shop new best sellers</p>
</div>
</a>
</div>
<div className="mobile-promos">
<a href="/deals/kids-book-fair" className="side-promo">
<div className="side-promo-image side-promo-image-1"></div>
<div className="side-promo-content">
<h3>Kids' Book Fair</h3>
<p>Get the promo code</p>
</div>
</a>
<a href="/deals/indie-next" className="side-promo">
<div className="side-promo-image side-promo-image-2"></div>
<div className="side-promo-content">
<h3>Indie Next</h3>
<p>Shop new best sellers</p>
</div>
</a>
</div>
</div>
)
}
