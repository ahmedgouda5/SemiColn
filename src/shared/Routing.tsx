import Login from "@/App/Auth/Login"
import Signup from "@/App/Auth/Signup"
import { Route, Routes } from "react-router-dom"
const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<h1 className="text-3xl font-bold underline">Home</h1>} />
            <Route path="/Auth/Signup" element={<Signup />} />
            <Route path="/Auth/Login" element={<Login />} />
        </Routes>
    </div>
  )
}

export default Routing