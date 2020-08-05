import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem (){
    return( 

<article className="teacher-item">
<header>
    
<img src="https://avatars1.githubusercontent.com/u/37146600?s=460&u=015abca501d1392779f36f5624e4aade4c79177f&v=4" alt="José Junior"/>
<div>
    <strong>José Junior</strong>
    <span>Física</span>
</div>
</header>
<p>
    Entusiasta da ciencia da natureza
    <br /> <br/>
    Sempre buscando novos conhecimentos na da astronimia fisica classica e moderna. Para estar sempre aprendendo mais.

</p>
<footer>

    <p>
        preço/hora
        <strong> 
            R$ 70:00
        </strong>
    </p>
    <button type="button">
        <img src={whatsappIcon} alt="whatsapp"/>
        Entrar em contato
    </button>
</footer>
</article>
    )
}

export default TeacherItem;



