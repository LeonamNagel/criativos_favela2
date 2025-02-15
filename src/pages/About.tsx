
const About = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="container py-16 max-w-4xl mx-auto">
        <div className="aspect-video bg-black/40 rounded-lg overflow-hidden mb-12">
          {/* Video embed placeholder */}
          <div className="w-full h-full flex items-center justify-center bg-black/60 text-white/40">
            Video em breve
          </div>
        </div>

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

          <div className="pt-4">
            <a
              href="/"
              className="inline-block px-6 py-3 bg-[#007F2D] hover:bg-[#006024] text-white font-semibold rounded-lg transition-colors"
            >
              Encontrar Profissionais
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
