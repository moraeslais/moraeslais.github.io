/* Venzi · página do case (PT / EN / ES) */
const VZ_IMG='img/venzi/';
const VZ_SRC={
 jamia:['Oikonomidi et al., JAMIA 2023','https://eprints.gla.ac.uk/287844/1/287844.pdf'],
 rbmfc:['Silveira et al., RBMFC 2019','https://doaj.org/article/6af6740c318243c68bc2cbddf48dd8ce'],
 bmj:['BMJ Open','https://bmjopen.bmj.com/content/6/10/e012116.full'],
 pmc:['PMC','https://pmc.ncbi.nlm.nih.gov/articles/PMC3188816/']
};
const VZ_BENCH_URL={iClinic:'https://www.b2bstack.com.br/product/iclinic',Feegow:'https://medicinasa.com.br/feegow-clinic-gestao-integrada/',Klinvia:'https://www.b2bstack.com.br/product/klinvia','Jane App':'https://jane.app/features/scheduling','Cliniko + ShowUp':'https://clinicroll-suite.pages.dev/'};
const VZ_SW=[['#0f766e','brand/primary'],['#e2f2ef','brand/soft'],['#f4f7f6','bg/base'],['#13201f','text/primary'],['#c2410c','risk/high'],['#b7791f','risk/medium'],['#2f855a','status/ok'],['#657173','text/subtle']];
const VENZI={
pt:{
 title:'Venzi',hud:'Saúde · B2B · Product design',
 sub:'Um painel web para a recepção de clínicas que mostra quem pode faltar, por quê e o que fazer antes que a falta aconteça.',
 proto:'Abrir o protótipo navegável',protoNote:'Desktop · 3 fluxos guiados · dados fictícios',
 concept:'Projeto conceitual de portfólio, feito do zero, da pesquisa ao protótipo. Ainda não foi validado com usuários: conversar com recepcionistas e gestoras de clínica é o próximo passo, e os resultados entram aqui quando existirem.',
 meta:[['Meu papel','Pesquisa, UX, UI e protótipo (solo)'],['Tipo','B2B · desktop · saúde'],['Cliente','Clínica Jacarandá (fictícia), 6 profissionais'],['Entregas','28 telas, marca, styleguide, componentes, handoff e protótipo']],
 stats:[['23%','das consultas ambulatoriais têm falta, na média mundial'],['−25%','de faltas quando há lembrete por SMS ou e-mail'],['39% × 29%','de redução: ligação feita por pessoa contra lembrete automático'],['28','telas desktop no Figma, com estados e telas de apoio']],
 statSrc:'Fontes na seção de pesquisa.',
 h:{problem:'O problema',research:'O que a pesquisa mostrou',bench:'Benchmark',who:'Para quem',scope:'Escopo do MVP',principles:'Princípios',flow:'O fluxo principal',decisions:'Decisões de design',try:'Experimente o protótipo',ds:'Marca e design system',next:'Próximos passos',metrics:'Como eu mediria',learn:'O que eu aprendi'},
 problem:['Numa clínica, a falta é o problema mais caro da agenda e quase sempre é descoberta tarde demais. A recepção confirma consultas uma a uma, por telefone e WhatsApp, enquanto atende o balcão.','Quando a falta aparece, o horário já passou e não dá para encaixar ninguém. E a gestão não enxerga quanto isso custa nem onde as faltas se concentram.'],
 hmw:'Como fazer a recepção agir antes da falta, e a gestão ver o impacto em reais, sem aumentar o trabalho de ninguém?',
 srcWord:'Fonte',
 findings:[['Faltar é comum','A média mundial é de 23% das consultas ambulatoriais. Numa UBS do Sul do Brasil, 19,2% de 3.131 consultas.',['jamia','rbmfc']],['Lembrete funciona','Lembretes por SMS ou e-mail reduzem as faltas em cerca de 25%, e mandar mais de um ajuda mais.',['bmj']],['Ligação funciona melhor, mas custa tempo','A ligação feita por uma pessoa reduz 39% das faltas, contra 29% do lembrete automático. Daí a tese: não ligar para todo mundo, e sim dizer para quem vale a pena ligar.',['pmc']]],
 benchCols:['Produto','O que faz bem','O que levei para o Venzi'],
 bench:[['iClinic','Confirmação por SMS, e-mail ou WhatsApp','Confirmação pelo canal que o paciente já usa'],['Feegow','Indicadores de ocupação e financeiro','Receita perdida como o primeiro número da gestão'],['Klinvia','Agenda por profissional e permissões','Agenda em colunas e permissões claras'],['Jane App','Lista de espera que avisa quando abre vaga','Encaixe sugerido quando alguém cancela'],['Cliniko + ShowUp','Marca quem tem risco e avisa só essas pessoas','Risco visível na agenda, com a ação ao lado']],
 gap:'Todos confirmam consultas sozinhos. Só um mostra quem tem risco de faltar, e só um preenche o horário vago. Juntar as duas coisas na agenda virou a lacuna do Venzi.',
 who:[['Recepção · Bruna','Telefone, WhatsApp e balcão ao mesmo tempo. Abre em Hoje: o que fazer agora, em ordem.'],['Profissional · Dra. Camila','Olha o painel entre consultas. Abre na própria agenda e vê só os próprios pacientes.'],['Gestão · Cláudia','Olha uma vez por dia e no fim do mês. Abre em Indicadores: ocupação, faltas e receita perdida.']],
 whoNote:'São proto-personas, hipóteses a validar. No protótipo, a tela de login deixa entrar com cada perfil, e a recepção vê Indicadores e Equipe bloqueados, com o motivo.',
 scopeCols:['Entra no MVP','Fica de fora (por enquanto)'],
 scope:[['Hoje: o que a recepção faz agora','Prontuário eletrônico'],['Agenda do dia e da semana, com risco','Cobrança e convênios'],['Confirmações e para quem ligar','Teleconsulta'],['Lista de espera e encaixe','App do paciente'],['Pacientes, ficha e indicadores','Versão mobile (próxima fase)'],['Equipe e permissões por perfil','Várias unidades']],
 scopeNote:'Só desktop: a recepção trabalha no computador do balcão, e agenda em colunas funciona mal num celular. O mobile começa, na próxima fase, pela agenda do profissional.',
 principles:[['Risco sempre com motivo','O risco é uma regra simples (faltas anteriores, resposta aos lembretes, antecedência e horário), nunca uma caixa-preta. O motivo aparece junto, para a recepção confiar e saber o que dizer.'],['Ação antes de informação','Cada linha tem um botão com verbo: Ligar, Reenviar, Encaixar. A tela Hoje é uma lista de tarefas, não um calendário.'],['Calmo e confiável','Quase tudo é neutro. O verde fica nas ações, e laranja só onde existe risco real. Se tudo chama atenção, nada chama.']],
 flow:[['Hoje','Mariana tem risco alto de faltar amanhã.'],['Ficha','O motivo: faltou 2 vezes em 6 meses e não abriu os lembretes.'],['Ligação','A mãe quer remarcar. A recepção registra o resultado.'],['Lista de espera','O horário de amanhã, 9h, vira vaga na hora e o Venzi sugere quem cabe.'],['Convite','Isadora recebe o convite pelo WhatsApp e aceita em minutos.'],['Horário preenchido','A falta provável virou consulta remarcada, e a agenda não ficou com buraco.']],
 dec:[['Hoje é uma lista de tarefas','A recepção pensa em ações, não em grade de horários. “Faça agora” vem em ordem do que mais evita faltas, com o motivo em cada linha.','hoje'],['A ficha explica o risco fator por fator','Cada fator tem um peso visível. O histórico guarda o porquê das faltas: “esqueceu” e “febre” pedem conversas diferentes.','ficha'],['Registrar a ligação já libera o horário','Quando a pessoa quer remarcar, o horário vai para a lista de espera no mesmo passo, com a sugestão de quem pode ocupar.','ligacao'],['O encaixe explica o critério','Profissional pedido, horário preferido e tempo de espera. O convite vale 30 minutos e quem aceita primeiro fica com o horário.','lista'],['Agenda em colunas por profissional','É assim que a recepção pensa o balcão. O risco aparece na própria consulta, e um clique abre o painel com o motivo e as ações.','agenda-painel'],['Confirmações abrem em “Para agir”','As confirmadas não pedem nada. Cada linha mostra os lembretes já enviados, para não repetir mensagem, e só o risco alto pede ligação.','confirmacoes'],['Falta em reais, não só em porcentagem','A gestão vê a receita perdida e um mapa de calor que aponta o padrão (segunda de manhã), com a regra de lembrete sugerida ali mesmo.','indicadores'],['Cada perfil vê só o que precisa','A matriz de permissões fica à vista. A profissional vê só a própria agenda e chama o paciente que já chegou.','profissional']],
 vidT:'A demo em 55 segundos',vidP:'O fluxo da recepção do começo ao fim, e a gestão criando uma regra de lembrete.',
 tryP:'Use a barra escura no topo para seguir um fluxo guiado (recepção, profissional ou gestão) ou explore à vontade.',tryB:'Abrir em tela cheia',
 dsIntro:'34 variáveis, 9 estilos de texto, 19 ícones e componentes com propriedades no Figma, mais tokens com nome de código para o handoff.',
 type:[['Plus Jakarta Sans','Títulos e números: firme sem ser dura, legível de longe no balcão.'],['Inter','Texto de interface: aguenta listas longas sem cansar.']],
 a11yT:'Um achado do styleguide',a11y:'Ao medir o contraste de cada texto, o cinza mais claro dava só 3,0:1 sobre branco, abaixo do mínimo AA. Escureci para #657173 (5,0:1). Como as telas usam a variável, a correção chegou em todas de uma vez.',
 next:'Conversar com 2 ou 3 pessoas de recepção e gestão de clínica e testar com elas o fluxo da recepção. Depois, conferir o nome no INPI e desenhar a agenda do profissional no celular.',
 metricsCols:['Métrica','Por quê'],metrics:[['Taxa de faltas antes e depois','É o problema que o Venzi existe para resolver'],['Tempo até a primeira ação na tela Hoje','Mostra se a lista de tarefas é clara'],['Tarefas do “Faça agora” feitas até as 10h','Mostra se a recepção age a tempo de evitar a falta']],metricsNote:'Hipóteses: ainda não há dados de uso real.',
 learn:[['O dado decide o desenho','Saber que a ligação funciona melhor, mas custa tempo, virou a regra de ligar só para o risco alto.'],['Permissão também é interface','Mostrar a tela bloqueada, com o motivo, explica os perfis melhor do que uma página de configurações.'],['Dados coerentes dão credibilidade','Os 46 atendimentos de hoje batem na tela Hoje, na agenda semanal e nos perfis. Isso faz o protótipo parecer real.']]
},
en:{
 title:'Venzi',hud:'Healthcare · B2B · Product design',
 sub:'A web dashboard for clinic front desks that shows who might miss an appointment, why, and what to do before it happens.',
 proto:'Open the clickable prototype',protoNote:'Desktop · 3 guided flows · sample data (UI in Portuguese)',
 concept:'A self-initiated portfolio project, built from scratch, from research to prototype. It hasn’t been validated with users yet: talking to clinic receptionists and managers is the next step, and the results will be added here.',
 meta:[['My role','Research, UX, UI and prototype (solo)'],['Type','B2B · desktop · healthcare'],['Client','Clínica Jacarandá (fictional), 6 practitioners'],['Deliverables','28 screens, brand, styleguide, components, handoff and prototype']],
 stats:[['23%','of outpatient appointments are missed, global average'],['−25%','fewer no-shows with SMS or email reminders'],['39% × 29%','reduction: a person’s phone call vs an automated reminder'],['28','desktop screens in Figma, with states and support screens']],
 statSrc:'Sources in the research section.',
 h:{problem:'The problem',research:'What the research showed',bench:'Benchmark',who:'Who it’s for',scope:'MVP scope',principles:'Principles',flow:'The main flow',decisions:'Design decisions',try:'Try the prototype',ds:'Brand and design system',next:'Next steps',metrics:'How I’d measure it',learn:'What I learned'},
 problem:['At a clinic, no-shows are the most expensive problem on the schedule, and they’re almost always found out too late. The front desk confirms appointments one by one, by phone and WhatsApp, while serving the counter.','By the time a no-show shows up, the slot is gone and nobody can be fitted in. And management can’t see what it costs or where no-shows cluster.'],
 hmw:'How might we help the front desk act before a no-show, and show management the impact in money, without adding work for anyone?',
 srcWord:'Source',
 findings:[['Missing appointments is common','The global average is 23% of outpatient appointments. At a public clinic in southern Brazil, 19.2% of 3,131 appointments.',['jamia','rbmfc']],['Reminders work','SMS or email reminders cut no-shows by about 25%, and more than one reminder helps more.',['bmj']],['Calls work better, but cost time','A phone call from a person cuts no-shows by 39%, versus 29% for automated reminders. Hence the idea: don’t call everyone, tell the desk who is worth calling.',['pmc']]],
 benchCols:['Product','What it does well','What I took for Venzi'],
 bench:[['iClinic','Confirmations by SMS, email or WhatsApp','Confirm on the channel patients already use'],['Feegow','Occupancy and revenue dashboards','Lost revenue as management’s first number'],['Klinvia','Schedule per practitioner and role permissions','Column schedule and clear permissions'],['Jane App','Waitlist that notifies when a slot opens','Suggested fill-in when someone cancels'],['Cliniko + ShowUp','Flags who is at risk and messages only them','Risk visible on the schedule, with the action next to it']],
 gap:'They all confirm automatically. Only one shows who is likely to miss, and only one fills the empty slot. Bringing both into the schedule became Venzi’s gap.',
 who:[['Front desk · Bruna','Phone, WhatsApp and counter at once. Lands on Today: what to do now, in order.'],['Practitioner · Dr. Camila','Checks between appointments. Lands on her own schedule and sees only her patients.'],['Manager · Cláudia','Checks once a day and at month-end. Lands on Insights: occupancy, no-shows and lost revenue.']],
 whoNote:'These are proto-personas, hypotheses to validate. In the prototype, the login screen lets you sign in as each role, and the front desk sees Insights and Team locked, with the reason.',
 scopeCols:['In the MVP','Left out (for now)'],
 scope:[['Today: what the desk does now','Medical records'],['Day and week schedule, with risk','Billing and insurance'],['Confirmations and who to call','Telehealth'],['Waitlist and fill-ins','Patient app'],['Patients, profile and insights','Mobile version (next phase)'],['Team and role permissions','Multiple locations']],
 scopeNote:'Desktop only: the front desk works at the counter computer, and a column schedule works poorly on a phone. Mobile starts in the next phase with the practitioner’s schedule.',
 principles:[['Risk always comes with a reason','Risk is a simple rule (past no-shows, reminder replies, booking lead time and time of day), never a black box. The reason shows next to it, so the desk trusts it and knows what to say.'],['Action before information','Every row has a verb button: Call, Resend, Fill. Today is a task list, not a calendar.'],['Calm and trustworthy','Almost everything is neutral. Green is for actions, orange only where there is real risk. If everything shouts, nothing does.']],
 flow:[['Today','Mariana is at high risk of missing tomorrow.'],['Profile','The reason: 2 no-shows in 6 months and unopened reminders.'],['Call','Her mother wants to reschedule. The desk logs the result.'],['Waitlist','Tomorrow 9am becomes an open slot right away, and Venzi suggests who fits.'],['Invite','Isadora gets the invite on WhatsApp and accepts within minutes.'],['Slot filled','A likely no-show became a rescheduled visit, and the schedule kept no gap.']],
 dec:[['Today is a task list','The desk thinks in actions, not time grids. “Do now” is ordered by what prevents the most no-shows, with the reason on each row.','hoje'],['The profile explains risk factor by factor','Each factor has a visible weight. History keeps why someone missed: “forgot” and “had a fever” call for different conversations.','ficha'],['Logging the call frees the slot','When the patient wants to reschedule, the slot goes to the waitlist in the same step, with a suggestion of who can take it.','ligacao'],['Fill-ins explain the criteria','Requested practitioner, preferred time and time waiting. The invite lasts 30 minutes and the first to accept gets the slot.','lista'],['A schedule column per practitioner','That’s how the desk thinks about the counter. Risk shows on the appointment itself, and a click opens a panel with the reason and actions.','agenda-painel'],['Confirmations open on “To act”','Confirmed ones need nothing. Each row shows reminders already sent, to avoid repeats, and only high risk asks for a call.','confirmacoes'],['No-shows in money, not just percent','Management sees lost revenue and a heatmap that points to the pattern (Monday mornings), with the suggested reminder rule right there.','indicadores'],['Each role sees only what it needs','The permission matrix is visible. The practitioner sees only her schedule and calls in the patient who just arrived.','profissional']],
 vidT:'The demo in 55 seconds',vidP:'The front-desk flow end to end, then management creating a reminder rule. Interface in Portuguese.',
 tryP:'Use the dark bar at the top to follow a guided flow (front desk, practitioner or manager) or explore freely. The interface is in Portuguese.',tryB:'Open full screen',
 dsIntro:'34 variables, 9 text styles, 19 icons and components with properties in Figma, plus tokens with code names for handoff.',
 type:[['Plus Jakarta Sans','Titles and numbers: firm without being harsh, readable from across the counter.'],['Inter','Interface text: handles long lists without tiring.']],
 a11yT:'A styleguide finding',a11y:'Measuring every text color, the lightest gray reached only 3.0:1 on white, below the AA minimum. I darkened it to #657173 (5.0:1). Since every screen uses the variable, the fix reached all of them at once.',
 next:'Talk to 2 or 3 clinic receptionists and managers and test the front-desk flow with them. Then check the name’s trademark and design the practitioner’s schedule on mobile.',
 metricsCols:['Metric','Why'],metrics:[['No-show rate before and after','It’s the problem Venzi exists to solve'],['Time to first action on Today','Shows whether the task list is clear'],['“Do now” tasks done by 10am','Shows whether the desk acts in time to prevent no-shows']],metricsNote:'Hypotheses: no real usage data yet.',
 learn:[['Data shapes the design','Knowing calls work better but cost time became the rule of calling only high-risk patients.'],['Permissions are interface too','Showing the locked screen, with the reason, explains roles better than a settings page.'],['Consistent data builds credibility','Today’s 46 appointments match on Today, the weekly view and the team profiles. That makes the prototype feel real.']]
},
es:{
 title:'Venzi',hud:'Salud · B2B · Product design',
 sub:'Un panel web para la recepción de clínicas que muestra quién puede faltar, por qué y qué hacer antes de que la falta ocurra.',
 proto:'Abrir el prototipo navegable',protoNote:'Escritorio · 3 flujos guiados · datos ficticios (interfaz en portugués)',
 concept:'Proyecto conceptual de portafolio, hecho desde cero, de la investigación al prototipo. Todavía no se validó con usuarios: hablar con recepcionistas y gestoras de clínicas es el próximo paso, y los resultados se sumarán aquí.',
 meta:[['Mi rol','Investigación, UX, UI y prototipo (sola)'],['Tipo','B2B · escritorio · salud'],['Cliente','Clínica Jacarandá (ficticia), 6 profesionales'],['Entregas','28 pantallas, marca, styleguide, componentes, handoff y prototipo']],
 stats:[['23%','de las consultas ambulatorias tienen falta, promedio mundial'],['−25%','de faltas con recordatorios por SMS o e-mail'],['39% × 29%','de reducción: llamada de una persona contra recordatorio automático'],['28','pantallas de escritorio en Figma, con estados y pantallas de apoyo']],
 statSrc:'Fuentes en la sección de investigación.',
 h:{problem:'El problema',research:'Lo que mostró la investigación',bench:'Benchmark',who:'Para quién',scope:'Alcance del MVP',principles:'Principios',flow:'El flujo principal',decisions:'Decisiones de diseño',try:'Prueba el prototipo',ds:'Marca y design system',next:'Próximos pasos',metrics:'Cómo lo mediría',learn:'Lo que aprendí'},
 problem:['En una clínica, la falta es el problema más caro de la agenda y casi siempre se descubre tarde. La recepción confirma turnos uno por uno, por teléfono y WhatsApp, mientras atiende el mostrador.','Cuando aparece la falta, el horario ya pasó y no se puede ubicar a nadie. Y la gestión no ve cuánto cuesta ni dónde se concentran las faltas.'],
 hmw:'¿Cómo lograr que la recepción actúe antes de la falta, y que la gestión vea el impacto en dinero, sin sumar trabajo a nadie?',
 srcWord:'Fuente',
 findings:[['Faltar es común','El promedio mundial es 23% de las consultas ambulatorias. En un centro de salud del sur de Brasil, 19,2% de 3.131 consultas.',['jamia','rbmfc']],['Los recordatorios funcionan','Los recordatorios por SMS o e-mail reducen las faltas cerca de 25%, y enviar más de uno ayuda más.',['bmj']],['La llamada funciona mejor, pero cuesta tiempo','La llamada de una persona reduce 39% de las faltas, contra 29% del recordatorio automático. De ahí la idea: no llamar a todos, sino decir a quién vale la pena llamar.',['pmc']]],
 benchCols:['Producto','Lo que hace bien','Lo que llevé a Venzi'],
 bench:[['iClinic','Confirmación por SMS, e-mail o WhatsApp','Confirmar por el canal que el paciente ya usa'],['Feegow','Indicadores de ocupación y finanzas','Ingresos perdidos como primer número de la gestión'],['Klinvia','Agenda por profesional y permisos','Agenda en columnas y permisos claros'],['Jane App','Lista de espera que avisa cuando se libera un turno','Reubicación sugerida cuando alguien cancela'],['Cliniko + ShowUp','Marca quién tiene riesgo y avisa solo a esas personas','Riesgo visible en la agenda, con la acción al lado']],
 gap:'Todos confirman solos. Solo uno muestra quién puede faltar, y solo uno llena el turno libre. Unir las dos cosas en la agenda fue la oportunidad de Venzi.',
 who:[['Recepción · Bruna','Teléfono, WhatsApp y mostrador a la vez. Entra en Hoy: qué hacer ahora, en orden.'],['Profesional · Dra. Camila','Mira el panel entre consultas. Entra en su propia agenda y ve solo a sus pacientes.'],['Gestión · Cláudia','Mira una vez al día y a fin de mes. Entra en Indicadores: ocupación, faltas e ingresos perdidos.']],
 whoNote:'Son proto-personas, hipótesis a validar. En el prototipo, la pantalla de login permite entrar con cada perfil, y la recepción ve Indicadores y Equipo bloqueados, con el motivo.',
 scopeCols:['Entra en el MVP','Queda afuera (por ahora)'],
 scope:[['Hoy: lo que hace la recepción ahora','Historia clínica'],['Agenda del día y de la semana, con riesgo','Cobros y seguros'],['Confirmaciones y a quién llamar','Teleconsulta'],['Lista de espera y reubicación','App del paciente'],['Pacientes, ficha e indicadores','Versión móvil (próxima fase)'],['Equipo y permisos por perfil','Varias sedes']],
 scopeNote:'Solo escritorio: la recepción trabaja en la computadora del mostrador, y una agenda en columnas funciona mal en el celular. El móvil empieza, en la próxima fase, por la agenda del profesional.',
 principles:[['El riesgo siempre con motivo','El riesgo es una regla simple (faltas previas, respuesta a recordatorios, anticipación y horario), nunca una caja negra. El motivo aparece al lado para que la recepción confíe y sepa qué decir.'],['Acción antes que información','Cada fila tiene un botón con verbo: Llamar, Reenviar, Ubicar. Hoy es una lista de tareas, no un calendario.'],['Calma y confianza','Casi todo es neutro. El verde queda en las acciones y el naranja solo donde hay riesgo real. Si todo llama la atención, nada la llama.']],
 flow:[['Hoy','Mariana tiene riesgo alto de faltar mañana.'],['Ficha','El motivo: faltó 2 veces en 6 meses y no abrió los recordatorios.'],['Llamada','La madre quiere reprogramar. La recepción registra el resultado.'],['Lista de espera','El turno de mañana a las 9 se libera al instante y Venzi sugiere quién entra.'],['Invitación','Isadora recibe la invitación por WhatsApp y acepta en minutos.'],['Turno ocupado','Una falta probable se volvió una consulta reprogramada, sin huecos en la agenda.']],
 dec:[['Hoy es una lista de tareas','La recepción piensa en acciones, no en una grilla de horarios. “Hacer ahora” va en orden de lo que más evita faltas, con el motivo en cada fila.','hoje'],['La ficha explica el riesgo factor por factor','Cada factor tiene un peso visible. El historial guarda por qué faltó: “se olvidó” y “tuvo fiebre” piden conversaciones distintas.','ficha'],['Registrar la llamada ya libera el turno','Si la persona quiere reprogramar, el turno pasa a la lista de espera en el mismo paso, con la sugerencia de quién puede ocuparlo.','ligacao'],['La reubicación explica el criterio','Profesional pedido, horario preferido y tiempo de espera. La invitación dura 30 minutos y quien acepta primero se queda con el turno.','lista'],['Agenda en columnas por profesional','Así piensa la recepción el mostrador. El riesgo aparece en la propia consulta, y un clic abre el panel con el motivo y las acciones.','agenda-painel'],['Confirmaciones abren en “Para actuar”','Las confirmadas no piden nada. Cada fila muestra los recordatorios enviados, para no repetir mensajes, y solo el riesgo alto pide llamada.','confirmacoes'],['Faltas en dinero, no solo en porcentaje','La gestión ve los ingresos perdidos y un mapa de calor que señala el patrón (lunes por la mañana), con la regla de recordatorio sugerida ahí mismo.','indicadores'],['Cada perfil ve solo lo que necesita','La matriz de permisos está a la vista. La profesional ve solo su agenda y llama al paciente que ya llegó.','profissional']],
 vidT:'La demo en 55 segundos',vidP:'El flujo de recepción de punta a punta, y la gestión creando una regla de recordatorio. Interfaz en portugués.',
 tryP:'Usa la barra oscura de arriba para seguir un flujo guiado (recepción, profesional o gestión) o explora libremente. La interfaz está en portugués.',tryB:'Abrir en pantalla completa',
 dsIntro:'34 variables, 9 estilos de texto, 19 íconos y componentes con propiedades en Figma, más tokens con nombre de código para el handoff.',
 type:[['Plus Jakarta Sans','Títulos y números: firme sin ser dura, legible de lejos en el mostrador.'],['Inter','Texto de interfaz: aguanta listas largas sin cansar.']],
 a11yT:'Un hallazgo del styleguide',a11y:'Al medir el contraste de cada texto, el gris más claro daba solo 3,0:1 sobre blanco, debajo del mínimo AA. Lo oscurecí a #657173 (5,0:1). Como las pantallas usan la variable, la corrección llegó a todas a la vez.',
 next:'Hablar con 2 o 3 personas de recepción y gestión de clínicas y probar con ellas el flujo de recepción. Después, verificar el registro del nombre y diseñar la agenda del profesional en el celular.',
 metricsCols:['Métrica','Por qué'],metrics:[['Tasa de faltas antes y después','Es el problema que Venzi viene a resolver'],['Tiempo hasta la primera acción en Hoy','Muestra si la lista de tareas es clara'],['Tareas de “Hacer ahora” completadas antes de las 10','Muestra si la recepción actúa a tiempo']],metricsNote:'Hipótesis: todavía no hay datos de uso real.',
 learn:[['El dato define el diseño','Saber que la llamada funciona mejor pero cuesta tiempo se volvió la regla de llamar solo al riesgo alto.'],['Los permisos también son interfaz','Mostrar la pantalla bloqueada, con el motivo, explica los perfiles mejor que una página de configuración.'],['Datos coherentes dan credibilidad','Los 46 turnos de hoy coinciden en Hoy, en la vista semanal y en los perfiles. Eso hace que el prototipo parezca real.']]
}};

function venziView(lang, esc, backLabel, nextLabel, protoUrl){
 const Q=VENZI[lang]||VENZI.en;
 const dk=(f,alt)=>`<figure class="vz-dk"><img src="${VZ_IMG}${f}.webp" alt="${esc(alt)}" loading="lazy" width="1280" height="800"></figure>`;
 const src=ks=>ks.map(k=>`<a href="${VZ_SRC[k][1]}" target="_blank" rel="noopener">${esc(VZ_SRC[k][0])} ↗</a>`).join(' · ');
 const tbl=(cols,rows,link)=>`<div class="tblwrap"><table class="tbl"><thead><tr>${cols.map(c=>`<th>${esc(c)}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map((c,i)=>`<td${i===0?' class="k"':''}>${i===0&&link&&VZ_BENCH_URL[c]?`<a href="${VZ_BENCH_URL[c]}" target="_blank" rel="noopener">${esc(c)} ↗</a>`:esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
 return `<article class="case venzi"><div class="wrap">
 <button class="back" data-home>${esc(backLabel)}</button>
 <p class="hud" style="margin-top:12px">${esc(Q.hud)}</p>
 <h1>${esc(Q.title)}</h1><p class="sub">${esc(Q.sub)}</p>
 <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center"><a class="btn primary" href="${protoUrl}" target="_blank" rel="noopener">${esc(Q.proto)} ↗</a><span style="color:var(--ink-muted)">${esc(Q.protoNote)}</span></div>
 <div class="vz-hero"><video class="vz-video" src="${VZ_IMG}demo.mp4" poster="${VZ_IMG}demo-poster.webp" controls muted playsinline preload="none" aria-label="${esc(Q.vidT)}"></video><p class="u-muted" style="margin-top:8px">${esc(Q.vidT)} · ${esc(Q.vidP)}</p></div>
 <div class="callout"><p class="hud">✎ concept</p><p style="margin:0">${esc(Q.concept)}</p></div>
 <div class="meta">${Q.meta.map(([a,b])=>`<div><b>${esc(a)}</b><span>${esc(b)}</span></div>`).join('')}</div>
 <div class="stats">${Q.stats.map(([n,l])=>`<div class="stat"><b>${esc(n)}</b>${esc(l)}</div>`).join('')}</div>
 <p class="u-muted">${esc(Q.statSrc)}</p>
 <h2>${esc(Q.h.problem)}</h2>${Q.problem.map(p=>`<p>${esc(p)}</p>`).join('')}
 <blockquote class="hmw">${esc(Q.hmw)}</blockquote>
 <h2>${esc(Q.h.research)}</h2>
 <div class="decisions">${Q.findings.map(([t,d,s])=>`<div class="dec"><b>${esc(t)}</b><span>${esc(d)}</span><small class="vz-src">${esc(Q.srcWord)}: ${src(s)}</small></div>`).join('')}</div>
 <h2>${esc(Q.h.bench)}</h2>${tbl(Q.benchCols,Q.bench,true)}
 <p><b>${esc(Q.gap)}</b></p>
 <h2>${esc(Q.h.who)}</h2><div class="cards3">${Q.who.map(([t,d],i)=>`<div class="pcard" style="background:${['var(--mint)','var(--sky)','var(--butter)'][i]};color:${['var(--on-mint)','var(--ink)','var(--on-butter)'][i]}"><b>${esc(t)}</b><span>${esc(d)}</span></div>`).join('')}</div>
 <p class="u-muted">${esc(Q.whoNote)}</p>
 <div class="vz-pair">${dk('login','Login')}${dk('equipe','Equipe')}</div>
 <h2>${esc(Q.h.scope)}</h2>${tbl(Q.scopeCols,Q.scope)}<p>${esc(Q.scopeNote)}</p>
 <h2>${esc(Q.h.principles)}</h2><div class="decisions">${Q.principles.map(([t,d])=>`<div class="dec"><b>✦ ${esc(t)}</b><span>${esc(d)}</span></div>`).join('')}</div>
 <figure class="sketch paper narrow"><img src="img/rascunhos/venzi-faltas.webp" alt="${({pt:'Rascunho à mão do card Hoje, quem pode faltar: Ana às 14h risco alto, João às 15h médio, Bia às 16h baixo, com a nota recepção decide em 5 segundos?',en:'Hand sketch of the Today, who might miss card: Ana 2pm high risk, João 3pm medium, Bia 4pm low, with the note can the front desk decide in 5 seconds?',es:'Boceto a mano de la tarjeta Hoy, quién puede faltar: Ana 14h riesgo alto, João 15h medio, Bia 16h bajo, con la nota ¿la recepción decide en 5 segundos?'})[lang]}" loading="lazy"><figcaption class="cap">${({pt:'O primeiro rascunho do painel: a recepção precisa decidir em segundos.',en:'The dashboard\x27s first sketch: the front desk has to decide in seconds.',es:'El primer boceto del panel: la recepción tiene que decidir en segundos.'})[lang]}</figcaption></figure>
 <h2>${esc(Q.h.flow)}</h2><ol class="u-steps">${Q.flow.map(([t,d])=>`<li><b>${esc(t)}</b><span>${esc(d)}</span></li>`).join('')}</ol>
 <div class="vz-pair">${dk('lista',Q.flow[3][0])}${dk('encaixe',Q.flow[5][0])}</div>
 <h2>${esc(Q.h.decisions)}</h2>
 ${Q.dec.map(([t,d,img],i)=>`<section class="vz-dec"><h3><span class="vz-n">0${i+1}</span> ${esc(t)}</h3><p>${esc(d)}</p>${dk(img,t)}</section>`).join('')}
 <h2 id="vz-try">${esc(Q.h.try)}</h2><p>${esc(Q.tryP)} <a href="${protoUrl}" target="_blank" rel="noopener">${esc(Q.tryB)} ↗</a></p>
 <div class="vz-try"><iframe src="venzi/index.html?embed=1" title="${esc(Q.title)} · ${esc(Q.h.try)}" loading="lazy"></iframe></div>
 <h2>${esc(Q.h.ds)}</h2><p>${esc(Q.dsIntro)}</p>
 <div class="swatches">${VZ_SW.map(([c,n])=>`<div><span style="background:${c}"></span><b>${esc(n)}</b><code>${c}</code></div>`).join('')}</div>
 <div class="cards3">${Q.type.map(([f,u])=>`<div class="pcard plain"><b style="font-size:24px;line-height:1.2;font-weight:700">${esc(f)}</b><span>${esc(u)}</span></div>`).join('')}</div>
 <h3>${esc(Q.a11yT)}</h3><p>${esc(Q.a11y)}</p>
 <h2>${esc(Q.h.next)}</h2><div class="callout"><p class="hud">▶ next</p><p style="margin:0">${esc(Q.next)}</p></div>
 <h2>${esc(Q.h.metrics)}</h2>${tbl(Q.metricsCols,Q.metrics)}<p class="u-muted">${esc(Q.metricsNote)}</p>
 <h2>${esc(Q.h.learn)}</h2><div class="decisions">${Q.learn.map(([t,d])=>`<div class="dec"><b>${esc(t)}</b><span>${esc(d)}</span></div>`).join('')}</div>
 <div class="next"><button class="btn" data-home>${esc(backLabel)}</button><a class="btn primary" href="#case-squad">${esc(nextLabel)}</a></div>
 </div></article>`;
}

(function(){const css=`
.venzi .vz-src{display:block;margin-top:8px;font-size:13px;color:var(--ink-muted)}
.venzi .vz-src a{color:var(--pink-text);text-underline-offset:2px}
.venzi .vz-dk{margin:0;border-radius:14px;overflow:hidden;border:4px solid var(--ink);background:var(--ink)}
.venzi .vz-dk img{width:100%;height:auto;display:block}
.venzi .vz-hero{max-width:1040px;margin:24px 0 8px}
.venzi .vz-video{display:block;width:100%;aspect-ratio:16/9;border-radius:14px;border:4px solid var(--ink);background:#0b5a54}
.venzi .vz-pair{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;max-width:1040px;margin:20px 0 8px}
.venzi .vz-dec{margin:32px 0 8px;max-width:1040px}
.venzi .vz-dec .vz-dk{margin-top:12px}
.venzi .vz-n{font:400 14px var(--font-pixel);color:var(--pink-text);margin-right:6px}
.venzi .vz-try{margin:20px 0 8px;max-width:1040px}
.venzi .vz-try iframe{display:block;width:100%;aspect-ratio:1480/1010;border:0;border-radius:16px;background:#dfe7e5}
@media(max-width:720px){.venzi .vz-pair{grid-template-columns:1fr}.venzi .vz-try iframe{aspect-ratio:auto;height:70vh}}
`;const s=document.createElement('style');s.textContent=css;document.head.appendChild(s);})();
