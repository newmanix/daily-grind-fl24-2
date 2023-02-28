// alert("It's working!");

/*
One unique image, with appropriate and matching content in the alt tag.  
A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
A unique color that supports the image and paragraph of content


pic - image src 
alt - the alt tag for the image 
desc - a description of the coffee/song of the day
day - the day of the week for the coffee/song of the day
color - color associated with coffee/song of the day
name - name of the coffee/song of the day
*/

function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn += `<p>
     <img src="images/${coffee.pic}" alt="${coffee.alt}" id="coffee" />
    <strong>${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong>${coffee.name}</strong>, ${coffee.Desc}
</p>`;


    return myReturn;
}

myDate = new Date();
myDay = myDate.getDay();
let today = "";
let coffee = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate querystring parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){ //if data on querystring, load from querystring
    myDay = urlParams.get("day");
//converts to integer
    myDay = parseInt(myDay);
}

switch(myDay){
    case 0:
       today = "Sunday";
       coffee = {
        color: "silver",
        name: "Frappaccino",
        pic:  "frappaccino.jpg",
        alt: "A picture of a Frappaccino",
        day: "Sunday",
        Desc: `Frappy!`,
       };
    break;

    case 1:
       today = "Monday";
       coffee = {
        color: "gold",
        name: "Caramel Latte",
        pic:  "caramel-latte.jpg",
        alt: "A picture of a Caramel Latte",
        day: "Monday",
        Desc: `Mmmm yummy, Caramel Latte on a Monday`,
       };
    break;

    case 2:
       today = "Tuesday";
       coffee = {
        color: "orange",
        name: "pumpkin Spice Latte",
        pic:  "pumpkin-spice-latte.jpg",
        alt: "A picture of a Pumpkin Spice Latte",
        day: "Tuesday",
        Desc: `Pumpkin Spice should be more than a Fall dessert!`,
       };
    break;

    case 3:
       today = "Wednesday";
       coffee = {
            color: "Pink",
            name: "Bubble Tea",
            pic:  "bubble-tea.jpg",
            alt: "A picture of a bubble tea",
            day: "Wednesday",
            Desc: "I like me some Bubble Tea!",

           };
    break;

    case 4:
        
       today = "Thursday";
       coffee = {
        color: "Brown",
        name: "Mocha",
        pic:  "mocha.jpg",
        alt: "A picture of Mocha",
        day: "Thursday",
        Desc: `I like me some Mocha!`,
       };
    break;

    case 5:
       today = "Friday";
       coffee = {
        color: "green",
        name: "Cold Brew",
        pic:  "cold-brew.jpg",
        alt: "A picture of a Cold Brew",
        day: "Friday",
        Desc: `I love Cold Brews! Taste mature!`,
       };
    break;

    case 6:
       today = "Saturday";
       coffee = {
        color: "yellow",
        name: "Drip Coffee",
        pic:  "drip.jpg",
        alt: "A picture of a Drip Coffee",
        day: "Saturday",
        Desc: `Drip Drip Drip!`,
       };
    break;

     default:
        today = "Something went wrong!";

}
// let coffeeData = coffeetemplate(coffee);
// alert(coffeeData);

//load coffee data to page
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
document.querySelector("html").style.backgroundColor = coffee.color;
// console.log(coffee);
