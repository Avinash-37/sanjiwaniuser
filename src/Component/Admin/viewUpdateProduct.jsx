import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import ProductBar from "../../Component/sanjiwaniMallPLBar";
import axios from "axios";
import EmptyProduct from "./emptyProduct";
import TransparentLoader from "../../Component/transparentLoader";
import NoProductImage from "../../assets/images/images.jpg";


class ViewUpdateProduct extends Component {
    constructor(props) {
        super(props);
        this.state={
            cartList:[],
            isEmpty:true,
            loadError:false,
            emptyCartError:false,
            transparentLoader:true,
        }
    }
    UNSAFE_componentWillMount(){
        this.getCartList();
    }

    getCartList(){
        let currentComponent = this;
        var payload ={
            shopId:localStorage.getItem("shopIdLocal"),
        }
        axios
        .post(process.env.REACT_APP_APECTOMALL_BACKEND_IP +"usercart/get",payload)
        .then(function(response) { 
          console.log("product list"+response.data.payload);
          if(response.data.error !== null){
            console.log("Null Error");
            if(response.data.error.errorName === "NO_PRODUCT_IN_CART"){
                currentComponent.setState({
                  loadError:false,
                  emptyCartError:true,
                  loaded:false,
                  transparentLoader:false,

                });
                console.log("No product available");          
              }
            }else if (response.data.status.isSuccess === true) {
                const count=response.data.payload.length;
                    if(count <= 0){
                        currentComponent.setState({
                            emptyCartError:true,
                            transparentLoader:false,
                        });
                    }else{
                        let CartList=[];
                        for (let i=0; i<count; i++) {
                            CartList.push(response.data.payload[i]);
                        }
                            localStorage.setItem("cartProductInfoArray", JSON.stringify(CartList));
                            currentComponent.setState({
                                cartList:CartList,
                                emptyCartError:false,
                                transparentLoader:false,
                            });
                    }
                  console.log("Shop product Information");
              }else{
                currentComponent.setState({
                  loaded:false,
                  transparentLoader:false,
                });
                console.log("To Many Error In Shop product");
            } 
        })
        .catch(function(error) {
          console.log(error);
        });        
    }

    render() {
        var OfferPrice=0;
        var Increase=0;
        var Per=0;
        const CartListAll = this.state.cartList.map((item,index)=>
                <div className="divider-5 singleProduct" key={index}>
                    <div className="rowInner marginTop2">
                        <div className="productData">
                            <div className="productName">{item.product_name}</div>
                                <div className="cartPrice">
                                    <span className="price"><span className="icon-rupees fontSize14"> </span> {item.net_offer_price}</span>
                                    <span className="actualPrice"> {item.net_actual_price}</span>
                                    <span className="hide">{OfferPrice+=item.net_actual_price-item.net_offer_price}</span>
                                    <span className="hide">{Increase =item.net_actual_price-item.net_offer_price}</span>
                                    <span className="hide">{Per =Increase/item.net_actual_price*100}</span>
                                    <span className="offerPercentage colorGreen"> {Math.round(Per)}% off</span>
                                </div>
                            </div>
                        <div className="rowData productImage">
                            <div className="cartproductImage">
                                <img src={process.env.REACT_APP_APECTOMALL_IMAGES_URL + item.front_view} onError={(e)=>{e.target.onerror = null; e.target.src=NoProductImage}} alt="product_image" />
                            </div>
                            <div className="cartQuantity">Qty - {item.quantity}</div>
                        </div>
                    </div>
                    <div className="hrLine divider-10"></div>
                    <div className="rowInner">
                        <div className="productUpdateButton backgroundGreen colorWhite" onClick={()=>this.UpdateProduct(item.product_id)}><span className="icon-pencil-edit right-space-10"> </span> Update</div>
                    </div>
                </div>

            );    
            
        return (
            <div className="cart">
                <ProductBar productTitle={"View Add Update Product"}backUrl={"product-add"}search={false}like={false}cart={false}/> 
                <div className="divider-45"></div>
                {this.state.transparentLoader?<TransparentLoader/>:this.state.emptyCartError?<EmptyProduct/>:<>{CartListAll}
                <div className="divider-120"></div>
                </>}

            </div>
        );
    }


UpdateProduct(ProductId){
         console.log("product id",ProductId);  
    }
    
}

export default ViewUpdateProduct;