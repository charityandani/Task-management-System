
import Button from "./Button"
export default function Navbar(){

    return <>
    
    <nav className="nav">
      <a href="/" className="site-title">Task Planner</a>
      <ul>
        <li className='nav-item'><a href="/" className="login-link">Features</a></li>
        <li className='nav-item'><a href="/" className="feature-link">Login</a></li>
        <li><Button></Button></li>
      </ul>
    </nav>
  

    </>
}