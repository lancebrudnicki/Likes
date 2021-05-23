// var count = 0;
// var countElement = document.querySelector("#like");

// function add1(){
//     el.parentNode.querySelector('p>').innerText = count + " Like(s)";
// }

//     count++;
//     console.log(count);
//     countElement.innerText = count + " Like(s)";
// }

function add1() {
    var count1 = 0;
    function inner(el){
        count1++;
        el.parentNode.querySelector('p>span').innerText = count1 + " Like(s)";
        
        
    }
    return inner;
    
}
add1=add1()

function add2() {
    var count2 = 0;
    function inner(el){
        count2++;
        el.parentNode.querySelector('p>span').innerText = count2 + " Like(s)";
        
        
    }
    return inner;
    
}
add2=add2()

function add3() {
    var count3 = 0;
    function inner(el){
        count3++;
        el.parentNode.querySelector('p>span').innerText = count3 + " Like(s)";
        
        
    }
    return inner;
    
}
add3=add3()