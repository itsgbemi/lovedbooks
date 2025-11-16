'use client'
import { useRef } from 'react'
import Link from 'next/link'

export default function HorizontalScroll({ books, title }) {
  const scrollRef = useRef(null)

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 className="section-title">{title}</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={scrollLeft}
            style={{
              background: 'var(--primary-color)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            ←
          </button>
          <button 
            onClick={scrollRight}
            style={{
              background: 'var(--primary-color)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            →
          </button>
        </div>
      </div>
      <div className="horizontal-scroll" ref={scrollRef}>
        {books.map(book => (
          <div key={book.id} className="scroll-item">
            <Link href={`/products/${book.id}`} className="book-card">
              <div className="book-image" style={{backgroundImage: `url(${book.image})`}}></div>
              <div className="book-info">
                <div className="book-title">{book.title}</div>
                <div className="book-author">{book.author}</div>
                <div className="book-price">{book.price}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
