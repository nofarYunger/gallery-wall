# Home Assignment Gallery Wall

Flickr Gallery is a client for the photo-sharing site Flickr.
This gallery-app fetchs and display the most recent public photos uploaded to Flickr.
the app is supporting infinite scroll.

## Tech/framework used for client
##### Built with
* [React](https://reactjs.org/) as client framework
* [Axios](https://www.npmjs.com/package/axios) Promise based HTTP client for the browser
* [GSAP](https://greensock.com/gsap/) Animation library for the scroll animation 
* [Sass](https://sass-lang.com/guide) for creating a more readable, efficient, clean code for the style 
* [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) for implementing the infinite scroll by listening to the last image that loaded and requesting the API for more images once the observer is close to the view port
 
 ## Installation
clone this repo, go to its root directory and run `npm install` to install its dependencies.

Once the dependencies are installed, you can run `npm start` to start the application. You will then be able to access it at localhost:3000

## Demo
Check out my demo [Here](https://nofaryunger.github.io/gallery-wall/)
