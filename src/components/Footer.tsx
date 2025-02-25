import { useAssets } from "@/hooks/useAssets";

const Footer = () => {
  const { footer } = useAssets();

  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <img
            src={footer}
            alt="Parceiros"
            className="h-12 md:h-16 object-contain"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
