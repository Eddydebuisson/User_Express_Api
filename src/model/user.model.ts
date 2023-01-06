export default class User {
  id!: number;
  nom: string;
  prenom: string;
  date_de_naissance?: string = "";
  date_inscription: string;
  nationalite?: string = "";

  constructor(
    nom: string,
    prenom: string,
    date_de_naissance: string,
    date_inscription: string,
    nationalite?: string
  ) {
    this.nom = nom;
    this.prenom = prenom;
    this.date_de_naissance = date_de_naissance;
    this.date_inscription = date_inscription;
    this.nationalite = nationalite;
  }

  formatDate = (date:Date):string => {
    const annee =date.getFullYear()
    const mois = date.getMonth()
    const jour = date.getDay()

    const heures = date.getHours()
    const minutes = date.getMinutes()
    const secondes = date.getSeconds()



    return `${jour}/${mois}/${annee} ${heures}:${minutes}:${secondes}`;
  }
}
