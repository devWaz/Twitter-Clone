import Sidebar from './components/sidebar/sidebar';
import Feed from './components/feed/feed';
import Widgets from './components/widgets/widgets';

function App() {
  return (
    <div className="App">
     <Sidebar/>
     <Feed/>
     <Widgets/>
    </div>
  );
}

export default App;
