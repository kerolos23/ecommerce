// get the cart element to make event when click on 
let cartButton = document.querySelector(".cart button"),
    cartWindow = document.querySelector(".view-cart");
// add class open-cart to the element when click on
cartButton.addEventListener("click", function(){
    cartWindow.classList.toggle("open-cart");
});

// get sallary elements
let info = document.querySelector(".info"),
    sallary = document.querySelector("#sallary"),
    realS = document.querySelector("#real-sallary");

// make the sale element to show it 
let sale = document.createElement("p");
sale.textContent= `${info.dataset.sale}%`;

// add the sallary to elements 
let resal = Number(info.dataset.sallary).toFixed(2);
let sall = Number(resal-(resal*(info.dataset.sale/100))).toFixed(2);

realS.textContent= `${resal}$`;
sallary.innerText = `${sall}$`;
sallary.appendChild(sale);

// get add to cart's button 
let addButton = document.querySelector("#add-t-cart");

// cart text and paragraph
let cartparagraph = document.querySelector(".cart-text p"),
    cartText = document.querySelector(".cart-text"),
    pordCount =document.querySelector(".pord-count");

// make the element and append it when clickon button
//create the product element
let mainDivProd = document.createElement("div");
mainDivProd.className = "product";
let imgDiv = document.createElement("div");
    imgDiv.className= "check-img";
let image = document.createElement("img");
    image.setAttribute("src", "images/image-product-1-thumbnail.jpg");
let childDivText = document.createElement("div"),
    paragraphDiv = document.createElement("div"),
    paragraph = document.createElement("p");
    paragraph.textContent= "Fall Limited Edition Sneakers";
    childDivText.className= "text-area";
    paragraphDiv.className= "paragraph";
let sallaryDiv = document.createElement("div")
    sallaryDiv.className= "sallary";
    sallaryDiv.innerHTML= `
            <p>$${sall} &#215; 1</p>
            <h2>$${(sall * 1).toFixed(2)}</h2>
    `;

    // trash element 
let trashDiv = document.createElement("div");
trashDiv.innerHTML= '<svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>';
trashDiv.className= "btn-delete";

let checkoutDiv = document.createElement("button");
checkoutDiv.className="check-out";
checkoutDiv.innerHTML=`
<a href="#">CHECK OUT</a>
`;

// create alert 
let alertDiv = document.createElement("div");
alertDiv.className="alert";
let done = document.createElement("div");
done.className="done";
let check = document.createElement("div");
check.className= "check";
check.innerHTML=`
<i class="fa-regular fa-circle-check"></i>
`;
let checkText = document.createElement("div");
checkText.className= "alert-text";
checkText.innerHTML=`
<p>The product has been added to the cart</P
`;

done.appendChild(check);
done.appendChild(checkText);
alertDiv.appendChild(done);
document.querySelector("body").appendChild(alertDiv);


addButton.addEventListener("click", function(){
        cartparagraph.remove();
        cartText.style.justifyContent = "space-between";
        cartText.style.paddingTop= "1em";
// append elements 
        imgDiv.appendChild(image);
        mainDivProd.appendChild(imgDiv);
        paragraphDiv.appendChild(paragraph);
        childDivText.appendChild(paragraphDiv);
        childDivText.appendChild(sallaryDiv);
        mainDivProd.appendChild(childDivText);
        mainDivProd.appendChild(trashDiv);
        cartText.appendChild(mainDivProd);
        cartText.appendChild(checkoutDiv);


        let produtslength = document.querySelectorAll(".view-cart .product").length;
        pordCount.innerHTML=`${produtslength}`;
        if(addButton.classList.contains("disabled")){
            return false;
        };
        
        alertDiv.classList.add("show-alert");
        addButton.classList= "disabled";
        setTimeout(()=>{alertDiv.classList.remove("show-alert");}, 1500);
});

checkoutDiv.addEventListener("click", function(){
    buyPage("./buy.html");
});

function buyPage(page){
    window.open(page, "_self", "");
}; // to open new page in web site

trashDiv.addEventListener("click", function(){
    pordCount.innerHTML= 0;
    cartText.innerHTML= "";
    cartText.appendChild(cartparagraph)
    cartText.style.justifyContent = "center";
    cartText.style.paddingTop= "0";
    addButton.classList.remove("disabled");
});



// product events
let imgDivs = document.querySelector(".view"),
    imgs = document.querySelectorAll(".view img"); // get main produte's images

let imgArray = Array.from(imgs),
    imglength = imgArray.length; // create array from produte's images

let littleImages = document.querySelectorAll(".littel-view img"),
    littleLength = littleImages.length; // get little produte's images

for(let i = 0; i < littleLength; i++){
    littleImages[i].setAttribute("data-index", `${i}`);
};  // set index dnmc in dataSet to little produte's images

function pop(imArray, index, littleImg){
    imArray.forEach((e)=>{e.classList.remove("active")});
    imArray[index.dataset.index].classList= "active";
    littleImg.forEach((e)=>{
        e.classList.remove("active");
    });
    index.classList= "active";
} // set function to call it when we need, to remove and add class active

littleImages.forEach(function (e) {
    e.addEventListener("click", ()=>{pop(imgArray, e, littleImages)});
}); // call function when we click on one of little produte's images

