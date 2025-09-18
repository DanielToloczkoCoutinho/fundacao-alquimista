'use client';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import React from 'react';

interface LayerCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    children: React.ReactNode;
}

export const LayerCard: React.FC<LayerCardProps> = ({ title, description, icon, children }) => {
    return (
        <Card className="bg-card/50 purple-glow w-full max-w-7xl mx-auto mt-8">
            <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                    {icon}
                    {title}
                </CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {children}
                </div>
            </CardContent>
        </Card>
    );
};
