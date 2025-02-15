
import { SearchBar } from "@/components/SearchBar";
import { ProfessionalCard } from "@/components/ProfessionalCard";
import { professionals } from "@/data/professionals";
import { useSearch } from "@/hooks/useSearch";

const Index = () => {
  const { filters, setFilters, filteredProfessionals } = useSearch(professionals);

  return (
    <div className="min-h-screen bg-background">
      <div className="hero-section relative pb-32 pt-16">
        <div className="container relative z-10">
          <div className="space-y-8 text-center">
            <img
              src="/public/lovable-uploads/ebdb18ee-c901-4ed5-8a12-d9437ac467a1.png"
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

      <main className="container -mt-16 relative z-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProfessionals.map((professional) => (
            <ProfessionalCard
              key={professional.id}
              professional={professional}
            />
          ))}
        </div>

        {filteredProfessionals.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              Nenhum profissional encontrado com os filtros selecionados.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
