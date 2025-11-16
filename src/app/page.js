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
        <HorizontalScroll books={topSellers} title="Top Sellers" />
        <HorizontalScroll books={newTrending} title="New & Trending" />
        <HorizontalScroll books={deals} title="Deals" />
      </div>
      <ReadingSection />
      <ReviewsSection />
      <Footer />
    </main>
  )
}
