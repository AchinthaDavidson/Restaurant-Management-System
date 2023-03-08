import React from "react";
import '../App.css';

function Footer(){

    return(
        <footer class="footer">
          <div class="copy">&copy; 2023 Developer</div>
          <div class="bottom-links">
            <div class="links">
              <span>More Info</span>
              <a href="/">Home</a>
              <a href="/Menu">Menu</a>
              <a href="/FAQs">FAQs</a>
            </div>
          <div class="links">
            <span>Social Links</span>
            <a href="https://www.facebook.com/"><i class="fab fa-facebook"></i></a>
            <a href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
          </div>
          </div>
        </footer>
    )
}

export default Footer;