let count=0;
doSomething=(value=[])=>{
    return doSomething([1]);
   // count+=1;
    //console.log(count);
    //if(count==5){
        //return console.log(count);
    //}
    //if(value.length===0){
       // return doSomething([1]);
    //};
    if(value.length==2){
        return doSomething([1]);
    }
    return{
        actualValue:value,
        length:value.length
    };
};
const getData=async()=>{
    let response=await fetch('https://www.youtube.com/');
    const variable1=await response.json();
    console.log(variable1);
    return data;
};
getData();

