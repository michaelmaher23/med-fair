import React, { useEffect } from "react";
import "./SideNav.css";
function SideNav() {
  useEffect(() => {
    let el = document.querySelectorAll(".ae");
    [...el].forEach((button) => {
      button.addEventListener("click", function (i) {
        i.preventDefault();
        if (!button.parentElement.classList.contains("active")) {
          [...el].forEach((q) => {
            q.parentElement.classList.remove("active");
            q.nextElementSibling.style.height = "0px";
          });
          button.parentElement.classList.add("active");
          let a=60;
          console.log(button.nextElementSibling.childElementCount);
          button.nextElementSibling.style.height = `${a * (button.nextElementSibling.childElementCount)}px`;
        } else {
          button.nextElementSibling.style.height = "0px";
          button.parentElement.classList.remove("active");
        }
      });
    });
  });

  return (
    <div>          <span class="nav-section-title">Medical Media</span>

      <ul class="sidebar-menu">
        {" "}
        <li class="have-children">
          <a href="#" className="ae">
            <span class="fa fa-flag"></span>Medical Network
          </a>
          <ul>
            <li>
              <a href="#">Medical</a>
            </li>
            <li>
              <a href="#">Create Acceptances List</a>
            </li>
            <li>
              <a href="#">Create Awarded List</a>
            </li>
            <li>
              <a href="#">View Candidates for Awards</a>
            </li>
            <li>
              <a href=" #">Send Report Cards</a>
            </li>
          </ul>
        </li>
        <li>
        </li>
        <li class="have-children">
          <a href="#" className="ae">
            Home
          </a>
          <ul>
            <li>
              <a href="#">Add Exhibition</a>
            </li>
            <li>
              <a href="#">View Exhibitions</a>
            </li>
          </ul>
        </li>
        <li class="have-children">
          <a href="#" className="ae">
            <span class="fa fa-tags"></span>Create
          </a>
          <ul>
            <li>
              <a href="#">Upload</a>
            </li>
            <li>
              <a href="#">Share</a>
            </li>
          </ul>
        </li>
        <li class="have-children">
          <a href="#" className="ae">
            <span class="fa fa-trophy"></span>About
          </a>
          <ul><p>
            ddd</p></ul>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;
