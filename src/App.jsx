import { Footer, Header } from "./Components";
import { Outlet } from "react-router-dom";
import ContextWrapper from "./Context/ContextWrapper";

function App() {
  return (
    <ContextWrapper>
      <Header />
      <Outlet />
      <Footer />
    </ContextWrapper>
  );
}

export default App;
