<?php
	class Controleur_Clients_AJAX extends Controleur_Clients {	
		
		// La fonction qui sera appelée par le routeur
		public function traite(array $params) {				
            
            if (isset($params["action"])) {

				// $data et $vue vides par défaut
				$data = array();
                $vue = "";
                
				// Switch en fonction de l'action qui nous est envoyée
				// Ce switch détermine la vue $vue et obtient le modèle $data
				switch ($params["action"]) {
                    case "ajouteClient":
                        if (isset($params["nom"]) && isset($params["prenom"]) && isset($params["adresse"]) && isset($params["codepostal"]) && isset($params["courriel"])) {
							$modeleClients = new Modele_Clients();
                            $valide = $modeleClients->ajouteClient($params["nom"], $params["prenom"], $params["adresse"], $params["codepostal"], $params["courriel"]);

                            if ($valide) {									
								$vue = "Succes";
                                $this->afficheVue($vue);
                            } else {
                                echo "ERROR";
                            }
                        } else {													
                            echo "ERROR";
                        }
                        break;	
            	
					default:
						echo "ERROR";		
				}						
			} else {
				// Action par défaut
				echo "ERROR";					
			}			
		}	
	}
?>