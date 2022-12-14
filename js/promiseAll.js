const ids = [5, 6, 7, 8] // here is the our ids which we will fetch them from https://jsonplaceholder.typicode.com/users/:id

const apiURL = 'https://jsonplaceholder.typicode.com/users/' // our url for rest api and we will use ids as a suffix

Promise.all([axios(apiURL + ids[0]), axios(apiURL + ids[1]), axios(apiURL + ids[2]), axios(apiURL + ids[3])]) // in the Promise.all, we need to use an array
  .then(response => {
    response.forEach(res => addTheUser(res.data)) // the response has an array of responses for all promises
  })
  .then(_res => userListGenerator()) // we need to use at least a variable for response. for this example, we will not use the response, that's why I use it a prefix '_'. if all of our promises work correctly, then we are gonna add the results to our table
