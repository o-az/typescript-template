import 'dotenv/config'

export const environment = {
  MY_ENV_VARIABLE: process.env.MY_ENV_VARIABLE,
}

const data = fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.text)
console.log(data)
// let data
// fetch('https://jsonplaceholder.typicode.com/posts').then(response => (data = response.json()))
// console.log(data)
