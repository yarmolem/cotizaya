export const handleError = ({ graphQLErrors, ...rest }) => {
  if (graphQLErrors) {
    console.log(graphQLErrors[0].debugMessage)
  } else {
    console.log(rest)
  }
}
