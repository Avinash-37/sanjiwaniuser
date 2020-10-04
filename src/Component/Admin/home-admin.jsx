import React from "react";
import {Link} from "react-router-dom";
import strings from '../stringsoflanguages';
import BottomMenu from './bottomMenuAdmin';
import TopBarHome from './topBarHome';
class HomeAdmin extends  React.Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  refreshPage(){ 
    window.location.reload(); 
  }

  UNSAFE_componentWillMount(){
    localStorage.setItem("activeMenu","Home");
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
            <div className="dividerPer20"></div>
            <div className="row">
            <div className="width100 colorBlack">
                      <Link to="/viewCurrentOrder">
                          <div className="paddingAll10 paddingAll10 borderAllGray marginAll5per backgroundGray">
                            <div className="card-body textCenter">
                                <h5 className="card-title backgroundGray">View Current Order</h5>
                            </div>
                        </div>
                      </Link>
                    </div>

                    <div className="width100 colorBlack">
                      <Link to="/viewUpdateProduct">
                        <div className="paddingAll10 borderAllGray marginAll5per backgroundGray">
                            <div className="card-body textCenter">
                                <h5 className="card-title backgroundGray">View Cancelled order</h5>
                            </div>
                        </div>
                      </Link>
                    </div>
                </div>

                <div className="row">
                <div className="width100 colorBlack">
                      <Link to="/viewUpdateProduct">
                        <div className=" paddingAll10 borderAllGray marginAll5per backgroundGray">
                            <div className="card-body textCenter">
                                <h5 className="card-title backgroundGray">View Complete Order</h5>
                            </div>
                        </div>
                        </Link>
                    </div>

                    <div className="width100 colorBlack">
                      <Link to="/viewUpdateProduct">
                        <div className="paddingAll10 borderAllGray marginAll5per backgroundGray">
                            <div className="card-body textCenter ">
                                <h5 className="card-title backgroundGray">View  All  Orders  List</h5>
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
export default HomeAdmin;
