import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Gravatar from 'react-gravatar';

const USERS_QUERY = gql`
  query {
    users {
      id
      name
      email
      booksCount
    }
  }
`;

class Users extends Component {
  render() {
    return (
      <Query query={USERS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching..</div>
          if (error) return <div>Error!</div>

          return (
            <div className="flex flex-wrap mb-4">
              {data.users.map((user) => {
                return <div key={user.id} className="m-4 w-1/4 rounded overflow-hidden shadow-lg">
                  <Gravatar email={user.email} size={150} className="w-full" />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{user.name}</div>
                    <p className="text-grey-darker text-base">{user.email}</p>
                    <p className="text-grey-darker text-base">{user.booksCount} books</p>
                  </div>
                </div>
              })}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default Users;
