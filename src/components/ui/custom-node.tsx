'use client';
import { motion } from 'framer-motion';
import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { cn } from '@/lib/utils';
import { Badge } from './badge';


function CustomNode({ data }: { data: any }) {
  const statusConfig = {
    ativo: {
      bg: 'bg-green-800/40',
      border: 'border-green-400/80',
      text: 'text-green-300',
      pulse: true
    },
    'em construção': {
      bg: 'bg-yellow-800/40',
      border: 'border-yellow-400/80',
      text: 'text-yellow-300',
      pulse: false
    },
    latente: {
      bg: 'bg-gray-800/40',
      border: 'border-gray-600/80',
      text: 'text-gray-400',
      pulse: false
    }
  };

  const currentStatus = statusConfig[data.status as keyof typeof statusConfig] || statusConfig.latente;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      whileHover={{ scale: 1.05, zIndex: 10, boxShadow: '0 0 20px rgba(255,255,255,0.1)' }}
      className={cn("text-white font-semibold border-2 rounded-lg backdrop-blur-sm overflow-hidden", currentStatus.bg, currentStatus.border)}
      style={{
        width: 200,
        height: 80,
      }}
    >
      <div className={cn("p-2 h-full flex flex-col justify-center items-center text-center", currentStatus.pulse ? "animate-pulse" : "")}>
        <div className="text-sm">{data.label}</div>
        <Badge variant="outline" className={cn("mt-2 text-xs", currentStatus.text)}>
            {data.status}
        </Badge>
      </div>

      <Handle type="target" position={Position.Top} className="!bg-teal-500" />
      <Handle type="source" position={Position.Bottom} className="!bg-teal-500" />
    </motion.div>
  );
}

export default memo(CustomNode);
