import React from "react";
import {Link} from "react-router-dom";
import strings from '../stringsoflanguages';
import BottomMenu from './bottomMenuAdmin';
import TopBarHome from './topBarHome';
class Product extends  React.Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  refreshPage(){ 
    window.location.reload(); 
  }
  
  UNSAFE_componentWillMount(){
    localStorage.setItem("activeMenu","AddProduct");
  } 

  render() {
    if(localStorage.getItem("language") !== null){
      strings.setLanguage(localStorage.getItem("language"));
    }else if(localStorage.getItem("language") === null){
      strings.setLanguage("en");
    }
    return (
        <>
        <TopBarHome name={"shop is open"}/>
            <div className="divider-50"></div>
            <div className="row">
            <div className="width100 colorBlack">
              <Link to="/add-product">
                <div className="paddingAll10 borderAllGray marginAll5per backgroundGray">
                          <div className="card-body textCenter">
                              <h5 className="card-title backgroundGray">Add Product</h5>
                          </div>
                    </div>
                    </Link>
                    </div>
                </div>
                <div className="row">
                <div className="width100 colorBlack">
                  <Link to="/viewUpdateProduct">
                    <div className="paddingAll10 borderAllGray marginAll5per backgroundGray">
                            <div className="card-body textCenter">
                                <h5 className="card-title backgroundGray">View and Update</h5>
                            </div>
                        </div>
                        </Link>
                        </div>
                    </div>
                <div className="row">
                <div className="width100 colorBlack">
                  <Link to="/viewDeleteProduct">
                        <div className="paddingAll10 borderAllGray marginAll5per backgroundGray">
                            <div className="card-body textCenter ">
                                <h5 className="card-title backgroundGray">View and Delete</h5>
                            </div>
                        </div>
                        </Link>
                      </div>
                </div>

                <div className="divider-60"></div>
                <BottomMenu />
        </>
    );
  }
 
}
export default Product;
