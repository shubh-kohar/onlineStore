import React from "react";
import { AiOutlineHeart, AiOutlineLogin, AiOutlineShoppingCart } from "react-icons/ai";
import {BiSearch} from 'react-icons/bi'

const Header = () => {
  return (
    <div className="flex flex-row p-2 justify-between">
      <h1 className="font-bold bg-purple-500 p-2 text-white  skew-y-2">
        CustomMonkey
      </h1>

    <div className="flex bg-slate-100 items-center px-2 w-1/2 space-x-2">
        <BiSearch size={25}/>

      <input type="text" className="bg-transparent outline-none flex-1" placeholder="Search..."/>
    </div>

      {/* nav menu */}
      <div className="flex flex-row text-slate-900 space-x-4">
        <div className="flex items-center">
          <AiOutlineShoppingCart size={25} />
          <h1>My cart</h1>
        </div>

        <div className="flex items-center">
          <AiOutlineHeart size={25} />
          <h1>My wishlist</h1>
        </div>


        <div className="flex items-center">
          <AiOutlineLogin size={25} />
          <h1>Login </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
