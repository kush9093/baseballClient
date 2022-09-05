import './App.css';
import { Fragment } from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from './component/header';
import Main from './component/main';
import { PlayerAPI } from './service/playerAPI';
import { RecordAPI } from './service/recordAPI';
import PlayerList from './component/playerlist';
import PlayerDetail from './component/playerdetail';
import { SupportAPI } from './service/supportAPI';
import Support from './component/support';

const playerAPI = new PlayerAPI();
const recordAPI = new RecordAPI();
const supportAPI = new SupportAPI();
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
          <Route path="/support" element={<Support supportAPI={supportAPI}/>}/>
        </Routes>
      </BrowserRouter>

    </Fragment>
  );
}

export default App;
