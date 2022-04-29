import SideBar from "./components/SideBar/SideBar";
import TodaysPatients from "./components/TodaysPatients/TodaysPatients";
import ApptFirstScreen from "./components/ApptFirstScreen/ApptFirstScreen";
import ApptConsult from "./components/ApptConsult/ApptConsult";

function App() {
  return (
    <div className="container">
      <div class="side-bar-container">
        <SideBar />
      </div>
      <div class="sub-container">
        <div class="top-container">
          <div class="top-left-container">
            <ApptFirstScreen />
          </div>
          <div class="top-right-container">
            <ApptConsult />
          </div>
        </div>
        <div class="bottom-container">
          <TodaysPatients />
        </div>
      </div>
    </div>
  );
}

export default App;
