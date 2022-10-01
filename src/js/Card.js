import '../css/Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { ReactComponent as JSLogo } from '../img/js.svg';
import { ReactComponent as PythonLogo } from '../img/python.svg';
import { ReactComponent as HTMLLogo } from '../img/html.svg';
import { ReactComponent as CSSLogo } from '../img/css.svg';
import { ReactComponent as JavaLogo } from '../img/java.svg';
import { ReactComponent as RustLogo } from '../img/rust.svg';


function Card() {
  return (
    <div className="flex items-center justify-center my-32">
      <div className="card-background py-7 p-14 flex flex-col items-center justify-center rounded-lg card-items">
        <div className="">
          <img src={require('../img/avatar.png')} className="w-24 rounded-full h-auto"></img>
        </div>
        <div>
          <h1 className="text-white text-2xl font-bold">shard7</h1>
        </div>
        <div className="">
        <h2 className="text-gray-500 text-base font-bold">Introduction:</h2>
          <p className="text-white max-w-sm text-base left">
            👋 Hey there, I'm shard. 
            A passionate developer and cybersecurity enthusiast.
            I like creating projects and learning new things, feel free to contact me anytime.
          </p>
          <div className="languages my-5">
            <h2 className="text-gray-500 text-base font-bold">Known languages:</h2>
            <div className="flex flex-row w-36">
              <JSLogo/>
              <PythonLogo/>
              <HTMLLogo/>
              <CSSLogo/>
              <JavaLogo/>
            </div>
          </div>
          </div> 
        <div className="icons my-5">
          <a href="mailto:sh7user@gmail.com" target="_blank">
             <FontAwesomeIcon icon={faEnvelope} size="2x" transform="shrink-5" className="grow"/>
          </a>
          <a href="https://github.com/shard77" target="_blank">
             <FontAwesomeIcon icon={faGithub} size="2x" transform="shrink-5"  className="grow"/>
          </a>
          <a href="https://discord.com/users/267599095009509376" target="_blank">
            <FontAwesomeIcon icon={faDiscord} size="2x" transform="shrink-5"  className="grow"/>
          </a>
          <a href="https://www.instagram.com/shard.77/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} size="2x" transform="shrink-5"  className="grow"/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
