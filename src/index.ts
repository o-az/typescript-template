import { environment } from '@/env'

export function main() {
  return environment.MY_ENV_VARIABLE
}

// yarn tsnode src/index.ts --watch
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(console.log)
  .catch(console.trace)
