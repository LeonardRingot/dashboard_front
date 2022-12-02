import axios from "axios";

export function requetePostConnexion(email, password) {
  
  var data = JSON.stringify({
    "email": email,
    "password": password
    
  });
  var configConnexion = {
    method: 'post',
    url: `${process.env.NEXT_PUBLIC_URL}auth/loginAdmin`,
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
    url: `${process.env.NEXT_PUBLIC_URL}candidates`,
    headers: {
      'Content-Type': 'application/json'
    }

  };
  return axios(configGetAllUsersCandidats);
}

export function requeteGetCandidatById(id) {
  var configGetCandidatsById = {
    method: 'get',
    url:`${process.env.NEXT_PUBLIC_URL}candidates/` + id,
    headers: {
      'Content-Type': 'application/json'
    }

  };
  return axios(configGetCandidatsById);
}

export function requeteGetEmployerById(id) {
  var configGetEmployerById = {
    method: 'get',
    url: `${process.env.NEXT_PUBLIC_URL}employers/` + id,
    headers: {
      'Content-Type': 'application/json'
    }

  };
  return axios(configGetEmployerById);
}
//requete inscription candidats

export function requetePost(firstname, lastname, birthday,wantToBe, password, passwordconf, email, phone, address, zipCode, city, periods, degrees) {
  let obj = periods?.map(((period) => {
    return { "id": parseInt(period) }
  }))
  let objDegree = degrees?.map(((degree) => {
    return { "id": parseInt(degree) }
  }))
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
    url: `${process.env.NEXT_PUBLIC_URL}candidates`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };
  return axios(config);
}
export function requetePostEmployers(siret, structurename, password,passwordconf, email, phone, address, zipCode, city, periods) {
  let obj = periods?.map(((period) => {
    return { "id": parseInt(period) }
  }))
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
    "periods": obj
  });
  var confiPostEmployers = {
    method: 'post',
    url: `${process.env.NEXT_PUBLIC_URL}employers`,
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
    url: `${process.env.NEXT_PUBLIC_URL}candidates/form/` + id,
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
    url: `${process.env.NEXT_PUBLIC_URL}employers/form/` + id,
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
    url: `${process.env.NEXT_PUBLIC_URL}employers`,
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
    url: `${process.env.NEXT_PUBLIC_URL}candidates/ `+ id,
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
    url: `${process.env.NEXT_PUBLIC_URL}employers/` + id,
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
    url: `${process.env.NEXT_PUBLIC_URL}/users/admin/all`,
    headers: {
      'Content-Type': 'application/json'
      
    },
    data: data
  };
  return axios(configGetAllUsersRoles);
}

export function requetePostAdmin(password, email, phone ) {
  
  var data = JSON.stringify({
 
    "password": password,
    "email": email,
    "phone": phone,
    "isActif": true
   
  });
  var configAdmin = {
    method: 'post',
    url: `${process.env.NEXT_PUBLIC_URL}users/admin`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };
  return axios(configAdmin);
}

export default function GetMyTokenId()
{
  
  
  var configAdminToken = {
    method: 'get',
    url: `${process.env.NEXT_PUBLIC_URL}users/tokens/1` ,
    headers: {
      'Content-Type': 'application/json'
    },
   
  };
  return axios(configAdminToken);
}

export function requeteVerifEmployeur(id, siret, structurename, email, phone, address, zipCode, city,periods, isActif ) {
  let obj = periods?.map(((period) => {
 
    return { "id": parseInt(period) }
  }))
  var data = JSON.stringify({
    "employer":{
      "siret": siret,
    "structurename": structurename
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

    
  });
  var configVerifsEmployers = {
    method: 'put',
    url: `${process.env.NEXT_PUBLIC_URL}employers/form/` + id,
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };
  return axios(configVerifsEmployers);
}