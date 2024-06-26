import { useEffect, useState } from "react"

const CallBackProblem = ()=>{

    const [number, setNumber] = useState(0);
    const [toggle, setToggle] = useState(false);
    let valeu = 0;

    const printNumber = ()=>{
        console.log(valeu++);
        console.log(`current number : ${number}`);
    }

    /*
        number 또는  toggle state가 변경될 때 함수 생성이 다시 되는 것은 불필요하다..
        하지만 매번 함수가 다시 생성되어 반환되고 useEffect에서는 해당 지역 변수에 변화가 있다고 인지하게 된다..
    */ 
    useEffect(()=>{
        console.log("printNumber 값 변화 인지됨");
    },[printNumber]);

    return (
        <>
            <input 
                type="number"
                value={number}
                onChange={e => setNumber(e.target.value)}
            />
            <label>{valeu}</label>

            <button onClick={()=>setToggle(!toggle)}>{String(toggle)}</button>
            <br/>
            <button onClick={printNumber}>printNumberState</button>
        </>
    )
}

export default CallBackProblem;