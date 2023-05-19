# anime-app
## Structure
### Backend (NestJS)
Start a new NestJS project by running nest new backend in your command line. This will create a new directory called backend with a new NestJS project.

Inside the backend directory, the relevant files and folders are:

src/app.module.ts: This is where you define your NestJS modules.
src/anime/anime.module.ts: The module for handling anime-related requests.
src/anime/anime.service.ts: The service for fetching data from the AniList API.
src/anime/anime.controller.ts: The controller for handling incoming HTTP requests.
The structure will look like this:



|-- /node_modules <br/>
|-- /src <br/>
|   |-- /anime <br/>
|   |   |-- anime.controller.ts <br/>
|   |   |-- anime.module.ts <br/>
|   |   |-- anime.service.ts <br/>
|   |-- app.module.ts <br/>
|   |-- main.ts <br/>
|-- package.json <br/>
|-- tsconfig.json <br/>
|-- nest-cli.json <br/>



### Frontend (Next.js)
Start a new Next.js project by running npx create-next-app frontend in your command line. This will create a new directory called frontend with a new Next.js project.

Inside the frontend directory, the relevant files and folders are:


/frontend

|-- /node_modules <br/>
|-- /pages <br/>
|   |-- index.tsx <br/>
|-- /components <br/>
|   |-- Layout.tsx <br/>
|   |-- Navbar.tsx <br/>
|   |-- SearchBar.tsx <br/>
|   |-- AnimeCard.tsx <br/>
|-- package.json <br/>
|-- /styles <br/>
|   |-- AnimeCard.module.css <br/>
|-- tsconfig.json <br/>
|-- next.config.js <br/>

## Deploying Your Applications
### Backend (NestJS)
Open a terminal and navigate to your backend directory. <br/>
Install dependencies with npm install. <br/>
Run your NestJS server with npm run start.  <br/> By default, NestJS will run on localhost:3001 (or the next available port).
### Frontend (Next.js)
Open another terminal and navigate to your frontend directory. <br/>
Install dependencies with npm install.  <br/>
Run your Next.js app with npm run dev. <br/> By default, Next.js will run on localhost:3000 (or the next available port).
