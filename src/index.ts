import { environment } from '@/env'

export function main() {
  return environment.MY_ENV_VARIABLE
}
console.log(main())
// // yarn tsnode src/index.ts --watch
// const getPosts = await fetch('https://jsonplaceholder.typicode.com/posts')

// console.log(getPosts.json())
