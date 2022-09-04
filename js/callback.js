const newUser = (user, callback) => {
  setTimeout(() => {
    users.push(user), callback()
  }, 2500) // we use setTimeout here to simulate as a retrieving the data from a real rest api
}

const userListGenerator = () => {
  // this function will fill the table with the users data
  users.forEach(user => {
    createTheRow(user) // we send the user data to this function to populate the user data in the table
  })
}

newUser(
  {
    id: 5,
    firstName: 'Mustafa Çağrı',
    lastName: 'Güven',
    email: 'me@mustafacagri.com',
    gender: 'Male'
  },
  userListGenerator // here is the our callback function, we only need to send the name of function without any brackets
)

// the main idea is we firstly want to add a new user then populate the table, that's why we used the callback function here

// by the way, this is not a real world example because we do not need to wait to fill the table before adding a new user, this is just an example
