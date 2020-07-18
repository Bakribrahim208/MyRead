import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BookApi from "../BooksAPI";
import HomeScreen from './HomeScreen';
import HomeItem from './HomeItem';

class SearchScreen extends Component {
    static propTypes = {
        myBooks: PropTypes.array.isRequired,
        onBookShelfChange: PropTypes.func.isRequired
    };
    state = {
        searchQuery: "",
        queriedBooks: [],
        error:false
    };

    updateQuery = (query) => {
        if (query ===  '' || query === undefined) {
            this.setState({
                searchQuery: '',
                queriedBooks: [],
                error:true
            })
 
        }
        else {
            this.setState({
                searchQuery:query,
             })
 
            this.fetchSearchResults(query)

        }
    }

    fetchSearchResults = (query) => {
        console.log(query)

            BookApi.search(query.trim())
                .then(result => {
                    console.log(result)
                    if (result === undefined || (result.error && result.error === 'empty query')) {
                         return this.setState({
                              queriedBooks: [] , error:true})
                    }
                    else {

                        this.setState({ queriedBooks: this.updateShelf(result)  , error:false })
                    }
                })
         

    }

    updateShelf(result) {

        this.props.myBooks.forEach((book) => {
            const bookIndex = result.findIndex((searchBook) => searchBook.id === book.id)
            if (bookIndex > -1) {
                result[bookIndex].shelf = book.shelf
            }



        });
        return result

    }

    render() {
        return (
            <div>
                <div className="search-books-bar">
                    <Link className='close-search' to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={this.state.searchQuery}
                            onChange={(event) => {
                                this.updateQuery(event.target.value)
                            }}
                        />

                    </div>

                </div>

                <div className="search-books-results">
                    
                {this.state.error && (
               <div className = 'error'>
                <h4 aria-posinset='center'>warnning: Please type valid search</h4>
            </div>
        )}{!this.state.error && (
            <div className = 'error'>
             <h4 aria-posinset='center'>{this.state.queriedBooks.length} result match</h4>
         </div>
     )}
                </div>
                <div className="bookshelf-books">

                    <ol className="books-grid">
                        {this.state.queriedBooks.map((book, i) => (
                            <li key={i}  >
                                <HomeItem book={book} self='none' onBookShelfChange={this.props.onBookShelfChange} ></HomeItem>
                            </li>
                        ))}
                    </ol>
                </div>
              
            </div>
        )
    }

}


export default SearchScreen
