let create=document.getElementById("create");
  create.addEventListener("click",()=>
    {
    let tit=document.getElementById("tit").value;
    let file=document.getElementById("file").value;
    let pri=document.getElementById("pri").value;
    let descr=document.getElementById("descr").value;
    let crar={
      image:  `url(${file})`,
      title: `${tit}`,
      price: `${pri}`,
      description:`${descr}`,
    }
    
    let storedArray = JSON.parse(localStorage.getItem("array")) || [];

    // Add the new NFT to the array
    storedArray.push(crar);

    // Store the updated array back to localStorage
    localStorage.setItem("array", JSON.stringify(storedArray));
    window.location.href="project.html";
    displaycards(array);
  })
