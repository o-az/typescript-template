interface EnvironmentVariables {
  MY_ENV_VARIABLE: string;
}

declare namespace NodeJS {
  interface ProcessEnv extends EnvironmentVariables {}
}
