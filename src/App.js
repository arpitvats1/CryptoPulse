import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from "./pages/Homepage";
import CoinPage from "./pages/CoinPage";
import { makeStyles } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import Alerti from "./components/Banner/Alerti";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {

  const classes=useStyles()

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" Component={Homepage} exact/>
          <Route path="/coins/:id" Component={CoinPage} />
        </Routes>
      </div>
      <Alerti />
    </BrowserRouter>
  );
}

export default App;
