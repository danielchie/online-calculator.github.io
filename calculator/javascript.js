function clk(val){

    document.getElementById("screen").value=document.getElementById("screen").value+val;
}

function clrdisp(){
    document.getElementById("screen").value="";
}

function eql(){
    var text= document.getElementById("screen").value;
    var result=eval(text);
    document.getElementById("screen").value=result;
}

let input = document.getElementById('screen');
let button = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventlistener('click',(e) =>{
        if(e.target.innerHTML == '='){
            String = eval(string);
            Input.value = String;
        }

        else if(e.target.innerHTML == 'AC'){
            string ="";
            Input.value = string;
        }

        //else if(e.target.innerHTML == 'DEL'){
          // string = string.substring(0,string.
           // length-1);
           // input.value = string;
       // }

        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})