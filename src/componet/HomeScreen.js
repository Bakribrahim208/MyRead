import React, { Component } from 'react'
import HomeItem from './HomeItem'
import PropTypes from 'prop-types'
import { Shelfs } from "../Constant/Constans";
import {Link} from 'react-router-dom'






class HomeScreen extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onBookShelfChange: PropTypes.func.isRequired
    }



    render() {
        return (

            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                {/* ------------------------------Currently Reading----------------------------- */}
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {this.props.books.filter(book => {
                                 return book.shelf == "currentlyReading"
                            }).map((book, i) => (
                                <li key={i}  >
                                    <HomeItem book={book} onBookShelfChange={this.props.onBookShelfChange}></HomeItem>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>




                {/* ------------------------------Want to Read----------------------------- */}
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {this.props.books.filter(book => {
                                console.log(book.shelf)
                                return book.shelf == "wantToRead"
                            }).map((book, i) => (
                                <li key={i}  >
                                    <HomeItem book={book} onBookShelfChange={this.props.onBookShelfChange}></HomeItem>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>





                {/* ------------------------------Read----------------------------- */}
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {this.props.books.filter(book => {
                                console.log(book.shelf)
                                return book.shelf == "read"
                            }).map((book, i) => (
                                <li key={i}  >
                                    <HomeItem book={book} onBookShelfChange={this.props.onBookShelfChange} ></HomeItem>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>

                {/* ------------------------------Add Book Button ----------------------------- */}

                <div className="open-search">
                    <Link to="/search">
                        {" "}
                        <button>Add a book</button>
                    </Link>

                </div>


            </div>
        )
    }
}

export default HomeScreen
