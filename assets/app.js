
/* ============================================================
   AP MazeLab — Modes (Home / Print / Play) + Play controller
   ============================================================ */
(function(){
  const homeOverlay = document.getElementById('homeOverlay');
  const btnModePrint = document.getElementById('btnModePrint');
  const btnModePlay = document.getElementById('btnModePlay');
  const btnSkipHome = document.getElementById('btnSkipHome');

  const btnGoHome = document.getElementById('btnGoHome');
  const btnSwitchPrint = document.getElementById('btnSwitchPrint');
  const btnSwitchPlay = document.getElementById('btnSwitchPlay');

  const playHud = document.getElementById('playHud');
  const playScores = document.getElementById('playScores');

  function setMode(mode){
    localStorage.setItem('apml_mode', mode);

    // body state for CSS (mobile controls, etc.)
    document.body.classList.toggle('apml-playing', mode === 'play');
    const playOptions = document.getElementById('playOptions');

    if (mode === 'home'){
      homeOverlay?.classList.remove('hidden');
      if (playHud) playHud.style.display = 'none';
      if (playScores) playScores.style.display = 'none';
      return;
    }

    homeOverlay?.classList.add('hidden');

    if (mode === 'play'){
      if (playHud) playHud.style.display = '';
      if (playScores) playScores.style.display = '';
      if (playOptions) playOptions.style.display = '';
      // start play after current script has set up maze
      try{
        if (typeof window.apmlStartPlay === 'function') window.apmlStartPlay();
      }catch(e){}
      return;
    }

    // print
    if (playHud) playHud.style.display = 'none';
    if (playScores) playScores.style.display = 'none';
    if (playOptions) playOptions.style.display = 'none';
  }

  btnModePrint?.addEventListener('click', ()=>setMode('print'));
  btnModePlay?.addEventListener('click', ()=>setMode('play'));
  btnSkipHome?.addEventListener('click', ()=>setMode('print'));

  btnGoHome?.addEventListener('click', ()=>setMode('home'));
  btnSwitchPrint?.addEventListener('click', ()=>setMode('print'));
  btnSwitchPlay?.addEventListener('click', ()=>setMode('play'));

  // Show home overlay on first load (you can change to remember last mode if you prefer)
  setMode('home');
})();



/* ===========================
   i18n (ES/EN/PT/IT)
   =========================== */
const i18n = {
  es: {
    pageTitle: "AP MazeLab — Free • Unlimited • Customizable",
    metaDescription: "AP MazeLab es una herramienta online, totalmente gratuita, para crear laberintos personalizables de forma ilimitada. Ajustá parámetros y exportá puzzles en SVG/PNG/PDF para libros, educación y proyectos creativos.",
    langLabel: "Idioma",
    tagline: "Free • Unlimited • Customizable maze generator",
    pillFreeStrong: "100% gratis",
    pillNoSignup: "sin registro",
    pillExport: "Export:",
    pillShare: "Compartí configs con un link",
    controlsTitle: "Controles",
    tipLabel: "Tip:",
    tipText: "probá",
    tipAnd: "y",
    tipRoad: "carretera",
    previewTitle: "Vista previa",
    previewSubtitle: "Entrada y salida se abren según configuración. Exportá cuando te guste.",
    difficulty: "Dificultad",
    diffCustom: "Personalizada",
    diffEasy: "Fácil",
    diffMedium: "Media",
    diffHard: "Difícil",
    difficultyHint: "Ajusta parámetros y (opcional) reduce callejones sin salida.",
    preset: "Preset",
    presetNone: "Ninguno",
    presetKDP: "Impresión 10×8 (KDP)",
    presetHint: "Configura export a tamaño físico.",
    cols: "Columnas",
    rows: "Filas",
    cell: "Celda (px)",
    cellHint: "Afecta la vista previa (pantalla).",
    road: "Carretera (grosor)",
    roadHint: "Para imprimir, 8–12 suele verse muy bien.",
    topPad: "Margen superior (px)",
    topPadHint: "Dejá espacio para título/consigna.",
    seed: "Semilla (opcional)",
    seedHint: "Misma semilla ⇒ mismo laberinto.",
    seedPlaceholder: "ej: CAMIONES01",
    entrySide: "Entrada",
    exitSide: "Salida",
    sideRandom: "Aleatoria",
    sideLeft: "Izquierda",
    sideRight: "Derecha",
    sideTop: "Arriba",
    sideBottom: "Abajo",
    sameRow: "Entrada y salida alineadas",
    sameRowHint: "Útil para “Fácil”.",
    exportDpi: "DPI export",
    dpiHint: "300 DPI recomendado para KDP.",
    topIn: "Margen superior (in)",
    topInHint: "Se usa en modo impresión 10×8.",
    printMode: "Modo impresión (10×8)",
    printModeHint: "Auto-ajusta export para tamaño físico.",
    showSolution: "Mostrar solución",
    showSolutionHint: "Overlay del camino correcto (vista previa + export opcional).",
    btnGenerate: "Generar",
    btnRandomSeed: "Semilla random",
    btnDownloadSVG: "Descargar SVG",
    btnDownloadPNG: "Descargar PNG",
    btnExportPDF: "Exportar PDF",
    btnCopyLink: "Copiar link",
    btnReset: "Reset",
    btnAbout: "About / License",
    batchCount: "Batch",
    batchHint: "Descarga múltiple (tu navegador puede pedir confirmación).",
    batchFormat: "Formato",
    btnBatch: "Generar lote",
    noteLocal: "Los laberintos se generan en tu navegador. No guardamos datos ni usamos servidor.",
    footer: "© 2026 Alejandro Pena — AP MazeLab • Uso gratuito • Generación ilimitada",
    linkCopied: "Link copiado al portapapeles ✅",
    heavyWarn: "Ojo: esta configuración es muy pesada y puede volverse lenta. Probá bajar columnas/filas o el tamaño de celda.",
    aboutText:
      "AP MazeLab es una herramienta 100% gratuita para generar laberintos ilimitados.\n\n" +
      "Privacidad: no guarda datos, no usa servidor.\n\n" +
      "Licencia sugerida para el código: MIT.\n" +
      "El contenido generado (laberintos) puede usarse libremente en proyectos personales/comerciales.\n\n" +
      "© 2026 Alejandro Pena",
    pdfHint:
      "Se abrirá un SVG listo para imprimir.\nEn esa pestaña: Imprimir → Guardar como PDF.\nTip: desactivá encabezados/pies y ajustá escala a 100%.",
  
    marginsLabel: "Márgenes (px)",
    marginsMode: "Modo",
    marginsLinked: "Iguales en los 4 lados",
    marginsPerSide: "Personalizar por lado",
    marginsAll: "Margen",
    marginsAllHint: "Borde parejo para imprimir o jugar.",
    marginTop: "Arriba",
    marginRight: "Derecha",
    marginBottom: "Abajo",
    marginLeft: "Izquierda",
    marginsHint: "Tip: podés dejar espacio extra arriba si querés texto o un logo.",
    playDifficulty: "Dificultad (Play)",
    playDifficultyHint: "Cambia el tamaño del laberinto para jugar.",
    playApply: "Aplicar y generar"

  },
  en: {
    pageTitle: "AP MazeLab — Free • Unlimited • Customizable",
    metaDescription: "AP MazeLab is a totally free online tool to generate unlimited customizable mazes. Easily tweak parameters and export high-quality puzzles as SVG/PNG/PDF for books, education, and creative projects.",
    langLabel: "Language",
    tagline: "Free • Unlimited • Customizable maze generator",
    pillFreeStrong: "100% free",
    pillNoSignup: "no sign-up",
    pillExport: "Export:",
    pillShare: "Share settings with a link",
    controlsTitle: "Controls",
    tipLabel: "Tip:",
    tipText: "try",
    tipAnd: "and",
    tipRoad: "road",
    previewTitle: "Preview",
    previewSubtitle: "Entry/exit open based on your settings. Export when you like the result.",
    difficulty: "Difficulty",
    diffCustom: "Custom",
    diffEasy: "Easy",
    diffMedium: "Medium",
    diffHard: "Hard",
    difficultyHint: "Adjust parameters and (optional) reduce dead ends.",
    preset: "Preset",
    presetNone: "None",
    presetKDP: "Print 10×8 (KDP)",
    presetHint: "Exports at a physical print size.",
    cols: "Columns",
    rows: "Rows",
    cell: "Cell (px)",
    cellHint: "Affects on-screen preview.",
    road: "Road thickness",
    roadHint: "For print, 8–12 usually looks great.",
    topPad: "Top margin (px)",
    topPadHint: "Leave space for title/instructions.",
    seed: "Seed (optional)",
    seedHint: "Same seed ⇒ same maze.",
    seedPlaceholder: "e.g.: TRUCKS01",
    entrySide: "Entry",
    exitSide: "Exit",
    sideRandom: "Random",
    sideLeft: "Left",
    sideRight: "Right",
    sideTop: "Top",
    sideBottom: "Bottom",
    sameRow: "Align entry and exit",
    sameRowHint: "Useful for Easy.",
    exportDpi: "Export DPI",
    dpiHint: "300 DPI recommended for KDP.",
    topIn: "Top margin (in)",
    topInHint: "Used in 10×8 print mode.",
    printMode: "Print mode (10×8)",
    printModeHint: "Auto-fits export to physical size.",
    showSolution: "Show solution",
    showSolutionHint: "Correct path overlay (preview + optional export).",
    btnGenerate: "Generate",
    btnRandomSeed: "Random seed",
    btnDownloadSVG: "Download SVG",
    btnDownloadPNG: "Download PNG",
    btnExportPDF: "Export PDF",
    btnCopyLink: "Copy link",
    btnReset: "Reset",
    btnAbout: "About / License",
    batchCount: "Batch",
    batchHint: "Multiple downloads (your browser may ask).",
    batchFormat: "Format",
    btnBatch: "Batch generate",
    noteLocal: "Mazes are generated in your browser. No data is stored and no server is used.",
    footer: "© 2026 Alejandro Pena — AP MazeLab • Free to use • Unlimited generation",
    linkCopied: "Link copied to clipboard ✅",
    heavyWarn: "Heads up: this configuration is heavy and may be slow. Try fewer rows/columns or a smaller cell size.",
    aboutText:
      "AP MazeLab is a 100% free tool to generate unlimited mazes.\n\n" +
      "Privacy: no data stored, no server used.\n\n" +
      "Suggested code license: MIT.\n" +
      "Generated content (mazes) can be used freely for personal/commercial projects.\n\n" +
      "© 2026 Alejandro Pena",
    pdfHint:
      "An SVG ready for printing will open.\nIn that tab: Print → Save as PDF.\nTip: disable headers/footers and keep scale at 100%.",
  
    marginsLabel: "Margins (px)",
    marginsMode: "Mode",
    marginsLinked: "Same on all sides",
    marginsPerSide: "Customize per side",
    marginsAll: "Margin",
    marginsAllHint: "Even border for print or play.",
    marginTop: "Top",
    marginRight: "Right",
    marginBottom: "Bottom",
    marginLeft: "Left",
    marginsHint: "Tip: add extra top space for a title or logo.",
    playDifficulty: "Difficulty (Play)",
    playDifficultyHint: "Changes maze size for playing.",
    playApply: "Apply & generate"

  },
  pt: {
    pageTitle: "AP MazeLab — Free • Unlimited • Customizable",
    metaDescription: "AP MazeLab é uma ferramenta online totalmente gratuita para gerar labirintos personalizáveis de forma ilimitada. Ajuste parâmetros facilmente e exporte puzzles em SVG/PNG/PDF para livros, educação e projetos criativos.",
    langLabel: "Idioma",
    tagline: "Free • Unlimited • Customizable maze generator",
    pillFreeStrong: "100% grátis",
    pillNoSignup: "sem cadastro",
    pillExport: "Exportar:",
    pillShare: "Compartilhe as configs por link",
    controlsTitle: "Controles",
    tipLabel: "Dica:",
    tipText: "tente",
    tipAnd: "e",
    tipRoad: "estrada",
    previewTitle: "Pré-visualização",
    previewSubtitle: "Entrada/saída abrem conforme as configurações. Exporte quando gostar do resultado.",
    difficulty: "Dificuldade",
    diffCustom: "Personalizada",
    diffEasy: "Fácil",
    diffMedium: "Média",
    diffHard: "Difícil",
    difficultyHint: "Ajuste parâmetros e (opcional) reduza becos sem saída.",
    preset: "Preset",
    presetNone: "Nenhum",
    presetKDP: "Impressão 10×8 (KDP)",
    presetHint: "Exporta em tamanho físico.",
    cols: "Colunas",
    rows: "Linhas",
    cell: "Célula (px)",
    cellHint: "Afeta a pré-visualização.",
    road: "Espessura da estrada",
    roadHint: "Para impressão, 8–12 costuma ficar ótimo.",
    topPad: "Margem superior (px)",
    topPadHint: "Deixe espaço para título/instruções.",
    seed: "Seed (opcional)",
    seedHint: "Mesma seed ⇒ mesmo labirinto.",
    seedPlaceholder: "ex.: CAMINHOES01",
    entrySide: "Entrada",
    exitSide: "Saída",
    sideRandom: "Aleatória",
    sideLeft: "Esquerda",
    sideRight: "Direita",
    sideTop: "Topo",
    sideBottom: "Base",
    sameRow: "Alinhar entrada e saída",
    sameRowHint: "Útil para Fácil.",
    exportDpi: "DPI export",
    dpiHint: "300 DPI recomendado para KDP.",
    topIn: "Margem superior (in)",
    topInHint: "Usado no modo 10×8.",
    printMode: "Modo impressão (10×8)",
    printModeHint: "Ajusta export para tamanho físico.",
    showSolution: "Mostrar solução",
    showSolutionHint: "Caminho correto (prévia + export opcional).",
    btnGenerate: "Gerar",
    btnRandomSeed: "Seed aleatória",
    btnDownloadSVG: "Baixar SVG",
    btnDownloadPNG: "Baixar PNG",
    btnExportPDF: "Exportar PDF",
    btnCopyLink: "Copiar link",
    btnReset: "Reset",
    btnAbout: "About / License",
    batchCount: "Batch",
    batchHint: "Vários downloads (o navegador pode perguntar).",
    batchFormat: "Formato",
    btnBatch: "Gerar lote",
    noteLocal: "Os labirintos são gerados no seu navegador. Não salvamos dados e não usamos servidor.",
    footer: "© 2026 Alejandro Pena — AP MazeLab • Uso gratuito • Geração ilimitada",
    linkCopied: "Link copiado ✅",
    heavyWarn: "Atenção: esta configuração é pesada e pode ficar lenta. Tente menos linhas/colunas ou uma célula menor.",
    aboutText:
      "AP MazeLab é uma ferramenta 100% gratuita para gerar labirintos ilimitados.\n\n" +
      "Privacidade: não salva dados, não usa servidor.\n\n" +
      "Licença sugerida do código: MIT.\n" +
      "O conteúdo gerado (labirintos) pode ser usado livremente em projetos pessoais/comerciais.\n\n" +
      "© 2026 Alejandro Pena",
    pdfHint:
      "Um SVG pronto para impressão será aberto.\nNa nova aba: Imprimir → Salvar como PDF.\nDica: desative cabeçalhos/rodapés e mantenha escala 100%.",
  
    marginsLabel: "Margens (px)",
    marginsMode: "Modo",
    marginsLinked: "Iguais nos 4 lados",
    marginsPerSide: "Personalizar por lado",
    marginsAll: "Margem",
    marginsAllHint: "Borda igual para imprimir ou jogar.",
    marginTop: "Topo",
    marginRight: "Direita",
    marginBottom: "Base",
    marginLeft: "Esquerda",
    marginsHint: "Dica: deixe espaço extra em cima para título ou logo.",
    playDifficulty: "Dificuldade (Play)",
    playDifficultyHint: "Muda o tamanho do labirinto para jogar.",
    playApply: "Aplicar e gerar"

  },
  it: {
    pageTitle: "AP MazeLab — Free • Unlimited • Customizable",
    metaDescription: "AP MazeLab è uno strumento online totalmente gratuito per generare labirinti personalizzabili in modo illimitato. Regola facilmente i parametri ed esporta puzzle di alta qualità in SVG/PNG/PDF per libri, educazione e progetti creativi.",
    langLabel: "Lingua",
    tagline: "Free • Unlimited • Customizable maze generator",
    pillFreeStrong: "100% gratis",
    pillNoSignup: "senza registrazione",
    pillExport: "Esporta:",
    pillShare: "Condividi le impostazioni con un link",
    controlsTitle: "Controlli",
    tipLabel: "Suggerimento:",
    tipText: "prova",
    tipAnd: "e",
    tipRoad: "strada",
    previewTitle: "Anteprima",
    previewSubtitle: "Ingresso/uscita si aprono in base alle impostazioni. Esporta quando ti piace.",
    difficulty: "Difficoltà",
    diffCustom: "Personalizzata",
    diffEasy: "Facile",
    diffMedium: "Media",
    diffHard: "Difficile",
    difficultyHint: "Regola parametri e (opzionale) riduci i vicoli ciechi.",
    preset: "Preset",
    presetNone: "Nessuno",
    presetKDP: "Stampa 10×8 (KDP)",
    presetHint: "Esporta in dimensione fisica.",
    cols: "Colonne",
    rows: "Righe",
    cell: "Cella (px)",
    cellHint: "Influisce sull'anteprima.",
    road: "Spessore strada",
    roadHint: "Per stampa, 8–12 di solito è ottimo.",
    topPad: "Margine superiore (px)",
    topPadHint: "Lascia spazio per titolo/istruzioni.",
    seed: "Seed (opzionale)",
    seedHint: "Stessa seed ⇒ stesso labirinto.",
    seedPlaceholder: "es.: CAMION01",
    entrySide: "Ingresso",
    exitSide: "Uscita",
    sideRandom: "Casuale",
    sideLeft: "Sinistra",
    sideRight: "Destra",
    sideTop: "Sopra",
    sideBottom: "Sotto",
    sameRow: "Allinea ingresso e uscita",
    sameRowHint: "Utile per Facile.",
    exportDpi: "DPI export",
    dpiHint: "300 DPI consigliato per KDP.",
    topIn: "Margine superiore (in)",
    topInHint: "Usato in modalità 10×8.",
    printMode: "Modalità stampa (10×8)",
    printModeHint: "Adatta export alla dimensione fisica.",
    showSolution: "Mostra soluzione",
    showSolutionHint: "Percorso corretto (anteprima + export opzionale).",
    btnGenerate: "Genera",
    btnRandomSeed: "Seed casuale",
    btnDownloadSVG: "Scarica SVG",
    btnDownloadPNG: "Scarica PNG",
    btnExportPDF: "Esporta PDF",
    btnCopyLink: "Copia link",
    btnReset: "Reset",
    btnAbout: "About / License",
    batchCount: "Batch",
    batchHint: "Download multipli (il browser può chiedere).",
    batchFormat: "Formato",
    btnBatch: "Genera lotto",
    noteLocal: "I labirinti vengono generati nel tuo browser. Nessun dato viene salvato e non viene usato alcun server.",
    footer: "© 2026 Alejandro Pena — AP MazeLab • Uso gratuito • Generazione illimitata",
    linkCopied: "Link copiato ✅",
    heavyWarn: "Attenzione: questa configurazione è pesante e potrebbe essere lenta. Prova meno righe/colonne o una cella più piccola.",
    aboutText:
      "AP MazeLab è uno strumento 100% gratuito per generare labirinti illimitati.\n\n" +
      "Privacy: nessun dato salvato, nessun server.\n\n" +
      "Licenza suggerita per il codice: MIT.\n" +
      "Il contenuto generato (labirinti) può essere usato liberamente per progetti personali/commerciali.\n\n" +
      "© 2026 Alejandro Pena",
    pdfHint:
      "Si aprirà un SVG pronto per la stampa.\nNella nuova scheda: Stampa → Salva come PDF.\nSuggerimento: disattiva intestazioni/piè di pagina e mantieni scala 100%.",
  }
};

let currentLang = "es";

/* ===========================
   Helpers
   =========================== */
function clamp(n, min, max){ return Math.max(min, Math.min(max, n)); }
function toInt(v, fallback){ const n=parseInt(v,10); return Number.isFinite(n)?n:fallback; }
function toFloat(v, fallback){ const n=parseFloat(v); return Number.isFinite(n)?n:fallback; }

function detectLang() {
  const sp = new URLSearchParams(window.location.search);
  const fromUrl = (sp.get("lang") || "").toLowerCase();
  const fromStorage = (localStorage.getItem("apml_lang") || "").toLowerCase();
  const nav = (navigator.language || "es").slice(0,2).toLowerCase();
  const pick = fromUrl || fromStorage || nav || "es";
  return i18n[pick] ? pick : "es";
}

function applyLang(lang) {
  currentLang = i18n[lang] ? lang : "es";
  localStorage.setItem("apml_lang", currentLang);

  const sel = document.getElementById("lang");
  if (sel) sel.value = currentLang;
  const label = document.getElementById("langLabel");
  if (label) label.textContent = i18n[currentLang].langLabel;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (i18n[currentLang][key]) el.textContent = i18n[currentLang][key];
  });

  const seedInput = document.getElementById("seed");
  if (seedInput) seedInput.placeholder = i18n[currentLang].seedPlaceholder;

  document.title = i18n[currentLang].pageTitle;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", i18n[currentLang].metaDescription);
}

function downloadText(filename, text, mime) {
  const blob = new Blob([text], {type: mime});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  setTimeout(()=>URL.revokeObjectURL(url), 2500);
}

function downloadBlob(filename, blob) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  setTimeout(()=>URL.revokeObjectURL(url), 2500);
}

function setWarn(msg, kind="warn"){
  const warnEl = document.getElementById("warn");
  warnEl.classList.remove("ok");
  warnEl.style.display = "block";
  warnEl.textContent = msg;
  if (kind === "ok") warnEl.classList.add("ok");
  if (kind === "autoHide") {
    warnEl.classList.add("ok");
    setTimeout(()=>{ warnEl.style.display="none"; }, 1600);
  }
}
function hideWarn(){
  const warnEl = document.getElementById("warn");
  warnEl.style.display = "none";
  warnEl.textContent = "";
}

function setToggle(el, on){
  el.classList.toggle("on", !!on);
  el.setAttribute("aria-checked", !!on ? "true" : "false");
}
function getToggle(el){ return el.classList.contains("on"); }

function buildShareURL(params){
  const u = new URL(window.location.href);
  for (const [k,v] of Object.entries(params)) {
    if (v === "" || v === null || v === undefined) u.searchParams.delete(k);
    else u.searchParams.set(k, String(v));
  }
  return u.toString();
}

/* ===========================
   RNG with seed (xmur3 + sfc32)
   =========================== */
function xmur3(str) {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return function() {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return (h ^= h >>> 16) >>> 0;
  };
}
function sfc32(a, b, c, d) {
  return function() {
    a >>>= 0; b >>>= 0; c >>>= 0; d >>>= 0;
    let t = (a + b) | 0;
    a = b ^ (b >>> 9);
    b = (c + (c << 3)) | 0;
    c = (c << 21) | (c >>> 11);
    d = (d + 1) | 0;
    t = (t + d) | 0;
    c = (c + t) | 0;
    return (t >>> 0) / 4294967296;
  };
}
function makeRng(seedStr) {
  if (!seedStr) return Math.random;
  const seed = xmur3(seedStr);
  return sfc32(seed(), seed(), seed(), seed());
}

/* ===========================
   Maze generation (DFS)
   grid[y][x].walls: [N,E,S,W]
   =========================== */
function generateMaze(cols, rows, rng) {
  const dx = [0,1,0,-1];
  const dy = [-1,0,1,0];
  const opposite = [2,3,0,1];

  const grid = Array.from({length: rows}, () =>
    Array.from({length: cols}, () => ({ walls: [true,true,true,true], visited:false }))
  );

  const stack = [];
  let cx = Math.floor(rng()*cols);
  let cy = Math.floor(rng()*rows);

  grid[cy][cx].visited = true;
  stack.push([cx,cy]);

  while (stack.length) {
    const [x,y] = stack[stack.length-1];

    const neighbors = [];
    for (let dir=0; dir<4; dir++) {
      const nx = x + dx[dir];
      const ny = y + dy[dir];
      if (nx>=0 && nx<cols && ny>=0 && ny<rows && !grid[ny][nx].visited) {
        neighbors.push([dir,nx,ny]);
      }
    }

    if (!neighbors.length) { stack.pop(); continue; }

    const [dir,nx,ny] = neighbors[Math.floor(rng()*neighbors.length)];
    grid[y][x].walls[dir] = false;
    grid[ny][nx].walls[opposite[dir]] = false;

    grid[ny][nx].visited = true;
    stack.push([nx,ny]);
  }

  for (let r=0;r<rows;r++) for (let c=0;c<cols;c++) grid[r][c].visited=false;
  return grid;
}

/* ===========================
   Optional: "braid" (reduce dead-ends)
   factor: 0..1 (higher => fewer dead ends, easier)
   =========================== */
function braidMaze(grid, rng, factor){
  if (factor <= 0) return;
  const rows = grid.length;
  const cols = grid[0].length;
  const dx = [0,1,0,-1];
  const dy = [-1,0,1,0];
  const opposite = [2,3,0,1];

  function wallCount(cell){ return cell.walls.reduce((a,b)=>a+(b?1:0),0); }

  const deadEnds = [];
  for (let y=0;y<rows;y++){
    for (let x=0;x<cols;x++){
      if (wallCount(grid[y][x]) === 3) deadEnds.push([x,y]);
    }
  }

  // shuffle
  for (let i = deadEnds.length - 1; i > 0; i--) {
    const j = Math.floor(rng()*(i+1));
    [deadEnds[i], deadEnds[j]] = [deadEnds[j], deadEnds[i]];
  }

  const toOpen = Math.floor(deadEnds.length * factor);
  for (let i=0;i<toOpen;i++){
    const [x,y] = deadEnds[i];
    const options = [];
    for (let dir=0; dir<4; dir++){
      const nx = x + dx[dir], ny = y + dy[dir];
      if (nx>=0 && nx<cols && ny>=0 && ny<rows && grid[y][x].walls[dir]) {
        options.push([dir,nx,ny]);
      }
    }
    if (!options.length) continue;
    const [dir,nx,ny] = options[Math.floor(rng()*options.length)];
    grid[y][x].walls[dir] = false;
    grid[ny][nx].walls[opposite[dir]] = false;
  }
}

/* ===========================
   Entry/Exit selection + store
   =========================== */
const canvas = document.getElementById('canvas');
const sizeInfo = document.getElementById('sizeInfo');

let lastGrid = null;
let lastParams = null;

let lastEntry = null; // {side, x, y} where x,y are cell coords inside grid
let lastExit  = null;

function pickSide(rng, side){
  if (side !== "random") return side;
  const sides = ["left","right","top","bottom"];
  return sides[Math.floor(rng()*sides.length)];
}

function chooseEntryExit(cols, rows, rng, entrySideUI, exitSideUI, sameRow){
  const entrySide = pickSide(rng, entrySideUI);
  const exitSide = pickSide(rng, exitSideUI);

  let ex=0, ey=0, ox=0, oy=0;

  // helper for picking positions
  const pickRow = ()=> Math.floor(rng()*rows);
  const pickCol = ()=> Math.floor(rng()*cols);

  // entry point cell inside grid
  if (entrySide === "left") { ex=0; ey=pickRow(); }
  if (entrySide === "right"){ ex=cols-1; ey=pickRow(); }
  if (entrySide === "top")  { ex=pickCol(); ey=0; }
  if (entrySide === "bottom"){ ex=pickCol(); ey=rows-1; }

  // exit point cell inside grid
  if (exitSide === "left") { ox=0; oy=pickRow(); }
  if (exitSide === "right"){ ox=cols-1; oy=pickRow(); }
  if (exitSide === "top")  { ox=pickCol(); oy=0; }
  if (exitSide === "bottom"){ ox=pickCol(); oy=rows-1; }

  // optional alignment: if both open on vertical sides, align row; if horizontal sides, align col
  if (sameRow) {
    if ((entrySide === "left" || entrySide === "right") && (exitSide === "left" || exitSide === "right")) {
      oy = ey;
    }
    if ((entrySide === "top" || entrySide === "bottom") && (exitSide === "top" || exitSide === "bottom")) {
      ox = ex;
    }
  }

  return {
    entry: { side: entrySide, x: ex, y: ey },
    exit:  { side: exitSide,  x: ox, y: oy }
  };
}

function openBoundary(grid, point){
  // remove the boundary wall for entry/exit cell based on side
  const {x,y,side} = point;
  const cell = grid[y][x];
  if (side === "left") cell.walls[3] = false;
  if (side === "right") cell.walls[1] = false;
  if (side === "top") cell.walls[0] = false;
  if (side === "bottom") cell.walls[2] = false;
}

/* ===========================
   Solve path (BFS)
   returns array of cells [{x,y},...]
   =========================== */
function solveMaze(grid, entry, exit){
  const rows = grid.length, cols = grid[0].length;
  const q = [];
  const visited = Array.from({length: rows}, ()=>Array(cols).fill(false));
  const prev = Array.from({length: rows}, ()=>Array(cols).fill(null));

  q.push([entry.x, entry.y]);
  visited[entry.y][entry.x] = true;

  const dirs = [
    {dir:0, dx:0, dy:-1}, // N
    {dir:1, dx:1, dy:0},  // E
    {dir:2, dx:0, dy:1},  // S
    {dir:3, dx:-1, dy:0}, // W
  ];

  while (q.length){
    const [x,y] = q.shift();
    if (x === exit.x && y === exit.y) break;

    for (const d of dirs){
      const nx = x + d.dx, ny = y + d.dy;
      if (nx<0||nx>=cols||ny<0||ny>=rows) continue;
      // move allowed if no wall in that dir
      if (grid[y][x].walls[d.dir]) continue;
      if (visited[ny][nx]) continue;
      visited[ny][nx] = true;
      prev[ny][nx] = {x,y};
      q.push([nx,ny]);
    }
  }

  if (!visited[exit.y][exit.x]) return null;

  const path = [];
  let cur = {x: exit.x, y: exit.y};
  while (cur){
    path.push(cur);
    cur = prev[cur.y][cur.x];
  }
  path.reverse();
  return path;
}

/* ===========================
   Draw maze (thick walls)
   =========================== */
function drawMazeToCanvas(targetCanvas, grid, cell, road, pads, showSolution){
  const padT = pads?.t ?? 0;
  const padR = pads?.r ?? 0;
  const padB = pads?.b ?? 0;
  const padL = pads?.l ?? 0;
  const ctx = targetCanvas.getContext('2d');
  const rows = grid.length;
  const cols = grid[0].length;

  const w = cols * cell + padL + padR;
  const h = rows * cell + padT + padB;

  targetCanvas.width = Math.max(2, Math.floor(w + 2));
  targetCanvas.height = Math.max(2, Math.floor(h + 2));

  ctx.clearRect(0,0,targetCanvas.width,targetCanvas.height);
  ctx.fillStyle = "#fff";
  ctx.fillRect(0,0,targetCanvas.width,targetCanvas.height);

  // optional top guideline (only if top padding is significantly larger than others)
  if (padT > Math.max(12, (padL+padR+padB)/3 + 12)) {
    ctx.strokeStyle = "#eee";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, padT+0.5);
    ctx.lineTo(targetCanvas.width, padT+0.5);
    ctx.stroke();
  }

  const ox = 1 + padL;
  const oy = 1 + padT;

  // walls
  ctx.strokeStyle = "#111";
  ctx.lineCap = "square";
  ctx.lineWidth = Math.max(2, Math.floor(road));

  for (let y=0; y<rows; y++) {
    for (let x=0; x<cols; x++) {
      const c = grid[y][x];
      const x0 = ox + x*cell;
      const y0 = oy + y*cell;
      const x1 = x0 + cell;
      const y1 = y0 + cell;

      if (c.walls[0]) { ctx.beginPath(); ctx.moveTo(x0,y0); ctx.lineTo(x1,y0); ctx.stroke(); }
      if (c.walls[1]) { ctx.beginPath(); ctx.moveTo(x1,y0); ctx.lineTo(x1,y1); ctx.stroke(); }
      if (c.walls[2]) { ctx.beginPath(); ctx.moveTo(x0,y1); ctx.lineTo(x1,y1); ctx.stroke(); }
      if (c.walls[3]) { ctx.beginPath(); ctx.moveTo(x0,y0); ctx.lineTo(x0,y1); ctx.stroke(); }
    }
  }

  // solution overlay
  if (showSolution && lastEntry && lastExit){
    const path = solveMaze(grid, lastEntry, lastExit);
    if (path && path.length > 1){
      ctx.strokeStyle = "rgba(6,182,212,.65)";
      ctx.lineWidth = Math.max(2, Math.floor(cell * 0.22));
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      for (let i=0;i<path.length;i++){
        const p = path[i];
        const cx = ox + p.x*cell + cell/2;
        const cy = oy + p.y*cell + cell/2;
        if (i===0) ctx.moveTo(cx,cy);
        else ctx.lineTo(cx,cy);
      }
      ctx.stroke();
    }
  }
}

/* ===========================
   SVG export (with openings + optional solution path)
   Supports printMode: set physical size 10x8 using DPI
   =========================== */
function mazeToSVG(grid, opts){
  const {cell, road, pads, showSolution, printMode, dpi, topIn} = opts;
  const padT = pads?.t ?? 0, padR = pads?.r ?? 0, padB = pads?.b ?? 0, padL = pads?.l ?? 0;
  const rows = grid.length;
  const cols = grid[0].length;

  // export canvas size in px
  let Wpx = cols*cell + padL + padR + 2;
  let Hpx = rows*cell + padT + padB + 2;

  // Print mode: 10x8 inches landscape
  let widthAttr = `${Wpx}`;
  let heightAttr = `${Hpx}`;
  let viewBox = `0 0 ${Wpx} ${Hpx}`;

  if (printMode){
    const wIn = 10, hIn = 8;
    Wpx = Math.round(wIn * dpi);
    Hpx = Math.round(hIn * dpi);
    const padAllPx = Math.round(topIn * dpi);

    // compute cell to fit grid (padding on all sides)
    const cellFit = Math.floor(Math.min((Wpx-2-padAllPx*2)/cols, (Hpx-2-padAllPx*2)/rows));
    const c = Math.max(2, cellFit);
    const r = Math.max(2, Math.round(road * (c / cell))); // scale road from preview cell
    const padsFit = {t: padAllPx, r: padAllPx, b: padAllPx, l: padAllPx};

    // override for print export
    return mazeToSVG(grid, {
      cell: c,
      road: r,
      pads: padsFit,
      showSolution,
      printMode: false, // already applied
      dpi, topIn
    }).replace(
      /<svg([^>]+)width="[^"]+" height="[^"]+"/,
      `<svg$1width="${wIn}in" height="${hIn}in"`
    );
  }

  const ox=1+padL, oy=1+padT;

  const paths = [];
  const line = (x1,y1,x2,y2)=> paths.push(`<path d="M ${x1} ${y1} L ${x2} ${y2}" />`);

  // walls
  for (let y=0; y<rows; y++) {
    for (let x=0; x<cols; x++) {
      const c = grid[y][x];
      const x0 = ox + x*cell;
      const y0 = oy + y*cell;
      const x1 = x0 + cell;
      const y1 = y0 + cell;

      if (c.walls[0]) line(x0,y0,x1,y0);
      if (c.walls[1]) line(x1,y0,x1,y1);
      if (c.walls[2]) line(x0,y1,x1,y1);
      if (c.walls[3]) line(x0,y0,x0,y1);
    }
  }

  // openings (white strokes to "erase")
  const eraseW = Math.max(road+2, road*1.3);
  let openings = "";
  if (lastEntry){
    const {x,y,side} = lastEntry;
    const x0 = ox + x*cell;
    const y0 = oy + y*cell;
    const x1 = x0 + cell;
    const y1 = y0 + cell;
    if (side==="left") openings += `<path d="M ${x0} ${y0} L ${x0} ${y1}" />\n`;
    if (side==="right") openings += `<path d="M ${x1} ${y0} L ${x1} ${y1}" />\n`;
    if (side==="top") openings += `<path d="M ${x0} ${y0} L ${x1} ${y0}" />\n`;
    if (side==="bottom") openings += `<path d="M ${x0} ${y1} L ${x1} ${y1}" />\n`;
  }
  if (lastExit){
    const {x,y,side} = lastExit;
    const x0 = ox + x*cell;
    const y0 = oy + y*cell;
    const x1 = x0 + cell;
    const y1 = y0 + cell;
    if (side==="left") openings += `<path d="M ${x0} ${y0} L ${x0} ${y1}" />\n`;
    if (side==="right") openings += `<path d="M ${x1} ${y0} L ${x1} ${y1}" />\n`;
    if (side==="top") openings += `<path d="M ${x0} ${y0} L ${x1} ${y0}" />\n`;
    if (side==="bottom") openings += `<path d="M ${x0} ${y1} L ${x1} ${y1}" />\n`;
  }

  // solution path
  let solSvg = "";
  if (showSolution && lastEntry && lastExit){
    const path = solveMaze(grid, lastEntry, lastExit);
    if (path && path.length > 1){
      const d = path.map((p, i)=>{
        const cx = ox + p.x*cell + cell/2;
        const cy = oy + p.y*cell + cell/2;
        return `${i===0 ? "M" : "L"} ${cx} ${cy}`;
      }).join(" ");
      const sw = Math.max(2, Math.floor(cell*0.22));
      solSvg = `<path d="${d}" />`;
      solSvg = `<g fill="none" stroke="rgba(6,182,212,.65)" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${solSvg}</g>`;
    }
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${widthAttr}" height="${heightAttr}" viewBox="${viewBox}">
  <rect width="100%" height="100%" fill="#fff"/>
  ${padT>0 ? `<line x1="0" y1="${padT+0.5}" x2="${Wpx}" y2="${padT+0.5}" stroke="#eee" stroke-width="1"/>` : ""}
  <g fill="none" stroke="#111" stroke-width="${road}" stroke-linecap="square">
    ${paths.join("\n    ")}
  </g>
  <g fill="none" stroke="#fff" stroke-width="${eraseW}" stroke-linecap="square">
    ${openings}
  </g>
  ${solSvg}
</svg>`;
}

/* ===========================
   Export PNG (supports print mode 10x8 at DPI)
   =========================== */
function exportPNG(){
  if (!lastGrid) regenerate();

  const p = lastParams || readParamsFromUI();
  const printMode = getToggle(document.getElementById("printToggle"));
  const dpi = toInt(document.getElementById("exportDpi").value, 300);
  const topIn = clamp(toFloat(document.getElementById("topIn").value, 1.0), 0, 3);
  const showSol = getToggle(document.getElementById("solutionToggle"));

  // on-screen mode export
  if (!printMode){
    canvas.toBlob((blob)=>{
      downloadBlob('ap-mazelab-maze.png', blob);
    }, "image/png");
    return;
  }


  // print mode export: 10x8 inches
  const wIn = 10, hIn = 8;
  const Wpx = Math.round(wIn * dpi);
  const Hpx = Math.round(hIn * dpi);
  const topPadPx = Math.round(topIn * dpi);

  const cols = p.cols, rows = p.rows;
  const cellFit = Math.floor(Math.min((Wpx-2-topPadPx*2)/cols, (Hpx-2-topPadPx*2)/rows));
  const cell = Math.max(2, cellFit);

  // scale road relative to preview cell
  const road = Math.max(2, Math.round(p.road * (cell / p.cell)));

  const off = document.createElement("canvas");
  drawMazeToCanvas(off, lastGrid, cell, road, {t: topPadPx, r: topPadPx, b: topPadPx, l: topPadPx}, showSol);

  off.toBlob((blob)=>{
    downloadBlob(`ap-mazelab-10x8-${dpi}dpi.png`, blob);
  }, "image/png");
}

/* ===========================
   PDF export (open SVG and let user print to PDF)
   =========================== */
function exportPDF(){
  if (!lastGrid) regenerate();

  const p = lastParams || readParamsFromUI();
  const printMode = getToggle(document.getElementById("printToggle"));
  const dpi = toInt(document.getElementById("exportDpi").value, 300);
  const topIn = clamp(toFloat(document.getElementById("topIn").value, 1.0), 0, 3);
  const showSol = getToggle(document.getElementById("solutionToggle"));

  // We open SVG in new tab with correct physical sizing when printMode is on
  const svg = mazeToSVG(lastGrid, {
    cell: p.cell, road: p.road, pads: p.pads,
    showSolution: showSol,
    printMode,
    dpi,
    topIn
  });

  alert(i18n[currentLang].pdfHint);

  const blob = new Blob([svg], {type:"image/svg+xml"});
  const url = URL.createObjectURL(blob);
  const w = window.open(url, "_blank");
  // do not auto-print (some browsers block); user prints manually.
  setTimeout(()=>URL.revokeObjectURL(url), 10_000);
}

/* ===========================
   Read params + presets + difficulty
   =========================== */
function readMarginsFromUI(){
  const mode = (document.getElementById('marginMode')?.value || 'linked');
  const clampPad = (n)=> clamp(toInt(n, 24), 0, 420);

  let t=24,r=24,b=24,l=24;
  if (mode === 'perSide'){
    t = clampPad(document.getElementById('marginTop')?.value);
    r = clampPad(document.getElementById('marginRight')?.value);
    b = clampPad(document.getElementById('marginBottom')?.value);
    l = clampPad(document.getElementById('marginLeft')?.value);
  } else {
    const all = clampPad(document.getElementById('marginAll')?.value);
    t=r=b=l=all;
  }

  return {mode, t, r, b, l};
}

function syncMarginUI(){
  const modeEl = document.getElementById('marginMode');
  const mode = modeEl ? modeEl.value : 'linked';
  const allWrap = document.getElementById('marginAllWrap');
  const sides = document.getElementById('marginSides');

  if (mode === 'perSide'){
    if (allWrap) allWrap.style.display = 'none';
    if (sides) sides.style.display = '';
  } else {
    if (allWrap) allWrap.style.display = '';
    if (sides) sides.style.display = 'none';
  }
}

function readParamsFromUI() {
  const cols = clamp(toInt(document.getElementById('cols').value, 30), 5, 160);
  const rows = clamp(toInt(document.getElementById('rows').value, 20), 5, 160);
  const cell = clamp(toInt(document.getElementById('cell').value, 24), 10, 80);
  const road = clamp(toInt(document.getElementById('road').value, 10), 2, 40);
  const m = readMarginsFromUI();
  const pads = {t:m.t, r:m.r, b:m.b, l:m.l};
  // keep legacy topPad in sync for old share links (topPad ~= top margin)
  const topPad = pads.t;
  try{ document.getElementById('topPad').value = String(topPad); }catch(e){}
  const seed = (document.getElementById('seed').value || "").trim();
  const entrySide = document.getElementById("entrySide").value;
  const exitSide  = document.getElementById("exitSide").value;
  const sameRow = getToggle(document.getElementById("sameRowToggle"));
  const showSolution = getToggle(document.getElementById("solutionToggle"));

  // write back clamped
  document.getElementById('cols').value = cols;
  document.getElementById('rows').value = rows;
  document.getElementById('cell').value = cell;
  document.getElementById('road').value = road;
  try{ document.getElementById('marginAll').value = (m.mode==='linked'? pads.t : document.getElementById('marginAll').value); }catch(e){}

  return { cols, rows, cell, road, pads, topPad, seed, entrySide, exitSide, sameRow, showSolution };
}

function applyDifficultyPreset(mode){
  // also sets braid factor
  if (mode === "easy"){
    document.getElementById("cols").value = 28;
    document.getElementById("rows").value = 18;
    document.getElementById("cell").value = 26;
    document.getElementById("road").value = 12;
    document.getElementById("topPad").value = 110;
    setToggle(document.getElementById("sameRowToggle"), true);
  } else if (mode === "medium"){
    document.getElementById("cols").value = 40;
    document.getElementById("rows").value = 25;
    document.getElementById("cell").value = 22;
    document.getElementById("road").value = 10;
    try{ document.getElementById('marginMode').value = 'linked'; }catch(e){}
  try{ document.getElementById('marginAll').value = 24; }catch(e){}
  try{ document.getElementById('marginTop').value = 24; document.getElementById('marginRight').value = 24; document.getElementById('marginBottom').value = 24; document.getElementById('marginLeft').value = 24; }catch(e){}
  document.getElementById("topPad").value = 90;
    setToggle(document.getElementById("sameRowToggle"), false);
  } else if (mode === "hard"){
    document.getElementById("cols").value = 60;
    document.getElementById("rows").value = 38;
    document.getElementById("cell").value = 16;
    document.getElementById("road").value = 8;
    document.getElementById("topPad").value = 80;
    setToggle(document.getElementById("sameRowToggle"), false);
  }
}

function braidFactorFromDifficulty(mode){
  if (mode === "easy") return 0.28;
  if (mode === "medium") return 0.10;
  if (mode === "hard") return 0.00;
  return 0.00; // custom default
}

function applyPreset(preset){
  if (preset === "kdp10x8"){
    setToggle(document.getElementById("printToggle"), true);
    document.getElementById("exportDpi").value = "300";
    document.getElementById("topIn").value = "1.0";
  }
}

function maybeWarn(cols, rows, cell){
  const px = cols * rows * cell * cell;
  if (px > 60_000_000) {
    setWarn(i18n[currentLang].heavyWarn, "warn");
  } else {
    hideWarn();
  }
}

function updateSizeInfo(){
  const p = lastParams || readParamsFromUI();
  const printMode = getToggle(document.getElementById("printToggle"));
  const dpi = toInt(document.getElementById("exportDpi").value, 300);
  const topIn = clamp(toFloat(document.getElementById("topIn").value, 1.0), 0, 3);

  if (!printMode){
    const W = p.cols*p.cell + (p.pads?.l||0) + (p.pads?.r||0) + 2;
    const H = p.rows*p.cell + (p.pads?.t||0) + (p.pads?.b||0) + 2;
    sizeInfo.textContent = `Preview px: ${W}×${H}. Export: SVG/PNG/PDF.`;
  } else {
    const W = Math.round(10*dpi);
    const H = Math.round(8*dpi);
    const topPadPx = Math.round(topIn*dpi);
    sizeInfo.textContent = `Print export: 10×8 in @ ${dpi} DPI → ${W}×${H} px. Margin: ${topIn} in (${topPadPx}px) all sides.`;
  }
}

/* ===========================
   Regenerate
   =========================== */
function regenerate() {
  const diff = document.getElementById("difficulty").value;
  const braidFactor = braidFactorFromDifficulty(diff);

  const p = readParamsFromUI();
  maybeWarn(p.cols, p.rows, p.cell);

  const rngMaze = makeRng(p.seed || String(Date.now()));
  lastGrid = generateMaze(p.cols, p.rows, rngMaze);

  // braid (reduce dead-ends) based on difficulty
  braidMaze(lastGrid, makeRng((p.seed || String(Date.now())) + "::braid"), braidFactor);

  // entry/exit
  const rngOpen = makeRng((p.seed || String(Date.now())) + "::openings");
  const {entry, exit} = chooseEntryExit(p.cols, p.rows, rngOpen, p.entrySide, p.exitSide, p.sameRow);
  lastEntry = entry;
  lastExit = exit;

  // open boundary walls in grid so solver matches openings
  openBoundary(lastGrid, lastEntry);
  openBoundary(lastGrid, lastExit);

  drawMazeToCanvas(canvas, lastGrid, p.cell, p.road, p.pads, p.showSolution);

  lastParams = p;
  updateSizeInfo();
}

/* ===========================
   URL params read/write
   =========================== */
function applyURLParamsToUI() {
  const sp = new URLSearchParams(window.location.search);
  const setIf = (id, key) => {
    if (sp.has(key)) document.getElementById(id).value = sp.get(key);
  };
  setIf('cols','cols');
  setIf('rows','rows');
  setIf('cell','cell');
  setIf('road','road');
  if (sp.has('topPad')){
    const v = sp.get('topPad');
    const mAll = document.getElementById('marginAll');
    if (mAll) mAll.value = v;
    const mt = document.getElementById('marginTop');
    const mr = document.getElementById('marginRight');
    const mb = document.getElementById('marginBottom');
    const ml = document.getElementById('marginLeft');
    if (mt) mt.value = v;
    if (mr) mr.value = v;
    if (mb) mb.value = v;
    if (ml) ml.value = v;
  }
  setIf('topPad','topPad'); // legacy hidden

  setIf('seed','seed');
  setIf('entrySide','entry');
  setIf('exitSide','exit');
  setIf('difficulty','diff');
  setIf('preset','preset');
  if (sp.has("print")) setToggle(document.getElementById("printToggle"), sp.get("print")==="1");
  if (sp.has("solution")) setToggle(document.getElementById("solutionToggle"), sp.get("solution")==="1");
  if (sp.has("sameRow")) setToggle(document.getElementById("sameRowToggle"), sp.get("sameRow")==="1");
  if (sp.has("dpi")) document.getElementById("exportDpi").value = sp.get("dpi");
  if (sp.has("topIn")) document.getElementById("topIn").value = sp.get("topIn");
}

/* ===========================
   Batch download (sequential)
   - No ZIP to keep it dependency-free.
   =========================== */
function sleep(ms){ return new Promise(r=>setTimeout(r,ms)); }

async function batchGenerate(){
  const count = clamp(toInt(document.getElementById("batchCount").value, 20), 2, 200);
  const fmt = document.getElementById("batchFormat").value;

  // base params from UI
  const p = readParamsFromUI();
  const diff = document.getElementById("difficulty").value;
  const braidFactor = braidFactorFromDifficulty(diff);

  const printMode = getToggle(document.getElementById("printToggle"));
  const dpi = toInt(document.getElementById("exportDpi").value, 300);
  const topIn = clamp(toFloat(document.getElementById("topIn").value, 1.0), 0, 3);
  const showSol = getToggle(document.getElementById("solutionToggle"));

  setWarn(`Batch: ${count} (${fmt.toUpperCase()})…`, "ok");

  for (let i=1;i<=count;i++){
    const seedBase = p.seed || "APML";
    const seed = `${seedBase}::${String(i).padStart(3,"0")}`;

    const rngMaze = makeRng(seed);
    const grid = generateMaze(p.cols, p.rows, rngMaze);
    braidMaze(grid, makeRng(seed+"::braid"), braidFactor);

    const rngOpen = makeRng(seed+"::openings");
    const {entry, exit} = chooseEntryExit(p.cols, p.rows, rngOpen, p.entrySide, p.exitSide, p.sameRow);
    lastEntry = entry; lastExit = exit;
    openBoundary(grid, lastEntry);
    openBoundary(grid, lastExit);

    if (fmt === "svg"){
      const svg = mazeToSVG(grid, {
        cell: p.cell, road: p.road, pads: p.pads,
        showSolution: showSol,
        printMode,
        dpi,
        topIn
      });
      downloadText(`ap-mazelab-${String(i).padStart(3,"0")}.svg`, svg, "image/svg+xml");
    } else {
      // png: in print mode, render offscreen at DPI; else render at preview px
      if (!printMode){
        const off = document.createElement("canvas");
        drawMazeToCanvas(off, grid, p.cell, p.road, p.pads, showSol);
        const blob = await new Promise(res=>off.toBlob(res,"image/png"));
        downloadBlob(`ap-mazelab-${String(i).padStart(3,"0")}.png`, blob);
      } else {
        const Wpx = Math.round(10*dpi);
        const Hpx = Math.round(8*dpi);
        const topPadPx = Math.round(topIn*dpi);
        const cellFit = Math.floor(Math.min((Wpx-2)/p.cols, (Hpx-topPadPx-2)/p.rows));
        const cell = Math.max(2, cellFit);
        const road = Math.max(2, Math.round(p.road * (cell / p.cell)));

        const off = document.createElement("canvas");
        drawMazeToCanvas(off, grid, cell, road, {t: topPadPx, r: topPadPx, b: topPadPx, l: topPadPx}, showSol);
        const blob = await new Promise(res=>off.toBlob(res,"image/png"));
        downloadBlob(`ap-mazelab-10x8-${dpi}dpi-${String(i).padStart(3,"0")}.png`, blob);
      }
    }

    // small delay to keep browsers happy
    await sleep(120);
  }

  setWarn("Batch listo ✅", "autoHide");
  updateSizeInfo();
}

/* ===========================
   Wire UI events
   =========================== */
document.getElementById('gen').addEventListener('click', regenerate);

document.getElementById('randSeed').addEventListener('click', () => {
  const stamp = Date.now().toString(36).toUpperCase();
  const rnd = Math.random().toString(36).slice(2, 7).toUpperCase();
  document.getElementById('seed').value = `APML-${stamp}-${rnd}`;
  regenerate();
});

document.getElementById('svg').addEventListener('click', () => {
  if (!lastGrid) regenerate();
  const p = lastParams || readParamsFromUI();
  const printMode = getToggle(document.getElementById("printToggle"));
  const dpi = toInt(document.getElementById("exportDpi").value, 300);
  const topIn = clamp(toFloat(document.getElementById("topIn").value, 1.0), 0, 3);

  const svg = mazeToSVG(lastGrid, {
    cell: p.cell, road: p.road, pads: p.pads,
    showSolution: getToggle(document.getElementById("solutionToggle")),
    printMode,
    dpi,
    topIn
  });
  downloadText('ap-mazelab-maze.svg', svg, 'image/svg+xml');
});

document.getElementById('png').addEventListener('click', exportPNG);
document.getElementById('pdf').addEventListener('click', exportPDF);

document.getElementById('share').addEventListener('click', async () => {
  const p = lastParams || readParamsFromUI();
  const url = buildShareURL({
    lang: currentLang,
    cols: p.cols, rows: p.rows, cell: p.cell, road: p.road, pads: p.pads,
    seed: p.seed || "",
    entry: p.entrySide,
    exit: p.exitSide,
    sameRow: p.sameRow ? 1 : 0,
    solution: getToggle(document.getElementById("solutionToggle")) ? 1 : 0,
    print: getToggle(document.getElementById("printToggle")) ? 1 : 0,
    dpi: document.getElementById("exportDpi").value,
    topIn: document.getElementById("topIn").value,
    diff: document.getElementById("difficulty").value,
    preset: document.getElementById("preset").value
  });

  try{
    await navigator.clipboard.writeText(url);
    setWarn(i18n[currentLang].linkCopied, "autoHide");
  }catch{
    prompt("Copy this link:", url);
  }
});

document.getElementById('reset').addEventListener('click', () => {
  document.getElementById("difficulty").value = "custom";
  document.getElementById("preset").value = "none";
  document.getElementById("cols").value = 30;
  document.getElementById("rows").value = 20;
  document.getElementById("cell").value = 24;
  document.getElementById("road").value = 10;
  try{ document.getElementById('marginMode').value = 'linked'; }catch(e){}
  try{ document.getElementById('marginAll').value = 24; }catch(e){}
  try{ document.getElementById('marginTop').value = 24; document.getElementById('marginRight').value = 24; document.getElementById('marginBottom').value = 24; document.getElementById('marginLeft').value = 24; }catch(e){}
  document.getElementById("topPad").value = 90;
  document.getElementById("seed").value = "";
  document.getElementById("entrySide").value = "random";
  document.getElementById("exitSide").value = "random";
  document.getElementById("exportDpi").value = "300";
  document.getElementById("topIn").value = "1.0";
  setToggle(document.getElementById("printToggle"), false);
  setToggle(document.getElementById("solutionToggle"), false);
  setToggle(document.getElementById("sameRowToggle"), false);
  hideWarn();
  regenerate();
});

document.getElementById('about').addEventListener('click', () => {
  alert(i18n[currentLang].aboutText);
});

document.getElementById('batch').addEventListener('click', batchGenerate);

document.getElementById("difficulty").addEventListener("change", (e)=>{
  if (e.target.value !== "custom") applyDifficultyPreset(e.target.value);
  regenerate();
});

document.getElementById("preset").addEventListener("change", (e)=>{
  applyPreset(e.target.value);
  regenerate();
});

// Enter key => generate
document.addEventListener("keydown", (e)=>{
  if (e.key === "Enter" && (e.target.tagName === "INPUT" || e.target.tagName === "SELECT")){
    regenerate();
  }
});

// Language selector
document.getElementById("lang").addEventListener("change", (e) => {
  applyLang(e.target.value);
  updateSizeInfo();
});


// Play difficulty quick selector
(function(){
  const sel = document.getElementById('playDifficultySel');
  const panel = document.getElementById('playCustomPanel');
  const btnApply = document.getElementById('btnPlayApply');
  const inCols = document.getElementById('playCols');
  const inRows = document.getElementById('playRows');

  if (!sel) return;

  function applyPlayPreset(v){
    // Reasonable defaults for play (keeps on-screen readable)
    if (v === 'easy'){
      document.getElementById('cols').value = 18;
      document.getElementById('rows').value = 12;
      document.getElementById('cell').value = 28;
      document.getElementById('road').value = 10;
      document.getElementById('difficulty').value = 'easy';
    } else if (v === 'medium'){
      document.getElementById('cols').value = 28;
      document.getElementById('rows').value = 18;
      document.getElementById('cell').value = 24;
      document.getElementById('road').value = 10;
      document.getElementById('difficulty').value = 'medium';
    } else if (v === 'hard'){
      document.getElementById('cols').value = 40;
      document.getElementById('rows').value = 26;
      document.getElementById('cell').value = 20;
      document.getElementById('road').value = 9;
      document.getElementById('difficulty').value = 'hard';
    }
  }

  function syncCustomInputs(){
    inCols.value = document.getElementById('cols').value;
    inRows.value = document.getElementById('rows').value;
  }

  sel.addEventListener('change', ()=>{
    const v = sel.value;
    if (v === 'custom'){
      if (panel) panel.style.display = '';
      syncCustomInputs();
      return;
    }
    if (panel) panel.style.display = 'none';
    applyPlayPreset(v);
    regenerate();
    // if currently in play mode, restart the run
    try{ if (document.body.classList.contains('apml-playing')) window.apmlStartPlay?.(); }catch(e){}
  });

  btnApply?.addEventListener('click', ()=>{
    document.getElementById('difficulty').value = 'custom';
    document.getElementById('cols').value = inCols.value;
    document.getElementById('rows').value = inRows.value;
    regenerate();
    try{ if (document.body.classList.contains('apml-playing')) window.apmlStartPlay?.(); }catch(e){}
  });
})();


// Toggles
function hookToggle(id, onChange){
  const el = document.getElementById(id);
  const act = ()=>{
    setToggle(el, !getToggle(el));
    onChange?.();
  };
  el.addEventListener("click", act);
  el.addEventListener("keydown", (e)=>{ if (e.key===" " || e.key==="Enter"){ e.preventDefault(); act(); } });
}
hookToggle("printToggle", ()=>{ updateSizeInfo(); });
hookToggle("solutionToggle", ()=>{ regenerate(); });
hookToggle("sameRowToggle", ()=>{ regenerate(); });

/* ===========================
   Init
   =========================== */
applyURLParamsToUI();
// Margin UI wiring
try{
  syncMarginUI();
  document.getElementById('marginMode')?.addEventListener('change', ()=>{ syncMarginUI(); regenerate(); updateSizeInfo(); });
  ['marginAll','marginTop','marginRight','marginBottom','marginLeft'].forEach(id=>{
    document.getElementById(id)?.addEventListener('change', ()=>{ regenerate(); updateSizeInfo(); });
  });
}catch(e){}
applyLang(detectLang());
regenerate();
updateSizeInfo();



/* ============================================================
   Play mode implementation (keyboard/touch) + Local scores
   Depends on globals from the generator script:
   - canvas, lastGrid, lastParams, lastEntry, lastExit
   - regenerate(), drawMazeToCanvas()
   ============================================================ */

// Local scores (browser-only)
(function(){
  const SCORES_KEY = 'apml_local_scores_v1';
  const MAX_SCORES = 10;

  function loadScores(){
    try { return JSON.parse(localStorage.getItem(SCORES_KEY) || '[]'); }
    catch { return []; }
  }
  function saveScores(scores){
    localStorage.setItem(SCORES_KEY, JSON.stringify(scores));
  }

  function renderScores(){
    const wrap = document.getElementById('localScores');
    if (!wrap) return;
    const scores = loadScores();
    if (!scores.length){
      wrap.innerHTML = `<div class="mini">Todavía no hay puntajes. Ganá un laberinto en Play mode.</div>`;
      return;
    }
    wrap.innerHTML = scores.map((s, i)=>{
      const d = new Date(s.ts);
      const date = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
      return `<div class="scoreRow">
        <div>#${i+1} — ${s.w}×${s.h}</div>
        <div><b>${s.sec}s</b> <span class="mini">(${date})</span></div>
      </div>`;
    }).join('');
  }

  function registerWin({w,h,sec}){
    const entry = {ts: Date.now(), w, h, sec};
    const scores = loadScores();
    scores.push(entry);
    scores.sort((a,b)=>a.sec-b.sec);
    saveScores(scores.slice(0, MAX_SCORES));
    renderScores();
  }

  window.apmlRegisterWin = registerWin;
  window.apmlRenderScores = renderScores;
  renderScores();
})();

// Player controller
(function(){
  // Defensive checks (in case something changes)
  const c = document.getElementById('canvas');
  if (!c) return;

  const timeEl = document.getElementById('playTime');
  const movesEl = document.getElementById('playMoves');

  const btnNew = document.getElementById('btnPlayNew');
  const btnReset = document.getElementById('btnPlayReset');
  const btnExit = document.getElementById('btnPlayExit');

  let startTs = null;
  let tick = null;
  let moves = 0;
  let player = {x:0,y:0};
  let playing = false;

  function secs(){
    if (!startTs) return 0;
    return Math.floor((Date.now()-startTs)/1000);
  }
  function updateHud(){
    if (timeEl) timeEl.textContent = `${secs()}s`;
    if (movesEl) movesEl.textContent = String(moves);
  }
  function startTimer(){
    startTs = Date.now();
    if (tick) clearInterval(tick);
    tick = setInterval(updateHud, 250);
    updateHud();
  }
  function stopTimer(){
    if (tick) clearInterval(tick);
    tick = null;
  }

  function drawPlayerAndExit(){
    if (!lastGrid || !lastParams) return;

    const ctx = c.getContext('2d');
    const cell = lastParams.cell;
    const padT = lastParams.pads?.t ?? lastParams.topPad ?? 0;
    const padL = lastParams.pads?.l ?? 0;
    const ox = 1 + padL;
    const oy = 1 + padT;

    // exit marker
    if (lastExit){
      const ex = ox + lastExit.x*cell + cell/2;
      const ey = oy + lastExit.y*cell + cell/2;
      ctx.beginPath();
      ctx.fillStyle = "rgba(34,197,94,.45)";
      ctx.arc(ex, ey, Math.max(6, Math.floor(cell*0.22)), 0, Math.PI*2);
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgba(34,197,94,.95)";
      ctx.stroke();
    }

    // player marker
    const px = ox + player.x*cell + cell/2;
    const py = oy + player.y*cell + cell/2;
    ctx.beginPath();
    ctx.fillStyle = "rgba(245,158,11,.55)";
    ctx.arc(px, py, Math.max(6, Math.floor(cell*0.24)), 0, Math.PI*2);
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgba(245,158,11,.95)";
    ctx.stroke();
  }

  function redrawPlay(){
    // draw base maze without solution overlay (play shouldn't show solution)
    if (!lastGrid || !lastParams) return;
    try{
      drawMazeToCanvas(c, lastGrid, lastParams.cell, lastParams.road, lastParams.pads, false);
      drawPlayerAndExit();
    }catch(e){}
  }

  function canMove(dir){
    // dir: 0 N,1 E,2 S,3 W
    const grid = lastGrid;
    if (!grid) return false;
    const cell = grid[player.y][player.x];
    return !cell.walls[dir];
  }

  function move(dir){
    if (!playing) return;
    const grid = lastGrid;
    if (!grid) return;

    const dx = [0,1,0,-1];
    const dy = [-1,0,1,0];

    if (!canMove(dir)) return;

    const nx = player.x + dx[dir];
    const ny = player.y + dy[dir];

    // stay inside grid
    if (nx < 0 || ny < 0 || ny >= grid.length || nx >= grid[0].length) return;

    player.x = nx;
    player.y = ny;
    moves += 1;
    redrawPlay();
    updateHud();

    if (lastExit && player.x === lastExit.x && player.y === lastExit.y){
      playing = false;
      stopTimer();
      updateHud();

      const w = lastParams?.cols ?? grid[0].length;
      const h = lastParams?.rows ?? grid.length;
      const sec = secs();
      try{ window.apmlRegisterWin({w,h,sec}); }catch(e){}
      try{ window.apmlRenderScores?.(); }catch(e){}
      setTimeout(()=>alert(`🎉 ¡Ganaste! Tiempo: ${sec}s — Movimientos: ${moves}`), 30);
    }
  }

  function resetRun(){
    const grid = lastGrid;
    if (!grid || !lastEntry) return;
    player = {x: lastEntry.x, y: lastEntry.y};
    moves = 0;
    playing = true;
    startTimer();
    redrawPlay();
    updateHud();
  }

  function newMaze(){
    // reuse existing generator to keep everything consistent
    try{ regenerate(); }catch(e){}
    resetRun();
  }

  function exitPlay(){
    // switch to print mode
    localStorage.setItem('apml_mode', 'print');
    const homeOverlay = document.getElementById('homeOverlay');
    homeOverlay?.classList.add('hidden');
    const playHud = document.getElementById('playHud');
    const playScores = document.getElementById('playScores');
    if (playHud) playHud.style.display = 'none';
    if (playScores) playScores.style.display = 'none';

    // redraw original preview (respecting solution toggle)
    try{
      if (lastGrid && lastParams) {
        drawMazeToCanvas(c, lastGrid, lastParams.cell, lastParams.road, lastParams.pads, lastParams.showSolution);
      }
    }catch(e){}
  }

  btnNew?.addEventListener('click', newMaze);
  btnReset?.addEventListener('click', resetRun);
  btnExit?.addEventListener('click', exitPlay);

  // Keyboard controls
  window.addEventListener('keydown', (e)=>{
    if (!playing) return;
    if (e.key === 'ArrowUp') { e.preventDefault(); move(0); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); move(1); }
    else if (e.key === 'ArrowDown') { e.preventDefault(); move(2); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); move(3); }
  }, {passive:false});
  // Mobile controls: use on-screen D-Pad (see below)


  // D-pad controls (mobile)
  const dpad = document.getElementById('dpad');
  if (dpad){
    const btns = Array.from(dpad.querySelectorAll('.dpad-btn'));
    const dirMap = {up:0, right:1, down:2, left:3};
    const handle = (ev)=>{
      if (!playing) return;
      ev.preventDefault();
      const dir = ev.currentTarget?.getAttribute('data-dir');
      if (!dir) return;
      move(dirMap[dir]);
    };
    btns.forEach(b=>{
      b.addEventListener('pointerdown', handle, {passive:false});
      b.addEventListener('touchstart', handle, {passive:false});
      b.addEventListener('click', (e)=>{ e.preventDefault(); }, {passive:false});
    });
  }
  // Expose a start function for mode switcher
  window.apmlStartPlay = function(){
    // ensure maze exists
    try{ if (!lastGrid) regenerate(); }catch(e){}
    resetRun();
  };
})();
