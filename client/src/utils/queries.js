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
                bookId
                image
                link
            }
        }
    }
`;