import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class SanjiwaniMallPLBar extends Component {
    constructor(props) {
        super(props);
        this.state={
        }
    }
    render() {
        
        return (
            <div className="topBarPL"><Link to={this.props.backUrl} ><div className="iconStarPLBackButton icon-angle-left-arrow"></div></Link>
                    <div className="topBarPLName">{this.props.productTitle}</div>
                    <div className="topBarPLNotificationIcon">
                        {this.props.search?<span className="flaticon-search-2 space-4px"></span>:null}
                        {this.props.like?<Link to="/like-product"><span className="flaticon-like space-4px"></span></Link>:null}
                        {this.props.cart?<Link to="/cart"><span className="flaticon-cart space-4px">
                        <div className=" notify-badge" data-badge={localStorage.getItem("cartTotalCount")}></div>
                        </span></Link>:null}
                    </div>
                </div>
        );
    }

}

export default SanjiwaniMallPLBar;