import { useRef, useState } from 'react'
import logo from './logo.svg';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import verbos from './verbos';
import alambre from './assets/alambre.jpg';

function getVerbos(n = 5, prev = []) {
  let arr = [];
  while (arr.length < n) {
    let rand = Math.floor(Math.random() * verbos.length);
    if (verbos[rand] && !arr.includes(verbos[rand]) && !prev.includes(verbos[rand])) {
      arr.push(verbos[rand]);
    }
  }
  return arr;
}

function Game01({ arrVerbos = [], toGuess = ["spanish", "inf", "pastsimple", "pastparticle"] }) {

  const handleSolution = () => {
    let divs = document.querySelectorAll('div.solution');
    divs.forEach((elem) => elem.style.visibility = 'visible');
  };

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
              <th className='bg-transparent'>{translate(formaVerbal)}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {arrVerbos.map((verbo, index) =>
          (<tr key={verbo['num']}>
            {toGuess.map((formaVerbal) => (
              <td className='bg-transparent' key={formaVerbal}>
                {toGuess.indexOf(formaVerbal) == 0 ? verbo[formaVerbal] :
                  (
                    <>
                      <input className="form-control form-control-sm" type='text' onBlur={(event) => handleResponse(event, index, formaVerbal)}></input>
                      <div className='solution'>{verbo[formaVerbal]}</div>
                    </>
                  )}
              </td>
            ))}
          </tr>))
          }
        </tbody>
      </table>
      <button onClick={handleSolution} className='btn btn-sm btn-warning btn-solution'>Ver Solucións</button>
    </div>
  );
}

function translate(str = '') {
  switch (str) {
    case 'spanish':
      return 'Castellano';
    case 'pastsimple':
      return 'Pasado Simple';
    case 'pastparticle':
      return 'Participio';
    case 'inf':
      return 'Infinitivos';
    case 'past':
      return 'Simple & Participio';
    case 'mix':
      return 'MIX';
  }
}

function invert(arr) {
  let spanish_i = arr.indexOf('spanish');
  let inf_i = arr.indexOf('inf');

  if (spanish_i > -1) arr[spanish_i] = 'inf';
  if (inf_i > -1) arr[inf_i] = 'spanish';
  return arr;
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

  let arrButtons = [];

  const addButtons = () => {
    let inputs = document.querySelectorAll('button');
    inputs.forEach((elem) => {
      if (elem.hasAttribute('value')) arrButtons.push(elem);
    })
  }

  const handleSolution = () => {
    let colors = ['lavender', 'peachpuff', 'mintcream', 'lemonchiffon', 'lightskyblue'];
    addButtons();

    arrButtons.forEach(event => {
      let [verbo, forma] = event.value.split('-');
      let index = arrVerbos.findIndex(v => v[forma] == verbo);
      if(!event.style.background.includes('lightgreen')) event.style.background = colors[index];
    });
  }

  const used = [];
  return (
    <div className='game02'>
      <table className='table'>
        <thead>
          <tr>
            {toGuess.map((formaVerbal) => (
              <th className='bg-transparent' key={formaVerbal}>{translate(formaVerbal)}</th>
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
                    <button className="btn btn-outline-primary btn-sm" onClick={(event) => handleResponse(event, verbo, formaVerbal)} value={verbo[formaVerbal] + '-' + formaVerbal}>{verbo[formaVerbal]}</button>
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
      <button onClick={handleSolution} className='btn btn-warning btn-sm btn-solution'>Ver Solucións</button>
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
    case 'inf':
      formVerbs = ['spanish', 'inf'];
      break;
    case 'past':
      formVerbs = ['spanish', 'pastsimple', 'pastparticle'];
      break;
    case 'mix':
      formVerbs = ['spanish', 'inf', 'pastsimple', 'pastparticle'];
      break;
  }
  const refVerbos = useRef([]);
  const handleVerbos = () => {
    let arrVerbos = getVerbos(5, refVerbos.current);
    refVerbos.current = arrVerbos;
    return arrVerbos;
  }

  let game = null;
  switch (minigame) {
    case 1:
      game = <Game01 arrVerbos={handleVerbos()} toGuess={formVerbs} key={gameKey} />
      break;
    case 2:
      game = <Game01 arrVerbos={handleVerbos()} toGuess={invert(formVerbs)} key={gameKey} />
      break;
    case 3:
      game = <Game02 arrVerbos={handleVerbos()} toGuess={formVerbs} key={gameKey} />
      break;
  }

  return (
    <div className='contenido'>
      <h1 className='text-center fw-bold mt-5'>{translate(form)}</h1>
      {game}
      <GameHeader onChangeMinigame={handleMinigame} onRestart={handleGameKey} onBack={onBack} />
    </div>
  );
}

function MenuScreen({ onSelect }) {
  return (
    <div className='container'>
      <h1 className='gameTitle text-danger fw-bold uppercase mx-auto'>Verbos</h1>
      <div className='d-flex flex-column align-items-end mx-5 my-5'>
        <button className='btn btn-danger fw-bold fst-italic my-1' onClick={() => onSelect('inf')}>Infinitivos</button>
        <button className='btn btn-danger fw-bold fst-italic my-1' onClick={() => onSelect('past')}>Pasado simple y participio</button>
        <button className='btn btn-danger fw-bold fst-italic my-1' onClick={() => onSelect('mix')}>Mix</button>
      </div>
    </div>
  );
}

function App() {
  const [formSetting, setFormSetting] = useState(null);
  const handleFormSetting = (value) => setFormSetting(value);
  const handleBackForm = () => setFormSetting(null);

  return (
    <div className={formSetting ? 'folio-background' : 'libreta-background'} >
      {!formSetting ? (
        <MenuScreen onSelect={handleFormSetting} />
      ) : (
        <GameScreen form={formSetting} onBack={handleBackForm} />
      )}
    </div>
  );
}

export default App;
