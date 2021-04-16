class Confirmation {
	constructor(el) {
		this._el = el; //Div contenant la liste de confirmation des champs
		
		this._elUl = this._el.querySelector('ul'); //Ul de la liste
		
		this._elBtn = this._el.querySelector('[data-js-btn]'); //Bouton Soumettre
		
		this.sessionInputs = JSON.parse(sessionStorage.getItem('inputs')); //Objet inputs du sessionStorage

		this.init();
	}
	
	//Traitement initial de la confirmation
	init = () => {
		this._elBtn.addEventListener('click', this.ajouteClient);
				
		this.afficheListe();
	}
	
	//Récupérer les champs du sessionStorage et afficher la liste
	afficheListe = () => {
		let ul = '';
		
		for(let input in this.sessionInputs) {
			ul += `<li>${input} : ${this.sessionInputs[input]}</li>`;
		}
		
		this._elUl.innerHTML = ul;
	}
	
	//Ajouter client à la base de données
	ajouteClient = () => {
		let params = '';
		
		//Mettre les valeurs du sessionStorage dans les paramètres à envoyer
		for(let input in this.sessionInputs) {
			params += `&${input.replace(/\s/g, '').toLowerCase()}=${encodeURIComponent(this.sessionInputs[input])}`;
		}
		
		//Déclaration de l'objet XMLHttpRequest
        var xhr;
        xhr = new XMLHttpRequest();
        
        //Initialisation de la requête
        if (xhr) {

            //Ouverture de la requête : fichier recherché
            xhr.open('POST', 'index.php?Clients_AJAX&action=ajouteClient');
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

            xhr.addEventListener('readystatechange', () => {

                if (xhr.readyState === 4) {							
                    if (xhr.status === 200) {
                        // Les données ont été reçues
						
                        // Traitement du DOM
						this._el.innerHTML = xhr.responseText;
						
						//Effacer le sessionStorage
						sessionStorage.removeItem('inputs');
						
                    } else if (xhr.status === 404) {
                        console.log('Le fichier appelé dans la méthode open() n’existe pas.');
                    }
                }
            });

            // Envoi de la requête
            xhr.send(params);
        }
	}
}