
import { useState, useMemo } from "react";
import { Professional } from "@/data/professionals";

export type Filters = {
  search: string;
  city: string;
  area: string;
};

export const useSearch = (professionals: Professional[]) => {
  const [filters, setFilters] = useState<Filters>({
    search: "",
    city: "",
    area: "",
  });

  const filteredProfessionals = useMemo(() => {
    return professionals.filter((professional) => {
      const matchesSearch =
        !filters.search ||
        professional.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        professional.skills.some((skill) =>
          skill.toLowerCase().includes(filters.search.toLowerCase())
        );

      const matchesCity = !filters.city || professional.city === filters.city;
      const matchesArea = !filters.area || professional.area === filters.area;

      return matchesSearch && matchesCity && matchesArea;
    });
  }, [professionals, filters]);

  return {
    filters,
    setFilters,
    filteredProfessionals,
  };
};
