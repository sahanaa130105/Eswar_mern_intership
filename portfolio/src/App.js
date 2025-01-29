// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
// import { Home } from'./files/home';
// import {About} from './files/about';
// import { Project } from './files/project';
// import { Resume } from './files/resume';
// import { Contact } from './files/contact';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <nav className="navbar">
//           <div className="logo">Sb.</div>
//           <ul className="nav-links">
//             <li>Home</li>
//             <li>About</li>
//             <li>Projects</li>
//             <li>Resume</li>
//             <li>Contact</li>
//           </ul>
//         </nav>
//         <div className="hero-section">
//           <div className="hero-text">
//             <h1>
//               Hi There! <span className="wave">👋</span>
//             </h1>
//             <h2>
//               I'M <span className="highlight">SAHANAA B</span>
//             </h2>
//             <h3>Software Developer | Open Source Contributor</h3>
//           </div>
//           <div className="hero-image">
//             <img
//               src="https://via.placeholder.com/400x400"
//               alt="Developer Illustration"
//             />
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;






import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import  {Home}  from'./files/home';
import {About} from './files/about';
import { Project } from './files/project';
import { Resume } from './files/resume';
import { Contact } from './files/contact';
function App() {
  return (
    <Router>
    <div >
      
      <nav className='hi' >
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/project">Project</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
      </nav>
      <Routes className='color' >
      <Route path="/home" Component={Home} />
      <Route path="/about" Component={About}/> 
      <Route path ="/project" Component={Project}/>
      <Route path='/resume' Component={Resume}/>
      <Route path='/contact' Component={Contact}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
