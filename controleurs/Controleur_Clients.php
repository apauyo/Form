<?php
	class Controleur_Clients extends BaseControleur {
	
		// La fonction qui sera appelée par le routeur
		public function traite(array $params) {

			$this->afficheVue("Head");
			
			if (isset($params["action"])) {

				// $data vide par défaut
				$data = array();
				
				// Switch en fonction de l'action qui nous est envoyée
				// Ce switch détermine la vue $vue et obtient le modèle $data
				switch ($params["action"]) {
					case "Confirmation":
						$vue = "Confirmation";
						$this->afficheVue($vue);
						break;
					
					default:
						$vue = "Formulaire";		
						$this->afficheVue($vue);
						break;
				}			
			} else {
				// Action par défaut
				$vue = "Formulaire";		
				$this->afficheVue($vue);
			}
			$this->afficheVue("Footer");
		}
	}
?>