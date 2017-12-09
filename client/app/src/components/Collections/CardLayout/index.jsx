import React from 'react';
import isEmpty from 'lodash';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const propTypes = {
  books: PropTypes.array.isRequired
};
/**
 *
 *
 * @param {any} props
 * @returns {object} jsx
 */
function CardList({ books }) {
  return (
    <div className="col s9 l9 m9">
      {
        isEmpty(books) ?
          <ul >

            {books && books.map(book => (<li
              key={book.id}
              className="col s2 l3 m3"
            >
              <Link to={`/collections/books/${book.id}`}>
                <div className="book-size card">

                  <div className="card-image">
                    <img
                      role="book cover"
                      src={book.imageUrl}
                      style={{ width: '100%', height: '150px' }} />
                  </div>
                  <div className="card-content card-color">
                    {book.title}
                  </div>
                </div>
              </Link>

            </li>))}
          </ul> :
          <h3>There are now no books in the library.</h3>}
    </div>
  );
}
CardList.propTypes = propTypes;

export default CardList;