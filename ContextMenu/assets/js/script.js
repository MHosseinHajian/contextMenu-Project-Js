let $ = document
let contextMenu = $.getElementById("contextMenu")

function newContextMenu(event){
    event.preventDefault()
    if(contextMenu.style.display==="none"){
        contextMenu.style.display="block"
        contextMenu.style.top=event.pageY+"px"
        contextMenu.style.left=event.pageX+"px"
    }
    else{
        contextMenu.style.top=event.pageY+"px"
        contextMenu.style.left=event.pageX+"px"
        
    }
    
}
$.body.addEventListener("contextmenu",newContextMenu)

function closeContextMenu(){
    contextMenu.style.display="none"
}
$.body.addEventListener("click",closeContextMenu)

function secondCloseContextMenu(event){
    if(event.keyCode===27){
        contextMenu.style.display="none"
    }
}
$.body.addEventListener("keydown",secondCloseContextMenu)