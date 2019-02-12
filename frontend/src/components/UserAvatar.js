import React, { Fragment } from 'react';
import Gravatar from 'react-gravatar';

const UserAvatar = ({ user }) => (
  <Fragment>
    <Gravatar email={user.email} size={150} className="w-full" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{user.name}</div>
      <p className="text-grey-darker text-sm">{user.email}</p>
      <p className="text-grey-darker text-base">{user.booksCount} books</p>
    </div>
  </Fragment>
)

export default UserAvatar;
