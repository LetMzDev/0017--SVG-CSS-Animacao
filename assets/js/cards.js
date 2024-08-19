class Cards
{
	constructor ()
	{
		this.posicao_Section_Dicas = document.getElementById ( 'section-dicas' );
		this.card_Esq = document.querySelector ( ".card-esq");
		this.card_Dir = document.querySelector ( ".card-dir");

	}

	calculo_Scroll ()
	{
		// Recebe o elemento 'section-dicas' a sua posição Y na tela
		const posicao = this.posicao_Section_Dicas.getBoundingClientRect()['y'];
		console.log (posicao);

		if ( posicao <= 293 )
		{
			this.card_Esq.style.transform = `translate( ${-posicao}% )`;
			this.card_Dir.style.transform = `translate( ${posicao}% )`;
		}
	}
}

export { Cards };
