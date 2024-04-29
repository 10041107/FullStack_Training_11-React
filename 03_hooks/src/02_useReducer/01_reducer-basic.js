const { useState, useReducer } = require("react")

const Counter = ()=>{
    const [counter, setCounter] = useState(0);
    
    const pluse = () =>{
        console.log("카운트 증가");
        setCounter(r => r+1);
    }

    const minus = () =>{
        console.log("카운트 감소");
        setCounter(r => r-1);
    }


    return (
        <>
            <h1>counter : {counter}</h1>
            <button onClick={pluse}>+1</button>
            <button onClick={minus}>-1</button>
        </>
    )
}


const Counter1 = ()=>{
    const [counter, setCounter] = useState(0);
    
    const pluse = () =>{
        console.log("카운트 증가");
        setCounter(r => r+1);
    }

    const minus = () =>{
        console.log("카운트 감소");
        setCounter(r => r-1);
    }


    return (
        <>
            <h1>counter : {counter}</h1>
            <button onClick={pluse}>+1</button>
            <button onClick={minus}>-1</button>
        </>
    )
}


const Counter2 = ()=>{
    const [counter, setCounter] = useState(0);
    
    const pluse = () =>{
        console.log("카운트 증가");
        setCounter(r => r+1);
    }

    const minus = () =>{
        console.log("카운트 감소");
        setCounter(r => r-1);
    }


    return (
        <>
            <h1>counter : {counter}</h1>
            <button onClick={pluse}>+1</button>
            <button onClick={minus}>-1</button>
        </>
    )
}


const Counter3 = ()=>{
    const [counter, setCounter] = useState(0);
    
    const pluse = () =>{
        console.log("카운트 증가");
        setCounter(r => r+1);
    }

    const minus = () =>{
        console.log("카운트 감소");
        setCounter(r => r-1);
    }


    return (
        <>
            <h1>counter : {counter}</h1>
            <button onClick={pluse}>+1</button>
            <button onClick={minus}>-1</button>
        </>
    )
}


export const  CounterContainer = () =>{
    return(
        <>
            <Counter/>
            <Counter1/>
            <Counter2/>
            <Counter3/>
        </>
    )
}



const reducer = (state, action) =>{
    switch(action.type){
        case 'DECREMENT':
            console.log("감소")
            return {value : state.value -1}
        case 'INCREMENT':
            console.log("증가")
            return {value : state.value +1}
        default :
            return state;
    }
}

const UseReducerBasic = ()=>{
    const [state, dispatch] = useReducer(reducer, {value:0});

    return(
        <>
            <h1>counter : {state.value}</h1>
            <button onClick={() => dispatch({type:'DECREMENT'})}>-1</button>
            <button onClick={() => dispatch({type:'INCREMENT'})}>+1</button>
        </>
    )
}


const UseReducerBasic1= ()=>{
    const [state, dispatch] = useReducer(reducer, {value:0});

    return(
        <>
            <h1>counter : {state.value}</h1>
            <button onClick={() => dispatch({type:'DECREMENT'})}>-1</button>
            <button onClick={() => dispatch({type:'INCREMENT'})}>+1</button>
        </>
    )
}


const UseReducerBasic2 = ()=>{
    const [state, dispatch] = useReducer(reducer, {value:0});

    return(
        <>
            <h1>counter : {state.value}</h1>
            <button onClick={() => dispatch({type:'DECREMENT'})}>-1</button>
            <button onClick={() => dispatch({type:'INCREMENT'})}>+1</button>
        </>
    )
}


const UseReducerBasic3 = ()=>{
    const [state, dispatch] = useReducer(reducer, {value:0});

    return(
        <>
            <h1>counter : {state.value}</h1>
            <button onClick={() => dispatch({type:'DECREMENT'})}>-1</button>
            <button onClick={() => dispatch({type:'INCREMENT'})}>+1</button>
        </>
    )
}




const ReducerContainer = () =>{
    return (
        <>
            <UseReducerBasic/>
            <UseReducerBasic1/>
            <UseReducerBasic2/>
            <UseReducerBasic3/>
        </>
    )
}

export default ReducerContainer;