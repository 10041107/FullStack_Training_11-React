import { useEffect, useState } from "react"



/*
    useEffect는 기본적으로 렌더링 직후와 업데이트 직후 호출된다.
    컴포넌트가 마운트 해제되기 직전이나 업데잍트 되기 직전에 실행할 내용이 있다면 정리(clean-up)을 활 수 있다.

    이전 effect 내용을 정리하고ㅗ 난 뒤 새로운 effect가 동작하도록 할 때 사용한다..
    이전 effect가 남아있는 상태에서 새로운 effect가 발생하게 도ㅚ면
    마우늩가 해제가 일어나고 나서도 메모리 누수나 충돌이 발생할 가능성이 있다..

    정리 함수는 클래스 컴포넌ㅌ트의 componentWillunmonut에서 하는 역할과 동일하다.

     <마운트 후 업데이트 3회 반복 시>
        렌더링 ========> 마운트 ========> 상태 변경 ========> 언마운트 ========> 렌더링 ========> 마운트
               effect                             cleanup                             effect
        (반환한 clean-up함수 저장)   (return한 엘리먼트로                      (반환한 clean-up함수 저장)
                                    언마운트 할 대상 확인
                                         (diff)) 

                               ========> 상태 변경 ========> 언마운트 ========> 렌더링 ========> 마운트
                                                  cleanup                             effect
                                    (return한 엘리먼트로                      (반환한 clean-up함수 저장)
                                    언마운트 할 대상 확인
                                         (diff)) 

                               ========> 상태 변경 ========> 언마운트 ========> 렌더링 ========> 마운트
                                                  cleanup                             effect
                                    (return한 엘리먼트로                      (반환한 clean-up함수 저장)
                                    언마운트 할 대상 확인
                                         (diff)) 

        <마운트 후 언마운트>
        렌더링 ========> 마운트 ========> 언마운트
              effect           cleanup 
       (반환한 clean-up함수 저장)
*/
const UseEffectCleanUp = () =>{

    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("useEffect...");

        return () =>{
            console.log("clean-up");
        }
    });

    return (
        <>
            <h1>count : {count}</h1>
            <button onClick={()=> setCount(count +1)}> + 1</button>
        </>
    )

}

export default UseEffectCleanUp;