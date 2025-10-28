export default function Footer() {
const FacebookIcon = () => (
<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
<path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.129 22 16.99 22 12z"/>
</svg>
)

const TwitterIcon = () => (
<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
<path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
</svg>
)

const InstagramIcon = () => (
<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
</svg>
)

const PinterestIcon = () => (
<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
<path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.001 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
</svg>
)

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
<FacebookIcon />
<TwitterIcon />
<InstagramIcon />
<PinterestIcon />
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
