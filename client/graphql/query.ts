import { gql } from "@apollo/client";

export const LOGIN = gql`
    mutation ($input:  CreateUserInput!){
      createUser(createUserInput: $input){
        __typename
      }
    }
`;