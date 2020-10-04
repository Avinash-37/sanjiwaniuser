import React, { Component } from "react";
// import axios from "axios";
import ShopOffPopup from './ShopOffPopup';
import ToastMessage from "./snackBarToast";

import strings from '../stringsoflanguages';

class TopBarHome extends Component {
  constructor(props){
    super(props);
    this.state = { 
      op_cl_message:"",
      shopOnOffpopup: false,
      showComponentON:false,
      showComponentOFF:false,
      toShopHome:false,
      shop_ON:true,
      shop_OFF:false
    }
  }

  toggleShopPopup() {
    this.setState({
      shopOnOffpopup: !this.state.shopOnOffpopup
    });
}


UNSAFE_componentWillMount(){
    //let currentComponent = this;
        // axios
        // .get(process.env.REACT_APP_PARTNERAPP_BACKEND + "shophome/status/"+localStorage.getItem('shopIdLocal'))
        //   .then(function(response) {
        //     console.log(response.data.payload);
        //     var status = response.data.payload.data[0].shopStatus;
        //     console.log(status);
        //     if (status === 'OFF') {
        //       currentComponent.setState({
        //         shop_OFF:false,
        //         shop_ON:true,
        //         showComponentOFF: !currentComponent.showComponentOFF,
        //         op_cl_message:strings.yourshopisclose
        //       })
        //       localStorage.setItem('shop_open_status',"CLOSE"); 
        //   }else if (status === 'ON') {
        //     currentComponent.setState({
        //       shop_OFF:true,
        //       shop_ON:false,
        //       op_cl_message:strings.yourshopisopen
        //     });
        //     localStorage.setItem('shop_open_status',"OPEN"); 
        // }else{
        //       console.log("Nothing to show");
        //     }
        //   })
        //   .catch(function(error) {
        //     console.log(error);
        //   });

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
           <div className="topBar">
                <div className="barName">Sanjiwani {this.state.op_cl_message}</div>
                {/* <div className="switch">
                    <input type="radio" className="switch-input" name="view" value="week" id="week" checked={this.state.shop_ON} onChange={this.toggleShopPopup.bind(this)}/>
                    <label htmlFor="week" className="switch-label switch-label-off" >{strings.shopOn}</label>
                    <input type="radio" className="switch-input" name="view" value="month" id="month" checked={this.state.shop_OFF} onChange={this.toggleShopPopup.bind(this)}/>
                    <label htmlFor="month" className="switch-label switch-label-on"  >{strings.shopOff}</label>
                    <span className="switch-selection"></span>
                </div> */}
                {this.state.showComponentON ? <ToastMessage toastMessage="Now Your Shop is Open"/> : null }
                {this.state.showComponentOFF ? <ToastMessage toastMessage="Now your Shop is Close"/> : null }
                {this.state.showComponent ? <ToastMessage toastMessage="Hi Good Morning !!!"/> : null }
                {this.state.shopOnOffpopup ?
                  <ShopOffPopup
                      text={strings.areyousurewantto}
                      shopON={this.shop_on.bind(this)}
                      shopOFF={this.shop_off.bind(this)}
                  />
              : null
              }

            </div>
    );}

    componentWillUnmount(){
      this.setState({
        op_cl_message:"",
      shopOnOffpopup: false,
      showComponentON:false,
      showComponentOFF:false,
      toShopHome:false,
      shop_ON:true,
      shop_OFF:false
      })
    }
}
export default TopBarHome;

            