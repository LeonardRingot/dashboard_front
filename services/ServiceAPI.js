import axios from "axios"; 
export function requetePostConnexion( email, password){
    var data = JSON.stringify({
      "email": email,
      "password": password
    });
    var configConnexion = {
      method: 'post',
      url: 'http://localhost:5000/api/auth/login',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
  return axios(configConnexion);
  }


  export function requeteGetAllCandidats (nom, prenom, dateNaiss, adresse, codePostal, ville, email, Diplomes, Dispo, actif, numTel )
  {
    var data = JSON.stringify({
      "nom": nom,
      "prenom": prenom,
      "dateNaiss": dateNaiss,
      "adresse": adresse,
      "codePostal": codePostal,
      "ville": ville,
      "email": email,
      "Diplomes": Diplomes,
      "Dispo": Dispo,
      "actif": actif,
      "numTel": numTel
    });
    var configGetAllUsersCandidats = {
      method: 'get',
      url: 'http://localhost:5000/api/candidates',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
  return axios(configGetAllUsersCandidats);
  }