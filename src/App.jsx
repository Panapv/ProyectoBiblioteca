import { useState } from 'react'
import logo from './logo.svg';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import alambre from './assets/alambre-sm.jpg';

const verbos = [
  { num: 1, inf: "arise", pastsimple: "arise", pastparticle: "arose", spanish: "surgir" },
  { num: 2, inf: "be", pastsimple: "was, were", pastparticle: "been", spanish: "ser" },
  { num: 3, inf: "beat", pastsimple: "beat", pastparticle: "beaten", spanish: "golpear" },
  { num: 4, inf: "become", pastsimple: "became", pastparticle: "become", spanish: "convertirse" },
  { num: 5, inf: "begin", pastsimple: "began", pastparticle: "begun", spanish: "comenzar" },
  { num: 6, inf: "bet", pastsimple: "bet", pastparticle: "bet", spanish: "apostar" },
  { num: 7, inf: "bite", pastsimple: "bit", pastparticle: "bitten", spanish: "morder" },
  { num: 8, inf: "bleed", pastsimple: "bled", pastparticle: "bled", spanish: "sangrar" },
  { num: 9, inf: "blow", pastsimple: "blew", pastparticle: "blown", spanish: "soplar" },
  { num: 10, inf: "break", pastsimple: "broke", pastparticle: "broken", spanish: "romper" },
  { num: 11, inf: "bring", pastsimple: "brought", pastparticle: "brought", spanish: "traer" },
  { num: 12, inf: "build", pastsimple: "built", pastparticle: "built", spanish: "construir" },
  { num: 13, inf: "buy", pastsimple: "bought", pastparticle: "bought", spanish: "comprar" },
  { num: 14, inf: "catch", pastsimple: "caught", pastparticle: "caught", spanish: "atrapar" },
  { num: 15, inf: "choose", pastsimple: "chose", pastparticle: "chosen", spanish: "elegir" },
  { num: 16, inf: "come", pastsimple: "came", pastparticle: "come", spanish: "venir" },
  { num: 17, inf: "cost", pastsimple: "cost", pastparticle: "cost", spanish: "costar" },
  { num: 18, inf: "creep", pastsimple: "crept", pastparticle: "crept", spanish: "arrastrarse" },
  { num: 19, inf: "cut", pastsimple: "cut", pastparticle: "cut", spanish: "cortar" },
  { num: 20, inf: "deal", pastsimple: "dealt", pastparticle: "dealt", spanish: "dar, repartir" },
  { num: 21, inf: "do", pastsimple: "did", pastparticle: "done", spanish: "hacer" },
  { num: 22, inf: "draw", pastsimple: "drew", pastparticle: "drawn", spanish: "dibujar" },
  { num: 23, inf: "dream", pastsimple: "dreamt, dreamed", pastparticle: "dreamt, dreamed", spanish: "soñar" },
  { num: 24, inf: "drink", pastsimple: "drank", pastparticle: "drunk", spanish: "beber" },
  { num: 25, inf: "drive", pastsimple: "drove", pastparticle: "driven", spanish: "conducir" },
  { num: 26, inf: "eat", pastsimple: "ate", pastparticle: "eaten", spanish: "comer" },
  { num: 27, inf: "fall", pastsimple: "fell", pastparticle: "fallen", spanish: "caer" },
  { num: 28, inf: "feed", pastsimple: "fed", pastparticle: "fed", spanish: "alimentar" },
  { num: 29, inf: "feel", pastsimple: "felt", pastparticle: "felt", spanish: "sentir" },
  { num: 30, inf: "fight", pastsimple: "fought", pastparticle: "fought", spanish: "pelear" },
  { num: 31, inf: "find", pastsimple: "found", pastparticle: "found", spanish: "encontrar" },
  { num: 32, inf: "flee", pastsimple: "fled", pastparticle: "fled", spanish: "huir" },
  { num: 33, inf: "fly", pastsimple: "flew", pastparticle: "flown", spanish: "volar" },
  { num: 34, inf: "forget", pastsimple: "forgot", pastparticle: "forgotten", spanish: "olvidar" },
  { num: 35, inf: "forgive", pastsimple: "forgave", pastparticle: "forgiven", spanish: "perdonar" },
  { num: 36, inf: "forsake", pastsimple: "forsook", pastparticle: "forsaken", spanish: "abandonar" },
  { num: 37, inf: "freeze", pastsimple: "froze", pastparticle: "frozen", spanish: "congelar" },
  { num: 38, inf: "get", pastsimple: "got", pastparticle: "got", spanish: "tener, obtener" },
  { num: 39, inf: "give", pastsimple: "gave", pastparticle: "given", spanish: "dar" },
  { num: 40, inf: "go", pastsimple: "went", pastparticle: "gone", spanish: "ir" },
  { num: 41, inf: "grind", pastsimple: "ground", pastparticle: "ground", spanish: "moler" },
  { num: 42, inf: "grow", pastsimple: "grew", pastparticle: "grown", spanish: "crecer" },
  { num: 43, inf: "hang", pastsimple: "hung", pastparticle: "hung", spanish: "colgar" },
  { num: 44, inf: "have", pastsimple: "had", pastparticle: "had", spanish: "tener" },
  { num: 45, inf: "hear", pastsimple: "heard", pastparticle: "heard", spanish: "oír" },
  { num: 46, inf: "hide", pastsimple: "hid", pastparticle: "hidden", spanish: "esconderse" },
  { num: 47, inf: "hit", pastsimple: "hit", pastparticle: "hit", spanish: "golpear" },
  { num: 48, inf: "hold", pastsimple: "held", pastparticle: "held", spanish: "tener, mantener" },
  { num: 49, inf: "hurt", pastsimple: "hurt", pastparticle: "hurt", spanish: "herir, doler" },
  { num: 50, inf: "keep", pastsimple: "kept", pastparticle: "kept", spanish: "guardar" },
  { num: 51, inf: "kneel", pastsimple: "knelt", pastparticle: "knelt", spanish: "arrodillarse" },
  { num: 52, inf: "know", pastsimple: "knew", pastparticle: "known", spanish: "saber" },
  { num: 53, inf: "lead", pastsimple: "led", pastparticle: "led", spanish: "encabezar" },
  { num: 54, inf: "learn", pastsimple: "learnt, learned", pastparticle: "learnt, learned", spanish: "aprender" },
  { num: 55, inf: "leave", pastsimple: "left", pastparticle: "left", spanish: "dejar" },
  { num: 56, inf: "lend", pastsimple: "lent", pastparticle: "lent", spanish: "prestar" },
  { num: 57, inf: "let", pastsimple: "let", pastparticle: "let", spanish: "dejar" },
  { num: 58, inf: "lie", pastsimple: "lay", pastparticle: "lain", spanish: "yacer" },
  { num: 59, inf: "lose", pastsimple: "lost", pastparticle: "lost", spanish: "perder" },
  { num: 60, inf: "make", pastsimple: "made", pastparticle: "made", spanish: "hacer" },
  { num: 61, inf: "mean", pastsimple: "meant", pastparticle: "meant", spanish: "significar" },
  { num: 62, inf: "meet", pastsimple: "met", pastparticle: "met", spanish: "conocer, encontrar" },
  { num: 63, inf: "pay", pastsimple: "paid", pastparticle: "paid", spanish: "pagar" },
  { num: 64, inf: "put", pastsimple: "put", pastparticle: "put", spanish: "poner" },
  { num: 65, inf: "quit", pastsimple: "quit, quitted", pastparticle: "quit, quitted", spanish: "abandonar" },
  { num: 66, inf: "read", pastsimple: "read", pastparticle: "read", spanish: "leer" },
  { num: 67, inf: "ride", pastsimple: "rode", pastparticle: "ridden", spanish: "montar, ir" },
  { num: 68, inf: "ring", pastsimple: "rang", pastparticle: "rung", spanish: "llamar por teléfono" },
  { num: 69, inf: "rise", pastsimple: "rose", pastparticle: "risen", spanish: "elevar" },
  { num: 70, inf: "run", pastsimple: "ran", pastparticle: "run", spanish: "correr" },
  { num: 71, inf: "say", pastsimple: "said", pastparticle: "said", spanish: "decir" },
  { num: 72, inf: "see", pastsimple: "saw", pastparticle: "seen", spanish: "ver" },
  { num: 73, inf: "sell", pastsimple: "sold", pastparticle: "sold", spanish: "vender" },
  { num: 74, inf: "send", pastsimple: "sent", pastparticle: "sent", spanish: "enviar" },
  { num: 75, inf: "set", pastsimple: "set", pastparticle: "set", spanish: "fijar" },
  { num: 76, inf: "sew", pastsimple: "sewed", pastparticle: "sewn", spanish: "coser" },
  { num: 77, inf: "shake", pastsimple: "shook", pastparticle: "shaken", spanish: "sacudir" },
  { num: 78, inf: "shine", pastsimple: "shone", pastparticle: "shone", spanish: "brillar" },
  { num: 79, inf: "shoot", pastsimple: "shot", pastparticle: "shot", spanish: "disparar" },
  { num: 80, inf: "show", pastsimple: "showed", pastparticle: "shown", spanish: "mostrar" },
  { num: 81, inf: "shrink", pastsimple: "shrank", pastparticle: "shrunk", spanish: "encoger" },
  { num: 82, inf: "shut", pastsimple: "shut", pastparticle: "shut", spanish: "cerrar" },
  { num: 83, inf: "sing", pastsimple: "sang", pastparticle: "sung", spanish: "cantar" },
  { num: 84, inf: "sink", pastsimple: "sank", pastparticle: "sunk", spanish: "hundir" },
  { num: 85, inf: "sit", pastsimple: "sat", pastparticle: "sat", spanish: "sentarse" },
  { num: 86, inf: "sleep", pastsimple: "slept", pastparticle: "slept", spanish: "dormir" },
  { num: 87, inf: "slide", pastsimple: "slid", pastparticle: "slid", spanish: "deslizar" },
  { num: 88, inf: "sow", pastsimple: "sowed", pastparticle: "sown", spanish: "sembrar" },
  { num: 89, inf: "speak", pastsimple: "spoke", pastparticle: "spoken", spanish: "hablar" },
  { num: 90, inf: "spell", pastsimple: "spelt, spelled", pastparticle: "spelt, spelled", spanish: "deletrear" },
  { num: 91, inf: "spend", pastsimple: "spent", pastparticle: "spent", spanish: "gastar" },
  { num: 92, inf: "spill", pastsimple: "spilt, spilled", pastparticle: "spilt, spilled", spanish: "derramar" },
  { num: 93, inf: "split", pastsimple: "split", pastparticle: "split", spanish: "partir" },
  { num: 94, inf: "spoil", pastsimple: "spoilt, spoiled", pastparticle: "spoilt, spoiled", spanish: "estropear" },
  { num: 95, inf: "spread", pastsimple: "spread", pastparticle: "spread", spanish: "extenderse" },
  { num: 96, inf: "stand", pastsimple: "stood", pastparticle: "stood", spanish: "estar de pie" },
  { num: 97, inf: "steal", pastsimple: "stole", pastparticle: "stolen", spanish: "robar" },
  { num: 98, inf: "sting", pastsimple: "stung", pastparticle: "stung", spanish: "picar" },
  { num: 99, inf: "stink", pastsimple: "stank", pastparticle: "stunk", spanish: "apestar" },
  { num: 100, inf: "strike", pastsimple: "struck", pastparticle: "struck", spanish: "golpear" },
  { num: 101, inf: "swear", pastsimple: "swore", pastparticle: "sworn", spanish: "jurar" },
  { num: 102, inf: "sweep", pastsimple: "swept", pastparticle: "swept", spanish: "barrer" },
  { num: 103, inf: "swim", pastsimple: "swam", pastparticle: "swum", spanish: "nadar" },
  { num: 104, inf: "take", pastsimple: "took", pastparticle: "taken", spanish: "tomar" },
  { num: 105, inf: "teach", pastsimple: "taught", pastparticle: "taught", spanish: "enseñar" },
  { num: 106, inf: "tear", pastsimple: "tore", pastparticle: "torn", spanish: "romper" },
  { num: 107, inf: "tell", pastsimple: "told", pastparticle: "told", spanish: "decir" },
  { num: 108, inf: "think", pastsimple: "thought", pastparticle: "thought", spanish: "pensar" },
  { num: 109, inf: "throw", pastsimple: "threw", pastparticle: "thrown", spanish: "lanzar" },
  { num: 110, inf: "tread", pastsimple: "trode", pastparticle: "trodden", spanish: "pisar" },
  { num: 111, inf: "understand", pastsimple: "understood", pastparticle: "understood", spanish: "entender" },
  { num: 112, inf: "wake", pastsimple: "woke", pastparticle: "woken", spanish: "despertarse" },
  { num: 113, inf: "wear", pastsimple: "wore", pastparticle: "worn", spanish: "llevar puesto" },
  { num: 114, inf: "weave", pastsimple: "wove", pastparticle: "woven", spanish: "tejer" },
  { num: 115, inf: "weep", pastsimple: "wept", pastparticle: "wept", spanish: "llorar" },
  { num: 116, inf: "win", pastsimple: "won", pastparticle: "won", spanish: "ganar" },
  { num: 117, inf: "wring", pastsimple: "wrung", pastparticle: "wrung", spanish: "retorcer" },
  { num: 118, inf: "write", pastsimple: "wrote", pastparticle: "written", spanish: "escribir" }
];

function getVerbos(n = 5) {
  let arr = [];
  while (arr.length < n) {
    let rand = Math.floor(Math.random() * verbos.length);
    if (verbos[rand] && !arr.includes(verbos[rand])) {
      arr.push(verbos[rand]);
    }
  }
  return arr;
}

function Game01({ arrVerbos = [], toGuess = ["spanish", "inf", "pastsimple", "pastparticle"] }) {
  const handleResponse = (event, verbIndex, verbForm) => {
    let responseValue = event.target.value.trim().toLowerCase();
    if (responseValue != '') {
      event.target.style.background = (arrVerbos[verbIndex][verbForm] == responseValue) ? 'lightgreen' : 'red';
    }
  }
  return (
    <div className='game01'>
      <table className='table'>
        <thead>
          <tr>
            {toGuess.map((formaVerbal) => (
              <th className='bg-transparent'>{formaVerbal}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {arrVerbos.map((verbo, index) =>
          (<tr key={verbo['num']}>
            {toGuess.map((formaVerbal) => (
              <td className='bg-transparent' key={formaVerbal}>
                {toGuess.indexOf(formaVerbal) == 0 ? verbo[formaVerbal] :
                  (<input className="form-control form-control-sm" type='text' onBlur={(event) => handleResponse(event, index, formaVerbal)}></input>)}
              </td>
            ))}
          </tr>))
          }
        </tbody>
      </table>
    </div>
  );
}

function getRealString(str = '') {
  switch (str) {
    case 'spanish':
      return 'Castellano';
    case 'pastsimple':
      return 'Pasado Simple';
    case 'pastparticle':
      return 'Participio';
  }
}

function invert(arr) {
  let spanish_i = arr.indexOf('spanish');
  let inf_i = arr.indexOf('inf');

  if(spanish_i > -1) arr[spanish_i] = 'inf';
  if(inf_i > -1) arr[inf_i] = 'spanish';
  console.log(arr);
  return arr;
}

function getVerbForm(arrVerbos = [], formasVerbales = []) {
  let verbos = [];
  for (const verbo of arrVerbos) {
    let entrie = {};
    formasVerbales.forEach((forma) => {
      entrie[forma] = verbo[forma];
    })
    entrie['num'] = verbo['num'];
    verbos.push(entrie);
  }
  return verbos;
}

function isCorrect(arrVerbos = [], response = {}, formas = ["spanish", "inf", "pastsimple", "pastparticle"]) {
  for (const verbo of arrVerbos) {
    let bool = [];
    formas.forEach(formaVerbal => {
      bool.push(verbo[formaVerbal] == response[formaVerbal]);
    });
    if (bool.every((a) => a == true)) return true;
  }
  return false;
}

function Game02({ arrVerbos = [], toGuess = ["spanish", "inf", "pastsimple", "pastparticle"] }) {
  let response = {};
  let arrEvents = [];

  const handleResponse = (event, verbo, formaVerbal) => {
    event.target.style.background = 'lightblue';
    response[formaVerbal] = verbo[formaVerbal];
    arrEvents.push(event);
    if (Object.values(response).length == toGuess.length) {
      arrEvents.map((value) => value.target.style.background = isCorrect(arrVerbos, response, toGuess) ? 'lightgreen' : 'red');
      response = {};
      arrEvents = [];
    }
  }

  const used = [];
  return (
    <div className='game02'>
      <table className='table'>
        <thead>
          <tr>
            {toGuess.map((formaVerbal) => (
              <th className='bg-transparent' key={formaVerbal}>{formaVerbal}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            arrVerbos.map((_, index) => {
              return (<tr>
                {toGuess.map((formaVerbal) => {
                  let verbo = null;
                  do {
                    verbo = arrVerbos[Math.floor(Math.random() * arrVerbos.length)];
                    let aux = verbo['num'] + '-' + formaVerbal;
                  } while (used.includes(verbo['num'] + '-' + formaVerbal));
                  used.push(verbo['num'] + '-' + formaVerbal);
                  return (<td className='bg-transparent' key={verbo['num'] + verbo[formaVerbal]}>
                    <button className="btn  btn-outline-primary btn-sm" onClick={(event) => handleResponse(event, verbo, formaVerbal)} value={verbo[formaVerbal]}>{verbo[formaVerbal]}</button>
                  </td>
                  );
                })
                }
              </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

function GameHeader({ onChangeMinigame, onRestart, onBack }) {
  return (
    <div className='gameHeader'>
      <button className="btn btn-primary btn-sm my-1" onClick={() => onChangeMinigame()}>Cambiar Minijuego</button>
      <button className="btn btn-secondary btn-sm my-1" onClick={() => onRestart()}>Reiniciar</button>
      <button className="btn btn-danger btn-sm my-1" onClick={() => onBack(null)}>Volver al Menú</button>
    </div>
  );
}

function GameScreen({ form, onBack }) {
  const [minigame, setMinigame] = useState(1);
  const handleMinigame = () => setMinigame((minigame + 1 > 3) ? 1 : minigame + 1);

  const [gameKey, setGameKey] = useState(0);
  const handleGameKey = () => setGameKey(prev => prev + 1);

  let formVerbs;

  switch (form) {
    case 'infinitive':
      formVerbs = ['spanish', 'inf'];
      break;
    case 'past':
      formVerbs = ['spanish', 'pastsimple', 'pastparticle'];
      break;
    case 'mix':
      formVerbs = ['spanish', 'inf', 'pastsimple', 'pastparticle'];
      break;
  }

  let game = null;
  switch (minigame) {
    case 1:
      game = <Game01 arrVerbos={getVerbos()} toGuess={formVerbs} key={gameKey} />
      break;
    case 2:
      game = <Game01 arrVerbos={getVerbos()} toGuess={invert(formVerbs)} key={gameKey} />
      break;
    case 3:
      game = <Game02 arrVerbos={getVerbos()} toGuess={formVerbs} key={gameKey} />
      break;
  }

  return (
    <div className='contenido'>
      <h1 className='gameTitle'>{form}</h1>
      {game}
      <GameHeader onChangeMinigame={handleMinigame} onRestart={handleGameKey} onBack={onBack} />
    </div>
  );
}

function MenuScreen({ onSelect }) {
  return (
    <div className='container text-warning uppercase'>
      <h1 className='gameTitle'>Selecciona las formas verbales que quieres practicar</h1>
      <div className='d-flex justify-content-center'>
        <button className='btn btn-dark mx-1' onClick={() => onSelect('infinitive')}>Infinitivos</button>
        <button className='btn btn-dark mx-1' onClick={() => onSelect('past')}>Pasado simple y participio</button>
        <button className='btn btn-dark mx-1' onClick={() => onSelect('mix')}>Mix</button>
      </div>
    </div>
  );
}

function App() {
  const [formSetting, setFormSetting] = useState(null);
  const handleFormSetting = (value) => setFormSetting(value);
  const handleBackForm = () => setFormSetting(null);

  return (
    <div className={formSetting ? 'folio-background shadow' : 'libreta-background'} >
      {!formSetting ? (
        <MenuScreen onSelect={handleFormSetting} />
      ) : (
        <GameScreen form={formSetting} onBack={handleBackForm} />
      )}
    </div>
  );
}

export default App;
