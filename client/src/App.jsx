import React, { useContext } from "react";
import { Route, Routes, useSearchParams } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import ProtectedRoute from "./ProtectedRoutes";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import { UserContext } from "./context/userContext";
import ArticlesPage from "./pages/Dashboard/Articles/ArticlesPage";
import VideosPage from "./pages/Dashboard/Videos/VideosPage";
import DetailsPage from "./pages/Dashboard/Details/DetailsPage";
import CheckoutStatusPage from "./pages/CheckoutStatus/CheckoutStatusPage";

function App() {
 const { user, loading, error } = useContext(UserContext);
 const GetCheckoutStatusParams = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  return <CheckoutStatusPage sessionId={sessionId} />;
 };

 return (
  <Routes>
   <Route path="/" element={<WelcomePage user={user} />} />
   <Route path="/checkout/status" element={<GetCheckoutStatusParams />} />
   <Route element={<ProtectedRoute />}>
    <Route
     path="/dashboard"
     element={<DashboardPage user={user} loading={loading} />}
    />
    <Route
     path="/dashboard/article"
     element={<ArticlesPage user={user} loading={loading} />}
    />
    <Route
     path="/dashboard/video"
     element={<VideosPage user={user} loading={loading} />}
    />
    <Route
     path="/dashboard/:type/:id"
     element={<DetailsPage user={user} loading={loading} />}
    />
   </Route>
  </Routes>
 );
}

export default App;
