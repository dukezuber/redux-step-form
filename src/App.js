import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import PersonalDetails from './Component/multistape/personalDetails/personalDetails'
import Education from './Component/multistape/Education/Education'
import Summery from './Component/multistape/summery/summery'
import { useRoutes } from 'react-router-dom';

// import { incrementOrdecrement } from './redux/action/user';
// import Auth from './redux/reducer/userReducer';



function App() {
  let element = useRoutes([
    {
      path: "/",
      children: [
        {
          path: "/",
          element: <PersonalDetails/>,
        },
        {
          path: "Education",
          element: <Education/>,

        },
        {
          path: "Summery",
          element: <Summery/>,

        },
      ],
    },
  ]);

  return (
    <div className="App">
      {element}
    </div>
  );
}

export default App;
