// here is the our general functions and dummy data

const users = [
  {
    id: 1,
    firstName: 'Alyson',
    lastName: 'Dyas',
    email: 'adyas0@washington.edu',
    gender: 'Female'
  },
  {
    id: 2,
    firstName: 'Arleta',
    lastName: 'Spyby',
    email: 'aspyby1@unicef.org',
    gender: 'Female'
  },
  {
    id: 3,
    firstName: 'Gray',
    lastName: 'Henzer',
    email: 'ghenzer2@nba.com',
    gender: 'Bigender'
  },
  {
    id: 4,
    firstName: 'Gertrude',
    lastName: 'Manger',
    email: 'gmanger3@discuz.net',
    gender: 'Female'
  }
] // here is the dummy data

const newUserObject = {
  id: 5,
  firstName: 'Mustafa Çağrı',
  lastName: 'Güven',
  email: 'me@mustafacagri.com',
  gender: 'Male'
} // here is the dummy new user data to use it in everywhere

const tbody = document.getElementById('userList').getElementsByTagName('tbody')[0] // get the tbody of the userList table

const createTheRow = obj => {
  // this function is not important for our examples, this one is just used for to fill the table
  const row = tbody.insertRow(-1) // create a row at the end of the table > tbody

  for (key in obj) {
    const cell = row.insertCell(-1) // create a cell at the end of the row
    cell.innerHTML = obj[key] // we fill the cell here with the user's element
  }
}

const userListGenerator = () => {
  // this function will fill the table with the users data
  users.forEach(user => {
    createTheRow(user) // we send the user data to this function to populate the user data in the table
  })
}

function addTheUser(user) {
  // this function is not important for our example. we use this to retrieve the data from the rest api in the correct form
  try {
    if (user) {
      const { id, name, email, gender = 'Male' } = user
      const fullName = name.split(' ')
      const firstName = fullName[0]
      const lastName = fullName[1]
      users.push({ id, firstName, lastName, email, gender })
    }
  } catch (error) {
    console.log(error.message)
  }
}
