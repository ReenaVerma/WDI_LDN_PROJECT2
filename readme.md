![image](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# GA WDI-32 Project 2 - Popup London
## Fully Authenticated REST Express app using the MVC model

For my second project, I was asked to build a design an express app in 5 days.  I used HTML, CSS, Bulma Framework, Javascript, Node.js, Express.js, MongoDB, to building a website incorporating REST routing, EJS Templating, MVC modelling and User Authentication.  The app is deployed to Heroku.

Using these technologies, I built a web application, where using can add, rate and review popup events, around London town. Also fully mobile responsive.

##### [Visit https://popupculture.herokuapp.com/](https://popupculture.herokuapp.com/) to register, add, rate and review popup events in London.


<p align="center"><img src="https://i.imgur.com/r0ddWsI.jpg" width="700"></p>

---
## MVC Product:

<ul>
<li>Being able to add/edit a popup listing using REST.</li>
<li>Listing and displaying popup events using REST.</li>
<li>Models for user and popup listings.</li>
<li>Registering, logging in and user authentication.</li>
</ul>

<p align="center"><img src="https://i.imgur.com/7ihS7T7.jpg" width="700"></p>

---
## Extra Features Added:

<ul>
<li>Being able to delete a popup listing using REST.</li>
<li>Uploading a photo to the event listing using Filestack API.</li>
<li>Using Google Maps API to plot the event location address, onto the REST show/event listing page.</li>
<li>Adding comments if you're logged in.</li>
<li>Reviewing a popup event using 1-5 stars scale and tallying the total number of reviews on each event.</li>
<li>Surfacing other registration data on event listing page - such a price, category.</li>
<li>Being able to filter popup events by category, on the index route.</li>
<li>Flash messages.</li>
<li>Form error handling.</li>
</ul>

<p align="center"><img src="https://i.imgur.com/0BgHgWV.jpg" width="700"></p>

---
## Challenges:

During this project, I was first introduced to API integrations.  As I had never done anything with APIs before, I had to spend some time researching and breaking down exactly how to incorporate Google Maps API.  

It took me a while to realise, there are some many different services to utilise and during this project - I ended up using Google Maps API in 4 steps:

- Using autocomplete to enter and capture an address.
- Converting the address into Lat and Lng.
- Rendering a Google Map on the show route.
- And then parse the lat and lng, into each map listing.

I also found writing code to allow commenting on events really challenging and quite difficult.  For such a small featured, I had to do alot of work.  So this made me realise, I really enjoy the front-end and visual side of web development.

## Highlights:

Firstly, as mentioned above, Google Maps integration was challenging because I assumed this would be a simple task and took almost a day to figure out and to get working.  But as result, it was the also task I enjoyed the most out of the entire project.

I loved how Google docs has so many features you can tap into and utilise.  And is such a fun way to manipulate, present and render data into your applications.

From then on API integrations, has now become the one thing I enjoy the most in FullStack web development.

Secondly, I really enjoyed managing data using MongoDB. The process to store and save data is equally really fun to setup and manage.  And I really appreciated its role and value in web applications.

<p align="center"><img src="https://i.imgur.com/UmgARYY.jpg" width="700"></p>


---
###### Summary:
I' really, really proud of this project.  This is the first time in my entire life, I've built anything incorporating databases, user authentication, APIs, REST, commenting, rating and reviewing - all in Express and Node.js.

I built this website, whilst almost 5 weeks into my FullStack Web Development course at General Assembly and I am so proud at how far I had come, in such a short amount of time.

Visually, I think the site looks great too, which really showcases my front-end flair.

<p align="center"><img src="https://i.imgur.com/jY7hSd4.png" width="700"></p>


###### Enhancements:
Further enhancements I'd like to make in future include:
- being able to upload more than one photo, on an event listing page.  Essentially allowing users to create a photo gallery of the event.
- Creating a more dynamic, sexy looking rating and reviewing functionality.

###### Setup instructions:
<ul>
<li>Clone or download the repo. </li>
<li>Install dependencies with yarn install or npm install</li>
<li>Run mongod</li>
<li>Launch the app with yarn start.</li>
</ul>
