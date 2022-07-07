export {};

declare global{
  namespace NodeJS {
      interface ProcessEnv {
        NEXT_PUBLIC_CLIENT_ID: string;
        ENV: 'dev'
      }
    }
}
 