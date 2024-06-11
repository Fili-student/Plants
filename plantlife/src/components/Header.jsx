import { useContext } from 'react';
import { ThemeContext } from '../App';
import ReactSwitch from 'react-switch';


function Header() {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return(
        <>
        <header>
            <div className="oben">
             <div className="lefticon">
            <i class="fa-solid fa-seedling"></i>
                <h1>Plants</h1>
                </div>

                <nav>
                    <a href="">Home</a>
                    <a href="">Shop</a>
                    <a href="">Sustainability</a>
                    <a href="">Pots</a>
                </nav>
                    <input type="text" name="" id="" placeholder="Search..." />
                    <div className="iconsrechts">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-regular fa-heart"></i>
                    </div>

                    <div className='switch'>
        <label className='lab'>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} className='mh' />
      </div>

            </div>
        </header>
        </>
    );
}

export default Header