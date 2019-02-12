import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import UserAvatar from './UserAvatar';

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
                return <div key={user.id}
                            className="m-4 w-1/4 rounded overflow-hidden shadow-lg"
                            onClick={this.props.selectUser.bind(this, user)}>
                  <UserAvatar user={user} />
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
