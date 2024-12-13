import { RootState } from "@/store/store"
import { ReactNode } from "react";
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }: { children: ReactNode }) {
    const user = useSelector((state: RootState) => state.user);

    if (user.user) {
        return <Navigate to="/login" />;
    } else {
        return <>{children}</>;
    }
}

export default ProtectedRoute