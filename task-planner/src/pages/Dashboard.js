import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DashboardContent from "../components/DashboardContent";



export default function  Dashboard()
{
    return(
        <div className="grid-container">
          <Header/>
          <Sidebar/>
          <DashboardContent/>
          

        </div>
        
        );
}