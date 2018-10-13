// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }

////////////////////////////////////////////////////////////////

// THIS IS WHERE MY STUFF BEGINS

// console.dir(document);
// //Returns current Domain
// console.log(document.domain);
// //Returns current URL
// console.log(document.URL);
// //Returns title
// console.log(document.title);
// //You're also able to change stuff like the title with Javascript
// // document.title = "Kurosh"; ** COMMENTED THIS CODE OUT MYSELF
// console.log(document.doctype);
// // returns stuff in the head element
// console.log(document.head);
// // returns stuff in body element
// console.log(document.body);
// // This returns a collection of everything in the DOM
// console.log(document.all);
// // In the collection array, 10 is H1, so you can return it by  calling document.all[10]
// console.log(document.all[10]);
// // You can even change HTML elements with javascript, here we change the content of the H1, but when you use this method of selecting from the dom, if you ever add anything the array values will change and the wrong stuff will be selected. So this method is not really recommended. Also he uses the word "array", but really it is an HTML collection. You can select items from it likes it is an array, but you can't manipulate it like an array (array.reverse() won't work)
// document.all[10].textContent = "What's poppin?";
// // This will return all forms found in the doc
// console.log(document.forms);
// // You can choose which specifc form to grab by providing the value
// console.log(document.forms[0]);
// console.log(document.links);
// //This would return any images on the site
// console.log(document.images);

// CTRL+K+C TO MASS COMMENT COUNT

// GETELEMENTBYID //
// console.log(document.getElementById("header-title"));
// We can put the element into a variable like so
// var headerTitle = document.getElementById("header-title");
// var header = document.getElementById("main-header");
// console.log(headerTitle);
//headerTitle.textContent = "Greetings";
// inner.Text pays attention to the styling of the HTML element, textContent does not.
//headerTitle.innerText = "Well met";
//console.log(headerTitle.textContent);

//This puts the HTML INTO The HTML element, hence innerHTML. ex: this ends up as <h1><h3>Gnomeregan</h3></h1>
//headerTitle.innerHTML = "<h3>Gnomeregan</h3>";

//This is how you can change the styling with Javascript, also you gotta use camel case, no dashes != border-bottom. This will give a periwinkle border at the bottom of the header element
// header.style.borderBottom = "solid 3px #CCCCFF";

// GETELEMENTSBYCLASSNAME //
//Put the list-group-item element into variable items
// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// //This changes the second element in the list to Lok'tar
// items[1].textContent = "Lok'tar";
// // Adds the bold style to second list item
// items[1].style.fontWeight = "bold";
// //Changes background color of 2nd item in list to periwinkle
// items[1].style.backgroundColor = "#CCCCFF";

// //This won't work, because it is saying to change a COLLECTION's background color, we gotta change the color of each element IN the array to do this effect
// //items.style.backgroundColor = "#f4f4f4"; <== GIVES AN ERROR

// //This will change each background pink
// for (var i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "#f9a7bb";
// }

// GETELEMENTSBYTAGNAME //
// This modifies elements based on their TAGS instead of their CLASS (which is what we did above, identify by  class)
// var li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// //This changes the second element in the list to Lok'tar
// li[1].textContent = "Lok'tar";
// // Adds the bold style to second list item
// li[1].style.fontWeight = "bold";
// //Changes background color of 2nd item in list to periwinkle
// li[1].style.backgroundColor = "#CCCCFF";

// //This won't work, because it is saying to change a COLLECTION's background color, we gotta change the color of each element IN the array to do this effect
// //items.style.backgroundColor = "#f4f4f4"; <== GIVES AN ERROR

// //This will change each background pink
// for (var i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "#f9a7bb";
// }

// QUERYSELECTOR //
// Wil grab the first one only, you can use any CSS selector
// var header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4px #fBBBc0";

// var input = document.querySelector("input");
// // Notice that this only changes the FIRST input and not the second
// input.value = "Daylight's burning";

// // specify the input type to change a specific value
// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// // This will grab the first .list-group-item on the page
// var item = document.querySelector(".list-group-item");
// item.style.color = "blue";

// // To change last item in list
// var lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "blue";

// // to change 'n'th item in list
// var secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color = "coral";

// Query SELECTORALL //

// var titles = document.querySelectorAll(".title");

// console.log(titles);
// titles[0].textContent = "Neo";

// // This will grab all the odd ones
// var odd = document.querySelectorAll("li:nth-child(odd)");
// var even = document.querySelectorAll("li:nth-child(even)");

// for (var i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "#f9a7bb";
//   even[i].style.backgroundColor = "lavender";
// }

// for (var i = 0; i < even.length; i++) {
//   even[i].style.backgroundColor = "blue";
// }

// ^^^^^^ PART ONE ^^^^^^
// vvvvvvv PART 2: Traversing teh DOM vvvvvvvvv
var itemList = document.querySelector("#items");
// // parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f9a7bb";
// console.log(itemList.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f9a7bb";
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
//console.log(itemList.childNodes);
// childNodes includes linebreaks which "is a pita". childNodes is a nodelist

// Children. Children are an HTML collection, not a nodelist like childNodes
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "lightblue";

// // firstChild. firstChild includes linebreaks like childNodes
// console.log(itemList.firstChild);
// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Daylight's burning";

// // lastChild. lastChild includes linebreaks like childNodes
// console.log(itemList.lastChild);
// // firstElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "Greetings";

// // nextSibling, ALSO gets textnode/linebreak
// console.log(itemList.nextSibling);
// // nextElementSibling
// //This retuns NULL because it doesn't actually have a nextElementSibling in current html code
// console.log(itemList.nextElementSibling);

// // previousSibling
// console.log(itemList.previousSibling);
// // previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = "purple";

// // createElement

// // create a div
// var newDiv = document.createElement("div");

// // Add class
// newDiv.className = "hello";

// // Add id
// newDiv.id = "Gnomeregan";

// // Add Attribute
// newDiv.setAttribute("title", "I just love to tinker");

// // Create a text node
// var newDivText = document.createTextNode("Hello World");

// // Add text to div
// newDiv.appendChild(newDivText);

// // In the header want the container class
// var ourContainer = document.querySelector("header .container");
// // We'll grab the header h1
// var ourH1 = document.querySelector("header h1");

// console.log(newDiv);

// // Change fontsize of our new DIv
// newDiv.style.fontSize = "30px";

// // We're going to take our container and insert our newdiv and then what we're inserting before, which is h1
// ourContainer.insertBefore(newDiv, ourH1);

// PART 2 OF DOM CRASH COURSE END
// PART 3 OF DOM CRASH COURSE BEGIN vvv
// EVENTS AND HOW TO ATTACH THEM!

//I don't know why but my VSC extension split this into 3 lines "var button = document.getElementByID("button").addEventListener("click", buttonClick);
// var button = document
//   .getElementById("button")
//   .addEventListener("click", buttonClick);

// function buttonClick(e) {
//   //console.log("button clicked!");
//   //   document.getElementById("header-title").textContent = "Changed";
//   //   document.querySelector("#main").style.backgroundColor = "#f9a7bb";
//   //console.log(e); //"e" or "event" works, up to coder

//   //   console.log(e.target);
//   //   console.log(e.target.id);
//   //   console.log(e.target.className);
//   //   console.log(e.target.classList);
//   //   var output = document.getElementById("output");
//   //   output.innerHTML = "<h3>" + e.target.id + "</h3>";

//   //   console.log(e.type);
//   //   //This will grab the x-axis of the client's mouse location in the window
//   //   console.log(e.clientX);
//   //   //This will grab the y-axis
//   //   console.log(e.clientY);

//   //   //   To grab the x/y axis of the mouse's location in the element we use offset
//   //   console.log(e.offsetX);
//   //   console.log(e.offsetY);

//   //You can also see if the user is holding down a key when they click, this will return true if user is holding down "alt" while they click the button
// //   console.log(e.altKey);
// //   console.log(e.ctrlKey);
// //   console.log(e.shiftKey);
// }

var button = document.getElementById("button");
var box = document.getElementById("box");

// //.addEventListener("click", runEvent);

// //button.addEventListener("click", runEvent);
// //button.addEventListener("dblclick", runEvent);
// // This next event fires off the second the mouse goes down, not when its push down and them released back up (faster interaction)
// //button.addEventListener("mousedown", runEvent);
// //button.addEventListener("mouseup", runEvent);

// box.addEventListener("mouseenter", runEvent);
// //box.addEventListener("mouseleave", runEvent);

// // Over and Out will go off for when you go into the element and any child elements within that element
// box.addEventListener("mouseover", runEvent);
// //box.addEventListener("mouseout", runEvent);

// box.addEventListener("mousemove", runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector("form");
var select = document.querySelector("select");

// itemInput.addEventListener("keydown", runEvent);
// itemInput.addEventListener("keyup", runEvent);
// itemInput.addEventListener("keypress", runEvent);

// itemInput.addEventListener("focus", runEvent);
// itemInput.addEventListener("blur", runEvent);

// itemInput.addEventListener("cut", runEvent);
// itemInput.addEventListener("paste", runEvent);

//itemInput.addEventListener("input", runEvent);

// select.addEventListener("change", runEvent);
// select.addEventListener("input", runEvent);

form.addEventListener("submit", runEvent);

function runEvent(e) {
  e.preventDefault();
  //remember e is just the event object
  console.log("EVENT TYPE " + e.type);

  //This code below just blanks out the whole webpage, good idea for troll sites!
  //document.body.style.display = "none";
  // e.target.value gives the value of whatever you're doing
  //   console.log(e.target.value);
  //   document.getElementById("output").innerHTML =
  //     "<h3>" + e.target.value + "</h3>";

  //   output.innerHTML =
  //     "<h3>MouseX: " + e.offsetX + " </h3><h3>MouseY: " + e.offsetY + "</h3>";

  // // This changes the color of the box based on the mouse's position!
  //  box.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ", 255)";

  //   // This changes the background color of the body based on mouse's position in the box!
  //   document.body.style.backgroundColor =
  //     "rgb(" + e.offsetX + "," + e.offsetY + ", 255)";
}
