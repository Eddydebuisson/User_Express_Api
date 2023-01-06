export default class User {
  id!: number;
  nom: string;
  prenom: string;
  date_de_naissance?: string = "";
  date_inscription: Date;
  nationalite?: string = "";

  constructor(nom: string, prenom: string, date_inscription: Date) {
    this.nom = nom;
    this.prenom = prenom;
    this.date_inscription = date_inscription;
  }
}
