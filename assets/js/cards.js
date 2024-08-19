class Cards
{
	constructor ()
	{

	}

	calculo_Scroll ()
	{
		// Recebe o elemento 'section-dicas' a sua posição Y na tela
		const posicao = document.getElementById ( 'section-dicas' ).getBoundingClientRect()['y'];
		console.log (posicao);
	}

}

export { Cards };
