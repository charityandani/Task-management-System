
import Taskpic from "./Taskpic";
import Getstarted from "./Getstarted";

export default function Hometext()
{

    return (
        <div className="container">
            <div className="text-container">
            <h1>Welcome to task management tool</h1>
            <h3>Organize. Simplify. Achieve. Repreat</h3>
            <p>
           Your all-in-one solution for streamlined
          task management. Task Planner is designed to simplify your workflow,
          increase productivity, and bring organization to your daily tasks.
          With an intuitive interface, powerful features, and a user-friendly
          design, Task Planner allows you to effortlessly create, prioritize,
          and track your tasks in one centralized hub. Stay on top of deadlines,
          collaborate seamlessly with your team, and achieve your goals with
          ease. Whether you're a professional seeking efficient project
          management or an individual aiming to enhance personal productivity,
          Task Planner adapts to your needs. Experience a smarter way to manage
          tasks and unlock the potential of your productivity with Task Planner
          – where organization meets simplicity.
        </p>
      <Getstarted/>
            </div>
         <Taskpic/>
        </div>
      );


}