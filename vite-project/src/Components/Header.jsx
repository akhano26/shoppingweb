import { AiFillProfile } from "react-icons/ai";
import { FaHeartPulse } from "react-icons/fa6";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Header(){
 const bag= useSelector(store=>store.bag);
  
  return(
<header>
        <div className="logo_container">
            <Link to={'/'}><img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home"/></Link>
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
            <span className="material-symbols-outlined search_icon"><CiSearch/></span>
            <input className="search_input" placeholder="Search for products, brands and more"/>
        </div>
        <div className="action_bar">
            <div className="action_container">
               <AiFillProfile/>
                <span className="action_name">Profile</span>
            </div>

            <div className="action_container">
            <FaHeartPulse/>
                <span className="action_name">Wishlist</span>
            </div>

<Link className="action_container" to={'/Bag'}>
            <MdOutlineShoppingCartCheckout/>
                <span className="action_name">Bag</span>
                <span className="bag-item-count">{bag.length}</span>
                </Link>
        </div>
    </header>


  )
}