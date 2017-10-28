import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import addBookValidation from '../../../../../server/helper/addBookValidation';

class EditBookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {},
      category: '',
      title: '',
      author: '',
      quantity: '',
      imageUrl: '',
      isLoading: false,
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.book !== this.props.book) {
      this.setState({
        category: nextProps.book.category,
        title: nextProps.book.title,
        quantity: nextProps.book.quantity,
        author: nextProps.book.author,
        imageUrl: nextProps.book.imageUrl
      });
    }
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  /**
**@description Checks that form is valid
* @return {Boolean} boolen
*/
  validateForm() {
    const { errors, isValid } = addBookValidation(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  /**
 *
 * @return {void} the add book action is dispatched
 * @param {void} event - on click event
 * @memberof add Book form
 */
  onSubmit(event) {
    event.preventDefault();
    if (this.validateForm()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.addbook(this.state);
    }
  }
  render() {
    console.log('the props', this.props)
    const { errors, isLoading } = this.state;
    const categoryItems = this.props.categories.map(category => (
      <option
        key={category.id}
      >
        {category.category}
      </option>
    ));
    return (
      <div id="edit-book-form-modal" className="edit-book-modal modal">
        <div className="modal-content">
          <div>EDIT BOOK BY CATEGORY</div>
          <form onSubmit={this.onSubmit}>
            <div>
              <label>Category</label>
              <select
                className="browser-default"
                onChange={this.handleChange}
                name="category"
                value={this.state.category}>
                <option>Select a category</option>
                {categoryItems}
              </select>
              <span className="error-block">
                {errors.category}
              </span>
            </div>
            <div>
              <div className="input-field">
                <input
                  type="text"
                  name="title"
                  className="validate"
                  value={this.state.title}
                  onChange={this.handleChange}
                />
                <span className="error-block">
                  {errors.title}
                </span>
                <label >Title</label>
              </div>
            </div>
            <div>
              <div className="input-field">
                <input
                  name="author"
                  type="text"
                  className="validate"
                  value={this.state.author}
                  onChange={this.handleChange}
                />
                <span className="error-block">
                  {errors.author}
                </span>
                <label>Author</label>
              </div>
            </div>
            <div>
              <div className="input-field">
                <input
                  type="text"
                  name="quantity"
                  className="validate"
                  value={this.state.quantity}
                  onChange={this.handleChange}
                />
                <span className="error-block">
                  {errors.quantity}
                </span>
                <label>Quantity</label>
              </div>
            </div>
            <div>
              <div className="file-field input-field">
                <div className="btn">
                  <span>Edit Book Cover</span>
                  <input
                    type="file"
                    name="imageUrl"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="file-path-wrapper">
                  <input
                    className="file-path validate"
                    type="text"
                  />
                  <span className="error-block">
                    {errors.imageUrl}</span>
                </div>
              </div>
            </div>
            <button
              type="submit"
              disabled={isLoading}>
              EDIT BOOK
            </button>
          </form>
          <button
              className="modal-close">
              close
            </button>
        </div>
      </div>
    )
  }
}
EditBookForm.PropTypes = {
  categories: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
};
export default EditBookForm;
