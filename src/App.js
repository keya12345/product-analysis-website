import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import Dashboard from "./Components/Dashboard/Dashboard";
import NotFound from "./Components/NotFound/NotFound";
import Review from "./Components/Review/Review";
import Header from "./Components/Header/Header";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/review" element={<Review></Review>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
