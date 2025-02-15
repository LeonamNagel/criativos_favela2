
import React from "react";
import { areas, cities } from "@/data/professionals";
import { Filters } from "@/hooks/useSearch";
import { Search } from "lucide-react";

interface SearchBarProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  filters,
  onFiltersChange,
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar por nome ou habilidade..."
          className="w-full h-12 pl-12 pr-4 rounded-lg border border-gray-200 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-200"
          value={filters.search}
          onChange={(e) =>
            onFiltersChange({ ...filters, search: e.target.value })
          }
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      </div>
      <div className="flex gap-4">
        <select
          className="flex-1 h-12 px-4 rounded-lg border border-gray-200 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-200"
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
          className="flex-1 h-12 px-4 rounded-lg border border-gray-200 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-200"
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
