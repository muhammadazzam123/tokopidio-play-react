import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, []);
  return (
    <div className="min-h-screen flex justify-center items-center">
      <p className="text-8xl">Page Not Found</p>
    </div>
  );
};

export default NotFound;
