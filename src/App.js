import React from "react";
import { AppProvider } from "./Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/home/Home";
import About from "./components/Pages/about/About";
import BookList from "./components/booklist/BookList";
import Bookdetails from "./components/bookdetails/Bookdetails";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/book" element={<BookList></BookList>}></Route>
            <Route
              path="/book/:id"
              element={<Bookdetails></Bookdetails>}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
