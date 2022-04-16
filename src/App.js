import "./App.css";
import Modall from "./Modal";
import Table from "./Table";
import { useState } from "react";
import {useDispatch} from 'react-redux'
import { inputInitial } from "./store/action";
function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const dispatch=useDispatch()
  const handleShow = () => {
    setShow(true);
    dispatch(inputInitial())
  };

  return (
    <div className="App">
      <Modall
        show={show}
        setShow={setShow}
        handleClose={handleClose}
        handleShow={handleShow}
      />
      <Table show={show} setShow={setShow} />
    </div>
  );
}

export default App;
