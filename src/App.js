import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import MovieScreen from './components/MovieScreen'
import styles from './assets/styles.module.css'
import { Grid } from 'semantic-ui-react'

function App() {
  return (
    <div className={styles.background}>
      <Grid style={{padding: '6vh'}}>
        <Grid.Column width={2}></Grid.Column>
        <Grid.Column width={12}><MovieScreen /></Grid.Column>
        <Grid.Column width={2}></Grid.Column>
      </Grid>
    </div>
  );
}

export default App;
