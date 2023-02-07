# secure-web-dev-frontend
Webapp project with Vue js

Ce projet contient 6 pages : Home / Locations (+modal) / Disconnect / Login / Register / Add location

Dans ce projet, seuls 2 comptes sont concernés : simple visiteur et admin.
> Simple visiteur accède à la page Home qui demande de se connecter
> Admin peut ajouter et supprimer un lieu de tournage ainsi qu'en créer un nouveau

-- Pour lancer le backend --
> installer dépendance npm dans backend : >> npm install
> fichier .env avec pour clés : 
MONGO_URI=mongodb+srv://pierrebrieuc:admin123@cluster0.m3v0xrz.mongodb.net/test

SECRET_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VycyIsIm5hbWUiOiJQaWVycmVCcmlldWMgQ09MTEVUIiwiaWF0IjoxNTE2MjM5MDIyfQ.PlClK3qH8ILpHP4G0-1femDfilfkvpuHTUw0Ph02N5M

JWT_SECRET=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlBpZXJyZS1CcmlldWMgQ09MTEVUIiwiaWF0IjoxNTE2MjM5MDIyfQ.icW6ceDG465udWpGoNjn9O1lIQe0nP7NCW_pc10aAk0

> Après cela, entrer : >> npm start (port 3000)


-- Pour lancer le frontend --
> intaller dépendance npm dans frontend : >> npm install
> Après cela, entrer : >>  npm run serve (port 8080)