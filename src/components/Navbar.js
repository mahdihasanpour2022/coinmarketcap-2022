import React from 'react';
// react redux 
import { useDispatch, useSelector } from "react-redux";
// react router dom 
import { NavLink ,Link} from "react-router-dom";
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
          <h2>
            <Link to="/" >Crypto</Link>
          </h2>
          <nav>
            <ul className={Styles.ulList}>
              <li>
                <NavLink to="/" className={navData => navData.isActive ? `${Styles.navlink} ${Styles.active}` : Styles.navlink} >Home</NavLink>
              </li>
              <li>
                <NavLink to="/coins" className={navData => navData.isActive ? `${Styles.navlink} ${Styles.active}` : Styles.navlink} >Coins</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      }
    </>
  );
};

export default Navbar;