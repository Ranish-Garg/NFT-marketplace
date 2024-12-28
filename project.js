document.getElementById("signup").addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "signup.html";
});

document.getElementById("signin").addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "signin.html";
});


let array=[]
function iniarr()
{
  array=[
    {
    image:  "url(images/image1.jpg)",
    title: "Hyped Monkey #234",
    price: 56,
    description:  `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
    tenetur ab velit in et, delectus temporibus, provident
    perferendis, autem recusandae cumque sequi magni vero nobis
    eligendi iste incidunt architecto corporis tempora amet? Minima,
    esse?` 
  },
  {
    image:  "url(images/image2.jpg)",
    title: "Hyped Monkey #235",
    price: 102,
    description:  `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
    tenetur ab velit in et, delectus temporibus, provident
    perferendis, autem recusandae cumque sequi magni vero nobis
    eligendi iste incidunt architecto corporis tempora amet? Minima,
    esse?`
  },
  {
    image:  "url(images/image3.jpg)",
    title: "Hyped Monkey #236",
    price: 34,
    description:  `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
    tenetur ab velit in et, delectus temporibus, provident
    perferendis, autem recusandae cumque sequi magni vero nobis
    eligendi iste incidunt architecto corporis tempora amet? Minima,
    esse?`
  },
  {
    image:  "url(images/image4.jpg)",
    title: "Hyped Monkey #237",
    price: 117,
    description:  `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
    tenetur ab velit in et, delectus temporibus, provident
    perferendis, autem recusandae cumque sequi magni vero nobis
    eligendi iste incidunt architecto corporis tempora amet? Minima,
    esse?`
  },
  {
    image:  "url(images/image5.jpg)",
    title: "Hyped Monkey #238",
    price: 78,
    description:  `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
    tenetur ab velit in et, delectus temporibus, provident
    perferendis, autem recusandae cumque sequi magni vero nobis
    eligendi iste incidunt architecto corporis tempora amet? Minima,
    esse?`
  },
  {
    image:  "url(images/image6.jpg)",
    title: "Hyped Monkey #239",
    price: 58,
    description:  `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
    tenetur ab velit in et, delectus temporibus, provident
    perferendis, autem recusandae cumque sequi magni vero nobis
    eligendi iste incidunt architecto corporis tempora amet? Minima,
    esse?`
  },
  {
    image:  "url(images/image7.jpg)",
    title: "Hyped Monkey #240",
    price: 98,
    description:  `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
    tenetur ab velit in et, delectus temporibus, provident
    perferendis, autem recusandae cumque sequi magni vero nobis
    eligendi iste incidunt architecto corporis tempora amet? Minima,
    esse?`
  },
  {
    image:  "url(images/image8.jpg)",
    title: "Hyped Monkey #241",
    price: 68,
    description:  `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
    tenetur ab velit in et, delectus temporibus, provident
    perferendis, autem recusandae cumque sequi magni vero nobis
    eligendi iste incidunt architecto corporis tempora amet? Minima,
    esse?`
  },
  {
    image:  "url(images/image9.jpg)",
    title: "Hyped Monkey #242",
    price: 113,
    description:  `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
    tenetur ab velit in et, delectus temporibus, provident
    perferendis, autem recusandae cumque sequi magni vero nobis
    eligendi iste incidunt architecto corporis tempora amet? Minima,
    esse?`
  },
  
];

}
iniarr();

function arraylength()
{
  return array.length;
}
function displaycards(array)
{

  array.forEach((element) => {
  
    let div=document.createElement("div");
    div.className="card";
    div.innerHTML=` <div class="front">
              <div
                class="image"
                style="background-image: ${element.image}"
              ></div>
              <div class="content">
                <div class="title">${element.title}</div>
                <div class="pab">
                  <div class="price">
                    Price :
                    <div class="pvalue">${element.price}</div>
                  </div>
                  <button class="buy">Buy</button>
                </div>
                <div class="plus" id="flip">+</div>
              </div>
            </div>
            <div class="back">
              <div class="title">Description :</div>
              <div class="des">
                ${element.description}
              </div>
              <div class="minus" id="flip">-</div>
            </div>`
  
            document.querySelector(".cards").prepend(div)
  
  });
}
displaycards(array);

let card = document.querySelector(".card");
let cards=document.querySelector(".cards");

// document.querySelector(".plus").addEventListener("click", () => {
//   card.style.transform = "rotateY(180deg)";
// });

// document.querySelector(".minus").addEventListener("click", () => {
//   card.style.transform = "";
// });

cards.addEventListener("click",(event)=>
{
  // event.preventDefault;
  let target=event.target;
  console.log(target)
  let closestcard=target.closest(".card")

  if(target.className=="plus")
  {
    closestcard.style.transform = "rotateY(180deg)";
  }
  else if(target.className=="minus")
  {
    closestcard.style.transform = "";
  }

})

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
    let sortbtn=document.querySelector(".sortbtn");
sortbtn.addEventListener("click",()=>{

  let radio=document.getElementsByName("rad");
 
  if(radio[0].checked)
  {
    console.log("hello")
    let len=arraylength();

    for(let i=0;i<len;i++)
      {
        for(let j=i;j<len;j++)
        {
            if(array[j].price<array[i].price)
            {
              let temp=array[i];
              array[i]=array[j];
              array[j]=temp;
              
            }
        }
      }
      cards.innerHTML="";
      displaycards(array);
    
  }
  else if(radio[1].checked)
  {
    let len=arraylength();
    
    for(let i=0;i<len;i++)
    {
      for(let j=i;j<len;j++)
      {
          if(array[j].price>array[i].price)
          {
            let temp=array[i];
            array[i]=array[j];
            array[j]=temp;
            
          }
      }
    }
    cards.innerHTML="";
    displaycards(array);
  }
  else{
    alert("Select any radio button!!")
  }
  
})

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

    let filterbtn=document.querySelector(".filterbtn")
    filterbtn.addEventListener("click",()=>
    {
      let minprice=document.getElementById("minp").value
      let maxprice=document.getElementById("maxp").value
      console.log(minprice,maxprice)
      iniarr();
      
      let len=array.length;
      let newarr=[];
      for(let i=0;i<len;i++)
      {
       if(array[i].price>=minprice && array[i].price<=maxprice)
       {
        newarr.push(array[i]);
       }
      }
      cards.innerHTML=""
      displaycards(newarr);

    })
  }
});






