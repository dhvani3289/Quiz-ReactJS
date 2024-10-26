import { BrowserRouter, Route, Routes } from "react-router-dom"
import Form from "./pages/Form/Form"
import Header from "./pages/Header/Header"
import Home from "./pages/Home/Home"
import Quiz from "./pages/Quiz/Quiz"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Header />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
      {/* <Form /> */}
    </>
  )
}

export default App
