import { IoMdPerson } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { IoBagAddSharp } from "react-icons/io5";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
const Header = () => {
    const bagStatus = useSelector(store => store.bagStatus);
  return (
    <header>
    <div className="logo_container">
        <Link to ="/"><img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home"/></Link>
    </div>
    <nav className="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">Studio <sup>New</sup></a>
    </nav>
    <div className="search_bar">
        <span className="material-symbols-outlined search_icon">search</span>
        <input className="search_input" placeholder="Search for products, brands and more"/>
    </div>
    <div className="action_bar">
        <div className="action_container">
           <IoMdPerson/>
            <span className="material-symbols-outlined action_icon">Profile</span>
        </div>

        <div className="action_container">
           <FaHeart/>
            <span className="action_name">Wishlist</span>
        </div>

        <Link className="action_container" style={{color : "black"}}  to="/Bag">
            <IoBagAddSharp/>
            <span className="action_name">Bag</span>
            <span className="bag-item-count">{bagStatus.bagCount}</span>
        </Link>
    </div>
</header>
  )
}

export default Header