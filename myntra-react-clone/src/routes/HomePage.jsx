import Home from "../components/Home"
import {useSelector} from "react-redux";
const HomePage = () => {
 const item =  useSelector(store => store.item);
  return (
    <main>
        <div className="items-container">
            {item.map(items => <Home  key={items.id} item = {items}/> )}
            
        </div>
    </main>
  )
}

export default HomePage;