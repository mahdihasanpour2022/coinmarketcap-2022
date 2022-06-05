import React from 'react';
// react redux 
import { useDispatch, useSelector } from 'react-redux';
// action creator 
import { sideMenu_Ac } from "../redux/menu/menu_AC";
// scss 
import Styles from "../assets/styles/components_styles/Landing.module.scss";
// react icons 
import { TiThMenu } from "react-icons/ti";
// components 
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";

const Landing = () => {

  const dispatch = useDispatch();
  const { sideMenu } = useSelector(state => state.menuState);

  return (
    <>

      <div className={sideMenu ? `${Styles.landingContainerFullWidth} ${Styles.landingContainerlowWidth}` : Styles.landingContainerFullWidth}>
        {!sideMenu && <TiThMenu className={Styles.menuIcon} onClick={() => dispatch(sideMenu_Ac(true))} />}
        <div className="container">

          <div className="row m-0">
            <div className={`${Styles.lineChart} col-12`}>
              <LineChart />
            </div>
          </div>

          <div className="row m-0">
            <div className={`${Styles.barChart} col-12`}>
              <BarChart />
            </div>
          </div>

          <div className="row m-0">
            <div className={`${Styles.pieChart} col-12`}>
              <PieChart />
            </div>
          </div>

        </div>
      </div>

    </>
  );
};

export default Landing;