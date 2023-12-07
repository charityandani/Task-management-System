import ProjectList from "../components/ProjectList";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";



export default function  Project()
{
    return(
        <div className="grid-container">
           
            <Header/>
            <Sidebar/>
            <ProjectList/>
           

        </div>
        
           
    
        
        );
}

