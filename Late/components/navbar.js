//Sign in function
let signInFunc = (id) => {
    let SignIn = () => {
        window.location.href = "signin.html"
    }

    document.getElementById(id).addEventListener("click", SignIn);
}

//search Functionality
let searchFunc = (q) => {

    let query = document.getElementById(q).value;

    switch (query) {
        case "men":
            window.location.href = "men.html"
            break;

        case "women":
            window.location.href = "women.html"
            break;

        case "kids":
            window.location.href = "kids.html"
            break;

        default: alert("Your searched item is not available!")
    }
}

let navbar = () => {
    return `<div>
    <h1>J.CREW</h1>
</div>



<div>
    <button id="new" class="hover-animation">New
        <div id="new_hover">
            <div>
                <div class="div_box">
                    <h3>Shop New Arrivals</h3>
                    <a href="#">For Women</a>
                    <a href="#">For Mens</a>
                    <a href="#">For Girls</a>
                    <a href="#">For Boys</a>
                </div>

                <div>
                    <div class="div_box">
                        <h3>Women</h3>
                        <a href="#">Linen Shop</a>
                        <a href="#">Work ReMix</a>
                        <a href="#">Best-dressed Guest</a>
                        <a href="#">Black-owned Brands We Love</a>
                        <a href="#">New Active Drop SculptStretch</a>
                        <a href="#">Getaway Shop</a>
                        <a href="#">Easy Summer Sandals</a>
                    </div>

                    <div class="div_box">
                        <h3>Men</h3>
                        <a href="#">Linen Shop</a>
                        <a href="#">Shorts Season</a>
                        <a href="#">Best-dressed Guest</a>
                        <a href="#">Getaway Shop</a>
                        <a href="#">Tech Collection</a>
                        <a href="#">Graphic Tees</a>
                    </div>
                </div>
            </div>

            <div class="image_div">
                <div>
                    <!-- <h3>Shop the latest</h3> -->
                    <img
                        src="https://www.jcrew.com/brand_creative/2022/202207-Jul/flyout/2022jul_0628_flyouts_new_img1.jpg">
                    <p>Best-dressed guest</p>
                </div>
                <div>
                    <img
                        src="https://www.jcrew.com/brand_creative/2022/202207-Jul/flyout/2022jul_0628_flyouts_new_img0.jpg">
                    <p>Gateway Shop</p>
                </div>
            </div>
        </div>
    </button>
    <button id="women" class="hover-animation">Women
        <div id="women_hover">
            <div>
                <div>
                    <div class="div_box">
                        <h3>Women</h3>
                        <a href="#">New Arriavals</a>
                        <a href="#">Best Sellers</a>
                        <a href="#">Top Rated</a>
                        <a href="#">Brand We Love</a>
                        <a href="#">The Re- Imagined Shop</a>
                        <a href="#">Shop All</a>
                        <a href="#">Sale</a>
                    </div>
                    <div class="div_box">
                        <h3>What to Shop Now</h3>
                        <a href="#">Linen Shop</a>
                        <a href="#">Work ReMix</a>
                        <a href="#">Best-Dressed Guest</a>
                        <a href="#">Black-owned Brands we Love</a>
                        <a href="#">Pickleball Essentials</a>
                        <a href="#">Gateway Shop</a>
                        <a href="#">Easy Summer Sandals</a>
                        <a href="#">Color Crush; Sunset Reds</a>

                    </div>
                </div>
                <div class="div_box">
                    <h3>Clothing</h3>
                    <a href="#">All Clothing</a>
                    <a href="#">Dresses & Jumpsuits</a>
                    <a href="#">Shirts & Tops</a>
                    <a href="#">Sweaters</a>
                    <a href="#">T-Shirts & Tank Tops</a>
                    <a href="#">Sweatshirts & SweatPants</a>
                    <a href="#">Swimwear</a>
                    <a href="#">Denim</a>
                    <a href="#">Shorts</a>
                    <a href="#">skirts</a>
                    <a href="#">Blazers</a>
                    <a href="#">Coats & jackets</a>
                    <a href="#">Active</a>
                    <a href="#">Matching Sets</a>
                    <a href="#">Pajamas & Intimates</a>
                    <a href="#">Suiting</a>
                    <a href="#">Maternity</a>
                    <a href="#">Pants</a>

                </div>
                <div>
                    <div class="div_box">
                        <h3>Shoes & Sandals</h3>
                        <a href="#">Sandals</a>
                        <a href="#">flats</a>
                        <a href="#">Espadrilles</a>
                        <a href="#">sneakers</a>
                        <a href="#">The Re- Imagined Shop</a>
                        <a href="#">Heels</a>
                    </div>
                    <div class="div_box">
                        <h3>Accessories</h3>
                        <a href="#">Jewellry</a>
                        <a href="#">Bags</a>
                        <a href="#">Hats</a>
                        <a href="#">Scarves & wraps</a>
                        <a href="#">Sunglass & Readers</a>
                        <a href="#">Accessories & More</a>
                        <a href="#">hair</a>
                        <a href="#">Belts</a>
                    </div>
                </div>
            </div>
            <div class="img_div">
                <div>
                    <div>
                        <img src="https://www.jcrew.com/brand_creative/2022/202207-Jul/flyout/2022jul_0719_flyouts_w_img0.jpg"
                            alt="error">
                        <p>Summer dress code</p>
                    </div>
                    <div>
                        <img src="https://www.jcrew.com/brand_creative/2022/202207-Jul/flyout/2022jul_0719_flyouts_w_img1.jpg"
                            alt="error">
                        <p>Recess Pickleball X J.Crew</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="https://www.jcrew.com/brand_creative/2022/202207-Jul/flyout/2022jul_0719_flyouts_w_img2-new.jpg"
                            alt="error">
                        <p>New swin</p>
                    </div>
                    <div>
                        <img src="https://www.jcrew.com/brand_creative/2022/202207-Jul/flyout/2022jul_0719_flyouts_w_img3.jpg"
                            alt="error">
                        <p>The seaside pant collection</p>
                    </div>
                    <div>
                        <img src="https://www.jcrew.com/brand_creative/2022/202207-Jul/flyout/2022jul_0719_flyouts_w_img4.jpg"
                            alt="error">
                        <p>Midsummer must-haves</p>
                    </div>
                </div>
            </div>
        </div>
    </button>
    <button id="men" class="hover-animation">Men
        <div id="men_hover">
            <div>
                <div>
                    <div class="div_box">
                        <h3>Women</h3>
                        <a href="#">New Arriavals</a>
                        <a href="#">Best Sellers</a>
                        <a href="#">Top Rated</a>
                        <a href="#">Brand We Love</a>
                        <a href="#">The Re- Imagined Shop</a>
                        <a href="#">Shop All</a>
                        <a href="#">Sale</a>
                    </div>
                    <div class="div_box">
                        <h3>What to Shop Now</h3>
                        <a href="#">Linen Shop</a>
                        <a href="#">Shorts Season</a>
                        <a href="#">Old Soldier Guest</a>
                        <a href="#">gateway shop</a>
                        <a href="#">tech Collection</a>
                        <a href="#">Gateway Shop</a>
                        <a href="#">Graphic Tees</a>
                       

                    </div>
                </div>
                <div class="div_box">
                    <h3>Clothing</h3>
                    <a href="#">All Clothing</a>
                    <a href="#">Shorts</a>
                    <a href="#">T -Shirt</a>
                    <a href="#">Polos & Rugby</a>
                    <a href="#">Casule Shirt</a>
                    <a href="#">Dress Shirt</a>
                    <a href="#">Pants & Chinos</a>
                    <a href="#">Denim</a>
                    <a href="#">Suits & Tuxedos</a>
                    <a href="#">Swim</a>
                    <a href="#">Sweatshirts & Sweatpants</a>
                    <a href="#">Sweaters</a>
                    <a href="#">Coast & Jackets</a>
                    <a href="#">Pajams & Loungewear</a>
                    <a href="#">Underwear & Boxers</a>

                </div>
                <div>
                    <div class="div_box">
                        <h3>Shoes & Sandals</h3>
                        <a href="#">New Arriavals</a>
                        <a href="#">Best Sellers</a>
                        <a href="#">Top Rated</a>
                        <a href="#">Brand We Love</a>
                        <a href="#">The Re- Imagined Shop</a>
                        <a href="#">Shop All</a>
                    </div>
                    <div class="div_box">
                        <h3>Accessories</h3>
                        <a href="#">Linen Shop</a>
                        <a href="#">Work ReMix</a>
                        <a href="#">Best-Dressed Guest</a>
                        <a href="#">Black-owned Brands we Love</a>
                        <a href="#">Pickleball Essentials</a>
                        <a href="#">Gateway Shop</a>
                        <a href="#">Easy Summer Sandals</a>
                        <a href="#">Color Crush; Sunset Reds</a>
                    </div>
                </div>
            </div>
            <div class="img_div">
                <div>
                    <div>
                        <img src="https://www.jcrew.com/brand_creative/2022/202207-Jul/flyout/2022jul_0719_flyouts_m_img0.jpg"
                            alt="error">
                        <p>Seafood-shack-tees</p>
                    </div>
                    <div>
                        <img src="https://www.jcrew.com/brand_creative/2022/202207-Jul/flyout/2022jul_0719_flyouts_m_img1.jpg"
                            alt="error">
                        <p>Old soldier X J.Crew</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="https://www.jcrew.com/brand_creative/2022/202207-Jul/flyout/2022jul_0719_flyouts_m_img2.jpg"
                            alt="error">
                        <p>Midsummer must-haves</p>
                    </div>
                    <div>
                        <img src="https://www.jcrew.com/brand_creative/2022/202207-Jul/flyout/2022jul_0719_flyouts_m_img3.jpg"
                            alt="error">
                        <p>Prime shorts season</p>
                    </div>
                    <div>
                        <img src="https://www.jcrew.com/brand_creative/2022/202207-Jul/flyout/2022jul_0719_flyouts_m_img4.jpg"
                            alt="error">
                        <p>Best in swim since 1983</p>
                    </div>
                </div>
            </div>
        </div>
    </button>
    <button id="kids" class="hover-animation">Kids
        <div id="kids_hover">
            <div>
                <div>
                    <div class="div_box">
                        <h3>Women</h3>
                        <a href="#">New Arriavals</a>
                        <a href="#">Best Sellers</a>
                        <a href="#">Top Rated</a>
                        <a href="#">Brand We Love</a>
                        <a href="#">The Re- Imagined Shop</a>
                        <a href="#">Shop All</a>
                        <a href="#">Sale</a>
                    </div>
                    <div class="div_box">
                        <h3>What to Shop Now</h3>
                        <a href="#">Linen Shop</a>
                        <a href="#">Work ReMix</a>
                        <a href="#">Best-Dressed Guest</a>
                        <a href="#">Black-owned Brands we Love</a>
                        <a href="#">Pickleball Essentials</a>
                        <a href="#">Gateway Shop</a>
                        <a href="#">Easy Summer Sandals</a>
                        <a href="#">Color Crush; Sunset Reds</a>

                    </div>
                </div>
                <div class="div_box">
                    <h3>Girls</h3>
                    <a href="#">All Clothing</a>
                    <a href="#">Dresses & Jumpsuits</a>
                    <a href="#">Tops & Tees</a>
                    <a href="#">Graphics Shop</a>
                    <a href="#">Shorts</a>
                    <a href="#">Swim & Rash Guards</a>
                    <a href="#">Leggings & Pants</a>
                    <a href="#">Skirts</a>
                    <a href="#">Active</a>
                    <a href="#">Pajamas</a>
                    <a href="#">Sweatshirts & Sweatpants</a>
                    <a href="#">Matching Sets</a>
                    <a href="#">Denim</a>
                    <a href="#">Coats & Jackets</a>
                    <a href="#">Sweaters</a>
                    <a href="#">Baby</a>
                    <a href="#">All Accessories</a>
                    <a href="#">Fun Finds</a>
                    <a href="#">Back to School</a>
                    <a href="#">All Shoes & Sneakers</a>
                </div>
                <div>
                    <div class="div_box">
                        <h3>Boys</h3>
                        <a href="#">All Clothing</a>
                        <a href="#">Shirts</a>
                        <a href="#">T-Shirts & Polos</a>
                        <a href="#">Graphics Shop</a>
                        <a href="#">Shorts</a>
                        <a href="#">Swim & Rash Guards</a>
                        <a href="#">Active</a>
                        <a href="#">Pajamas & Boxers</a>
                        <a href="#">Sweatshirts & Sweatpants</a>
                        <a href="#">Sweaters</a>
                        <a href="#">Chinos & Pants</a>
                        <a href="#">Denim</a>
                        <a href="#">Suiting</a>
                        <a href="#">Coasts & Jackets</a>
                        <a href="#">Matching Sets</a>
                        <a href="#">Baby</a>
                        <a href="#">All Accessories</a>
                        <a href="#">All shoes & Sneakers</a>
                    </div>
                </div>
            </div>
            <div class="img_div">
                <div>
                    <div>
                        <img src="https://www.jcrew.com/brand_creative/2022/202207-Jul/flyout/2022jul_0712_flyouts_cc_img0.jpg"
                            alt="error">
                        <p>Seafood-shack-tees</p>
                    </div>
                    <div>
                        <img src="https://www.jcrew.com/brand_creative/2022/202207-Jul/flyout/2022jul_0712_flyouts_cc_img1.jpg"
                            alt="error">
                        <p>Old soldier X J.Crew</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="https://www.jcrew.com/brand_creative/2022/202207-Jul/flyout/2022jul_0712_flyouts_cc_img2.jpg"
                            alt="error">
                        <p>Midsummer must-haves</p>
                    </div>
                    <div>
                        <img src="https://www.jcrew.com/brand_creative/2022/202207-Jul/flyout/2022jul_0712_flyouts_cc_img3.jpg"
                            alt="error">
                        <p>Prime shorts season</p>
                    </div>
                    <div>
                        <img src="https://www.jcrew.com/brand_creative/2022/202207-Jul/flyout/2022jul_0712_flyouts_cc_img4.jpg"
                            alt="error">
                        <p>Best in swim since 1983</p>
                    </div>
                </div>
            </div>
        </div>
    </button>
    <button id="swim" class="hover-animation">Swim
        <div id="swim_hover">
            <div>
                <div>
                    <div class="div_box">
                        <h3>Women</h3>
                        <a href="#">New Arriavals</a>
                        <a href="#">Best Sellers</a>
                        <a href="#">Top Rated</a>
                        <a href="#">Brand We Love</a>
                        <a href="#">The Re- Imagined Shop</a>
                        <a href="#">Shop All</a>
                        <a href="#">Sale</a>
                    </div>
                    <div class="div_box">
                        <h3>What to Shop Now</h3>
                        <a href="#">Linen Shop</a>
                        <a href="#">Work ReMix</a>
                        <a href="#">Best-Dressed Guest</a>
                        <a href="#">Black-owned Brands we Love</a>
                        <a href="#">Pickleball Essentials</a>
                        <a href="#">Gateway Shop</a>
                        <a href="#">Easy Summer Sandals</a>
                        <a href="#">Color Crush; Sunset Reds</a>

                    </div>
                </div>
                <div class="div_box">
                    <h3>Clothing</h3>
                    <a href="#">All Clothing</a>
                    <a href="#">Dresses & Jumpsuits</a>
                    <a href="#">Shirts & Tops</a>
                    <a href="#">Sweaters</a>
                    <a href="#">T-Shirts & Tank Tops</a>
                    <a href="#">Sweatshirts & SweatPants</a>
                    <a href="#">Pants</a>
                    <a href="#">Denim</a>
                    <a href="#">Pants</a>
                    <a href="#">skirts</a>
                    <a href="#">Pants</a>
                    <a href="#">Pants</a>
                    <a href="#">Pants</a>
                    <a href="#">Pants</a>
                    <a href="#">Pants</a>
                    <a href="#">Pants</a>
                    <a href="#">Pants</a>
                    <a href="#">Pants</a>

                </div>
                <div>
                    <div class="div_box">
                        <h3>Shoes & Sandals</h3>
                        <a href="#">New Arriavals</a>
                        <a href="#">Best Sellers</a>
                        <a href="#">Top Rated</a>
                        <a href="#">Brand We Love</a>
                        <a href="#">The Re- Imagined Shop</a>
                        <a href="#">Shop All</a>
                    </div>
                    <div class="div_box">
                        <h3>Accessories</h3>
                        <a href="#">Linen Shop</a>
                        <a href="#">Work ReMix</a>
                        <a href="#">Best-Dressed Guest</a>
                        <a href="#">Black-owned Brands we Love</a>
                        <a href="#">Pickleball Essentials</a>
                        <a href="#">Gateway Shop</a>
                        <a href="#">Easy Summer Sandals</a>
                        <a href="#">Color Crush; Sunset Reds</a>
                    </div>
                </div>
            </div>
            <div class="img_div">
                <div>
                    <div>
                        <img src="https://www.jcrew.com/brand_creative/2022/202207-Jul/flyout/2022jul_0712_flyouts_cc_img0.jpg"
                            alt="error">
                        <p>Seafood-shack-tees</p>
                    </div>
                    <div>
                        <img src="https://www.jcrew.com/brand_creative/2022/202207-Jul/flyout/2022jul_0712_flyouts_cc_img1.jpg"
                            alt="error">
                        <p>Old soldier X J.Crew</p>
                    </div>
                </div>
            </div>
        </div>
    </button>
    <button id="cashmere" class="hover-animation">Cashmere
        <div id="cashmere_hover" class="div_box">
            <h3>Shop Cashmere</h3>
            <a href="#">For Women</a>
            <a href="#">For Men</a>
            <a href="#">For Girls</a>
            <a href="#">For Boys</a>
            <a href="#">For Baby</a>
        </div>
    </button>
    <button id="home" class="hover-animation">Home
        <div id="home_hover">
            <div>
                <div class="div_box">
                    <h3>Home</h3>
                    <a href="#">Shop All</a>
                    <a href="#">New Arrivals</a>
                    <a href="#">Brands We Love</a>
                </div>

                <div class="div_box">
                    <h3>Shop Home</h3>
                    <a href="#">Bedding & Bath</a>
                    <a href="#">Dining & Entertainment</a>
                    <a href="#">Candles & Fragrance</a>
                    <a href="#">Decor & Gift</a>
                    <a href="#">Beauty & Wellness</a>
                    <a href="#">Home Office & Tech</a>
                    <a href="#">Travel & Gear</a>
                    <a href="#">Pets</a>
                </div>
            </div>

            <div class="image_div">
                <div>
                    <!-- <h3>Shop the latest</h3> -->
                    <img
                        src="https://www.jcrew.com/brand_creative/2022/202204-Apr/flyout/2022apr_0405_flyouts_home_img0.jpg">
                    <p>Badding in Liberty Fabrics</p>
                </div>
                <div>
                    <img
                        src="https://www.jcrew.com/brand_creative/2022/202207-Jul/flyout/2022jul_0712_flyouts_home_img1.jpg">
                    <p>Apotheke X j.crew candles</p>
                </div>
            </div>


        </div>
    </button>
    <button id="stories" class="hover-animation">stories
        <div id="stories_hover">

        </div>
    </button>
    <button id="sale" class="hover-animation">Sale
        <div id="sale_hover">
            <div>
                <h3>Sale</h3>
                <a href="#">Shop Women sale</a>
                <a href="#">Shop men sale</a>
                <a href="#">Shop Girl sale</a>
                <a href="#">Shop Boys sale</a>
            </div>

            <div>
                <div>
                    <h3>Women</h3>
                    <a href="#">Shop All</a>
                    <a href="#">New To Sale</a>
                    <a href="#">Over 60% Off</a>
                </div>
                <div>
                    <h3>Men</h3>
                    <a href="#">Shop All</a>
                    <a href="#">New To Sale</a>
                    <a href="#">Over 60% Off</a>
                </div>
                <div>
                    <h3>Girls</h3>
                    <a href="#">Shop All</a>
                    <a href="#">New To Sale</a>
                    <a href="#">Over 60% Off</a>
                </div>
                <div>
                    <h3>Boys</h3>
                    <a href="#">Shop All</a>
                    <a href="#">New To Sale</a>
                    <a href="#">Over 60% Off</a>
                </div>
            </div>

        </div>
    </button>

</div>


<div>

    <input type="text" id="query" placeholder="Search J.Crew">

    <button id="signin">Sign In</button>
    <img src="https://cdn-icons-png.flaticon.com/128/3916/3916585.png" alt="error">
    <img src="https://cdn-icons-png.flaticon.com/128/3916/3916604.png" alt="error">
</div>
`
}

export { navbar, signInFunc, searchFunc };
