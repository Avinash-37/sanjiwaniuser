import React, { Component } from "react";
import { Link} from "react-router-dom";
import "../../assets/css/snackbarToast.css";
import BottomMenu from './bottomMenuAdmin';

class EmptyProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setClassName: "show"
    };
  }
  render() {
    
    return (
      <div className="emptyCart">
         <div className="divider-70"></div>
          <div className="textCenter">
          <span className="flaticon-Empty-cart">
          </span>
          </div>
   
        <div className="rowDataPadding16">
          <div className="textCenter">
            <div className="SanjiwaniMallEmptyCart-title">Currently you have not added any product !</div>
          </div>
        </div>
        <div className="dividerPer30"></div>

        <div className="rowDataPadding16">
            <div className="textCenter">
                <Link to="/add-product">
                    <button className="backgroungGreenLight addProductButtonEmpty">Add new product</button>
                </Link>
            </div>
        </div>
        <div className="divider-60"></div>
        <BottomMenu />
      </div>
    );
  }

}
export default EmptyProduct;
