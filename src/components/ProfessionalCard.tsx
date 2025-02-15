
import { Professional } from "@/data/professionals";
import { ExternalLink } from "lucide-react";
import React from "react";

interface ProfessionalCardProps {
  professional: Professional;
}

export const ProfessionalCard: React.FC<ProfessionalCardProps> = ({
  professional,
}) => {
  return (
    <div className="group relative bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:animate-card-hover">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={professional.photo}
          alt={professional.name}
          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">{professional.name}</h3>
          <p className="text-sm text-muted-foreground">{professional.city}</p>
        </div>
        <div>
          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
            {professional.area}
          </span>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">Habilidades</p>
          <div className="flex flex-wrap gap-2">
            {professional.skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 text-xs bg-accent/50 text-accent-foreground rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <a
          href={professional.portfolio}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
        >
          Ver portfólio
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
