let card = document.querySelector(".card");

document.querySelector(".plus").addEventListener("click", () => {
  card.style.transform = "rotateY(180deg)";
});

document.querySelector(".minus").addEventListener("click", () => {
  card.style.transform = "";
});
document.getElementById("signup").addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "signup.html";
});

document.getElementById("signin").addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "signin.html";
});
let sort = document.querySelector(".sort");

let sorthead = document.querySelector(".sorthead");
let arrow = document.querySelector(".arrow");

sorthead.addEventListener("click", (event) => {
  event.preventDefault();
  let select = document.querySelector(".select");
  console.log(1);

  if (sort.children[1])
 {
  console.log(2)
    arrow.innerHTML = "&#11167";
    console.log(arrow.innerHTML);
    select.remove();
  } 
  else {
    console.log(5)
    arrow.innerHTML = "&#11165";
    let div= document.createElement("div");
    div.className="select"
    div.innerHTML=`<input type="radio" id="htl" name="rad">
            <label for="htl">Price : High to Low </label>
            <br>
            <input type="radio" id="lth" name="rad">
            <label for="lth">Price : Low to High</label>
             <br>
            <div class="contentcenter"><button class="sortbtn">Sort</button></div>`
    sort.appendChild(div);
  }
});

let filter = document.querySelector(".filter");

let filterhead = document.querySelector(".filterhead");
let arrow2 = document.querySelector(".arrow2");

filterhead.addEventListener("click", (event) => {
  event.preventDefault();
  let select2 = document.querySelector(".select2");
  console.log(1);

  if (filter.children[1])
 {
  console.log(2)
    arrow2.innerHTML = "&#11167";
    console.log(arrow2.innerHTML);
    select2.remove();
  } 
  else {
    console.log(5)
    arrow2.innerHTML = "&#11165";
    let div= document.createElement("div");
    div.className="select2"
    div.innerHTML=`<div class="minprice"><input type="text" id="minp" placeholder="Enter Minimum price">
            <label for="minp"></label></div>
            <br>
            <div class="maxprice"><input type="text" id="maxp" placeholder="Enter Maximum price">
            <label for="maxp"></label></div>
            <div class="contentcenter"><button class="filterbtn">Filter</button></div>`
    filter.appendChild(div);
  }
});
