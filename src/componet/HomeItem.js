import React, { Component } from 'react'
import PropTypes from 'prop-types'

 class HomeItem extends Component {
   
     onBookShelfChange(book,shelf){
      this.props.onBookShelfChange(book,shelf)
     }
   
    render() {
        const {book ,self ,onBookShelfChange} =this.props;

         return (
            <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks?book.imageLinks.thumbnail:null}")` }}></div>
              <div className="book-shelf-changer">
                <select defaultValue={book.shelf?book.shelf:self} onChange={(e) =>this.onBookShelfChange(book,e.target.value) }>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title"><h6>{this.props.book.title}</h6></div>
            <div className="book-authors">{book.authors?book.authors.map(name=> <React.Fragment key={name}>{name}<br/></React.Fragment>):"no authors"}</div>
          </div>
        )
    }
}

export default HomeItem
