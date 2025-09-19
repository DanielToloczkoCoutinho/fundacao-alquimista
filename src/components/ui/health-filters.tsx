'use client';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { modulesMetadata } from "@/lib/modules-metadata";

const categories = [...new Set(modulesMetadata.map(m => m.category))];

interface HealthFiltersProps {
  filters: { search: string; category: string; status: string; sortBy: string };
  onFilterChange: (filters: { search: string; category: string; status: string; sortBy: string }) => void;
}

export default function HealthFilters({ filters, onFilterChange }: HealthFiltersProps) {
  const handleInputChange = (field: keyof typeof filters, value: string) => {
    onFilterChange({ ...filters, [field]: value });
  };

  return (
    <div className="flex flex-wrap gap-4 items-center p-4 bg-card/50 rounded-lg mb-4 purple-glow">
      <div className="relative flex-grow min-w-[200px]">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Buscar módulo..." 
          className="pl-9"
          value={filters.search}
          onChange={e => handleInputChange('search', e.target.value)}
        />
      </div>
      <Select value={filters.category} onValueChange={value => handleInputChange('category', value)}>
        <SelectTrigger className="flex-grow min-w-[180px]">
          <SelectValue placeholder="Categoria" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todas as Categorias</SelectItem>
          {categories.map(cat => <SelectItem key={cat} value={cat}>{cat}</SelectItem>)}
        </SelectContent>
      </Select>
      <Select value={filters.status} onValueChange={value => handleInputChange('status', value)}>
        <SelectTrigger className="flex-grow min-w-[150px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos os Status</SelectItem>
          <SelectItem value="healthy">Saudável</SelectItem>
          <SelectItem value="warning">Alerta</SelectItem>
          <SelectItem value="critical">Crítico</SelectItem>
        </SelectContent>
      </Select>
      <Select value={filters.sortBy} onValueChange={value => handleInputChange('sortBy', value)}>
        <SelectTrigger className="flex-grow min-w-[150px]">
          <SelectValue placeholder="Ordenar por" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="name">Nome</SelectItem>
          <SelectItem value="coherence">Coerência</SelectItem>
          <SelectItem value="status">Status</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
