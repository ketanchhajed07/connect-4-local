import { useContext, useReducer } from "react";
import { createContext } from "react";

const GameContext = createContext();

const SEC_PER_TURN = 30;

const initialState = {
  board: Array(7).fill(Array(6).fill(null)),
  scores: [0, 0],
  currentPlayer: 0,
  timer: SEC_PER_TURN,
  moves: 0,
  winner: null,
  winningCells: [],
  status: "waiting",
  paused: false,
};

const reducer = function (state, action) {
  switch (action.type) {
    case "start":
      return {
        ...initialState,
        status: "playing",
      };
    case "quit":
      return {
        ...initialState,
      };
    case "restart":
      return {
        ...initialState,
        status: "playing",
      };
    case "win":
      return {
        ...state,
        board: action.payload.updatedBoard,
        scores: state.scores.map((score, i) =>
          i === state.currentPlayer ? score + 1 : score
        ),
        moves: state.moves + 1,
        winner: state.currentPlayer,
        winningCells: action.payload.winningCells,
        status: "finished",
      };
    case "draw":
      return {
        ...state,
        board: action.payload.updatedBoard,
        moves: state.moves + 1,
        winner: -1,
        status: "finished",
      };
    case "move":
      return {
        ...state,
        board: action.payload.updatedBoard,
        moves: state.moves + 1,
        currentPlayer: state.currentPlayer === 0 ? 1 : 0,
        timer: SEC_PER_TURN,
      };
    case "pause":
      return {
        ...state,
        paused: true,
      };
    case "resume":
      return {
        ...state,
        paused: false,
      };
    case "play-again":
      return {
        ...initialState,
        scores: state.scores,
        status: "playing",
        currentPlayer: state.currentPlayer === 0 ? 1 : 0,
      };
    case "decrease-timer":
      return {
        ...state,
        timer: state.timer > 0 ? state.timer - 1 : state.timer,
      };
    case "timer-expired":
      return {
        ...state,
        currentPlayer: state.currentPlayer === 0 ? 1 : 0,
        timer: SEC_PER_TURN,
      };
  }
};

function GameProvider({ children }) {
  const [
    {
      board,
      scores,
      currentPlayer,
      firstTurn,
      timer,
      moves,
      winner,
      winningCells,
      status,
      paused,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  return (
    <GameContext.Provider
      value={{
        board,
        scores,
        currentPlayer,
        firstTurn,
        timer,
        moves,
        winner,
        winningCells,
        status,
        paused,
        dispatch,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

function useGame() {
  const context = useContext(GameContext);
  if (context === undefined)
    throw new Error("QuizContext was used outside of the QuizProvider");
  return context;
}

export { GameProvider, useGame };
