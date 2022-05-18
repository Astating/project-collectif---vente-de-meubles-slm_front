Lien vers la partie back-end du projet : [Sauver les meubles (back)](https://github.com/Astating/project-collectif---vente-de-meubles-slm_back?organization=Astating&organization=Astating)

<details open><summary><h2>Preview</h2></summary><img src="https://i.ibb.co/4ghCWV8/frontpage.png" alt="frontpage" border="0"><img src="https://i.ibb.co/311zXyh/productpage.png" alt="productpage" border="0"></details>

# Front team's documentation

Furniture website project - Front part.



## Tech Stack

**Client:** React, React Bootstrap


## Color Reference
(https://colorhunt.co/palette/ea907afbc687f4f7c5aacdbe)

| Color Hex         | Color RGB                                                          |
| ----------------- | ------------------------------------------------------------------ |
| #EA907A           | rgb(234, 144, 122)
| #FBC687           | rgb(251, 198, 135)
| #F4F7C5           | rgb(244, 247, 197)
| #AACDBE           | rgb(170, 205, 190)


## Team's Journal

March 7th :

We spent some time on configuring the React App.
Note for the team that will take over the Front side next week :
1- Clone the repository
2- Open your terminal, go on the folder, and type "npm install" before doing anything else. It will install the node-modules locally and will allow you to launch the app.
3- Type "npm start" to launch the app and open a webpage to check that everything's good.

Tip of the day: install the VSCode extension "Simple React Snippet"


March 8th :

We dispatched the work between the navbar, the main product space, and the footer.
We mostly spent some time building the different components, and trying to style everything a bit.
Some recommendation for the next days: we might consider moving every component in its own folder, for instace: have a Navbar folder containing the Navbar component + the Navbar CSS file.


March 10th :

We struggled a lot with Git, so it was not a super productive day.

However, we managed to set up the routing to be able to navigate from a page to another. You need to update the index.js with the appropriate pages and links, in the render.
The App.js is the equivalent of the Home page of the Website.
You don't need to call Navigation and Footer outside of index.js, otherwise it will be rendered 2 times on the screen.

Currently we have an issue with rendering the carousel + the product grid ; it might be a CSS problem to fix.
We are waiting for the database to implement the correct product data and stop hard-coding the data.

Also, the header is a bit broken (doesn't fit on the screen anymore).

