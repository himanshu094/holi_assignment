function moveRight(){
var i=p1.selectedIndex    
var opt=document.createElement('option')
    opt.text=p1.value
    p2.add(opt)
    p1.remove(i)
}

function moveLeft(){
var i=p2.selectedIndex   
var opt=document.createElement('option')
    opt.text=p2.value
    p1.add(opt)
    p2.remove(i)
}

function moveAllRight(){
    add(p2,p1)  
    remove(p1) 
}

function moveAllLeft(){
    add(p1,p2)  
    remove(p2)  
}

function add(plus,minus){
    for(i=0;i<=minus.options.length-1;i++){
    var opt=document.createElement('option')
        opt.text=minus[i].value
        plus.add(opt)
    }
}
        
function remove(minus){
    for(i=minus.options.length-1;i>=0;i--){
            minus.remove(i) 
        }
    }