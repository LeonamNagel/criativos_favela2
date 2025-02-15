import { useState, useMemo } from "react";
import { Professional } from "@/data/professionals";

export type Filters = {
  nameSearch: string;
  skillSearch: string;
  city: string;
  area: string;
};

export const useSearch = (professionals: Professional[]) => {
  const [filters, setFilters] = useState<Filters>({
    nameSearch: "",
    skillSearch: "",
    city: "",
    area: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const professionalsPerPage = 6;

  const filteredProfessionals = useMemo(() => {
    return professionals.filter((professional) => {
      const matchesName =
        !filters.nameSearch ||
        professional.name.toLowerCase().includes(filters.nameSearch.toLowerCase());

      const matchesSkill =
        !filters.skillSearch ||
        professional.skills.some((skill) =>
          skill.toLowerCase().includes(filters.skillSearch.toLowerCase())
        );

      const matchesCity = !filters.city || professional.city === filters.city;
      const matchesArea = !filters.area || professional.area.includes(filters.area);

      return matchesName && matchesSkill && matchesCity && matchesArea;
    });
  }, [professionals, filters]);

  const randomizedProfessionals = useMemo(() => {
    return [...filteredProfessionals].sort(() => Math.random() - 0.5);
  }, [filteredProfessionals]);

  const paginatedProfessionals = useMemo(() => {
    const startIndex = (currentPage - 1) * professionalsPerPage;
    const endIndex = startIndex + professionalsPerPage;
    return randomizedProfessionals.slice(startIndex, endIndex);
  }, [randomizedProfessionals, currentPage]);

  const totalPages = Math.ceil(randomizedProfessionals.length / professionalsPerPage);

  return {
    filters,
    setFilters,
    currentPage,
    setCurrentPage,
    totalPages,
    paginatedProfessionals,
  };
};
