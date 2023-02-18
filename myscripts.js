function cal(){
   let a= document.getElementById('input1').value;
    a=parseInt(a);
    let b=document.getElementById('input2').value;
    b=parseInt(b);
    let sum=a+b;
    document.getElementById('res').value=sum;
    //document.getElementById('res').innerText=sum;
    //console.log(sum);
}
function min(){
    let a= document.getElementById('input1').value;
    a=parseInt(a);
    let b=document.getElementById('input2').value;
    b=parseInt(b);
    let minus=a-b;
    document.getElementById('res').value=minus;
    // console.log(minus);
}
function mul(){
    let a= document.getElementById('input1').value;
    a=parseInt(a);
    let b=document.getElementById('input2').value;
    b=parseInt(b);
    let multiply=a*b;
    document.getElementById('res').value=multiply;
    // console.log(multiply);
}
function div(){
    let a= document.getElementById('input1').value;
    a=parseInt(a);
    let b=document.getElementById('input2').value;
    b=parseInt(b);
    let divide=a/b;
    document.getElementById('res').value=divide;
    // console.log(divide);
}
function reset(){
    document.getElementById('res').value='';
    document.getElementById('input1').value='';
    document.getElementById('input2').value='';
}
