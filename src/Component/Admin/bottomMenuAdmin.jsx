import React from "react";
import {Link} from "react-router-dom";
import strings from '../stringsoflanguages';

class BottomMenu extends  React.Component{
  constructor(props) {
    super(props);
    this.state = {
        activeClass:"menu-active-class",
        bottomIconHome:"bottomIconActiveGreen icon-home",
        bottomIconMenu:"bottomIconActiveGreen icon-pencil-edit",
        bottomIconOffer:"bottomIconActiveGreen icon-service",
        bottomIconAccount:"bottomIconActiveGreen icon-profile",
    };
  }
  refreshPage(){ 
    window.location.reload(); 
  }

  render() {
    if(localStorage.getItem("language") !== null){
      strings.setLanguage(localStorage.getItem("language"));
    }else if(localStorage.getItem("language") === null){
      strings.setLanguage("en");
    }
    return (
        <div>
          <div className="divider-80"></div>
            <div className="bottomMenu noSelect">
              <div className="bottomMenuContent" >

                <div className="bottomMenuContentMenu icon-top-10" ><Link to="/admin">
                  <div className={localStorage.getItem("activeMenu") === "Home"? this.state.bottomIconHome:"bottomIcon icon-home"} ></div>Home</Link>
                  <div className={localStorage.getItem("activeMenu") === "Home"? this.state.activeClass:null}></div>
                  </div>

                <div className="bottomMenuContentMenu icon-top-10"><Link to="/product-add" >
                  <div className={localStorage.getItem("activeMenu") === "AddProduct"? this.state.bottomIconMenu:"bottomIcon icon-pencil-edit"}></div>Add product</Link>
                  <div className={localStorage.getItem("activeMenu") === "Menu"? this.state.activeClass:null}></div>
                  </div>

                <div className="bottomMenuContentMenu icon-top-10" ><Link to="/offer">
                  <div className={localStorage.getItem("activeMenu") === "Offer"? this.state.bottomIconOffer:"bottomIcon icon-service"} ></div>Offer</Link>
                  <div className={localStorage.getItem("activeMenu") === "Offer"? this.state.activeClass:null}></div>
                  </div>

                <div className="bottomMenuContentMenu icon-top-10"><Link to="/admin-profile" >
                  <div className={localStorage.getItem("activeMenu") === "Profile"? this.state.bottomIconAccount:"bottomIcon icon-profile"}></div>Account</Link>
                  <div className={localStorage.getItem("activeMenu") === "Profile"? this.state.activeClass:null}></div>
                  </div>
                </div>
            </div>
        </div>
    );
  }
 
}
export default BottomMenu;
