import gql from 'graphql-tag';

export const GET_ME = gql`
    {
        me {
            _id
            username
            email
            savedBooks {
                authors
                title
                description
                bookCount
                bookId
                image
                link
            }
        }
    }
`;