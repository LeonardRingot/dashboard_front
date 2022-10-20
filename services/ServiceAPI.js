import axios from "axios"; 
// requete connexion admin
export function requetePostConnexion(email, password){
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

// requete affichage candidats page consultcandidat.js

  export function requeteGetAllCandidats (firstname, lastname, address,zipCode,city )
  {
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

  export function requeteGetCandidatById(id){
    var configGetCandidatsById = {
      method: 'get',
      url: 'http://localhost:5000/api/candidates/'+id,
      headers: { 
        'Content-Type': 'application/json'
      }
      
    };
    return axios(configGetCandidatsById);
  }
// requete affichage localisations
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
//requete inscription candidats

  export function requetePost(firstname,lastname,birthday, password, email, phone, address, zipCode, city, periods, degrees){
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
        "periods": [periods?.map((period) => {
          
          return {"id": period}
        })
        ],
        "degrees": [degrees?.map((degree) => {
          
          return {"id": degree}
        })
        ]
      });
    var config = {
        method: 'post',
        url: 'http://localhost:5000/api/candidates',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
    return axios(config);
}
export function requetePostEmployers(siret, structurename, password, email, phone, address, zipCode, city, periods){
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
      
        return {"id": period}
      })
      ]
    });
  var confiPostEmployers = {
      method: 'post',
      url: 'http://localhost:5000/api/employers',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
  return axios(confiPostEmployers);
}

//requete mis a jour candidats
export function requeteUpdateProfil(id, firstname,lastname,birthday, email, phone, address, zipCode, city, periods, degrees){
  
  var data = JSON.stringify({
    "candidate": {
      "firstname": firstname,
      "lastname": lastname,
      "birthday": birthday
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
    "periods": [periods?.map((period) => {
      
      return {"id": period}
    })
    ],
    "degrees": [degrees?.map((degree) => {
      
      return {"id": degree}
    })
    ]
  });
  var configUpdateProfile = {
      method: 'put',
      url: 'http://localhost:5000/api/candidates/' +id,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
  return axios(configUpdateProfile);
}
// requete mis à jour employers
export function requeteUpdateEmployers(UserId, siret, structurename){
  
  var data = JSON.stringify({
      "UserId": UserId,
      "siret": siret,
      "structurename": structurename
    });
  var configUpdateEmployers = {
      method: 'put',
      url: 'http://localhost:5000/api/employers/' +id,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
  return axios(configUpdateEmployers);
}

// requete affichage employers
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
// requete delete ( ou archivage ) des candidats
export function deleteCandidate (id)
{

  var configDeleteCandidateById = {
    method: 'delete',
    url: 'http://localhost:5000/api/candidates/' +id,
    headers: { 
      'Content-Type': 'application/json'
    }
    
  };
  return axios(configDeleteCandidateById);
}

// requete delete ( ou archivage ) des employers
export function deleteEmployer (id)
{

  var configDeleteEmployerById = {
    method: 'delete',
    url: 'http://localhost:5000/api/employers/' +id,
    headers: { 
      'Content-Type': 'application/json'
    },
    
  };
  return axios(configDeleteEmployerById);
}

export function requeteGetAllDegree ()
{
  var data = JSON.stringify({
    
  });
    
  
  var configGetAllUsersDegree = {
    method: 'get',
    url: 'http://localhost:5000/api/degrees',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  return axios(configGetAllUsersDegree);
}

