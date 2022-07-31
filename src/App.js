import Header from './Components/Header/Header';
import Launchlist from './Components/Launchlist/Launchlist';
import Launchview from './Components/Launchview/Launchview';
import './style.css'
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      hello world
    
      
      <Header/>
      <Routes>
      <Route path='/launch/:flight_number' element={<Launchview/>}/>
         
      
      <Route path='/' element={<Launchlist/>}/>
         
    
      </Routes>
      
     </div>
    
    
  );
}

export default App;
