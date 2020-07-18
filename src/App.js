import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import * as BooksAPI from './BooksAPI'
import HomeScreen from './componet/HomeScreen'
import SearchScreen from './componet/SearchScreen'
import { Route } from "react-router-dom";



const SHELVES = [
  {
    title: 'Currently Reading',
    id: 'currentlyReading'
  },
  {
    title: 'Want To Read',
    id: 'wantToRead'
  },
  {
    title: 'Read',
    id: 'read'
  }
];

class BooksApp extends React.Component {
  state = {
     books: []
  }
  
  onBookShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      // this.fetchMyBooks()
      var data = [...this.state.books];
      var index = data.findIndex(obj => obj.id === book.id);
      if (index > -1) {
        data[index].shelf = shelf;
      }
      else {
        book.shelf = shelf
        data.push(book)
       }
      this.setState({ books:data });
    })
  }
  fetchMyBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  

  componentDidMount() {
    this.fetchMyBooks()
  }



  
  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <HomeScreen shelf={SHELVES} books={this.state.books} onBookShelfChange={this.onBookShelfChange} ></HomeScreen>
        )} />
        <Route path='/search'

          render={() => (
            <SearchScreen myBooks={this.state.books} onBookShelfChange={this.onBookShelfChange}></SearchScreen>
          )}
        />
      </div>
    )
  }
}

export default BooksApp
