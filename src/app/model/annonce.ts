import { Entreprise } from './entreprise';

export class Annonce {

    id : number;
	
	titrePoste : string = "";
	
	descriptionPoste : string = "";
	
	typeContrat : string = "";
		
	niveauEtude : string = "";
	
	experience : string = "";
	
	lieuPoste : string = "";

	domaine = Object.create({id:0, libelle:""});
	
	datePublication : string;

	statut : string;

	entreprise : Entreprise = new Entreprise();

}
