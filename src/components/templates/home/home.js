import {SearchBar} from '../../modules/searchbar'
import BookData from "../../../Data.json";
import {About} from "../about/about"
import React, { useState } from "react";
import "./home.css";
import {Route, Routes, Link} from "react-router-dom"
export const Home = () =>{
    return  (
    // <div>
    //     <div className="Searchbar">
    //         <SearchBar placeholder="Enter a Book Name" data={BookData}/>
    //     </div> 
    //     <div>Home</div>
    // </div>
    <>
    <div class= 'container'>
        <div class="container_content">
            <div class="container_content_inner">
                <div class="title">
                    <h1>Hello World</h1>
                </div>
                <div class="par">
                    <p>
                    Cupiditate alias odio omnis minima veritatis saepe porro, repellendus natus vitae, sequi exercitationem ipsam, qui possimus sit eveniet laborum sapiente quisquam quae neque velit? 
                    </p>
                </div>
                <div class="btns">
                    <nav>
                        <Link to="/about">
                            <button className="btns_more"> See more </button>
                        </Link>
                    </nav>
                    <Routes>
                        <Route path="/about" element={<About/>}/>
                    </Routes>
                </div>
            </div>
        </div>
        <div class="container_outer_img">
            <div class="img-inner">
                <img src='https://images.unsplash.com/photo-1517911041065-4960862d38f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80'  alt="" class="container_img"/>
            </div>
        </div>
  </div>
    <div class="overlay"></div>
    </>
    )
}