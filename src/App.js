import {Routes,Route} from 'react-router-dom';
import {Navbar, Feed,SearchFeed,VideoDetails,ChannelDetails}from "./components";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Feed/>}/>
        <Route path="/video/:id" element={<VideoDetails/>}/>
        <Route path="/channel/:id" element={<ChannelDetails/>}/>
        <Route path="/search/:searchTerm" element={<SearchFeed/>}/>

      </Routes>
    
    </div>
  );
}

export default App;
