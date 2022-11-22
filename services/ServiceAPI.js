import axios from "axios";
// requete connexion admin
import { getItem, addItem, removeItem } from './LocaleStorage';
const URL = 'http://localhost:5000/api/';
//const URL = 'http://alexis-cuvillier.online:5000/api/';
export function requetePostConnexion(email, password) {
  var data = JSON.stringify({
    "email": email,
    "password": password
    
  });
  var configConnexion = {
    method: 'post',
    url: `${URL}auth/loginAdmin`,
    headers: {
      'Content-Type': 'application/json'
    },

    data: data
  };
  return axios(configConnexion);
}

export function hasAuthenticated() {
  const token = getItem('mytoken');
  const result = token ? tokenIsValid(token) : false;

  if (false === result) {
      removeItem('mytoken');
  }

  return result;
}

// requete affichage candidats page consultcandidat.js

export function requeteGetAllCandidats(firstname, lastname, address, zipCode, city) {
  var configGetAllUsersCandidats = {
    method: 'get',
    url: `${URL}candidates`,
    headers: {
      'Content-Type': 'application/json'
    }

  };
  return axios(configGetAllUsersCandidats);
}

export function requeteGetCandidatById(id) {
  var configGetCandidatsById = {
    method: 'get',
    url:`${URL}candidates/` + id,
    headers: {
      'Content-Type': 'application/json'
    }

  };
  return axios(configGetCandidatsById);
}

export function requeteGetEmployerById(id) {
  var configGetEmployerById = {
    method: 'get',
    url: `${URL}employers/` + id,
    headers: {
      'Content-Type': 'application/json'
    }

  };
  return axios(configGetEmployerById);
}
//requete inscription candidats

export function requetePost(firstname, lastname, birthday,wantToBe, password, passwordconf, email, phone, address, zipCode, city, periods, degrees) {
  console.log(periods);
  let obj = periods?.map(((period) => {
    return { "id": parseInt(period) }
  }))
  let objDegree = degrees?.map(((degree) => {
    return { "id": parseInt(degree) }
  }))
  console.log(obj);
  var data = JSON.stringify({
    "candidate": {
      "firstname": firstname,
      "lastname": lastname,
      "birthday": birthday,
      "wantToBe": wantToBe
    },
    "users": {
      "password": password,
      "passwordconf":passwordconf,
      "email": email,
      "phone": phone,
      "isActif": true
    },
    "localisation": {
      "address": address,
      "zipCode": zipCode,
      "city": city
    },
    "periods": obj
    ,
    "degrees": objDegree
  });
  var config = {
    method: 'post',
    url: `${URL}candidates`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };
  return axios(config);
}
export function requetePostEmployers(siret, structurename, password,passwordconf, email, phone, address, zipCode, city, periods) {
  console.log(periods);
  var data = JSON.stringify({
    "employer": {
      "siret": siret,
      "structurename": structurename
    },
    "users": {
      "password": password,
      "passwordconf":passwordconf,
      "email": email,
      "phone": phone,
      "isActif": false
    },
    "localisation": {
      "address": address,
      "zipCode": zipCode,
      "city": city
    },
    "periods": [periods?.map((period) => {

      return { "id": period }
    })
    ]
  });
  var confiPostEmployers = {
    method: 'post',
    url: `${URL}employers`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };
  return axios(confiPostEmployers);
}

//requete mis a jour candidats
export function requeteUpdateProfil(id, firstname, lastname, password, passwordconf, email, phone, isActif, address,  zipCode, city, periods, degrees) {
  let obj = periods?.map(((period) => {
    return { "id": parseInt(period) }
  }))
  let objDegree = degrees?.map(((degree) => {
    return { "id": parseInt(degree) }
  }))
  
  console.log(city);
  var data = JSON.stringify({
    "candidate": {
      "firstname": firstname,
      "lastname": lastname,
    },
    "users": {
      "password":password,
      "passwordconf": passwordconf,
      "email": email,
      "phone": phone,
      "isActif": isActif
    },
    "localisation": {
      "address": address,
      "zipCode": zipCode,
      "city": city
    }, 
    "periods": obj
    ,
    "degrees": objDegree
  });
  var configUpdateProfile = {
    method: 'put',
    url: `${URL}candidates/form/` + id,
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };
  return axios(configUpdateProfile);
}
// requete mis à jour employers
export function requeteUpdateEmployers(id, siret, structurename,password,passwordconf, email, phone, address, zipCode, city,periods ) {
  let obj = periods?.map(((period) => {
 
    return { "id": parseInt(period) }
  }))
  var data = JSON.stringify({
    "employer":{
      "siret": siret,
    "structurename": structurename
    }, 
    "users": {
      "password":password,
      "passwordconf":passwordconf,
      "email": email,
      "phone": phone,
      "isActif": false
    },
    "localisation": {
      "address": address,
      "zipCode": zipCode,
      "city": city
    }, 
    "periods": obj

    
  });
  var configUpdateEmployers = {
    method: 'put',
    url: `${URL}employers/form/` + id,
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };
  return axios(configUpdateEmployers);
}

// requete affichage employers
export function requeteGetAllEmployeurs(siret, structurename, UserId) {
  
  var configGetAllUsersEmployers = {
    method: 'get',
    url: `${URL}employers`,
    headers: {
      'Content-Type': 'application/json'
    },
   

  };
  return axios(configGetAllUsersEmployers);
}
// requete delete ( ou archivage ) des candidats
export function deleteCandidate(id) {

  var configDeleteCandidateById = {
    method: 'delete',
    url: `${URL}candidates/ `+ id,
    headers: {
      'Content-Type': 'application/json'
    }

  };
  return axios(configDeleteCandidateById);
}

// requete delete ( ou archivage ) des employers
export function deleteEmployer(id) {

  var configDeleteEmployerById = {
    method: 'delete',
    url: `${URL}employers/` + id,
    headers: {
      'Content-Type': 'application/json'
    },

  };
  return axios(configDeleteEmployerById);
}
export function requeteGetAllAdmin()
{
  var data = JSON.stringify({
    
  });
  var configGetAllUsersRoles = {
    method: 'get',
    url: `${URL}/users/admin/all`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };
  return axios(configGetAllUsersRoles);
}

export function requetePostAdmin(password, email, phone ) {
  console.log(email)
  var data = JSON.stringify({
 
    "password": password,
    "email": email,
    "phone": phone,
    "isActif": true
   
  });
  var configAdmin = {
    method: 'post',
    url: `${URL}users/admin`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };
  return axios(configAdmin);
}

