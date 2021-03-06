import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import swal from 'sweetalert2';
import cloudinary from 'cloudinary';

import BookCategories from './BookCategories';
import CardList from './CardList';
import BookForm from '../forms/BookForm';
import settings from '../../../utils/cloudinarySettings';
import CategoryForm from '../forms/CategoryForm';
import {
  getBookOrBooksAction,
  borrowBookAction,
  editBookAction,
  addBookAction,
  deleteBookAction,
} from '../../actions/bookAction';
import {
  createBookCategoryAction,
  getBookCategoryAction
} from '../../actions/categoryAction';
import { getNotificationsAction } from '../../actions/notificationsAction';
import Pagination from '../Pagination';

cloudinary.config(settings);

const propTypes = {
  books: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  editBook: PropTypes.func.isRequired,
  getAllBooks: PropTypes.func.isRequired,
  borrowBook: PropTypes.func.isRequired,
  addBook: PropTypes.func.isRequired,
  deleteBook: PropTypes.func.isRequired,
  getBookCategory: PropTypes.func.isRequired,
  createBookCategory: PropTypes.func.isRequired,
  getNotifications: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  isAdmin: PropTypes.bool.isRequired,
};
const defaultProps = {
  total: 0,
};
/**It contans state and behaviours for Collection Page component
 *
 * @class Collections
 *
 * @extends {React.Component}
 */
export class Collections extends React.Component {
  /**
     * Creates an instance of Collections.
     *
     * @param {object} props - contains props object from react
     *
     * @memberof Collections
     */
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      itemsCountPerPage: 5,
      book: {},
      numberOfTimesBookDeleted: 0,
      bookCategory: '',
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleEditBook = this.handleEditBook.bind(this);
    this.handleDeleteBook = this.handleDeleteBook.bind(this);
  }
  /**It invokes action to get all books, notifications,
   * and also initializes modal element
   * and resets numberOfTimesBookDeleted to zero
   *
     * @returns {object} jsx
     *
     * @memberof Collections
     */
  componentDidMount() {
    const { $ } = window;
    this.props.getAllBooks({
      bookCategory: '',
      currentPage: this.state.activePage,
      itemsCountPerPage: this.state.itemsCountPerPage
    });
    this.props.getNotifications({
      currentPage: 1,
      itemsCountPerPage: 5
    });
    $(document).ready(() => {
      $('#book-form-modal').modal({
        dismissible: false
      });
    });
    $('#book-category-form-modal').modal({
      dismissible: false
    });
    this.setState({
      numberOfTimesBookDeleted: 0
    });
  }
  /**It sets categories and books state on next props if it changes
   *
   * @returns {undefined}
   *
   * @param {object} nextProps - contains nextprops object
   *
   * @memberof Collections
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps.books !== this.props.books) {
      this.setState({ books: nextProps.books });
    }
  }
  /**It handles page changes by
   * setting a new state and invoking an action to get all books
   *
     * @returns {undefined}
     *
     * @param {number} pageNumber - page number
     *
     * @memberof Collections
     */
  handlePageChange(pageNumber) {
    this.setState({
      activePage: pageNumber,
    }, () => this.props.getAllBooks({
      bookCategory: this.state.bookCategory,
      currentPage: this.state.activePage,
      itemsCountPerPage: this.state.itemsCountPerPage
    }));
  }
  /**It looks for book to be edited in the props
   *  and changes the book state of the component
   *
   *
   * @param {object} event
   *
   * @returns {object} modal element
   *
   * @memberof Collections
   */
  handleEditBook(event) {
    const { $ } = window;
    event.preventDefault();
    const bookId = event.target.id;
    const book = this.props.books
      .find(editBook => parseInt(editBook.id, 10) === parseInt(bookId, 10));
    this.setState({
      book: book
    });
    return $('#book-form-modal').modal('open');
  }
  /**It deletes a book and set a new state
   * for numberOfTimesBookDeleted and also invokes
   * an action if it is upon to 5 times
   *
   * @returns {object} modal element
   *
   * @param {object} event - html event object
   *
   * @memberof Collections
   */
  handleDeleteBook(event) {
    event.preventDefault();
    const bookId = event.target.id;
    const book = this.props.books
      .find(deleteBook => parseInt(deleteBook.id, 10) === parseInt(bookId, 10));
    swal({
      text: "Are you sure you want to delete this book",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(() => {
      this.props.deleteBook(book);
      cloudinary.uploader.destroy(
        book.imagePublicId,
        (result) => { }
      );
      this.setState({
        numberOfTimesBookDeleted:
        this.state.numberOfTimesBookDeleted + 1,
      });

      if (this.state.numberOfTimesBookDeleted === 5) {
        this.props.getAllBooks({
          bookCategory: '',
          currentPage: 1,
          itemsCountPerPage: 5,
        });
      }
    }).catch(swal.noop);
  }
  /**It returns a div element
     *
     *
     * @returns {object} jsx
     *
     * @memberof Collections
     */
  render() {
    const {
      books,
      getAllBooks,
      editBook,
      addBook,
      createBookCategory,
      history,
      total,
      categories,
      isAdmin,
    } = this.props;
    return (
      <div className="container mt-2">
        <div className="row">
          {isAdmin ?
            <div>
              <BookForm
                book={this.state.book}
                categories={categories}
                editBook={editBook}
                addBook={addBook}
                history={history}
              />
              <CategoryForm
                createBookCategory={createBookCategory}
              />
              <div className="right" id="add-book-or-category-div">
                <a
                  className=
                    "bc mr-2 btn modal-trigger brown darken-4"
                  href="#book-category-form-modal"
                >
                  ADD CATEGORY
                </a>
                <a
                  id="add-book"
                  className=
                    "book btn modal-trigger brown darken-4"
                  href="#book-form-modal"
                >
                  ADD BOOK
                </a>
              </div> </div> : null}
          <BookCategories
            currentPage={this.state.activePage}
            itemsCountPerPage={this.state.itemsCountPerPage}
          />
          <CardList
            isAdmin={isAdmin}
            books={books}
            getAllBooks={getAllBooks}
            handleDeleteBook={this.handleDeleteBook}
            handleEditBook={this.handleEditBook}
          />
          {total ?
            <Pagination
              activePage={this.state.activePage}
              itemsCountPerPage={this.state.itemsCountPerPage}
              totalItemsCount={total}
              pageRangeDisplayed={5}
              handlePageChange={this.handlePageChange}
            /> : null}

        </div>

      </div>
    );
  }
}
Collections.propTypes = propTypes;
Collections.defaultProps = defaultProps;

/**
 * It slices the state and returns role, books, and total
 * as a properties injected into the component
 *
 * @param {object} state
 *
 * @returns {object} new state
*/
const mapStateToProps = (state) => ({
  books: state.bookReducer.rows,
  total: state.bookReducer.count,
  categories: state.bookCategoryReducer
});


export default
connect(
  mapStateToProps,
  {
    editBook: editBookAction,
    getAllBooks: getBookOrBooksAction,
    borrowBook: borrowBookAction,
    addBook: addBookAction,
    deleteBook: deleteBookAction,
    getBookCategory: getBookCategoryAction,
    createBookCategory: createBookCategoryAction,
    getNotifications: getNotificationsAction
  }
)(Collections);

