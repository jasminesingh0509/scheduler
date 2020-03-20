import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    setMode(newMode);
    if (replace) {
      setHistory(prev => [prev[0]]);
    }
    setHistory(prev => [...prev, newMode]);
  }

  function back() {
    history.pop();
    if (history.length) {
      const prevMode = history[history.length - 1];
      setMode(prevMode);
    }
  }
  return { mode, transition, back };
}
