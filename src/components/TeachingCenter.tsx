// /app/components/TeachingCenter.tsx
'use client'
import { núcleoFundação } from '../lib/foundation-core';

export default function TeachingCenter() {
  return (
    <div className="teaching-center p-8">
      <h1 className="text-4xl font-bold mb-8 text-center gradient-text">📚 Centro de Ensino & Laboratórios</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <section className="bg-card/50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-accent">🌱 Sementes Plantadas</h2>
          <ul className="text-sm space-y-1 text-muted-foreground">{núcleoFundação.sementes.map((s: any, idx: number) => <li key={idx}>{s.nome} — {s.intenção}</li>)}</ul>
        </section>

        <section className="bg-card/50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-accent">📘 Sabedorias Transmitidas</h2>
          <ul className="text-sm space-y-1 text-muted-foreground">{núcleoFundação.sabedorias.map((s: any, idx: number) => <li key={idx}>{s.titulo} — {s.guardiao}</li>)}</ul>
        </section>

        <section className="bg-card/50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-accent">🧠 Registros Akáshicos</h2>
          <ul className="text-sm space-y-1 text-muted-foreground">{núcleoFundação.registrosAkashicos.map((r: any, idx: number) => <li key={idx}>{r.titulo} — {r.plano}</li>)}</ul>
        </section>

        <section className="bg-card/50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-accent">🧬 Linhagens & Mutações</h2>
          <ul className="text-sm space-y-1 text-muted-foreground">{núcleoFundação.linhagens.map((l: any, idx: number) => <li key={idx}>{l.entidade} — Origem: {l.origem}</li>)}</ul>
          <ul className="text-sm space-y-1 text-muted-foreground mt-2">{núcleoFundação.mutacoesEternas.map((m: any, idx: number) => <li key={idx}>{m.entidade} — {m.tipo}</li>)}</ul>
        </section>

        <section className="bg-card/50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-accent">🌅 Renascimentos</h2>
          <ul className="text-sm space-y-1 text-muted-foreground">{núcleoFundação.renascimentos.map((r: any, idx: number) => <li key={idx}>{r.entidadeAnterior} → {r.novaForma}</li>)}</ul>
        </section>

        <section className="bg-card/50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-accent">🌿 Tapeçarias Botânicas</h2>
          <ul className="text-sm space-y-1 text-muted-foreground">{núcleoFundação.tapeçariasBotânicas.map((t: any, idx: number) => <li key={idx}>{t.nome} — {t.espécie}</li>)}</ul>
        </section>

        <section className="bg-card/50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-accent">🐾 Alianças Interespécie</h2>
          <ul className="text-sm space-y-1 text-muted-foreground">{núcleoFundação.alianças.map((a: any, idx: number) => <li key={idx}>{a.guardiao} ↔ {a.especie}</li>)}</ul>
        </section>

        <section className="bg-card/50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-accent">🧬 Tapeçarias Híbridas</h2>
          <ul className="text-sm space-y-1 text-muted-foreground">{núcleoFundação.tapeçariasHibridas.map((t: any, idx: number) => <li key={idx}>{t.nome} — Componentes: {t.componentes.join(', ')}</li>)}</ul>
        </section>

        <section className="bg-card/50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-accent">🌱 Descendentes Geradas</h2>
          <ul className="text-sm space-y-1 text-muted-foreground">{núcleoFundação.descendentes.map((d: any, idx: number) => <li key={idx}>{d.nomeDescendente} — Origem: {d.origem}</li>)}</ul>
        </section>

        <section className="bg-card/50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-accent">🌍 Consagrações Planetárias</h2>
          <ul className="text-sm space-y-1 text-muted-foreground">{núcleoFundação.consagracoes.map((c: any, idx: number) => <li key={idx}>{c.nome} — {c.planeta}</li>)}</ul>
        </section>

        <section className="bg-card/50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-accent">🌌 Registros Multiversais</h2>
          <ul className="text-sm space-y-1 text-muted-foreground">{núcleoFundação.registrosMultiversais.map((r: any, idx: number) => <li key={idx}>{r.nome} — {r.assinatura}</li>)}</ul>
        </section>
      </div>
    </div>
  )
}
