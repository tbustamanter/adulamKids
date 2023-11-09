import { useState } from "react";
import { Link } from "react-router-dom/dist";

const NavBar = () => {
  let links = [
    { name: "HOY", link: "/" },
    { name: "LISTA", link: "/list" },
    { name: "AGREGAR ALUMNO", link: "/addStudent" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-[999]">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
          <span className="text-3xl text-cyan-400 mr-1 pt-2">
            <ion-icon name="accessibility-outline"></ion-icon>
          </span>
          Adulam Kids
        </div>
        <div onClick={()=> setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
        <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100': 'top-[-490px] md:opacity-100 opacity-0'}`}>
          {links.map((link) => {
            return(
                
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <Link className="text-gray-800 hover:text-cyan-400 duration-500" to={link.link}>
                {link.name}
                </Link>
              
            </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
