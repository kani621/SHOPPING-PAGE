import React from "react";
import "./Home.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Home() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div>
      <div className="topnav">
        <a className="active" href="home.jsx">
          Home
        </a>
        <Link to="/product">Product</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/signin">Signin</Link>

       

        

        <div className="search-container">
          <form action="/action_page.php">
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>

        <div className="cart">
          <a href="#cart">
            <i className="fa fa-shopping-cart"></i> Cart ({cartCount})
          </a>
        </div>
      </div>

        <h2>Bestsellers on Fashion</h2>
        <div
          id="myCarousel"
          className="carousel slide"
          data-ride="carousel"
          data-interval="2000"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
          </ol>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://img.freepik.com/free-psd/landing-page-online-fashion-sale_23-2148585401.jpg?semt=ais_hybrid"
                alt="Slide 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://colorlib.com/wp/wp-content/uploads/sites/2/free-fashion-website-templates.jpg"
                alt="Slide 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn.motocms.com/src/868x580/58800/58817-original-1200.jpg"
                alt="Slide 3"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://s.tmimgcdn.com/scr/800x500/255900/shopied-bootstrap-ecommerce-website-template_255978-original.png"
                alt="Slide 4"
              />
            </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#myCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#myCarousel"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      

      <img
        src="https://templatesjungle.com/wp-content/uploads/2022/02/10.-Silon-One-Page-E-Commerce-HTML-Template-1024x768.jpg"
        className="img-fluid"
        alt="Description of the image"
        style={{ marginLeft: "11rem" }}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://s.alicdn.com/@sc04/kf/Hd656a3bd14504fcd9f46bd6383406a60l.jpg_300x300.jpg"
                className="card-img-top"
                alt="Product 1"
              />
              <div className="card-body">
                <h5 className="card-title">Tavas</h5>
                <p className="card-text">
                  Wholesale Zhejiang Apparels That Give Any Outfit A Confident
                  Look
                </p>
                <p className="card-text">
                  <strong>₹999 Free delivery</strong>
                </p>

                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>

                <button className="btn btn-primary" onClick={addToCart}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/ac558873-aafe-4457-b9db-be09c84479dd.__CR0,0,1080,1080_PT0_SX300_V1___.jpg"
                className="card-img-top"
                alt="Product 2"
              />
              <div className="card-body">
                <h5 className="card-title">M Fashion</h5>
                <p className="card-text">
                  Buy La Zoire Kniitted Dress Grey Meiange at low price{" "}
                </p>
                <p className="card-text">
                  <strong>₹1290 Flat 50% OFF</strong>
                </p>

                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>

                <button className="btn btn-primary" onClick={addToCart}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                src="https://5.imimg.com/data5/JD/CO/MY-46513884/indo-western-dresses.png"
                className="card-img-top"
                alt="Product 3"
              />
              <div className="card-body">
                <h5 className="card-title">Yashika</h5>
                <p className="card-text">
                  Pinf Fashion ,Indo Western Dress ,Indo Western Suits
                </p>
                <p className="card-text">
                  <strong>₹3890 Ony Few Left</strong>
                </p>

                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>

                <button className="btn btn-primary" onClick={addToCart}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/4a2413e9-916c-433d-a130-b363d970774d.__CR0,253,1027,1027_PT0_SX300_V1___.jpg"
                className="card-img-top"
                alt="Product 1"
              />
              <div className="card-body">
                <h5 className="card-title">G Mour</h5>
                <p className="card-text">
                  Silk Saree Pure Golden Zari With Blouse Piece,Indian
                  Traditional Outfit
                </p>
                <p className="card-text">
                  <strong>₹3670 36% OFF</strong>
                </p>

                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>

                <button className="btn btn-primary" onClick={addToCart}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                src="https://www.shopsy.co.in/wp-content/uploads/2024/04/Shopsy-Women-High-Low-Round-Neck-Light-Violet-Dress-1-300x300.webp"
                className="card-img-top"
                alt="Product 2"
              />
              <div className="card-body">
                <h5 className="card-title">Styleveda</h5>
                <p className="card-text">
                  Elegant Light Violet High-Low Dress That Give Perfect look{" "}
                </p>
                <p className="card-text">
                  <strong>₹899 Lowest Price Since Launch</strong>
                </p>

                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>

                <button className="btn btn-primary" onClick={addToCart}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                src="https://res.cloudinary.com/wifdc/f_auto/bimg/articles/christian-bride-accompanied-by-bridesmaid.jpg"
                className="card-img-top"
                alt="Product 3"
              />
              <div className="card-body">
                <h5 className="card-title">Thira</h5>
                <p className="card-text">
                  White Flowy One Shoulder Tule Wedding Reception Gown Dress
                </p>
                <p className="card-text">
                  <strong>₹799 min 40% OFF</strong>
                </p>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>

                <button className="btn btn-primary" onClick={addToCart}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        src="https://s3-alpha.figma.com/hub/file/4639978252/4928b47a-1e07-4a5d-9600-eace71707f96-cover.png"
        className="img-fluid"
        alt="Description of the image"
        style={{ width: "830px", height: "430px", marginLeft: "28rem" }}
      />

      <div
        className="card"
        style={{ width: "18rem", marginLeft: "8rem", top: "-410px" }}
      >
        <img
          src="https://t3.ftcdn.net/jpg/06/66/06/88/360_F_666068883_hTLGkpclffWR9UukTB5UPZNfcmDusAUy.jpg"
          style={{ width: "268px", height: "280px" }}
        />
        <div className="card-body">
          <h2 className="card-text">From ₹99</h2>
          <h4 className="card-text">Min 50 % OFF</h4>
        </div>
      </div>
      <Footer/>
    </div>
    
  );
}

export default Home;
