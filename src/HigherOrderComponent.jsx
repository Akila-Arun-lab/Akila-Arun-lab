
import { useParams } from "react-router-dom";

const Dashboard = () => {
  return <p>Dashboard</p>
}

const withAuthentication = (Dashboard) => {
  return function AuthComp(){
    const logged = useParams();
    const auth = Boolean(JSON.parse(logged.logged));
    if(auth){
      return <Dashboard/>
    } else {
      return <p>Not logged in</p>
    }
  }

}
const ProtectedDashboardComponent = withAuthentication(Dashboard);

function HigherOrderComponent() {
  return (
    <ProtectedDashboardComponent/>
  );
}
export default HigherOrderComponent;