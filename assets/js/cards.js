class Cards
{
	constructor ()
	{
		this.posicao_Section_Dicas = document.getElementById ( 'section-dicas' );
		this.card_Esq = document.querySelector ( ".card-esq");
		this.card_Dir = document.querySelector ( ".card-dir");
	}

	scroll_Cards ()
	{
		window.requestAnimationFrame ( this.calculo_Scroll.bind ( this ));
	}

	calculo_Scroll ()
	{
		// Recebe o elemento 'section-dicas' a sua posição Y na tela
		const posicao = this.posicao_Section_Dicas.getBoundingClientRect()['y'];
		console.log (posicao);

		if ( posicao >= 25 )
		{
			// this.card_Esq.style.transform = `rotateY( ${( -posicao + 20 ) / 2 }deg)`;
			// this.card_Dir.style.transform = `rotateY( ${( posicao + 20 ) / 2 }deg)`;
			this.card_Esq.style.transform = `translate( ${( -posicao + 25 ) / 10 }% )`;
			this.card_Dir.style.transform = `translate( ${( posicao - 25 ) / 10 }% )`;
		}
	}
}

export { Cards };
