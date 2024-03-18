import AppRouter from "./router/AppRouter";
import { AuthProvider } from "./context/AuthProvider";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <AuthProvider>
        <AppRouter />
        <ToastContainer />
      </AuthProvider>
    </div>
  );
}

export default App;
