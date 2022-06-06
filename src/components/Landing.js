import React,{useEffect} from 'react';
// react redux 
import { useDispatch, useSelector } from 'react-redux';
// action creator 
import { sideMenu_Ac } from "../redux/menu/menu_AC";
// action creator 
import { fetchCoinsSortByRank} from '../redux/coins/coinAC';
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
  // const {  coinsSortByRank, error, loading } = useSelector(state => state.coinsState)

  useEffect(() => {
    dispatch(fetchCoinsSortByRank());
  }, [dispatch])

  return (
    <>

      <div className={sideMenu ? `${Styles.landingContainerFullWidth} ${Styles.landingContainerlowWidth}` : Styles.landingContainerFullWidth}>
        {!sideMenu && <TiThMenu className={Styles.menuIcon} onClick={() => dispatch(sideMenu_Ac(true))} />}
        <div className="container">

          <div className="row g-2">
            <div className="col-md-12">
              <div className={Styles.lineChart}>
                <LineChart />
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className={Styles.barChart}>
                <BarChart />
              </div>
            </div>
            <div className="col-lg-6">
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