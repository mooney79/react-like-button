import {useState} from 'react';
import './App.css';

function App() {

  let [likes, setLikes] = useState(0);

  function updateLikes() {
    setLikes(likes = likes +1);    
  }
  
  function likeOutput(){
    if (likes === 1) {
      return (<p><i className="fas fa-thumbs-up"></i> &nbsp;{likes} like</p>);
    } else {
       return (<p><i className="fas fa-thumbs-up"></i> &nbsp;{likes} likes</p>);
    }
  }

  return (
    <div className="App">
       <button onClick = {updateLikes} type="button">Like</button>
       {likeOutput()}
    </div>
  );
}

export default App;
