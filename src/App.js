import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
        <div className="content"> 
          <Routes> {/* Switch is replaces with routes in react router v6 */}
            <Route exact path="/" element={<Home />} />
            <Route path="/create" element={ <Create />} />
            <Route path="/blogs/:id" element={ <BlogDetails />} />
            <Route path="*" element={ <NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}


export default App;
