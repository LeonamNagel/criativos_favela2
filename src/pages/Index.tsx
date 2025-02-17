import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { professionals } from "@/data/professionals";
import { ProfessionalCard } from "@/components/ProfessionalCard";
import { SearchBar } from "@/components/SearchBar";
import { useSearch } from "@/hooks/useSearch";

const Index = () => {
  const resultsRef = useRef<HTMLDivElement>(null);
  const {
    filters,
    setFilters,
    currentPage,
    setCurrentPage,
    totalPages,
    paginatedProfessionals
  } = useSearch(professionals);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    const yOffset = -100;
    const element = resultsRef.current;
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center mb-12">
          <img
            src="/logos/criativos-logo.png"
            alt="Criativos Logo"
            className="w-48 h-auto mb-8"
          />
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white">
              Talentos do Audiovisual
            </h2>
            <p className="text-xl text-gray-300">
              Encontre os melhores profissionais para o seu projeto
            </p>
          </div>
        </div>

        <div className="mb-12">
          <SearchBar filters={filters} onFiltersChange={setFilters} />
        </div>

        <div ref={resultsRef}>
          {paginatedProfessionals.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedProfessionals.map((professional) => (
                <ProfessionalCard
                  key={professional.id}
                  professional={professional}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-300">
                Nenhum profissional encontrado com os filtros selecionados.
              </p>
            </div>
          )}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 hover:border-[#007F2D]/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <span className="text-white">
              Página {currentPage} de {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 hover:border-[#007F2D]/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
