import 'dotenv/config';

export function main() {
  return process.env.MY_ENV_VARIABLE;
}

console.log(main());
