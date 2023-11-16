let offparent=document.querySelector(".off-parent")
let anime=document.querySelector('.anime-hover')
let anime2=document.querySelector('.anime-hover2')
let anime3=document.querySelector('.anime-hover3')
let summerparent=document.querySelector(".summer-parent")
let items=document.querySelectorAll(".item")
let curser=document.querySelectorAll(".gane")
let curser2=document.querySelectorAll(".gane2")
offparent.addEventListener("mouseover",function(){
 anime.classList.add("transfer")
 setTimeout(() => {
    anime.classList.remove("transfer")
 }, 600);

})
summerparent.addEventListener("mouseover",function(){
    anime2.classList.add("transfer")
    setTimeout(() => {
       anime2.classList.remove("transfer")
    }, 600);
   
   })

    items.forEach(item=>{
     item.addEventListener("mouseover",function(){
        this.children[0].classList.add("transfer")
         setTimeout(() => {
            this.children[0].classList.remove("transfer")
         }, 600);
        
        })
     
    })

    curser.forEach(item=>{
      item.addEventListener("mouseover",function(){
         this.children[0].style.border="10px solid blue"
         this.children[0].children[0].style.backgroundColor="blue"
         this.children[2].children[0].style.backgroundColor="blue"
       
      })
      item.addEventListener("mouseout",function(){
         this.children[0].style.border="10px solid rgb(82, 82, 85)"
         this.children[0].children[0].style.backgroundColor="black"
         this.children[2].children[0].style.backgroundColor="black"
       
      })
    })
    curser2.forEach(item=>{
      item.addEventListener("mouseover",function(){
         this.children[0].style.border="10px solid blue"
         this.children[0].children[0].style.transform="rotate(-20deg)"
         this.children[2].children[0].style.backgroundColor="blue"
         this.children[0].children[1].style.filter="grayscale(0) "
      })
      item.addEventListener("mouseout",function(){
         this.children[0].style.border="10px solid rgb(82, 82, 85)"
         this.children[0].children[0].style.transform="rotate(0)"
         this.children[0].children[1].style.filter="grayscale(1) contrast(1.5) brightness(1)"
         this.children[2].children[0].style.backgroundColor="black"
       
      })
    })

    let work=document.querySelector(".work")
    let shop=document.querySelector(".shop")
    let artist=document.querySelector(".artist")
    let worknav=document.querySelector(".worknav")
    let shopnav=document.querySelector(".shopnav")
    let artistnav=document.querySelector(".artistnav")


    let num=true
    work.addEventListener("mouseover",function(){
      
   worknav.style.display='flex'
   shopnav.style.display="none"
   artistnav.style.display="none"
}
    )
    work.addEventListener("mouseout",function(){
      
      worknav.style.display='none'
      shopnav.style.display="none"
      artistnav.style.display="none"
   }
       )
    shop.addEventListener("mouseover",function(){
      
         shopnav.style.display="flex"
         worknav.style.display="none"
         artistnav.style.display="none"
    })
    shop.addEventListener("mouseout",function(){
      
      shopnav.style.display="none"
      worknav.style.display="none"
      artistnav.style.display="none"
 })
    artist.addEventListener("mouseover",function(){
     
         artistnav.style.display="flex"
      shopnav.style.display="none"
      worknav.style.display="none"
      
    })
    artist.addEventListener("mouseout",function(){
     
      artistnav.style.display="none"
   shopnav.style.display="none"
   worknav.style.display="none"
   
 })

    let _open=document.querySelector(".open")
    let navbar=document.querySelector(".nav-bar")
    _open.addEventListener("click",function(){
      navbar.classList.add("block")
      

    })
     let _close=document.querySelector(".close")
     _close.addEventListener("click",function(){
      navbar.classList.remove("block")
      

    })