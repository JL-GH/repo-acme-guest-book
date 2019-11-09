const fs = require('fs')
const http = require('http')

const readFile = (file) => {
  return new Promise((res, rej) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        rej(err);
      }
      else {
        res(data.toString())
      }
    })
  })
}

const writeFile = (file, inputData) => {
  return new Promise((res, rej) => {
    fs.writeFile(file, inputData, (err, data) => {
      if (err) {
        rej(err);
      }
      else {
        res()
      }
    })
  })
}


http.createServer((request, response) => {
  if (request.url === '/users') {
    readFile('./guests.json')
    .then( data => {
      response.write(data)
      response.end()
    })
    .catch( ex => {
      response.write(ex)
      response.end()
    })
  }
  else{
    readFile('./index.html')
    .then( data => {
      response.write(data)
      response.end()
    })
    .catch( ex => {
      response.write(ex)
      response.end()
    })
  }
}).listen(3000)


const addUser = (user) => {
  return readFile('./guests.json')
    .then(data => {
      const users = JSON.parse(data)
      users.push(user)
      return writeFile('./guests.json', JSON.stringify(users))
    })
    .then(() => user)
}


addUser({name: 'test'})
