'use client'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PromoSection from '../components/PromoSection'
import Features from '../components/Features'
import BookGrid from '../components/BookGrid'
import HorizontalScroll from '../components/HorizontalScroll'
import ReadingSection from '../components/ReadingSection'
import ReviewsSection from '../components/ReviewsSection'
import { topSellers, newTrending, deals } from '../data/books'
export default function Home() {
return (
<main>
<Header />
<div className="container">
<PromoSection />
<Features />
<h2 className="section-title">Top Sellers</h2>
<BookGrid books={topSellers} />
<HorizontalScroll books={newTrending} title="New & Trending" />
<h2 className="section-title">Deals</h2>
<BookGrid books={deals} />
</div>
<ReadingSection />
<ReviewsSection />
<Footer />
</main>
)
}
