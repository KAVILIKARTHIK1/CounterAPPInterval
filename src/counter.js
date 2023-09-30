import React, {useEffect, useState} from "react";
function Counter(){
    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(6);
    const [count3, setCount3] = useState(11);
    const [count4, setCount4] = useState(15);
    const [count5, setCount5] = useState(20);
    useEffect(()=>{
            var i1=setInterval(()=>{
            setCount1(count1 + 1)
            },[1000])
    
         if(count1>=5){
            clearInterval(i1)
            var i2=setInterval(()=>{
                setCount2(count2+1)
            },[1000])
        }
        if(count2>=10){
            clearInterval(i2)
            var i3=setInterval(()=>{
                setCount3(count3+1)
            },[1000])
        }
        if(count3>=15){
            clearInterval(i3)
            var i4=setInterval(()=>{
                setCount4(count4+1)
            },[1000])
        }
        if(count4>=20){
            clearInterval(i4)
            var i5=setInterval(()=>{
                setCount5(count5+1)
            },[1000])
        }
        if(count5>=25){
            clearInterval(i5);
        }
        
    },[count1,count2,count3,count4,count5])
    
    return(
    <>
    <p>count_1-5: {count1}</p>
    <p>count_5-10: {count2}</p>
    <p>count_11-15: {count3}</p>
    <p>count_16-20: {count4}</p>
    <p>count_21-25: {count5}</p>
    </>
    )
}
export default Counter;