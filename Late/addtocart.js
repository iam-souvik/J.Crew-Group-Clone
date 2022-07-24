let productData=JSON.parse(localStorage.getItem("productData"))

document.getElementById("productName").innerText=productData.title;
document.getElementById("artCod").innerText=`Item_${productData.articleCode}`;
document.getElementById("price").innerText="Rs." + " " +productData.price + ".00";;
document.getElementById("bigimg").src=productData.image2;
document.getElementById("smallimg").src=productData.image2;
document.getElementById("smallimg1").src=productData.image1;
document.getElementById("proCategory").innerText=productData.category
document.getElementById("proColor").innerText=productData.color;
document.getElementById("probrand").innerText=productData.brandName;
// document.getElementById("proDetails").innerText=productData.onClick;

console.log(productData)

function change(){
document.getElementById("bigimg").src=productData.image2;
}

function change1(){
document.getElementById("bigimg").src=productData.image1;
}



function addtoBag(){
    // let document.getElementById("addBag")
    let values=document.getElementById("numQuantity").value
    let arr=JSON.parse(localStorage.getItem("productItem")) || [];
     
    obj={
            price:productData.Price1,
            image1:productData.image2,
            image2:productData.image1,
            title:productData.title,
            brandName:productData.brandName,
            color:productData.colorname,
            category:productData.category,
            articleCode:productData.articleCode,
            Product_Qty:values,
        }
    arr.push(obj)
    localStorage.setItem("productItem",JSON.stringify(arr))
}