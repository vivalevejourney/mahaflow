import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGestor } from '@/contexts/GestorContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

/**
 * ProtectedRoute component that guards admin routes.
 * Redirects unauthenticated users to the login page.
 * 
 * NOTE: This is a client-side guard only. For production security,
 * implement server-side authentication with Supabase Auth.
 */
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useGestor();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/gestor-login', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  // Don't render anything while redirecting
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-10 h-10 border-3 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
