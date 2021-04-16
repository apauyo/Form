class Formulaire {
	constructor(el) {
		this._el = el; //Le formulaire
		
		this._elBtn = this._el.querySelector('[data-js-btn]'); //Bouton Postuler du formulaire
		
		this._elInputs = this._el.querySelectorAll('input'); //Tous les inputs
		
		this.init();
	}
	
	//Traitement initial du formulaire
	init = () => {
		this._elBtn.addEventListener('click', this.valideFormulaire);
		
		if(sessionStorage.getItem('inputs'))
			this.afficheInputs();
	}
	
	//Validation du formulaire
	valideFormulaire = (e) => {
		e.preventDefault();
		
		let valider = new ValideForm(this._elInputs);
		
		if(valider.estValide) {
			let champs = {};
			
			for(let input of this._elInputs) {
				champs[input.dataset.jsInput] = input.value;
			}
			
			sessionStorage.setItem('inputs', JSON.stringify(champs)); //Ajouter l'objet champs dans un sessionStorage
			
			window.location.href = 'index.php?Clients&action=Confirmation'; //Rediriger vers la page de confirmation
		}
	}

	//Récupérer les valeurs du sessionStorage et afficher dans le formulaire
	afficheInputs = () => {
		let sessionInputs = JSON.parse(sessionStorage.getItem('inputs')), //Objet inputs du sessionStorage
			tabInputs = [];
		
		for(let input in sessionInputs) {
			tabInputs.push(sessionInputs[input]);
		}
		
		for(let i = 0; i < this._elInputs.length; i++) {
			this._elInputs[i].value = tabInputs[i];
		}
	}
}