import React from "react";
// import {Link} from "react-router-dom";
import strings from '../stringsoflanguages';
import BottomMenu from './bottomMenuAdmin';
import TopBarHome from './topBarHome';
class Offers extends  React.Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  refreshPage(){ 
    window.location.reload(); 
  }
  UNSAFE_componentWillMount(){
    localStorage.setItem("activeMenu","Offer");
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
                <div className="width90 paddingAll10 borderAllGray marginAll5per backgroundGray">
                        <div className="card-body textCenter">
                            <h5 className="card-title backgroundGray">Add New Offer</h5>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className=" width90 paddingAll10 borderAllGray marginAll5per backgroundGray">
                            <div className="card-body textCenter">
                                <h5 className="card-title backgroundGray">View Current Offer</h5>
                            </div>
                        </div>
                    </div>
                <div className="row">
                        <div className="width90 paddingAll10 borderAllGray marginAll5per backgroundGray">
                            <div className="card-body textCenter ">
                                <h5 className="card-title backgroundGray">Delete Current Offers</h5>
                            </div>
                        </div>
                </div>

                <div className="divider-60"></div>
                <BottomMenu />
        </>
    );
  }
 
}
export default Offers;
