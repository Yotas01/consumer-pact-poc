import './App.css';
import CreateBlog from './components/CreateBlog';
import ReadBlog from './components/ReadBlog';

function App() {


  return (
    <div className="App">
      <header>
        <CreateBlog/>
        <ReadBlog/>
      </header>
    </div>
  );
}

export default App;
