class ValideForm {
	constructor(el) {
		this._el = el; //Inputs du formulaire
		
		this._courrielRegex = /(.+)@(.+){1,}\.(.+){1,}/; //Regex pour courriel
		
		this._postalRegex =  /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/; //Regex pour code postal
		
		this._estValide = true; //Booléen, valeur retournée par la validation
		
		this.valide();
	}
	
	//Validation des champs du formulaire
	valide = () => {
		for (let input of this._el) {
			if(input.required) //Champ requis, mais vide?
				!input.value ? this.ajouteErreur(input): this.enleveErreur(input);
			
			if(input.type == 'email') //Champ de type email, mais pas conforme?
				!this._courrielRegex.test(input.value) ? this.ajouteErreur(input): this.enleveErreur(input);
				
			if(input.dataset.jsInput == 'Code postal') //Champ code postal, mais pas conforme?
				!this._postalRegex.test(input.value) ? this.ajouteErreur(input) : this.enleveErreur(input);
		}
	}
	
	//Retourne la validité du formulaire
	get estValide() {
		return this._estValide;
	}
	
	//Ajoute la classe error dans l'input
	ajouteErreur = (input) => {
		input.classList.add('error');
		this._estValide = false;
	}
	
	//Retire la classe erreur dans l'input
	enleveErreur = (input) => {
		input.classList.remove('error');
	}
}