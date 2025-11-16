export default function BookGrid({ books }) {
return (
<div className="books-grid">
{books.map(book => (
<div key={book.id} className="book-card">
<div className="book-image" style={{backgroundImage: `url(${book.image})`}}></div>
<div className="book-info">
<div className="book-title">{book.title}</div>
<div className="book-author">{book.author}</div>
<div className="book-price">{book.price}</div>
</div>
</div>
))}
</div>
)
}
