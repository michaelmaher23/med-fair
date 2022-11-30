import React from "react";
 
import about from "./img/about.jpg";
import ppp from "./img/ppp.webp";
import "./templatemo-edu-meeting.css";
import "./owl.css";
import "./lightbox.css";
import "./style.css";
import page1 from "../images/service-icon-01.png";
import page2 from "../images/service-icon-02.png";
import page3 from "../images/service-icon-03.png";
import course from "../images/course-01.jpg";
import meeting from "../images/meeting-02.jpg";
import service from "../images/service-icon-03.png";
import play from "../images/play-icon.png";
import image4 from "../images/service-icon-02.png";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import video888 from "../images/course-video.mp4";
import useExternalScripts from "../../hooks/useExternalScripts.js";

function Aboutus() {
  return (
    <div style={{ width: "100%", margin: "auto", position: "relative" }}>
      <div className="sub-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-8">
              <div className="left-content">
                <p>
                  This is an educational <em>HTML CSS</em> template by
                  TemplateMo website.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4">
              <div className="right-icons">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-behance"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="header-area header-sticky">
        <div className="container">
          <div className="row" style={{ width: "fit-contnt", margin: "auto" }}>
            <div className="col-12">
              <nav className="main-nav">
                <a href="#" className="logo">
                  Edu Meeting
                </a>

                <ul className="nav">
                  <li className="scroll-to-section">
                    <a href="# " className="active">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#">Meetings</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#">Apply Now</a>
                  </li>
                  <li className="has-sub">
                    <a  >Pages</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="meetings.html">Upcoming Meetings</a>
                      </li>
                      <li>
                        <a href="meeting-details.html">Meeting Details</a>
                      </li>
                    </ul>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#courses">Courses</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#contact">Contact Us</a>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <section className="section main-banner" id="top" data-section="section1">
        <video autoPlay muted loop id="bg-video">
          <source src={video888} type="video/mp4" />
        </video>

        <div className="video-overlay header-text">
          <div className="container">
            <div
              className="row"
              style={{ width: "fit-contnt", margin: "auto" }}
            >
              <div className="col-lg-12">
                <div className="caption">
                  <h6>Hello Students</h6>
                  <h2>Welcome to Education</h2>
                  <p>
                    This is an edu meeting HTML CSS template provided by{" "}
                    <a
                      rel="nofollow"
                      href="https://templatemo.com/page/1"
                      target="_blank"
                    >
                      TemplateMo website
                    </a>
                    . This is a Bootstrap v5.1.3 layout. The video background is
                    taken from Pexels website, a group of young people by{" "}
                    <a
                      rel="nofollow"
                      href="https://www.pexels.com/@pressmaster"
                      target="_blank"
                    >
                      Pressmaster
                    </a>
                    .
                  </p>
                  <div className="main-button-red">
                    <div className="scroll-to-section">
                      <a href="#contact">Join Us Now!</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services">
        <div className="container">
          <div className="row" style={{ width: "fit-contnt", margin: "auto" }}>
            <div className="col-lg-12">
              <div className="owl-service-item owl-carousel">
                <div className="item">
                  <div className="icon">
                    <img
                      style={{ width: "100%", overflow: "hidden" }}
                      src={page1}
                      alt=""
                    />
                  </div>
                  <div className="down-content">
                    <h4>Best Education</h4>
                    <p>
                      Suspendisse tempor mauris a sem elementum bibendum.
                      Praesent facilisis massa non vestibulum.
                    </p>
                  </div>
                </div>

                <div className="item">
                  <div className="icon">
                    <img
                      style={{ width: "100%", overflow: "hidden" }}
                      src={page2}
                      alt=""
                    />
                  </div>
                  <div className="down-content">
                    <h4>Best Teachers</h4>
                    <p>
                      Suspendisse tempor mauris a sem elementum bibendum.
                      Praesent facilisis massa non vestibulum.
                    </p>
                  </div>
                </div>

                <div className="item">
                  <div className="icon">
                    <img
                      style={{ width: "100%", overflow: "hidden" }}
                      src={page3}
                      alt=""
                    />
                  </div>
                  <div className="down-content">
                    <h4>Best Students</h4>
                    <p>
                      Suspendisse tempor mauris a sem elementum bibendum.
                      Praesent facilisis massa non vestibulum.
                    </p>
                  </div>
                </div>

                <div className="item">
                  <div className="icon">
                    <img
                      style={{ width: "100%", overflow: "hidden" }}
                      src={image4}
                      alt=""
                    />
                  </div>
                  <div className="down-content">
                    <h4>Online Meeting</h4>
                    <p>
                      Suspendisse tempor mauris a sem elementum bibendum.
                      Praesent facilisis massa non vestibulum.
                    </p>
                  </div>
                </div>

                <div className="item">
                  <div className="icon">
                    <img
                      style={{ width: "100%", overflow: "hidden" }}
                      src={service}
                      alt=""
                    />
                  </div>
                  <div className="down-content">
                    <h4>Best Networking</h4>
                    <p>
                      Suspendisse tempor mauris a sem elementum bibendum.
                      Praesent facilisis massa non vestibulum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="upcoming-meetings" id="meetings">
        <div className="container">
          <div className="row" style={{ width: "fit-content", margin: "auto" }}>
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>Upcoming Meetings</h2>
              </div>
            </div>
            <div className="col-lg-4" style={{ margin: "auto" }}>
              <div className="categories">
                <h4>Meeting Catgories</h4>
                <ul>
                  <li>
                    <a href="#">Sed tempus enim leo</a>
                  </li>
                  <li>
                    <a href="#">Aenean molestie quis</a>
                  </li>
                  <li>
                    <a href="#">Cras et metus vestibulum</a>
                  </li>
                  <li>
                    <a href="#">Nam et condimentum</a>
                  </li>
                  <li>
                    <a href="#">Phasellus nec sapien</a>
                  </li>
                </ul>
                <div className="main-button-red">
                  <a href="meetings.html">All Upcoming Meetings</a>
                </div>
              </div>
            </div>
            <div className="col-lg-8" style={{ margin: "auto" }}>
              <div className="row" style={{ margin: "auto" }}>
                <div className="col-lg-6" style={{ margin: "auto" }}>
                  <div className="meeting-item">
                    <div className="thumb">
                      <div className="price">
                        <span>$22.00</span>
                      </div>
                      <a href="meeting-details.html">
                        <img
                          style={{ width: "100%", overflow: "hidden" }}
                          src={meeting}
                          alt="New Lecturer Meeting"
                        />
                      </a>
                    </div>
                    <div className="down-content">
                      <div className="date">
                        <h6>
                          Nov <span>10</span>
                        </h6>
                      </div>
                      <a href="meeting-details.html">
                        <h4>New Lecturers Meeting</h4>
                      </a>
                      <p>
                        Morbi in libero blandit lectus
                        <br />
                        cursus ullamcorper.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="meeting-item">
                    <div className="thumb">
                      <div className="price">
                        <span>$36.00</span>
                      </div>
                      <a href="meeting-details.html">
                        <img
                          style={{ width: "100%", overflow: "hidden" }}
                          src={meeting}
                          alt="Online Teaching"
                        />
                      </a>
                    </div>
                    <div className="down-content">
                      <div className="date">
                        <h6>
                          Nov <span>24</span>
                        </h6>
                      </div>
                      <a href="meeting-details.html">
                        <h4>Online Teaching Techniques</h4>
                      </a>
                      <p>
                        Morbi in libero blandit lectus
                        <br />
                        cursus ullamcorper.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="meeting-item">
                    <div className="thumb">
                      <div className="price">
                        <span>$14.00</span>
                      </div>
                      <a href="meeting-details.html">
                        <img
                          style={{ width: "100%", overflow: "hidden" }}
                          src={meeting}
                          alt="Higher Education"
                        />
                      </a>
                    </div>
                    <div className="down-content">
                      <div className="date">
                        <h6>
                          Nov <span>26</span>
                        </h6>
                      </div>
                      <a href="meeting-details.html">
                        <h4>Higher Education Conference</h4>
                      </a>
                      <p>
                        Morbi in libero blandit lectus
                        <br />
                        cursus ullamcorper.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="meeting-item">
                    <div className="thumb">
                      <div className="price">
                        <span>$48.00</span>
                      </div>
                      <a href="meeting-details.html">
                        <img
                          style={{ width: "100%", overflow: "hidden" }}
                          src={meeting}
                          alt="Student Training"
                        />
                      </a>
                    </div>
                    <div className="down-content">
                      <div className="date">
                        <h6>
                          Nov <span>30</span>
                        </h6>
                      </div>
                      <a href="meeting-details.html">
                        <h4>Student Training Meetup</h4>
                      </a>
                      <p>
                        Morbi in libero blandit lectus
                        <br />
                        cursus ullamcorper.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="apply-now" id="apply">
        <div className="container">
          <div className="row" style={{ width: "fit-contnt", margin: "auto" }}>
            <div className="col-lg-6 align-self-center">
              <div
                className="row"
                style={{ width: "fit-contnt", margin: "auto" }}
              >
                <div className="col-lg-12">
                  <div className="item">
                    <h3>APPLY FOR BACHELOR DEGREE</h3>
                    <p>
                      You are allowed to use this edu meeting CSS template for
                      your school or university or business. You can feel free
                      to modify or edit this layout.
                    </p>
                    <div className="main-button-red">
                      <div className="scroll-to-section">
                        <a href="#contact">Join Us Now!</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="item">
                    <h3>APPLY FOR BACHELOR DEGREE</h3>
                    <p>
                      You are not allowed to redistribute the template ZIP file
                      on any other template website. Please contact us for more
                      information.
                    </p>
                    <div className="main-button-yellow">
                      <div className="scroll-to-section">
                        <a href="#contact">Join Us Now!</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="accordions is-first-expanded">
                <article className="accordion">
                  <div className="accordion-head">
                    <span>About Edu Meeting HTML Template</span>
                    <span className="icon">
                      <i className="icon fa fa-chevron-right"></i>
                    </span>
                  </div>
                  <div className="accordion-body">
                    <div className="content">
                      <p>
                        If you want to get the latest collection of HTML CSS
                        templates for your websites, you may visit{" "}
                        <a
                          rel="nofollow"
                          href="https://www.toocss.com/"
                          target="_blank"
                        >
                          Too CSS website
                        </a>
                        . If you need a working contact form script, please
                        visit{" "}
                        <a
                          href="https://templatemo.com/contact"
                          target="_parent"
                        >
                          our contact page
                        </a>{" "}
                        for more info.
                      </p>
                    </div>
                  </div>
                </article>
                <article className="accordion">
                  <div className="accordion-head">
                    <span>HTML CSS Bootstrap Layout</span>
                    <span className="icon">
                      <i className="icon fa fa-chevron-right"></i>
                    </span>
                  </div>
                  <div className="accordion-body">
                    <div className="content">
                      <p>
                        Etiam posuere metus orci, vel consectetur elit imperdiet
                        eu. Cras ipsum magna, maximus at semper sit amet,
                        eleifend eget neque. Nunc facilisis quam purus, sed
                        vulputate augue interdum vitae. Aliquam a elit massa.
                        <br />
                        <br />
                        Nulla malesuada elit lacus, ac ultricies massa varius
                        sed. Etiam eu metus eget nibh consequat aliquet. Proin
                        fringilla, quam at euismod porttitor, odio odio tempus
                        ligula, ut feugiat ex erat nec mauris. Donec viverra
                        velit eget lectus sollicitudin tincidunt.
                      </p>
                    </div>
                  </div>
                </article>
                <article className="accordion">
                  <div className="accordion-head">
                    <span>Please tell your friends</span>
                    <span className="icon">
                      <i className="icon fa fa-chevron-right"></i>
                    </span>
                  </div>
                  <div className="accordion-body">
                    <div className="content">
                      <p>
                        Ut vehicula mauris est, sed sodales justo rhoncus eu.
                        Morbi porttitor quam velit, at ullamcorper justo
                        suscipit sit amet. Quisque at suscipit mi, non efficitur
                        velit.
                        <br />
                        <br />
                        Cras et tortor semper, placerat eros sit amet, porta
                        est. Mauris porttitor sapien et quam volutpat luctus.
                        Nullam sodales ipsum ac neque ultricies varius.
                      </p>
                    </div>
                  </div>
                </article>
                <article className="accordion last-accordion">
                  <div className="accordion-head">
                    <span>Share this to your colleagues</span>
                    <span className="icon">
                      <i className="icon fa fa-chevron-right"></i>
                    </span>
                  </div>
                  <div className="accordion-body">
                    <div className="content">
                      <p>
                        Maecenas suscipit enim libero, vel lobortis justo
                        condimentum id. Interdum et malesuada fames ac ante
                        ipsum primis in faucibus.
                        <br />
                        <br />
                        Sed eleifend metus sit amet magna tristique, posuere
                        laoreet arcu semper. Nulla pellentesque ut tortor sit
                        amet maximus. In eu libero ullamcorper, semper nisi
                        quis, convallis nisi.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-courses" id="courses">
        <div className="container">
          <div className="row" style={{ width: "fit-content", margin: "auto" }}>
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>Our Popular Courses</h2>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="owl-courses-item owl-carousel">
                <div className="item">
                  <img
                    style={{ width: "100%", overflow: "hidden" }}
                    src={course}
                    alt="Course One"
                  />
                  <div className="down-content">
                    <h4>Morbi tincidunt elit vitae justo rhoncus</h4>
                    <div className="info">
                      <div
                        className="row"
                        style={{ width: "fit-contnt", margin: "auto" }}
                      >
                        <div className="col-8">
                          <ul>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <span>$160</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img
                    style={{ width: "100%", overflow: "hidden" }}
                    src={course}
                    alt="Course Two"
                  />
                  <div className="down-content">
                    <h4>Curabitur molestie dignissim purus vel</h4>
                    <div className="info">
                      <div
                        className="row"
                        style={{ width: "fit-content", margin: "auto" }}
                      >
                        <div className="col-8">
                          <ul>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <span>$180</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img
                    style={{ width: "100%", overflow: "hidden" }}
                    src={course}
                    alt=""
                  />
                  <div className="down-content">
                    <h4>Nulla at ipsum a mauris egestas tempor</h4>
                    <div className="info">
                      <div
                        className="row"
                        style={{ width: "fit-content", margin: "auto" }}
                      >
                        <div className="col-8">
                          <ul>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <span>$140</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img
                    style={{ width: "100%", overflow: "hidden" }}
                    src={course}
                    alt=""
                  />
                  <div className="down-content">
                    <h4>Aenean molestie quis libero gravida</h4>
                    <div className="info">
                      <div
                        className="row"
                        style={{ width: "fit-content", margin: "auto" }}
                      >
                        <div className="col-8">
                          <ul>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <span>$120</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img
                    style={{ width: "100%", overflow: "hidden" }}
                    src={course}
                    alt=""
                  />
                  <div className="down-content">
                    <h4>Lorem ipsum dolor sit amet adipiscing elit</h4>
                    <div className="info">
                      <div
                        className="row"
                        style={{ width: "fit-contnt", margin: "auto" }}
                      >
                        <div className="col-8">
                          <ul>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <span>$250</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img
                    style={{ width: "100%", overflow: "hidden" }}
                    src={course}
                    alt=""
                  />
                  <div className="down-content">
                    <h4>TemplateMo is the best website for Free CSS</h4>
                    <div className="info">
                      <div
                        className="row"
                        style={{ width: "fit-contnt", margin: "auto" }}
                      >
                        <div className="col-8">
                          <ul>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <span>$270</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img
                    style={{ width: "100%", overflow: "hidden" }}
                    src={course}
                    alt=""
                  />
                  <div className="down-content">
                    <h4>Web Design Templates at your finger tips</h4>
                    <div className="info">
                      <div
                        className="row"
                        style={{ width: "fit-contnt", margin: "auto" }}
                      >
                        <div className="col-8">
                          <ul>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <span>$340</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img
                    style={{ width: "100%", overflow: "hidden" }}
                    src={course}
                    alt=""
                  />
                  <div className="down-content">
                    <h4>Please visit our website again</h4>
                    <div className="info">
                      <div
                        className="row"
                        style={{ width: "fit-content", margin: "auto" }}
                      >
                        <div className="col-8">
                          <ul>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <span>$360</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img
                    style={{ width: "100%", overflow: "hidden" }}
                    src={course}
                    alt=""
                  />
                  <div className="down-content">
                    <h4>Responsive HTML Templates for you</h4>
                    <div className="info">
                      <div
                        className="row"
                        style={{ width: "fit-content", margin: "auto" }}
                      >
                        <div className="col-8">
                          <ul>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <span>$400</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img
                    style={{ width: "100%", overflow: "hidden" }}
                    src={course}
                    alt=""
                  />
                  <div className="down-content">
                    <h4>Download Free CSS Layouts for your business</h4>
                    <div className="info">
                      <div
                        className="row"
                        style={{ width: "fit-content", margin: "auto" }}
                      >
                        <div className="col-8">
                          <ul>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <span>$430</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img
                    style={{ width: "100%", overflow: "hidden" }}
                    src={course}
                    alt=""
                  />
                  <div className="down-content">
                    <h4>Morbi in libero blandit lectus cursus</h4>
                    <div className="info">
                      <div
                        className="row"
                        style={{ width: "fit-content", margin: "auto" }}
                      >
                        <div className="col-8">
                          <ul>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <span>$480</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img
                    style={{ width: "100%", overflow: "hidden" }}
                    src={course}
                    alt=""
                  />
                  <div className="down-content">
                    <h4>Curabitur molestie dignissim purus</h4>
                    <div className="info">
                      <div
                        className="row"
                        style={{ width: "fit-content", margin: "auto" }}
                      >
                        <div className="col-8">
                          <ul>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                        </div>
                        <div className="col-4">
                          <span>$560</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-facts">
        <div className="container">
          <div className="row" style={{ width: "fit-content", margin: "auto" }}>
            <div className="col-lg-6">
              <div
                className="row"
                style={{ width: "fit-content", margin: "auto" }}
              >
                <div className="col-lg-12">
                  <h2>A Few Facts About Our University</h2>
                </div>
                <div className="col-lg-6">
                  <div
                    className="row"
                    style={{ width: "fit-content", margin: "auto" }}
                  >
                    <div className="col-12">
                      <div className="count-area-content percentage">
                        <div className="count-digit">94</div>
                        <div className="count-title">Succesed Students</div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="count-area-content">
                        <div className="count-digit">126</div>
                        <div className="count-title">Current Teachers</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="row"
                    style={{ width: "fit-content", margin: "auto" }}
                  >
                    <div className="col-12">
                      <div className="count-area-content new-students">
                        <div className="count-digit">2345</div>
                        <div className="count-title">New Students</div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="count-area-content">
                        <div className="count-digit">32</div>
                        <div className="count-title">Awards</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="video">
                <a
                  href="https://www.youtube.com/watch?v=HndV87XpkWg"
                  target="_blank"
                >
                  <img
                    style={{ width: "100%", overflow: "hidden" }}
                    src={play}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-us" id="contact">
        <div className="container">
          <div className="row" style={{ width: "fit-content", margin: "auto" }}>
            <div className="col-lg-9 align-self-center">
              <div
                className="row"
                style={{ width: "fit-content", margin: "auto" }}
              >
                <div className="col-lg-12">
                  <form id="contact" action="" method="post">
                    <div
                      className="row"
                      style={{ width: "fit-content", margin: "auto" }}
                    >
                      <div className="col-lg-12">
                        <h2>Let's get in touch</h2>
                      </div>
                      <div className="col-lg-4">
                        <fieldset>
                          <input
                            name="name"
                            type="text"
                            id="name"
                            placeholder="YOURNAME...*"
                            required=""
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-4">
                        <fieldset>
                          <input
                            name="email"
                            type="text"
                            id="email"
                            pattern="[^ @]*@[^ @]*"
                            placeholder="YOUR EMAIL..."
                            required=""
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-4">
                        <fieldset>
                          <input
                            name="subject"
                            type="text"
                            id="subject"
                            placeholder="SUBJECT...*"
                            required=""
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <textarea
                            name="message"
                            type="text"
                            className="form-control"
                            id="message"
                            placeholder="YOUR MESSAGE..."
                            required=""
                          ></textarea>
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <button
                            type="submit"
                            id="form-submit"
                            className="button"
                          >
                            SEND MESSAGE NOW
                          </button>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="right-info">
                <ul>
                  <li>
                    <h6>Phone Number</h6>
                    <span>010-020-0340</span>
                  </li>
                  <li>
                    <h6>Email Address</h6>
                    <span>info@meeting.edu</span>
                  </li>
                  <li>
                    <h6>Street Address</h6>
                    <span>Rio de Janeiro - RJ, 22795-008, Brazil</span>
                  </li>
                  <li>
                    <h6>Website URL</h6>
                    <span>www.meeting.edu</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <p>
            Copyright © 2022 Edu Meeting Co., Ltd. All Rights Reserved.
            <br />
            Design:{" "}
            <a
              href="https://templatemo.com"
              target="_parent"
              title="free css templates"
            >
              TemplateMo
            </a>
          </p>
        </div>
      </section>

      <div className="container-fluid py-2 border-bottom d-none d-lg-block">
        <div className="container">
          <div className="row" style={{ width: "fit-content", margin: "auto" }}>
            <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center">
                <a className="text-decoration-none text-body pe-3" href="">
                  <i className="bi bi-telephone me-2"></i>+012 345 6789
                </a>
                <span className="text-body">|</span>
                <a className="text-decoration-none text-body px-3" href="">
                  <i className="bi bi-envelope me-2"></i>info@example.com
                </a>
              </div>
            </div>
            <div className="col-md-6 text-center text-lg-end">
              <div className="d-inline-flex align-items-center">
                <a className="text-body px-2" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="text-body px-2" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="text-body px-2" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a className="text-body px-2" href="">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="text-body ps-2" href="">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid sticky-top bg-white shadow-sm mb-5">
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
            <a href="index.html" className="navbar-brand">
              <h1 className="m-0 text-uppercase golden">
                <i className="fa fa-clinic-medical me-2"></i>Medinova
              </h1>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0">
                <a href="index.html" className="nav-item nav-link">
                  Home
                </a>
                <a href="about.html" className="nav-item nav-link active">
                  About
                </a>
                <a href="service.html" className="nav-item nav-link">
                  Service
                </a>
                <a href="price.html" className="nav-item nav-link">
                  Pricing
                </a>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu m-0">
                    <a href="blog.html" className="dropdown-item">
                      Blog Grid
                    </a>
                    <a href="detail.html" className="dropdown-item">
                      Blog Detail
                    </a>
                    <a href="team.html" className="dropdown-item">
                      The Team
                    </a>
                    <a href="testimonial.html" className="dropdown-item">
                      Testimonial
                    </a>
                    <a href="appointment.html" className="dropdown-item">
                      Appointment
                    </a>
                    <a href="search.html" className="dropdown-item">
                      Search
                    </a>
                  </div>
                </div>
                <a href="contact.html" className="nav-item nav-link">
                  Contact
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="container-fluid    py-4">
        <div className="container  ">
          <div className="row ">
            <div className="col-lg-5 col-md-12  col-sm-12 mb-5 mb-lg-0">
              <div className="position-relative ">
                <img
                  style={{
                    width: "100%",
                    overflow: "hidden",
                    objectFit: "cover",
                  }}
                  className="img-fluid rounded mb-5"
                  src={ppp}
                />
              </div>
            </div>
            <div className="col-lg-7 col-md-12  col-sm-12 ">
              <div className="mb-4 ">
                <h5 className="d-inline-block   text-uppercase border-bottom border-5">
                  Who are we?
                </h5>
                <h1 className="display-4">
                  Best Medical Care For Yourself and Your Family
                </h1>
              </div>
              <p>
                Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam
                dolor diam ipsum et, tempor voluptua sit consetetur sit.
                Aliquyam diam amet diam et eos sadipscing labore. Clita erat
                ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                clita duo justo et tempor consetetur takimata eirmod, dolores
                takimata consetetur invidunt magna dolores aliquyam dolores
                dolore. Amet erat amet et magna
              </p>
              <div className="row g-3 pt-3">
                <div className="col-sm-3 col-6">
                  <div className="golden2 text-center rounded-circle py-4">
                    <i className="fa fa-3x fa-user-md golden mb-3"></i>
                    <h6 className="mb-0">
                      Qualified<small className="d-block golden">Doctors</small>
                    </h6>
                  </div>
                </div>
                <div className="col-sm-3 col-6">
                  <div className="golden2 text-center rounded-circle py-4">
                    <i className="fa fa-3x fa-procedures golden mb-3"></i>
                    <h6 className="mb-0">
                      Emergency
                      <small className="d-block golden">Services</small>
                    </h6>
                  </div>
                </div>
                <div className="col-sm-3 col-6">
                  <div className="golden2 text-center rounded-circle py-4">
                    <i className="fa fa-3x fa-microscope golden mb-3"></i>
                    <h6 className="mb-0">
                      Accurate<small className="d-block golden">Testing</small>
                    </h6>
                  </div>
                </div>
                <div className="col-sm-3 col-6">
                  <div className="golden2 text-center rounded-circle py-4">
                    <i className="fa fa-3x fa-ambulance golden mb-3"></i>
                    <h6 className="mb-0">
                      Free<small className="d-block golden">Ambulance</small>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid golden3 my-3 py-2">
        <div className="container py-5">
          <div
            className="text-center mx-auto mb-5"
            style={{ maxWidth: "500px" }}
          >
            <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">
              Find A Doctor
            </h5>
            <h1 className="display-4 mb-4">Find A Healthcare Professionals</h1>
            <h5 className="text-white fw-normal">
              Duo ipsum erat stet dolor sea ut nonumy tempor. Tempor duo lorem
              eos sit sed ipsum takimata ipsum sit est. Ipsum ea voluptua ipsum
              sit justo
            </h5>
          </div>
          <div className="mx-auto" style={{ width: "100%", maxWidth: "600px" }}>
            <div className="input-group">
              <select
                className="form-select border-primary w-25"
                style={{ height: "60px" }}
              >
                <option  >Department</option>
                <option value="1">Department 1</option>
                <option value="2">Department 2</option>
                <option value="3">Department 3</option>
              </select>
              <input
                type="text"
                className="form-control border-primary w-50"
                placeholder="Keyword"
              />
              <button className="btn btn-dark border-0 w-25">Search</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-4">
        <div className="container">
          <div className="text-center mx-auto mb-5">
            <h5 className="d-inline-block golden text-uppercase border-bottom border-5">
              Our Doctors
            </h5>
            <h1 className="display-4">Qualified Healthcare Professionals</h1>
          </div>
          <div className="owl-carousel team-carousel position-relative">
            <div className="team-item">
              <div className="row g-0 golden2 rounded overflow-hidden">
                <div className="col-12 col-sm-5 py-4">
                  <img
                    style={{
                      width: "100%",
                      overflow: "hidden",
                      objectFit: "cover",
                    }}
                    className="img-fluid rounded "
                    src={ppp}
                  />
                </div>
                <div className="col-12 col-sm-7  d-flex flex-column">
                  <div className="mt-auto p-4">
                    <h3>Prof .Yossef Amir</h3>
                    <h6 className="fw-normal fst-italic golden mb-4">
                      {" "}
                      Heart and blood{" "}
                    </h6>
                    <p className="m-0">
                      As SVP, Product at Dotdash Meredith, Keith is responsible
                      for product management of Dotdash's financial brands
                      (Investopedia and The Balance) as well as its performance
                      marketing teams whose work spans the entire Dotdash
                      Meredith publishing family. Keith has been with Dotdash
                      Meredith since 2019. Previous to Dotdash Meredith, Keith
                      was Director of Product Management at Red Ventures, having
                      spent seven years working in various product roles at
                      Bankrate.com. Before working at Bankrate, Keith was the
                      first member of the product team at Hearst Newspapers.
                    </p>
                  </div>
                  <div className="d-flex mt-auto border-top p-4">
                    <a
                      className="btn btn-lg golden4 btn-lg-square rounded-circle me-3"
                      href="#"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-lg golden4 btn-lg-square rounded-circle me-3"
                      href="#"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-lg golden4 btn-lg-square rounded-circle"
                      href="#"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-light mt-5 py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="d-inline-block golden text-uppercase border-bottom border-5 border-secondary mb-4">
                Get In Touch
              </h4>
              <p className="mb-4">
                No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita
                et et dolor sed dolor
              </p>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt golden me-3"></i>123 Street,
                New York, USA
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope golden me-3"></i>info@example.com
              </p>
              <p className="mb-0">
                <i className="fa fa-phone-alt golden me-3"></i>+012 345 67890
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="d-inline-block golden text-uppercase border-bottom border-5 border-secondary mb-4">
                Quick Links
              </h4>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-light mb-2" href="#">
                  <i className="fa fa-angle-right me-2"></i>Home
                </a>
                <a className="text-light mb-2" href="#">
                  <i className="fa fa-angle-right me-2"></i>About Us
                </a>
                <a className="text-light mb-2" href="#">
                  <i className="fa fa-angle-right me-2"></i>Our Services
                </a>
                <a className="text-light mb-2" href="#">
                  <i className="fa fa-angle-right me-2"></i>Meet The Team
                </a>
                <a className="text-light mb-2" href="#">
                  <i className="fa fa-angle-right me-2"></i>Latest Blog
                </a>
                <a className="text-light" href="#">
                  <i className="fa fa-angle-right me-2"></i>Contact Us
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="d-inline-block golden text-uppercase border-bottom border-5 border-secondary mb-4">
                Popular Links
              </h4>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-light mb-2" href="#">
                  <i className="fa fa-angle-right me-2"></i>Home
                </a>
                <a className="text-light mb-2" href="#">
                  <i className="fa fa-angle-right me-2"></i>About Us
                </a>
                <a className="text-light mb-2" href="#">
                  <i className="fa fa-angle-right me-2"></i>Our Services
                </a>
                <a className="text-light mb-2" href="#">
                  <i className="fa fa-angle-right me-2"></i>Meet The Team
                </a>
                <a className="text-light mb-2" href="#">
                  <i className="fa fa-angle-right me-2"></i>Latest Blog
                </a>
                <a className="text-light" href="#">
                  <i className="fa fa-angle-right me-2"></i>Contact Us
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="d-inline-block golden text-uppercase border-bottom border-5 border-secondary mb-4">
                Newsletter
              </h4>
              <form action="">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control p-3 border-0"
                    placeholder="Your Email Address"
                  />
                  <button className="btn golden4">Sign Up</button>
                </div>
              </form>
              <h6 className="golden text-uppercase mt-4 mb-3">Follow Us</h6>
              <div className="d-flex">
                <a
                  className="btn btn-lg golden4 btn-lg-square rounded-circle me-2"
                  href="#"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="btn btn-lg golden4 btn-lg-square rounded-circle me-2"
                  href="#"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-lg golden4 btn-lg-square rounded-circle me-2"
                  href="#"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  className="btn btn-lg golden4 btn-lg-square rounded-circle"
                  href="#"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-light border-top border-secondary py-4">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-md-0">
                &copy;{" "}
                <a className="golden" href="#">
                  Your Site Name
                </a>
                . All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0">
                Designed by{" "}
                <a className="golden" href="https://htmlcodex.com">
                  HTML Codex
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <a href="#" className="btn btn-lg golden4 btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>

      <div className="sub-header">
        <div className="container">
          <div className="row" style={{ width: "fit-contnt", margin: "auto" }}>
            <div className="col-lg-8 col-sm-8">
              <div className="left-content">
                <p>
                  This is an educational <em>HTML CSS</em> template by
                  TemplateMo website.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4">
              <div className="right-icons">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-behance"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="header-area header-sticky">
        <div className="container">
          <div className="row" style={{ width: "fit-contnt", margin: "auto" }}>
            <div className="col-12">
              <nav className="main-nav">
                <a href="index.html" className="logo">
                  Edu Meeting
                </a>

                <ul className="nav">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="meetings.html" className="active">
                      Meetings
                    </a>
                  </li>
                  <li>
                    <a href="index.html">Apply Now</a>
                  </li>
                  <li className="has-sub">
                    <a  >Pages</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="meetings.html">Upcoming Meetings</a>
                      </li>
                      <li>
                        <a href="meeting-details.html">Meeting Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="index.html">Courses</a>
                  </li>
                  <li>
                    <a href="index.html">Contact Us</a>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <section className="heading-page header-text" id="top">
        <div className="container">
          <div className="row" style={{ width: "fit-contnt", margin: "auto" }}>
            <div className="col-lg-12">
              <h6>Get all details</h6>
              <h2>Online Teaching and Learning Tools</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="meetings-page" id="meetings">
        <div className="container">
          <div className="row" style={{ width: "fit-contnt", margin: "auto" }}>
            <div className="col-lg-12">
              <div
                className="row"
                style={{ width: "fit-contnt", margin: "auto" }}
              >
                <div className="col-lg-12">
                  <div className="meeting-single-item">
                    <div className="thumb">
                      <div className="price">
                        <span>$14.00</span>
                      </div>
                      <div className="date">
                        <h6>
                          Nov <span>12</span>
                        </h6>
                      </div>
                      <a href="meeting-details.html">
                        <img src="assets/images/single-meeting.jpg" alt="" />
                      </a>
                    </div>
                    <div className="down-content">
                      <a href="meeting-details.html">
                        <h4>Online Teaching and Learning Tools</h4>
                      </a>
                      <p>
                        Recreio dos Bandeirantes, Rio de Janeiro - RJ,
                        22795-008, Brazil
                      </p>
                      <p className="description">
                        This is an edu meeting HTML CSS template provided by{" "}
                        <a
                          href="https://templatemo.com/"
                          target="_blank"
                          rel="nofollow"
                        >
                          TemplateMo website
                        </a>
                        . This is a Bootstrap v5.1.3 layout. If you need more
                        free website templates like this one, please visit our
                        website TemplateMo. Please tell your friends about our
                        website. Thank you. If you want to get the latest
                        collection of HTML CSS templates for your websites, you
                        may visit{" "}
                        <a
                          rel="nofollow"
                          href="https://www.toocss.com/"
                          target="_blank"
                        >
                          Too CSS website
                        </a>
                        . If you need a working contact form script, please
                        visit{" "}
                        <a
                          href="https://templatemo.com/contact"
                          target="_parent"
                        >
                          our contact page
                        </a>{" "}
                        for more info.
                        <br />
                        <br />
                        You are allowed to use this edu meeting CSS template for
                        your school or university or business. You can feel free
                        to modify or edit this layout. You are not allowed to
                        redistribute the template ZIP file on any other template
                        website. Please contact us for more information.
                      </p>
                      <div
                        className="row"
                        style={{ width: "fit-contnt", margin: "auto" }}
                      >
                        <div className="col-lg-4">
                          <div className="hours">
                            <h5>Hours</h5>
                            <p>
                              Monday - Friday: 07:00 AM - 13:00 PM
                              <br />
                              Saturday- Sunday: 09:00 AM - 15:00 PM
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="location">
                            <h5>Location</h5>
                            <p>
                              Recreio dos Bandeirantes,
                              <br />
                              Rio de Janeiro - RJ, 22795-008, Brazil
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="book now">
                            <h5>Book Now</h5>
                            <p>
                              010-020-0340
                              <br />
                              090-080-0760
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="share">
                            <h5>Share:</h5>
                            <ul>
                              <li>
                                <a href="#">Facebook</a>,
                              </li>
                              <li>
                                <a href="#">Twitter</a>,
                              </li>
                              <li>
                                <a href="#">Linkedin</a>,
                              </li>
                              <li>
                                <a href="#">Behance</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="main-button-red">
                    <a href="meetings.html">Back To Meetings List</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <p>
            Copyright © 2022 Edu Meeting Co., Ltd. All Rights Reserved.
            <br />
            Design:{" "}
            <a
              href="https://templatemo.com"
              target="_parent"
              title="free css templates"
            >
              TemplateMo
            </a>
          </p>
        </div>
      </section>

      <div className="sub-header">
        <div className="container">
          <div className="row" style={{ width: "fit-contnt", margin: "auto" }}>
            <div className="col-lg-8 col-sm-8">
              <div className="left-content">
                <p>
                  This is an educational <em>HTML CSS</em> template by
                  TemplateMo website.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4">
              <div className="right-icons">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-behance"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="header-area header-sticky">
        <div className="container">
          <div className="row" style={{ width: "fit-contnt", margin: "auto" }}>
            <div className="col-12">
              <nav className="main-nav">
                <a href="index.html" className="logo">
                  Edu Meeting
                </a>

                <ul className="nav">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="meetings.html" className="active">
                      Meetings
                    </a>
                  </li>
                  <li>
                    <a href="index.html">Apply Now</a>
                  </li>
                  <li className="has-sub">
                    <a  >Pages</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="meetings.html">Upcoming Meetings</a>
                      </li>
                      <li>
                        <a href="meeting-details.html">Meeting Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="index.html">Courses</a>
                  </li>
                  <li>
                    <a href="index.html">Contact Us</a>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <section className="heading-page header-text" id="top">
        <div className="container">
          <div className="row" style={{ width: "fit-contnt", margin: "auto" }}>
            <div className="col-lg-12">
              <h6>Here are our upcoming meetings</h6>
              <h2>Upcoming Meetings</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="meetings-page" id="meetings">
        <div className="container">
          <div className="row" style={{ width: "fit-contnt", margin: "auto" }}>
            <div className="col-lg-12">
              <div
                className="row"
                style={{ width: "fit-contnt", margin: "auto" }}
              >
                <div className="col-lg-12">
                  <div className="filters">
                    <ul>
                      <li data-filter="*" className="active">
                        All Meetings
                      </li>
                      <li data-filter=".soon">Soon</li>
                      <li data-filter=".imp">Important</li>
                      <li data-filter=".att">Attractive</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="row grid">
                    <div className="col-lg-4 templatemo-item-col all soon">
                      <div className="meeting-item">
                        <div className="thumb">
                          <div className="price">
                            <span>$14.00</span>
                          </div>
                          <a href="meeting-details.html">
                            <img src="assets/images/meeting-01.jpg" alt="" />
                          </a>
                        </div>
                        <div className="down-content">
                          <div className="date">
                            <h6>
                              Nov <span>12</span>
                            </h6>
                          </div>
                          <a href="meeting-details.html">
                            <h4>New Lecturers Meeting</h4>
                          </a>
                          <p>
                            Morbi in libero blandit lectus
                            <br />
                            cursus ullamcorper.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 templatemo-item-col all imp">
                      <div className="meeting-item">
                        <div className="thumb">
                          <div className="price">
                            <span>$22.00</span>
                          </div>
                          <a href="meeting-details.html">
                            <img src="assets/images/meeting-02.jpg" alt="" />
                          </a>
                        </div>
                        <div className="down-content">
                          <div className="date">
                            <h6>
                              Nov <span>14</span>
                            </h6>
                          </div>
                          <a href="meeting-details.html">
                            <h4>Online Teaching Techniques</h4>
                          </a>
                          <p>
                            Morbi in libero blandit lectus
                            <br />
                            cursus ullamcorper.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 templatemo-item-col all soon">
                      <div className="meeting-item">
                        <div className="thumb">
                          <div className="price">
                            <span>$24.00</span>
                          </div>
                          <a href="meeting-details.html">
                            <img src={meeting} alt="" />
                          </a>
                        </div>
                        <div className="down-content">
                          <div className="date">
                            <h6>
                              Nov <span>16</span>
                            </h6>
                          </div>
                          <a href="meeting-details.html">
                            <h4>Network Teaching Concept</h4>
                          </a>
                          <p>
                            Morbi in libero blandit lectus
                            <br />
                            cursus ullamcorper.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 templatemo-item-col all att">
                      <div className="meeting-item">
                        <div className="thumb">
                          <div className="price">
                            <span>$32.00</span>
                          </div>
                          <a href="meeting-details.html">
                            <img src="assets/images/meeting-04.jpg" alt="" />
                          </a>
                        </div>
                        <div className="down-content">
                          <div className="date">
                            <h6>
                              Nov <span>18</span>
                            </h6>
                          </div>
                          <a href="meeting-details.html">
                            <h4>Online Teaching Tools</h4>
                          </a>
                          <p>
                            Morbi in libero blandit lectus
                            <br />
                            cursus ullamcorper.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 templatemo-item-col all att">
                      <div className="meeting-item">
                        <div className="thumb">
                          <div className="price">
                            <span>$34.00</span>
                          </div>
                          <a href="meeting-details.html">
                            <img src="assets/images/meeting-02.jpg" alt="" />
                          </a>
                        </div>
                        <div className="down-content">
                          <div className="date">
                            <h6>
                              Nov <span>22</span>
                            </h6>
                          </div>
                          <a href="meeting-details.html">
                            <h4>New Teaching Techniques</h4>
                          </a>
                          <p>
                            Morbi in libero blandit lectus
                            <br />
                            cursus ullamcorper.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 templatemo-item-col all imp">
                      <div className="meeting-item">
                        <div className="thumb">
                          <div className="price">
                            <span>$45.00</span>
                          </div>
                          <a href="meeting-details.html">
                            <img src="assets/images/meeting-03.jpg" alt="" />
                          </a>
                        </div>
                        <div className="down-content">
                          <div className="date">
                            <h6>
                              Nov <span>24</span>
                            </h6>
                          </div>
                          <a href="meeting-details.html">
                            <h4>Technology Conference</h4>
                          </a>
                          <p>
                            TemplateMo is the best website
                            <br />
                            when it comes to Free CSS.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 templatemo-item-col all imp att">
                      <div className="meeting-item">
                        <div className="thumb">
                          <div className="price">
                            <span>$52.00</span>
                          </div>
                          <a href="meeting-details.html">
                            <img src="assets/images/meeting-01.jpg" alt="" />
                          </a>
                        </div>
                        <div className="down-content">
                          <div className="date">
                            <h6>
                              Nov <span>27</span>
                            </h6>
                          </div>
                          <a href="meeting-details.html">
                            <h4>Online Teaching Techniques</h4>
                          </a>
                          <p>
                            Morbi in libero blandit lectus
                            <br />
                            cursus ullamcorper.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 templatemo-item-col all soon imp">
                      <div className="meeting-item">
                        <div className="thumb">
                          <div className="price">
                            <span>$64.00</span>
                          </div>
                          <a href="meeting-details.html">
                            <img src="assets/images/meeting-02.jpg" alt="" />
                          </a>
                        </div>
                        <div className="down-content">
                          <div className="date">
                            <h6>
                              Nov <span>28</span>
                            </h6>
                          </div>
                          <a href="meeting-details.html">
                            <h4>Instant Lecture Design</h4>
                          </a>
                          <p>
                            Morbi in libero blandit lectus
                            <br />
                            cursus ullamcorper.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 templatemo-item-col all att soon">
                      <div className="meeting-item">
                        <div className="thumb">
                          <div className="price">
                            <span>$74.00</span>
                          </div>
                          <a href="meeting-details.html">
                            <img src="assets/images/meeting-03.jpg" alt="" />
                          </a>
                        </div>
                        <div className="down-content">
                          <div className="date">
                            <h6>
                              Nov <span>30</span>
                            </h6>
                          </div>
                          <a href="meeting-details.html">
                            <h4>Online Social Networking</h4>
                          </a>
                          <p>
                            Morbi in libero blandit lectus
                            <br />
                            cursus ullamcorper.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="pagination">
                    <ul>
                      <li>
                        <a href="#">1</a>
                      </li>
                      <li className="active">
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-angle-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutus;
