//--------------------------------------------Navbar funcitonality-------------------------------------

import { navbar, signInFunc, searchFunc } from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar();

signInFunc("signin")

document.getElementById("query").addEventListener("keypress", (event) => {
    if(event.key == "Enter"){
        searchFunc("query");
    }
})


//---------------------------------------------Footer funcitionality------------------------------------------------
import { footer } from "../components/footer.js";

document.querySelector("#footer").innerHTML = footer();




//  *****************************

//Change image function -----------------------------
let image = [
    "https://www.jcrew.com/brand_creative/homepage2022/07-Jul4/2022jul_0719_hp_w_img3_b.jpg",
    "	https://www.jcrew.com/brand_creative/homepage2022/07-Jul4/2022jul_0719_hp_w_img3_c.jpg",
    "	https://www.jcrew.com/brand_creative/homepage2022/07-Jul4/2022jul_0719_hp_w_img3_d.jpg"
]


let changePic = () =>{
    let i = 0;
    setInterval(() => {
        if (i == image.length) {
            i = 0
        }

        let imgDiv = document.getElementById("imageInterval");
        imgDiv.style.backgroundImage = `URL(${image[i]})`;
        i++;

    }, 1500);
}

changePic();