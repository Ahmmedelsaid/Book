import React from "react";
import "./header.css"
import Navbar from "../navbar/Navbar";
import SearchForm from "../searchform/SearchForm";
function Header() {
  return (
    <div>
      <header className="header">
        <Navbar></Navbar>
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            find your book of choice.
          </h2>
          <br />
          <p className="header-text fs-18 fw-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae
            sapiente quibusdam consequatur perspiciatis facere laboriosam non
            nesciunt at id repudiandae, modi iste? Eligendi, rerum!
          </p>
          <SearchForm></SearchForm>
        </div>
      </header>
    </div>
  );
}

export default Header;
