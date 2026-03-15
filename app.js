/* ═══════════════════════════════════════════════════════
   F1 LIVE — APP.JS
═══════════════════════════════════════════════════════ */

const DEFAULT_URL = "https://grand-s-main.faggotsports.tv/out/v2/dfaeda63248ed346a40b4d0fc50c94db/index.m3u8?skf1";

/* ── DONNÉES ─────────────────────────────────────────── */
const RACES = [
  {r:1,  name:"GP d'Australie",        circuit:"Albert Park",              flag:"🇦🇺", ts:Date.UTC(2026,2,8,5,0)},
  {r:2,  name:"GP de Chine",           circuit:"Shanghai International",   flag:"🇨🇳", ts:Date.UTC(2026,2,15,7,0)},
  {r:3,  name:"GP du Japon",           circuit:"Suzuka",                   flag:"🇯🇵", ts:Date.UTC(2026,2,29,5,0)},
  {r:4,  name:"GP de Bahreïn",         circuit:"Bahrain International",    flag:"🇧🇭", ts:Date.UTC(2026,3,19,15,0)},
  {r:5,  name:"GP d'Arabie Saoudite",  circuit:"Jeddah Corniche",          flag:"🇸🇦", ts:Date.UTC(2026,3,26,17,0)},
  {r:6,  name:"GP de Miami",           circuit:"Miami International",      flag:"🇺🇸", ts:Date.UTC(2026,4,10,19,30)},
  {r:7,  name:"GP du Canada",          circuit:"Gilles Villeneuve",        flag:"🇨🇦", ts:Date.UTC(2026,4,24,18,0)},
  {r:8,  name:"GP d'Espagne",          circuit:"Circuit de Barcelona",     flag:"🇪🇸", ts:Date.UTC(2026,5,7,13,0)},
  {r:9,  name:"GP de Monaco",          circuit:"Circuit de Monaco",        flag:"🇲🇨", ts:Date.UTC(2026,5,21,13,0)},
  {r:10, name:"GP d'Azerbaïdjan",      circuit:"Baku City Circuit",        flag:"🇦🇿", ts:Date.UTC(2026,6,5,11,0)},
  {r:11, name:"GP de Grande-Bretagne", circuit:"Silverstone",              flag:"🇬🇧", ts:Date.UTC(2026,6,19,14,0)},
  {r:12, name:"GP de Belgique",        circuit:"Circuit de Spa",           flag:"🇧🇪", ts:Date.UTC(2026,7,2,13,0)},
  {r:13, name:"GP de Hongrie",         circuit:"Hungaroring",              flag:"🇭🇺", ts:Date.UTC(2026,7,23,13,0)},
  {r:14, name:"GP des Pays-Bas",       circuit:"Zandvoort",                flag:"🇳🇱", ts:Date.UTC(2026,7,30,13,0)},
  {r:15, name:"GP d'Italie",           circuit:"Monza",                    flag:"🇮🇹", ts:Date.UTC(2026,8,6,13,0)},
  {r:16, name:"GP de Madrid",          circuit:"Madring",                  flag:"🇪🇸", ts:Date.UTC(2026,8,13,13,0)},
  {r:17, name:"GP de Singapour",       circuit:"Marina Bay Street",        flag:"🇸🇬", ts:Date.UTC(2026,8,20,12,0)},
  {r:18, name:"GP des États-Unis",     circuit:"Circuit of the Americas",  flag:"🇺🇸", ts:Date.UTC(2026,9,18,19,0)},
  {r:19, name:"GP du Mexique",         circuit:"Autodromo H. Rodriguez",   flag:"🇲🇽", ts:Date.UTC(2026,9,25,20,0)},
  {r:20, name:"GP du Brésil",          circuit:"Interlagos",               flag:"🇧🇷", ts:Date.UTC(2026,10,8,17,0)},
  {r:21, name:"GP de Las Vegas",       circuit:"Las Vegas Strip Circuit",  flag:"🇺🇸", ts:Date.UTC(2026,10,21,6,0)},
  {r:22, name:"GP du Qatar",           circuit:"Losail International",     flag:"🇶🇦", ts:Date.UTC(2026,10,29,14,0)},
  {r:23, name:"GP d'Abu Dhabi",        circuit:"Yas Marina Circuit",       flag:"🇦🇪", ts:Date.UTC(2026,11,6,13,0)},
];

const TEAMS = [
  {name:"McLaren",       engine:"Mercedes",     color:"#FF8000", p1:"Lando Norris",    f1:"🇬🇧", n1:4,  p2:"Oscar Piastri",     f2:"🇦🇺", n2:81, note:"Favoris au titre constructeurs"},
  {name:"Ferrari",       engine:"Ferrari",      color:"#E8002D", p1:"Charles Leclerc", f1:"🇲🇨", n1:16, p2:"Lewis Hamilton",    f2:"🇬🇧", n2:44, note:"Hamilton, 1re saison Ferrari"},
  {name:"Red Bull",      engine:"Red Bull/Ford",color:"#3671C6", p1:"Max Verstappen",  f1:"🇳🇱", n1:1,  p2:"Isack Hadjar",      f2:"🇫🇷", n2:6,  note:"Hadjar promu rookie"},
  {name:"Mercedes",      engine:"Mercedes",     color:"#27F4D2", p1:"George Russell",  f1:"🇬🇧", n1:63, p2:"Kimi Antonelli",   f2:"🇮🇹", n2:12, note:"Antonelli rookie prometteur"},
  {name:"Aston Martin",  engine:"Honda",        color:"#229971", p1:"Fernando Alonso", f1:"🇪🇸", n1:14, p2:"Lance Stroll",     f2:"🇨🇦", n2:18, note:"Adrian Newey directeur technique"},
  {name:"Alpine",        engine:"Mercedes",     color:"#0093CC", p1:"Pierre Gasly",    f1:"🇫🇷", n1:10, p2:"Franco Colapinto", f2:"🇦🇷", n2:43, note:"Moteur Mercedes pour 2026"},
  {name:"Haas",          engine:"Ferrari",      color:"#B6BABD", p1:"Esteban Ocon",    f1:"🇫🇷", n1:31, p2:"Oliver Bearman",   f2:"🇬🇧", n2:87, note:"Sponsor-titre Toyota"},
  {name:"Racing Bulls",  engine:"Red Bull/Ford",color:"#6692FF", p1:"Liam Lawson",     f1:"🇳🇿", n1:30, p2:"Arvid Lindblad",   f2:"🇸🇪", n2:5,  note:"Lindblad rookie"},
  {name:"Williams",      engine:"Mercedes",     color:"#64C4FF", p1:"Carlos Sainz",    f1:"🇪🇸", n1:55, p2:"Alexander Albon",  f2:"🇹🇭", n2:23, note:"Sainz prolongé"},
  {name:"Audi",          engine:"Audi",         color:"#C0C0C0", p1:"Nico Hülkenberg", f1:"🇩🇪", n1:27, p2:"Gabriel Bortoleto",f2:"🇧🇷", n2:5,  note:"1re saison sous marque Audi"},
  {name:"Cadillac",      engine:"Ferrari",      color:"#A50C2F", p1:"Valtteri Bottas", f1:"🇫🇮", n1:77, p2:"Sergio Pérez",     f2:"🇲🇽", n2:11, note:"11e écurie, 1re depuis 2016"},
];

/* ── NAVIGATION ──────────────────────────────────────── */
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  const nb = document.getElementById('nav-' + id);
  if (nb) nb.classList.add('active');
  if (id === 'calendar')  renderCalendar();
  if (id === 'standings') fetchStandings('drivers');
  if (id === 'teams')     renderTeams();
  if (id === 'player')    startPlayer();
  if (id === 'settings')  document.getElementById('stream-url-input').value = localStorage.getItem('stream_url') || DEFAULT_URL;
  window.scrollTo(0, 0);
}
window.showPage = showPage;

/* ── TOAST ───────────────────────────────────────────── */
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}
window.showToast = showToast;

/* ── MODAL ───────────────────────────────────────────── */
function openModal() {
  document.getElementById('modal-backdrop').classList.add('open');
  setTimeout(() => document.getElementById('auth-email').focus(), 100);
}
function closeModal() {
  document.getElementById('modal-backdrop').classList.remove('open');
  document.getElementById('modal-err').textContent = '';
}
function closeModalOutside(e) {
  if (e.target === document.getElementById('modal-backdrop')) closeModal();
}
window.openModal = openModal;
window.closeModal = closeModal;
window.closeModalOutside = closeModalOutside;

/* ── CALENDRIER ─────────────────────────────────────── */
function renderCalendar() {
  const wrap = document.getElementById('cal-rows');
  if (wrap.children.length) return;
  const now = Date.now();
  let foundNext = false;
  const fmt = new Intl.DateTimeFormat('fr-FR', {day:'2-digit', month:'short', hour:'2-digit', minute:'2-digit'});
  RACES.forEach(r => {
    const past = r.ts < now;
    const next = !past && !foundNext;
    if (next) foundNext = true;
    const row = document.createElement('div');
    row.className = 'cal-row' + (next ? ' next' : '') + (past ? ' past' : '');
    row.innerHTML = `
      <span class="cal-round">${r.r}</span>
      <div class="cal-name-wrap">
        ${next ? '<span class="cal-badge">Prochain</span>' : ''}
        <span class="cal-name">${r.name}</span>
        <span class="cal-circuit">${r.circuit}</span>
      </div>
      <span class="cal-date">${fmt.format(new Date(r.ts))}</span>
      <span class="cal-flag">${r.flag}</span>
      ${!past ? `<button class="notif-icon" title="Activer notifications" onclick="schedNotif(this,'${r.name}',${r.ts})">🔔</button>` : '<span></span>'}`;
    wrap.appendChild(row);
  });

  // Prochaine course dans la stat du hero
  const next = RACES.find(r => r.ts > Date.now());
  if (next) {
    const el = document.getElementById('next-race-stat');
    if (el) el.textContent = new Date(next.ts).toLocaleDateString('fr-FR', {day:'numeric', month:'short'});
  }
}

window.schedNotif = (btn, name, ts) => {
  if (!('Notification' in window)) { showToast('Non supporté'); return; }
  Notification.requestPermission().then(p => {
    if (p !== 'granted') { showToast('Permission refusée'); return; }
    const d30 = ts - Date.now() - 1800000;
    const d0  = ts - Date.now();
    if (d30 > 0) setTimeout(() => new Notification('⏱ Dans 30 min', {body: name + ' démarre bientôt !'}), d30);
    if (d0  > 0) setTimeout(() => new Notification('🏁 C\'est parti !', {body: name + ' a commencé !'}), d0);
    btn.textContent = '✅';
    btn.disabled = true;
    showToast('Notifications activées — ' + name);
  });
};

/* ── CLASSEMENT ─────────────────────────────────────── */
let standingsFetched = {drivers: false, constructors: false};

function fetchStandings(type) {
  const content = document.getElementById('standings-content');
  if (standingsFetched[type]) return;
  standingsFetched[type] = true;
  content.innerHTML = '<div style="color:var(--muted);padding:60px;text-align:center">Chargement...</div>';

  const url = type === 'drivers'
    ? 'https://api.jolpi.ca/ergast/f1/2026/driverstandings.json'
    : 'https://api.jolpi.ca/ergast/f1/2026/constructorstandings.json';

  const flagMap = {Dutch:'🇳🇱', British:'🇬🇧', Monegasque:'🇲🇨', Spanish:'🇪🇸', Australian:'🇦🇺', Mexican:'🇲🇽', French:'🇫🇷', German:'🇩🇪', Finnish:'🇫🇮', Brazilian:'🇧🇷', Thai:'🇹🇭', 'New Zealander':'🇳🇿', Italian:'🇮🇹', Argentine:'🇦🇷', Swedish:'🇸🇪', Canadian:'🇨🇦', American:'🇺🇸'};

  fetch(url).then(r => r.json()).then(data => {
    const table = data.MRData.StandingsTable.StandingsLists[0];
    if (!table) {
      content.innerHTML = '<div style="color:var(--muted);padding:60px;text-align:center">Aucune donnée disponible.</div>';
      return;
    }
    const list   = type === 'drivers' ? table.DriverStandings : table.ConstructorStandings;
    const maxPts = parseFloat(list[0]?.points || 1);

    const html = `<div class="standings-list">
      <div class="standing-row header">
        <span>Pos.</span><span></span>
        <span>${type === 'drivers' ? 'Pilote' : 'Écurie'}</span>
        <span style="text-align:right">Victoires</span>
        <span style="text-align:right">Points</span>
      </div>
      ${list.map(s => {
        const pts      = parseFloat(s.points);
        const pct      = (pts / maxPts * 100).toFixed(1);
        const pos      = s.position;
        const name     = type === 'drivers' ? s.Driver.familyName : s.Constructor.name;
        const sub      = type === 'drivers' ? s.Constructors[0].name : '';
        const flag     = type === 'drivers' ? (flagMap[s.Driver.nationality] || '🏁') : '';
        const posClass = pos==='1'?'p1':pos==='2'?'p2':pos==='3'?'p3':'';
        return `<div class="standing-row">
          <span class="s-pos ${posClass}">${pos}</span>
          <span class="s-flag">${flag}</span>
          <div class="s-name-wrap">
            <span class="s-name">${name}</span>
            ${sub ? `<span class="s-team">${sub}</span>` : ''}
          </div>
          <span class="s-wins">${s.wins}</span>
          <span class="s-pts">${pts}<span>PTS</span></span>
        </div>
        <div class="pts-bar-wrap">
          <div class="pts-bar">
            <div class="pts-bar-fill" style="width:${pct}%;background:${pos==='1'?'var(--red)':'var(--subtle)'}"></div>
          </div>
        </div>`;
      }).join('')}
    </div>`;
    content.innerHTML = html;
  }).catch(() => {
    content.innerHTML = '<div style="color:var(--muted);padding:60px;text-align:center">Aucune donnée disponible pour 2026.</div>';
  });
}

window.switchStandings = (type, btn) => {
  document.querySelectorAll('.standings-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  standingsFetched[type] = false;
  fetchStandings(type);
};

/* ── ÉQUIPES ─────────────────────────────────────────── */
function renderTeams() {
  const grid = document.getElementById('teams-grid');
  if (grid.children.length) return;
  TEAMS.forEach((t, i) => {
    const card = document.createElement('div');
    card.className = 'team-card';
    card.style.setProperty('--team-color', t.color);
    card.innerHTML = `<div class="team-card-inner">
      <div class="team-head">
        <div>
          <div class="team-name">${t.name}</div>
          <div class="team-engine">${t.engine}</div>
        </div>
        <div class="team-pos">${String(i+1).padStart(2,'0')}</div>
      </div>
      <div class="team-drivers-row">
        <div class="team-driver">
          <span class="team-driver-flag">${t.f1}</span>
          <span class="team-driver-name">${t.p1}</span>
          <span class="team-driver-num">#${t.n1}</span>
        </div>
      </div>
      <div class="team-drivers-row">
        <div class="team-driver">
          <span class="team-driver-flag">${t.f2}</span>
          <span class="team-driver-name">${t.p2}</span>
          <span class="team-driver-num">#${t.n2}</span>
        </div>
      </div>
      <div class="team-note">${t.note}</div>
    </div>`;
    grid.appendChild(card);
  });
}

/* ── PLAYER ─────────────────────────────────────────── */
function startPlayer() {
  const url = localStorage.getItem('stream_url') || DEFAULT_URL;
  const vid = document.getElementById('video-el');
  document.getElementById('player-bar-url').textContent = url;
  if (window.Hls && Hls.isSupported() && url.includes('.m3u8')) {
    const hls = new Hls();
    hls.loadSource(url);
    hls.attachMedia(vid);
  } else {
    vid.src = url;
    vid.play().catch(() => {});
  }
}

// Charger hls.js
const hlsScript = document.createElement('script');
hlsScript.src = 'https://cdn.jsdelivr.net/npm/hls.js@latest';
document.head.appendChild(hlsScript);

/* ── PARAMÈTRES ─────────────────────────────────────── */
window.saveUrl = () => {
  const v = document.getElementById('stream-url-input').value.trim();
  if (!v) { showToast('URL vide'); return; }
  localStorage.setItem('stream_url', v);
  showToast('URL enregistrée ✓');
};
window.resetUrl = () => {
  document.getElementById('stream-url-input').value = DEFAULT_URL;
  localStorage.setItem('stream_url', DEFAULT_URL);
  showToast('URL réinitialisée');
};
window.switchSettings = (id, el) => {
  ['stream','account','notifs'].forEach(k => document.getElementById('s-'+k).style.display = 'none');
  document.getElementById('s-'+id).style.display = 'block';
  document.querySelectorAll('.settings-nav-item').forEach(i => i.classList.remove('active'));
  el.classList.add('active');
};

/* ── INIT ───────────────────────────────────────────── */
document.getElementById('stream-url-input').value = localStorage.getItem('stream_url') || DEFAULT_URL;
renderCalendar();
