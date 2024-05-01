import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Layout.tsx";
import {Home} from "./pages/Home.tsx";
import {About} from "./pages/About.tsx";
import {NoPage} from "./pages/NoPage.tsx";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="*" element={<NoPage />} />
              </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
