import React from 'react';
// react redux 
import { useDispatch, useSelector } from 'react-redux';
// react route dom 
import { Routes, Route } from 'react-router-dom';
// action creator 
import { sideMenu_Ac } from "../redux/menu/menu_AC";
// components 
import Coins from "../components/Coins";
// react icons 
import { TiThMenu } from "react-icons/ti";
// scss 
import Styles from "../assets/styles/components_styles/CoinRouter.module.scss";



const CoinRouter = () => {

  const dispatch = useDispatch();
  const { sideMenu } = useSelector(state => state.menuState);

  console.log(sideMenu)
  return (
    <>
      <div className={sideMenu ? `${Styles.coinsContainerFullWidth} ${Styles.coinsContainerLowWidth}` : Styles.coinsContainerFullWidth}>
        {!sideMenu && <TiThMenu onClick={() => dispatch(sideMenu_Ac(true))} />}
        <Routes>
          <Route path="" element={<Coins />} />
        </Routes>
      </div>
    </>
  );
};

export default CoinRouter;