// import React, { FC, ReactElement } from "react";
import { useState, useEffect } from "react";
import "./styles.css";
import ThemeContext from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";

interface AppProps {
  title: string;
}

// const App: FC<AppProps> = ({ title }): ReactElement => {
const App = ({ title }: AppProps) => {
  // const [counter, setCounter] = useState<number | null>(null);
  const [theme, setTheme] = useState<boolean>(false);

  // useEffect(() => {
  //   setCounter(0);
  // }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App">
        <h1>{title}</h1>
        {/* {counter !== null ? (
          <button
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            {counter}
          </button>
        ) : null} */}
        <ThemeToggle />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
