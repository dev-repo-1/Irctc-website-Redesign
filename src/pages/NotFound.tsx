
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="text-center max-w-md glass rounded-2xl p-8 sm:p-10">
        <h1 className="text-8xl font-bold mb-4 text-primary">404</h1>
        <p className="text-xl text-foreground mb-6">
          The page you're looking for doesn't exist
        </p>
        <p className="text-muted-foreground mb-8">
          The page at <span className="font-mono text-foreground/75">{location.pathname}</span> may have been moved or deleted.
        </p>
        <Button asChild size="lg" className="w-full">
          <Link to="/" className="flex items-center justify-center">
            <ArrowLeft className="mr-2 h-5 w-5" />
            <span>Return to Home</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
