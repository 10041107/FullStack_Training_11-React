import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layouts";
import Main from "./page/Main";
import MyPage from "./page/Mypage";
import Error from "./page/Error";
import Login from "./page/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="main" element={<Main/>}/>
          <Route path="mypage" element={<MyPage/>}/>
          <Route path="login" element={<Login/>}/>
        </Route>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
