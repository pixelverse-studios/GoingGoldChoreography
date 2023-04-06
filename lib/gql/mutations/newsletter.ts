import gql from 'graphql-tag'

export const ADD_CALENDLY_PARTICIPANT = gql`
    mutation addCalendlyParticipant($inviteeUri: String!) {
        addCalendlyParticipant(inviteeUri: $inviteeUri) {
            ... on NewsletterSuccess {
                _id
                email
                name
                subscribed
                createdAt
                updatedAt
            }
            ... on Errors {
                type
                message
                errors {
                    field
                    message
                }
            }
        }
    }
`

export const ADD_NEWSLETTER_PARTICIPANT = gql`
    mutation addNewsletterParticipant($email: String!, $name: String!) {
        addNewsletterParticipant(email: $email, name: $name) {
            ... on NewsletterSuccess {
                _id
                email
                name
                subscribed
                createdAt
                updatedAt
            }
            ... on Errors {
                type
                message
                errors {
                    field
                    message
                }
            }
        }
    }
`
