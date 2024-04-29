const { useState, useEffect } = require("react");

const Quiz = () =>{
    const [input, setInput] = useState("");
    const [isDone, setIsDone] = useState(false);

    useEffect(() =>{
        if(isDone){ 
            alert("정답 입니다.")
        }else{
            alert("환영합니다..")
        }
    },[isDone]);
    
    const value = "박지호";

    const onChangeText = (e) =>{
        setInput(e.target.value);
    }
    
    const onChangeDone = () =>{
        if(input === value){
            setIsDone(r => !r);
        }
    }
    
    return (
        <>
            <h1>우리반 스타강사의 이름을 입력해주세요 : </h1>
            <input type="text" value={input} onChange={onChangeText}/>
            <button onClick={onChangeDone}>정답 확인</button>
        </>
    );
}

export default Quiz;