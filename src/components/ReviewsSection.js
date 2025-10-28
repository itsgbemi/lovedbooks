export default function ReviewsSection() {
const StarIcon = () => (
<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
</svg>
)

return (
<div className="reviews-section">
<div className="reviews-content">
<div className="reviews-header">
<div className="trustpilot-rating">
<div className="stars">
<StarIcon />
<StarIcon />
<StarIcon />
<StarIcon />
<StarIcon />
</div>
<div className="rating-text">Excellent</div>
</div>
<h2 className="reviews-title">Trusted by Millions of Customers</h2>
<div className="review-count">4.7 out of 5 based on 189,542 reviews</div>
</div>
<div className="review-cards">
<div className="review-card">
<div className="review-stars">
<StarIcon />
<StarIcon />
<StarIcon />
<StarIcon />
<StarIcon />
</div>
<p className="review-text">"I love LovedBooks! I've been using them for years and always find great deals on books I want to read. The quality is consistently good and shipping is fast."</p>
<div className="reviewer-info">
<div className="reviewer">Sarah M.</div>
<div className="review-date">October 15, 2023</div>
</div>
</div>
<div className="review-card">
<div className="review-stars">
<StarIcon />
<StarIcon />
<StarIcon />
<StarIcon />
<StarIcon />
</div>
<p className="review-text">"As a teacher, I'm always looking for affordable books for my classroom. LovedBooks has saved me hundreds of dollars while still providing quality reading materials for my students."</p>
<div className="reviewer-info">
<div className="reviewer">James T.</div>
<div className="review-date">September 28, 2023</div>
</div>
</div>
<div className="review-card">
<div className="review-stars">
<StarIcon />
<StarIcon />
<StarIcon />
<StarIcon />
<StarIcon />
</div>
<p className="review-text">"The customer service is outstanding. I had an issue with a book that arrived damaged and they resolved it immediately. Will definitely continue shopping here!"</p>
<div className="reviewer-info">
<div className="reviewer">Michelle R.</div>
<div className="review-date">November 2, 2023</div>
</div>
</div>
</div>
</div>
</div>
)
}
