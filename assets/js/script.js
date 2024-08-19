import { Cards } from './cards.js';

// Iniciar no carregamento da tela
window.onload = () =>
{
	let anime_Cards = new Cards ();
	document.addEventListener ( 'scroll', anime_Cards.teste );
}