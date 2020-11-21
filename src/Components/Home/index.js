import React, { Component, Fragment } from 'react';

import './index.scss';
import Figure from './../../SharedComponents/Category';

class Home extends Component {
    constructor(props) {

        super(props);

    }

    componentDidMount() {

        const rightBtn = document.querySelector('#right-button');
        const leftBtn = document.querySelector('#left-button');

        rightBtn.addEventListener("click", function (event) {
            const conent = document.querySelector('#slider-content');
            conent.scrollLeft += 300;
            event.preventDefault();
        });
        leftBtn.addEventListener("click", function (event) {
            const conent = document.querySelector('#slider-content');
            conent.scrollLeft -= 300;
            event.preventDefault();
        });

        var dropdown = document.getElementsByClassName("dropdown-btn");
        var i;

        for (i = 0; i < dropdown.length; i++) {
            dropdown[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var dropdownContent = this.nextElementSibling;
                if (dropdownContent.style.display === "block") {
                    dropdownContent.style.display = "none";
                } else {
                    dropdownContent.style.display = "block";
                }
            });
        }
    }

    render() {

        return (
            <Fragment>
                <div className="page-wrapper">
                    <header>
                        <div className="header-container">
                            <div className="logo">
                                <img src="/logo/logo.png"></img>
                            </div>

                            <div className="nav-bar">
                                <ul>
                                    <li><button>Home</button></li>
                                    <li><button>About</button></li>
                                    <li><button>products</button></li>
                                    <li><button>Friends</button></li>
                                    <li><button>Offer</button></li>
                                    <li><button>Contacts</button></li>


                                    <div className="search-icon">
                                        <i class="fa fa-search" aria-hidden="true"></i>
                                    </div>
                                    <button className="button">
                                        LOGIN
                                    </button>
                                </ul>
                            </div>
                        </div>
                    </header>

                    <div className="section-class">
                        <div className="shuffle">
                            <img src="/logo/kasim.png"></img>
                        </div>
                    </div>

                    <div className="main-container">
                        <div className="product-component">
                            <div className="cards-left">
                                <div className="cart-type">
                                    <div className="sidenav">
                                        <a href="#Gifts">Gifts</a>
                                        <a href="#Stationary">Stationary</a>
                                        <button className="dropdown-btn">Accessories</button>
                                        <div className="dropdown-container">
                                            <a href="#">Desk Suplies</a>
                                        </div>
                                        <button className="dropdown-btn">Kitchen</button>
                                        <div className="dropdown-container">
                                            <a href="#">Cups</a>
                                            <a href="#">supplies</a>
                                            <a href="#">food keepers</a>
                                            <a href="#">plates</a>
                                            <a href="#">Decorations</a>
                                        </div>

                                        {/* <div className="dropdown">
                                                <button onclick={() => this.myFunction()} class="dropbtn">Accessories</button>

                                                <div id="mydropdown" class="dropdown-content">
                                                    <a>Desk Suplies</a>
                                                </div>
                                            </div> */}


                                    </div>
                                </div>

                                <div className="cart-cell">
                                    <i class="fa fa-truck" aria-hidden="true"></i>
                                    <h3>Free shipping</h3>
                                    <p>if you buy 5 products and more</p>

                                    <i class="fa fa-shopping-cart" aria-hidden="true"></i><h3>Retrieval products</h3>
                                    <p>you can retrieval the product through 15 days</p>

                                    <i class="fa fa-bullseye" aria-hidden="true"></i>
                                    <h3>Quality assurance</h3>
                                    <p>sell the original products that you will like to buy</p>
                                </div>

                                <div className="offer-list">
                                    <h1>Offer</h1>
                                    <h2>Best</h2>
                                    <img src="/products/best.png"></img>
                                </div>
                                <div class="great-trends">
                                    <h2>Great</h2>
                                    <p>4 Freinds</p>
                                    <img src="./products/product-2.png"></img>
                                </div>

                            </div>

                            <div className="cards-right">
                                <div className="nav-bar">
                                    <ul>
                                        <li><button>Newest</button></li>
                                        <li><button className="active">Popular</button></li>
                                        <li><button>Offers</button></li>
                                        <li><button className="pause">sort by price<i class="fa fa-caret-down" aria-hidden="true"></i></button></li>
                                    </ul>

                                </div>

                                <div className="colored-cup">
                                    <Figure />
                                    <Figure />
                                    <Figure />
                                    <Figure />
                                    <Figure />
                                    <Figure />
                                    <Figure />
                                    <Figure />
                                    <Figure />
                                    <Figure />
                                    <Figure />
                                    <Figure />


                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="section-cart">
                        <div className="variable-list">
                            <div className="fonts">
                                <h2>special offers</h2>
                                <p>what you need, dream, want and more in creative bunny</p>
                                <div className="button-class">
                                    <button>VIEW OFFERS</button>
                                </div>
                            </div>
                            <div className="poster" id="slider-content">
                                <button className="slider-btn left" id="left-button"><i className="fa fa-angle-left" aria-hidden="true"></i></button>
                                <button className="slider-btn right" id="right-button"><i className="fa fa-angle-right" aria-hidden="true"></i></button>
                                <div className="slider">
                                    <div className="redux">
                                        <img src="./products/product-1.png"></img>
                                    </div>
                                    <div className="toogle-cost">
                                        <h4>Colored Cup</h4>
                                        <p>$6.95</p>
                                        <div className="list-cards">
                                            <ul>
                                                <li><button><i class="fa fa-shopping-cart" aria-hidden="true"></i>Buy Now</button></li>
                                                <li><button><i class="fa fa-heart-o" aria-hidden="true"></i>WISH IT</button></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="slider">
                                    <div className="redux">
                                        <img src="./products/product-1.png"></img>
                                    </div>
                                    <div className="toogle-cost">
                                        <h4>Colored Cup</h4>
                                        <p>$6.95</p>
                                        <div className="list-cards">
                                            <ul>
                                                <li><button><i class="fa fa-shopping-cart" aria-hidden="true"></i>Buy Now</button></li>
                                                <li><button><i class="fa fa-heart-o" aria-hidden="true"></i>WISH IT</button></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="slider">
                                    <div className="redux">
                                        <img src="./products/product-1.png"></img>
                                    </div>
                                    <div className="toogle-cost">
                                        <h4>Colored Cup</h4>
                                        <p>$6.95</p>
                                        <div className="list-cards">
                                            <ul>
                                                <li><button><i class="fa fa-shopping-cart" aria-hidden="true"></i>Buy Now</button></li>
                                                <li><button><i class="fa fa-heart-o" aria-hidden="true"></i>WISH IT</button></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="slider">
                                    <div className="redux">
                                        <img src="./products/product-1.png"></img>
                                    </div>
                                    <div className="toogle-cost">
                                        <h4>Colored Cup</h4>
                                        <p>$6.95</p>
                                        <div className="list-cards">
                                            <ul>
                                                <li><button><i class="fa fa-shopping-cart" aria-hidden="true"></i>Buy Now</button></li>
                                                <li><button><i class="fa fa-heart-o" aria-hidden="true"></i>WISH IT</button></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="slider">
                                    <div className="redux">
                                        <img src="./products/product-1.png"></img>
                                    </div>
                                    <div className="toogle-cost">
                                        <h4>Colored Cup</h4>
                                        <p>$6.95</p>
                                        <div className="list-cards">
                                            <ul>
                                                <li><button><i class="fa fa-shopping-cart" aria-hidden="true"></i>Buy Now</button></li>
                                                <li><button><i class="fa fa-heart-o" aria-hidden="true"></i>WISH IT</button></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="slider">
                                    <div className="redux">
                                        <img src="./products/product-1.png"></img>
                                    </div>
                                    <div className="toogle-cost">
                                        <h4>Colored Cup</h4>
                                        <p>$6.95</p>
                                        <div className="list-cards">
                                            <ul>
                                                <li><button><i class="fa fa-shopping-cart" aria-hidden="true"></i>Buy Now</button></li>
                                                <li><button><i class="fa fa-heart-o" aria-hidden="true"></i>WISH IT</button></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="slider">
                                    <div className="redux">
                                        <img src="./products/product-1.png"></img>
                                    </div>
                                    <div className="toogle-cost">
                                        <h4>Colored Cup</h4>
                                        <p>$6.95</p>
                                        <div className="list-cards">
                                            <ul>
                                                <li><button><i class="fa fa-shopping-cart" aria-hidden="true"></i>Buy Now</button></li>
                                                <li><button><i class="fa fa-heart-o" aria-hidden="true"></i>WISH IT</button></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="slider">
                                    <div className="redux">
                                        <img src="./products/product-1.png"></img>
                                    </div>
                                    <div className="toogle-cost">
                                        <h4>Colored Cup</h4>
                                        <p>$6.95</p>
                                        <div className="list-cards">
                                            <ul>
                                                <li><button><i class="fa fa-shopping-cart" aria-hidden="true"></i>Buy Now</button></li>
                                                <li><button><i class="fa fa-heart-o" aria-hidden="true"></i>WISH IT</button></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="slider">
                                    <div className="redux">
                                        <img src="./products/product-1.png"></img>
                                    </div>
                                    <div className="toogle-cost">
                                        <h4>Colored Cup</h4>
                                        <p>$6.95</p>
                                        <div className="list-cards">
                                            <ul>
                                                <li><button><i class="fa fa-shopping-cart" aria-hidden="true"></i>Buy Now</button></li>
                                                <li><button><i class="fa fa-heart-o" aria-hidden="true"></i>WISH IT</button></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="slider">
                                    <div className="redux">
                                        <img src="./products/product-1.png"></img>
                                    </div>
                                    <div className="toogle-cost">
                                        <h4>Colored Cup</h4>
                                        <p>$6.95</p>
                                        <div className="list-cards">
                                            <ul>
                                                <li><button><i class="fa fa-shopping-cart" aria-hidden="true"></i>Buy Now</button></li>
                                                <li><button><i class="fa fa-heart-o" aria-hidden="true"></i>WISH IT</button></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>


                    </div>

                    <div className="showcase">
                        <div className="node-modules">
                            <div className="images">
                                <img src="./products/thermal.png"></img>
                            </div>
                            <div className="word-space">
                                <h1>Spread love<i class="fa fa-heart-o" aria-hidden="true"></i></h1>
                                <p>Give your freind a special gift for happy and more than you expect.</p>
                                <choose>CHOOSE THE GIFT</choose>
                            </div>
                        </div>
                    </div>

                    <div className="footer">
                        <div className="container-class">

                            <div className="footer-container">
                                {/* column-1 */}
                                <div className="package">
                                    <div className="source-name">
                                        <img src="./logo/logo.png"></img>
                                    </div>

                                    <div className="icons">
                                        <h2>Creative Bunny</h2>
                                        <p>Creative Bunny is an online store based in Qatar that designs and creates innovative and memorable products...</p>
                                        <h4>READ MORE DETAILS</h4>
                                        <i class="fa fa-facebook" aria-hidden="true"></i>
                                        <i class="fa fa-twitter" aria-hidden="true"></i>
                                        <i class="fa fa-google" aria-hidden="true"></i>
                                        <img src="./logo/pinterest.png"></img>
                                        <h6><i class="fa fa-copyright" aria-hidden="true"></i>2016 creative bunny.com.All rights reserved.</h6>
                                    </div>
                                </div>


                                {/* //column-2 */}
                                <div className="contacts">
                                    <h3>Contact</h3>
                                    <p>Creative Bunny P.O.Box: xxx Doha-Qatar</p>
                                    <p>Mobile:01101577773 Email:info@creative.com</p>
                                    <h3>Carerrs</h3>
                                    <p>if you are interested to work in  a dynamic and fun environment, please</p>
                                    <p>email us at carerrs@creative-bunny.com</p>
                                </div>


                                <div className="items">
                                    <h3>Categories</h3>
                                    <div className="ordered-list">
                                        <nav>
                                            <ul>
                                                <li>Gifts</li>
                                                <li>Stationary</li>
                                                <li>Accessories</li>
                                                <li>Desk Supllies</li>
                                                <li>kitchen</li>
                                                <li>Babies</li>
                                            </ul>
                                        </nav>

                                        <nav>
                                            <ul>
                                                <li>Home</li>
                                                <li>Toys</li>
                                                <li>Vinyl toys</li>
                                                <li>Party supplies</li>
                                                <li>Greetings cards</li>
                                                <li>Special gifts</li>
                                            </ul>
                                        </nav>

                                        <nav>
                                            <ul>
                                                <li>Gifts</li>
                                                <li>Stationary</li>
                                                <li>Accessories</li>
                                                <li>Desk Supplies</li>
                                                <li>Kitchen</li>
                                                <li>Toys</li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </Fragment>
        );
    }
}

export default Home;
