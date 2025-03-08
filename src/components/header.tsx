function Header() {
    return (

      <div className="flex justify-between p-3 bg-red-600">
        <div className="font-bold pt-1 pb-1 text-white">LOGO</div>
        <div className="">
          <ul className="pt-1 pb-1 flex justify-evenly gap-20 text-white">
            <li><a href="#">HOME</a></li>
            <li><a href="#">MENU</a></li>
            <li><a href="#">BOOK A TABLE</a></li>
            <li><a href="#">ABOUT US</a></li>
          </ul>
        </div>
        <div><button className="pl-4 pr-4 pt-1 pb-1 border-2 border-white rounded-md text-white hover:cursor-pointer">LOGIN</button></div>
      </div>
      
    );
  }
  
  export default Header;
  
