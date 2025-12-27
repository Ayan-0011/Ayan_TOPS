import { useUser } from "@clerk/clerk-react";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {
  const { isSignedIn, user } = useUser();

  if (!isSignedIn) return ;

  if (user?.publicMetadata?.role !== "admin") {
    return <Navigate to="/" />;
    


  }

  return children;
}

export default AdminRoute;


