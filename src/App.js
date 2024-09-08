import './App.css';
import RouteContainer from '../src/common/routes/routers'
import { HashRouter } from 'react-router-dom';
import styles from './common/routes/style';
function App() {
  return (
    <HashRouter>
      <div className="App" style={styles.background}>
        <RouteContainer />
      </div>
    </HashRouter>
  );
}

export default App;
