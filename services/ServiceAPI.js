import axios from "axios";
// requete connexion admin
export function requetePostConnexion(email, password) {
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
    data: data
  };
  return axios(configConnexion);
}

// requete affichage candidats page consultcandidat.js

export function requeteGetAllCandidats(firstname, lastname, address, zipCode, city) {
  var configGetAllUsersCandidats = {
    method: 'get',
    url: 'http://localhost:5000/api/candidates',
    headers: {
      'Content-Type': 'application/json'
    }

  };
  // var configGetAllCandidatsLocalisations = {
  //   method: 'get',
  //   url: 'http://localhost:5000/api/localisations',
  //   headers: { 
  //     'Content-Type': 'application/json'
  //   },
  //   dataLocalisations :dataLocalisations
  // };

  return axios(configGetAllUsersCandidats);
}

export function requeteGetCandidatById(id) {
  var configGetCandidatsById = {
    method: 'get',
    url: 'http://localhost:5000/api/candidates/' + id,
    headers: {
      'Content-Type': 'application/json'
    }

  };
  return axios(configGetCandidatsById);
}

export function requeteGetEmployerById(id) {
  var configGetEmployerById = {
    method: 'get',
    url: 'http://localhost:5000/api/employers/' + id,
    headers: {
      'Content-Type': 'application/json'
    }

  };
  return axios(configGetEmployerById);
}


// requete affichage localisations
export function requeteGetAllLocalisation() {
  var data = JSON.stringify({

  });


  var configGetAllUsersCandidats = {
    method: 'get',
    url: 'http://localhost:5000/api/localisations',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };
  return axios(configGetAllUsersCandidats);
}
//requete inscription candidats

export function requetePost(firstname, lastname, birthday, password, email, phone, address, zipCode, city, periods, degrees) {
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
      "birthday": birthday
    },
    "users": {
      "password": password,
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
    url: 'http://localhost:5000/api/candidates',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };
  return axios(config);
}
export function requetePostEmployers(siret, structurename, password, email, phone, address, zipCode, city, periods) {
  console.log(periods);
  var data = JSON.stringify({
    // "UserId":UserId,
    // "firstname":firstname,
    // "lastname":lastname,
    // "birthday":birthday,
    // "password":password,
    // "email": email,
    // "phone": phone,
    // "address": address,
    // "zipCode":zipCode,
    // "city":city,
    // "periods:":periods,
    // "degrees": degrees
    "employer": {
      "siret": siret,
      "structurename": structurename
    },
    "users": {
      "password": password,
      "email": email,
      "phone": phone,
      "isActif": true
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
    url: 'http://localhost:5000/api/employers',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };
  return axios(confiPostEmployers);
}

//requete mis a jour candidats
export function requeteUpdateProfil(id, firstname, lastname, email, phone,isActif, address,  zipCode, city, periods, degrees) {
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
    url: 'http://localhost:5000/api/form/candidat/' + id,
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };
  return axios(configUpdateProfile);
}
// requete mis à jour employers
export function requeteUpdateEmployers(id, siret, structurename, email, phone, address, zipCode, city,periods ) {
  let obj = periods?.map(((period) => {
    return { "id": parseInt(period) }
  }))
  console.log(siret);
  var data = JSON.stringify({
    "employer":{
      "siret": siret,
    "structurename": structurename
    }, 
    "users": {
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

    
  });
  var configUpdateEmployers = {
    method: 'put',
    url: 'http://localhost:5000/api/form/employers/' + id,
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
    url: 'http://localhost:5000/api/employers',
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
    url: 'http://localhost:5000/api/candidates/' + id,
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
    url: 'http://localhost:5000/api/employers/' + id,
    headers: {
      'Content-Type': 'application/json'
    },

  };
  return axios(configDeleteEmployerById);
}

export function requeteGetAllDegree() {
  var data = JSON.stringify({

  });


  var configGetAllUsersDegree = {
    method: 'get',
    url: 'http://localhost:5000/api/degrees',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };
  return axios(configGetAllUsersDegree);
}

export function requeteGetAllAdmin()
{
  var data = JSON.stringify({
  });
  var configGetAllUsersRoles = {
    method: 'get',
    url: 'http://localhost:5000/api/users',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };
  return axios(configGetAllUsersRoles);
}

export function requetePostAdmin(firstname, lastname, birthday, password, email, phone, address, zipCode, city, role) {
  
  var data = JSON.stringify({
    "candidate": {
      "firstname": firstname,
      "lastname": lastname,
      "birthday": birthday
    },
    "users": {
      "password": password,
      "email": email,
      "phone": phone,
      "isActif": true
    },
    "localisation": {
      "address": address,
      "zipCode": zipCode,
      "city": city
    },
    "roles":{
      "role:": role
    }
  });
  var configAdmin = {
    method: 'post',
    url: 'http://localhost:5000/api/users',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };
  return axios(configAdmin);
}