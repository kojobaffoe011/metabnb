import logo from "./logo.svg";
import "../src/styles/App.css";
import AppRouter from "./router/Approuter";
import { startIconLibrary } from "./components/icon/Icon";

startIconLibrary();

function App() {
  return <AppRouter />;
}
export default App;
