 //   <-------------------------popup------------------------->
 import {getData} from "../components/fecth.js";




 const mealDetailsContent = document.querySelector('.meal-details-content');
 let removeRecepe = () => {
     mealDetailsContent.innerHTML = null;
     mealDetailsContent.parentElement.classList.remove('showRecipe');
 }
 document.getElementById("recipe-close-btn").addEventListener("click", removeRecepe);


 //<---------------------------fetching------------------------------------------>
 let url = "https://www2.hm.com/en_in/men/new-arrivals/clothes/_jcr_content/main/productlisting.display.json?sort=stock&image-size=small&image=model&offset=36&page-size=36"
 
 let data=await getData(url)

append(data.products)
 
 // <---------sorting function--------------------->





function myFunction(){
    let slected=document.getElementById("filtersection").value;
    console.log(slected)
}












// <----------------------appeding data------------------------------------------>
 function append(data) {
     let container = document.getElementById("container")
     container.innerHTML=null;
     data.forEach((el) => {
         // console.log(el)
         let div = document.createElement("div")
         div.setAttribute("class", "box")
         let bac = document.createElement("img")
         bac.setAttribute("class", "hover_img")
         bac.src = el.image[0].dataAltImage;
         let frunt = document.createElement("img")
         frunt.src = el.image[0].src;
         let heart = document.createElement("div")
         heart.setAttribute("class", "heart")
         let count = 0;
         heart.addEventListener("click", function () {
             if (count % 2 == 0) {

                 heart.style.backgroundColor = "black"
                 count = 1;

             }
             else {
                 heart.style.backgroundColor = "rgb(121, 112, 112)"
                 count = 0;
             }



         })
         let div2 = document.createElement("div")
         div2.setAttribute("class", "porduct_text")
         let h4 = document.createElement("h4")
         h4.innerHTML = el.price;
         let p = document.createElement("p")
         p.innerHTML = el.title;
         let p1 = document.createElement("p")
         p1.setAttribute("class", "selling_atribute")
         p1.innerHTML = el.sellingAttribute;
         let div1 = document.createElement("div")
         div1.setAttribute("class", "product_div")
         let button = document.createElement("button")
         button.setAttribute("class", "btn")
         button.innerHTML = "QUICK SHOP";
         button.addEventListener("click", () => {
             appednCart(el)
         })
         div2.append(p1, p, h4)
         div.append(frunt, bac, heart, button)
         div1.append(div, div2)
         container.append(div1)
     });
 }

 // -------------------------------addd to cart sectionn---------------->
 let appednCart = (el) => {
     mealDetailsContent.innerHTML = `<div id="main">
     <div id="image">
         <img class="xzoom" src="${el.image[0].dataAltImage}" alt="">
     </div>
     <div id="text">
         <span>${el.sellingAttribute}</span>
          <h4>Broken-in short-sleeve T-sirt</h4>
          <p id="itemgod">item AGooB</p>
         <p id="view">View full detail</p>

         <h3 id="price">${el.price}</h3>
         <p id="color">Select Color ${el.price}-${el.price}</p>
         <h5 id="color_section" >color:  Deep Harbor</h5>
         <div id="colors_category">
                <div style="background-color:red"></div>
                <div style="background-color:rgb(46, 42, 42)"></div>
                <div style="background-color:rgb(43, 12, 12)"></div>
                <div style="background-color:rgb(38, 0, 255)"></div>
                <div style="background-color:rgb(251, 255, 0)"></div>
                <div style="background-color:rgb(0, 255, 255)"></div>
         </div>
         <label>Fit:<span id="fit_classic"> Classic</span></label>
         <div>
           <button class="btn_class" id="button" value="Classic">Classic</button>
           <button class="btn_class"id="button1" value="Slim">Slim</button>
           <button class="btn_class" id="button2" value="Tail">Tail</button>
         </div>
         <div id="size_dive">
             <p>Size: Select a Size</p>
              <p>Size Charts</p>
         </div>
         <p>All sizes are US sizes</p>
         <div id="size_dive">
             <button>X-Small</button>
             <button>Small</button>
             <button>Medium</button>
             <button>Large</button>
             <button>X-Large</button>
             <button>XX-Large</button>
         </div>
         <div id="quantity">
             <label>Quantity:</label>
             <select id="quantity_selection" >
                 <option value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5</option>
                 <option value="6">6</option>
                 <option value="7">7</option>
                 <option value="8">8</option>
                 <option value="9">9</option>
             </select>
         </div>
         <p> Price include duties and taxes</p>
         <div class="size_fit">
             <h3>Size & Fit</h3>
             <p>+</p>
         </div>
         <div class="size_fit">
             <h3>Product Details</h3>
             <p>+</p>
         </div>

     </div>`
     let button = document.createElement("button")
     button.setAttribute("class", "additem")
     button.innerHTML = "ADD TO CART"
     button.addEventListener("click", function () {
         console.log(el)
     })
     let div6 = document.createElement('div')
     div6.setAttribute("id","heart_div")
     let i = document.createElement("i")
     i.setAttribute("class","fa fa-heart-o")
     i.setAttribute("id","heartsection")

     div6.append(i)

     mealDetailsContent.append(button,div6)



     mealDetailsContent.parentElement.classList.add('showRecipe');
 }
