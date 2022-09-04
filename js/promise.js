const newUser = user => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        users.push(user) // to test the reject part, we can replace the users to users2, so you will see this alert => "There is an issue...: ReferenceError: users2 is not defined"
        resolve()
      } catch (error) {
        reject(`There is an issue...: ${error}`)
      }
    }, 2500) // we use setTimeout here to simulate as a retrieving the data from a real rest api
  })
}

newUser(newUserObject) // the newUserObject comes from the main.js
  .then(response => userListGenerator()) // if the resolve returns, we are gonna execute this function
  .catch(e => {
    alert(e) // the e value comes from the reject part. ==> 'There is an issue...'. Also you can pass any object, array etc...
  })

// the main idea is we firstly want to add a new user then populate the table. if the adding new user part works correctly, then we will show the table, if not the reject part will be executed

// a real world example: you are adding a user to a db via rest api, if it works correctly, you are gonna add this user to the store (vuex, redux etc...), however if it does not work correctly, you are not gonna add it to the store. here you need to use promise, not a callback function.
