import '../css/Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faArrowUpRightFromSquare, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Card() {
  return (
    <div className="flex items-center justify-center my-32">
      <div className="card-background py-7 flex flex-col items-center justify-center rounded-lg card-items w-full max-w-xl">
        <div className="">
          <img src={require('../img/avatar.jpg')} className="w-20 rounded-full h-20"></img>
        </div>
        <div>
          <h1 className="text-white text-2xl font-bold">Léon Gessner</h1>
        </div>
        <div className="mt-2 w-full ml-44">
        <h2 className="text-gray-500 text-base font-bold">Introduction:</h2>
          <p className="text-white max-w-sm text-base left">
            👋 Jeune étudiant en cybersécurité, en recherche d'un stage de 6 à 12 semaines à partir de mai 2023.
          </p>
        
          <div className="interests mt-3">
            <h2 className="text-gray-500 text-base font-bold">Centres d'interets:</h2>
            <p className="text-white max-w-sm text-base left">
              Passioné par la création de projets & la sécurité informatique. Je passe mon temps libre à développer mes compétences en programmation et en cybersécurité.
            </p>
          </div>
          <div className="capacity mt-5">
            <h2 className="text-gray-500 text-base font-bold">Capacités:</h2>
            <p class="text-white max-w-sm text-base left mb-1">
              Développement d'applications web (Front-end & Back-end).
              <br></br>
              Scripting (Python, Bash, Rust, NodeJS).
              <br></br>
            </p>
            <a className="text-blue-500 text-base font-bold hover:text-blue-400" href="https://shard7.fr/">Voir mon site personnel <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a>
          </div>
          </div> 
          
        <div className="icons my-5">
          <a href="mailto:leon.gsr@proton.me" target="_blank">
             <FontAwesomeIcon icon={faEnvelope} size="2x" transform="shrink-5" className="grow"/>
          </a>
          <a href="https://github.com/shard77" target="_blank">
             <FontAwesomeIcon icon={faGithub} size="2x" transform="shrink-5"  className="grow"/>
          </a>
          <a href="https://www.linkedin.com/in/l%C3%A9on-gessner-078635252/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="2x" transform="shrink-5"  className="grow"/>
          </a>
          <a href="https://www.linkedin.com/in/l%C3%A9on-gessner-078635252/" target="_blank">
            <FontAwesomeIcon icon={faBookOpen} size="2x" transform="shrink-5"  className="grow"/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;