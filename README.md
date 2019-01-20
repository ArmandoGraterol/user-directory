# Users Directory

## How to use it

- Clone the repo
- Go to the project main folder
- Install server dependencies running `npm install`.
- Go to the `client` folder
- Install client dependencies running `npm install`.
- Go back to the project main folder
- Run the client and server with `npm run dev`
- Go to `localhost:3000/people` to see the directory

API Endpoints:

- `GET /all-people`: It returns an array of people in the directory.
- `GET /people/by-name/:name`: It returns people that have the given string in the first or last name.
