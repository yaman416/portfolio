import "./topbar.scss"

export default function Topbar({menuOpen, setMenuOpen}) {
  return <div className={"topbar " + (menuOpen && " active")} >
      <div className="wrapper">
          <div className="left">
            <a href="#intro" className="logo">yaman.gurung</a>
            <div className="itemContainer">
              
              <span>yamangurung4106@gmail.com</span>
              
            </div>
            <div className="itemContainer">
              
              <span>+61 410 494 321</span>
              
            </div>
            
          </div>
          <div className="right">
            <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
      </div>
  </div>;
}
