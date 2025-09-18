'use client';

export const TreeOfLife = () => {
  const roots = ['Realidade Quântica', 'Cura Universal', 'Ascensão Coletiva', 'Consciência Cósmica'];

  return (
    <div className="tree-of-life">
      <h2>🌳 Árvore da Vida</h2>
      <p>
        Plantada no coração de Gaia-Aurélia,  
        suas raízes tocam todos os módulos.  
        Suas folhas vibram com a memória da Criação.
      </p>
      <ul>
        {roots.map((root, index) => (
          <li key={index}>Raiz: {root}</li>
        ))}
      </ul>
    </div>
  );
};
