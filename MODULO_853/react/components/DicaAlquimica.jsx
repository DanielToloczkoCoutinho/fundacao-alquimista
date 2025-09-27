import * as Tooltip from '@radix-ui/react-tooltip';
import React from 'react';

export default function DicaAlquimica() {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className="px-4 py-2 bg-purple-600 text-white rounded">Passe o cursor</button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className="bg-black text-white px-2 py-1 rounded" sideOffset={5}>
            ✨ Sabedoria oculta revelada
            <Tooltip.Arrow className="fill-black" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
