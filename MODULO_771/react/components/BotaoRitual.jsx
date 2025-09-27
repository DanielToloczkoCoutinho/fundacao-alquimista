import React from 'react';
import { cva } from 'class-variance-authority';
import clsx from 'clsx';

const button = cva('px-4 py-2 rounded font-semibold', {
  variants: {
    intent: {
      primary: 'bg-indigo-600 text-white',
      secondary: 'bg-gray-200 text-black'
    }
  },
  defaultVariants: {
    intent: 'primary'
  }
});

export default function BotaoRitual({ intent = 'primary', children }) {
  return <button className={clsx(button({ intent }))}>{children}</button>;
}
