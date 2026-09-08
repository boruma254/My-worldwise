
import Map from "../Components/Map";
import Sidebar from "../Components/SideBar";
import styles from "./AppLayout.module.css";

function Applayout() {
  return (
    <div className={styles.app }>
      <Sidebar />
      <Map/>
    </div>
  );
}

export default Applayout;
