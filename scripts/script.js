// ================================ DOM Manipulation (Part One) ======================================

// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
    ]},
    ];

// =============================== Part 1: Getting Started ===========================================
// Select and cache the <main> element in a variable named mainEl.
let mainEl = document.querySelector("main");
console.log(mainEl);
// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainEl.style.backgroundColor = 'var(--main-bg)';


// Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
const headingEl = document.createElement("h1");
headingEl.textContent = "DOM Manipulation";
mainEl.appendChild(headingEl);

// Dylan's approach
// mainEl.innerHTML = <h1>DOM Manipulation</h1>;

// Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.
mainEl.classList.add("flex-ctr");


// =============================== Part 2: Creating a Menu Bar =======================================
// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
let topMenuEl = document.getElementById("top-menu");
console.log(topMenuEl)

// Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%";

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");

// ============================== Part 3: Adding Menu Buttons ========================================
// Iterate over the entire menuLinks array and for each "link" object:
// Create an <a> element.

// On the new element, add an href attribute with its value set to the href property of the "link" object.

// Set the new element's content to the value of the text property of the "link" object.

// Append the new element to the topMenuEl element.

// for (let i = 0; i < menuLinks.length; i++) {
//     let a = document.createElement("a");
//     a.classList.add("href");
//     a.href = menuLinks[i].href;
//     topMenuEl.attendChild(a);
//     console.log(a);
//     console.log(menuLinks)
// };

// Question:
// Why is it that I didn't see the menu items on top menu eventhough I have added newEL. 

// Dylans's approach
for (let link of menuLinks) {
    let menuButton = document.createElement("a");
    menuButton.setAttribute("href", link.href);
    menuButton.textContent = link.text;
    topMenuEl.appendChild(menuButton);
}

// ====================== Part 4: Adding Interactivity ========================================
// With the basic structure of the page now generated purely with JavaScript, we have demonstrated the ability to manipulate the DOM in several fundamental ways.
// In order to continue with this project, we must first explore how to add user interaction to DOM elements, which will be covered in a future lesson. For now, save your work so that you can return to it for Part Two of this lab activity.
// Remember to submit the link to this part of the project to Canvas using the submission instructions at the beginning of this document.

// ================================ DOM Manipulation (Part Two) ======================================

// ================ Part 1: Getting Started =======================
// Take a few moments to explore your code and refamiliarize yourself with it. Now that you have a deeper understanding of DOM manipulation concepts, if there is anything you would like to fix or change, now is the time to do so.

//Done!


// ================ Part 2: Adding Additional HTML and CSS =======================
// Done!

// ================ Part 3: Creating the Submenu =======================
// 1. Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
let subMenuEl = document.getElementById("sub-menu");
console.log(subMenuEl)

// 2. Set the height subMenuEl element to be "100%"
subMenuEl.style.height = "100%";
// 3. Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// 4. Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add("flex-around");

// Now, change the position of the submenu to temporarily hide it. Later, we will make the submenu appear dynamically based on user interaction:

// Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = "absolute";
// Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = "0";

// ================ Part 4: Adding Menu Interaction =======================
// Update the menuLinks array
    // Done!

// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks which gives us an HTMLCollection with all the anchors.
let topMenuLinks = document.getElementsByTagName("a")
console.log(topMenuLinks)

// Another way of doing this is using querySelectorAll which gives us a NodeList with all the anchors. Which one is better?

// let topMenuLinks = document.querySelectorAll("a")
// console.log(topMenuLinks)

// Attach a delegated 'click' event listener to topMenuEl.
    // The first line of code of the event listener function should call the event object's preventDefault() method.
    // The second line of code of the function should immediately return if the element clicked was not an <a> element.
    // Log the content of the <a> to verify the handler is working.

// Now that we have references to each of these links, and a registered event listener, we will want to add a toggled "active" state to each menu item, showing whether or not it is currently selected:

// 1. The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.

// 2.The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.

// Hint: Removing a non-existent class from an element does not cause an error!

// Done!

function handleClick (event) {
    event.preventDefault();
        if (!event.target === topMenuLinks) {
            return }
        else {
            console.log(event.target);
            event.target.classList.toggle("active");
}  
};

topMenuEl.addEventListener("click", handleClick) 

// Now that we have references to each of these links, and a registered event listener, we will want to add a toggled "active" state to each menu item, showing whether or not it is currently selected:

// 1. The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.

// 2.The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.

// Hint: Removing a non-existent class from an element does not cause an error!

