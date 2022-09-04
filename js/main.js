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

const tbody = document.getElementById('userList').getElementsByTagName('tbody')[0] // get the tbody of the userList table

const createTheRow = obj => {
  // this function is not important for our examples, this one is just used for to fill the table
  const row = tbody.insertRow(-1) // create a row at the end of the table > tbody

  for (key in obj) {
    const cell = row.insertCell(-1) // create a cell at the end of the row
    cell.innerHTML = obj[key] // we fill the cell here with the user's element
  }
}
