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

const userListGenerator = () => {
  // this function will fill the table with the users data
  users.forEach(user => {
    createTheRow(user) // we send the user data to this function to populate the user data in the table
  })
}

newUser({
  id: 5,
  firstName: 'Mustafa Çağrı',
  lastName: 'Güven',
  email: 'me@mustafacagri.com',
  gender: 'Male'
})
  .then(response => userListGenerator()) // if the resolve returns, we are gonna execute this function
  .catch(e => {
    alert(e) // the e value comes from the reject part. ==> 'There is an issue...'. Also you can pass any object, array etc...
  })

// the main idea is we firstly want to add a new user then populate the table. if the adding new user part works correctly, then we will show the table, if not the reject part will be executed
