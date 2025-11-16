'use client'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { topSellers, newTrending, deals } from '../data/books'
import Link from 'next/link'
import { useCart } from '../context/CartContext'

export default function ProductPage() {
  const params = useParams()
  const productId = parseInt(params.id)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')
  const { addToCart } = useCart()
  
  const allBooks = [...topSellers, ...newTrending, ...deals]
  const product = allBooks.find(book => book.id === productId)

  if (!product) {
    return (
      <div className="product-not-found">
        <div className="container">
          <h1>Product Not Found</h1>
          <p>Sorry, the book you're looking for doesn't exist.</p>
          <Link href="/" className="back-to-home">
            Return to Homepage
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product, quantity)
  }

  const incrementQuantity = () => setQuantity(prev => prev + 1)
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1)

  const renderTabContent = () => {
    switch (activeTab) {
      case 'description':
        return (
          <div className="tab-panel active">
            <h3>About this Book</h3>
            <p>{product.description}</p>
            
            <h4>Key Features:</h4>
            <ul>
              <li>Engaging storyline that keeps you hooked</li>
              <li>Well-developed characters</li>
              <li>Beautiful prose and writing style</li>
              <li>{product.condition} condition</li>
              <li>Great value for money</li>
            </ul>
          </div>
        )
      case 'details':
        return (
          <div className="tab-panel active">
            <h3>Product Details</h3>
            <div className="details-grid">
              <div className="detail-item">
                <strong>ISBN:</strong> {product.isbn}
              </div>
              <div className="detail-item">
                <strong>Publisher:</strong> {product.publisher}
              </div>
              <div className="detail-item">
                <strong>Publication Year:</strong> {product.publicationYear}
              </div>
              <div className="detail-item">
                <strong>Pages:</strong> {product.pages}
              </div>
              <div className="detail-item">
                <strong>Language:</strong> {product.language}
              </div>
              <div className="detail-item">
                <strong>Category:</strong> {product.category}
              </div>
              <div className="detail-item">
                <strong>Condition:</strong> {product.condition}
              </div>
            </div>
          </div>
        )
      case 'reviews':
        return (
          <div className="tab-panel active">
            <h3>Customer Reviews</h3>
            <div className="review-summary">
              <div className="overall-rating">
                <div className="stars-large">
                  <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                </div>
                <div className="rating-number">4.8 out of 5</div>
                <div className="review-count">Based on 128 reviews</div>
              </div>
            </div>
            <div className="review-list">
              <div className="review-item">
                <div className="review-stars">
                  <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                </div>
                <p className="review-text">"Absolutely loved this book! The story was captivating and the characters felt so real. Couldn't put it down!"</p>
                <div className="reviewer">Sarah M.</div>
              </div>
              <div className="review-item">
                <div className="review-stars">
                  <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                </div>
                <p className="review-text">"The book arrived in perfect condition and the story was even better than I expected. Highly recommend!"</p>
                <div className="reviewer">James T.</div>
              </div>
            </div>
          </div>
        )
      case 'shipping':
        return (
          <div className="tab-panel active">
            <h3>Shipping & Returns</h3>
            <div className="shipping-info-detailed">
              <div className="shipping-item">
                <h4>Shipping Options</h4>
                <ul>
                  <li><strong>Standard Shipping:</strong> 5-7 business days - FREE on orders over $15</li>
                  <li><strong>Expedited Shipping:</strong> 2-3 business days - $4.99</li>
                  <li><strong>Next Day Shipping:</strong> 1 business day - $9.99</li>
                </ul>
              </div>
              <div className="shipping-item">
                <h4>Return Policy</h4>
                <p>We offer a 30-day return policy for all items. Books must be in the same condition as when received. Return shipping is free for defective items.</p>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <main>
      <div className="breadcrumb">
        <div className="container">
          <Link href="/">Home</Link> &gt; 
          <Link href="/#books">Books</Link> &gt; 
          <span>{product.title}</span>
        </div>
      </div>
      
      <div className="product-page">
        <div className="container">
          <div className="product-container">
            <div className="product-image-section">
              <div 
                className="book-image-large"
                style={{backgroundImage: `url(${product.image})`}}
              ></div>
            </div>
            
            <div className="product-details">
              <h1>{product.title}</h1>
              <p className="author">by {product.author}</p>
              
              <div className="rating-section">
                <div className="stars">
                  <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                </div>
                <span className="rating-text">4.8 (128 reviews)</span>
              </div>
              
              <div className="price-section">
                <div className="price">{product.price}</div>
                <div className="original-price">$12.99</div>
                <div className="save-badge">Save 45%</div>
              </div>
              
              <div className="condition-section">
                <div className="condition-badge">Condition: {product.condition}</div>
                <div className="stock-status">In Stock • Ready to Ship</div>
              </div>
              
              <div className="quantity-section">
                <label>Quantity:</label>
                <div className="quantity-selector">
                  <button onClick={decrementQuantity}>-</button>
                  <span>{quantity}</span>
                  <button onClick={incrementQuantity}>+</button>
                </div>
              </div>
              
              <div className="action-buttons">
                <button className="add-to-cart-btn" onClick={handleAddToCart}>
                  Add to Cart
                </button>
                <button className="wishlist-btn">
                  ♡ Add to Wishlist
                </button>
              </div>
              
              <div className="shipping-info">
                <div className="info-item">
                  <span>🚚</span>
                  <span>Free shipping on orders over $15</span>
                </div>
                <div className="info-item">
                  <span>↩️</span>
                  <span>30-day return policy</span>
                </div>
                <div className="info-item">
                  <span>📞</span>
                  <span>Customer support: 24/7</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="product-tabs">
            <div className="tabs-header">
              <button 
                className={`tab ${activeTab === 'description' ? 'active' : ''}`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button 
                className={`tab ${activeTab === 'details' ? 'active' : ''}`}
                onClick={() => setActiveTab('details')}
              >
                Details
              </button>
              <button 
                className={`tab ${activeTab === 'reviews' ? 'active' : ''}`}
                onClick={() => setActiveTab('reviews')}
              >
                Reviews
              </button>
              <button 
                className={`tab ${activeTab === 'shipping' ? 'active' : ''}`}
                onClick={() => setActiveTab('shipping')}
              >
                Shipping
              </button>
            </div>
            
            <div className="tab-content">
              {renderTabContent()}
            </div>
          </div>
          
          <div className="related-products">
            <h2>You Might Also Like</h2>
            <div className="books-grid">
              {allBooks
                .filter(book => book.id !== productId && book.category === product.category)
                .slice(0, 4)
                .map(book => (
                  <Link key={book.id} href={`/products/${book.id}`} className="book-card">
                    <div className="book-image" style={{backgroundImage: `url(${book.image})`}}></div>
                    <div className="book-info">
                      <div className="book-title">{book.title}</div>
                      <div className="book-author">{book.author}</div>
                      <div className="book-price">{book.price}</div>
                    </div>
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
