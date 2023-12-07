import TaskList from "../components/TaskList";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";



export default function  Task()
{
    return(
        <div className="grid-container">
           
            <Header/>
            <Sidebar/>
            <TaskList/>
           

        </div>
        
           
    
        
        );
}

