// Fixer AI case: PT / EN / ES
const FX_IMG = 'img/fixer/';
const FIXER = {
 pt: {
  title: 'Fixer AI: seu prompt, avaliado e melhorado',
  sub: 'Um chat que dá nota de 0 a 100 ao prompt, mostra o que falta e devolve uma versão melhor para copiar. MVP desktop feito em 18 dias por um time de 8 pessoas.',
  pick: 'Veja o projeto', deskT: 'Protótipo desktop', deskNote: '23 telas navegáveis, do login ao histórico, com todos os estados.',
  statusT: 'Em desenvolvimento', statusNote: 'Design, handoff e styleguide prontos. O time de dev está construindo o backend.',
  homeAlt: 'Tela de análise do Fixer AI: prompt enviado, nota 42 de 100, nota por eixo, pontos de melhoria e prompt otimizado',
  meta: [['Papel', 'UX/UI'], ['Tempo', '18 dias, com escopo congelado no dia 14'], ['Time', '8 pessoas: UX/UI, QA, Dev e DevOps'], ['Plataforma', 'Web desktop, tema escuro']],
  h: { problem: 'O problema', role: 'Meu papel', scope: 'Escopo: o que entrou no MVP', score: 'Como a nota funciona', flow: 'Fluxo principal', decisions: 'Decisões de design', states: 'Estados e casos extremos', brand: 'Identidade visual', handoff: 'Handoff para o time', team: 'Time', learn: 'O que eu aprendi' },
  problem: ['Quem usa IA no dia a dia escreve pedidos curtos e sem contexto, recebe uma resposta fraca e não sabe o que mudar. A pessoa tenta de novo do mesmo jeito, ou desiste.', 'O público do MVP são estudantes e profissionais que já usam LLMs, mas nunca aprenderam engenharia de prompt.'],
  hyp:{short:1,items:[["Hipótese", "Se o diagnóstico vier como conversa, com uma nota colorida lida antes do texto e o nome de cada técnica aplicada, a pessoa entende o que faltou e aprende a escrever sozinha."], ["Como validei", "Fluxograma em que cada losango virou um estado, inclusive erros e casos extremos. Auditoria design × build com guia de onboarding para o time tech, QA de UI junto com as QAs e uso do protótipo acompanhado no GA4 e no Hotjar."], ["Próximo passo", "Testar com quem usa IA no dia a dia se a nota e as tags com o nome das técnicas ensinam de verdade."]]},
  hmw: 'Como mostrar, em segundos, o que falta num prompt e entregar uma versão melhor, ensinando a pessoa a escrever sozinha da próxima vez?',
  role: ['Moodboard, brandbook e logo do produto.', 'Styleguide com tokens ligados a variáveis do Figma, estilos de texto e sombra e componentes com variantes.', 'Fluxograma do fluxo principal, do cadastro ao ciclo de refinamento.', '23 telas high-fi de desktop com os estados do backlog, e o protótipo clicável.', 'Handoff organizado por página, com convenções para o time mexer no arquivo sem bagunçar.', 'Um guia para o time sobre engenharia de prompt, a rubrica da nota e como testar a IA.'],
  scopeIntro: 'A regra de corte foi simples: entra só o que o fluxo principal precisa para funcionar. O resto vira v2, ou extra se sobrar tempo depois do dia 14. A versão mobile ficou de fora: o Fixer AI é só para desktop.',
  goal: ['Cadastrar', 'Logar', 'Enviar prompt', 'Receber diagnóstico e prompt otimizado', 'Refinar', 'Reencontrar no histórico'],
  scopeCols: ['Área', 'O que entrou'],
  scope: [['Autenticação', 'Cadastro, login e logout. Sem sessão, a pessoa volta para o login.'], ['Barra lateral', 'Novo chat, histórico com título e nota, busca rápida.'], ['Input', 'Caixa que cresce até 6 linhas, Enter envia, chips de refinamento rápido, botão de cancelar a geração.'], ['Feed', 'Balão do prompt, card de diagnóstico com nota colorida, pontos de melhoria, prompt otimizado com as técnicas usadas e botão Copiar.'], ['Refinamento', 'Cada nova mensagem ajusta a versão otimizada atual. Loading enquanto a IA responde, erro com "Tentar novamente".']],
  scoreIntro: 'A nota precisava ser explicável, não um número mágico. São 4 eixos de 0 a 25. A nota final é a soma.',
  axes: [['Clareza', 'O pedido é entendido de primeira, sem ambiguidade.'], ['Contexto', 'Diz quem é o público, o objetivo e a situação.'], ['Especificidade', 'Detalha tamanho, tom, exemplos e critérios.'], ['Restrições e formato', 'Diz como a resposta deve vir e o que não fazer.']],
  bands: [['Baixa', 'abaixo de 50'], ['Média', '50 a 79'], ['Alta', '80 a 100']],
  rulesT: 'Regras que a IA segue em toda análise',
  rules: [['Avaliar, nunca executar', 'O texto da pessoa entra como dado, não como ordem. Isso também protege contra "ignore suas instruções".'], ['Não inventar', 'Quando falta informação, o prompt otimizado usa marcadores como [público-alvo] em vez de chutar.'], ['Notas consistentes', 'Prompts parecidos precisam receber notas parecidas, senão a nota perde a confiança.']],
  cardAlt: 'Card de diagnóstico: nota 42 de 100, barras por eixo, pontos de melhoria e prompt otimizado com tags de técnica',
  flowP: 'O fluxograma guiou as telas e o backlog: cada losango virou um estado desenhado.',
  flowAlt: 'Fluxograma do Fixer AI, do acesso ao app até o ciclo de refinamento e o logout',
  flowCap: 'Role dentro da moldura para ver o fluxo inteiro.',
  dec: [
   ['O diagnóstico vem como conversa', 'Escolhi o formato de chat porque é onde a pessoa já usa IA. Ela cola o prompt como faria em qualquer assistente e recebe a resposta no mesmo lugar, sem aprender uma ferramenta nova.', 'f11'],
   ['Refinar sem recomeçar', 'Depois da primeira nota, chips como "Deixar mais curto" e "Adicionar exemplos" ajustam a versão atual. A versão anterior fica num atalho no topo, e a nota mostra o progresso: de 42 para 78.', 'f12'],
   ['O prompt aparece como código', 'O prompt otimizado usa fonte mono numa caixa escura, como um trecho de código para copiar. As tags embaixo mostram as técnicas aplicadas, para a pessoa aprender o nome do que melhorou.', 'f14'],
   ['O histórico mostra a nota', 'Cada análise na barra lateral tem o título e a nota colorida. Dá para bater o olho e achar o prompt que ainda está fraco, ou buscar pelo título.', 'f17'],
   ['O primeiro acesso já ensina', 'Em vez de uma tela vazia, três exemplos de prompts ruins de verdade, como "pega os dados dessa nota fiscal". Um clique já mostra como o Fixer funciona.', 'f08']
  ],
  footNote: 'Em todas as telas do chat, uma linha fixa avisa: "O Fixer AI avalia o seu prompt, ele não executa o que está escrito nele." Isso evita a pessoa esperar o post pronto quando pediu só a avaliação.',
  statesP: 'O backlog tinha regras de negócio com mensagens de erro definidas, então cada uma virou tela. Estado de erro também é tela.',
  states: [['f04', 'Cadastro: erro embaixo de cada campo, com a regra da senha marcada em tempo real'], ['f10', 'Gerando: o card já aparece em esqueleto, com o que a IA está avaliando'], ['f13', 'Erro da IA: o prompt não se perde, e o botão tenta de novo'], ['f18', 'Busca sem resultado: diz o que tentar'], ['f21', 'Excluir: confirma mostrando o item e avisa que não dá para desfazer'], ['f22', 'Erro ao excluir: aviso discreto no canto, e nada some da lista']],
  brandP: 'O produto é todo em tema escuro, como um editor de código: cinza grafite, índigo como cor da marca e vermelho, amarelo e verde reservados para a nota. Essas três cores nunca aparecem como decoração.',
  brandImgs: [['logo', 'Logo: um balão de conversa com barras de avaliação e um medidor que sobe do amarelo ao verde'], ['essencia', 'Essência da marca: propósito, promessa, personalidade e tom de voz'], ['cores', 'Cores: superfícies, texto, marca e as cores do score'], ['tipo', 'Tipografia: Plus Jakarta Sans na interface e JetBrains Mono nos prompts']],
  handoff: ['Arquivo dividido em três grupos: Recursos (a marca), Handoff (o que o dev usa) e Project (as telas e o protótipo).', 'Tokens semânticos como bg/surface, text/brand e score/low, ligados a variáveis. Mudou o token, a tela acompanha.', 'Componentes com variantes e estados: botão, badge de nota, chip, campo, item do histórico, toast, skeleton e card de diagnóstico.', 'Mensagens de erro iguais às do backlog, para QA testar exatamente o que está desenhado.', 'Um guia para o time explicando a rubrica, as técnicas de prompt e como testar a IA.'],
  progress: 'O backend está em desenvolvimento. O que está aqui é o design entregue ao time, ainda sem resultados de uso para mostrar.',
  team: [['Laís Moraes', 'UX/UI'], ['Ana Vitória Rezende', 'QA'], ['Thayná Toledo', 'QA'], ['Millena Carolina', 'QA'], ['Luiz Amorim', 'Dev'], ['Winston Jr.', 'Dev'], ['Yan Monteiro', 'Dev'], ['Raylander Ribeiro', 'DevOps']],
  teamP: 'Time THE 100, do bootcamp da QA Coders Academy.',
  learn: [['Cortar também é design', 'Congelar o escopo no dia 14 obrigou a escolher um fluxo e fazê-lo inteiro, em vez de muitas telas pela metade.'], ['Cor precisa significar algo', 'Reservar vermelho, amarelo e verde para a nota fez a nota ser lida antes do texto.'], ['IA precisa de regras visíveis', 'A linha "avalia, não executa" e os marcadores no lugar de chutes deixam claro o que a IA faz e o que ela não sabe.']]
 },
 en: {
  title: 'Fixer AI: your prompt, scored and improved',
  sub: 'A chat that scores a prompt from 0 to 100, shows what is missing and gives back a better version to copy. A desktop MVP built in 18 days by a team of 8.',
  pick: 'See the project', deskT: 'Desktop prototype', deskNote: '23 clickable screens, from sign-in to history, with every state.',
  statusT: 'In development', statusNote: 'Design, handoff and style guide are done. The dev team is building the backend.',
  homeAlt: 'Fixer AI analysis screen: prompt sent, score 42 out of 100, score per axis, improvement points and optimized prompt',
  meta: [['Role', 'UX/UI'], ['Time', '18 days, with scope frozen on day 14'], ['Team', '8 people: UX/UI, QA, Dev and DevOps'], ['Platform', 'Desktop web, dark theme']],
  h: { problem: 'The problem', role: 'My role', scope: 'Scope: what made it into the MVP', score: 'How the score works', flow: 'Main flow', decisions: 'Design decisions', states: 'States and edge cases', brand: 'Visual identity', handoff: 'Handoff to the team', team: 'Team', learn: 'What I learned' },
  problem: ['People who use AI every day write short requests with no context, get a weak answer and do not know what to change. They try again the same way, or give up.', 'The MVP audience is students and professionals who already use LLMs but never learned prompt engineering.'],
  hyp:{short:1,items:[["Hypothesis", "If the diagnosis comes as a conversation, with a color-coded score read before the text and the name of each technique applied, people understand what was missing and learn to write on their own."], ["How I validated it", "A flowchart where every decision diamond became a designed state, including errors and edge cases. A design-to-build audit with an onboarding guide for the tech team, UI QA alongside the QA engineers and prototype use tracked in GA4 and Hotjar."], ["Next step", "Test with everyday AI users whether the score and the technique tags really teach."]]},
  hmw: 'How might we show, in seconds, what a prompt is missing and hand back a better version, while teaching people to write it themselves next time?',
  role: ['Moodboard, brand book and product logo.', 'Style guide with tokens bound to Figma variables, text and shadow styles, and components with variants.', 'Flowchart of the main flow, from sign-up to the refinement loop.', '23 high-fi desktop screens with the backlog states, plus the clickable prototype.', 'Handoff organized by page, with conventions so the team could work in the file without making a mess.', 'A guide for the team on prompt engineering, the scoring rubric and how to test the AI.'],
  scopeIntro: 'The cut rule was simple: only what the main flow needs to work. Everything else became v2, or an extra if time was left after day 14. Mobile was left out: Fixer AI is desktop only.',
  goal: ['Sign up', 'Sign in', 'Send a prompt', 'Get the diagnosis and optimized prompt', 'Refine', 'Find it again in history'],
  scopeCols: ['Area', 'What made it in'],
  scope: [['Authentication', 'Sign-up, sign-in and sign-out. Without a session, you go back to sign-in.'], ['Sidebar', 'New chat, history with title and score, quick search.'], ['Input', 'Box that grows up to 6 lines, Enter sends, quick refinement chips, a button to cancel generation.'], ['Feed', 'Prompt bubble, diagnosis card with colored score, improvement points, optimized prompt with the techniques used and a Copy button.'], ['Refinement', 'Each new message adjusts the current optimized version. Loading while the AI answers, error with "Try again".']],
  scoreIntro: 'The score had to be explainable, not a magic number. There are 4 axes from 0 to 25. The final score is the sum.',
  axes: [['Clarity', 'The request is understood the first time, with no ambiguity.'], ['Context', 'Says who the audience is, the goal and the situation.'], ['Specificity', 'Details length, tone, examples and criteria.'], ['Constraints and format', 'Says how the answer should come back and what not to do.']],
  bands: [['Low', 'below 50'], ['Medium', '50 to 79'], ['High', '80 to 100']],
  rulesT: 'Rules the AI follows in every analysis',
  rules: [['Evaluate, never execute', 'The user text goes in as data, not as an order. This also protects against "ignore your instructions".'], ['Do not make things up', 'When information is missing, the optimized prompt uses placeholders like [target audience] instead of guessing.'], ['Consistent scores', 'Similar prompts must get similar scores, or the score loses trust.']],
  cardAlt: 'Diagnosis card: score 42 out of 100, bars per axis, improvement points and optimized prompt with technique tags',
  flowP: 'The flowchart guided the screens and the backlog: every decision diamond became a designed state.',
  flowAlt: 'Fixer AI flowchart, from opening the app to the refinement loop and sign-out',
  flowCap: 'Scroll inside the frame to see the whole flow.',
  dec: [
   ['The diagnosis comes as a conversation', 'I chose a chat format because that is where people already use AI. They paste the prompt as they would in any assistant and get the answer in the same place, without learning a new tool.', 'f11'],
   ['Refine without starting over', 'After the first score, chips like "Make it shorter" and "Add examples" adjust the current version. The previous version stays one click away at the top, and the score shows progress: from 42 to 78.', 'f12'],
   ['The prompt looks like code', 'The optimized prompt uses a mono font in a dark box, like a code snippet to copy. The tags below name the techniques applied, so people learn what improved.', 'f14'],
   ['History shows the score', 'Each analysis in the sidebar has its title and a colored score. You can spot the prompt that is still weak at a glance, or search by title.', 'f17'],
   ['The first visit already teaches', 'Instead of an empty screen, three real examples of weak prompts, like "get the data from this invoice". One click shows how Fixer works.', 'f08']
  ],
  footNote: 'On every chat screen, a fixed line says: "Fixer AI evaluates your prompt; it does not run what is written in it." This keeps people from expecting the finished post when they only asked for an evaluation.',
  statesP: 'The backlog had business rules with defined error messages, so each one became a screen. An error state is a screen too.',
  states: [['f04', 'Sign-up: an error under each field, with the password rule checked in real time'], ['f10', 'Generating: the card shows up as a skeleton, with what the AI is evaluating'], ['f13', 'AI error: the prompt is not lost, and the button tries again'], ['f18', 'Search with no results: says what to try'], ['f21', 'Delete: confirms by showing the item and warns it cannot be undone'], ['f22', 'Delete error: a quiet toast in the corner, and nothing disappears from the list']],
  brandP: 'The product is fully dark, like a code editor: graphite gray, indigo as the brand color, and red, yellow and green reserved for the score. Those three colors are never used as decoration.',
  brandImgs: [['logo', 'Logo: a chat bubble with evaluation bars and a gauge rising from yellow to green'], ['essencia', 'Brand essence: purpose, promise, personality and tone of voice'], ['cores', 'Colors: surfaces, text, brand and score colors'], ['tipo', 'Typography: Plus Jakarta Sans for the interface and JetBrains Mono for prompts']],
  handoff: ['File split into three groups: Resources (the brand), Handoff (what devs use) and Project (the screens and the prototype).', 'Semantic tokens like bg/surface, text/brand and score/low, bound to variables. Change the token and the screen follows.', 'Components with variants and states: button, score badge, chip, input, history item, toast, skeleton and diagnosis card.', 'Error messages matching the backlog word for word, so QA tests exactly what is designed.', 'A guide for the team explaining the rubric, prompt techniques and how to test the AI.'],
  progress: 'The backend is in development. What you see here is the design delivered to the team, with no usage results to show yet.',
  team: [['Laís Moraes', 'UX/UI'], ['Ana Vitória Rezende', 'QA'], ['Thayná Toledo', 'QA'], ['Millena Carolina', 'QA'], ['Luiz Amorim', 'Dev'], ['Winston Jr.', 'Dev'], ['Yan Monteiro', 'Dev'], ['Raylander Ribeiro', 'DevOps']],
  teamP: 'Team THE 100, from the QA Coders Academy bootcamp.',
  learn: [['Cutting is design too', 'Freezing scope on day 14 forced us to pick one flow and finish it, instead of many half-done screens.'], ['Color has to mean something', 'Reserving red, yellow and green for the score made the score readable before the text.'], ['AI needs visible rules', 'The "evaluates, does not execute" line and placeholders instead of guesses make clear what the AI does and what it does not know.']]
 },
 es: {
  title: 'Fixer AI: tu prompt, evaluado y mejorado',
  sub: 'Un chat que pone una nota de 0 a 100 al prompt, muestra lo que falta y devuelve una versión mejor para copiar. MVP desktop hecho en 18 días por un equipo de 8 personas.',
  pick: 'Mira el proyecto', deskT: 'Prototipo desktop', deskNote: '23 pantallas navegables, del login al historial, con todos los estados.',
  statusT: 'En desarrollo', statusNote: 'Diseño, handoff y styleguide listos. El equipo de dev está construyendo el backend.',
  homeAlt: 'Pantalla de análisis de Fixer AI: prompt enviado, nota 42 de 100, nota por eje, puntos de mejora y prompt optimizado',
  meta: [['Rol', 'UX/UI'], ['Tiempo', '18 días, con el alcance congelado el día 14'], ['Equipo', '8 personas: UX/UI, QA, Dev y DevOps'], ['Plataforma', 'Web desktop, tema oscuro']],
  h: { problem: 'El problema', role: 'Mi rol', scope: 'Alcance: lo que entró en el MVP', score: 'Cómo funciona la nota', flow: 'Flujo principal', decisions: 'Decisiones de diseño', states: 'Estados y casos extremos', brand: 'Identidad visual', handoff: 'Handoff para el equipo', team: 'Equipo', learn: 'Lo que aprendí' },
  problem: ['Quien usa IA a diario escribe pedidos cortos y sin contexto, recibe una respuesta floja y no sabe qué cambiar. Lo intenta otra vez igual, o se rinde.', 'El público del MVP son estudiantes y profesionales que ya usan LLMs, pero nunca aprendieron ingeniería de prompts.'],
  hyp:{short:1,items:[["Hipótesis", "Si el diagnóstico llega como conversación, con una nota en colores que se lee antes que el texto y el nombre de cada técnica aplicada, la persona entiende qué faltó y aprende a escribir sola."], ["Cómo lo validé", "Diagrama de flujo en el que cada rombo se convirtió en un estado diseñado, incluidos errores y casos extremos. Auditoría diseño × build con guía de onboarding para el equipo tech, QA de UI junto con las QA y uso del prototipo seguido en GA4 y Hotjar."], ["Próximo paso", "Probar con quien usa IA a diario si la nota y las etiquetas con el nombre de las técnicas enseñan de verdad."]]},
  hmw: '¿Cómo mostrar, en segundos, lo que le falta a un prompt y entregar una versión mejor, enseñando a la persona a escribirlo sola la próxima vez?',
  role: ['Moodboard, brandbook y logo del producto.', 'Styleguide con tokens ligados a variables de Figma, estilos de texto y sombra y componentes con variantes.', 'Diagrama del flujo principal, del registro al ciclo de refinamiento.', '23 pantallas high-fi de desktop con los estados del backlog, y el prototipo clicable.', 'Handoff organizado por página, con convenciones para que el equipo trabaje en el archivo sin desordenarlo.', 'Una guía para el equipo sobre ingeniería de prompts, la rúbrica de la nota y cómo probar la IA.'],
  scopeIntro: 'La regla de corte fue simple: entra solo lo que el flujo principal necesita para funcionar. El resto pasa a v2, o a extra si sobra tiempo después del día 14. La versión móvil quedó fuera: Fixer AI es solo para desktop.',
  goal: ['Registrarse', 'Entrar', 'Enviar prompt', 'Recibir diagnóstico y prompt optimizado', 'Refinar', 'Encontrarlo en el historial'],
  scopeCols: ['Área', 'Lo que entró'],
  scope: [['Autenticación', 'Registro, login y logout. Sin sesión, la persona vuelve al login.'], ['Barra lateral', 'Nuevo chat, historial con título y nota, búsqueda rápida.'], ['Input', 'Caja que crece hasta 6 líneas, Enter envía, chips de refinamiento rápido, botón para cancelar la generación.'], ['Feed', 'Globo del prompt, tarjeta de diagnóstico con nota de color, puntos de mejora, prompt optimizado con las técnicas usadas y botón Copiar.'], ['Refinamiento', 'Cada nuevo mensaje ajusta la versión optimizada actual. Carga mientras la IA responde, error con "Intentar de nuevo".']],
  scoreIntro: 'La nota tenía que ser explicable, no un número mágico. Son 4 ejes de 0 a 25. La nota final es la suma.',
  axes: [['Claridad', 'El pedido se entiende a la primera, sin ambigüedad.'], ['Contexto', 'Dice quién es el público, el objetivo y la situación.'], ['Especificidad', 'Detalla extensión, tono, ejemplos y criterios.'], ['Restricciones y formato', 'Dice cómo debe venir la respuesta y qué no hacer.']],
  bands: [['Baja', 'menos de 50'], ['Media', '50 a 79'], ['Alta', '80 a 100']],
  rulesT: 'Reglas que la IA sigue en cada análisis',
  rules: [['Evaluar, nunca ejecutar', 'El texto de la persona entra como dato, no como orden. Eso también protege contra "ignora tus instrucciones".'], ['No inventar', 'Cuando falta información, el prompt optimizado usa marcadores como [público objetivo] en lugar de adivinar.'], ['Notas consistentes', 'Prompts parecidos deben recibir notas parecidas, o la nota pierde confianza.']],
  cardAlt: 'Tarjeta de diagnóstico: nota 42 de 100, barras por eje, puntos de mejora y prompt optimizado con etiquetas de técnica',
  flowP: 'El diagrama de flujo guió las pantallas y el backlog: cada rombo se volvió un estado diseñado.',
  flowAlt: 'Diagrama de flujo de Fixer AI, desde el acceso a la app hasta el ciclo de refinamiento y el logout',
  flowCap: 'Desplázate dentro del marco para ver el flujo completo.',
  dec: [
   ['El diagnóstico llega como conversación', 'Elegí el formato de chat porque es donde la persona ya usa IA. Pega el prompt como en cualquier asistente y recibe la respuesta en el mismo lugar, sin aprender una herramienta nueva.', 'f11'],
   ['Refinar sin empezar de cero', 'Después de la primera nota, chips como "Hacerlo más corto" y "Agregar ejemplos" ajustan la versión actual. La versión anterior queda a un clic arriba, y la nota muestra el progreso: de 42 a 78.', 'f12'],
   ['El prompt aparece como código', 'El prompt optimizado usa fuente mono en una caja oscura, como un fragmento de código para copiar. Las etiquetas debajo muestran las técnicas aplicadas, para que la persona aprenda qué mejoró.', 'f14'],
   ['El historial muestra la nota', 'Cada análisis en la barra lateral tiene su título y la nota de color. Se ve de un vistazo qué prompt sigue flojo, o se busca por título.', 'f17'],
   ['El primer acceso ya enseña', 'En lugar de una pantalla vacía, tres ejemplos reales de prompts flojos, como "saca los datos de esta factura". Un clic ya muestra cómo funciona Fixer.', 'f08']
  ],
  footNote: 'En todas las pantallas del chat, una línea fija avisa: "Fixer AI evalúa tu prompt; no ejecuta lo que está escrito en él." Así nadie espera el post listo cuando solo pidió la evaluación.',
  statesP: 'El backlog tenía reglas de negocio con mensajes de error definidos, así que cada una se volvió pantalla. Un estado de error también es pantalla.',
  states: [['f04', 'Registro: error debajo de cada campo, con la regla de la contraseña marcada en tiempo real'], ['f10', 'Generando: la tarjeta aparece en esqueleto, con lo que la IA está evaluando'], ['f13', 'Error de la IA: el prompt no se pierde, y el botón lo intenta de nuevo'], ['f18', 'Búsqueda sin resultados: dice qué probar'], ['f21', 'Eliminar: confirma mostrando el elemento y avisa que no se puede deshacer'], ['f22', 'Error al eliminar: aviso discreto en la esquina, y nada desaparece de la lista']],
  brandP: 'El producto es todo en tema oscuro, como un editor de código: gris grafito, índigo como color de marca y rojo, amarillo y verde reservados para la nota. Esos tres colores nunca se usan como decoración.',
  brandImgs: [['logo', 'Logo: un globo de conversación con barras de evaluación y un medidor que sube del amarillo al verde'], ['essencia', 'Esencia de marca: propósito, promesa, personalidad y tono de voz'], ['cores', 'Colores: superficies, texto, marca y los colores de la nota'], ['tipo', 'Tipografía: Plus Jakarta Sans en la interfaz y JetBrains Mono en los prompts']],
  handoff: ['Archivo dividido en tres grupos: Recursos (la marca), Handoff (lo que usa dev) y Project (las pantallas y el prototipo).', 'Tokens semánticos como bg/surface, text/brand y score/low, ligados a variables. Cambia el token y la pantalla acompaña.', 'Componentes con variantes y estados: botón, badge de nota, chip, campo, ítem del historial, toast, skeleton y tarjeta de diagnóstico.', 'Mensajes de error idénticos a los del backlog, para que QA pruebe exactamente lo que está diseñado.', 'Una guía para el equipo que explica la rúbrica, las técnicas de prompt y cómo probar la IA.'],
  progress: 'El backend está en desarrollo. Lo que ves aquí es el diseño entregado al equipo, todavía sin resultados de uso para mostrar.',
  team: [['Laís Moraes', 'UX/UI'], ['Ana Vitória Rezende', 'QA'], ['Thayná Toledo', 'QA'], ['Millena Carolina', 'QA'], ['Luiz Amorim', 'Dev'], ['Winston Jr.', 'Dev'], ['Yan Monteiro', 'Dev'], ['Raylander Ribeiro', 'DevOps']],
  teamP: 'Equipo THE 100, del bootcamp de QA Coders Academy.',
  learn: [['Recortar también es diseño', 'Congelar el alcance el día 14 nos obligó a elegir un flujo y terminarlo, en lugar de muchas pantallas a medias.'], ['El color tiene que significar algo', 'Reservar rojo, amarillo y verde para la nota hizo que la nota se leyera antes que el texto.'], ['La IA necesita reglas visibles', 'La línea "evalúa, no ejecuta" y los marcadores en lugar de adivinar dejan claro qué hace la IA y qué no sabe.']]
 }
};
function fixerView(lang, esc, backLabel, nextLabel){
 const F = FIXER[lang] || FIXER.pt;
 const bf = (f, alt, cap, url, cls='') => `<figure class="browser-f${cls}"><div class="bf-bar" aria-hidden="true"><i></i><i></i><i></i>${url?`<span>${esc(url)}</span>`:''}</div><img src="${FX_IMG}${f}.webp" alt="${esc(alt)}" loading="lazy" width="1440" height="900">${cap?`<figcaption>${esc(cap)}</figcaption>`:''}</figure>`;
 const tbl = (cols, rows) => `<div class="tblwrap"><table class="tbl"><thead><tr>${cols.map(c=>`<th>${esc(c)}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map((c,i)=>`<td${i===0?' class="k"':''}>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
 const proto = `fixer/desktop.html?lang=${lang}`;
 return `<article class="case fixer"><div class="wrap">
 <button class="back" data-home>${esc(backLabel)}</button>
 <p class="hud" style="margin-top:12px">AI · Product design · MVP</p>
 <h1>${esc(F.title)}</h1><p class="sub">${esc(F.sub)}</p>
 <div class="pick"><p class="hud">${esc(F.pick)}</p><div class="pick-row two"><a class="pick-b main" href="${proto}" target="_blank" rel="noopener"><span class="pk-i" aria-hidden="true"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></svg></span><b>${esc(F.deskT)}</b><small>${esc(F.deskNote)}</small></a><div class="pick-b fx-status"><span class="pk-i" aria-hidden="true"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 6.5a4 4 0 0 0-5.3 5.3L4 17l3 3 5.2-5.2a4 4 0 0 0 5.3-5.3l-2.6 2.6-2.4-.6-.6-2.4z"/></svg></span><b>${esc(F.statusT)} <i class="dot amber"></i></b><small>${esc(F.statusNote)}</small></div></div></div>
 ${bf('f11', F.homeAlt, '', 'fixer.ai/chat')}
 <div class="meta">${F.meta.map(([a,b])=>`<div><b>${esc(a)}</b><span>${esc(b)}</span></div>`).join('')}</div>
 <h2>${esc(F.h.problem)}</h2>${F.problem.map(p=>`<p>${esc(p)}</p>`).join('')}
 <blockquote class="hmw">${esc(F.hmw)}</blockquote>
 ${typeof hypBlock==='function'?hypBlock(F.hyp):''}
 <h2>${esc(F.h.role)}</h2><ul>${F.role.map(r=>`<li>${esc(r)}</li>`).join('')}</ul>
 <h2>${esc(F.h.scope)}</h2><p>${esc(F.scopeIntro)}</p>
 <ol class="fx-goal">${F.goal.map(g=>`<li>${esc(g)}</li>`).join('')}</ol>
 ${tbl(F.scopeCols, F.scope)}
 <h2>${esc(F.h.score)}</h2><p>${esc(F.scoreIntro)}</p>
 <div class="fx-axes">${F.axes.map(([t,d])=>`<div><b>${esc(t)}</b><em>0–25</em><span>${esc(d)}</span></div>`).join('')}</div>
 <div class="fx-bands">${F.bands.map(([t,r],i)=>`<span class="b${i}"><b>${esc(t)}</b> ${esc(r)}</span>`).join('')}</div>
 <figure class="fx-img"><img src="${FX_IMG}card.webp" alt="${esc(F.cardAlt)}" loading="lazy" width="1080" height="557"></figure>
 <h3>${esc(F.rulesT)}</h3><div class="decisions">${F.rules.map(([t,d])=>`<div class="dec"><b>✦ ${esc(t)}</b><span>${esc(d)}</span></div>`).join('')}</div>
 <h2>${esc(F.h.flow)}</h2><p>${esc(F.flowP)}</p>
 <figure class="fx-img"><div class="land-scroll" tabindex="0" role="region" aria-label="${esc(F.flowAlt)}"><img src="${FX_IMG}fluxo.webp" alt="${esc(F.flowAlt)}" loading="lazy" width="1175" height="2100"></div></figure><p class="cap">${esc(F.flowCap)}</p>
 <h2>${esc(F.h.decisions)}</h2>
 ${F.dec.map(([t,d,f],i)=>`<section class="sq-dec"><h3><span class="sq-n">0${i+1}</span> ${esc(t)}</h3><p>${esc(d)}</p>${bf(f,t,'','')}</section>`).join('')}
 <div class="callout"><p class="hud">✎ microcopy</p><p style="margin:0">${esc(F.footNote)}</p></div>
 <h2>${esc(F.h.states)}</h2><p>${esc(F.statesP)}</p>
 <div class="dgrid">${F.states.map(([f,c])=>bf(f,c,c,'',' sm')).join('')}</div>
 <p><a class="btn primary" href="${proto}" target="_blank" rel="noopener">${esc(F.deskT)} ↗</a></p>
 <h2>${esc(F.h.brand)}</h2><p>${esc(F.brandP)}</p>
 <div class="fx-brand">${F.brandImgs.map(([f,c])=>`<figure class="fx-img"><img src="${FX_IMG}${f}.webp" alt="${esc(c)}" loading="lazy"><figcaption>${esc(c)}</figcaption></figure>`).join('')}</div>
 <h2>${esc(F.h.handoff)}</h2><ul>${F.handoff.map(r=>`<li>${esc(r)}</li>`).join('')}</ul>
 <div class="callout"><p class="hud">▶ in progress</p><p style="margin:0">${esc(F.progress)}</p></div>
 <h2>${esc(F.h.team)}</h2><p>${esc(F.teamP)}</p>
 <ul class="fx-team">${F.team.map(([n,r])=>`<li><b>${esc(n)}</b><span>${esc(r)}</span></li>`).join('')}</ul>
 <h2>${esc(F.h.learn)}</h2><div class="decisions">${F.learn.map(([t,d])=>`<div class="dec"><b>${esc(t)}</b><span>${esc(d)}</span></div>`).join('')}</div>
 <div class="next"><button class="btn" data-home>${esc(backLabel)}</button><a class="btn primary" href="#case-venzi">${esc(nextLabel)}</a></div>
 </div></article>`;
}
(()=>{const st=document.createElement('style');st.textContent=`
.pick-row.two{grid-template-columns:repeat(2,minmax(0,1fr));max-width:620px}@media(max-width:760px){.pick-row.two{grid-template-columns:1fr}}
.fx-status{cursor:default}.fx-status:hover{transform:none;border-color:var(--line)}
.dot.amber{display:inline-block;width:8px;height:8px;border-radius:50%;background:#F59E0B;vertical-align:3px;margin-left:4px;box-shadow:0 0 0 3px rgba(245,158,11,.25)}
.fx-goal{display:flex;flex-wrap:wrap;gap:8px;list-style:none;padding:0;margin:14px 0 18px;counter-reset:g}
.fx-goal li{counter-increment:g;background:var(--card2);border:1px solid var(--line);border-radius:999px;padding:6px 14px;font-size:14px}
.fx-goal li::before{content:counter(g) " · ";color:var(--mut)}
.fx-axes{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin:14px 0}
.fx-axes div{background:var(--card2);border:1px solid var(--line);border-radius:16px;padding:14px 16px;display:flex;flex-direction:column;gap:4px}
.fx-axes b{font:700 17px Outfit,Inter,sans-serif}.fx-axes em{font-style:normal;font-size:13px;color:var(--mut)}.fx-axes span{font-size:14px;line-height:1.45}
@media(max-width:760px){.fx-axes{grid-template-columns:1fr 1fr}}
.fx-bands{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 18px}
.fx-bands span{border-radius:999px;padding:5px 12px;font-size:14px;color:#18181B}
.fx-bands .b0{background:#FCA5A5}.fx-bands .b1{background:#FCD34D}.fx-bands .b2{background:#86EFAC}
.fx-img{margin:16px 0;border-radius:14px;overflow:hidden;border:1px solid var(--line);background:#18181B;max-width:900px}
.fx-img img{display:block;width:100%;height:auto}
.fx-img figcaption{font-size:14px;color:var(--mut);padding:10px 14px;background:var(--card2);border-top:1px solid var(--line)}
.fx-brand{columns:2;column-gap:16px;max-width:900px}.fx-brand .fx-img{margin:0 0 16px;break-inside:avoid;display:block}
@media(max-width:640px){.fx-brand{columns:1}}
.fx-team{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;list-style:none;padding:0;max-width:900px}
.fx-team li{background:var(--card2);border:1px solid var(--line);border-radius:14px;padding:10px 14px;display:flex;flex-direction:column}
.fx-team span{font-size:13px;color:var(--mut)}
@media(max-width:760px){.fx-team{grid-template-columns:1fr 1fr}}
`;document.head.appendChild(st)})();
