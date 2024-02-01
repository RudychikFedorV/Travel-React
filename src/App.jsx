import { NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { TravelPage } from "./views/TravelPage";
import { SplashScreen } from "./components/SplashScreen";
import { useState } from "react";
import { MenuIcon } from "./components/Icons/MenuIcon";
import { useLocation } from "react-router-dom";
import NotFound from "./views/Home/NotFound";

function App() {
  const location = useLocation();
  const currentUrl = location.pathname;

  console.log(currentUrl);
  const [isSpinner, setIsSpinner] = useState(true);

  setTimeout(() => {
    setIsSpinner(false);
  }, 3000);
  const [tab, setTab] = useState(1);
  return (
    <>
      {!isSpinner && (
        <>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/travel" element={<TravelPage />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
          {currentUrl !== "/travel" && (
            <header className="home__header">
              <div
                onClick={() => setTab(1)}
                className={`home__header ${tab === 1 ? "is-active" : ""}`}
              >
                <NavLink exact activeClassName="is-active" to="/">
                  <MenuIcon type="home" />
                </NavLink>
              </div>

              <div
                onClick={() => setTab(2)}
                className={`home__header ${tab === 2 ? "is-active" : ""}`}
              >
                <NavLink activeClassName="is-active" to="/history">
                  <MenuIcon type="history" />
                </NavLink>
              </div>
              <div
                onClick={() => setTab(3)}
                className={`home__header ${tab === 3 ? "is-active" : ""}`}
              >
                <NavLink activeClassName="is-active" to="/heart">
                  <MenuIcon type="heart" />
                </NavLink>
              </div>
              <div
                onClick={() => setTab(4)}
                className={`home__header ${tab === 4 ? "is-active" : ""}`}
              >
                <NavLink activeClassName="is-active" to="/profile">
                  <MenuIcon type="profile" />
                </NavLink>
              </div>
            </header>
          )}
        </>
      )}
      {isSpinner && <SplashScreen />}
    </>
  );
}

export default App;
