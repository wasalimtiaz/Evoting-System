import { gql } from 'apollo-boost';

const getUsersQuery = gql`
    {
        users {
            name
            id
        }
    }
`;

const getNamesQuery = gql`
    {
        names {
            name
            id
        }
    }
`;

const addNameMutation = gql`
    mutation AddName($name: String!, $location: String!, $userId: ID!){
        addName(name: $name, location: $location, userId: $userId){
            name
            id
        }
    }
`;

const getNameQuery = gql`
    query GetName($id: ID){
        name(id: $id) {
            id
            name
            location
            user {
                id
                name
                cnic
                names {
                    name
                    id
                }
            }
        }
    }
`;

export { getUsersQuery, getNamesQuery, addNameMutation, getNameQuery };