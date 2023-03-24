import './App.scss';
import './assets/styles/style.scss'
import Hero from './components/Hero'
import Content from './components/Content'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hero />
        <Content />
      </header>
    </div>
  );
}

export default App;
