import {Fragment} from "react";
import KhajaSet from '../../assets/KhajaSet.png';
import HeaderCardButton from "./HeaderCardButton";
import classes from './Header.module.css';

const Header =props =>{
     return<Fragment>
<header className={classes.header}>

    <h1>सस्तो खाजा</h1>
    <HeaderCardButton onClick={props.onShowCart} />
</header>
<div className={classes['main-image']}>
    <img src={KhajaSet} alt=" full KhajaSet"/>
</div>
     </Fragment>
};

export default Header;