import React, { Component } from 'react'
import HomeItem from './HomeItem'
import PropTypes from 'prop-types'
import { Shelfs } from "../Constant/Constans";
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf';






class HomeScreen extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onBookShelfChange: PropTypes.func.isRequired
    }



    render() {
        const { shelf, books, onBookShelfChange } = this.props

        return (

            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>


                {/* ------------------------------Draw Shelf books----------------------------- */}

                {shelf.map((sheleMaped, index) => (
                    <BookShelf key={index} shelf={sheleMaped} books={books} onBookShelfChange={onBookShelfChange} />

                ))}



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
