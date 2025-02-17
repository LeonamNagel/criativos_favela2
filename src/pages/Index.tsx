import { SearchBar } from "@/components/SearchBar";
import { ProfessionalCard } from "@/components/ProfessionalCard";
import { professionals } from "@/data/professionals";
import { useSearch } from "@/hooks/useSearch";
import { useAssets } from "@/hooks/useAssets";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const Index = () => {
  const {
    filters,
    setFilters,
    currentPage,
    setCurrentPage,
    totalPages,
    paginatedProfessionals
  } = useSearch(professionals);

  const { logo } = useAssets();
  const resultsRef = useRef<HTMLDivElement>(null);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    const yOffset = -100; // Ajuste este valor para controlar quanto espaço livre quer no topo
    const element = resultsRef.current;
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="pb-16 pt-16">
        <div className="container">
          <div className="space-y-8 text-center">
            <img
              src={logo}
              alt="Criativos Logo"
              className="mx-auto h-24 md:h-32"
            />
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight text-white">
                Talentos do Audiovisual
              </h2>
              <p className="text-xl text-gray-300">
                Encontre os melhores profissionais para o seu projeto
              </p>
            </div>
          </div>

          <div className="mt-12">
            <SearchBar filters={filters} onFiltersChange={setFilters} />
          </div>
        </div>
      </div>

      <main className="container pb-16">
        <div ref={resultsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 -mt-4">
          {paginatedProfessionals.map((professional) => (
            <ProfessionalCard
              key={professional.id}
              professional={professional}
            />
          ))}
        </div>

        {paginatedProfessionals.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              Nenhum profissional encontrado com os filtros selecionados.
            </p>
          </div>
        )}

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
      </main>
    </div>
  );
};

export default Index;
