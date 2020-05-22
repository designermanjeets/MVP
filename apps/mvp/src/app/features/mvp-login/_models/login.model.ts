export class User {
    constructor(
      public username: string,
      public password?: string,
      public token?: string
    ) {  }
}

export const TEMPUSER = [
  {
    "payload": {
        "username": "manjeet",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Im1hbmplZXRzaW5naCIsImlhdCI6MTUxNjIzOTAyMn0.ZptTVS0fKWeMs8fJsqUUVDHAQ8FXgIzpyAcOuQ0jCek",
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Im1hbmplZXRzaW5naCIsImlhdCI6MTUxNjIzOTAyMn0.ZptTVS0fKWeMs8fJsqUUVDHAQ8FXgIzpyAcOuQ0jCek",
        "message": "Valid User Text Message.",
        "header": "Valid Header Value"
    }
  }
]