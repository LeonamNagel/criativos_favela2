
import { SearchBar } from "@/components/SearchBar";
import { ProfessionalCard } from "@/components/ProfessionalCard";
import { professionals } from "@/data/professionals";
import { useSearch } from "@/hooks/useSearch";

const Index = () => {
  const { filters, setFilters, filteredProfessionals } = useSearch(professionals);

  return (
    <div className="min-h-screen bg-background">
      <main className="container py-8 md:py-12 animate-fade-in">
        <div className="space-y-4 text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight">
            Talentos do Audiovisual
          </h1>
          <p className="text-xl text-muted-foreground">
            Encontre os melhores profissionais para o seu projeto
          </p>
        </div>

        <SearchBar filters={filters} onFiltersChange={setFilters} />

        <div className="mt-12">
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
        </div>
      </main>
    </div>
  );
};

export default Index;
