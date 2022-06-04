import React, { useEffect } from 'react';
// react redux 
import { useDispatch, useSelector } from 'react-redux';
// action creator 
import fetchCoins from '../redux/coins/coinAC';
// action creator 
import { sideMenu_Ac } from "../redux/menu/menu_AC";
// components 
// import Coins from "../components/Coins";
// scss 
import Styles from "../assets/styles/components_styles/Landing.module.scss";
// react icons 
import { TiThMenu } from "react-icons/ti";

const Landing = () => {

  const dispatch = useDispatch();
  const { sideMenu } = useSelector(state => state.menuState);


  useEffect(() => {
    dispatch(fetchCoins())
  }, [dispatch])

  return (
    <>
      <div className={sideMenu ? `${Styles.landingContainerFullWidth} ${Styles.landingContainerlowWidth}` : Styles.landingContainerFullWidth}>
        {!sideMenu && <TiThMenu onClick={() => dispatch(sideMenu_Ac(true))} />}
        <p>landing home</p>
      </div>
    </>
  );
};

export default Landing;