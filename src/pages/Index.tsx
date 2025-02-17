import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { professionals } from "@/data/professionals";
import { ProfessionalCard } from "@/components/ProfessionalCard";

const Index = () => {
  const resultsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center mb-12">
          <img
            src="/logos/criativos-logo.png"
            alt="Criativos Logo"
            className="w-48 h-auto mb-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
