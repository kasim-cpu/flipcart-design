import React, { Component, Fragment } from 'react';


class Figure extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {

        return (
            <Fragment>


                <div className="accessories">
                <div className="figure">
                    <img src="./products/product-3.png"></img>
                </div>
                <div className="product-price">
                    <h4>Colored Cup</h4>
                    <p>$6.95</p>
                </div>
                <div className="buy-carts">
                    <ul>
                        <li><button className="shopping-btn"><i class="fa fa-shopping-cart" aria-hidden="true"></i>Buy Now</button></li>
                        <li><button><i class="fa fa-heart-o" aria-hidden="true"></i>WISH IT</button></li>
                    </ul>
                </div>
                </div>



            </Fragment>
        );
    }
}

export default Figure;