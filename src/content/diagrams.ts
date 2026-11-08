// Schémas de la page Agents IA. Étapes vérifiées dans le code :
// - chaîne GtS : branches w1/w2/w3, QA Playwright, avance rapide, gts-fusion-sure.sh (préversion, contrôles,
//   retour arrière, refus des migrations non additives) ;
// - steam-roblox-agents : src/sra/graph.py (collector -> roblox_scout -> analyst <-> critic (max_revisions = 2)
//   -> scorer -> reporter), journal.jsonl.
// Les fenêtres `dots` ([début, fin] en % de la période) doivent exister en @keyframes fd-<début>-<fin> dans global.css.
import type { Lang } from "./site";

export type FlowBox = {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string | string[];
  lines?: string[];
  kind?: "accent" | "bad" | "soft";
};
export type FlowArrow = {
  d: string;
  kind?: "bad" | "muted";
  dashed?: boolean;
  end?: "none";
  dots?: [number, number][];
};
export type Layout = {
  vb: string;
  size: number;
  boxes: FlowBox[];
  arrows: FlowArrow[];
  labels?: { x: number; y: number; text: string; kind?: "bad" | "accent"; anchor?: "start" | "middle" | "end" }[];
  blocks?: { x: number; y: number }[];
};
export type Diagram = { h: Layout; v: Layout };

const GTS_T = {
  fr: {
    agent: "Agent",
    qa: "QA Playwright",
    qaL: "avant fusion",
    merge: "Fusion",
    mergeL: "avance rapide",
    rel: "Mise en prod",
    relL: ["préversion", "contrôles", "retour arrière auto"],
    prod: "Prod",
    guard: ["Migration", "destructive"],
    guardOne: "Migration destructive",
    guardL: "DROP, RENAME…",
    refused: "refusée",
  },
  en: {
    agent: "Agent",
    qa: "Playwright QA",
    qaL: "before merge",
    merge: "Merge",
    mergeL: "fast-forward",
    rel: "Release script",
    relL: ["preview", "checks", "auto rollback"],
    prod: "Production",
    guard: ["Destructive", "migration"],
    guardOne: "Destructive migration",
    guardL: "DROP, RENAME…",
    refused: "rejected",
  },
};

export function gtsChain(lang: Lang): Diagram {
  const t = GTS_T[lang];
  const agent = (n: number, x: number, y: number, w: number, h: number): FlowBox => ({
    x,
    y,
    w,
    h,
    title: `${t.agent} w${n}`,
    lines: ["Claude Code"],
  });
  return {
    h: {
      vb: "-2 0 964 320",
      size: 16,
      boxes: [
        agent(1, 0, 16, 130, 60),
        agent(2, 0, 106, 130, 60),
        agent(3, 0, 196, 130, 60),
        { x: 175, y: 96, w: 150, h: 80, title: t.qa, lines: [t.qaL] },
        { x: 370, y: 96, w: 140, h: 80, title: t.merge, lines: [t.mergeL] },
        { x: 555, y: 66, w: 190, h: 140, title: t.rel, lines: t.relL },
        { x: 790, y: 106, w: 170, h: 60, title: t.prod, lines: ["gajintosensei.com"], kind: "accent" },
        { x: 300, y: 252, w: 220, h: 60, title: t.guardOne, lines: [t.guardL], kind: "bad" },
      ],
      arrows: [
        { d: "M130 46 H152 V136 H171", dots: [[0, 24]] },
        { d: "M130 136 H171", dots: [[4, 24]] },
        { d: "M130 226 H152 V136 H171", dots: [[0, 24]] },
        { d: "M325 136 H366", dots: [[30, 44]] },
        { d: "M510 136 H551", dots: [[48, 62]] },
        { d: "M745 136 H786", dots: [[78, 92]] },
        { d: "M520 282 H650 V238", kind: "bad", end: "none", dots: [[30, 56]] },
      ],
      blocks: [{ x: 650, y: 226 }],
      labels: [{ x: 668, y: 286, text: t.refused, kind: "bad", anchor: "start" }],
    },
    v: {
      vb: "0 0 360 494",
      size: 14,
      boxes: [
        agent(1, 8, 8, 104, 50),
        agent(2, 128, 8, 104, 50),
        agent(3, 248, 8, 104, 50),
        { x: 90, y: 96, w: 180, h: 54, title: t.qa, lines: [t.qaL] },
        { x: 8, y: 188, w: 170, h: 54, title: t.merge, lines: [t.mergeL] },
        { x: 196, y: 180, w: 156, h: 76, title: t.guard, lines: [t.guardL], kind: "bad" },
        { x: 8, y: 290, w: 210, h: 104, title: t.rel, lines: t.relL },
        { x: 8, y: 430, w: 210, h: 56, title: t.prod, lines: ["gajintosensei.com"], kind: "accent" },
      ],
      arrows: [
        { d: "M60 58 V76 H180 V92", dots: [[0, 24]] },
        { d: "M180 58 V92", dots: [[4, 24]] },
        { d: "M300 58 V76 H180 V92", dots: [[0, 24]] },
        { d: "M180 150 V168 H93 V184", dots: [[30, 44]] },
        { d: "M93 242 V286", dots: [[48, 62]] },
        { d: "M113 394 V426", dots: [[78, 92]] },
        { d: "M274 256 V341 H244", kind: "bad", end: "none", dots: [[30, 56]] },
      ],
      blocks: [{ x: 232, y: 341 }],
      labels: [{ x: 262, y: 364, text: t.refused, kind: "bad", anchor: "start" }],
    },
  };
}

const SRA_T = {
  fr: {
    col: "Collecte",
    colL: "données Steam",
    rob: "Roblox",
    robL: "clones existants",
    ana: "Analyste",
    anaL: "note Pydantic",
    cri: "Critique",
    criL: "valide ou renvoie",
    sco: "Score",
    scoL: "grille en code",
    rep: "Rapport",
    repL: ["Markdown", "+ sources"],
    loop: "renvoi, 2 max",
    loopV: ["renvoi", "2 max"],
    log: "Journal de sources (JSONL)",
  },
  en: {
    col: "Collector",
    colL: "Steam data",
    rob: "Roblox",
    robL: "existing clones",
    ana: "Analyst",
    anaL: "Pydantic score",
    cri: "Critic",
    criL: "approve or return",
    sco: "Score",
    scoL: "grid in code",
    rep: "Report",
    repL: ["Markdown", "+ sources"],
    loop: "sent back, 2 max",
    loopV: ["back", "2 max"],
    log: "Source log (JSONL)",
  },
};

export function sraGraph(lang: Lang): Diagram {
  const t = SRA_T[lang];
  const names: [string, string | string[], FlowBox["kind"]?][] = [
    [t.col, t.colL],
    [t.rob, t.robL],
    [t.ana, t.anaL],
    [t.cri, t.criL],
    [t.sco, t.scoL],
    [t.rep, t.repL, "accent"],
  ];
  // Horizontal : 6 étapes de 140 px, écart 24 px.
  const hx = (i: number) => i * 164;
  const hBoxes: FlowBox[] = names.map(([title, l, kind], i) => ({ x: hx(i), y: 90, w: 140, h: 76, title, lines: [l].flat(), kind }));
  hBoxes.push({ x: 0, y: 232, w: 960, h: 46, title: t.log, kind: "soft" });
  const chainDots: [number, number][][] = [[[0, 12]], [[12, 24]], [[24, 36], [58, 70]], [[70, 82]], [[82, 94]]];
  const hArrows: FlowArrow[] = [0, 1, 2, 3, 4].map((i) => ({ d: `M${hx(i) + 140} 128 H${hx(i + 1) - 4}`, dots: chainDots[i] }));
  hArrows.push({ d: "M562 90 V56 H398 V86", dots: [[38, 56]] });
  for (let i = 0; i < 6; i++) hArrows.push({ d: `M${hx(i) + 70} 166 V228`, kind: "muted", dashed: true });

  // Vertical : colonne centrale, boucle à droite, journal en bas relié par un bus à gauche.
  const vy = (i: number) => 8 + i * 80;
  const vBoxes: FlowBox[] = names.map(([title, l, kind], i) => ({ x: 70, y: vy(i), w: 190, h: 52, title, lines: [[l].flat().join(" ")], kind }));
  vBoxes.push({ x: 8, y: 496, w: 344, h: 44, title: t.log, kind: "soft" });
  const vArrows: FlowArrow[] = [0, 1, 2, 3, 4].map((i) => ({ d: `M165 ${vy(i) + 52} V${vy(i + 1) - 4}`, dots: chainDots[i] }));
  vArrows.push({ d: `M260 ${vy(3) + 26} H300 V${vy(2) + 26} H264`, dots: [[38, 56]] });
  vArrows.push({ d: `M70 ${vy(0) + 26} H36 V492`, kind: "muted", dashed: true });
  for (let i = 1; i < 6; i++) vArrows.push({ d: `M70 ${vy(i) + 26} H36`, kind: "muted", dashed: true, end: "none" });

  return {
    h: {
      vb: "-2 0 964 284",
      size: 16,
      boxes: hBoxes,
      arrows: hArrows,
      labels: [{ x: 480, y: 46, text: t.loop, kind: "accent" }],
    },
    v: {
      vb: "0 0 360 546",
      size: 14,
      boxes: vBoxes,
      arrows: vArrows,
      labels: [
        { x: 328, y: vy(3) - 14, text: t.loopV[0], kind: "accent" },
        { x: 328, y: vy(3) + 2, text: t.loopV[1], kind: "accent" },
      ],
    },
  };
}
