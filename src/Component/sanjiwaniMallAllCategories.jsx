import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import ProductBar from "./sanjiwaniMallPLBar";
import "../assets/css/reset.css";
import "../assets/css/main.css";
import "../assets/css/fonts.css";
import "../assets/css/slider.css";

import Vegetable from "../assets/images/vegetable.jpg";
import Hotel from "../assets/images/hotel.webp";
import Diwali from "../assets/images/diwali.jpg";

import BottomMenu from './bottomMenu';
import SanjiwaniMallCurrentOrderView from './sanjiwaniMallCurrentOrderView';
// import OfferBanner from "./offerBanner";

class SanjiwaniMallAllCategories extends Component {
    constructor(props) {
        super(props);
        this.state={
            categoryName:false,
        }
    }
    
    UNSAFE_componentWillMount(){
        localStorage.setItem("activeMenu","Menu");
    }

    render() {
        if(this.state.categoryName === true){
            return <Redirect to = '/product' />
        }
        return (
            <>
               <ProductBar productTitle={"Menu"}backUrl={"mall"}search={false}like={false}cart={true}/> 
                <div className="rowDataPadding10 divider-50">
                    <span className="titleBigBold">Select Category</span>
                    <div className="hrLine"></div>
                </div>
                <div className="rowDataPadding10">
                        <div className="paddingTopBottom10">                            
                                    <div className="categoryImg" onClick={()=>this.SelectCategory("Electronics")}>
                                        <img src={Vegetable} alt=""></img> 
                                        <div className="categoryName">Vegetable</div>
                                    </div>
                                
                            </div>

                        <div className="paddingTopBottom10" >
                                    <div className="categoryImg" onClick={()=>this.SelectCategory("men")}>
                                        <img src={Hotel} alt=""></img>
                                        <div className="categoryName">Hotel</div> 
                                </div>
                        </div>
                        <div className="paddingTopBottom10">
                                <div className="categoryImg" onClick={()=>this.SelectCategory("women")}>
                                    <img src={Diwali} alt=""></img> 
                                    <div className="categoryName">Diwali</div>
                            </div>
                        
                    </div>

                </div>
            
                {localStorage.getItem("mallBooking")==="SCHEDULED"?<SanjiwaniMallCurrentOrderView/>:null}
                <div className="divider-60"></div>
                 <BottomMenu myCartCount={localStorage.getItem("cartTotalCount")} />
            </>
        );
    }
    SelectCategory(value){
        localStorage.setItem("CategoryName",value);
        this.setState({
            categoryName:true,
        });
    }
}

export default SanjiwaniMallAllCategories;