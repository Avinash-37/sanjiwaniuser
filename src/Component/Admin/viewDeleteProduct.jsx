import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import ProductBar from "../../Component/sanjiwaniMallPLBar";
import axios from "axios";
import EmptyProduct from "./emptyProduct";
import TransparentLoader from "../../Component/transparentLoader";
import NoProductImage from "../../assets/images/images.jpg";


class ViewDeleteProduct extends Component {
    constructor(props) {
        super(props);
        this.state={
            cartList:[],
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
                            console.log("Shop product Information"+response.data.payload[i]);
                        }

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
        var Per=0;
        const CartListAll = this.state.cartList.map((item,index)=>
                <div className="divider-5 singleProduct" key={index}>
                    <div className="rowInner marginTop2">
                        <div className="productData">
                            <div className="productName">{item.product_name}</div>
                                <div className="cartPrice">
                                    <span className="price"><span className="icon-rupees fontSize14"> </span> {item.net_offer_price}</span>
                                    <span className="actualPrice"> {item.net_actual_price}</span>
                                    <span className="offerPercentage colorGreen"> {Math.round(Per)}% off</span>
                                </div>
                            </div>
                        <div className="rowData productImage">
                            <div className="cartproductImage">
                                <img src={process.env.REACT_APP_APECTOMALL_IMAGES_URL + item.front_view} onError={(e)=>{e.target.onerror = null; e.target.src=NoProductImage}} alt="product_image" />
                            </div>
                            <div className="cartQuantity">Qty {item.quantity}</div>
                        </div>
                    </div>
                    <div className="hrLine divider-10"></div>
                    <div className="rowInner">
                        <div className="productUpdateButton backgroundGreen colorWhite" onClick={()=>this.RemoveFromCart(item.product_id,item.total_price)}><span className="icon-removeCart right-space-10 colorWhite"> </span> Remove</div>
                    </div>
                </div>

            );    
            
        return (
            <div className="cart">
                <ProductBar productTitle={"Delete Product"}backUrl={"product-add"}search={false}like={false}cart={false}/> 
                <div className="divider-45"></div>
                {this.state.transparentLoader?<TransparentLoader/>:this.state.emptyCartError?<EmptyProduct/>:<>{CartListAll}</>}

            </div>
        );
    }

RemoveFromCart(ProductId,ProductTotalPrice){
    this.setState({
        transparentLoader:true,
    })
        let currentComponent = this;
        var payload ={
            productId:ProductId,
            shopId:localStorage.getItem("shopIdLocal"),
        }
        axios
        .post(process.env.REACT_APP_APECTOMALL_BACKEND_IP +"usercart/delete",payload)
        .then(function(response) { 
          console.log("product list"+response.data.payload);
          if(response.data.error !== null){
            console.log("Null Error");
            if(response.data.error.errorName === "NO_PRODUCT_TO_DELETE"){
                currentComponent.setState({
                  transparentLoader:false,

                });
                console.log("No product available");          
              }
            }else if (response.data.status.isSuccess === true) {
               currentComponent.getCartList();
               currentComponent.setState({
                transparentLoader:false,
              });
                  console.log("Shop product deleted");
              }else{
                currentComponent.setState({
                  transparentLoader:false,
                  totalPrice:-ProductTotalPrice,
                });
                console.log("To Many Error In Shop product");
            } 
        })
        .catch(function(error) {
          console.log(error);
        });        
    }

    
}

export default ViewDeleteProduct;