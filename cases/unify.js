/* UNI FY · full case study page (EN / PT / ES)
   Confidentiality: no real screens, rates, limits, rules, partner names, endpoints,
   legal/regulatory items, internal notes or colleague names. All visuals are recreated. */
const UNIFY = {
en: {
 title: 'UNI FY',
 sub: 'Designing a credit super app for public servants and retirees, from first sketch to a launched V1.',
 meta: [['Role','UX/UI Product Designer · journeys, UI, microcopy, prototyping, audits and QA'],['Team','Remote and multidisciplinary: product leadership, developers and security'],['Timeline','Apr 2026 – present · V1 launched Sep 2026'],['Platform','iOS and Android'],['Tools','Figma, FigJam, Jira, Notion, AI tools']],
 stats: [['8','end-to-end journeys in V1'],['~179','screens across 9 flows in V1.1'],['34','issues caught in one QA round: 9 bugs, 25 UX notes']],
 nda: 'This product is under NDA. Every visual on this page is recreated or schematic, and no real screens, values or business rules are shown. I’m happy to walk you through the real work in an interview.',
 h: {problem:'The problem', who:'Who we designed for', role:'My role', process:'Process: shipping in versions', journeys:'The V1 journeys', decisions:'Key decisions', ds:'Design system', audit:'Design-to-build audit', qa:'QA before launch', outcomes:'Outcomes', learn:'What I learned'},
 problem: ['In Brazil, public servants and retirees can take payroll-deducted credit (crédito consignado): installments come straight out of the paycheck or pension, so rates are lower than regular loans.','But the experience is usually slow, paper-heavy and confusing, especially for older users. UNI FY set out to make it mobile-first: check your credit, simulate, sign and track everything in one app, and pay with installment Pix.'],
 hmw: 'How might we make a regulated financial product feel simple and trustworthy for people from 25 to 75, while staying in sync with a backend and business rules that were still evolving?',
 who: [['Active public servant · 25–55','Fast credit, no bureaucracy.'],['Retiree · 55–75','Trust, clarity and respectful support.'],['Credit seeker · any age','Better conditions with one-tap simplicity.']],
 role: [['UX and UI','Designed the 8 V1 journeys in Figma, each screen mapped 1:1 to the product backlog.'],['Alignment','Turned wireframes into a navigable prototype and presented it to every department, aligning business, technology and operations on the V1 scope.'],['UX writing','Wrote the product microcopy, from onboarding to confirmation screens.'],['Quality','Ran UX/UI audits and functional QA, and retested every fix with the developers until launch.'],['Project design','Organized the Figma file in versions (V1.0 → V1.1) and wrote an onboarding guide for the tech team.']],
 processIntro: 'I structured the product in versions so the team could ship, learn and refine without losing track of what was agreed.',
 steps: [['V1.0','Core journeys in wireframes, then high fidelity, mapped to the backlog.'],['Prototype','A navigable prototype shown to every department to align the V1 scope.'],['V1 launch','8 end-to-end journeys live on iOS and Android, Sep 2026.'],['V1.1','Expanded and refined into ~179 screens across 9 flows, audited against the build.']],
 stages: [['Get in',['Onboarding','Sign-up and activation','Authentication']],['Use credit',['Pix on credit','Transactions']],['Manage',['Bills and contracts','Profile']],['Get help',['Help center with a path to a human']]],
 capJourneys: 'The 8 V1 journeys, grouped by what the user is trying to do. Recreated diagram.',
 decisions: [['Sign-up in steps','Credit sign-up asks for a lot of data. I proposed breaking it into short steps with visible progress, so nobody faces a wall of fields. The team adopted it as the onboarding model.'],['Trust before speed','Deep indigo as the base for confidence and focus. Coral is reserved for the one main action on each screen, so the next step is never in doubt.'],['Designed for 25 to 75','Touch targets of at least 44 × 44 px, a text label on every action (never icon-only) and WCAG 2.1 AA contrast as the floor.'],['Help where the doubt happens','The FAQ opens inside the flow the user is in, with a clear path to a human when an answer isn’t enough.']],
 before: 'Before', after: 'After',
 formBefore: 'One long form', formAfter: 'Short steps with progress',
 stepWord: 'Step', next: 'Continue',
 capSignup: 'Schematic of the staged sign-up idea, not the real screens.',
 dsIntro: 'I created the UNI FY design system so designers and engineers could build consistently and fast, and wrote a guide to onboard the tech team to it.',
 swatches: [['#070C52','Indigo','trust'],['#FB7F87','Coral','main action']],
 support: 'Support colors: mint, peach, violet and gray.',
 type: [['Space Grotesk','Headings'],['Inter','Body and UI'],['Roboto Mono','Technical data']],
 tokens: [['Spacing','Base-4 scale, 4 to 64 px'],['Icons','Material Symbols, outlined, 24 dp'],['Motion','100–150 ms feedback · 200–300 ms navigation · 400–500 ms celebrations']],
 statesH: 'Every component, every state',
 states: ['Default','Hover','Focused','Pressed','Disabled','Loading'],
 rules: 'Rules the team follows: always use library components, never hardcode colors, and document every variant and state.',
 auditIntro: 'As the product grew, design, app and backend started to drift apart. Together with an engineer, I audited all 9 flows, about 179 screens, comparing each screen in Figma with what the app and the backend actually did.',
 auditSteps: ['Check every screen of a flow against the implementation.','Classify each screen with one of five statuses.','Write a short summary per flow: the risks for the user and the decisions the business still had to make.','Share the scoreboard with product and engineering to prioritize fixes.'],
 statuses: ['Aligned','Partially aligned','Divergent','Simulated (UI only)','Missing'],
 flowWord: 'Flow',
 capAudit: 'How the scoreboard worked. Illustrative data, not the real results.',
 auditWhy: 'Why it matters: in a credit product, a screen that says “done” before the system confirms it is a trust problem, not a visual one. The audit made those gaps visible before users found them, and turned open questions into a list with owners.',
 recH: 'Then: reconciling design and code',
 recIntro: 'Later, I went one level deeper: I read the code of the app and two backend services and compared it, screen by screen, with the V1.1 Figma file. The goal was documentation: a Figma file the whole team could trust.',
 recStats: [['14','screens and states that existed in the app but not in Figma, now designed in their flows with the real copy from the code'],['5','gaps between design, app and API, written up as open decisions for product and engineering'],['2','copy proposals of my own, flagged as needing validation instead of passed off as existing']],
 rec: [['Design what the code already does','Error and edge states, such as a sign-up that needs more information, were in the app but missing from Figma. I designed them inside their flows so nothing lives only in code.'],['Match the source of truth','I rebuilt a settings screen to match what shipped, and removed an option the product didn’t support yet, so the file stops promising features that don’t exist.'],['Don’t decide alone','Where design, app and API disagreed, I didn’t pick a side. I left those screens untouched and listed each gap for the team to decide.'],['Keep history','Every previous version went to an archive page, so any change can be traced and undone.']],
 qa: 'Before launch I ran a full QA round on the builds. It surfaced 9 functional bugs and 25 UX/UI observations, each logged with visual evidence and a suggested priority, and I retested every fix with the developers.',
 outcomes: [['Launched','V1 went live in September 2026 with 8 end-to-end journeys.'],['Adopted','The staged sign-up I proposed became the onboarding model.'],['Aligned','One shared view of the V1 scope across business, technology and operations, thanks to the prototype.'],['Caught early','34 issues found and retested in a single QA round before launch.']],
 learn: [['Design is also a business decision','In regulated products, design choices are business and legal choices too. Making open questions visible early saves weeks.'],['The file is only as good as the build','Auditing what ships against what was designed, down to the code, is now part of how I work.'],['Accessibility by default','Designing for ages 25 to 75 made accessibility my starting point, not an extra.']]
},
pt: {
 title: 'UNI FY',
 sub: 'Um superapp de crédito para servidores públicos e aposentados, do primeiro rascunho à V1 lançada.',
 meta: [['Papel','UX/UI Product Designer · jornadas, UI, microcopy, protótipo, auditorias e QA'],['Time','Remoto e multidisciplinar: liderança de produto, devs e segurança'],['Período','abr/2026 – hoje · V1 lançada em set/2026'],['Plataforma','iOS e Android'],['Ferramentas','Figma, FigJam, Jira, Notion, ferramentas de IA']],
 stats: [['8','jornadas completas na V1'],['~179','telas em 9 fluxos na V1.1'],['34','problemas em uma rodada de QA: 9 bugs, 25 observações de UX']],
 nda: 'Este produto está sob NDA. Todos os visuais desta página são recriados ou esquemáticos, sem telas reais, valores ou regras de negócio. Posso apresentar o trabalho real em uma entrevista.',
 h: {problem:'O problema', who:'Para quem desenhamos', role:'Meu papel', process:'Processo: entregar em versões', journeys:'As jornadas da V1', decisions:'Decisões principais', ds:'Design system', audit:'Auditoria design × implementação', qa:'QA antes do lançamento', outcomes:'Resultados', learn:'O que aprendi'},
 problem: ['No Brasil, servidores públicos e aposentados podem contratar crédito consignado: as parcelas saem direto do salário ou da aposentadoria, por isso os juros são menores.','Mas a experiência costuma ser lenta, cheia de papel e confusa, principalmente para pessoas mais velhas. A UNI FY quis torná-la mobile-first: consultar crédito, simular, assinar e acompanhar tudo em um app, além de pagar com Pix parcelado.'],
 hmw: 'Como tornar um produto financeiro regulado simples e confiável para pessoas de 25 a 75 anos, acompanhando um backend e regras de negócio que ainda estavam mudando?',
 who: [['Servidor ativo · 25–55','Crédito rápido, sem burocracia.'],['Aposentado · 55–75','Confiança, clareza e atendimento respeitoso.'],['Quem busca crédito · qualquer idade','Melhores condições, com a simplicidade de um toque.']],
 role: [['UX e UI','Desenhei as 8 jornadas da V1 no Figma, cada tela mapeada 1:1 ao backlog.'],['Alinhamento','Transformei os wireframes em protótipo navegável e apresentei a todos os departamentos, alinhando negócio, tecnologia e operação sobre o escopo da V1.'],['UX writing','Escrevi a microcopy do produto, do onboarding às telas de confirmação.'],['Qualidade','Fiz auditorias de UX/UI e QA funcional, e retestei cada correção com os devs até o lançamento.'],['Project design','Organizei o arquivo do Figma em versões (V1.0 → V1.1) e escrevi um guia de onboarding para o time de tecnologia.']],
 processIntro: 'Estruturei o produto em versões para o time entregar, aprender e refinar sem perder de vista o que foi combinado.',
 steps: [['V1.0','Jornadas principais em wireframe e depois em alta fidelidade, mapeadas ao backlog.'],['Protótipo','Protótipo navegável apresentado a todos os departamentos para alinhar o escopo da V1.'],['Lançamento','8 jornadas completas no ar, em iOS e Android, em set/2026.'],['V1.1','Ampliada e refinada para ~179 telas em 9 fluxos, auditadas contra a implementação.']],
 stages: [['Entrar',['Onboarding','Cadastro e ativação','Autenticação']],['Usar o crédito',['Pix no crédito','Movimentações']],['Gerenciar',['Fatura e contratos','Perfil']],['Pedir ajuda',['Central de ajuda com caminho para um atendente']]],
 capJourneys: 'As 8 jornadas da V1, agrupadas pelo que a pessoa quer fazer. Diagrama recriado.',
 decisions: [['Cadastro em etapas','O cadastro de crédito pede muitos dados. Propus dividir em etapas curtas, com progresso visível, para ninguém encarar uma parede de campos. O time adotou como modelo de onboarding.'],['Confiança antes de velocidade','Índigo profundo como base, para transmitir segurança e foco. O coral fica reservado para a única ação principal de cada tela, então o próximo passo nunca fica em dúvida.'],['Para pessoas de 25 a 75 anos','Área de toque de no mínimo 44 × 44 px, rótulo em texto em toda ação (nunca só ícone) e contraste WCAG 2.1 AA como mínimo.'],['Ajuda onde a dúvida aparece','A FAQ abre dentro do fluxo em que a pessoa está, com um caminho claro para um atendente quando a resposta não basta.']],
 before: 'Antes', after: 'Depois',
 formBefore: 'Um formulário longo', formAfter: 'Etapas curtas com progresso',
 stepWord: 'Etapa', next: 'Continuar',
 capSignup: 'Esquema da ideia do cadastro em etapas, não são as telas reais.',
 dsIntro: 'Criei o design system da UNI FY para designers e devs construírem com consistência e rapidez, e escrevi um guia para apresentar o sistema ao time de tecnologia.',
 swatches: [['#070C52','Índigo','confiança'],['#FB7F87','Coral','ação principal']],
 support: 'Cores de apoio: menta, pêssego, violeta e cinza.',
 type: [['Space Grotesk','Títulos'],['Inter','Texto e interface'],['Roboto Mono','Dados técnicos']],
 tokens: [['Espaçamento','Escala de base 4, de 4 a 64 px'],['Ícones','Material Symbols, outlined, 24 dp'],['Movimento','100–150 ms feedback · 200–300 ms navegação · 400–500 ms celebrações']],
 statesH: 'Todo componente, todos os estados',
 states: ['Padrão','Hover','Foco','Pressionado','Desativado','Carregando'],
 rules: 'Regras do time: sempre usar componentes da biblioteca, nunca cores soltas no código, e documentar toda variante e estado.',
 auditIntro: 'Com o produto crescendo, design, app e backend começaram a se afastar. Junto com um engenheiro, auditei os 9 fluxos, cerca de 179 telas, comparando cada tela do Figma com o que o app e o backend realmente faziam.',
 auditSteps: ['Conferir cada tela de um fluxo contra a implementação.','Classificar cada tela com um de cinco status.','Escrever um resumo curto por fluxo: os riscos para a pessoa usuária e as decisões que o negócio ainda precisava tomar.','Compartilhar o placar com produto e engenharia para priorizar as correções.'],
 statuses: ['Alinhada','Parcialmente alinhada','Divergente','Simulada (só interface)','Faltando'],
 flowWord: 'Fluxo',
 capAudit: 'Como o placar funcionava. Dados ilustrativos, não são os resultados reais.',
 auditWhy: 'Por que importa: em um produto de crédito, uma tela que diz “pronto” antes de o sistema confirmar é um problema de confiança, não de visual. A auditoria mostrou essas lacunas antes dos usuários, e transformou dúvidas em aberto em uma lista com responsáveis.',
 recH: 'Depois: conciliando design e código',
 recIntro: 'Mais tarde, fui um nível além: li o código do app e de dois serviços do backend e comparei, tela por tela, com o arquivo da V1.1 no Figma. O objetivo era documentação: um Figma em que todo o time pudesse confiar.',
 recStats: [['14','telas e estados que existiam no app mas não no Figma, agora desenhados dentro dos fluxos com os textos reais do código'],['5','divergências entre design, app e API, registradas como decisões em aberto para produto e engenharia'],['2','propostas de texto minhas, sinalizadas como pendentes de validação em vez de passarem por existentes']],
 rec: [['Desenhar o que o código já faz','Estados de erro e exceção, como um cadastro que precisa de mais informações, estavam no app mas não no Figma. Desenhei cada um dentro do seu fluxo, para nada existir só no código.'],['Bater com a fonte da verdade','Refiz uma tela de configurações igual ao que foi para produção e removi uma opção que o produto ainda não oferecia, para o arquivo parar de prometer o que não existe.'],['Não decidir sozinha','Onde design, app e API discordavam, não escolhi um lado. Deixei essas telas como estavam e listei cada divergência para o time decidir.'],['Guardar o histórico','Toda versão anterior foi para uma página de arquivo, para qualquer mudança poder ser rastreada e desfeita.']],
 qa: 'Antes do lançamento, fiz uma rodada completa de QA nas builds. Ela encontrou 9 bugs funcionais e 25 observações de UX/UI, cada uma registrada com evidência visual e prioridade sugerida, e retestei cada correção com os devs.',
 outcomes: [['Lançado','A V1 entrou no ar em setembro de 2026 com 8 jornadas completas.'],['Adotado','O cadastro em etapas que propus virou o modelo de onboarding.'],['Alinhado','Uma visão única do escopo da V1 entre negócio, tecnologia e operação, graças ao protótipo.'],['Antes do usuário','34 problemas encontrados e retestados em uma única rodada de QA antes do lançamento.']],
 learn: [['Design também é decisão de negócio','Em produtos regulados, escolhas de design também são escolhas de negócio e jurídicas. Mostrar as dúvidas cedo economiza semanas.'],['O arquivo só vale se bater com a build','Auditar o que vai para produção contra o que foi desenhado, até o código, virou parte do meu jeito de trabalhar.'],['Acessibilidade como padrão','Desenhar para pessoas de 25 a 75 anos fez da acessibilidade o meu ponto de partida, não um extra.']]
},
es: {
 title: 'UNI FY',
 sub: 'Una superapp de crédito para servidores públicos y jubilados, del primer boceto a la V1 lanzada.',
 meta: [['Rol','UX/UI Product Designer · recorridos, UI, microcopy, prototipo, auditorías y QA'],['Equipo','Remoto y multidisciplinario: liderazgo de producto, desarrollo y seguridad'],['Período','abr 2026 – hoy · V1 lanzada en sep 2026'],['Plataforma','iOS y Android'],['Herramientas','Figma, FigJam, Jira, Notion, herramientas de IA']],
 stats: [['8','recorridos completos en la V1'],['~179','pantallas en 9 flujos en la V1.1'],['34','problemas en una ronda de QA: 9 bugs, 25 notas de UX']],
 nda: 'Este producto está bajo NDA. Todos los visuales de esta página son recreados o esquemáticos, sin pantallas reales, valores ni reglas de negocio. Con gusto presento el trabajo real en una entrevista.',
 h: {problem:'El problema', who:'Para quién diseñamos', role:'Mi rol', process:'Proceso: entregar por versiones', journeys:'Los recorridos de la V1', decisions:'Decisiones clave', ds:'Design system', audit:'Auditoría diseño × implementación', qa:'QA antes del lanzamiento', outcomes:'Resultados', learn:'Lo que aprendí'},
 problem: ['En Brasil, los servidores públicos y jubilados pueden pedir crédito con descuento por nómina (consignado): las cuotas salen directo del salario o la jubilación, por eso las tasas son más bajas.','Pero la experiencia suele ser lenta, llena de papeles y confusa, sobre todo para las personas mayores. UNI FY quiso hacerla mobile-first: consultar el crédito, simular, firmar y seguir todo en una app, y pagar con Pix en cuotas.'],
 hmw: '¿Cómo hacer que un producto financiero regulado se sienta simple y confiable para personas de 25 a 75 años, mientras el backend y las reglas de negocio seguían cambiando?',
 who: [['Servidor activo · 25–55','Crédito rápido, sin burocracia.'],['Jubilado · 55–75','Confianza, claridad y atención respetuosa.'],['Quien busca crédito · cualquier edad','Mejores condiciones con la simplicidad de un toque.']],
 role: [['UX y UI','Diseñé los 8 recorridos de la V1 en Figma, cada pantalla vinculada 1:1 al backlog.'],['Alineación','Convertí los wireframes en un prototipo navegable y lo presenté a todas las áreas, alineando negocio, tecnología y operaciones sobre el alcance de la V1.'],['UX writing','Escribí el microcopy del producto, del onboarding a las pantallas de confirmación.'],['Calidad','Hice auditorías de UX/UI y QA funcional, y volví a probar cada corrección con el equipo de desarrollo hasta el lanzamiento.'],['Project design','Organicé el archivo de Figma por versiones (V1.0 → V1.1) y escribí una guía de onboarding para el equipo técnico.']],
 processIntro: 'Estructuré el producto por versiones para que el equipo pudiera entregar, aprender y refinar sin perder de vista lo acordado.',
 steps: [['V1.0','Recorridos principales en wireframe y luego en alta fidelidad, vinculados al backlog.'],['Prototipo','Prototipo navegable presentado a todas las áreas para alinear el alcance de la V1.'],['Lanzamiento','8 recorridos completos en iOS y Android, sep 2026.'],['V1.1','Ampliada y refinada a ~179 pantallas en 9 flujos, auditadas contra la implementación.']],
 stages: [['Entrar',['Onboarding','Registro y activación','Autenticación']],['Usar el crédito',['Pix con crédito','Movimientos']],['Gestionar',['Facturas y contratos','Perfil']],['Pedir ayuda',['Centro de ayuda con paso a una persona']]],
 capJourneys: 'Los 8 recorridos de la V1, agrupados por lo que la persona quiere hacer. Diagrama recreado.',
 decisions: [['Registro por etapas','El registro de crédito pide muchos datos. Propuse dividirlo en pasos cortos con progreso visible, para que nadie enfrente un muro de campos. El equipo lo adoptó como modelo de onboarding.'],['Confianza antes que velocidad','Índigo profundo como base, para transmitir seguridad y foco. El coral se reserva para la única acción principal de cada pantalla, así el siguiente paso nunca queda en duda.'],['Para personas de 25 a 75','Áreas táctiles de al menos 44 × 44 px, etiqueta de texto en cada acción (nunca solo ícono) y contraste WCAG 2.1 AA como mínimo.'],['Ayuda donde surge la duda','Las preguntas frecuentes se abren dentro del flujo en el que está la persona, con un camino claro hacia una persona cuando la respuesta no alcanza.']],
 before: 'Antes', after: 'Después',
 formBefore: 'Un formulario largo', formAfter: 'Pasos cortos con progreso',
 stepWord: 'Paso', next: 'Continuar',
 capSignup: 'Esquema de la idea del registro por etapas, no son las pantallas reales.',
 dsIntro: 'Creé el design system de UNI FY para que diseño y desarrollo construyeran con consistencia y rapidez, y escribí una guía para presentarlo al equipo técnico.',
 swatches: [['#070C52','Índigo','confianza'],['#FB7F87','Coral','acción principal']],
 support: 'Colores de apoyo: menta, durazno, violeta y gris.',
 type: [['Space Grotesk','Títulos'],['Inter','Texto e interfaz'],['Roboto Mono','Datos técnicos']],
 tokens: [['Espaciado','Escala base 4, de 4 a 64 px'],['Íconos','Material Symbols, outlined, 24 dp'],['Movimiento','100–150 ms feedback · 200–300 ms navegación · 400–500 ms celebraciones']],
 statesH: 'Cada componente, todos los estados',
 states: ['Normal','Hover','Foco','Presionado','Desactivado','Cargando'],
 rules: 'Reglas del equipo: usar siempre componentes de la biblioteca, nunca colores sueltos en el código, y documentar cada variante y estado.',
 auditIntro: 'A medida que el producto crecía, diseño, app y backend empezaron a separarse. Junto con un ingeniero, audité los 9 flujos, unas 179 pantallas, comparando cada pantalla de Figma con lo que la app y el backend hacían de verdad.',
 auditSteps: ['Revisar cada pantalla de un flujo contra la implementación.','Clasificar cada pantalla con uno de cinco estados.','Escribir un resumen corto por flujo: los riesgos para la persona usuaria y las decisiones que el negocio aún debía tomar.','Compartir el marcador con producto e ingeniería para priorizar las correcciones.'],
 statuses: ['Alineada','Parcialmente alineada','Divergente','Simulada (solo interfaz)','Faltante'],
 flowWord: 'Flujo',
 capAudit: 'Cómo funcionaba el marcador. Datos ilustrativos, no son los resultados reales.',
 auditWhy: 'Por qué importa: en un producto de crédito, una pantalla que dice “listo” antes de que el sistema lo confirme es un problema de confianza, no visual. La auditoría mostró esas brechas antes que los usuarios, y convirtió las dudas abiertas en una lista con responsables.',
 recH: 'Después: conciliar diseño y código',
 recIntro: 'Más adelante fui un nivel más allá: leí el código de la app y de dos servicios del backend y lo comparé, pantalla por pantalla, con el archivo de la V1.1 en Figma. El objetivo era documentación: un Figma en el que todo el equipo pudiera confiar.',
 recStats: [['14','pantallas y estados que existían en la app pero no en Figma, ahora diseñados dentro de sus flujos con los textos reales del código'],['5','brechas entre diseño, app y API, registradas como decisiones abiertas para producto e ingeniería'],['2','propuestas de texto mías, señaladas como pendientes de validación en lugar de presentarse como existentes']],
 rec: [['Diseñar lo que el código ya hace','Estados de error y excepción, como un registro que necesita más información, estaban en la app pero no en Figma. Diseñé cada uno dentro de su flujo, para que nada exista solo en el código.'],['Coincidir con la fuente de verdad','Rehice una pantalla de configuración igual a lo que salió a producción y quité una opción que el producto aún no ofrecía, para que el archivo dejara de prometer lo que no existe.'],['No decidir sola','Donde diseño, app y API no coincidían, no elegí un lado. Dejé esas pantallas como estaban y listé cada brecha para que el equipo decidiera.'],['Guardar el historial','Cada versión anterior fue a una página de archivo, para que cualquier cambio pueda rastrearse y deshacerse.']],
 qa: 'Antes del lanzamiento hice una ronda completa de QA en las builds. Encontró 9 bugs funcionales y 25 observaciones de UX/UI, cada una registrada con evidencia visual y prioridad sugerida, y volví a probar cada corrección con el equipo de desarrollo.',
 outcomes: [['Lanzado','La V1 salió en septiembre de 2026 con 8 recorridos completos.'],['Adoptado','El registro por etapas que propuse se convirtió en el modelo de onboarding.'],['Alineado','Una visión única del alcance de la V1 entre negocio, tecnología y operaciones, gracias al prototipo.'],['Antes que el usuario','34 problemas encontrados y verificados en una sola ronda de QA antes del lanzamiento.']],
 learn: [['El diseño también es negocio','En productos regulados, las decisiones de diseño también son de negocio y legales. Mostrar las dudas temprano ahorra semanas.'],['El archivo vale si coincide con la build','Auditar lo que sale a producción contra lo diseñado, hasta el código, ya es parte de mi forma de trabajar.'],['Accesibilidad por defecto','Diseñar para personas de 25 a 75 años hizo de la accesibilidad mi punto de partida, no un extra.']]
}
};

const UNIFY_THANKS={
 pt:['Agradecimento','Obrigada ao Rodrigo Drummond, CEO do meuunify, que criou a ideia do projeto e foi meu gestor direto.'],
 en:['Thanks','Thank you to Rodrigo Drummond, CEO of meuunify, who came up with the idea for the project and was my direct manager.'],
 es:['Agradecimiento','Gracias a Rodrigo Drummond, CEO de meuunify, que creó la idea del proyecto y fue mi gestor directo.']};
function unifyView(lang, esc, backLabel, nextLabel){
 const U = UNIFY[lang];
 const field = w => `<i class="uf-field" style="width:${w}%"></i>`;
 const longForm = [92,70,85,60,92,78,66,88,72,90,58,80].map(field).join('');
 const stepCard = n => `<div class="uf-step"><span class="uf-k">${esc(U.stepWord)} ${n}</span><div class="uf-prog">${[1,2,3,4].map(i=>`<b class="${i<=n?'on':''}"></b>`).join('')}</div>${field(90)}${field(70)}<span class="uf-cta">${esc(U.next)}</span></div>`;
 // illustrative audit data: [aligned, partial, divergent, simulated, missing] per flow
 const demo = [[14,3,1,1,0],[18,2,0,0,1],[10,5,2,2,1],[16,1,1,0,0],[8,4,3,3,2],[20,2,0,0,0],[12,3,2,1,1],[9,2,1,2,0],[15,4,1,0,1]];
 const audit = demo.map((r,i)=>{const t=r.reduce((a,b)=>a+b,0);return `<div class="ua-row"><span class="ua-l">${esc(U.flowWord)} ${String.fromCharCode(65+i)}</span><div class="ua-bar">${r.map((v,j)=>v?`<i class="s${j}" style="flex:${v/t}"></i>`:'').join('')}</div></div>`}).join('');
 return `<article class="case unify"><div class="wrap">
 <button class="back" data-home>${esc(backLabel)}</button>
 <p class="hud" style="margin-top:12px">Fintech · Product design · Project design</p>
 <h1>${esc(U.title)}</h1><p class="sub">${esc(U.sub)}</p>
 <div class="callout nda"><p class="hud">✎ NDA</p><p style="margin:0">${esc(U.nda)}</p></div>
 <div class="meta">${U.meta.map(([a,b])=>`<div><b>${esc(a)}</b><span>${esc(b)}</span></div>`).join('')}</div>
 <div class="stats">${U.stats.map(([n,l])=>`<div class="stat"><b>${esc(n)}</b>${esc(l)}</div>`).join('')}</div>
 <h2>${esc(U.h.problem)}</h2>${U.problem.map(p=>`<p>${esc(p)}</p>`).join('')}
 <blockquote class="hmw">${esc(U.hmw)}</blockquote>
 <h2>${esc(U.h.who)}</h2><div class="cards3">${U.who.map(([t,d],i)=>`<div class="pcard" style="background:${['var(--pink-soft)','var(--mint)','var(--butter)'][i]};color:${['var(--berry)','var(--on-mint)','var(--on-butter)'][i]}"><b>${esc(t)}</b><span>${esc(d)}</span></div>`).join('')}</div>
 <h2>${esc(U.h.role)}</h2><div class="decisions">${U.role.map(([t,d])=>`<div class="dec"><b>${esc(t)}</b><span>${esc(d)}</span></div>`).join('')}</div>
 <h2>${esc(U.h.process)}</h2><p>${esc(U.processIntro)}</p>
 <ol class="u-steps">${U.steps.map(([t,d])=>`<li><b>${esc(t)}</b><span>${esc(d)}</span></li>`).join('')}</ol>
 <h3>${esc(U.h.journeys)}</h3>
 <figure class="u-fig"><div class="uj">${U.stages.map(([s,fl],i)=>`<div class="uj-col"><span class="uj-n">0${i+1}</span><b>${esc(s)}</b>${fl.map(f=>`<span class="uj-chip">${esc(f)}</span>`).join('')}</div>`).join('<span class="uj-arrow" aria-hidden="true">→</span>')}</div><figcaption class="cap">${esc(U.capJourneys)}</figcaption></figure>
 <h2>${esc(U.h.decisions)}</h2>
 <div class="decisions">${U.decisions.map(([t,d])=>`<div class="dec"><b>✦ ${esc(t)}</b><span>${esc(d)}</span></div>`).join('')}</div>
 <figure class="u-fig"><div class="uf">
  <div><span class="vtag old">${esc(U.before)}</span><div class="uf-phone"><span class="uf-k">${esc(U.formBefore)}</span>${longForm}<span class="uf-cta">${esc(U.next)}</span></div></div>
  <div><span class="vtag">${esc(U.after)}</span><div class="uf-steps">${[1,2,3,4].map(stepCard).join('')}</div><p class="uf-k" style="margin-top:8px">${esc(U.formAfter)}</p></div>
 </div><figcaption class="cap">${esc(U.capSignup)}</figcaption></figure>
 <h2>${esc(U.h.ds)}</h2><p>${esc(U.dsIntro)}</p>
 <div class="swatches">${U.swatches.map(([c,n,r])=>`<div><span style="background:${c}"></span><b>${esc(n)}</b><code>${c}</code><small>${esc(r)}</small></div>`).join('')}</div>
 <p class="u-muted">${esc(U.support)}</p>
 <div class="cards3">${U.type.map(([f,u])=>`<div class="pcard plain"><b style="font-size:22px;line-height:1.2">${esc(f)}</b><span>${esc(u)}</span></div>`).join('')}</div>
 <div class="tblwrap"><table class="tbl"><tbody>${U.tokens.map(([k,v])=>`<tr><td class="k">${esc(k)}</td><td>${esc(v)}</td></tr>`).join('')}</tbody></table></div>
 <h3>${esc(U.statesH)}</h3>
 <figure class="u-fig"><div class="ust">${U.states.map((s,i)=>`<div><span class="ub ub${i}">${i===5?'<i class="ub-spin"></i>':esc(U.next)}</span><small>${esc(s)}</small></div>`).join('')}</div></figure>
 <p>${esc(U.rules)}</p>
 <h2>${esc(U.h.audit)}</h2><p>${esc(U.auditIntro)}</p>
 <ol>${U.auditSteps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol>
 <figure class="u-fig"><div class="ua"><div class="ua-legend">${U.statuses.map((s,j)=>`<span><i class="s${j}"></i>${esc(s)}</span>`).join('')}</div>${audit}</div><figcaption class="cap">${esc(U.capAudit)}</figcaption></figure>
 <p>${esc(U.auditWhy)}</p>
 <h3>${esc(U.recH)}</h3><p>${esc(U.recIntro)}</p>
 <div class="stats">${U.recStats.map(([n,l])=>`<div class="stat"><b>${esc(n)}</b>${esc(l)}</div>`).join('')}</div>
 <div class="decisions">${U.rec.map(([t,d])=>`<div class="dec"><b>✦ ${esc(t)}</b><span>${esc(d)}</span></div>`).join('')}</div>
 <h2>${esc(U.h.qa)}</h2><p>${esc(U.qa)}</p>
 <h2>${esc(U.h.outcomes)}</h2><div class="decisions">${U.outcomes.map(([t,d])=>`<div class="dec"><b>${esc(t)}</b><span>${esc(d)}</span></div>`).join('')}</div>
 <h2>${esc(U.h.learn)}</h2><div class="decisions">${U.learn.map(([t,d])=>`<div class="dec"><b>${esc(t)}</b><span>${esc(d)}</span></div>`).join('')}</div>
 <div class="callout"><p class="hud">♥ ${esc((UNIFY_THANKS[lang]||UNIFY_THANKS.en)[0])}</p><p style="margin:0">${esc((UNIFY_THANKS[lang]||UNIFY_THANKS.en)[1])}</p></div>
 <div class="next"><button class="btn" data-home>${esc(backLabel)}</button><a class="btn primary" href="#case-edu">${esc(nextLabel)}</a></div>
 </div></article>`;
}

(function(){const css=`
.unify .nda{margin:20px 0 8px}
.u-muted{color:var(--ink-muted);font-size:15px;margin-top:6px}
.u-steps{list-style:none;padding:0!important;margin:18px 0!important;display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:12px;counter-reset:s;max-width:900px}
.u-steps li{border:1px solid var(--line);border-radius:16px;padding:14px 16px;background:var(--paper-raised);display:flex;flex-direction:column;gap:4px;font-size:15px;line-height:22px;position:relative}
.u-steps li b{font:400 13px/16px var(--font-pixel);letter-spacing:.06em;color:var(--pink-text);text-transform:uppercase}
.u-fig{margin:20px 0 8px;max-width:900px}
.uj{display:flex;gap:10px;align-items:stretch;flex-wrap:wrap}
.uj-col{flex:1 1 170px;border:1px solid var(--line);border-radius:16px;padding:14px;background:var(--paper-raised);display:flex;flex-direction:column;gap:8px}
.uj-col b{font-size:17px}
.uj-n{font:400 12px var(--font-pixel);color:var(--pink-text)}
.uj-chip{font-size:14px;line-height:18px;padding:7px 10px;border-radius:10px;background:#E9EAF6;color:#070C52}
.uj-arrow{align-self:center;color:var(--ink-muted);font-size:20px}
@media(max-width:720px){.uj-arrow{display:none}}
.uf{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,2fr);gap:20px;align-items:start}
@media(max-width:720px){.uf{grid-template-columns:1fr}}
.uf-phone,.uf-step{background:#fff;border:1px solid #D6D8E8;border-radius:18px;padding:14px;display:flex;flex-direction:column;gap:7px;color:#070C52}
.uf-phone{min-height:340px;margin-top:8px}
.uf-steps{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;margin-top:8px}
@media(max-width:720px){.uf-steps{grid-template-columns:repeat(2,minmax(0,1fr))}}
.uf-k{font:600 13px/16px var(--font-sans);color:inherit}
p.uf-k{color:var(--ink-muted)}
.uf-field{display:block;height:14px;border-radius:6px;background:#E9EAF6;border:1px solid #D6D8E8}
.uf-cta{margin-top:auto;display:block;text-align:center;font:700 12px/30px var(--font-sans);border-radius:999px;background:#FB7F87;color:#070C52}
.uf-prog{display:flex;gap:3px}.uf-prog b{flex:1;height:4px;border-radius:4px;background:#E9EAF6}.uf-prog b.on{background:#070C52}
.swatches small{display:block;color:var(--ink-muted);font-size:13px}
.ust{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:14px;padding:18px;border-radius:18px;background:#fff;border:1px solid #D6D8E8}
.ust div{display:flex;flex-direction:column;align-items:center;gap:8px}.ust small{color:#4A4E72;font-size:13px}
.ub{display:inline-flex;align-items:center;justify-content:center;min-width:110px;height:44px;border-radius:999px;font:700 14px var(--font-sans);background:#FB7F87;color:#070C52}
.ub1{background:#F9666F}.ub2{box-shadow:0 0 0 3px #fff,0 0 0 5px #070C52}.ub3{background:#E5545E;transform:scale(.97)}.ub4{background:#E7E8EF;color:#6B6E85}
.ub-spin{width:18px;height:18px;border-radius:50%;border:3px solid rgba(7,12,82,.25);border-top-color:#070C52;animation:ubs 1s linear infinite}
@keyframes ubs{to{transform:rotate(360deg)}}@media(prefers-reduced-motion:reduce){.ub-spin{animation:none}}
.ua{border:1px solid var(--line);border-radius:18px;padding:16px;background:var(--paper-raised);display:flex;flex-direction:column;gap:8px}
.ua-legend{display:flex;flex-wrap:wrap;gap:6px 16px;font-size:13px;margin-bottom:6px}
.ua-legend span{display:inline-flex;align-items:center;gap:6px}.ua-legend i{width:12px;height:12px;border-radius:3px;display:inline-block}
.ua-row{display:grid;grid-template-columns:70px 1fr;gap:10px;align-items:center;font-size:13px}
.ua-bar{display:flex;gap:2px;height:16px}.ua-bar i{display:block;border-radius:3px}
.ua .s0{background:#3E9C6B}.ua .s1{background:#9FD3B4}.ua .s2{background:#E5545E}.ua .s3{background:#B9A6F0}.ua .s4{background:#9A97A6}
`;const s=document.createElement('style');s.textContent=css;document.head.appendChild(s);})();
