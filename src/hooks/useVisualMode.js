import { useState } from "react";
export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
   
  
  // allows to transition to a new mode
  const transition = (nextMode, replace = false) => {
    setMode(nextMode)
    if (replace) {
      setHistory(prev => [prev[0]])
    }
    setHistory(prev => [...prev, nextMode])
  };

  // allows to call back to return to previous mode
  const back = () => {
    let newHistory = [...history];
    newHistory.pop(mode);
    setHistory((prev) => newHistory);
    if (history.length > 1) {
     setMode((prev) => newHistory[(newHistory.length - 1)]);
   }
 };

  return { mode, transition, back };
};






