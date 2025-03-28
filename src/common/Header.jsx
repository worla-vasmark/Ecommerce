import React, { useEffect, useState } from "react";
import { navbar } from "../data/Data";
import { Link } from "react-router-dom";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  // // useEffect(() {
  //     const handleScroll = () => {}
  // })
  return (
    <div>
      <div className={'${sticky ? "sticky header py-4 top-0 z-50 shadow-x1" : ""}'}
       >
        <div className="w-10/12 m-auto flex flex-wrap justify-between items-center">
          <div>
            <div className="logo">miniture</div>
          </div>
          
          <div className="flex">
            {navbar.map((val, key) => (
              <div key={key} className="mr-5">
                <Link 
                  className="active link-hover transition-all" 
                  to={val.path}
                >
                  {val.nav}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header