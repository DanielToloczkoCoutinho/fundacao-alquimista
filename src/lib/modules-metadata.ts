
export type ModuleMeta = {
  code: string;
  emoji: string;
  href: string;
};

export const modulesMetadata: ModuleMeta[] = [
  // Núcleo (exemplos)
  { code: 'M9', emoji: '💓', href: '/module-9' },

  // Civilizações M500–M589
  ...Array.from({ length: 90 }, (_, i) => {
    const id = 500 + i;
    return {
      code: `M${id}`,
      emoji: '✨',
      href: `/module-${id}`
    };
  }),

  // Conselho Cósmico
  { code: 'M600', emoji: '👑', href: '/module-600' }
];
