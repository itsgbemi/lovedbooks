export default function HorizontalScroll({ books, title }) {
return (
<>
<h2 className="section-title">{title}</h2>
<div className="horizontal-scroll">
{books.map(book => (
<div key={book.id} className="scroll-item">
<div className="book-card">
<div className="book-image" style={{backgroundImage: `url(${book.image})`}}></div>
<div className="book-info">
<div className="book-title">{book.title}</div>
<div className="book-author">{book.author}</div>
<div className="book-price">{book.price}</div>
</div>
</div>
</div>
))}
</div>
</>
)
}
