// let appendData=JSON.parse(localStorage.getItem("productItem"))||[];
// appedFunc(appendData)
// let url = `https://www2.hm.com/en_in/kids/girls/new-arrivals/_jcr_content/main/productlisting.display.json?sort=stock&image-size=small&image=stillLife&offset=36&page-size=36`;
// fetch(url)
//   .then(response => response.json())
//   .then(data => console.log(data));
// }
// async function fetchText() {
    //     let response = await fetch(url);
    //     let data = await response.text();
    //     console.log(data);
    // }
    // fetchText()

    let newoBj=[{

        name:"bag",
        price:2500,
        img:"https://media.istockphoto.com/photos/hand-with-eco-bag-picture-id1262313288?k=20&m=1262313288&s=612x612&w=0&h=j0-oDvsC1SRjtC2ToT910lskhx6ApYYCOB3ulJshmCo="
    },
    {

        name:"bag",
        price:2500,
        img:"https://media.istockphoto.com/photos/hand-with-eco-bag-picture-id1262313288?k=20&m=1262313288&s=612x612&w=0&h=j0-oDvsC1SRjtC2ToT910lskhx6ApYYCOB3ulJshmCo="
    }]
    let containerToDisplay=document.getElementById("dataHere");
    let itemQuantity=document.getElementById("cartItem");
    let totalprice=document.getElementsByClassName("totalamt")
    let totalPrice=0;
    let count=0;
    appedFunc(newoBj)
    function appedFunc(newoBj){
        for(let i=0; i<newoBj.length; i++)
        {
            count++;
        let div1=document.createElement("div");
        let div2=document.createElement("div");
        let div3=document.createElement("div");
        let div4=document.createElement("div");
        let btn=document.createElement("button");
        btn.innerText="Remove";
        // btn.addEventListener("click","removeFun")
     let name=document.createElement("p");
     let price=document.createElement("p");
      totalPrice+=newoBj[i].price;
     let image=document.createElement("img");
     name.innerText=newoBj[i].name;
     price.innerText=newoBj[i].price;
     image.src=newoBj[i].img;
     div1.append(image);
     div2.append(name,btn);
     div4.append(price)
    div3.append(div1,div2,div4);
    containerToDisplay.append(div3);
    itemQuantity.innerText=`${count+" "} Items`;
    totalprice.innerText=totalPrice;
    
        }
    }
    // function removeFun(){
        
    // }
        