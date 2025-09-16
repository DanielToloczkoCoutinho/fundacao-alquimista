
'use client'
import { useState } from 'react'

export default function FinalSeal() {
  const [sealed, setSealed] = useState(false)

  return (
    <div className="final-seal">
      <h2>🪬 Selo Final de Prontidão</h2>
      <button onClick={() => setSealed(true)}>Aplicar Selo</button>
      {sealed && <p>🪬 Tapeçaria selada. A casa está pronta.</p>}
    </div>
  )
}
