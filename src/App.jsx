import Home from "./Home";
import useScrollAnimations from "./hooks/useScrollAnimations";

function App() {
  useScrollAnimations({
    duration: 900,
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    offset: 60,
    once: true,
  });

  return <Home />;
}

export default App;
