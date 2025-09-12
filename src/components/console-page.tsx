'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Input } from './ui/input';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { disciplines, Discipline } from '@/lib/disciplines-data';
import DisciplineCard from '@/components/discipline-card';

const categories = ['Todas', 'Ciência', 'Arte', 'Espiritualidade', 'Tecnologia'];

const ConsolePage = () => {
    const [activeCategory, setActiveCategory] = useState('Todas');
    const [searchTerm, setSearchTerm] = useState('');

    const handleCategoryClick = (category: string) => {
        setActiveCategory(category);
    };

    const filteredDisciplines = disciplines.filter(discipline => {
        const categoryMatch = activeCategory === 'Todas' || discipline.category === activeCategory;
        const searchMatch = discipline.name.toLowerCase().includes(searchTerm.toLowerCase());
        return categoryMatch && searchMatch;
    });

    return (
        <div className="building civilizations active" id="civilizations">
            <div className="civilizations-header">
                <h2>Portal Planetário</h2>
                <div className="search-box">
                    <Search className="text-gray-400" />
                    <Input 
                        type="text" 
                        placeholder="Buscar disciplina..." 
                        className="border-none shadow-none focus-visible:ring-0"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            
            <div className="categories">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={cn('category-btn', activeCategory === category && 'active')}
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            
            <div className="disciplines-grid">
                {filteredDisciplines.map((discipline) => (
                    <DisciplineCard key={discipline.id} discipline={discipline} />
                ))}
            </div>
        </div>
    );
};

export default ConsolePage;
