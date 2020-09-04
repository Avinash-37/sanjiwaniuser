import React, { Component } from 'react';
import AdvertizeBanner from "./sanjiwaniMallAdvertizeBanner";
// import AllCategory from "./sanjiwaniMallAllCategories";
import BottomMenu from './bottomMenu';
// import InnerAdvertizeBanner from "./sanjiwaniMallInnerAdvertizeBanner";
import BestDeal from "./sanjiwaniMallBestDeals";
import Announcement from "./deliveryAnnouncement";
import ApectoMallCurrentOrderView from './sanjiwaniMallCurrentOrderView';
class SanjiwaniMallHome extends Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    
    UNSAFE_componentWillMount(){
        localStorage.setItem("activeMenu","Home");
    }
    render() {
        return (
            <>
               <AdvertizeBanner/>
               {/* <div className="divider-20"></div>
               <AllCategory/>  */}
               <div className="divider-10"></div>
               <Announcement/>
               {/* <div className="divider-10"></div>
                <InnerAdvertizeBanner/> */}
               <div className="divider-10"></div>
                <BestDeal/>
                {localStorage.getItem("mallBooking")==="SCHEDULED"?<ApectoMallCurrentOrderView/>:null}
                <div className="divider-60"></div>
                <BottomMenu />
            </>
        );
    }
}

export default SanjiwaniMallHome;