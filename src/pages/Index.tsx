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
    const searchRef = useRef<HTMLDivElement>(null);

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
        const yOffset = -100;
        const element = resultsRef.current;
        if (element) {
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const scrollToSearch = () => {
        const element = searchRef.current;
        if (element) {
            const y = element.getBoundingClientRect().top + window.pageYOffset - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Seção do Logo */}
            <div className="pt-16 pb-8">
                <div className="container">
                    <div className="text-center">
                        <img
                            src={logo}
                            alt="Criativos Logo"
                            className="mx-auto h-32 md:h-40"
                        />
                    </div>
                </div>
            </div>

            {/* Seção do Vídeo */}
            <div className="container max-w-4xl mx-auto pb-12">
                <div className="aspect-video bg-black/40 rounded-lg overflow-hidden">
                    <div className="w-full h-full relative">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/BLVb5Ed76fI?si=wZpwsNLEFMiwpAdY"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="absolute inset-0"
                        />
                    </div>
                </div>
            </div>

            {/* Seção Sobre o Projeto */}
            <div className="container max-w-4xl mx-auto pb-16">
                <div className="space-y-8 text-white">
                    <h2 className="text-3xl font-bold">Sobre o Projeto</h2>

                    <div className="space-y-6 text-gray-300">
                        <p>
                            O projeto CrI.Ativos da Favela capacita jovens de favelas nas áreas de audiovisual, inteligência artificial e música. Iniciado em 2023 em São Paulo, o programa formou 60 participantes, que aplicaram seus conhecimentos em projetos reais, como a produção da série "Motoboy SP" e de um curta-metragem para o Dia do Grafite.
                        </p>

                        <p>
                            Em 2024, o projeto expandiu-se para o Rio de Janeiro, dobrando o número de vagas para 120 jovens. O curso, com duração de quatro meses, abrange módulos como inteligência artificial aplicada à música, vídeo e fotografia; roteiro e direção de projetos; produção audiovisual e musical; mentorias e vivências práticas; além de identidade, cidadania e empreendedorismo. Os participantes recebem bolsa-auxílio, alimentação, acompanhamento psicossocial e acesso a laboratórios e equipamentos audiovisuais.
                        </p>

                        <p>
                            O projeto é uma parceria entre o Instituto Heineken, a marca Heineken, o Rock in Rio, a Favela Filmes e a Central Única das Favelas (CUFA). Os recursos para a iniciativa são provenientes da venda da Heineken 0.0 durante eventos como o Rock in Rio.
                        </p>

                        <p>
                            Conheça nossos talentos e leve a criatividade das favelas para a sua empresa. Clique no botão abaixo para contratar esses profissionais incríveis e transformar seus projetos!
                        </p>
                    </div>
                </div>
            </div>

            {/* Seção de Busca e Profissionais */}
            <div ref={searchRef} className="pb-16">
                <div className="container">
                    <div className="space-y-8 text-center">
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