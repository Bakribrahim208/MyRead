import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HomeItem from './HomeItem'

class BookShelf extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onBookShelfChange: PropTypes.func.isRequired,
        ShelfData: PropTypes.shape({
            title: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        }),
     }

    render() {
        const {shelf, books, onBookShelfChange } = this.props

        return (
            <div>
            
                {/* ------------------------------Currently Reading----------------------------- */}
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{shelf.title}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {books.filter(book => {
                                return book.shelf == shelf.id
                            }).map((book, i) => (
                                <li key={i}  >
                                    <HomeItem book={book} onBookShelfChange={onBookShelfChange}></HomeItem>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>

            </div>
        )
    }
}

export default BookShelf
