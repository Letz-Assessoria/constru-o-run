
/* ================= CONFIGURAÇÃO ================= */
var CONFIG={
  // Número da assessoria Letz com DDI e DDD, só números. Ex.: 5587999999999
  WHATSAPP:'558781908719',
  WHATSAPP_EXIBIR:'+55 87 8190-8719',
  // Mensagem que chega no WhatsApp, para saber que a pessoa veio do programa
  MENSAGEM_ZAP:'Olá! Vim pelo programa Construção Run e quero saber mais sobre a assessoria Letz.',
  // Códigos de acesso (maiúsculas e minúsculas não fazem diferença)
  // Link de inscrição na corrida (botão da tela de login)
  INSCRICAO:'https://manoelferragens.com.br/corrida/?utm_source=construcao-run-app&utm_medium=app&utm_content=inscricao',
  // Configuração web do Firebase (pública). Com ela, o progresso salva no Firestore.
  FIREBASE:{
    apiKey:"AIzaSyADffTccXDOK0t25M-UAJBdWwyHvNYp6Vg",
    authDomain:"construcaorun.firebaseapp.com",
    projectId:"construcaorun",
    storageBucket:"construcaorun.firebasestorage.app",
    messagingSenderId:"1023736096174",
    appId:"1:1023736096174:web:5887ca240230402b42d43f"
  },
  // Códigos de acesso (maiúsculas e minúsculas não fazem diferença)
  CODIGOS:{
    aluno:'LETZBORA',        // qualquer corredor entra com o e-mail dele + este código
    organizador:'adm123',    // organizador da Construção Run: vê os cadastrados
    letz:'!23BORA'           // painel completo, só com os e-mails abaixo
  },
  LETZ_EMAILS:['erikfpersonal379@gmail.com'],
  ORGANIZADOR_EMAILS:['teste@gmail.com'],
  // Corredores que já aparecem na lista (os demais se cadastram ao entrar)
  EMAILS_INICIAIS:['teste1@gmail.com'],
  DATA_PROVA:'2026-12-20'
};
var IMG={correndo:'__CORRENDO__',paz:'__PAZ__',letz:'__LETZ__',medalha:'__MEDALHA__',lgTop:'__LGTOP__',lgRun:'__LGRUN__',lgVerde:'__LGVERDE__',lgChev:'__LGCHEV__'};
var LOGO='__LOGO_JS__';

/* ================= TREINOS (do doc "Programa de 40 dias para os 5 km") ================= */
var NIVEIS={
 1:{nome:'Começando do zero',quem:'Nunca corri, ou não corro 3 minutos sem parar',meta:'Completar os 5 km alternando corrida e caminhada, em cerca de 45 a 55 min',
    sobre:'A corrida sobe de 1 para 6 minutos por bloco, e a caminhada cai para 1 minuto. O treino 2 de cada semana usa escadas e pirâmides, para variar. Toda corrida é em Z2.',
    prova:'Comece com 2 min de caminhada. Depois faça 6 min de corrida e 1 min de caminhada até o fim. Se estiver bem no último km, corra direto até a chegada.',
    obs:'Se um bloco de corrida não sair inteiro, caminhe e retome no próximo. Se a semana inteira foi assim, repita a semana.'},
 2:{nome:'Já corro 1 km',quem:'Corro 1 km (6 a 10 min) sem parar, mas não 3 km',meta:'Correr os 5 km com no máximo 2 pausas curtas de caminhada',
    sobre:'Os blocos crescem até 32 min contínuos no treino 3 da semana 5. O treino 2 traz acelerações curtas e, na semana 5, um trecho final mais firme em Z3. Fora isso, toda corrida é em Z2.',
    prova:'Faça o primeiro km em Z2 bem leve. Se precisar, caminhe 1 min perto do km 2,5 e outro perto do km 4.',
    obs:'Os 32 min da semana 5 cobrem cerca de 4 km. Na prova, as pausas curtas de caminhada fecham os 5 km.'},
 3:{nome:'Já corro 3 km',quem:'Corro 3 km (20 a 25 min) sem parar',meta:'Correr os 5 km inteiros, e melhor que hoje',
    sobre:'Duas semanas de base com acelerações e um primeiro contato com Z4, depois tiros em Z5 no treino 2 e blocos de Z4 no treino 1. O treino 3, em Z2, sobe de 30 para 39 min.',
    prova:'Faça o primeiro km em Z2 alta. Do km 2 ao 4, corra em Z4. No último km, use o que sobrar.',
    obs:'Se ainda não fecha 30 min contínuos na semana 1, caminhe 1 min a cada 10 min e siga.'}
};
var SEMANAS=[
 {n:1,periodo:'11/11 a 15/11',dias:['Qua 11/11','Sex 13/11','Dom 15/11']},
 {n:2,periodo:'17/11 a 21/11',dias:['Ter 17/11','Qui 19/11','Sáb 21/11']},
 {n:3,periodo:'24/11 a 28/11',dias:['Ter 24/11','Qui 26/11','Sáb 28/11']},
 {n:4,periodo:'01/12 a 05/12',tag:'Alívio',dias:['Ter 01/12','Qui 03/12','Sáb 05/12']},
 {n:5,periodo:'08/12 a 12/12',dias:['Ter 08/12','Qui 10/12','Sáb 12/12']},
 {n:6,periodo:'15/12 a 20/12',tag:'Semana da prova',dias:['Ter 15/12','Qui 17/12','Dom 20/12']}
];
var PLANO={
 1:[["7 × (1' corrida + 1'30\" caminhada)|28","Pirâmide: 1', 2', 1', 2', 1', 2' de corrida, com 2' de caminhada entre eles|31","8 × (1'30\" corrida + 2' caminhada)|38"],
    ["6 × (2' corrida + 2' caminhada)|34","2 × (2', 3', 2' de corrida), com 1'30\" de caminhada depois de cada bloco|33","7 × (2'30\" corrida + 1'30\" caminhada)|38"],
    ["5 × (3' corrida + 1'30\" caminhada)|33","Escada: 4', 4', 3', 3', 2' de corrida, com 1'30\" de caminhada entre eles|34","6 × (3'30\" corrida + 1'30\" caminhada)|40"],
    ["4 × (3' corrida + 1'30\" caminhada)|28","3 × (5' corrida + 2' caminhada)|31","4 × (4' corrida + 1' caminhada)|30"],
    ["5 × (4' corrida + 1'30\" caminhada)|38","Escada: 6', 5', 4', 3' de corrida, com 1'30\" de caminhada entre eles|34","5 × (6' corrida + 1' caminhada)|45"],
    ["4 × (5' corrida + 1'30\" caminhada)|36","3 × (3' corrida + 1'30\" caminhada)|24","PROVA"]],
 2:[["3 × (6' corrida + 2' caminhada)|34","10' corrida + 2' caminhada + 6' corrida + 4 × (15\" aceleração + 45\" caminhada)|32","2 × (12' corrida + 2' caminhada)|38"],
    ["4 × (5' corrida + 1' caminhada)|34","15' corrida + 2' caminhada + 5' corrida + 5 × (15\" aceleração + 45\" caminhada)|37","15' corrida + 2' caminhada + 12' corrida|39"],
    ["2 × (10' corrida + 1' caminhada)|32","18' corrida + 6 × (20\" aceleração + 40\" caminhada)|34","20' corrida + 1' caminhada + 10' corrida|41"],
    ["15' corrida contínua|25","12' corrida + 4 × (20\" aceleração + 40\" caminhada)|26","22' corrida contínua|32"],
    ["2 × (12' corrida + 1' caminhada)|36","20' corrida, os últimos 5' em Z3 + 4 × (20\" aceleração + 40\" caminhada)|34","32' corrida contínua|42"],
    ["18' corrida + 4 × (20\" aceleração + 40\" caminhada)|32","10' corrida bem leve|20","PROVA"]],
 3:[["22' Z2 + 4 × (20\" aceleração + 40\" trote Z1)|26","6 × (30\" aceleração + 1' trote Z1)|34","30' Z2|30"],
    ["25' Z2, os últimos 5' em Z3|25","2 × (4' Z4 + 1'30\" Z1)|36","33' Z2|33"],
    ["15' Z2 + 4 × (1' Z4 + 1' Z1) + 5' Z2|28","4 × (1'30\" Z5 + 1'30\" Z1)|37","36' Z2|36"],
    ["20' Z2 + 4 × (20\" aceleração + 40\" trote Z1)|24","3 × (1' Z5 + 1'30\" Z1)|33","26' Z2|26"],
    ["15' Z2 + 6' Z4 contínuos + 5' Z2|26","2', 3' e 2' em Z5, com 2' Z1 depois de cada um|38","39' Z2|39"],
    ["15' Z2 + 4 × (45\" Z4 + 1' Z1) + 5' Z2|27","18' Z2 leve|18","PROVA"]]
};
var ZONAS=[
 ['Caminhada','caminhada','Caminhada firme, braços soltos'],
 ['Z1','Z1','Trote bem leve, só para recuperar entre os tiros'],
 ['Z2','Z2','Conversa sem esforço, fala frases inteiras. É a corrida de quase todos os treinos'],
 ['Z3','Z3','Fala frases curtas'],
 ['Z4','Z4','Confortavelmente forte; fala só poucas palavras'],
 ['Z5','Z5','Forte; aguentaria uns 10 a 12 min nesse ritmo; quase não fala'],
 ['Aceleração','aceleração','Rápido e solto, sem sprint']
];
var AJUSTES=[
 ['Faltou 2 dos 3 treinos da semana','Repita a semana. Como a prova tem data fixa, a semana repetida ocupa o lugar da semana 4 (alívio). Não junte dois treinos no mesmo dia.'],
 ['Dor em 2 treinos seguidos','Volte para a semana anterior e fale com o professor.'],
 ['Nível fácil demais','Quem fez as duas primeiras semanas sem esforço pode passar para a mesma semana do nível de cima.'],
 ['Nível difícil demais','Quem não completa os blocos por duas sessões seguidas desce para a mesma semana do nível de baixo.']
];
var NOMES_DIA={Seg:'segunda',Ter:'terça',Qua:'quarta',Qui:'quinta',Sex:'sexta','Sáb':'sábado',Dom:'domingo'};
var TODOS=[];
SEMANAS.forEach(function(s){s.dias.forEach(function(d,i){if(!d)return;var t={id:s.n+'-'+(i+1),sem:s.n,dia:i,d:d,prova:s.n===6&&i===2};t.num=TODOS.length+1;t.titulo=t.prova?'Dia da prova':'Treino de '+NOMES_DIA[d.split(' ')[0]];TODOS.push(t);});});
function treinoDe(t,nv){var raw=PLANO[nv][t.sem-1][t.dia];if(raw==='PROVA')return {prova:true};var p=raw.split('|');return {main:p[0],total:+p[1]};}

/* ================= ARMAZENAMENTO ================= */
/* ===== CAMADA DE DADOS =====
   O app lê e escreve só pelas funções abaixo. Elas guardam tudo no navegador
   (localStorage) para abrir rápido e funcionar sem internet, e — quando o
   Firebase está disponível (ver bloco FIREBASE mais abaixo) — também salvam no
   Firestore, onde cada corredor é um documento na coleção "corredores", com o
   e-mail como id. Assim o progresso segue a pessoa em qualquer aparelho e o
   painel Letz vê todos os corredores. */
function ler(k,def){try{var v=localStorage.getItem(k);return v?JSON.parse(v):def;}catch(e){return def;}}
function gravar(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}}
var MEM={};
function getEmails(){return MEM.emails||(MEM.emails=ler('crun_emails',CONFIG.EMAILS_INICIAIS.slice()));}
function setEmails(l){
  var antes=getEmails().slice();MEM.emails=l;gravar('crun_emails',l);
  // Firestore: cria documento para e-mail novo, apaga o do e-mail removido
  l.forEach(function(e){if(antes.indexOf(e)<0){if(!users()[e])users()[e]={email:e};fbSalvarUser(e);}});
  antes.forEach(function(e){if(l.indexOf(e)<0){delete users()[e];fbRemoverUser(e);}});
  gravar('crun_users',users());
}

/* ================= ESTADO ================= */
/* Dados de cada corredor: perfil, nível, treinos feitos e cliques no WhatsApp */
function users(){return MEM.u||(MEM.u=ler('crun_users',{}));}
function salvarUsers(){gravar('crun_users',users());fbSalvarUser(V.email);}
function me(){var u=users();var m=u[V.email]||(u[V.email]={email:V.email});if(!m.feitos)m.feitos={};if(typeof m.zap!=='number')m.zap=0;return m;}
function ADM(e){e=norm(e);return CONFIG.LETZ_EMAILS.indexOf(e)>-1?{papel:'letz'}:CONFIG.ORGANIZADOR_EMAILS.indexOf(e)>-1?{papel:'organizador'}:null;}

var V={tela:'login',email:'',cod:'',admin:false,papel:'',erro:'',treino:null,msgPainel:'',busca:'',rmPend:null,rascunho:'',aba:'geral',filtro:'todos',buscaC:'',pf:{},pfErro:''};
var sess=ler('crun_sessao',null);
if(sess&&sess.email){V.email=sess.email;V.admin=!!sess.admin;V.papel=sess.papel||'';V.tela=telaInicial();}
function telaInicial(){if(V.admin)return 'painel';var m=me();return !m.nome?'perfil':!m.nivel?'nivel':'treinos';}
function feitos(){return me().feitos;}
function setFeito(id,v){var m=me();if(v)m.feitos[id]=Date.now();else delete m.feitos[id];m.visto=Date.now();salvarUsers();}

function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function norm(e){return String(e||'').trim().toLowerCase();}
function valido(e){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);}
function diasProva(){var h=new Date();h.setHours(0,0,0,0);var p=new Date(CONFIG.DATA_PROVA+'T00:00:00');return Math.round((p-h)/864e5);}
function nn(n){return String(n).padStart(2,'0');}
var ZAP_SVG='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3.9 2.5 1.1 2.7.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.4-.3Z"/></svg>';

/* ================= TELAS ================= */
function calendario(){
  var d=diasProva(),n,l,top='Faltam';
  if(d>0){n=d;l=d===1?'dia':'dias';}else if(d===0){top='É hoje';n='20';l='dez · prova';}else{top='Fomos';n='✓';l='prova feita';}
  return '<section class="agenda" aria-label="'+(d>0?'Faltam '+d+' '+l+' para a corrida':'Dia da prova')+'"><div class="cal"><div class="cal-topo">'+top.toUpperCase()+'</div><span class="cal-n">'+n+'</span><span class="cal-d">'+l+'</span></div>'+
    '<div class="agenda-t"><span class="eyebrow neon">Domingo · 20 de dezembro</span><b>'+(d>0?'Contagem para a largada':d===0?'Hoje é dia de prova':'A prova já foi')+'</b><p>5 km em São João · PE. Três treinos por semana até lá.</p></div></section>';
}
function vLogin(){
  return '<div class="login entra">'+
   '<section class="hero"><div class="palco">'+LOGO+'<img class="paz" src="'+IMG.paz+'" alt="Letzbora, o mascote"></div>'+
    '<div class="ficha"><span>20.12.2026</span><span>5 KM</span><span>SÃO JOÃO · PE</span></div></section>'+calendario()+
   '<form class="form" id="f-login" novalidate>'+
    '<span class="eyebrow neon">Área do corredor</span>'+
    '<h1>Seus treinos até a largada</h1>'+
    '<p class="muted">Cadastre-se com o seu e-mail e o código <b class="neon">LETZBORA</b>. Da próxima vez, entre com o mesmo e-mail para continuar de onde parou.</p>'+
    '<div class="field"><label for="in-email">E-mail</label><input id="in-email" type="email" autocomplete="email" inputmode="email" placeholder="seuemail@gmail.com" value="'+esc(V.email)+'"></div>'+
    '<div class="field"><label for="in-cod">Código de acesso</label><input id="in-cod" type="text" autocomplete="off" autocapitalize="none" autocorrect="off" spellcheck="false" placeholder="Ex.: LETZBORA" value="'+esc(V.cod||'')+'"></div>'+
    (V.erro?'<p class="erro" role="alert">'+V.erro+'</p>':'')+
    '<button class="btn go full" type="button" data-act="entrar">Entrar</button>'+
   '</form>'+
   '<a class="inscricao" href="'+CONFIG.INSCRICAO+'" target="_blank" rel="noopener"><span class="insc-t"><span class="eyebrow neon">Ainda não se inscreveu?</span><b>Garanta sua vaga na Construção Run</b></span><span class="insc-b">Inscrever-se<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg></span></a>'+
   cardInstalar()+
   '<div class="assina"><span class="eyebrow">Treinos por</span><img src="'+IMG.letz+'" alt="Letz Assessoria"></div></div>';
}

function topo(){
  return '<header class="top"><div class="marcas">'+LOGO+'<span class="div"></span><img class="letz-s" src="'+IMG.letz+'" alt="Letz"></div><div class="acoes">'+
    (V.admin?'<button class="btn line sm" data-act="'+(V.tela==='painel'?'ver-atleta':'ver-painel')+'">'+(V.tela==='painel'?'Treinos':'Painel')+'</button>':'')+
    '<button class="btn line sm" data-act="sair">Sair</button></div></header>';
}

function nivel(){return me().nivel||null;}
function setNivel(n){me().nivel=n;salvarUsers();}
function paraTreinos(){if(!V.admin&&!me().nome)return ir('perfil');ir(nivel()?'treinos':'nivel');}

function vPerfil(){
  var p=V.pf;
  return topo()+'<section class="esc-cab entra"><img src="'+IMG.paz+'" alt=""><div><span class="eyebrow neon">Antes de começar</span><h1>Conta um pouco sobre você</h1></div></section>'+
   '<p class="muted">São 4 perguntas rápidas. Depois você escolhe seu nível e já vê os treinos.</p>'+
   '<div class="cartao">'+
    '<div class="field"><label for="pf-nome">Nome completo</label><input id="pf-nome" autocomplete="name" value="'+esc(p.nome||'')+'" placeholder="Seu nome"></div>'+
    '<div class="field"><label for="pf-tel">WhatsApp</label><input id="pf-tel" type="tel" inputmode="tel" autocomplete="tel" value="'+esc(p.tel||'')+'" placeholder="(87) 99999-9999"></div>'+
    '<div class="field"><label for="pf-cidade">Onde você mora</label><input id="pf-cidade" autocomplete="address-level2" value="'+esc(p.cidade||'')+'" placeholder="Cidade e bairro"></div>'+
    '<div class="field"><span class="lbl">Você já faz parte de alguma assessoria de corrida?</span><div class="opcoes">'+
      '<button type="button" class="opc'+(p.asso==='nao'?' sel':'')+'" data-act="asso" data-v="nao">Não</button>'+
      '<button type="button" class="opc'+(p.asso==='sim'?' sel':'')+'" data-act="asso" data-v="sim">Sim</button></div></div>'+
    (p.asso==='sim'?'<div class="field"><label for="pf-qual">Qual assessoria?</label><input id="pf-qual" value="'+esc(p.qual||'')+'" placeholder="Nome da assessoria"></div>':'')+
    (V.pfErro?'<p class="erro" role="alert">'+V.pfErro+'</p>':'')+
    '<button class="btn go full" type="button" data-act="perfil-ok">Continuar</button></div>';
}
function salvarPerfil(){
  var p=V.pf,dig=String(p.tel||'').replace(/\D/g,'');
  if(!p.nome||p.nome.trim().length<3)V.pfErro='Digite seu nome.';
  else if(dig.length<10||dig.length>13)V.pfErro='Digite seu WhatsApp com DDD, como (87) 99999-9999.';
  else if(!p.cidade||!p.cidade.trim())V.pfErro='Conte onde você mora.';
  else if(!p.asso)V.pfErro='Responda se você já faz parte de uma assessoria.';
  else V.pfErro='';
  if(V.pfErro)return render();
  var m=me();m.nome=p.nome.trim();m.tel=dig;m.cidade=p.cidade.trim();m.asso=p.asso;m.qual=p.asso==='sim'?String(p.qual||'').trim():'';m.cadastro=m.cadastro||Date.now();m.visto=Date.now();salvarUsers();
  ir(nivel()?'treinos':'nivel');
}

function vNivel(){
  var atual=nivel();
  return topo()+(atual?'<button class="ghost" data-act="lista">← Voltar aos treinos</button>':'')+
   '<section class="esc-cab entra"><img src="'+IMG.paz+'" alt=""><div><span class="eyebrow neon">'+(atual?'Trocar de nível':'Antes de começar')+'</span><h1>Qual é o seu ponto de partida?</h1></div></section>'+
   '<p class="muted">Escolha pelo que você consegue fazer hoje, sem parar. Seus treinos vão aparecer de acordo com o nível. Dá para trocar depois.</p>'+
   '<div class="niveis">'+[1,2,3].map(function(n){var N=NIVEIS[n];
     return '<button class="nivel-c'+(atual===n?' sel':'')+'" data-act="nivel" data-n="'+n+'"><span class="nv-num">'+n+'</span><span class="nv-t"><span class="eyebrow">Nível '+n+(atual===n?' · atual':'')+'</span><b>'+N.nome+'</b><span class="nv-quem">'+N.quem+'</span><span class="nv-meta"><span>Meta no dia 20/12</span>'+N.meta+'</span></span></button>';}).join('')+'</div>';
}

function nivelBar(){var n=nivel(),N=NIVEIS[n];
  return '<div class="nivel-bar"><span class="nv-num sm">'+n+'</span><span class="nb-t"><span class="eyebrow">Seu nível</span><b>'+N.nome+'</b></span><button class="btn line sm" data-act="trocar">Trocar</button></div>';}

function vTreinos(){
  var d=diasProva(),f=feitos(),tot=TODOS.length,ok=TODOS.filter(function(t){return f[t.id];}).length,nv=nivel();
  var visor=d>0?'<div class="lcd" data-fantasma="'+String(d).replace(/\d/g,'8')+'">'+d+'</div><small>'+(d===1?'dia para a largada':'dias para a largada')+'</small>':
    d===0?'<div class="lcd txt" data-fantasma="8888">HOJE</div><small>é dia de prova</small>':'<div class="lcd txt" data-fantasma="8888">FUI!</div><small>obrigado por correr com a gente</small>';
  var h=topo()+'<section class="largada entra"><div class="linha1"><div class="visor"><span class="eyebrow">Faltam</span>'+visor+'</div><div class="dataprova"><span>Prova</span><b>20.12</b><em>5 km · São João</em></div></div>'+
   '<div class="percurso"><div class="percurso-top"><span>Seu percurso</span><span>'+ok+' de '+tot+' treinos</span></div><div class="trena" style="grid-template-columns:repeat('+tot+',1fr)" aria-hidden="true">'+
   TODOS.map(function(t){return '<i class="'+(t.prova?'meta':'')+(f[t.id]?' on':'')+'"></i>';}).join('')+'</div><div class="trena-n"><span>0 km</span><span>5 km</span></div></div></section>'+
   nivelBar()+
   '<details class="guia"><summary>Como reconhecer o esforço</summary><div class="zonas">'+ZONAS.map(function(z){return '<div class="zona"><span class="z-tag z-'+z[1].replace('ç','c').replace('ã','a')+'">'+z[0]+'</span><span>'+z[2]+'</span></div>';}).join('')+'</div></details>'+
   '<details class="guia"><summary>Se algo sair do plano</summary><div class="ajustes"><p>'+NIVEIS[nv].obs+'</p>'+AJUSTES.map(function(a){return '<p><b>'+a[0]+':</b> '+a[1]+'</p>';}).join('')+'</div></details>';
  SEMANAS.forEach(function(s){
    var ts=TODOS.filter(function(t){return t.sem===s.n;}),sok=ts.filter(function(t){return f[t.id];}).length;
    h+='<section class="semana"><div class="sem-cab"><h2><span class="n">'+nn(s.n)+'</span>Semana</h2><span class="eyebrow">'+(s.tag?'<span class="tag">'+s.tag+'</span><br>':'')+s.periodo+' · '+sok+'/'+ts.length+'</span></div><div class="treinos">';
    ts.forEach(function(t){var w=treinoDe(t,nv);
      h+='<button class="treino'+(t.prova?' prova':'')+'" data-act="abrir" data-id="'+t.id+'">'+
        '<span class="peito">'+nn(t.num)+'</span>'+
        '<span class="t"><b>'+(t.prova?'Dia da prova · 5 km':esc(resumo(w.main)))+'</b><span>'+t.d+(w.total?' · '+w.total+' min':'')+'</span></span>'+
        (f[t.id]?'<span class="pill feito">Feito ✓</span>':'<span class="pill">'+(t.prova?'Prova':'Abrir')+'</span>')+'</button>';
    });
    h+='</div></section>';
  });
  h+='<button class="rumo" data-act="final"><span class="txt"><span class="eyebrow neon">Linha de chegada</span><h3>Uma mensagem para o dia da prova</h3></span><img src="'+IMG.medalha+'" alt=""></button>';
  return h;
}
/* resumo curto para a lista */
function resumo(m){return m.replace(/ \+ /g,' + ');}
/* divide "a + n × (b + c) + d" nas partes de fora dos parênteses */
function partes(m){var out=[],dep=0,cur='';for(var i=0;i<m.length;i++){var c=m[i];if(c==='(')dep++;if(c===')')dep--;if(dep===0&&m.substr(i,3)===' + '){out.push(cur);cur='';i+=2;continue;}cur+=c;}out.push(cur);return out;}
function linhaBloco(p){
  var r=p.match(/^(\d+) × \((.*)\)$/);
  if(r)return '<div class="bloco rep"><span class="vezes">'+r[1]+'×</span><span>'+r[2].split(' + ').map(function(x){return '<span class="seg">'+fmt(x)+'</span>';}).join('<span class="mais">+</span>')+'</span></div>';
  return '<div class="bloco"><span class="seg">'+fmt(p)+'</span></div>';
}
function fmt(x){return esc(x).replace(/\b(Z[12345])\b/g,'<span class="z-tag z-$1">$1</span>');}
function zonasUsadas(m){return ZONAS.filter(function(z){return m.indexOf(z[1])>-1||(z[1]==='Z2'&&/corrida/.test(m));});}

function vTreino(){
  var t=TODOS.filter(function(x){return x.id===V.treino;})[0];if(!t)return vTreinos();
  var nv=nivel(),N=NIVEIS[nv],w=treinoDe(t,nv),i=TODOS.indexOf(t),f=feitos(),prox=TODOS[i+1],corpo;
  if(w.prova){
    corpo='<div class="conteudo"><span class="eyebrow neon">Estratégia · Nível '+nv+'</span><p>'+N.prova+'</p></div>'+
     '<div class="conteudo"><span class="eyebrow">Para todos</span><p>Largue mais devagar do que gostaria. O erro mais comum é gastar tudo no primeiro km.</p><p>Nada novo no dia: tênis, roupa e comida que você já usou nos treinos. Refeição leve 2 horas antes e água no posto, mesmo sem sede.</p><p>Anote seu tempo final: ele vira o ponto de partida do próximo ciclo.</p></div>';
  }else{
    var aq,vc,l3q=nv===3&&t.dia===1;
    if(nv<3){aq="5' caminhada";vc="5' caminhada";}else if(l3q){aq="15' corrida em Z2";vc="10' corrida em Z2";}
    corpo='<div class="plano">'+(aq?'<div class="fase"><span class="eyebrow">Aquecimento</span><div class="bloco"><span class="seg">'+fmt(aq)+'</span></div></div>':'')+
      '<div class="fase principal"><span class="eyebrow neon">'+(aq?'Parte principal':'Treino')+'</span>'+partes(w.main).map(linhaBloco).join('')+'</div>'+
      (vc?'<div class="fase"><span class="eyebrow">Volta à calma</span><div class="bloco"><span class="seg">'+fmt(vc)+'</span></div></div>':'')+
      '<div class="total"><span>Tempo total</span><b>'+w.total+' min</b></div></div>'+
      '<div class="zonas mini">'+zonasUsadas(w.main+(aq||'')).map(function(z){return '<div class="zona"><span class="z-tag z-'+z[1].replace('ç','c').replace('ã','a')+'">'+z[0]+'</span><span>'+z[2]+'</span></div>';}).join('')+'</div>'+
      '<p class="dica">'+(nv<3?'A corrida é em Z2, num ritmo em que dá para conversar, a não ser quando o treino pede outra zona. ':'')+(nv===1?'Se um bloco não sair inteiro, caminhe e retome no próximo.':nv===2?'Se precisar, diminua o ritmo antes de parar.':'Nos tiros, segure o ritmo do primeiro ao último.')+'</p>';
  }
  return topo()+'<button class="ghost" data-act="lista">← Todos os treinos</button>'+
   '<div class="det entra"><span class="peito">'+nn(t.num)+'</span><div><span class="eyebrow">Semana '+nn(t.sem)+' · '+t.d+'</span><h1>'+esc(t.titulo)+'</h1></div></div>'+corpo+
   '<div class="navs"><button class="btn '+(f[t.id]?'line':'zap')+' full" data-act="feito" data-id="'+t.id+'">'+(f[t.id]?'Desmarcar treino':'Marcar como feito')+'</button>'+
   (prox?'<button class="btn line full" data-act="abrir" data-id="'+prox.id+'">Próximo · '+prox.d+'</button>':'<button class="btn go full" data-act="final">Ir para a chegada</button>')+'</div>';
}

function vFinal(){
  var temZap=/^\d{10,15}$/.test(CONFIG.WHATSAPP);
  return topo()+'<button class="ghost" data-act="lista">← Todos os treinos</button>'+
   '<section class="chegada entra"><div class="premio"><img class="paz" src="'+IMG.paz+'" alt="Letzbora comemorando"><img class="med" src="'+IMG.medalha+'" alt="Medalha martelo da Construção Run"></div>'+
     '<span class="eyebrow">Domingo · 20 de dezembro · São João</span>'+
     '<h1>Boa<span>prova!</span></h1>'+
     '<p>Você chegou até aqui treino a treino. Quem nunca tinha corrido 5 km agora tem semanas de preparo nas pernas.</p>'+
     '<p>Largue tranquilo, respire e curta cada quilômetro. Se precisar caminhar, caminhe e volte a correr. O que importa é cruzar a linha de chegada.</p><span class="eufui">EU FUI. · CONSTRUÇÃO RUN · 15 ANOS MANOEL FERRAGENS</span>'+
   '</section>'+
   '<section class="convite"><img class="letz-c" src="'+IMG.letz+'" alt="Letz Assessoria">'+
     '<h2>A linha de chegada é só o <span class="neon">começo</span></h2>'+
     '<p>Na assessoria Letz você tem treino montado para você, acompanhamento de perto e uma turma para correr junto até a próxima prova.</p>'+
     (temZap?'<a class="btn zap full" data-act="zap" href="https://wa.me/'+CONFIG.WHATSAPP+'?text='+encodeURIComponent(CONFIG.MENSAGEM_ZAP)+'" target="_blank" rel="noopener">'+ZAP_SVG+'Quero fazer parte</a><p class="muted" style="font-size:14px;text-align:center">Ou chame no WhatsApp: <span class="numero">'+CONFIG.WHATSAPP_EXIBIR+'</span></p>':
      '<button class="btn zap full" disabled>'+ZAP_SVG+'Quero fazer parte</button><p class="aviso">Número do WhatsApp ainda não configurado.</p>')+
   '</section>';
}

function vPainel(){
  if(V.papel==='letz')return vPainelLetz();
  return vAcesso(true);
}
function vAcesso(comTopo){
  var l=getEmails(),q=norm(V.busca),vis=l.filter(function(e){return !q||e.indexOf(q)>-1;});
  var h=(comTopo?topo():'')+'<div class="cab-painel entra"><span class="eyebrow neon">Painel da corrida</span><h1>Corredores cadastrados</h1><p class="muted" style="margin-top:8px">Qualquer corredor entra com o e-mail dele e o código LETZBORA. A lista abaixo mostra quem já se cadastrou neste aparelho.</p></div>'+
   '<div class="stats"><div class="stat"><b>'+l.length+'</b><span class="muted">cadastrados</span></div><div class="stat"><b>'+Math.max(diasProva(),0)+'</b><span class="muted">dias para a prova</span></div></div>'+
   '<form class="cartao" id="f-add" novalidate><div class="field"><label for="in-add">Pré-cadastrar e-mails</label>'+
     '<textarea id="in-add" placeholder="Um por linha. Pode colar vários de uma vez.">'+esc(V.rascunho)+'</textarea></div>'+
     (V.msgPainel?'<p class="'+(V.msgPainel.indexOf('Nenhum')===0?'erro':'ok')+'" role="status">'+esc(V.msgPainel)+'</p>':'')+
     '<button class="btn go full" type="button" data-act="liberar">Adicionar à lista</button></form>';
  if(l.length){
    h+='<div class="field"><label for="in-busca">Buscar na lista</label><input id="in-busca" type="search" value="'+esc(V.busca)+'" placeholder="Digite parte do e-mail"></div><div class="lista">'+
     (vis.length?vis.map(function(e){return '<div class="item"><span>'+esc(e)+'</span><button class="rm'+(V.rmPend===e?' confirma':'')+'" data-act="rm" data-e="'+esc(e)+'">'+(V.rmPend===e?'Confirmar':'Remover')+'</button></div>';}).join(''):'<div class="item"><span class="muted">Nenhum e-mail encontrado.</span></div>')+'</div>';
  }else h+='<p class="aviso">Ninguém cadastrado ainda. Os corredores entram sozinhos com o e-mail e o código LETZBORA.</p>';
  return h;
}

/* ================= PAINEL LETZ (visão completa) ================= */
function dt(ms){if(!ms)return '';var d=new Date(ms);return nn(d.getDate())+'/'+nn(d.getMonth()+1)+' '+nn(d.getHours())+':'+nn(d.getMinutes());}
function telFmt(t){t=String(t||'');var d=t.length>11?t.slice(-11):t;if(d.length===11)return '('+d.slice(0,2)+') '+d.slice(2,7)+'-'+d.slice(7);if(d.length===10)return '('+d.slice(0,2)+') '+d.slice(2,6)+'-'+d.slice(6);return t;}
function telZap(t){t=String(t||'');return t.length<=11?'55'+t:t;}
function ultimoTreino(r){var idx=-1;TODOS.forEach(function(t,i){if(r.feitos&&r.feitos[t.id])idx=i;});return idx>=0?TODOS[idx]:null;}
function nFeitos(r){return TODOS.filter(function(t){return r.feitos&&r.feitos[t.id];}).length;}
function corredores(){var us=users();return getEmails().filter(function(e){return !ADM(e);}).map(function(e){return us[e]||{email:e,feitos:{},zap:0};});}
function barra(lbl,v,max,cls){return '<div class="barra-h"><span class="bh-l">'+lbl+'</span><span class="bh-t"><i class="'+(cls||'')+'" style="width:'+(max?Math.round(v/max*100):0)+'%"></i></span><b>'+v+'</b></div>';}

function vPainelLetz(){
  var abas=[['geral','Resumo'],['corredores','Corredores'],['acesso','Cadastro']];
  var h=topo()+'<div class="cab-painel entra"><span class="eyebrow neon">Painel Letz · Construção Run</span><h1>'+(V.aba==='geral'?'Como está a turma':V.aba==='corredores'?'Corredores':'Cadastro')+'</h1></div>'+
   '<div class="abas" role="tablist">'+abas.map(function(a){return '<button role="tab" aria-selected="'+(V.aba===a[0])+'" class="'+(V.aba===a[0]?'on':'')+'" data-act="aba" data-v="'+a[0]+'">'+a[1]+'</button>';}).join('')+'</div>';
  if(V.aba==='acesso')return h+vAcesso(false);
  if(V.aba==='corredores')return h+vCorredores();
  return h+vGeral();
}

function vGeral(){
  var rs=corredores(),lib=rs.length,cad=rs.filter(function(r){return r.nome;}),niv=rs.filter(function(r){return r.nivel;}),
      trein=rs.filter(function(r){return nFeitos(r)>0;}),cliq=rs.filter(function(r){return r.zap>0;}),
      sem=cad.filter(function(r){return r.asso==='nao';}),com=cad.filter(function(r){return r.asso==='sim';});
  var h='<div class="stats s4">'+
    '<div class="stat"><b>'+lib+'</b><span class="muted">cadastrados</span></div>'+
    '<div class="stat"><b>'+cad.length+'</b><span class="muted">fizeram o cadastro</span></div>'+
    '<div class="stat destaque"><b>'+cliq.length+'</b><span class="muted">clicaram em Quero fazer parte</span></div>'+
    '<div class="stat"><b>'+sem.length+'</b><span class="muted">sem assessoria hoje</span></div></div>';
  // funil
  h+='<section class="bloco-p"><h3>Funil</h3><div class="barras">'+
    barra('Liberados',lib,lib)+barra('Cadastro feito',cad.length,lib)+barra('Escolheram nível',niv.length,lib)+barra('Fizeram 1 treino ou mais',trein.length,lib)+barra('Clicaram no WhatsApp',cliq.length,lib,'neonb')+'</div></section>';
  // até onde chegaram
  var buck=[0,0,0,0,0,0,0];cad.forEach(function(r){var u=ultimoTreino(r);buck[u?u.sem:0]++;});var mx=Math.max.apply(null,buck.concat(1));
  h+='<section class="bloco-p"><h3>Até onde chegaram</h3><p class="muted sm">Semana do último treino marcado como feito, entre quem fez o cadastro.</p><div class="barras">'+
    barra('Nenhum treino',buck[0],mx,'cinza')+[1,2,3,4,5,6].map(function(n){return barra('Semana '+n+(n===4?' · alívio':n===6?' · prova':''),buck[n],mx);}).join('')+'</div></section>';
  // níveis
  var nv=[0,0,0,0];niv.forEach(function(r){nv[r.nivel]++;});var mn=Math.max(nv[1],nv[2],nv[3],1);
  h+='<section class="bloco-p"><h3>Nível escolhido</h3><div class="barras">'+barra('1 · Do zero',nv[1],mn)+barra('2 · Já corre 1 km',nv[2],mn,'azulb')+barra('3 · Já corre 3 km',nv[3],mn,'neonb')+'</div>'+
    '<p class="muted sm">Assessoria hoje: '+sem.length+' sem, '+com.length+' com'+(com.length?' ('+com.map(function(r){return esc(r.qual||'não disse qual');}).join(', ')+')':'')+'.</p></section>';
  // cliques
  var cl=cliq.slice().sort(function(a,b){return (b.zapEm||0)-(a.zapEm||0);});
  h+='<section class="bloco-p"><h3>Clicaram em “Quero fazer parte”</h3>'+
    (cl.length?'<div class="pessoas">'+cl.map(cartaoPessoa).join('')+'</div>':'<p class="aviso">Ninguém clicou ainda. O botão fica na página final, a da mensagem de boa prova.</p>')+'</section>';
  return h;
}

function cartaoPessoa(r){
  var u=ultimoTreino(r),nf=nFeitos(r);
  if(!r.nome)return '<div class="pessoa off"><div class="p-top"><b>'+esc(r.email)+'</b><span class="pill">Ainda não entrou</span></div>'+(r.entrou?'<p class="muted sm">Entrou em '+dt(r.entrou)+', mas não terminou o cadastro.</p>':'')+'</div>';
  return '<div class="pessoa"><div class="p-top"><b>'+esc(r.nome)+'</b>'+(r.zap?'<span class="pill feito">Clicou'+(r.zap>1?' '+r.zap+'×':'')+'</span>':'')+'</div>'+
   '<div class="kv">'+
    '<span>E-mail</span><span>'+esc(r.email)+'</span>'+
    '<span>WhatsApp</span><span><a href="https://wa.me/'+telZap(r.tel)+'" target="_blank" rel="noopener">'+telFmt(r.tel)+'</a></span>'+
    '<span>Mora em</span><span>'+esc(r.cidade||'')+'</span>'+
    '<span>Assessoria</span><span>'+(r.asso==='sim'?'Sim'+(r.qual?', '+esc(r.qual):''):'Não')+'</span>'+
    '<span>Nível</span><span>'+(r.nivel?r.nivel+' · '+NIVEIS[r.nivel].nome:'Não escolheu')+'</span>'+
    '<span>Parou em</span><span>'+(u?'Semana '+u.sem+' · '+u.d:'Nenhum treino feito')+'</span>'+
    (r.zapEm?'<span>Clicou em</span><span>'+dt(r.zapEm)+'</span>':'')+
    (r.visto?'<span>Último acesso</span><span>'+dt(r.visto)+'</span>':'')+
   '</div><div class="mini-prog"><span style="width:'+Math.round(nf/TODOS.length*100)+'%"></span></div><span class="muted sm">'+nf+' de '+TODOS.length+' treinos feitos</span></div>';
}

function vCorredores(){
  var rs=corredores(),q=norm(V.buscaC);
  var fs=[['todos','Todos'],['clicaram','Clicaram'],['semasso','Sem assessoria'],['parados','Sem treino'],['naoentrou','Não entraram']];
  var f={todos:function(){return true;},clicaram:function(r){return r.zap>0;},semasso:function(r){return r.asso==='nao';},parados:function(r){return r.nome&&nFeitos(r)===0;},naoentrou:function(r){return !r.nome;}}[V.filtro]||function(){return true;};
  var vis=rs.filter(f).filter(function(r){return !q||(r.email+' '+(r.nome||'')+' '+(r.cidade||'')).toLowerCase().indexOf(q)>-1;})
    .sort(function(a,b){return (b.nome?1:0)-(a.nome?1:0)||nFeitos(b)-nFeitos(a);});
  return '<div class="filtros">'+fs.map(function(x){var n=rs.filter({todos:function(){return true;},clicaram:function(r){return r.zap>0;},semasso:function(r){return r.asso==='nao';},parados:function(r){return r.nome&&nFeitos(r)===0;},naoentrou:function(r){return !r.nome;}}[x[0]]).length;
      return '<button class="'+(V.filtro===x[0]?'on':'')+'" data-act="filtro" data-v="'+x[0]+'">'+x[1]+' <span>'+n+'</span></button>';}).join('')+'</div>'+
    '<div class="field"><label for="in-buscac">Buscar</label><input id="in-buscac" type="search" value="'+esc(V.buscaC)+'" placeholder="Nome, e-mail ou cidade"></div>'+
    (vis.length?'<div class="pessoas">'+vis.map(cartaoPessoa).join('')+'</div>':'<p class="aviso">'+(rs.length?'Ninguém neste filtro.':'Ninguém cadastrado ainda.')+'</p>');
}

/* ================= PWA ================= */
var PWA={evento:null,instalado:false};
function standalone(){try{return window.matchMedia('(display-mode: standalone)').matches||navigator.standalone===true;}catch(e){return false;}}
function emFrame(){try{return window.self!==window.top;}catch(e){return true;}}
function ios(){return /iphone|ipad|ipod/i.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);}
function cardInstalar(){
  if(standalone()||emFrame()||PWA.instalado)return '';
  if(PWA.evento)return '<div class="instalar"><img src="'+IMG.paz+'" alt=""><div><b>Instale o app no celular</b><p class="muted sm">Abre direto na tela inicial, sem precisar procurar o link.</p></div><button class="btn zap sm" data-act="instalar">Instalar</button></div>';
  if(ios())return '<div class="instalar"><img src="'+IMG.paz+'" alt=""><div><b>Instale o app no iPhone</b><p class="muted sm">Toque em Compartilhar <span class="ico-share" aria-hidden="true">⬆︎</span> no Safari e depois em <b>Adicionar à Tela de Início</b>.</p></div></div>';
  return '';
}
window.addEventListener('beforeinstallprompt',function(e){e.preventDefault();PWA.evento=e;if(V.tela==='login')render();});
window.addEventListener('appinstalled',function(){PWA.instalado=true;PWA.evento=null;if(V.tela==='login')render();});

/* ================= FIREBASE (Firestore + login anônimo) ================= */
/* Liga só quando o SDK do Firebase carregou (no deploy real). Na prévia do
   artifact o SDK é bloqueado e o app segue 100% no localStorage. */
var FB={on:false,db:null,pronto:false};
function fbInit(){
  try{
    if(typeof firebase==='undefined'||!firebase.initializeApp||!CONFIG.FIREBASE||!CONFIG.FIREBASE.apiKey)return;
    firebase.initializeApp(CONFIG.FIREBASE);
    FB.db=firebase.firestore();FB.on=true;
    firebase.auth().onAuthStateChanged(function(u){if(u&&!FB.pronto){FB.pronto=true;fbCarregar();}});
    firebase.auth().signInAnonymously().catch(function(e){console.warn('Login anônimo falhou:',e&&e.code);});
  }catch(e){console.warn('Firebase não iniciou:',e);FB.on=false;}
}
function fbCarregar(){ // puxa todos os corredores do Firestore para a memória
  if(!FB.on)return;
  FB.db.collection('corredores').get().then(function(snap){
    var us=users();snap.forEach(function(doc){us[doc.id]=Object.assign(us[doc.id]||{},doc.data());});
    MEM.emails=Object.keys(us).sort();gravar('crun_users',us);gravar('crun_emails',MEM.emails);
    render();
  }).catch(function(e){console.warn('Leitura do Firestore falhou:',e&&e.code);});
}
function fbSalvarUser(email){
  if(!FB.on||!email||!users()[email])return;
  FB.db.collection('corredores').doc(email).set(users()[email],{merge:true}).catch(function(e){console.warn('Gravação falhou:',e&&e.code);});
}
function fbRemoverUser(email){
  if(!FB.on||!email)return;
  FB.db.collection('corredores').doc(email).delete().catch(function(e){console.warn('Remoção falhou:',e&&e.code);});
}

/* ================= RENDER E EVENTOS ================= */
var app=document.getElementById('app');
function render(foco){
  app.innerHTML={login:vLogin,perfil:vPerfil,nivel:vNivel,treinos:vTreinos,treino:vTreino,final:vFinal,painel:vPainel}[V.tela]();
  if(foco){var el=document.getElementById(foco);if(el){el.focus();var n=el.value.length;try{el.setSelectionRange(n,n);}catch(e){}}}
}
function ir(t,extra){V.tela=t;if(extra)for(var k in extra)V[k]=extra[k];render();window.scrollTo(0,0);}

function entrar(){{
    var e=norm(document.getElementById('in-email').value);V.email=e;
    if(!valido(e)){V.erro='Digite um e-mail válido, como nome@gmail.com.';return render('in-email');}
    var c=norm(document.getElementById('in-cod').value),K=CONFIG.CODIGOS;V.cod=document.getElementById('in-cod').value;
    if(!c){V.erro='Digite o código de acesso.';return render('in-cod');}
    function painel(p){V.admin=true;V.papel=p;V.cod='';gravar('crun_sessao',{email:e,admin:true,papel:p});fbCarregar();ir('painel',{erro:'',aba:'geral'});}
    if(c===norm(K.letz)){if(!ADM(e)||ADM(e).papel!=='letz'){V.erro='Este código não vale para este e-mail.';return render('in-cod');}return painel('letz');}
    if(c===norm(K.organizador)){if(!ADM(e)||ADM(e).papel!=='organizador'){V.erro='Este código não vale para este e-mail.';return render('in-cod');}return painel('organizador');}
    if(c!==norm(K.aluno)){V.erro='Código incorreto. O código é LETZBORA.';return render('in-cod');}
    V.cod='';
    V.admin=false;V.papel='';
    // cadastro automático: registra o e-mail na primeira entrada
    if(getEmails().indexOf(e)<0){var le=getEmails().slice();le.push(e);le.sort();setEmails(le);}
    var m=me();m.entrou=m.entrou||Date.now();m.visto=Date.now();salvarUsers();
    gravar('crun_sessao',{email:e,admin:false});V.erro='';V.pf={nome:m.nome,tel:m.tel,cidade:m.cidade,asso:m.asso,qual:m.qual};paraTreinos();
  }
}
function liberar(){{
    var partes=document.getElementById('in-add').value.split(/[\s,;]+/).map(norm).filter(Boolean);
    var l=getEmails().slice(),novos=0,rep=0,inv=[];
    partes.forEach(function(p){if(!valido(p))inv.push(p);else if(l.indexOf(p)>-1)rep++;else{l.push(p);novos++;}});
    l.sort();setEmails(l);
    var msg=[];if(novos)msg.push(novos+(novos===1?' e-mail adicionado':' e-mails adicionados'));if(rep)msg.push(rep+(rep>1?' já estavam':' já estava')+' na lista');if(inv.length)msg.push('não reconhecido: '+inv.join(', '));
    V.msgPainel=msg.length?msg.join(' · ')+'.':'Nenhum e-mail digitado.';
    V.rascunho=inv.join('\n');V.rmPend=null;render();
  }
}
app.addEventListener('submit',function(ev){ev.preventDefault();if(ev.target.id==='f-login')entrar();});
app.addEventListener('keydown',function(ev){if(ev.key==='Enter'&&(ev.target.id==='in-email'||ev.target.id==='in-cod')){ev.preventDefault();entrar();}});
app.addEventListener('input',function(ev){
  if(ev.target.id==='in-busca'){V.busca=ev.target.value;render('in-busca');}
  if(ev.target.id==='in-add'){V.rascunho=ev.target.value;}
  if(ev.target.id&&ev.target.id.indexOf('pf-')===0){V.pf[ev.target.id.slice(3)]=ev.target.value;}
  if(ev.target.id==='in-buscac'){V.buscaC=ev.target.value;render('in-buscac');}
});
app.addEventListener('click',function(ev){
  var b=ev.target.closest('[data-act]');if(!b)return;var a=b.getAttribute('data-act');
  if(a==='entrar')entrar();
  else if(a==='instalar'){if(PWA.evento){PWA.evento.prompt();PWA.evento.userChoice.then(function(){PWA.evento=null;render();});}}
  else if(a==='liberar')liberar();
  else if(a==='abrir')ir('treino',{treino:b.getAttribute('data-id')});
  else if(a==='lista')paraTreinos();
  else if(a==='final')ir('final');
  else if(a==='feito'){var id=b.getAttribute('data-id');setFeito(id,!feitos()[id]);render();}
  else if(a==='sair'){gravar('crun_sessao',null);ir('login',{admin:false,papel:'',email:'',cod:'',erro:'',pf:{}});}
  else if(a==='asso'){V.pf.asso=b.getAttribute('data-v');render();}
  else if(a==='perfil-ok')salvarPerfil();
  else if(a==='zap'){var m=me();m.zap=(m.zap||0)+1;m.zapEm=Date.now();salvarUsers();}
  else if(a==='aba'){V.aba=b.getAttribute('data-v');render();}
  else if(a==='filtro'){V.filtro=b.getAttribute('data-v');V.aba='corredores';render();}
  else if(a==='ver-atleta')paraTreinos();
  else if(a==='trocar')ir('nivel');
  else if(a==='nivel'){setNivel(+b.getAttribute('data-n'));ir('treinos');}
  else if(a==='ver-painel'){fbCarregar();ir('painel');}
  else if(a==='rm'){var e=b.getAttribute('data-e');
    if(V.rmPend===e){setEmails(getEmails().filter(function(x){return x!==e;}));V.rmPend=null;V.msgPainel=e+' removido.';}
    else V.rmPend=e;render();}
});
render();
fbInit();

/* ================= ABERTURA ================= */
(function(){
  var el=document.getElementById('intro');if(!el)return;
  var reduz=false;try{reduz=window.matchMedia('(prefers-reduced-motion: reduce)').matches;}catch(e){}
  if(V.tela!=='login'||reduz){el.remove();return;}
  el.hidden=false;var fim=false;
  function sair(){if(fim)return;fim=true;el.classList.add('sai');setTimeout(function(){el.remove();},520);}
  el.addEventListener('click',sair);
  setTimeout(sair,4700);
})();
