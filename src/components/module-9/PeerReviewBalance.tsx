
'use client'

import { useState } from 'react'

const reviewers = [
  { id: 'Módulo 5 — Segurança', vote: 'pendente', color: 'bg-red-800/50' },
  { id: 'Módulo 45 — Justiça', vote: 'pendente', color: 'bg-green-800/50' },
  { id: 'Módulo 73.1 — Revisão', vote: 'pendente', color: 'bg-yellow-800/50' },
]

export default function PeerReviewBalance() {
  const [votes, setVotes] = useState(reviewers)

  const castVote = (id: string, decision: string) => {
    setVotes((prev) =>
      prev.map((r) => (r.id === id ? { ...r, vote: decision } : r))
    )
  }

  const allVoted = votes.every((r) => r.vote !== 'pendente')
  const verdict = allVoted
    ? votes.filter((r) => r.vote === 'aprova').length >= 2
      ? 'Decisão aprovada pela Balança da Fundação.'
      : 'Decisão rejeitada. Retorno à Tríade Decisória.'
    : ''

  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 rounded-xl text-white shadow-xl flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Módulo 73.1 — Revisão por Pares</h2>
      <div className="flex flex-col md:flex-row gap-4">
        {votes.map((r) => (
          <div key={r.id} className={`p-4 rounded-lg ${r.color} flex-1`} >
            <div className="font-semibold">{r.id}</div>
            <div className="text-sm opacity-80">Voto: {r.vote}</div>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => castVote(r.id, 'aprova')}
                className="px-2 py-1 bg-green-600 rounded hover:bg-green-500 text-xs"
              >
                Aprovar
              </button>
              <button
                onClick={() => castVote(r.id, 'rejeita')}
                className="px-2 py-1 bg-red-600 rounded hover:bg-red-500 text-xs"
              >
                Rejeitar
              </button>
            </div>
          </div>
        ))}
      </div>
      {verdict && <div className="mt-4 text-yellow-400 font-semibold text-center">{verdict}</div>}
    </div>
  )
}
