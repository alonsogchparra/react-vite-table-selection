# React Vite Table Selection

<p align="center">
  <img src="./src/assets/technologies.png" width="350">
</p>

This is a project built with React.js (using Vite) + React Query + Material UI.

The goal of this project is to show a couple things: 
- How to keep the value (checked) when you change the pagination (The key for this was map + some)
- How I could interact with two Tables, the first one will show all the characters and the second one will show up the characters selected from the first table.
- Checking the difference building a React app with vite instead of create-react-app (It is faster because only update the element that you are changing or creating, so be careful with this, because if you working with useState and you are not changing the value, this one would keep it, so try to refresh the entire site to be sure if everythig runs as it is expected).
- Using React Query to fetch data (Avoiding the common behavior of using useEffect for this).

To run this project first you should download the dependencies using this command
```
yarn or yarn install
```

As I said before this project was created with Vite so instead of using **yarn start**. To run the project you have to run it with this command
```
yarn dev
```

This is my first time using Vite and React Query I had the curiosity to check how I could work with this. I challenge you to do the same.