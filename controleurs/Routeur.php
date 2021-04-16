<?php
	class Routeur {
		public static function route() {

			// Obtenir le controleur qui devra traiter la requète
			// Obtenir la query string
			$chaineRequete = $_SERVER["QUERY_STRING"];
			$posEperluette = strpos($chaineRequete, "&");
			$controleur = substr($chaineRequete, 0, $posEperluette);
			//var_dump("chaineRequete : " . $chaineRequete);
			//var_dump("posEperluette : " . $posEperluette);
			//var_dump("controleur : " . $controleur);
			
			if ($controleur != "") {
				// Chercher la classe du controleur
				$classe = "Controleur_" . $controleur;
			} else {	
				// Controleur par défaut
				$classe = "Controleur_Clients";
			}

			//var_dump("classe : " . $classe);
			
			// Vérifier que la classe existe
			if (class_exists($classe)) {
				// Dans $classe se trouve le nom de la classe ex : "Controleur_Clients_AJAX"
				$objetControleur = new $classe;
				$objetControleur->traite($_REQUEST);
			} else {
				die("Erreur 404! Le controleur n'existe pas.");
			}
		}
	}
?>