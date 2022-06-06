import React, { useEffect } from 'react';
// react redux 
import { useDispatch, useSelector } from 'react-redux';
// action creator 
import { sideMenu_Ac } from "../redux/menu/menu_AC";
// action creator 
import { fetchCoinsSortByRank } from '../redux/coins/coinAC';
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

  useEffect(() => {
    dispatch(fetchCoinsSortByRank());
  }, [dispatch])

  return (
    <>

      <div className={sideMenu ? `${Styles.landingContainerFullWidth} ${Styles.landingContainerlowWidth}` : Styles.landingContainerFullWidth}>
        {!sideMenu && <TiThMenu className={Styles.menuIcon} onClick={() => dispatch(sideMenu_Ac(true))} />}
        <div className="container-fluid">

          <div className="row g-4">

            <div className="col-md-12">
              <div className={Styles.lineChart}>
                <LineChart />
              </div>
            </div>

            <div className="col-md-6 ">
              <div className={Styles.barChart}>
                <BarChart />
              </div>
            </div>
            <div className="col-md-6">
              <div className={Styles.pieChart} >
                <PieChart />
              </div>
            </div>

          </div>

        </div>
      </div>

    </>
  );
};

export default Landing;