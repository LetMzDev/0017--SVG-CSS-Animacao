class Footer
{
	constructor ()
	{
		this.filtro_Turbulencia = document.getElementById ( "filtro-turbulencia" );
	}

	efeito_Onda ()
	{
		gsap.to(this.filtro_Turbulencia, 20,
		{
			attr: {
				baseFrequency: 0.03,
			}, 
			repeat: -1,
			yoyo: true
		})
	}
}

export { Footer }