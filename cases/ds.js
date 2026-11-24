/* laís.ds — the design system of this portfolio, rendered as a case page (PT / EN / ES). */
const DS = {
 pt: {
  hud: 'Design system · Este portfólio', title: 'laís.ds',
  sub: 'O sistema por trás deste portfólio: cores, tipos, componentes e uma mascote que virou cursor, em três línguas e dois temas.',
  meta: [['Papel', 'Idealizadora · design e código'], ['Escopo', 'Página inicial, 4 cases, currículo, PT/EN/ES, tema claro e escuro'], ['Base', 'HTML, CSS e JavaScript, sem framework']],
  stats: [['2', 'fontes: Outfit nos títulos e Inter no texto'], ['6', 'cores na paleta, cada uma com par para o tema escuro'], ['3', 'expressões da mascote, cada uma com uma função']],
  hPrinc: 'Princípios', princ: [['Acolhedor', 'A mascote e o tom de conversa fazem a página parecer uma pessoa, não um currículo em PDF.'], ['Claro primeiro', 'Duas fontes, hierarquia forte e todo texto acima do contraste mínimo AA.'], ['Feito para os dois temas', 'Toda cor nasce em par, claro e escuro, então nada quebra ao trocar o tema.']],
  hColor: 'Cor', colorP: 'Seis cores, cada uma com um papel. A regra de proporção é 60% creme, 30% vinho e marrom, 10% rosa e matcha, e o matcha nunca aparece em bloco grande ao lado do vinho.',
  roles: { wine: 'principal: títulos, botões, faixas', rose: 'destaques e detalhes', blush: 'fundos suaves, texto sobre vinho', matcha: 'só sinais: disponível, agora', brown: 'apoio, texto secundário', cream: 'fundo da página' },
  hTokens: 'Tokens de cor', tokCols: ['Token', 'Uso', 'Claro', 'Escuro'],
  tokens: [['--bg', 'fundo'], ['--card2', 'cartões'], ['--ink', 'texto'], ['--mut', 'texto de apoio'], ['--line', 'bordas'], ['--peach2', 'fundos de destaque'], ['--blushT', 'texto de destaque']],
  hContrast: 'Contraste', contrastP: 'Medido com a fórmula do WCAG 2.1. O mínimo para texto comum é 4,5:1.', cCols: ['Texto sobre fundo', 'Razão', 'Nível'],
  hType: 'Tipografia', typeP: 'Outfit dá personalidade aos títulos; Inter garante leitura confortável no texto. Nenhuma outra fonte entra no site.',
  typeRows: [['Título do topo', 'Outfit 700 · 36–58 px'], ['Título de seção', 'Outfit 700 · 34–52 px'], ['Título de cartão', 'Outfit 600 · 22 px'], ['Corpo', 'Inter 400 · 16 px / 1,6'], ['Rótulo', 'Inter 600–700 · 11–12 px · caixa alta']],
  sample: 'Desenho produtos que as pessoas entendem.',
  hShape: 'Forma e espaço', shapeP: 'Cantos sempre arredondados, do jeito do traço da ilustração. A sombra só aparece quando algo responde ao mouse.',
  radii: [['999 px', 'botões, chips, selos'], ['18 px', 'cartões e caixas'], ['24 px', 'cartões de destaque'], ['12 px', 'chips quadrados'], ['50%', 'avatares e carinhas']],
  hComp: 'Componentes', compP: 'Os blocos que se repetem pelo site. Todos funcionam no teclado e nos dois temas.',
  cBtn: 'Botões', btnMain: 'Ver meus projetos', btnLine: 'Falar comigo', cTags: 'Etiquetas e chips', tag: 'Fintech · emprego atual', chips: ['Pesquisa', 'Prototipagem', 'UX writing'],
  cMeta: 'Linha de metadados', metaDemo: [['Papel', 'UX/UI e QA'], ['Tempo', 'Desde abr/2026'], ['Time', '6 pessoas']],
  cStatus: 'Selos de status', now: 'Agora', avail: 'Disponível para novas oportunidades', wip: 'Backend em processo',
  cFolder: 'Pasta', folder: 'ex_arquiteta', cQuote: 'Citação', quote: 'Seu método de trabalho é organizado e rigoroso.', quoteBy: 'Thiago Caetano, Tech Lead',
  hMascot: 'Mascote', mascotP: 'A ilustração da Laís nunca é alterada: ela aparece inteira no topo e as carinhas viram cursor, balões e adesivos. Cada expressão tem uma função.',
  faces: [['sorri', 'Padrão', 'Acompanha a navegação e dá boas-vindas.'], ['pisca', 'Convite', 'Aparece em contato, e-mail e “falar comigo”.'], ['surpresa', 'Descoberta', 'Aparece nos projetos e nas curiosidades.']],
  hMotion: 'Movimento', motion: [['0,15 s', 'Feedback de botão: sobe 2 px.'], ['0,2–0,35 s', 'Hover de cartões, pastas e chips, com uma mola suave.'], ['Loops lentos', 'Órbita e faixa do contato são só decoração.'], ['Movimento reduzido', 'Quem pede menos movimento no sistema vê tudo parado.']],
  hA11y: 'Acessibilidade', a11y: ['Atalho “pular para os projetos” para quem usa teclado.', 'Foco visível com contorno de 3 px em todos os elementos clicáveis.', 'Texto alternativo em todas as imagens, nas três línguas.', 'Balões de fala anunciados para leitores de tela.', 'Idioma da página atualizado ao trocar PT, EN ou ES.'],
  hVoice: 'Voz e tom', voiceP: 'Escrevo como falo com o time: frases curtas, verbos no começo e números reais, nunca inventados.',
  doLbl: 'Assim', dontLbl: 'Não assim', voice: [['Bora criar algo juntos?', 'Entre em contato para futuras oportunidades de colaboração.'], ['34 pontos encontrados antes do lançamento.', 'Melhorei muito a qualidade do produto.']],
  hNext: 'O que vem depois', next: ['Ilustração em SVG com camadas, para a mascote ganhar animações sem perder o traço.', 'Biblioteca deste sistema no Figma, espelhando os tokens do código.']
 },
 en: {
  hud: 'Design system · This portfolio', title: 'laís.ds',
  sub: 'The system behind this portfolio: colors, type, components and a mascot that became a cursor, in three languages and two themes.',
  meta: [['Role', 'Creator · design and code'], ['Scope', 'Home page, 4 cases, résumé, PT/EN/ES, light and dark themes'], ['Built with', 'HTML, CSS and JavaScript, no framework']],
  stats: [['2', 'typefaces: Outfit for titles, Inter for text'], ['6', 'colors in the palette, each paired for the dark theme'], ['3', 'mascot expressions, each with a job']],
  hPrinc: 'Principles', princ: [['Welcoming', 'The mascot and the conversational tone make the page feel like a person, not a PDF résumé.'], ['Clarity first', 'Two typefaces, strong hierarchy and every text above the AA contrast minimum.'], ['Built for both themes', 'Every color is born as a light/dark pair, so nothing breaks when the theme changes.']],
  hColor: 'Color', colorP: 'Six colors, each with a role. The ratio rule is 60% cream, 30% wine and brown, 10% pink and matcha, and matcha never sits in a large block next to wine.',
  roles: { wine: 'primary: titles, buttons, bands', rose: 'highlights and details', blush: 'soft backgrounds, text on wine', matcha: 'signals only: available, now', brown: 'support, secondary text', cream: 'page background' },
  hTokens: 'Color tokens', tokCols: ['Token', 'Use', 'Light', 'Dark'],
  tokens: [['--bg', 'background'], ['--card2', 'cards'], ['--ink', 'text'], ['--mut', 'supporting text'], ['--line', 'borders'], ['--peach2', 'highlight backgrounds'], ['--blushT', 'highlight text']],
  hContrast: 'Contrast', contrastP: 'Measured with the WCAG 2.1 formula. The minimum for regular text is 4.5:1.', cCols: ['Text on background', 'Ratio', 'Level'],
  hType: 'Typography', typeP: 'Outfit gives the titles personality; Inter keeps body text easy to read. No other typeface is used on the site.',
  typeRows: [['Hero title', 'Outfit 700 · 36–58 px'], ['Section title', 'Outfit 700 · 34–52 px'], ['Card title', 'Outfit 600 · 22 px'], ['Body', 'Inter 400 · 16 px / 1.6'], ['Label', 'Inter 600–700 · 11–12 px · uppercase']],
  sample: 'I design products people understand.',
  hShape: 'Shape and space', shapeP: 'Corners are always rounded, like the strokes of the illustration. Shadows only appear when something responds to the mouse.',
  radii: [['999 px', 'buttons, chips, badges'], ['18 px', 'cards and boxes'], ['24 px', 'highlight cards'], ['12 px', 'square chips'], ['50%', 'avatars and faces']],
  hComp: 'Components', compP: 'The building blocks repeated across the site. All of them work with the keyboard and in both themes.',
  cBtn: 'Buttons', btnMain: 'See my projects', btnLine: 'Get in touch', cTags: 'Tags and chips', tag: 'Fintech · current job', chips: ['Research', 'Prototyping', 'UX writing'],
  cMeta: 'Metadata row', metaDemo: [['Role', 'UX/UI & QA'], ['Duration', 'Since Apr 2026'], ['Team', '6 people']],
  cStatus: 'Status badges', now: 'Now', avail: 'Available for new opportunities', wip: 'Backend in progress',
  cFolder: 'Folder', folder: 'ex_architect', cQuote: 'Quote', quote: 'Her way of working is organized and rigorous.', quoteBy: 'Thiago Caetano, Tech Lead',
  hMascot: 'Mascot', mascotP: 'The illustration of Laís is never altered: it appears whole at the top, and the faces become the cursor, speech bubbles and stickers. Each expression has a job.',
  faces: [['sorri', 'Default', 'Follows navigation and says hello.'], ['pisca', 'Invitation', 'Shows up on contact, email and “get in touch”.'], ['surpresa', 'Discovery', 'Shows up on projects and fun facts.']],
  hMotion: 'Motion', motion: [['0.15 s', 'Button feedback: lifts 2 px.'], ['0.2–0.35 s', 'Hover on cards, folders and chips, with a soft spring.'], ['Slow loops', 'The orbit and the contact ticker are decoration only.'], ['Reduced motion', 'If the system asks for less motion, everything stays still.']],
  hA11y: 'Accessibility', a11y: ['A “skip to projects” shortcut for keyboard users.', 'Visible 3 px focus outline on every clickable element.', 'Alt text on every image, in all three languages.', 'Speech bubbles announced to screen readers.', 'The page language updates when switching PT, EN or ES.'],
  hVoice: 'Voice and tone', voiceP: 'I write the way I talk to my team: short sentences, verbs first and real numbers, never made-up ones.',
  doLbl: 'Like this', dontLbl: 'Not like this', voice: [['Let’s create something together?', 'Please contact me regarding future collaboration opportunities.'], ['34 issues found before launch.', 'I greatly improved product quality.']],
  hNext: 'What comes next', next: ['A layered SVG illustration, so the mascot can animate without losing its strokes.', 'A Figma library of this system, mirroring the code tokens.']
 },
 es: {
  hud: 'Design system · Este portafolio', title: 'laís.ds',
  sub: 'El sistema detrás de este portafolio: colores, tipografías, componentes y una mascota que se volvió cursor, en tres idiomas y dos temas.',
  meta: [['Rol', 'Creadora · diseño y código'], ['Alcance', 'Inicio, 4 casos, currículum, PT/EN/ES, tema claro y oscuro'], ['Base', 'HTML, CSS y JavaScript, sin framework']],
  stats: [['2', 'tipografías: Outfit en títulos e Inter en el texto'], ['6', 'colores en la paleta, cada uno con su par para el tema oscuro'], ['3', 'expresiones de la mascota, cada una con una función']],
  hPrinc: 'Principios', princ: [['Acogedor', 'La mascota y el tono de conversación hacen que la página parezca una persona, no un currículum en PDF.'], ['Claridad primero', 'Dos tipografías, jerarquía fuerte y todo texto por encima del contraste mínimo AA.'], ['Hecho para los dos temas', 'Cada color nace en par, claro y oscuro, así nada se rompe al cambiar el tema.']],
  hColor: 'Color', colorP: 'Seis colores, cada uno con un rol. La regla de proporción es 60% crema, 30% vino y marrón, 10% rosa y matcha, y el matcha nunca aparece en un bloque grande junto al vino.',
  roles: { wine: 'principal: títulos, botones, franjas', rose: 'destacados y detalles', blush: 'fondos suaves, texto sobre vino', matcha: 'solo señales: disponible, ahora', brown: 'apoyo, texto secundario', cream: 'fondo de la página' },
  hTokens: 'Tokens de color', tokCols: ['Token', 'Uso', 'Claro', 'Oscuro'],
  tokens: [['--bg', 'fondo'], ['--card2', 'tarjetas'], ['--ink', 'texto'], ['--mut', 'texto de apoyo'], ['--line', 'bordes'], ['--peach2', 'fondos destacados'], ['--blushT', 'texto destacado']],
  hContrast: 'Contraste', contrastP: 'Medido con la fórmula de WCAG 2.1. El mínimo para texto normal es 4,5:1.', cCols: ['Texto sobre fondo', 'Razón', 'Nivel'],
  hType: 'Tipografía', typeP: 'Outfit da personalidad a los títulos; Inter garantiza una lectura cómoda. Ninguna otra tipografía entra en el sitio.',
  typeRows: [['Título principal', 'Outfit 700 · 36–58 px'], ['Título de sección', 'Outfit 700 · 34–52 px'], ['Título de tarjeta', 'Outfit 600 · 22 px'], ['Cuerpo', 'Inter 400 · 16 px / 1,6'], ['Etiqueta', 'Inter 600–700 · 11–12 px · mayúsculas']],
  sample: 'Diseño productos que las personas entienden.',
  hShape: 'Forma y espacio', shapeP: 'Esquinas siempre redondeadas, como el trazo de la ilustración. La sombra solo aparece cuando algo responde al mouse.',
  radii: [['999 px', 'botones, chips, sellos'], ['18 px', 'tarjetas y cajas'], ['24 px', 'tarjetas destacadas'], ['12 px', 'chips cuadrados'], ['50%', 'avatares y caritas']],
  hComp: 'Componentes', compP: 'Los bloques que se repiten en el sitio. Todos funcionan con teclado y en los dos temas.',
  cBtn: 'Botones', btnMain: 'Ver mis proyectos', btnLine: 'Hablemos', cTags: 'Etiquetas y chips', tag: 'Fintech · empleo actual', chips: ['Investigación', 'Prototipado', 'UX writing'],
  cMeta: 'Fila de metadatos', metaDemo: [['Rol', 'UX/UI y QA'], ['Duración', 'Desde abr/2026'], ['Equipo', '6 personas']],
  cStatus: 'Sellos de estado', now: 'Ahora', avail: 'Disponible para nuevas oportunidades', wip: 'Backend en proceso',
  cFolder: 'Carpeta', folder: 'ex_arquitecta', cQuote: 'Cita', quote: 'Su método de trabajo es organizado y riguroso.', quoteBy: 'Thiago Caetano, Tech Lead',
  hMascot: 'Mascota', mascotP: 'La ilustración de Laís nunca se altera: aparece entera arriba y las caritas se vuelven cursor, globos y stickers. Cada expresión tiene una función.',
  faces: [['sorri', 'Por defecto', 'Acompaña la navegación y da la bienvenida.'], ['pisca', 'Invitación', 'Aparece en contacto, correo y “hablemos”.'], ['surpresa', 'Descubrimiento', 'Aparece en los proyectos y en las curiosidades.']],
  hMotion: 'Movimiento', motion: [['0,15 s', 'Feedback del botón: sube 2 px.'], ['0,2–0,35 s', 'Hover de tarjetas, carpetas y chips, con un resorte suave.'], ['Loops lentos', 'La órbita y la franja del contacto son solo decoración.'], ['Movimiento reducido', 'Si el sistema pide menos movimiento, todo queda quieto.']],
  hA11y: 'Accesibilidad', a11y: ['Atajo “saltar a los proyectos” para quien usa teclado.', 'Foco visible con contorno de 3 px en todo elemento clicable.', 'Texto alternativo en todas las imágenes, en los tres idiomas.', 'Globos de diálogo anunciados a los lectores de pantalla.', 'El idioma de la página se actualiza al cambiar PT, EN o ES.'],
  hVoice: 'Voz y tono', voiceP: 'Escribo como hablo con el equipo: frases cortas, verbos al inicio y números reales, nunca inventados.',
  doLbl: 'Así', dontLbl: 'Así no', voice: [['¿Creamos algo juntos?', 'Póngase en contacto para futuras oportunidades de colaboración.'], ['34 puntos encontrados antes del lanzamiento.', 'Mejoré mucho la calidad del producto.']],
  hNext: 'Lo que viene', next: ['Ilustración en SVG con capas, para que la mascota gane animaciones sin perder el trazo.', 'Biblioteca de este sistema en Figma, reflejando los tokens del código.']
 }
};

function dsView(lang, esc, backLabel, nextLabel) {
  const D = DS[lang] || DS.pt;
  const PAL = [['wine', 'Vinho', '#8E0926'], ['rose', 'Rosa', '#CB7288'], ['blush', 'Rosa claro', '#EDC4C8'], ['matcha', 'Matcha', '#B5C46F'], ['brown', 'Marrom', '#6A4228'], ['cream', 'Creme', '#FBF7F3']];
  const TOK = { '--bg': ['#FBF7F3', '#1C0F12'], '--card2': ['#FFFFFF', '#261519'], '--ink': ['#3A1A1F', '#F6E9EA'], '--mut': ['#6E5450', '#C9AEB0'], '--line': ['#EFDFE0', '#3C2328'], '--peach2': ['#F8E6E8', '#3A1D24'], '--blushT': ['#8E0926', '#EDC4C8'] };
  const CON = [['#3A1A1F', '#FBF7F3', '14.6'], ['#6E5450', '#FBF7F3', '6.5'], ['#8E0926', '#FBF7F3', '8.9'], ['#FFFFFF', '#8E0926', '9.5'], ['#EDC4C8', '#8E0926', '6.0'], ['#3A1A1F', '#F6DDE1', '12.1'], ['#F6E9EA', '#1C0F12', '15.8'], ['#C9AEB0', '#1C0F12', '9.0'], ['#4F5A1C', '#EEF2D9', '6.5']];
  const FACE = { sorri: 'img/lais-cara.webp', pisca: 'img/cara-pisca.webp', surpresa: 'img/cara-surpresa.webp' };
  const sw = (h) => `<span class="ds-sw" style="background:${h}"></span>`;
  const lvl = (r) => +r >= 7 ? 'AAA' : 'AA';
  const dec = (rows) => `<div class="decisions">${rows.map(([b, s]) => `<div class="dec"><b>${esc(b)}</b><span>${esc(s)}</span></div>`).join('')}</div>`;
  return `<article class="case ds"><div class="wrap">
 <button class="back" data-home>${esc(backLabel)}</button>
 <p class="hud">${esc(D.hud)}</p>
 <h1>${esc(D.title)}</h1>
 <p class="sub">${esc(D.sub)}</p>
 <div class="meta">${D.meta.map(([b, s]) => `<div><b>${esc(b)}</b><span>${esc(s)}</span></div>`).join('')}</div>
 <div class="stats">${D.stats.map(([b, s]) => `<div class="stat"><b>${esc(b)}</b>${esc(s)}</div>`).join('')}</div>

 <h2>${esc(D.hPrinc)}</h2>${dec(D.princ)}

 <h2>${esc(D.hColor)}</h2><p>${esc(D.colorP)}</p>
 <div class="ds-pal">${PAL.map(([k, n, h]) => `<div class="ds-chip"><span style="background:${h}"></span><b>${esc(n)}</b><code>${h}</code><small>${esc(D.roles[k])}</small></div>`).join('')}</div>
 <h3>${esc(D.hTokens)}</h3>
 <div class="tblwrap"><table class="tbl"><thead><tr>${D.tokCols.map(c => `<th>${esc(c)}</th>`).join('')}</tr></thead><tbody>${D.tokens.map(([t, u]) => `<tr><td class="k"><code>${t}</code></td><td>${esc(u)}</td><td>${sw(TOK[t][0])}<code>${TOK[t][0]}</code></td><td>${sw(TOK[t][1])}<code>${TOK[t][1]}</code></td></tr>`).join('')}</tbody></table></div>

 <h2>${esc(D.hContrast)}</h2><p>${esc(D.contrastP)}</p>
 <div class="ds-con">${CON.map(([f, b, r]) => `<div class="ds-ci" style="background:${b};color:${f}"><span>Aa</span><small>${f} / ${b}</small><b>${r.replace('.', lang === 'en' ? '.' : ',')}:1 · ${lvl(r)}</b></div>`).join('')}</div>

 <h2>${esc(D.hType)}</h2><p>${esc(D.typeP)}</p>
 <div class="ds-type"><div class="ds-face"><span class="ds-big o">Aa</span><b>Outfit</b><small>500 · 600 · 700</small></div><div class="ds-face"><span class="ds-big i">Aa</span><b>Inter</b><small>400 · 500 · 600 · 700</small></div></div>
 <div class="ds-scale">${D.typeRows.map(([n, s], i) => `<div class="ds-row r${i}"><span class="ds-smp">${esc(i === 4 ? n : (i < 3 ? D.sample : D.sample))}</span><small>${esc(n)} · ${esc(s)}</small></div>`).join('')}</div>

 <h2>${esc(D.hShape)}</h2><p>${esc(D.shapeP)}</p>
 <div class="ds-radii">${D.radii.map(([v, u], i) => `<div class="ds-r"><span class="rr${i}"></span><b>${esc(v)}</b><small>${esc(u)}</small></div>`).join('')}</div>

 <h2>${esc(D.hComp)}</h2><p>${esc(D.compP)}</p>
 <div class="ds-comps">
  <div class="ds-cp"><p class="hud">${esc(D.cBtn)}</p><div class="ds-demo"><a class="btn primary" href="#" onclick="return false">${esc(D.btnMain)} ↓</a><a class="btn" href="#" onclick="return false">${esc(D.btnLine)}</a></div></div>
  <div class="ds-cp"><p class="hud">${esc(D.cTags)}</p><div class="ds-demo"><span class="ds-tag">${esc(D.tag)}</span>${D.chips.map(c => `<span class="ds-pill">${esc(c)}</span>`).join('')}<span class="ds-code">React</span></div></div>
  <div class="ds-cp"><p class="hud">${esc(D.cMeta)}</p><dl class="ds-meta">${D.metaDemo.map(([a, b]) => `<div><dt>${esc(a)}</dt><dd>${esc(b)}</dd></div>`).join('')}</dl></div>
  <div class="ds-cp"><p class="hud">${esc(D.cStatus)}</p><div class="ds-demo"><span class="ds-now"><i></i>${esc(D.now)}</span><span class="ds-av"><i></i>${esc(D.avail)}</span><span class="ds-wip"><i></i>${esc(D.wip)}</span></div></div>
  <div class="ds-cp"><p class="hud">${esc(D.cFolder)}</p><div class="ds-demo"><button type="button" class="ds-fold" aria-pressed="false" onclick="this.setAttribute('aria-pressed',this.getAttribute('aria-pressed')!=='true')"><svg viewBox="0 0 80 62" aria-hidden="true"><path class="ft" d="M4 8a6 6 0 0 1 6-6h20l7 7h33a6 6 0 0 1 6 6v6H4z"/><path class="fb" d="M4 18h72v36a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6z"/><path class="fp" d="M10 14h60v10H10z"/></svg><span>${esc(D.folder)}</span></button></div></div>
  <div class="ds-cp"><p class="hud">${esc(D.cQuote)}</p><figure class="ds-q"><blockquote><mark>${esc(D.quote)}</mark></blockquote><figcaption>${esc(D.quoteBy)}</figcaption></figure></div>
 </div>

 <h2>${esc(D.hMascot)}</h2><p>${esc(D.mascotP)}</p>
 <div class="ds-faces">${D.faces.map(([k, n, s]) => `<div class="ds-fc"><img src="${FACE[k]}" alt=""><b>${esc(n)}</b><span>${esc(s)}</span></div>`).join('')}</div>

 <h2>${esc(D.hMotion)}</h2>${dec(D.motion)}

 <h2>${esc(D.hA11y)}</h2><ul>${D.a11y.map(x => `<li>${esc(x)}</li>`).join('')}</ul>

 <h2>${esc(D.hVoice)}</h2><p>${esc(D.voiceP)}</p>
 <div class="ds-voice">${D.voice.map(([d, n]) => `<div class="ds-do"><small>✓ ${esc(D.doLbl)}</small>${esc(d)}</div><div class="ds-dont"><small>✕ ${esc(D.dontLbl)}</small><span>${esc(n)}</span></div>`).join('')}</div>

 <h2>${esc(D.hNext)}</h2><ul>${D.next.map(x => `<li>${esc(x)}</li>`).join('')}</ul>

 <div class="next"><button class="btn" data-home>${esc(backLabel)}</button><a class="btn primary" href="#case-unify">${esc(nextLabel)}</a></div>
</div></article>`;
}

(() => {
  const css = `
.ds-pal{display:grid;grid-template-columns:repeat(auto-fit,minmax(118px,1fr));gap:14px;margin:20px 0;max-width:900px}
.ds-chip{display:flex;flex-direction:column;gap:2px;font-size:14px}
.ds-chip span{height:84px;border-radius:16px;border:1px solid var(--line);margin-bottom:8px}
.ds-chip b{font-family:Outfit,Inter,sans-serif;font-size:17px}.ds-chip code{color:var(--mut);font-size:13px}.ds-chip small{color:var(--mut);font-size:13px;line-height:1.4}
.ds-sw{display:inline-block;width:18px;height:18px;border-radius:6px;border:1px solid var(--line);vertical-align:-4px;margin-right:8px}
.tbl code{font-size:14px}
.ds-con{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin:18px 0;max-width:900px}
.ds-ci{border-radius:16px;padding:14px 16px;display:flex;flex-direction:column;gap:2px;border:1px solid rgba(0,0,0,.06)}
.ds-ci span{font:700 34px/1 Outfit,Inter,sans-serif}.ds-ci small{font-size:12px;opacity:.9}.ds-ci b{font-size:14px}
.ds-type{display:grid;grid-template-columns:1fr 1fr;gap:14px;max-width:900px;margin:18px 0}
.ds-face{background:var(--card2);border:1px solid var(--line);border-radius:18px;padding:18px 22px;display:flex;flex-direction:column}
.ds-big{font-size:88px;line-height:1;color:var(--blushT)}.ds-big.o{font-family:Outfit,sans-serif;font-weight:700}.ds-big.i{font-family:Inter,sans-serif;font-weight:500}
.ds-face b{font:600 20px Outfit,Inter,sans-serif;margin-top:10px}.ds-face small{color:var(--mut)}
.ds-scale{max-width:900px;border-top:1px solid var(--line)}
.ds-row{padding:14px 0;border-bottom:1px solid var(--line);display:flex;flex-direction:column;gap:4px}
.ds-row small{color:var(--mut);font-size:13px}
.ds-row.r0 .ds-smp{font:700 clamp(30px,4vw,50px)/1.05 Outfit,sans-serif;letter-spacing:-.02em}
.ds-row.r1 .ds-smp{font:700 clamp(26px,3vw,38px)/1.1 Outfit,sans-serif}
.ds-row.r2 .ds-smp{font:600 22px/1.2 Outfit,sans-serif}
.ds-row.r3 .ds-smp{font:400 16px/1.6 Inter,sans-serif}
.ds-row.r4 .ds-smp{font:700 12px/1.4 Inter,sans-serif;letter-spacing:.1em;text-transform:uppercase;color:var(--blushT)}
.ds .tbl td.k{white-space:nowrap}.ds-radii{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:18px;margin:18px 0;max-width:900px;justify-items:center;text-align:center}@media(max-width:560px){.ds-radii{grid-template-columns:repeat(3,minmax(0,1fr))}}
.ds-r{display:flex;flex-direction:column;align-items:flex-start;gap:2px;width:130px;font-size:13px}
.ds-r span{width:110px;height:72px;background:var(--peach2);border:2px solid var(--blush);margin-bottom:8px}
.ds-r .rr0{border-radius:999px;height:44px;margin:14px 0 22px}.ds-r .rr1{border-radius:18px}.ds-r .rr2{border-radius:24px}.ds-r .rr3{border-radius:12px}.ds-r .rr4{border-radius:50%;width:72px}
.ds-r b{font-size:15px}.ds-r small{color:var(--mut)}
.ds-comps{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:14px;margin:18px 0;max-width:900px}
.ds-cp{background:var(--card2);border:1px solid var(--line);border-radius:18px;padding:16px 18px}
.ds-cp .hud{margin-bottom:12px}
.ds-demo{display:flex;flex-wrap:wrap;gap:10px;align-items:center}
.ds-demo .btn{min-height:44px;font-size:14px}
.ds-tag{font:600 12px Inter;color:var(--blushT)}
.ds-pill{font-size:13px;padding:6px 12px;border-radius:999px;background:var(--peach2);color:var(--ink)}
.ds-code{font:600 13px Inter;padding:6px 11px;border-radius:999px;background:var(--cocoa);color:#fff}.ds-code::before{content:"</";opacity:.6}.ds-code::after{content:">";opacity:.6}
.ds-meta{display:flex;gap:22px;flex-wrap:wrap;margin:0;border-top:1px dashed var(--line);padding-top:12px}
.ds-meta div{display:flex;flex-direction:column}.ds-meta dt{font:600 11px Inter;letter-spacing:.06em;text-transform:uppercase;color:var(--mut)}.ds-meta dd{margin:0;font:600 14px Inter}
.ds-now,.ds-av,.ds-wip{display:inline-flex;align-items:center;gap:7px;font:600 12px/1 Inter;padding:7px 11px;border-radius:999px}
.ds-now{text-transform:uppercase;letter-spacing:.06em;background:rgba(181,196,111,.3);color:light-dark(#4f5a1c,#e2eab8);border:1px solid rgba(125,140,56,.5)}
.ds-av{background:var(--peach2);color:var(--ink)}.ds-wip{color:var(--mut)}
.ds-now i,.ds-av i,.ds-wip i{width:8px;height:8px;border-radius:50%;background:#B5C46F}.ds-wip i{background:#e0a43a}
.ds-fold{border:0;background:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:6px;color:var(--ink);font:500 13px Inter;padding:4px;border-radius:12px;transition:transform .3s cubic-bezier(.3,1.6,.5,1)}
.ds-fold svg{width:84px;overflow:visible}.ds-fold .ft{fill:#6d0620}.ds-fold .fb{fill:#8E0926;transform-origin:50% 100%;transition:transform .3s cubic-bezier(.3,1.6,.5,1)}.ds-fold .fp{fill:#fff;opacity:0;transition:opacity .2s}
.ds-fold:hover{transform:translateY(-4px) rotate(-3deg)}.ds-fold[aria-pressed=true] .fb{transform:skewX(-8deg) scaleY(.86)}.ds-fold[aria-pressed=true] .fp{opacity:1}
.ds-fold span{padding:2px 8px;border-radius:6px}.ds-fold[aria-pressed=true] span{background:#8E0926;color:#fff}
.ds-q{margin:0;background:var(--peach2);border-radius:16px;padding:14px 16px}
.ds-q blockquote{margin:0;font:500 16px/1.5 Outfit,Inter,sans-serif}
.ds-q mark{background:linear-gradient(transparent 58%,rgba(203,114,136,.38) 58%);color:inherit}
.ds-q figcaption{font-size:13px;color:var(--mut);margin-top:8px}
.ds-faces{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:14px;margin:18px 0;max-width:900px}
.ds-fc{background:var(--card2);border:1px solid var(--line);border-radius:18px;padding:18px;display:flex;flex-direction:column;align-items:flex-start;gap:4px}
.ds-fc img{width:72px;height:72px;border-radius:50%;background:var(--peach2);padding:6px;margin-bottom:8px;transition:transform .35s cubic-bezier(.3,1.6,.5,1)}
.ds-fc:hover img{transform:rotate(-8deg) scale(1.08)}
.ds-fc b{font:600 18px Outfit,Inter,sans-serif}.ds-fc span{font-size:15px;color:var(--mut)}
.ds-voice{display:grid;grid-template-columns:1fr 1fr;gap:12px;max-width:900px;margin:18px 0}
.ds-do,.ds-dont{border-radius:16px;padding:14px 16px;font:500 17px/1.4 Outfit,Inter,sans-serif}
.ds-do{background:var(--mint);color:var(--on-mint)}.ds-dont{background:var(--card2);border:1px dashed var(--line);color:var(--mut)}.ds-dont span{text-decoration:line-through;text-decoration-color:var(--blush)}
.ds-do small,.ds-dont small{display:block;font:700 11px Inter;letter-spacing:.1em;text-transform:uppercase;margin-bottom:4px;text-decoration:none}
@media(max-width:640px){.ds-type,.ds-voice{grid-template-columns:1fr}}
@media (prefers-reduced-motion:reduce){.ds-fold,.ds-fold .fb,.ds-fc img{transition:none}}
`; const s = document.createElement('style'); s.textContent = css; document.head.appendChild(s);
})();
