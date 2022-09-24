import * as React from 'react';
import { Link } from 'react-router-dom';

import {  gql } from '@apollo/client';
import { User } from 'src/user/entities/user.entity';
import { useCustomQuery } from '../hooks/query-hook';

const GET_USERS = gql`
  query getUsers {
    users {
      name
    }
  }
`;

export const Home = () => {
  const { data } = useCustomQuery<{ users?: User[] }>(GET_USERS);
  const [users, setUsers] = React.useState<User[]>([])

  React.useEffect(()=>{
    if(data != null){
        setUsers(data.users)
    }else{
        setUsers([])
    }
  },[data])

  return (
    <div>
      Page d'accueil <Link to="/about">About</Link>
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
        {users.map(({ name }) => {
          return <div key={name}>{name}</div>;
        })}
      </div>
    </div>
  );
};
