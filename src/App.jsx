import { useState } from 'react'
import logo from './logo.svg';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import alambre from './assets/alambre-sm.jpg';

const verbos = [
  { num: 1, inf: "arise", present: "arise", past: "arose", spanish: "surgir" },
  { num: 2, inf: "be", present: "was, were", past: "been", spanish: "ser" },
  { num: 3, inf: "beat", present: "beat", past: "beaten", spanish: "golpear" },
  { num: 4, inf: "become", present: "became", past: "become", spanish: "convertirse" },
  { num: 5, inf: "begin", present: "began", past: "begun", spanish: "comenzar" },
  { num: 6, inf: "bet", present: "bet", past: "bet", spanish: "apostar" },
  { num: 7, inf: "bite", present: "bit", past: "bitten", spanish: "morder" },
  { num: 8, inf: "bleed", present: "bled", past: "bled", spanish: "sangrar" },
  { num: 9, inf: "blow", present: "blew", past: "blown", spanish: "soplar" },
  { num: 10, inf: "break", present: "broke", past: "broken", spanish: "romper" },
  { num: 11, inf: "bring", present: "brought", past: "brought", spanish: "traer" },
  { num: 12, inf: "build", present: "built", past: "built", spanish: "construir" },
  { num: 13, inf: "buy", present: "bought", past: "bought", spanish: "comprar" },
  { num: 14, inf: "catch", present: "caught", past: "caught", spanish: "atrapar" },
  { num: 15, inf: "choose", present: "chose", past: "chosen", spanish: "elegir" },
  { num: 16, inf: "come", present: "came", past: "come", spanish: "venir" },
  { num: 17, inf: "cost", present: "cost", past: "cost", spanish: "costar" },
  { num: 18, inf: "creep", present: "crept", past: "crept", spanish: "arrastrarse" },
  { num: 19, inf: "cut", present: "cut", past: "cut", spanish: "cortar" },
  { num: 20, inf: "deal", present: "dealt", past: "dealt", spanish: "dar, repartir" },
  { num: 21, inf: "do", present: "did", past: "done", spanish: "hacer" },
  { num: 22, inf: "draw", present: "drew", past: "drawn", spanish: "dibujar" },
  { num: 23, inf: "dream", present: "dreamt, dreamed", past: "dreamt, dreamed", spanish: "soñar" },
  { num: 24, inf: "drink", present: "drank", past: "drunk", spanish: "beber" },
  { num: 25, inf: "drive", present: "drove", past: "driven", spanish: "conducir" },
  { num: 26, inf: "eat", present: "ate", past: "eaten", spanish: "comer" },
  { num: 27, inf: "fall", present: "fell", past: "fallen", spanish: "caer" },
  { num: 28, inf: "feed", present: "fed", past: "fed", spanish: "alimentar" },
  { num: 29, inf: "feel", present: "felt", past: "felt", spanish: "sentir" },
  { num: 30, inf: "fight", present: "fought", past: "fought", spanish: "pelear" },
  { num: 31, inf: "find", present: "found", past: "found", spanish: "encontrar" },
  { num: 32, inf: "flee", present: "fled", past: "fled", spanish: "huir" },
  { num: 33, inf: "fly", present: "flew", past: "flown", spanish: "volar" },
  { num: 34, inf: "forget", present: "forgot", past: "forgotten", spanish: "olvidar" },
  { num: 35, inf: "forgive", present: "forgave", past: "forgiven", spanish: "perdonar" },
  { num: 36, inf: "forsake", present: "forsook", past: "forsaken", spanish: "abandonar" },
  { num: 37, inf: "freeze", present: "froze", past: "frozen", spanish: "congelar" },
  { num: 38, inf: "get", present: "got", past: "got", spanish: "tener, obtener" },
  { num: 39, inf: "give", present: "gave", past: "given", spanish: "dar" },
  { num: 40, inf: "go", present: "went", past: "gone", spanish: "ir" },
  { num: 41, inf: "grind", present: "ground", past: "ground", spanish: "moler" },
  { num: 42, inf: "grow", present: "grew", past: "grown", spanish: "crecer" },
  { num: 43, inf: "hang", present: "hung", past: "hung", spanish: "colgar" },
  { num: 44, inf: "have", present: "had", past: "had", spanish: "tener" },
  { num: 45, inf: "hear", present: "heard", past: "heard", spanish: "oír" },
  { num: 46, inf: "hide", present: "hid", past: "hidden", spanish: "esconderse" },
  { num: 47, inf: "hit", present: "hit", past: "hit", spanish: "golpear" },
  { num: 48, inf: "hold", present: "held", past: "held", spanish: "tener, mantener" },
  { num: 49, inf: "hurt", present: "hurt", past: "hurt", spanish: "herir, doler" },
  { num: 50, inf: "keep", present: "kept", past: "kept", spanish: "guardar" },
  { num: 51, inf: "kneel", present: "knelt", past: "knelt", spanish: "arrodillarse" },
  { num: 52, inf: "know", present: "knew", past: "known", spanish: "saber" },
  { num: 53, inf: "lead", present: "led", past: "led", spanish: "encabezar" },
  { num: 54, inf: "learn", present: "learnt, learned", past: "learnt, learned", spanish: "aprender" },
  { num: 55, inf: "leave", present: "left", past: "left", spanish: "dejar" },
  { num: 56, inf: "lend", present: "lent", past: "lent", spanish: "prestar" },
  { num: 57, inf: "let", present: "let", past: "let", spanish: "dejar" },
  { num: 58, inf: "lie", present: "lay", past: "lain", spanish: "yacer" },
  { num: 59, inf: "lose", present: "lost", past: "lost", spanish: "perder" },
  { num: 60, inf: "make", present: "made", past: "made", spanish: "hacer" },
  { num: 61, inf: "mean", present: "meant", past: "meant", spanish: "significar" },
  { num: 62, inf: "meet", present: "met", past: "met", spanish: "conocer, encontrar" },
  { num: 63, inf: "pay", present: "paid", past: "paid", spanish: "pagar" },
  { num: 64, inf: "put", present: "put", past: "put", spanish: "poner" },
  { num: 65, inf: "quit", present: "quit, quitted", past: "quit, quitted", spanish: "abandonar" },
  { num: 66, inf: "read", present: "read", past: "read", spanish: "leer" },
  { num: 67, inf: "ride", present: "rode", past: "ridden", spanish: "montar, ir" },
  { num: 68, inf: "ring", present: "rang", past: "rung", spanish: "llamar por teléfono" },
  { num: 69, inf: "rise", present: "rose", past: "risen", spanish: "elevar" },
  { num: 70, inf: "run", present: "ran", past: "run", spanish: "correr" },
  { num: 71, inf: "say", present: "said", past: "said", spanish: "decir" },
  { num: 72, inf: "see", present: "saw", past: "seen", spanish: "ver" },
  { num: 73, inf: "sell", present: "sold", past: "sold", spanish: "vender" },
  { num: 74, inf: "send", present: "sent", past: "sent", spanish: "enviar" },
  { num: 75, inf: "set", present: "set", past: "set", spanish: "fijar" },
  { num: 76, inf: "sew", present: "sewed", past: "sewn", spanish: "coser" },
  { num: 77, inf: "shake", present: "shook", past: "shaken", spanish: "sacudir" },
  { num: 78, inf: "shine", present: "shone", past: "shone", spanish: "brillar" },
  { num: 79, inf: "shoot", present: "shot", past: "shot", spanish: "disparar" },
  { num: 80, inf: "show", present: "showed", past: "shown", spanish: "mostrar" },
  { num: 81, inf: "shrink", present: "shrank", past: "shrunk", spanish: "encoger" },
  { num: 82, inf: "shut", present: "shut", past: "shut", spanish: "cerrar" },
  { num: 83, inf: "sing", present: "sang", past: "sung", spanish: "cantar" },
  { num: 84, inf: "sink", present: "sank", past: "sunk", spanish: "hundir" },
  { num: 85, inf: "sit", present: "sat", past: "sat", spanish: "sentarse" },
  { num: 86, inf: "sleep", present: "slept", past: "slept", spanish: "dormir" },
  { num: 87, inf: "slide", present: "slid", past: "slid", spanish: "deslizar" },
  { num: 88, inf: "sow", present: "sowed", past: "sown", spanish: "sembrar" },
  { num: 89, inf: "speak", present: "spoke", past: "spoken", spanish: "hablar" },
  { num: 90, inf: "spell", present: "spelt, spelled", past: "spelt, spelled", spanish: "deletrear" },
  { num: 91, inf: "spend", present: "spent", past: "spent", spanish: "gastar" },
  { num: 92, inf: "spill", present: "spilt, spilled", past: "spilt, spilled", spanish: "derramar" },
  { num: 93, inf: "split", present: "split", past: "split", spanish: "partir" },
  { num: 94, inf: "spoil", present: "spoilt, spoiled", past: "spoilt, spoiled", spanish: "estropear" },
  { num: 95, inf: "spread", present: "spread", past: "spread", spanish: "extenderse" },
  { num: 96, inf: "stand", present: "stood", past: "stood", spanish: "estar de pie" },
  { num: 97, inf: "steal", present: "stole", past: "stolen", spanish: "robar" },
  { num: 98, inf: "sting", present: "stung", past: "stung", spanish: "picar" },
  { num: 99, inf: "stink", present: "stank", past: "stunk", spanish: "apestar" },
  { num: 100, inf: "strike", present: "struck", past: "struck", spanish: "golpear" },
  { num: 101, inf: "swear", present: "swore", past: "sworn", spanish: "jurar" },
  { num: 102, inf: "sweep", present: "swept", past: "swept", spanish: "barrer" },
  { num: 103, inf: "swim", present: "swam", past: "swum", spanish: "nadar" },
  { num: 104, inf: "take", present: "took", past: "taken", spanish: "tomar" },
  { num: 105, inf: "teach", present: "taught", past: "taught", spanish: "enseñar" },
  { num: 106, inf: "tear", present: "tore", past: "torn", spanish: "romper" },
  { num: 107, inf: "tell", present: "told", past: "told", spanish: "decir" },
  { num: 108, inf: "think", present: "thought", past: "thought", spanish: "pensar" },
  { num: 109, inf: "throw", present: "threw", past: "thrown", spanish: "lanzar" },
  { num: 110, inf: "tread", present: "trode", past: "trodden", spanish: "pisar" },
  { num: 111, inf: "understand", present: "understood", past: "understood", spanish: "entender" },
  { num: 112, inf: "wake", present: "woke", past: "woken", spanish: "despertarse" },
  { num: 113, inf: "wear", present: "wore", past: "worn", spanish: "llevar puesto" },
  { num: 114, inf: "weave", present: "wove", past: "woven", spanish: "tejer" },
  { num: 115, inf: "weep", present: "wept", past: "wept", spanish: "llorar" },
  { num: 116, inf: "win", present: "won", past: "won", spanish: "ganar" },
  { num: 117, inf: "wring", present: "wrung", past: "wrung", spanish: "retorcer" },
  { num: 118, inf: "write", present: "wrote", past: "written", spanish: "escribir" }
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

function Game01({ arrVerbos = [], toGuess = ["inf", "present", "past"] }) {

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

function isCorrect(arrVerbos = [], response = {}, formas = ["spanish", "inf", "present", "past"]) {
  for (const verbo of arrVerbos) {
    let bool = [];
    formas.forEach(formaVerbal => {
      bool.push(verbo[formaVerbal] == response[formaVerbal]);
    });
    if (bool.every((a) => a == true)) return true;
  }
  return false;
}

function Game02({ arrVerbos = [], toGuess = ["spanish", "inf", "present", "past"] }) {
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
                    console.log(aux);
                  } while (used.includes(verbo['num'] + '-' + formaVerbal));
                  used.push(verbo['num'] + '-' + formaVerbal);
                  console.log(used);
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
  const handleMinigame = () => setMinigame((minigame == 1) ? 2 : 1);

  const [gameKey, setGameKey] = useState(0);
  const handleGameKey = () => setGameKey(prev => prev + 1);

  let formVerbs;

  switch (form) {
    case 'infinitive':
      formVerbs = ['spanish', 'inf'];
      break;
    case 'present-past':
      formVerbs = ['spanish', 'present', 'past'];
      break;
    case 'mix':
      formVerbs = ['spanish', 'inf', 'present', 'past'];
      break;
  }
  let arrVerbos = getVerbForm(getVerbos(), formVerbs);
  return (
    <div className='contenido'>
      <h1 className='gameTitle'>{form}</h1>
      {(minigame == 1) ? <Game01 arrVerbos={arrVerbos} toGuess={formVerbs} key={gameKey} /> : <Game02 arrVerbos={arrVerbos} toGuess={formVerbs} key={gameKey} />}
      <GameHeader onChangeMinigame={handleMinigame} onRestart={handleGameKey} onBack={onBack} />
    </div>
  );
}

function MenuScreen({ onSelect }) {
  return (
    <div className='contenido'>
      <h1 className='gameTitle'>Selecciona las formas verbales que quieres practicar</h1>
      <div>
        <button onClick={() => onSelect('infinitive')}>Infinitivos</button>
        <button onClick={() => onSelect('present-past')}>Presente & Pasado</button>
        <button onClick={() => onSelect('mix')}>Mix</button>
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
