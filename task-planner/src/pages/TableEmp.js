import TableEmployee from "../components/TableEmployee";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";



export default function  TableEmp()
{
    return(
        <div className="grid-container">
           
            <Header/>
            <Sidebar/>
           <TableEmployee/>  

        </div>
        
           
    
        
        );
}