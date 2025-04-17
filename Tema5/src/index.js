import _ from 'lodash';
import './estilo.css'
import Imagen from './calendar.jpg';
import './estilo.scss';



function componente(){
    const elemento = document.createElement('div');
    elemento.innerHTML = _.join(['Hola', 'Webpack'], ' ');
    elemento.classList.add('fondo');
    const myImage = new Image();
    myImage.src = Imagen;
    elemento.appendChild(myImage);
    return elemento;
}

document.body.appendChild(componente());