const newUser = (user, callback) => {
  setTimeout(() => {
    users.push(user), callback()
  }, 2500) // we use setTimeout here to simulate as a retrieving the data from a real rest api
}

newUser(
  newUserObject, // this comes from the main.js
  userListGenerator // here is the our callback function, we only need to send the name of function without any brackets
)

// the main idea is we firstly want to add a new user then populate the table, that's why we used the callback function here

// by the way, this is not a real world example because we do not need to wait to fill the table before adding a new user, this is just an example
