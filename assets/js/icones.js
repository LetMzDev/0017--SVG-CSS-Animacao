class Icones
{
	constructor ()
	{
		this.lista_Icones = document.querySelectorAll ( '.icone' );
	}

	anima_Icones ()
	{
		// Nome, tempo, escala, infinito, tipo
		gsap.to(this.lista_Icones, 0.5, {scale: 0.95, repeat: -1, yoyo: true})
	}
}

export { Icones }