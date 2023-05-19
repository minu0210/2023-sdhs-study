import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login";
import Main from "./main";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
