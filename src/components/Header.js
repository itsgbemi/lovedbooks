'use client'
import { useState } from 'react'
export default function Header() {
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
return (
<header>
<div className="header-content">
<div className="header-top">
<div className="logo">
<a href="/">
<img src="https://res.cloudinary.com/dqhawdcol/image/upload/v1761623346/a9vmjl3zzlgmgbafkkga.svg" alt="LovedBooks Logo"/>
</a>
</div>
<div className="search-bar">
<input type="text" placeholder="Search 19 million titles"/>
<button className="search-button">
<i className="fas fa-search"></i>
</button>
</div>
<div className="header-actions">
<a href="#" className="header-action-item">
<i className="far fa-heart"></i>
<span>Wishlist</span>
</a>
<div className="login-section">
<div className="hi-reader">Hi Reader</div>
<a href="#" className="login-link">Log In</a>
</div>
<a href="#" className="header-action-item">
<i className="fas fa-list"></i>
<span>My Lists</span>
</a>
<a href="#" className="header-action-item">
<i className="fas fa-shopping-cart"></i>
<span>Cart</span>
</a>
</div>
</div>
<nav className="nav-menu">
<div className="nav-left">
<a href="#">Gift Guides</a>
<div className="dropdown">
<a href="#">Featured <i className="fas fa-chevron-down"></i></a>
<div className="dropdown-content">
<a href="#">New Releases</a>
<a href="#">Bestsellers</a>
<a href="#">Award Winners</a>
<a href="#">Staff Picks</a>
</div>
</div>
<div className="dropdown">
<a href="#">Books <i className="fas fa-chevron-down"></i></a>
<div className="dropdown-content">
<a href="#">Fiction</a>
<a href="#">Non-Fiction</a>
<a href="#">Children's Books</a>
<a href="#">Textbooks</a>
<a href="#">Academic Books</a>
</div>
</div>
<a href="#">Deals</a>
<div className="dropdown">
<a href="#">Collectible Books <i className="fas fa-chevron-down"></i></a>
<div className="dropdown-content">
<a href="#">First Editions</a>
<a href="#">Signed Copies</a>
<a href="#">Rare Books</a>
<a href="#">Antique Books</a>
</div>
</div>
<a href="#">e-Gift Cards</a>
</div>
<a href="#" className="see-all-books">See All Books</a>
</nav>
<div className="mobile-header-top">
<button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(true)}>
<i className="fas fa-bars"></i>
</button>
<div className="mobile-logo">
<a href="/">
<img src="https://res.cloudinary.com/dqhawdcol/image/upload/v1761623346/a9vmjl3zzlgmgbafkkga.svg" alt="LovedBooks Logo"/>
</a>
</div>
<div className="mobile-icons">
<i className="far fa-heart"></i>
<i className="fas fa-shopping-cart"></i>
</div>
</div>
<div className="mobile-search">
<input type="text" placeholder="Search 19 million titles"/>
<button className="mobile-search-button">
<i className="fas fa-search"></i>
</button>
</div>
</div>
{mobileMenuOpen && (
<div className="mobile-menu">
<div className="mobile-menu-header">
<a href="/">
<img src="https://res.cloudinary.com/dqhawdcol/image/upload/v1761623346/a9vmjl3zzlgmgbafkkga.svg" alt="LovedBooks Logo"/>
</a>
<button className="close-menu" onClick={() => setMobileMenuOpen(false)}>
<i className="fas fa-times"></i>
</button>
</div>
<nav className="mobile-nav">
<a href="#">Gift Guides</a>
<a href="#">Featured</a>
<a href="#">Books</a>
<a href="#">Deals</a>
<a href="#">Collectible Books</a>
<a href="#">e-Gift Cards</a>
<a href="#">See All Books</a>
</nav>
</div>
)}
</header>
)
}
