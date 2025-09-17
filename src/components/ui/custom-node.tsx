'use client';
import { motion } from 'framer-motion';
import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

function CustomNode({ data }: { data: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: [1, 1.02, 1] }}
      transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
      whileHover={{ scale: 1.05, zIndex: 10 }}
      className="flex items-center justify-center h-full rounded-lg"
    >
      <Handle type="target" position={Position.Top} className="!bg-teal-500" />
      <div className="text-center font-bold text-sm text-white p-2">
        {data.label}
      </div>
      <Handle type="source" position={Position.Bottom} className="!bg-teal-500" />
    </motion.div>
  );
}

export default memo(CustomNode);
