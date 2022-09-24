import * as React from 'react';
import { Link } from 'react-router-dom';

import { useQuery, gql } from '@apollo/client';
import { User } from 'src/user/entities/user.entity';

const GET_USERS = gql`
  query getUsers {
    users {
      name
    }
  }
`;

export const Home = () => {

    const { loading, error, data } = useQuery<{users: User[]}>(GET_USERS);
    if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      Page d'accueil <Link to="/about">te</Link>
      <div>
      <img
        alt=""
        className="logo"
        src="client/assets/logo.svg" 
        width="125"
        height="125"
      />
      </div>
      <div>
       {
        data.users.map(({name})=>{
            return <div>{name}</div>
        })
       }
      </div>
    </div>
  );
};
