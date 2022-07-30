import Header from './Components/Header/Header';
import Launch from './Components/launch/Launch';
import './style.css'
function App() {
  return (
    <div className="App">
      <Header/>
      <Launch 
      title='title' 
      date='678767' 
      description='loremwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww' 
      image='https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg'/>

     <Launch 
      title='title' 
      date='678767' 
      description='loremwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww' 
      image='https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg'/>

     <Launch 
      title='title' 
      date='678767' 
      description='loremwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww' 
      image='https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg'/>
    </div>
  );
}

export default App;
