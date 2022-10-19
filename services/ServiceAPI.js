import axios from "axios"; 
export function requetePostConnexion(email, password){
    var data = JSON.stringify({
      "email": email,
      "password": password
    });
    var configConnexion = {
      method: 'post',
      url: 'http://localhost:5000/api/auths/login',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
  return axios(configConnexion);
  }


  export function requeteGetAllCandidats (firstname, lastname, address,zipCode,city )
  {
    var data = JSON.stringify({
      "firstname": firstname,
      "lastname":lastname
    });
    var dataLocalisations = JSON.stringify({
      "address": address,
      "zipCode":zipCode,
      "city" : city
    });
      
    
    var configGetAllUsersCandidats = {
      method: 'get',
      url: 'http://localhost:5000/api/candidate',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data,
      
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

  export function requeteGetAllLocalisation ()
  {
    var data = JSON.stringify({
      
    });
      
    
    var configGetAllUsersCandidats = {
      method: 'get',
      url: 'http://localhost:5000/api/localisations',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    return axios(configGetAllUsersCandidats);
  }

  export function requetePost(UserId,firstname,lastname,birthday){
    var data = JSON.stringify({
        "UserId":UserId,
        "firstname":firstname,
        "lastname":lastname,
        "birthday":birthday
        
      });
    var config = {
        method: 'post',
        url: 'http://localhost:5000/api/candidate',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
    return axios(config);
}

export function requeteUpdateProfil(UserId, firstname, lastname, birthday){
  
  var data = JSON.stringify({
      "UserId": UserId,
      "firstname": firstname,
      "lastname": lastname,
      "birthday": birthday,
    });
  var configUpdateProfile = {
      method: 'put',
      url: 'http://localhost:5000/api/candidate/' +id,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
  return axios(configUpdateProfile);
}

export function requeteGetAllEmployeurs (siret, structurename, UserId)
{
  var data = JSON.stringify({
    "siret": siret,
    "structurename":structurename,
    "UserId":UserId
  });

  var configGetAllUsersCandidats = {
    method: 'get',
    url: 'http://localhost:5000/api/employers',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data,
    
  };
  return axios(configGetAllUsersCandidats);
}

export function deleteCandidate (isActif)
{
  var data = JSON.stringify({
    "isActif": isActif
  });

  var configDeleteCandidateById = {
    method: 'delete',
    url: 'http://localhost:5000/api/candidate/' +id,
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data,
    
  };
  return axios(configDeleteCandidateById);
}


export function deleteEmployer (isActif)
{
  var data = JSON.stringify({
    "isActif": isActif
  });

  var configDeleteEmployerById = {
    method: 'delete',
    url: 'http://localhost:5000/api/employers/' +id,
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data,
    
  };
  return axios(configDeleteCandidateById);
}