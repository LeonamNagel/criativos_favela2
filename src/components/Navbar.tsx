import { Link, useLocation } from "react-router-dom";
export const Navbar = () => {
  const location = useLocation();
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="container">
        <div className="flex items-center justify-end h-16">
          <div className="flex space-x-1">
            <Link to="/" className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname === "/" ? "bg-[#007F2D] text-white" : "text-gray-300 hover:text-white hover:bg-white/10"}`}>
              Encontrar profissionais
            </Link>
            <Link to="/sobre" className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname === "/sobre" ? "bg-[#007F2D] text-white" : "text-gray-300 hover:text-white hover:bg-white/10"}`}>
              Saiba Mais
            </Link>
          </div>
        </div>
      </div>
    </nav>;
};