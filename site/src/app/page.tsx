const LIEN_PAIEMENT = "#";
const EMAIL = "lesmotsquongardepoursoi@gmail.com";

const benefices = [
  {
    t: "Zéro découpage",
    d: "Tu déposes ton live, ton podcast ou ta formation. Les moments forts sont repérés pour toi.",
  },
  {
    t: "Prêts à publier",
    d: "Format vertical, 30 à 60 secondes, sous-titres incrustés et un titre proposé pour chaque clip.",
  },
  {
    t: "60 clips par mois",
    d: "De quoi publier tous les jours sur TikTok, Reels et Shorts sans y passer tes soirées.",
  },
];

const etapes = [
  "Tu commences en un clic.",
  "Tu m’envoies le lien ou le fichier de ta vidéo par email.",
  "Tu reçois tes clips sous 48 h, prêts à publier.",
];

const faq = [
  {
    q: "Est-ce que ça marche pour mon contenu ?",
    r: "Oui si tu publies du format long : podcast, live, formation, interview. Si ton contenu ne s’y prête pas, tu es remboursé.",
  },
  {
    q: "Combien de temps ça me prend ?",
    r: "Deux minutes : tu m’envoies ton lien. Tes clips arrivent sous 48 h.",
  },
  {
    q: "Et si je veux arrêter ?",
    r: "Tu résilies quand tu veux, en un message. Pas de durée minimale. Dans les 14 premiers jours, tu es remboursé.",
  },
  {
    q: "À quoi sert exactement ce que je paie ?",
    r: "À 60 clips verticaux par mois : repérage des moments forts, découpe, sous-titres et titres proposés.",
  },
];

function Bouton({ className = "" }: { className?: string }) {
  return (
    <a
      href={LIEN_PAIEMENT}
      className={`block rounded-2xl bg-signal px-6 py-4 text-center text-lg font-bold text-encre active:translate-y-px ${className}`}
    >
      Commencer
    </a>
  );
}

export default function Page() {
  return (
    <main className="mx-auto max-w-xl px-5 pb-32 pt-6">
      <p className="font-titre text-xl font-extrabold tracking-tight">
        Clipperie <span className="text-sm font-medium opacity-60">par EasySelf</span>
      </p>

      <section className="pt-10">
        <h1 className="font-titre text-5xl font-extrabold leading-[1.02] tracking-tight">
          Ton live de 2&nbsp;heures devient{" "}
          <span className="text-signal">30 clips verticaux.</span>
        </h1>
        <p className="mt-5 text-lg leading-relaxed">
          Dépose ta vidéo. Reçois des clips de 30 à 60&nbsp;secondes, sous-titrés, prêts à publier.
        </p>
        <Bouton className="mt-7" />
        <p className="mt-3 text-center text-sm">
          49&nbsp;€/mois · sans engagement · remboursé sous 14&nbsp;jours
        </p>
      </section>

      <section className="mt-14 rounded-3xl bg-encre p-6 text-creme">
        <p className="font-titre text-2xl font-extrabold leading-tight">
          Découper une seule vidéo prend une journée entière.
        </p>
        <p className="mt-3 leading-relaxed opacity-90">
          Alors tu ne le fais pas, et le format court, celui qui amène de nouvelles audiences,
          reste vide.
        </p>
      </section>

      <section className="mt-14 space-y-6">
        {benefices.map((b) => (
          <div key={b.t} className="border-l-4 border-signal pl-4">
            <h2 className="font-titre text-xl font-bold">{b.t}</h2>
            <p className="mt-1 leading-relaxed">{b.d}</p>
          </div>
        ))}
      </section>

      <section className="mt-14">
        <h2 className="font-titre text-2xl font-extrabold">Comment ça se passe</h2>
        <ol className="mt-4 space-y-3">
          {etapes.map((e, i) => (
            <li key={e} className="flex gap-3">
              <span className="font-titre text-2xl font-extrabold text-signal">{i + 1}</span>
              <span className="pt-1">{e}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14 rounded-3xl border-2 border-encre p-6">
        <p className="font-titre text-5xl font-extrabold">
          49&nbsp;€<span className="text-lg font-bold">/mois</span>
        </p>
        <p className="mt-1">60 clips par mois, soit environ 1,60&nbsp;€ par jour.</p>
        <div className="mt-5 rounded-2xl bg-encre p-4 text-creme">
          <p className="font-bold">Satisfait ou remboursé, 14 jours.</p>
          <p className="mt-1 text-sm leading-relaxed">
            Pas convaincu ? Écris à {EMAIL} dans les 14 jours suivant ton paiement. Remboursement
            intégral sous 5 jours ouvrés, sans justification.
          </p>
        </div>
        <Bouton className="mt-5" />
        <p className="mt-3 text-center text-sm">Sans engagement, résiliable à tout moment.</p>
      </section>

      <section className="mt-14">
        <h2 className="font-titre text-2xl font-extrabold">Questions fréquentes</h2>
        <div className="mt-4 divide-y divide-encre/20 border-y border-encre/20">
          {faq.map((f) => (
            <details key={f.q} className="py-4">
              <summary className="cursor-pointer font-bold">{f.q}</summary>
              <p className="mt-2 leading-relaxed">{f.r}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="mt-14 text-sm opacity-70">
        <p>© EasySelf · {EMAIL}</p>
      </footer>

      <div className="fixed inset-x-0 bottom-0 border-t border-encre/10 bg-creme/95 p-3 md:hidden">
        <Bouton />
      </div>
    </main>
  );
}
