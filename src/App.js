import './App.css';
import { Fragment } from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from './component/header';
import Main from './component/main';
import { PlayerAPI } from './service/playerAPI';
import { RecordAPI } from './service/recordAPI';
import PlayerList from './component/playerlist';
import PlayerDetail from './component/playerdetail';

const playerAPI = new PlayerAPI();
const recordAPI = new RecordAPI();

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/player">
            <Route index element={<PlayerList playerAPI={playerAPI}/>}/>
            <Route path=":position" element={<PlayerList playerAPI={playerAPI}/>}/>
            <Route path=":position/:pcode" element={<PlayerDetail playerAPI={playerAPI} recordAPI={recordAPI} />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </Fragment>
  );
}

export default App;
