'use client';
import { motion } from 'framer-motion';
import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { cn } from '@/lib/utils';
import { Badge } from './badge';


function CustomNode({ data }: { data: any }) {
  const statusColorClass = 
    data.status === 'ativo' ? 'border-green-400/80 bg-green-900/40' :
    data.status === 'em construção' ? 'border-yellow-400/80 bg-yellow-900/40' :
    'border-gray-600/80 bg-gray-800/40';

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      whileHover={{ scale: 1.05, zIndex: 10, boxShadow: '0 0 20px rgba(255,255,255,0.1)' }}
      className={cn("text-white font-semibold border-2 rounded-lg backdrop-blur-sm overflow-hidden", statusColorClass)}
      style={{
        width: 200,
        height: 80,
      }}
    >
      <div className="p-2 h-full flex flex-col justify-center items-center text-center">
        {data.label}
        <Badge variant="outline" className={cn("mt-2 text-xs",
            data.status === 'ativo' ? 'text-green-300' :
            data.status === 'em construção' ? 'text-yellow-300' :
            'text-gray-400'
        )}>{data.status}</Badge>
      </div>

      <Handle type="target" position={Position.Top} className="!bg-teal-500" />
      <Handle type="source" position={Position.Bottom} className="!bg-teal-500" />
    </motion.div>
  );
}

export default memo(CustomNode);
