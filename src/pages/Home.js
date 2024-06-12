import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../Bots/css/Home.css';

const Home = () => {
    const [difficulty, setDifficulty] = useState(3);
    const navigate = useNavigate();

  return (
      <div className="app">
          <div className="card">
              <div className="diffHeader"><h3>Select difficulty!</h3></div>
              <div className="difficultyRow">
                  <button
                      className={`difficultySelectorButton ${difficulty === 3 ? 'selected' : ''}`}
                      onClick={() => {
                          setDifficulty(3);
                      }}
                  >
                      Depth - 3
                  </button>
                  <button
                      className={`difficultySelectorButton ${difficulty === 4 ? 'selected' : ''}`}
                      onClick={() => {
                          setDifficulty(4);
                      }}
                  >
                      Depth - 4
                  </button>
              </div>
              <div className="play-btn" onClick={() => navigate(`/ChessBot/${difficulty}`)}>
                  Play
              </div>
          </div>
      </div>
  )
}

export default Home;