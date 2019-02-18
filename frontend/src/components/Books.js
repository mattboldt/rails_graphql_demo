import React, { Fragment } from 'react';

const Books = ({ books }) => (
  <Fragment>
    {books.map((book) =>
      <div key={book.id} className="flex border-b border-solid border-grey-light">
        <div className="w-3/4 p-4">
          <h3>{book.title}</h3>
          <p className="text-grey-darker">
            {[...Array(book.averageRating).keys()].map((s) =>
              <span key={s}>&#9733;</span>
            )}
          </p>
        </div>
        <div className="w-1/4 p-4 text-right">
          <img src={book.coverUrl} style={{height: '150px'}} alt={book.title} />
        </div>
      </div>
    )}
  </Fragment>
);

export default Books;
