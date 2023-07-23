function calculation(oprater){
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    let result;

    switch(oprater){
        case "add":
            result= num1+num2;
            break;
        case "sub": 
             result= num1-num2;
             break; 
        case "mul":
              result= num1+num2;
              break;
        case "div": 
             result= num1/num2;
             break; 
             default:
                    result = "invaid the result"  

    }
   

    const meg= confirm("dguedjddhn jdwdhwdbdh")
    if(meg){
        document.getElementById("result").innerText=result;
        
   }
   else{
    document.getElementById("result").innerText="hhashbaggggggggggggggggg";
   }
   
   const adder=document.getElementById("add");
   adder.addEventListener("click",function(){
       calculation("add")
       
   })


}