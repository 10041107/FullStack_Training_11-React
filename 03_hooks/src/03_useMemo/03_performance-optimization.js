import { useEffect, useMemo, useState } from "react";


const hardCalculator =(num) =>{
    console.log("어려운 계산기");

    for(let i =0; i< 1999999999; i++){
        
    }

    return num + 10000;
}



const easyCalcaulator = (num) =>{
    console.log("쉬운 계산기");

    return num +1;
}


const UseMemoComponent = () =>{
    const [hardNumber, setHardNumber] = useState(0);
    const [easyNumber, setEasyNumber] = useState(0);

    
    const hardSum = useMemo(()=>{
        return hardCalculator(hardNumber);
    },[hardNumber]) ;


    const easySum = useMemo(()=>{
        return easyCalcaulator(easyNumber);
    },[easyNumber]) ;
    
    useEffect(()=>{

    },[easySum]);
    useEffect(()=>{
    },[hardNumber])

    return (
        <>
            <input 
                type="number"
                value ={hardNumber}
                onChange={e => setHardNumber(parseInt(e.target.value))}
                />
            <span>+ 1000000 = {hardSum}</span>
            <h3>쉬운 계산기</h3>
            <input 
                type="number"
                value ={easyNumber}
                onChange={e => setEasyNumber(parseInt(e.target.value))}
                />
            <span>+ 1 = {easySum}</span>
        </>
    );
}

export default UseMemoComponent;
