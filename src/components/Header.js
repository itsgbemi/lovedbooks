'use client'
import { useState } from 'react'

export default function Header() {
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

const SearchIcon = () => (
<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
</svg>
)

const HeartIcon = () => (
<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
<path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/>
</svg>
)

const ListIcon = () => (
<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
<path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0 4h2v-2H3v2zm4 0h14v-2H7v2zm0-4h14v-2H7v2zm0-4h14V9H7v2zM7 5v2h14V5H7z"/>
</svg>
)

const CartIcon = () => (
<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
<path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
</svg>
)

const ChevronDownIcon = () => (
<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
<path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
</svg>
)

const BarsIcon = () => (
<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
</svg>
)

const TimesIcon = () => (
<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
</svg>
)

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
<SearchIcon />
</button>
</div>
<div className="header-actions">
<a href="#" className="header-action-item">
<HeartIcon />
<span>Wishlist</span>
</a>
<div className="login-section">
<div className="hi-reader">Hi Reader</div>
<a href="#" className="login-link">Log In</a>
</div>
<a href="#" className="header-action-item">
<ListIcon />
<span>My Lists</span>
</a>
<a href="#" className="header-action-item">
<CartIcon />
<span>Cart</span>
</a>
</div>
</div>
<nav className="nav-menu">
<div className="nav-left">
<a href="#">Gift Guides</a>
<div className="dropdown">
<a href="#">Featured <ChevronDownIcon /></a>
<div className="dropdown-content">
<a href="#">New Releases</a>
<a href="#">Bestsellers</a>
<a href="#">Award Winners</a>
<a href="#">Staff Picks</a>
</div>
</div>
<div className="dropdown">
<a href="#">Books <ChevronDownIcon /></a>
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
<a href="#">Collectible Books <ChevronDownIcon /></a>
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
<BarsIcon />
</button>
<div className="mobile-logo">
<a href="/">
<img src="https://res.cloudinary.com/dqhawdcol/image/upload/v1761623346/a9vmjl3zzlgmgbafkkga.svg" alt="LovedBooks Logo"/>
</a>
</div>
<div className="mobile-icons">
<HeartIcon />
<CartIcon />
</div>
</div>
<div className="mobile-search">
<input type="text" placeholder="Search 19 million titles"/>
<button className="mobile-search-button">
<SearchIcon />
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
<TimesIcon />
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
