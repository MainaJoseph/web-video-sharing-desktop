
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import './App.css'
import ControlLayer from "./layouts/ControlLayer";
import AuthButton from "./components/global/AuthButton";


const client = new QueryClient()

function App() {
 

  return (
    <QueryClientProvider client={client}>
      <ControlLayer>
        <AuthButton />
      </ControlLayer>

      <Toaster />
      
    </QueryClientProvider>
  );
}

export default App
