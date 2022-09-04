const apiURL = 'https://jsonplaceholder.typicode.com/users/' // our url for rest api and we will use ids as a suffix

const fetchAPI = async () => {
  const response = await axios(apiURL) // we fetch the url here and it will return an array which contains 10 users
  const data = await response.data // we use the 'await' here again because we do not know defining the data variable how many milliseconds will take

  await data.forEach(user => {
    // we are using await again because before we populate our table with users data, users data must be ready to use
    addTheUser(user)
  })

  userListGenerator()
}

fetchAPI() // the main execution function

// this approach is not the best usage becauase, js is not a C# or any other backend technologies. and this makes the js is more faster than the others. all works can be handled in the parallel time and we do not need to wait the next job to be handled.
