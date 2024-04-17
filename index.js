// alert('Hello');
// 1st step - Movement animation to happen // Selects the card and container elements for animation.
const card = $('.card')[0];
const container = $('.container'); 

// 5th step - all items
const photo = $('.photo img');
const title = $('.title');
const social= $('.social');
const info= $('.info h4');
const profile= $('.profile');

// 2nd step - Moving animation event // Listens for mouse movements to rotate the card along the X and Y axes.
container.on('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20; //rotating the element into x axis
    let yAxis = (window.innerWidth / 2 - e.pageY) / 20; //rotating the element into y axis
    card.style.transform  = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;        
});

// 4th step - Adding animation in  // Triggers a pop-out effect on all card items when the mouse enters the container.
container.on('mouseenter', e => {
    card.style.transform = 'none';
    // Popout animation for all items
    photo.style.transform = 'translateZ(50px)';
    title.style.transform = 'translateZ(50px)';
    social.style.transform = 'translateZ(50px)';
    info.style.transform = 'translateZ(50px)';
    profile.style.transform = 'translateZ(50px)';
});

// 3rd step - Removing animation in  // Resets the card's rotation when the mouse leaves the container.
container.on('mouseleave', e => {
    card.style.transform = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});


// This jQuery code shows how to create a 3D card animation effect. 
// A card element is animated to rotate in response to mouse movements inside a container. 
// Using jQuery's selector function, the card and container elements are first from the HTML content.
// Add an event listener for when the mouse passes over the container element in the second step.
// This will launch a function that uses the mouse position on the page to determine how much to rotate the card.
// To track when the mouse leaves the container element, I add an additional event listener in third step.
// This triggers a code that puts any rotations made in step two back where they started.
// By modifying the CSS properties of specific components when we move our cursor over them, the fourth step gives our card motion.
// The last step involves choosing every component that needs to be animated and giving it a variable that may be changed at a later time in the code. 
// By rotating and shifting the card in response to mouse movements made by the user, the code provide a 3D card animation effect on a webpage.
// The card appears when the user hovers over it and goes back to its original location when they move away.