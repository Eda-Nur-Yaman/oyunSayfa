import React ,{Component} from 'react';
import './App.css';


class App extends Component {

  render(){
  return (
  <div class = "container">
     <div class = "kutu1">eda</div>
     <div class = "kutu2">
     <div class ="oyun1" >&nbsp; <p>Tortoyu Yakala</p> &nbsp;&nbsp;&nbsp;<div><img src="../img/TortoMini.jpg" alt="" class="torto" ></img></div></div>
     <div class ="oyun2">&nbsp; <p>Eşleştirme Oyunu</p>&nbsp;&nbsp;&nbsp;<div><img src="../img/meyveOyunuMini.jpg" alt="" class="eslestirme" ></img></div> </div>
     <div class ="oyun3">&nbsp; <p>Oyun 3</p></div>
     <div class ="oyun4">&nbsp; <p>Oyun 4</p> </div>
     
     </div>
      
  </div>
   
  );
}
}

export default App;