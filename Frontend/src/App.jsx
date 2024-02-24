import Login from './components/login/LoginPage'
import Register from './components/register/Register'
import Homepage from './components/dashboard/homepage/Hompage';
import Board from './components/dashboard/board/Board'
import Analytics from './components/dashboard/analytics/Analytics';
import Settings from './components/dashboard/settings/Settings';
import Popup from './components/popup/Popup';
import Calendar from 'react-calendar';
import MyCalendar from './components/calendar/MyCalender';

function App() {

  return (
    <>
    {/* <MyCalendar /> */}
    {/* <Board /> */}
    {/* <Analytics/> */}
    {/* <Settings/> */}
     <Homepage />
     {/* <Popup /> */}
      {/* <Login /> */}
      {/* <Register /> */}
    </>
  )
}

export default App;
