import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { areas, cities, allSkills } from "@/data/professionals";
import { Filters } from "@/hooks/useSearch";
import { Search } from "lucide-react";

interface SkillsListProps {
  skills: string[];
  onSelect: (skill: string) => void;
  containerRef: React.RefObject<HTMLDivElement>;
}

const SkillsList: React.FC<SkillsListProps> = ({ skills, onSelect, containerRef }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div
      className="absolute overflow-y-auto rounded-lg bg-black/90 border border-white/10 backdrop-blur-sm z-[9999]"
      style={{
        top: "100%",
        left: 0,
        width: "100%",
        marginTop: "0.25rem",
        height: "144px"
      }}
    >
      {skills.length > 0 ? (
        skills.map((skill) => (
          <button
            key={skill}
            className="w-full h-12 px-4 py-2 text-left text-white hover:bg-[#007F2D]/20 transition-colors duration-200"
            onClick={() => onSelect(skill)}
          >
            {skill}
          </button>
        ))
      ) : (
        <div className="h-12 px-4 py-2 text-gray-400">
          Nenhuma habilidade encontrada
        </div>
      )}
    </div>,
    containerRef.current || document.body
  );
};

interface SearchBarProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  filters,
  onFiltersChange,
}) => {
  const [showSkillsList, setShowSkillsList] = useState(false);
  const [filteredSkills, setFilteredSkills] = useState<string[]>([]);
  const skillsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Filter skills based on input
    const filtered = allSkills.filter((skill) =>
      skill.toLowerCase().includes(filters.skillSearch.toLowerCase())
    );
    setFilteredSkills(filtered);
  }, [filters.skillSearch]);

  useEffect(() => {
    // Close skills list when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        skillsContainerRef.current &&
        !skillsContainerRef.current.contains(event.target as Node)
      ) {
        setShowSkillsList(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSkillClick = (skill: string) => {
    onFiltersChange({ ...filters, skillSearch: skill });
    setShowSkillsList(false);
  };

  const handleInputFocus = () => {
    setShowSkillsList(true);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-4 bg-black/40 backdrop-blur-sm rounded-lg">
      <div className="space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar por nome..."
            className="w-full h-12 pl-12 pr-4 rounded-lg bg-black/60 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#007F2D] focus:ring-2 focus:ring-[#007F2D]/20 transition-all duration-200"
            value={filters.nameSearch}
            onChange={(e) =>
              onFiltersChange({ ...filters, nameSearch: e.target.value })
            }
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
        <div className="relative" ref={skillsContainerRef}>
          <input
            type="text"
            placeholder="Buscar por habilidade..."
            className="w-full h-12 pl-12 pr-4 rounded-lg bg-black/60 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#007F2D] focus:ring-2 focus:ring-[#007F2D]/20 transition-all duration-200"
            value={filters.skillSearch}
            onChange={(e) =>
              onFiltersChange({ ...filters, skillSearch: e.target.value })
            }
            onFocus={handleInputFocus}
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          {showSkillsList && (
            <SkillsList
              skills={filteredSkills}
              onSelect={handleSkillClick}
              containerRef={skillsContainerRef}
            />
          )}
        </div>
      </div>
      <div className="flex gap-4">
        <select
          className="flex-1 h-12 px-4 rounded-lg bg-black/60 border border-white/10 text-white focus:outline-none focus:border-[#007F2D] focus:ring-2 focus:ring-[#007F2D]/20 transition-all duration-200"
          value={filters.city}
          onChange={(e) => onFiltersChange({ ...filters, city: e.target.value })}
        >
          <option value="">Todas as cidades</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        <select
          className="flex-1 h-12 px-4 rounded-lg bg-black/60 border border-white/10 text-white focus:outline-none focus:border-[#007F2D] focus:ring-2 focus:ring-[#007F2D]/20 transition-all duration-200"
          value={filters.area}
          onChange={(e) => onFiltersChange({ ...filters, area: e.target.value })}
        >
          <option value="">Todas as áreas</option>
          {areas.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
