<?php
	class Modele_Clients extends TemplateDAO {

		public function getTable() {
			return "clients";
		}	

		public function ajouteClient($nom, $prenom, $adresse, $codepostal, $courriel) {		
			try {
				$stmt = $this->connexion->prepare("INSERT into clients (nom, prenom, adresse, codepostal, courriel) VALUES (:nom, :prenom, :adresse, :codepostal, :courriel)");
				$stmt->execute(array(":nom" => $nom, ":prenom" => $prenom, ":adresse" => $adresse, ":codepostal" => $codepostal, ":courriel" => $courriel));
				return 1;
			}	
			catch (Exception $exc) {
				return 0;
			}
		}
	}
?>