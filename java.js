var animatonElement  =  document.querySelectorAll(".show-on-scroll")




function toggleanimationElement (element){
    var recth1 = element.getClientRects()[0]
    var heightsroll = window.innerHeight
    

    if (!(recth1.bottom < 0 || recth1.top > heightsroll  )){
        element.classList.add("start")
    }else{
        element.classList.remove("start")
    }

}

function checkAnimation (){
    animatonElement.forEach (el =>{
     toggleanimationElement(el)
    })
}

window.onscroll = checkAnimation