import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom';
class SanjiwaniMallPLBar extends Component {
    constructor(props) {
        super(props);
        this.state={
         toProductList:false,
         showMenu: false,
        }
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    
    showMenu(event) {
      event.preventDefault();
      
      this.setState({ showMenu: true }, () => {
        document.addEventListener('click', this.closeMenu);
      });
    }
    
    closeMenu() {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    }

    sendProductIdtoProductList(value){
        localStorage.setItem("CategoryName",value);
          this.setState({
              toProductList: true,
            });
           
      }
 
      componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
      }
    
      componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
      }
      

    render() {
            if (this.state.toProductList === true) {
                return <Redirect to={{
                  pathname: '/product'
              }} />
            }
        return (
            <div className="topBarPL"><Link to={this.props.backUrl} >
                <div className="iconStarPLBackButton icon-angle-left-arrow"></div></Link>
                    <div className="topBarPLName">{this.props.productTitle}</div>
                    <div className="topBarPLNotificationIcon">
                        {this.props.search.TRUE?<div className="dropdownDotMenu">
                        <span className="icon-menuDot space-4px" onClick={this.showMenu}></span>
                        {
                            this.state.showMenu
                                ? (
                                    <div className="dropdown-content">
                                    <p className="textCenter paddingAll4" onClick={event => this.props.search.sort("Vegetable")}>Vegetable</p>
                                    <p className="textCenter paddingAll4" onClick={event => this.props.search.sort("Fruits")}>Fruits</p>
                                    <p className="textCenter paddingAll4" onClick={event => this.props.search.sort("Hotel")}>Hotel</p>
                                    <p className="textCenter paddingAll4" onClick={event => this.props.search.sort("Diwali")}>Diwali</p>
                                    </div>
                                )
                                : (
                                null
                                )
                            }
                            
                        
                        </div>:null}
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