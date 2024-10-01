import "./App.css";
import PreviewCard from './components/PreviewCard';
import Header from './components/Header';

function App() {

  return (
    <>
      <Header/>
      <main className="mainContainer">
        <PreviewCard />
      </main>
    </>
  );
}

export default App;
