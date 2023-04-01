function call(){
    if(set1.checked){
     var animals=['lion','panda','reindeer','koala','platypus']
        addPic(animals)      
    }
    else if(set2.checked){
     var  foods=['taco','sushi','dosa','pasta','biryani']
        addPic(foods)
    }
    else if(set3.checked){
     var   trees=['dragon','baobabs','general sherman','pine','deodar']
        addPic(trees)
    }
}

function addPic(pic){
    var out= "<table><tr>"
    for(i=0;i<=pic.length-1;i++){    
        var pName=`images/${pic[i]}.png`       
        out += `<td><img src="${pName}" width="250">    </td>`          
       }
       result.innerHTML=out+"</tr></table>"
}