var menu=document.querySelector(".side-navbar")
function menubar(){
    menu.style.left="0"
}
function closebar(){
    menu.style.left="-60%"
}
 

var body= document.getElementById("body-js")
var s_search=document.getElementById("search")
var all_body=body.querySelectorAll("div")

s_search.addEventListener("keyup",function(){
    //user value 
    var entervalue=event.target.value.toUpperCase()

    for(i=0; i<all_body.length; i=i+1)
    {
        //web value
        var c_value=all_body[i].querySelector("p").textContent

        if(c_value.toUpperCase().indexOf(entervalue)<0)
        {
            all_body[i].style.display="none"
        }
        else
        {
            all_body[i].style.display="block"
        }
    }

})