export default function Footer() {
return (
<footer>
<div className="footer-content">
<div className="footer-sections">
<div className="footer-section">
<h3>Popular Categories</h3>
<ul>
<li><a href="#">Children's</a></li>
<li><a href="#">Teen and Young Adult</a></li>
<li><a href="#">Self-Help</a></li>
<li><a href="#">Literature & Fiction</a></li>
<li><a href="#">Mystery & Thriller</a></li>
<li><a href="#">Sci-Fi & Fantasy</a></li>
<li><a href="#">Romance</a></li>
<li><a href="#">Large Print Books</a></li>
<li><a href="#">Rare & Collectible Books</a></li>
</ul>
</div>
<div className="footer-section">
<h3>Partnerships</h3>
<ul>
<li><a href="#">Library Program</a></li>
<li><a href="#">Wholesale</a></li>
</ul>
<h3>Follow Us</h3>
<div className="social-icons">
<i className="fab fa-facebook-f"></i>
<i className="fab fa-twitter"></i>
<i className="fab fa-instagram"></i>
<i className="fab fa-pinterest"></i>
</div>
</div>
<div className="footer-section">
<h3>Quick Help</h3>
<ul>
<li><a href="#">Help & Support</a></li>
<li><a href="#">Shipping Costs</a></li>
<li><a href="#">Billing</a></li>
<li><a href="#">Return Policy</a></li>
<li><a href="#">Website Suggestions</a></li>
</ul>
</div>
<div className="footer-section">
<h3>About Us</h3>
<ul>
<li><a href="#">Our Story</a></li>
<li><a href="#">Our Purpose</a></li>
<li><a href="#">Our Team</a></li>
<li><a href="#">Social Responsibility</a></li>
<li><a href="#">Careers</a></li>
<li><a href="#">News</a></li>
<li><a href="#">Testimonials</a></li>
</ul>
</div>
<div className="footer-section">
<h3>Website</h3>
<ul>
<li><a href="#">ShareBookLove</a></li>
<li><a href="#">Educator Benefits</a></li>
<li><a href="#">Librarian Benefits</a></li>
<li><a href="#">e-Gift Cards</a></li>
<li><a href="#">Blog</a></li>
<li><a href="#">View Mobile Site</a></li>
</ul>
</div>
<div className="footer-section">
<h3>My Account</h3>
<ul>
<li><a href="#">Settings</a></li>
<li><a href="#">Shopping Cart</a></li>
<li><a href="#">Order History</a></li>
<li><a href="#">Wish List</a></li>
</ul>
</div>
</div>
</div>
<div className="footer-about">
<div className="footer-about-content">
LovedBooks sells millions of used books at the lowest everyday prices. We personally assess every book's quality and offer rare, out-of-print treasures. We deliver the joy of reading in recyclable packaging with free standard shipping on US orders over $15. LovedBooks.com. Read more. Spend less.
</div>
</div>
<div className="footer-bottom">
<div className="footer-bottom-content">
<div className="footer-links">
<a href="#">Terms of Use</a>
<a href="#">Privacy Policy</a>
<a href="#">Do Not Sell/Share My Personal Information</a>
<a href="#">Cookie Policy</a>
<a href="#">Cookie Preferences</a>
<a href="#">Accessibility Statement</a>
</div>
<div className="copyright">
Copyright © {new Date().getFullYear()} Lovedbooks.com<br/>
LovedBooks® and the LovedBooks® logo are registered trademarks of Loved Books Global, LLC.
</div>
</div>
</div>
</footer>
)
}
