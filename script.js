const countValue= document.querySelector(".count");

const increament=()=>{
    //get the value
    let value=parseInt(countValue.innerText);
    //increament the value
    value=value+1;
    // update the value
    countValue.innerText=value;

}

const decreament=()=>{
    // get the value
    let value= parseInt(countValue.innerText);
    //increament the value
    value=value-1;
    //update the value
    countValue.innerText=value;
}