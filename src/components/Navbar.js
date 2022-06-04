import React from 'react';
// react redux 
import { useDispatch, useSelector } from "react-redux";
// react router dom 
import { NavLink } from "react-router-dom";
// action creator 
import { sideMenu_Ac } from "../redux/menu/menu_AC";
// scss 
import Styles from "../assets/styles/components_styles/Navbar.module.scss";
// react icons 
import { IoIosClose } from "react-icons/io";

const Navbar = () => {
  const dispatch = useDispatch()
  const { sideMenu } = useSelector(state => state.menuState);

  return (
    <>
      {!!sideMenu &&
        <div className={Styles.navbarSide} >
          <div className={Styles.closeBTNContainer}>
            <IoIosClose onClick={() => dispatch(sideMenu_Ac(false))} />
          </div>
          <h2>Crypto</h2>
          <nav>
            <ul className={Styles.ulList}>
              <li>
                <NavLink to="/" className={navData => navData.isActive ? `${Styles.navlink} ${Styles.active}` : Styles.navlink} >Home</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      }
    </>
  );
};

export default Navbar;