//--------------------------------------------Navbar funcitonality-------------------------------------

import { navbar, signInFunc, searchFunc } from "./navbar.js";
document.querySelector("#navbar").innerHTML = navbar();

signInFunc("signin")

document.getElementById("query").addEventListener("keypress", (event) => {
    if(event.key == "Enter"){
        searchFunc("query");
    }
})


// //---------------------------------------------Footer funcitionality------------------------------------------------
// import { footer } from "./footer.js";

// document.querySelector("#footer").innerHTML = footer();