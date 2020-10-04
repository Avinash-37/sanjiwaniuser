import React from "react";

import DeleteImage from '../../assets/images/alert.png'; 
import strings from '../stringsoflanguages';


class ShopOffPopup extends React.Component {
  render() {
    if(localStorage.getItem("language") !== null){
      strings.setLanguage(localStorage.getItem("language"));
    }else if(localStorage.getItem("language") === null){
      strings.setLanguage("en");
    }
    return (
      <div className='popup'>
        <div className='popup_innerDelete'>
            <div className="warningRowImage">
             <img src={DeleteImage} height="30" width="30" alt="Delete User" />
            </div>
            <b className="colorBlack">{this.props.text}</b>
            <div className="rowInnerPopupDelete">
            <button  onClick={this.props.shopOFF} className="popMessageCloseShop">{strings.close}</button>
            <button  onClick={this.props.shopON} className="popMessageCancelCloseShop">{strings.open}</button>
            </div>
        </div>
      </div>
    );
  }
}

export default ShopOffPopup;