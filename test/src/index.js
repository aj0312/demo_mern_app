import React from 'react'
import {render} from 'react-dom'

const bookList = [
    {title: 'Book1', pages: 290, author: 'Anon'},
    {title: 'Book2', pages: 130, author: 'Abc'},
    {title: 'Book3', pages: 420, author: 'Def'},
]
const Book = (book) => {
    return (
        <span>
            <h4>Book title: {book.title}</h4>
            <p>Book Pages: {book.pages}</p>
            <p>Book author: {book.author}</p>
        </span>
    )
}

class Library extends React.Component {
    render() {
        const {books} = this.props
        return(
            <div>
                {books.map(
                    (book, i) =>
                        <Book
                            key={i}
                            title={book.title}
                            author={book.author}
                            pages={book.pages}
                        />
                )}
            </div>
        )
    }
}

render(
    <Library books={bookList} />,
  document.getElementById('root')
)