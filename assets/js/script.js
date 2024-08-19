import { Cards } from './cards.js';

// Iniciar no carregamento da tela
window.onload = () =>
{
	let anima_Cards = new Cards ();
	document.addEventListener ( 'scroll', anima_Cards.scroll_Cards.bind ( anima_Cards ));
}
