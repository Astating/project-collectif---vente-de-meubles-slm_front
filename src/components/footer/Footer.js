import React from "react";
import './footer.css'

export default function Footer() {
    return (
        <>
        <div class="footer-content">
            
            <h3>About us</h3>
            <p>we are a small company found in 2022</p>
        </div>
        <div class="footer-bottom">
            <p>copyright &copy; <a href="#">Salem</a></p>
                    <div class="footer-menu">
                      <ul class="f-menu">
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Blog</a></li>
                      </ul>
                    </div>
        </div>
        </>
    )

}