import { Cards } from './cards.js';
import { Icones } from './icones.js';
import { Footer } from './footer.js';

// Iniciar no carregamento da tela
window.onload = () =>
{
	const anima_Cards = new Cards ();
	document.addEventListener ( 'scroll', anima_Cards.scroll_Cards.bind ( anima_Cards ));

	const icones = new Icones ();
	icones.anima_Icones ();

	const footer = new Footer ();
	footer.efeito_Onda ();
}
