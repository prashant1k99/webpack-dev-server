# Webpack Configured File
Fully Configured Setup of Webpack along with (Babel + Webpack Dev Server)

***

### Understanding File Structure

The Project has 2 main files:
  - *index.html*
  - *src/index.js*

*index.html* file is used when the Development server is Started.

*src/index.js* file is the Entry Point file for any js Project. So any additional files should be imported in this file. Then later on build and dev, Webpack will do the Magic.
***
## Commands To Use

To clone the Repo from Github to Local Environment:
```sh
git clone https://github.com/prashant1k99/webpack-dev-server.git
```
The Change the Working Directory to the File:
```sh
cd webpack-dev-server
```
To install Dependencies:
```sh
npm install
```

To run the Dev Server:
```sh
npm run dev
```

To run the File Build:
```sh
npm run build
```