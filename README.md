# Dummy Co. Recipe Retriever App 🥡 🍕

## TL;DR

> This will fire up everything

```
pnpm run magic
```

## Description

This application consists of two apps — an expressJs backend and a React frontend — plus a shared types folder.

The backend fetches data from [dummyjson.com](https://dummyjson.com ), the section I chose: recipes — because I genuinely love cooking 🍳.

The frontend then displays the fetched recipes with a few properties. It also includes two buttons:

* One logs the recipe data to the backend console as a nicely formatted, stringified JSON.

* The other logs a cleaner version in a table format using console.table, where I omitted some properties for readability.(Honestly, I really enjoyed having a good excuse to finally use `console.table`!)


 
## Commands

> Install dependencies in back- and frontend

```
install:dependencies
```

> Build apps

```
pnpm run build
```

> Start

```
pnpm start
```

> Start in development mode

```
pnpm run dev
```

## Used Technologies

- ExpressJs (MVCish pattern)
- React (Vite)
- Tailwind

## Assignment

- [x] Use https://dummyjson.com for dummy JSON data. Use a section of your choosing under “Top Resources” to fetch and display.
- [x] Do the fetching in the Node.JS backend and send the information to the React font end.
- [x] Only a minimum of two fields from the data need to be displayed in the front end. Keep this part very simple. How the information is formatted/displayed is up to you.
- [x] Demonstrate a basic understanding of the React hooks useState and useEffect, by utilizing them in some capacity.
- [x] Include a button in the front end which will trigger the back end to console output a formatted version of the data it has fetched.
- [x] This should be a plain-text formatted version, for example, formatting the JSON data as a plain text table.
- [x] You may use any framework or method of your choice to connect the backend to the frontend.
- [ ] Feel free to ask as many questions for clarification as you’d like. Be advised, though, that if I haven’t specified something it is most-likely up to you.
