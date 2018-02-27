import React from "react";
import { Link } from "react-router-dom";

import "../css/homepage.css";

export function HomePage(props) {
  return (
    <div className="homePageContainer">
      <Link to="/search">
        <section className="price" id="price">
          <div className="container text-center">
            <h2>Find out the price for your item</h2>
          </div>
        </section>
      </Link>

      <div
        className="block bg-primary block-pd-lg block-bg-overlay text-center"
        data-bg-img="img/parallax-bg.jpg"
        data-settings="{&quot;stellar-background-ratio&quot;: 0.6}"
        data-toggle="parallax-bg"
      >
        <h2>The Popular Stores</h2>
      </div>

      <section className="features" id="features">
        <div className="container">
          <h1> Best Reviewers Section </h1>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <div className="container text-center">
          <h2>Portfolio</h2>

          <p>
            Voluptua scripserit per ad, laudem viderer sit ex. Ex alia corrumpit
            voluptatibus usu, sed unum convenire id. Ut cum nisl moderatius, Per
            nihil dicant commodo an.
          </p>
        </div>

        <div className="portfolio-grid">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="card card-block">
                <a href="#">
                  <img alt="" src="img/porf-1.jpg" />
                  <div className="portfolio-over">
                    <div>
                      <h3 className="card-title">The Dude Rockin'</h3>

                      <p className="card-text">
                        Lorem ipsum dolor sit amet, eu sed suas eruditi
                        honestatis.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="card card-block">
                <a href="#">
                  <img alt="" src="img/porf-2.jpg" />
                  <div className="portfolio-over">
                    <div>
                      <h3 className="card-title">The Dude Rockin'</h3>

                      <p className="card-text">
                        Lorem ipsum dolor sit amet, eu sed suas eruditi
                        honestatis.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="card card-block">
                <a href="#">
                  <img alt="" src="img/porf-3.jpg" />
                  <div className="portfolio-over">
                    <div>
                      <h3 className="card-title">The Dude Rockin'</h3>

                      <p className="card-text">
                        Lorem ipsum dolor sit amet, eu sed suas eruditi
                        honestatis.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="card card-block">
                <a href="#">
                  <img alt="" src="img/porf-4.jpg" />
                  <div className="portfolio-over">
                    <div>
                      <h3 className="card-title">The Dude Rockin'</h3>

                      <p className="card-text">
                        Lorem ipsum dolor sit amet, eu sed suas eruditi
                        honestatis.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="card card-block">
                <a href="#">
                  <img alt="" src="img/porf-5.jpg" />
                  <div className="portfolio-over">
                    <div>
                      <h3 className="card-title">The Dude Rockin'</h3>

                      <p className="card-text">
                        Lorem ipsum dolor sit amet, eu sed suas eruditi
                        honestatis.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="card card-block">
                <a href="#">
                  <img alt="" src="img/porf-6.jpg" />
                  <div className="portfolio-over">
                    <div>
                      <h3 className="card-title">The Dude Rockin'</h3>

                      <p className="card-text">
                        Lorem ipsum dolor sit amet, eu sed suas eruditi
                        honestatis.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="card card-block">
                <a href="#">
                  <img alt="" src="img/porf-7.jpg" />
                  <div className="portfolio-over">
                    <div>
                      <h3 className="card-title">The Dude Rockin'</h3>

                      <p className="card-text">
                        Lorem ipsum dolor sit amet, eu sed suas eruditi
                        honestatis.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="card card-block">
                <a href="#">
                  <img alt="" src="img/porf-8.jpg" />
                  <div className="portfolio-over">
                    <div>
                      <h3 className="card-title">The Dude Rockin'</h3>

                      <p className="card-text">
                        Lorem ipsum dolor sit amet, eu sed suas eruditi
                        honestatis.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team" id="team">
        <div className="container">
          <h2 className="text-center">Meet our team</h2>

          <div className="row">
            <div className="col-sm-3 col-xs-6">
              <div className="card card-block">
                <a href="#">
                  <img alt="" className="team-img" src="img/team-1.jpg" />
                  <div className="card-title-wrap">
                    <span className="card-title">Sergio Fez</span>{" "}
                    <span className="card-text">Art Director</span>
                  </div>

                  <div className="team-over">
                    <h4 className="hidden-md-down">Connect with me</h4>

                    <nav className="social-nav">
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-linkedin" />
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-envelope" />
                      </a>
                    </nav>

                    <p>
                      Lorem ipsum dolor sit amet, eu sed suas eruditi
                      honestatis.
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-sm-3 col-xs-6">
              <div className="card card-block">
                <a href="#">
                  <img alt="" className="team-img" src="img/team-2.jpg" />
                  <div className="card-title-wrap">
                    <span className="card-title">Sergio Fez</span>{" "}
                    <span className="card-text">Art Director</span>
                  </div>

                  <div className="team-over">
                    <h4 className="hidden-md-down">Connect with me</h4>

                    <nav className="social-nav">
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-linkedin" />
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-envelope" />
                      </a>
                    </nav>

                    <p>
                      Lorem ipsum dolor sit amet, eu sed suas eruditi
                      honestatis.
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-sm-3 col-xs-6">
              <div className="card card-block">
                <a href="#">
                  <img alt="" className="team-img" src="img/team-3.jpg" />
                  <div className="card-title-wrap">
                    <span className="card-title">Sergio Fez</span>{" "}
                    <span className="card-text">Art Director</span>
                  </div>

                  <div className="team-over">
                    <h4 className="hidden-md-down">Connect with me</h4>

                    <nav className="social-nav">
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-linkedin" />
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-envelope" />
                      </a>
                    </nav>

                    <p>
                      Lorem ipsum dolor sit amet, eu sed suas eruditi
                      honestatis.
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-sm-3 col-xs-6">
              <div className="card card-block">
                <a href="#">
                  <img alt="" className="team-img" src="img/team-4.jpg" />
                  <div className="card-title-wrap">
                    <span className="card-title">Sergio Fez</span>{" "}
                    <span className="card-text">Art Director</span>
                  </div>

                  <div className="team-over">
                    <h4 className="hidden-md-down">Connect with me</h4>

                    <nav className="social-nav">
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-linkedin" />
                      </a>{" "}
                      <a href="#">
                        <i className="fa fa-envelope" />
                      </a>
                    </nav>

                    <p>
                      Lorem ipsum dolor sit amet, eu sed suas eruditi
                      honestatis.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="section-title">Contact Us</h2>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-4">
              <div className="info">
                <div>
                  <i className="fa fa-map-marker" />
                  <p>
                    A108 Adam Street<br />New York, NY 535022
                  </p>
                </div>

                <div>
                  <i className="fa fa-envelope" />
                  <p>info@example.com</p>
                </div>

                <div>
                  <i className="fa fa-phone" />
                  <p>+1 5589 55488 55s</p>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-8">
              <div className="form">
                <div id="sendmessage">
                  Your message has been sent. Thank you!
                </div>
                <div id="errormessage" />
                <form
                  action=""
                  method="post"
                  role="form"
                  className="contactForm"
                >
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                    />
                    <div className="validation" />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                    />
                    <div className="validation" />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 8 chars of subject"
                    />
                    <div className="validation" />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      data-rule="required"
                      data-msg="Please write something for us"
                      placeholder="Message"
                    />
                    <div className="validation" />
                  </div>
                  <div className="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-xs-12 text-lg-left text-center">
                <p className="copyright-text">© Team Ayoda</p>
                <div className="credits">By Team Ayoda, with love.</div>
              </div>

              <div className="col-lg-6 col-xs-12 text-lg-right text-center">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="index.html">Home</a>
                  </li>

                  <li className="list-inline-item">
                    <a href="#about">About Us</a>
                  </li>

                  <li className="list-inline-item">
                    <a href="#features">Features</a>
                  </li>

                  <li className="list-inline-item">
                    <a href="#portfolio">Portfolio</a>
                  </li>

                  <li className="list-inline-item">
                    <a href="#team">Team</a>
                  </li>

                  <li className="list-inline-item">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <a className="scrolltop" href="#">
        <span className="fa fa-angle-up" />
      </a>
    </div>
  );
}
