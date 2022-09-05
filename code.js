const menuHide = document.getElementById("hideMenu");
const menuShow = document.getElementById("showMenu");
const navBar = document.getElementById("menubar");
const theCart = document.getElementById("cart");
const foodImage = document.getElementsByClassName("foodImage");
const cartModel = document.getElementById("cartModel");
const cartPage = document.getElementById("cartPage");
const boxDesc = document.getElementsByClassName("boxDesc");
const theBody = document.getElementsByTagName("body")[0];

menuHide.style.display = "none";
// if(document.readyState == "loading"){
//     document.addEventListener
// }


function showMenu(){
    navBar.style.right = "0";
    menuShow.style.display = "none";
    menuHide.style.display = "block";

}

function hideMenu(){
    navBar.style.right = "";
    menuShow.style.display = "block";
    menuHide.style.display = "none";
}




function navLink(){
    navBar.style.top = "";
    menuShow.style.display = "block";
    menuHide.style.display = "none";
}
var locationIcon = document.getElementById('locationSection')
function showContact(){
    locationIcon.style.right = 0;
}
function hideContact(){
    locationIcon.style.right = "";
}

function findMe() {
    locationIcon.style.right = 0;
    const success = (position) => {
        console.log(position);
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        const geoApi = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        fetch(geoApi)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById('findMe').innerHTML = data.principalSubdivision;
        })
    }
    const error = () => {
        alert("unable to retrieve your location")
    }

    
    navigator.geolocation.getCurrentPosition(success, error);
}


// var myIndex = 0;
// 		carousel()

// function carousel(){
// 	var i;
// 	var x = document.getElementsByClassName('sliderImages');
// 	for(i=0;i<x.length;i++){
// 		x[i].style.display = "none";
// 	}
// 	myIndex++;
// 	if(myIndex > x.length){
// 		myIndex = 1
// 	}
// 	x[myIndex - 1].style.display = "block";
// setTimeout(carousel, 5000);		
// }





