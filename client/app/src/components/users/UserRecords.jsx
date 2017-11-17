import React from 'react';
import isEmpty from 'lodash';

const UserRecords = (props) => {
  let historyItem = props.userHistory.map((historyObj, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{historyObj.Book.title}</td>
      <td>{historyObj.Book.author}</td>
      <td>{historyObj.dueDate}</td>
      <td>{historyObj.borrowedDate}</td>
      <td >
        <button
          className="bc mr-2 waves-effect waves-light btn brown darken-4 s6"
          onClick={() => props.handleReturnBook({
            historyObj,
            id: props.userId,
            CB: props.returnBook
          })
          }>
          {historyObj.returned ? "Returned" : "Borrowed"}
        </button></td>
    </tr>
  ));
  return (
    <div>
      <h4 className="bc">Your activity below</h4>
      {isEmpty(props.userHistory) ? <table className="users-profile">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Title</th>
            <th>Author</th>
            <th>Due Date</th>
            <th>Borrowed Date</th>
            <th>Return</th>
          </tr>
        </thead>
        <tbody>
          {historyItem}
        </tbody>
      </table> : <h3>You have no record</h3>}
    </div>
  );
};
export default UserRecords;
