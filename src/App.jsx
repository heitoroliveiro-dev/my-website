import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./pages/Home";
import Colabsuit from "./pages/Colabsuit";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/colabsuit' element={<Colabsuit />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
