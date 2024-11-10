
import './App.css';
import Var from './components/Var';
import Contador from './components/Contador';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      

        <Var key={1} key2={2} />

        <br />

        <Contador  />
        {/* mi pc no aguanto mas de dos porque ya no mostraba las actualizaciones
         ni del cssy no me dejo utilizar axios y no dejo descargar  react-router, me saleiron 8 errores */}
        
      </header>
    </div>
  );
}

export default App;
