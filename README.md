# secure-web-dev-frontend
Webapp project with Vue js

User stories : 1, 2, 3, 4, 6
Certaines User Stories ne sont pas "totalement" respectées.

Dans ce projet, seuls 2 comptes sont concernés : simple visiteur et admin.
* Simple visiteur accède à la page Home qui demande de se connecter
* Admin peut ajouter et supprimer un lieu de tournage ainsi qu'en créer un nouveau

---------------------------------------------------------------------------------------------------------------------------------------------
!!! Les pages et fonctionnalités citées ont toutes été testées, s'il y a un problème, il est possible que ça soit du à une erreur non traitée (vérifier l'affichage console dans l'IDE et dans le navigateur web. 

Ce projet contient 6 pages : Home / Locations (+modal) / Disconnect / Login / Register / Add location
* Home indique qu'il faut se connecter
* Disconnect est utilisable lorsqu'on est connecté : demande à rappuyer sur un bouton ce qui permet de supprimer le jeton (jwt) stocké en mémoire
* Login qui permet de se connecter et renvoie un jeton jwt permettant d'accéder à "/locations"
* Register permettant de se créer un compte et renvoie à la page login si le compte est créé
* Add location est un formulaire permettant de renvoyer à la bdd les informations entrées
* Locations affiche la liste des lieux de tournage. Il y a l'adresse du tournage et le nom du film. Pour plus d'informations, il y a un bouton "See More". Il est aussi possible de supprimer la ligne en appuyant sur "Delete" (cela supprime dans la bdd aussi).

Il y a aussi une barre de navigation sous 2 formes : forme connectée et forme non-connectée.
Le style est le même, ce qui change ce sont les pages accessibles.
* Forme non-connectée : accès à Home et Login
  !!! Dans ce cas, l'utilisateur ne peut pas accéder à "/locations" car, s'il essaie, il est redirigé vers la page "Login".
* Forme connectée : accès à Home, Locations et Disconnect

---------------------------------------------------------------------------------------------------------------------------------------------
-- Pour lancer le backend (port 3000) --
> installer dépendance npm dans backend : >> npm install
> + avoir un fichier .env avec pour clés : 
    MONGO_URI=mongodb+srv://pierrebrieuc:oyFcUtSpGM4FaoE9@cluster0.m3v0xrz.mongodb.net/?retryWrites=true&w=majority
    SECRET_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VycyIsIm5hbWUiOiJQaWVycmVCcmlldWMgQ09MTEVUIiwiaWF0IjoxNTE2MjM5MDIyfQ.PlClK3qH8ILpHP4G0-1femDfilfkvpuHTUw0Ph02N5M          JWT_SECRET=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlBpZXJyZS1CcmlldWMgQ09MTEVUIiwiaWF0IjoxNTE2MjM5MDIyfQ.icW6ceDG465udWpGoNjn9O1lIQe0nP7NCW_pc10aAk0
> Après cela, entrer : >> npm start


-- Pour lancer le frontend (port 8080) --
* intaller dépendance npm dans frontend : >> npm install
* Après cela, entrer : >>  npm run serve

