import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ChessBot from "./Bots/ChessBot";
import Home from './pages/Home';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="ChessBot/:id"
          element={<ChessBot />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
