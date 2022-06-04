import React from 'react';
// react redux 
import { useDispatch, useSelector } from "react-redux";
// react router dom 
import { Link } from "react-router-dom";
// action creator 
import { sideMenu_Ac } from "../redux/menu/menu_AC";
// scss 
import Styles from "../assets/styles/components_styles/Navbar.module.scss";
// react icons 
import { GrFormClose } from "react-icons/gr";

const Navbar = () => {
  const dispatch = useDispatch()
  const { sideMenu } = useSelector(state => state.menuState);

  return (
    <>
      {!!sideMenu &&
        <div className={Styles.navbarSide} >
          <div className={Styles.closeBTNContainer}>
            <GrFormClose onClick={() => dispatch(sideMenu_Ac(false))} />
          </div>
          <h2>Crypto</h2>
          <nav>
            <ul className={Styles.ulList}>
              <li>
                <Link to="/">Coins</Link>
              </li>
            </ul>
          </nav>
        </div>
      }
    </>
  );
};

export default Navbar;