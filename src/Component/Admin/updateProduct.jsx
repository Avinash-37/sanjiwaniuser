import React, { Component } from "react"; 
import axios from "axios";
import {Redirect} from "react-router-dom";
// import {Link} from 'react-router-dom';
import Loader from '../loaderRoundedWithBoxMarginZero';
import ToManyError from "../ToManyErrorWithoutBottom";
import MessagePopup from "../messagePopup";

class UpdateProduct extends Component {

  constructor(props){
    super(props);;
    this.showToastMessageFun = this.showToastMessageFun.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.fileInput = React.createRef();
    this.state = {
        productName:"",
        productDescription:"",
        brand:"",
        category:"",
        subCategory:"",
        actualPrice:"",
        offerPrice:"",
        offerPercentage:"",
        isAvailable:"",
        quantity:"",
        image:"",
        productNameMsg: "",
        categoryMsg:"",
        productDescriptionMsg:"",
        brandMsg:"",
        subCategoryMsg:"",
        actualPriceMsg:"",
        offerPriceMsg:"",
        IsAvailableMsg:"",
        offerPercentageMsg: "",
        quantitymsg:"",
        imageMsga:"",
        showComponent: false,
        showComponentErrorMsg:false,
        showAllErrorMsg:"",
        loadError: false,
        loaded: false,
        }
  }
  UNSAFE_componentWillMount(){
    localStorage.setItem("activeMenu","AddProduct");
  } 

  showToastMessageFun() {
    this.setState({
      showComponent: !this.state.showComponent
    });
  }
  CloseMessagePopup() {
    this.setState({
      showComponentErrorMsg: !this.state.showComponentErrorMsg,
    });
  }

  
  //=====================================RENDER====================================================

  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to={{ pathname: "/validation-ahead"}}/>
    }else if (this.state.loadError === true) {
      return ( < ToManyError redirectURL = "/login" /> );
  }   
    return (
        <div>

          <div className="add-product-form divider-10">
            <div className="rowData">
                <div className="rowInner">
                <div className="input-icon icon-top-10">
                  <div className="icon login"><i className="requiredSymbol">*</i></div>
                </div>
                <div className="inputData">
                  <div className="form-group form-floating-label">
                      <input
                        id="productName"
                        name="productName"
                        type="text"
                        placeholder="Enter Product Name"
                        className="form-control input-border-bottom"
                        value={localStorage.getItem("reg_add_productName")}
                        onChange={event => this.handleProductName(event.target.value)}
                      />
                      <div className="error-div-left">{this.state.productNameMsg}</div>
                    </div>
                </div>
            </div>
        </div>
            <div className="rowData">
                <div className="rowInner">
                    <div className="input-icon icon-top-10">
                        <div className="icon icon-email"></div>
                    </div>
                    <div className="inputData">
                    <div className="form-group">
                            <input
                                id="productDescription"
                                name="productDescription"
                                type="text"
                                placeholder="Enter product Description"
                                className="form-control input-border-bottom"
                                value={localStorage.getItem("reg_productDescription")}
                                onChange={event => this.handleProductDescription(event.target.value)}
                            />
                            <div className="error-div-left">{this.state.productDescriptionMsg}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rowData">
                <div className="rowInner">
                    <div className="input-icon icon-top-10">
                        <div className="icon icon-mobile"><i className="requiredSymbol">*</i></div>
                    </div>
                    <div className="inputData">
                    <div className="form-group">
                          <input
                                id="brand"
                                name="brand"
                                type="text"
                                placeholder="Enter brand"
                                className="form-control input-border-bottom"
                                value={localStorage.getItem("reg_brand")}
                                onChange={event => this.handleBrand(event.target.value)}
                            />
                            <div className="error-div-left">{this.state.brandMsg}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rowData">
                <div className="rowInner">
                    <div className="input-icon icon-top-10">
                        <div className="icon icon-home"><i className="requiredSymbol">*</i></div>
                    </div>
                    <div className="inputData">
                    <div className="form-group">
                          <input
                                id="category"
                                name="category"
                                type="text"
                                placeholder="Enter category name"
                                className="form-control input-border-bottom"
                                value={localStorage.getItem("reg_category")}
                                onChange={event => this.handleCategory(event.target.value)}
                            />
                            <div className="error-div-left">{this.state.categoryMsg}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rowData">
                <div className="rowInner">
                    <div className="input-icon icon-top-10">
                        <div className="icon icon-service"><i className="requiredSymbol">*</i></div>
                    </div>
                    <div className="inputData textAlignLeft">
                    <div className="form-group">
                          <select className="mySelect" id="subCategory" 
                          onChange={event=>this.handleSubCategory(event.target.value)}>
                            <option value={localStorage.getItem("reg_subCategory") ===null?"":localStorage.getItem("reg_subCategory")}>{localStorage.getItem("reg_subCategory") ===null?"select Product Sub category":localStorage.getItem("reg_subCategory")}</option>
                            <option value="Former">Former</option>
                            <option value="Hotel">Hotel</option>
                            <option value="fruit">fruit</option>
                          </select>
                          <label htmlFor="reg_subCategory">Select Product Sub Category</label>
                            <div className="error-div-left">{this.state.subCategoryMsg}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rowData">
                <div className="rowInner">
                    <div className="input-icon icon-top-10">
                        <div className="icon icon-addUser"><i className="requiredSymbol">*</i></div>
                    </div>
                    <div className="inputData textAlignLeft">
                    <div className="form-group">
                            <input
                                id="actualPrice"
                                name="actualPrice"
                                type="number"
                                placeholder="Enter Actual price"
                                className="form-control input-border-bottom"
                                value={localStorage.getItem("reg_actualPrice")}
                                onChange={event => this.handleActualPrice(event.target.value)}
                            />
                            <div className="error-div-left">{this.state.actualPriceMsg}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rowData">
                <div className="rowInner">
                    <div className="input-icon icon-top-10">
                        <div className="icon icon-address-card"><i className="requiredSymbol">*</i></div>
                    </div>
                    <div className="inputData textAlignLeft">
                    <div className="form-group">
                            <input
                                id="offerPrice"
                                name="offerPrice"
                                type="number"
                                placeholder="Enter offer price"
                                className="form-control input-border-bottom"
                                value={localStorage.getItem("reg_offerPrice")}
                                onChange={event => this.handleOfferPrice(event.target.value)}
                            />
                            <div className="error-div-left">{this.state.offerPriceMsg}</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="rowData">
              <div className="rowInner">
                <div className="input-icon icon-top-10">
                  <div className="icon icon-password"><i className="requiredSymbol">*</i></div>
                </div>
                <div className="inputData">
                  <div className="form-group form-floating-label">
                    <input
                      id="offerPercentage"
                      name="offerPercentage"
                      type="number"
                      placeholder="Enter offer Percentage"
                      className="form-control input-border-bottom"
                      value={localStorage.getItem("reg_offerPercentage")}
                      onChange={event => this.handleofferPercentage(event.target.value)}
                    />
                    <div className="error-div-left">{this.state.offerPercentageMsg}</div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="rowData">
                <div className="inputData">
                  <div className="form-group form-floating-label">
                    <input
                      id="wholeSellerId"
                      name="wholeSellerId"
                      type="hidden"
                      value={localStorage.getItem("mobileNumber")}
                    />
                  </div>
                </div>
            </div>
            <div className="rowData">
                <div className="rowInner">
                    <div className="input-icon icon-top-10">
                        <div className="icon icon-male"><i className="requiredSymbol">*</i></div>
                    </div>
                    <div className="inputData">
                    <div className="form-group">
                        <div className="radio-toolbar">
                                <input type="radio" id="radio1" name="radios" value="YES"
                                onChange={event => this.handleIsAvailable(event.target.value)} 
                                checked={localStorage.getItem("reg_isAvailable")==="YES"?localStorage.getItem("reg_isAvailable"):null}/>
                                <label htmlFor="radio1">Yes</label>

                                <input type="radio" id="radio2" name="radios" value="NO" 
                                onChange={event => this.handleIsAvailable(event.target.value)}
                                checked={localStorage.getItem("reg_isAvailable")==="NO"?localStorage.getItem("reg_isAvailable"):null}/>
                                <label htmlFor="radio2">No</label>
                            </div>
                            <div className="error-div-left">{this.state.IsAvailableMsg}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rowData">
              <div className="rowInner">
                <div className="input-icon icon-top-10">
                  <div className="icon icon-password"><i className="requiredSymbol">*</i></div>
                </div>
                <div className="inputData">
                  <div className="form-group form-floating-label">
                    <input
                      id="quantity"
                      name="quantity"
                      type="number"
                      placeholder="Enter Product Quantity"
                      className="form-control input-border-bottom"
                      value={localStorage.getItem("reg_quantity")}
                      onChange={event => this.handleQuantity(event.target.value)}
                    />
                    <div className="error-div-left">{this.state.quantityMsg}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rowData">
              <div className="rowInner">
                <div className="input-icon icon-top-10">
                  <div className="icon icon-profile"><i className="requiredSymbol">*</i></div>
                </div>
                <div className="inputData">
                  <div className="form-group form-floating-label">
                    <input
                      id="frontImage"
                      name="frontImage"
                      className="form-control input-border-bottom"
                      type="file" 
                      accept="image/*" 
                      ref={this.fileInput}
                      onChange={this.handleImageUpload}
                    />
                    <div className="error-div-left">{this.state.imageMsg}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="divider-15"></div>
          {this.state.loaded?<Loader/>:null}
          <div className="error-div-left textAlignCenter">{this.state.showAllErrorMsg}</div>
          <div className="divider-30"></div>
         
            <div className="rowData">
            <div className="buttonCenter">
                <div className="form-action">
                  <button
                    className="btnLogin backgroundGreen"
                    onClick={event => this.handleRegistration(event)}
                  >Submit
                  </button>
                </div>
            </div>
          </div>
          <div className="divider-80"></div>

          {this.state.showComponentErrorMsg ? <MessagePopup
                title="Apecto"
                body={this.state.showAllErrorMsg}
                closePopup={this.CloseMessagePopup.bind(this)}/> : null }


          <div className="divider"></div>
        </div>
      </div>
    );
  }
  

  backURL() {
    localStorage.setItem("TermsBackUrl", "/registration");
  }
  SendToLogin() {
    //window.open(process.env.REACT_APP_PARTNERAPP_FORNT_END + "login");
  }
  //====================================================handleClick=========================================
  handleImageUpload(event) {
        event.preventDefault();
        console.log("Selected file",this.fileInput.current.files[0].name);
        this.setState({
            image:this.fileInput.current.files[0].name
        })
      }

  handleProductName(value) {
    localStorage.setItem("reg_add_productName",value);
    this.setState({
      productName: localStorage.getItem("reg_add_productName"),
    });
    
  }
  handleProductDescription(value) {
    localStorage.setItem("reg_productDescription",value);
    this.setState({
      productDescription:localStorage.getItem("reg_productDescription"),
    });
  }
  handleBrand(value) {
    localStorage.setItem("reg_brand",value);
    this.setState({
      brand: localStorage.getItem("reg_brand"),
    });
  }

  handleCategory(value){
    localStorage.setItem("reg_category",value);
    this.setState({
      category:localStorage.getItem("reg_category"),
    });
    
  }
  handleSubCategory(value){
    localStorage.setItem("reg_subCategory",value);
    this.setState({
      subCategory:localStorage.getItem("reg_subCategory"),
    });
  }
  handleActualPrice(value){
    localStorage.setItem("reg_actualPrice",value);
    this.setState({
      actualPrice:localStorage.getItem("reg_actualPrice"),
    });
  }

  handleOfferPrice(value){
    localStorage.setItem("reg_offerPrice",value);
    this.setState({
      offerPrice:localStorage.getItem("reg_offerPrice"),
    });
  }
  handleofferPercentage(value) {
    localStorage.setItem("reg_offerPercentage",value);
    this.setState({
      offerPercentage: localStorage.getItem("reg_offerPercentage"),
    });
  }
  handleIsAvailable(value) {
    localStorage.setItem("reg_isAvailable",value);
    this.setState({
      isAvailable: localStorage.getItem("reg_isAvailable"),
    });
  }
 

  handleQuantity(value) {
    localStorage.setItem("reg_quantity",value);
    this.setState({
      quantity:localStorage.getItem("reg_quantity"),
    });
  }

  //===========================================HANDLE CLICK FUNCTION===============================

  handleRegistration(event) {
    this.setState({loaded:true,})
    let currentComponent = this;
    //To be done:check for empty values before hitting submit
    var payload = {
        productName:localStorage.getItem("reg_add_productName"),
        productDescription:localStorage.getItem("reg_productDescription"),
        brand:localStorage.getItem("reg_brand"),
        category:localStorage.getItem("reg_category"),
        subCategory:localStorage.getItem("reg_subCategory"),
        actualPrice:localStorage.getItem("reg_actualPrice"),
        offerPrice:localStorage.getItem("reg_offerPrice"),
        isAvailable:localStorage.getItem("reg_isAvailable"),
        wholeSellerId:localStorage.getItem("mobileNumber"),
        quantity:localStorage.getItem("reg_quantity")
    };

    console.log("payload" , payload);

    if (localStorage.getItem("reg_add_productName") === null) {
      this.setState({
        loaded:false,
        productNameMsg: "Product Name Required",
        showAllErrorMsg:"Product Name Required",
        categoryMsg:"",
        productDescriptionMsg:"",
        brandMsg:"",
        subCategoryMsg:"",
        actualPriceMsg:"",
        offerPriceMsg:"",
        IsAvailableMsg:"",
        quantityMsg: "",
        
      });
    }else if (localStorage.getItem("reg_productDescription") === null) {
      this.setState({
        loaded:false,
        productNameMsg: "",
        brandMsg: "",
        showAllErrorMsg:"Enter Product Description",
        categoryMsg:"",
        productDescriptionMsg:"Enter Product Description",
        subCategoryMsg:"",
        actualPriceMsg:"",
        offerPriceMsg:"",
        IsAvailableMsg:"",
        quantityMsg: "",
        
      });
    }else if (localStorage.getItem("reg_brand")=== null) {
      this.setState({
        loaded:false,
        productNameMsg: "",
        brandMsg: "Enter Brand Name",
        showAllErrorMsg:"Enter Brand Name",
        categoryMsg:"",
        productDescriptionMsg:"",
        subCategoryMsg:"",
        actualPriceMsg:"",
        offerPriceMsg:"",
        IsAvailableMsg:"",
        quantityMsg: "",
        
      });
    } else if(localStorage.getItem("reg_category") === null){
        this.setState({
          loaded:false,
          productNameMsg: "",
          brandMsg: "",
          productDescriptionMsg: "",
          categoryMsg:"Enter category",
          showAllErrorMsg:"Enter category",
          subCategoryMsg:"",
          actualPriceMsg:"",
          offerPriceMsg:"",
          IsAvailableMsg:"",
          quantityMsg: "",
          
        })
      }else if(localStorage.getItem("reg_subCategory") === null){
        this.setState({
          loaded:false,
          productNameMsg: "",
          brandMsg: "",
          productDescriptionMsg: "",
          categoryMsg:"",
          showAllErrorMsg:"Enter sub category",
          subCategoryMsg:"Enter sub Category",
          actualPriceMsg:"",
          offerPriceMsg:"",
          IsAvailableMsg:"",
          quantityMsg: "",
          
        })
      }else if(localStorage.getItem("reg_actualPrice") === null){
      this.setState({
        loaded:false,
        productNameMsg: "",
        brandMsg: "",
        productDescriptionMsg: "",
        categoryMsg:"",
        subCategoryMsg:"",
        actualPriceMsg:"Enter Actual price of product",
        offerPriceMsg:"",
        showAllErrorMsg:"Enter Actual price of product",
        IsAvailableMsg:"",
        quantityMsg: "",
        
      })
    }
    
    else if(localStorage.getItem("reg_offerPrice") === null){
      this.setState({
        loaded:false,
        productNameMsg: "",
        brandMsg: "",
        productDescriptionMsg: "",
        categoryMsg:"",
        subCategoryMsg:"",
        showAllErrorMsg:"Enter offer price",
        actualPriceMsg:"",
        offerPriceMsg:"Enter offer price",
        IsAvailableMsg:"",
        quantityMsg: "",
        
      })
    }else if(localStorage.getItem("reg_quantity") === null){
      this.setState({
        loaded:false,
        productNameMsg: "",
        brandMsg: "",
        productDescriptionMsg: "",
        categoryMsg:"",
        subCategoryMsg:"",
        actualPriceMsg:"",
        offerPriceMsg:"",
        showAllErrorMsg:"Enter product quantity",
        IsAvailableMsg:"",
        quantityMsg: "Enter product quantity",
        
      })
    }else if (localStorage.getItem("reg_isAvailable") === null) {
      this.setState({
        loaded:false,
        productNameMsg: "",
        brandMsg: "",
        productDescriptionMsg: "",
        IsAvailableMsg: "Please Select Product is available or not",
        showAllErrorMsg:"Please Select Product is available or not",
        categoryMsg:"",
        subCategoryMsg:"",
        actualPriceMsg:"",
        offerPriceMsg:"",
        quantityMsg: "",
        
      });
    } else {
      this.setState({
        loaded:false,
        productNameMsg: "",
        brandMsg: "",
        productDescriptionMsg: "",
        categoryMsg:"",
        subCategoryMsg:"",
        actualPriceMsg:"",
        offerPriceMsg:"",
        IsAvailableMsg:"",
        showAllErrorMsg:"",
        quantityMsg: "",
        
      });
      
    axios
      .post(process.env.REACT_APP_PARTNERAPP_BACKEND + "hh/reg/add", payload)
      .then(function(response) {
        console.log(response.data.status);
        if (response.data.status.isSuccess === true) {
            currentComponent.setState({
              toDashboard: true,
              loaded:false,
            });
            localStorage.removeItem("reg_add_productName");
            localStorage.removeItem("reg_productDescription");
            localStorage.removeItem("reg_brand");
            localStorage.removeItem("reg_category");
            localStorage.removeItem("reg_subCategory");
            localStorage.removeItem("reg_actualPrice");
            localStorage.removeItem("reg_offerPrice");
            localStorage.removeItem("reg_quantity");
            localStorage.removeItem("reg_isAvailable");
        } else if (response.data.error.errorName === "ALREADY_PRESENT") {
          console.log("Product Already present");
            currentComponent.setState({
              showComponentErrorMsg: true,
              showAllErrorMsg:"This type of product already present",
              loaded:false,
            });
        }else if (response.data.error.errorName === "FAILED_TO_REGISTER") {
          console.log("FAILED TO REGISTER");
          currentComponent.setState({
            showComponentErrorMsg: true,
            showAllErrorMsg:"Failed to Add Product",
            loaded:false,
          });
        }else {
          console.log("DB_ERROR");
        }
      })
    
      .catch(function(error) {
        console.log(error);
      });
  }
} 
  
}

export default UpdateProduct;
