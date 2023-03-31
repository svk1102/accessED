import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Auth from './components/auth/Auth';
import Home from './components/Teachers/Home';
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Videoplayer from './components/Students/videoplayer';
import QuizDisplay from './components/Students/QuizDisplay';
import QuizComp from './components/Quiz/QuizComp';
import QuizScience from './components/Quiz/QuizScience';
import Game from './components/Game/Game';
import Landing from './components/Students/Landing';


function App() {
  return (
    <GoogleOAuthProvider clientId="795358451161-8gktavg0p1imik9u48njplv1oqt24u9f.apps.googleusercontent.com">
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Landing/>}></Route> 
            <Route path="/upload" exact element={<Home/>}></Route> 
            <Route path="/login" exact element={<Auth/>}></Route> 
            <Route path="/play" exact element={<Videoplayer/>}></Route> 
            <Route path="/quiz" exact element={<QuizDisplay/>}></Route> 
            <Route path="/quiz/questions/maths" exact element={<QuizComp/>}></Route> 
            <Route path="/quiz/questions/science" exact element={<QuizScience/>}></Route> 
            <Route path="/game" exact element={<Game/>}></Route> 
          </Routes>

      </BrowserRouter>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
