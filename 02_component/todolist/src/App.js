import { useEffect, useState } from "react";

// list를 출력하기 위한 컴포넌트
const Item = ({ todo, setTodoList, todoList }) => {
  // 각각의 Item 컴포넌트가 독립적인 check 상태를 가지도록 수정
  const [check, setCheck] = useState(false);
  const style = {
    textDecoration: check ? 'line-through' : "none"
  }

  const changeBox = () => {
      setCheck(r => !r);
  }


  const removeTodo = () => {
    const result = todoList.filter(item => item !== todo);
    setTodoList(result);
  }


  return (
    <div>
      <input type="checkBox" checked={check} onChange={changeBox}  />
      <label style={style}>{todo}</label>
      <button onClick={removeTodo}>삭제하기</button>
    </div>
  );
}

//tolist를 화면에 출력하기 위한 컨테이너
const Container = ({todoList, setTodoList}) =>{
  return (
      todoList.map((current, index) => {
        return <Item todo={current} key={index} setTodoList={setTodoList} todoList={todoList}/>
      })
  );
}

const InputContainer = ({todoList,setTodo}) =>{
  const [input, setInput] = useState("");

  const addList = ()=>{
    setTodo([...todoList, input])
  }

  const changInput = (e)=>{
    setInput(e.target.value);
  }
  return (
    <>
      <input type="text" value={input} onChange={changInput} />
      <button onClick={addList}> 추가 </button>
    </>

  );
}


// 애플리케이션의 전체 화면
function App() {

  const [todoList,setTodoList] = useState(["안녕", "안녕2"]);
  
  return (
    <div>
      <h1>todo list</h1>
      <Container todoList={todoList} setTodoList={setTodoList}/>
      <InputContainer setTodo={setTodoList} todoList={todoList} />
    </div>
  );
}

export default App;
