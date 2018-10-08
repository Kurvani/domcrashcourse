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

var titles = document.querySelectorAll(".title");

console.log(titles);
titles[0].textContent = "Neo";

// This will grab all the odd ones
var odd = document.querySelectorAll("li:nth-child(odd)");
var even = document.querySelectorAll("li:nth-child(even)");

for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "#f9a7bb";
  even[i].style.backgroundColor = "lavender";
}

// for (var i = 0; i < even.length; i++) {
//   even[i].style.backgroundColor = "blue";
// }
