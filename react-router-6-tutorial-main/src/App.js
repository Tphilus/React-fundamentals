import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import SingleProduct from "./pages/SingleProduct";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";
import ShareProductLayout from "./pages/ShareProductLayout";

function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      {/* <nav> our navbar </nav> */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="products" element={<ShareProductLayout />}>
            <Route path="/products" element={<Products />} />
            <Route path=":productId" element={<SingleProduct />} />
          </Route>

          <Route path="login" element={<Login setUser={setUser} />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      {/* <footer> our footer </footer> */}
    </BrowserRouter>
  );
}

export default App;
