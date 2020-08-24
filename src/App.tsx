import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.scss";
import { routes } from "./AppRoutes";
import { ThemeContext, themes } from "./services/theme-context";
import ThemeTogglerButton from "./components/ThemeTogglerButton/ThemeTogglerButton";

const Counter = lazy(() => import("./components/Counter/Counter"));
const Clock = lazy(() => import("./components/Clock/Clock"));
const Form = lazy(() => import("./components/Form/Form"));

const App: React.FC = () => {
  const currentLink = window.location.pathname;
  const [navLinks, setNavLinks] = useState(routes);
  const [themeContextValue, setThemeContextValue] = useState({
    theme: themes.light,
    toggleTheme: toggleTheme,
  });

  function toggleTheme() {
    themeContextValue.theme =
      themeContextValue.theme === themes.dark ? themes.light : themes.dark;
    themeContextValue.toggleTheme = toggleTheme;
    setThemeContextValue({ ...themeContextValue });
  }

  function highlightSelectedLink(index: number) {
    navLinks.forEach((link, i) => {
      if (i === index) {
        link.selected = true;
      } else {
        link.selected = false;
      }
    });

    setNavLinks([...navLinks]);
  }
  return (
    <ThemeContext.Provider value={themeContextValue}>
      <div className={`App ${themeContextValue.theme.label}`}>
        <header className="App-header">
          <div className="theme-toggle">
            <ThemeTogglerButton />
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <h4>React js App</h4>
        </header>

        <Router>
          <ul className="nav">
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link
                  className={
                    link.selected || link.to === currentLink
                      ? "router-link selected"
                      : "router-link"
                  }
                  to={link.to}
                  onClick={() => highlightSelectedLink(i)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="App-Content">
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path="/" component={Clock} exact />
                <Route path="/counter" component={Counter} />
                <Route path="/comments" component={Form} />
              </Switch>
            </Suspense>
          </div>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
