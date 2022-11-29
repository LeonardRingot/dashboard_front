import styles from '../styles/Home.module.css'
export default function CardInfoPerso()
{
    return(
        <>
        <h1>/////////////////////////////////////// EN COURS DE DEV ///////////////</h1>
<div class="col py-3">
            <div class="container">
{/* <form class="row g-3"  id="register_form"  onSubmit={ScriptForm} action='' method="post">
        <div class="col-md-6">
             <label htmlFor='firstname'>Prénom:</label>
             <input onChange={handleChange} type="text" class="form-control" name="firstname" />
          </div>
          <div class="col-md-6">
             <label htmlFor='lastname'>Nom:</label>
             <input onChange={handleChange} type="text" class="form-control" name="lastname" />
           </div>
        <div class="col-md-6"> 
          <label htmlFor='birthday'>Date de naissance:</label>
          <input onChange={handleChange} type="date"  class="form-control" name="birthday" />
        </div>
        <div class="col-md-6">
             <label htmlFor='wantToBe'>wantToBe:</label>
             <select onChange={handleChange}  class="form-control" name="wantToBe" >
             <option value="">--Please choose an option--</option>
             <option value="animateur">animateur</option>
             <option value="directeur">directeur</option>
             </select>
           </div>
        <div class="col-md-6">
          <label htmlFor='password'>Mot de passe:</label>
          <input onChange={handleChange} type="password"  class="form-control" name="password" />
          </div>
          <div class="col-md-6">
          <label htmlFor='passwordconf'>Mot de passe conf:</label>
          <input onChange={handleChange} type="password"  class="form-control" name="passwordconf" />
          </div>
          <div class="col-md-6">
          <label htmlFor='email'>Email:</label>
          <input onChange={handleChange} type="email"  class="form-control" name="email" />
          </div>
          <div class="col-md-6">
          <label htmlFor='phone'>Numéro de téléphone:</label>
          <input onChange={handleChange} type="tel"  class="form-control" name="phone" />
          </div>
          <div class="col-12">
          <label htmlFor='address'>Adresse:</label>
          <input onChange={handleChange} type="text"  class="form-control" name="address" />
          </div>
          <div class="col-md-2">
          <label htmlFor='zipCode'>Code Postal:</label>
          <input onChange={handleChange} type="text"  class="form-control" name="zipCode" />
          </div>
          <div class="col-md-4">
          <label htmlFor='city'>Ville:</label>
          <input onChange={handleChange} type="text"  class="form-control" name="city" />
          </div>
          <fieldset name="periods"id='periods'>
          <legend >Périodes disponibles</legend>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} class="form-check-input" type="checkbox" id="1" name="periods" value="1"/>
            <label htmlFor="1">Vacances de février</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange}class="form-check-input" type="checkbox" id="2" name="periods" value="2"/>
            <label htmlFor="2">Vacances d’avril</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} class="form-check-input" type="checkbox" id="3" name="periods" value="3"/>
            <label htmlFor="3">Vacances juillet</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange}class="form-check-input" type="checkbox" id="4" name="periods" value="4"/>
            <label htmlFor="4">Vacances Août</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} class="form-check-input" type="checkbox" id="5" name="periods" value="5"/>
            <label htmlFor="5">Vacances Octobre</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange}class="form-check-input" type="checkbox" id="6" name="periods" value="6"/>
            <label htmlFor="6">Vacances Noël</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} class="form-check-input" type="checkbox" id="7" name="periods" value="7"/>
            <label htmlFor="7">Mercredi</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} class="form-check-input" type="checkbox" id="8" name="periods" value="8"/>
            <label htmlFor="8">Samedi</label>
          </div>
      </fieldset>
      <fieldset name="degrees" id='degrees'>
          <legend >Diplômes</legend>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} class="form-check-input" type="checkbox" id="9" name="degrees" value="1" />
            <label htmlFor="9">BAFD</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} class="form-check-input" type="checkbox" id="10" name="degrees" value="2"/>
            <label htmlFor="10">BAFD en cours</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} class="form-check-input" type="checkbox" id="11" name="degrees" value="3"/>
            <label htmlFor="11">BAFA</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} class="form-check-input" type="checkbox" id="12" name="degrees" value="4"/>
            <label htmlFor="12">stage pratique</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} class="form-check-input" type="checkbox" id="13" name="degrees"value="5"/>
            <label htmlFor="13">Non diplome</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} class="form-check-input" type="checkbox" id="14" name="degrees" value="6"/>
            <label htmlFor="14">BPJEPS</label>
          </div>
      </fieldset>
          <input  value="Envoyer" class="btn btn-success" type="submit"/> 
       </form> */}


       {/* <form class="row g-3" onSubmit={ModifierProfileSubmit} action='' method="post"> 
        
        <div class="col-md-6">
            <label htmlFor='firstname'>Prénom:</label>
            <input defaultValue={updateProfile.firstname} onChange={handleChange} type="text" class="form-control" name="firstname" /><br></br>
          </div>
          <div class="col-md-6">
            <label htmlFor='lastname'>Nom:</label>
            <input defaultValue={updateProfile.lastname} onChange={handleChange} type="text" class="form-control" name="lastname" /><br></br>
          </div>
          <div class="col-md-6">
          <label htmlFor='password'>Mot de passe:</label>
          <input defaultValue={updateProfile.User.password} onChange={handleChange} type="password"  class="form-control" name="password" /><br></br>
          </div>
          <div class="col-md-6">
          <label htmlFor='password'>Mot de passe conf:</label>
          <input defaultValue={updateProfile.User.passwordconf} onChange={handleChange} type="password"  class="form-control" name="passwordconf" /><br></br>
          </div>
          <div class="col-md-6">
          <label htmlFor='email'>Email:</label>
          <input defaultValue={updateProfile.User.email} onChange={handleChange}type="email"  class="form-control" name="email" /><br></br>
          </div>
          <div class="col-md-6">
          <label htmlFor='phone'>Numéro de téléphone:</label>
          <input defaultValue={updateProfile.User.phone} onChange={handleChange} type="tel"  class="form-control" name="phone" /><br></br>
            </div>
            <fieldset name='isActif'>
            <div class="form-check"   >
                <input   class="form-check-input"   onChange={handleChange}  value="true"  defaultChecked={updateProfile.User.isActif} type="radio" name="isActif" id="true"  />
                <label class="form-check-label" htmlFor="true">✅</label>
              </div>
              <div class="form-check">
                <input  class="form-check-input"  onChange={handleChange} value="false" defaultChecked={!updateProfile.User.isActif} type="radio" name="isActif" id="false"  />
                <label class="form-check-label" htmlFor="false">❌</label>
            </div>
            </fieldset>
            <div class="col-12"> 
          <label htmlFor='address'>Adresse:</label>
          <input  defaultValue={updateProfile.User.Localisation.address} onChange={handleChange} type="text"  class="form-control" name="address" /><br></br>
          </div>
          <div class="col-md-2">
          <label htmlFor='zipCode'>Code Postal:</label>
          <input defaultValue={updateProfile.User.Localisation.zipCode} onChange={handleChange} type="text"  class="form-control" name="zipCode" /><br></br>
          </div>
          <div class="col-md-4">
          <label htmlFor='city'>Ville:</label>
          <input defaultValue={updateProfile.User.Localisation.city} onChange={handleChange} type="text"  class="form-control" name="city" /><br></br>
          </div>
          <fieldset name="periods"id='periods'> 
          <legend >Périodes disponibles</legend>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="1" name="periods" value='1' checked={(period.find((period) => period == '1'))? true: false}/>
            <label htmlFor="1">Vacances de février</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="2" name="periods" value='2' checked={(period.find((period) => period == '2'))? true: false}/>
            <label htmlFor="2">Vacances d’avril</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="3" name="periods" value='3' checked={(period.find((period) => period == '3'))? true: false}/>
            <label htmlFor="3">Vacances juillet</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="4" name="periods" value='4' checked={(period.find((period) => period == '4'))? true: false}/>
            <label htmlFor="4">Vacances Août</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="5" name="periods" value="5" checked={(period.find((period) => period == '5'))? true: false}/>
            <label htmlFor="5">Vacances Octobre</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="6" name="periods" value="6" checked={(period.find((period) => period == '6'))? true: false}/>
            <label htmlFor="6">Vacances Noël</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="7" name="periods" value="7" checked={(period.find((period) => period == '7'))? true: false}/>
            <label htmlFor="7">Mercredi</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="8" name="periods" value="8" checked={(period.find((period) => period == '8'))? true: false}/>
            <label htmlFor="8">Samedi</label>
          </div>
      </fieldset>
      <fieldset name="degrees" id='degrees'>
          <legend >Diplômes</legend>
          <div class="form-check form-check-inline">
            <input onChange={handleChange} type="checkbox" id="9" name="degrees" value="1" checked={(degree.find((degree) => degree == '1'))? true: false}/>
            <label htmlFor="9">BAFD</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="10" name="degrees" value="2"checked={(degree.find((degree) => degree == '2'))? true: false}/>
            <label htmlFor="10">BAFD en cours</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="11" name="degrees" value="3" checked={(degree.find((degree) => degree == '3'))? true: false}/>
            <label htmlFor="11">BAFA</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="12" name="degrees"value="4" checked={(degree.find((degree) => degree == '4'))? true: false}/>
            <label htmlFor="12">stage pratique</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="13" name="degrees"value="5" checked={(degree.find((degree) => degree == '5'))? true: false}/>
            <label htmlFor="13">Non diplome</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="14" name="degrees"value="6"checked={(degree.find((degree) => degree == '6'))? true: false}/>
            <label htmlFor="14">BPJEPS</label>
          </div>
      </fieldset>
         <input  value="Envoyer" class="btn btn-success" type="submit"/> <br></br>
          </form> */}












          {/* <form class="row g-3" onSubmit={ScriptForm} action='' method="post">
      <div class="col-md-6">  
          <label htmlFor='siret'>Numéro de SIRET:</label>
          <input onChange={handleChange} type="text" class="form-control" name="siret" /><br></br>
        </div>
        <div class="col-md-6">
          <label htmlFor='structurename'>Nom de l'entreprise:</label>
          <input onChange={handleChange} type="text" class="form-control" name="structurename" /><br></br>
        </div>
        <div class="col-md-6">
          <label htmlFor='password'>Mot de passe:</label>
          <input onChange={handleChange} type="password" class="form-control" name="password" /><br></br>
        </div>
        <div class="col-md-6">
          <label htmlFor='passwordconf'>Mot de passe conf:</label>
          <input onChange={handleChange} type="password"  class="form-control" name="passwordconf" /><br></br>
          </div>
        <div class="col-md-6">
          <label htmlFor='email'>Email:</label>
          <input onChange={handleChange} type="email" class="form-control" name="email" /><br></br>
          </div>
          <div class="col-md-6">
          <label htmlFor='phone'>Numéro de téléphone:</label>
          <input onChange={handleChange} type="tel" class="form-control" name="phone" /><br></br>
          </div>
          <div class="col-12"> 
          <label htmlFor='address'>Adresse de l'entreprise:</label>
          <input onChange={handleChange} type="text" class="form-control" name="address" /><br></br>
          </div>
          <div class="col-md-2">
          <label htmlFor='zipCode'>Code postal de l'entreprise:</label>
          <input onChange={handleChange} type="text" class="form-control" name="zipCode" /><br></br>
            </div>
            <div class="col-md-4">
          <label htmlFor='city'>Ville:</label>
          <input onChange={handleChange} type="text" class="form-control" name="city" /><br></br>
            </div>
          <fieldset name="periods" id='periods'>
            <legend >Périodes de disponibilités</legend>
            <div class="form-check form-check-inline">
              <input onChange={handleChange} type="checkbox"  id="1" name="periods" value="1" />
              <label htmlFor="1">Vacances de février</label>
            </div>
            <div class="form-check form-check-inline">
              <input onChange={handleChange} type="checkbox" id="2" name="periods" value="2" />
              <label htmlFor="2">Vacances d’avril</label>
            </div>
            <div class="form-check form-check-inline">
              <input onChange={handleChange} type="checkbox" id="3" name="periods" value="3" />
              <label htmlFor="3">Vacances juillet</label>
            </div>
            <div class="form-check form-check-inline">
              <input onChange={handleChange} type="checkbox" id="4" name="periods" value="4" />
              <label htmlFor="4">Vacances Août</label>
            </div>
            <div class="form-check form-check-inline">
              <input onChange={handleChange} type="checkbox" id="5" name="periods" value="5" />
              <label htmlFor="5">Vacances Octobre</label>
            </div>
            <div class="form-check form-check-inline">
              <input onChange={handleChange} type="checkbox" id="6" name="periods" value="6" />
              <label htmlFor="6">Vacances Noël</label>
            </div>
            <div class="form-check form-check-inline">
              <input onChange={handleChange} type="checkbox" id="7" name="periods" value="7" />
              <label htmlFor="7">Mercredi</label>
            </div>
            <div class="form-check form-check-inline">
              <input onChange={handleChange} type="checkbox" id="8" name="periods" value="8" />
              <label htmlFor="8">Samedi</label>
            </div>
          </fieldset>
          <input value="Envoyer" class="btn btn-success" type="submit" /> <br></br>
        </form> */}

{/* <form class="row g-3" onSubmit={ModifierProfileSubmit} action='' method="post">
     <div class="col-md-6">
          <label htmlFor='siret'>Numéro de SIRET:</label>
          <input  defaultValue={updateEmployer.siret} onChange={handleChange} class="form-control"  type="text"  name="siret" /><br></br>
          </div>
          <div class="col-md-6">
          <label htmlFor='structurename'>Nom de l'entreprise:</label>
          <input defaultValue={updateEmployer.structurename}  onChange={handleChange} class="form-control" type="text"   name="structurename" /><br></br>
          </div>
          <div class="col-md-6">
          <label htmlFor='password'>Mot de passe:</label>
          <input defaultValue={updateEmployer.User.password}  onChange={handleChange} type="password"  class="form-control" name="password" /><br></br>
          </div>
          <div class="col-md-6">
          <label htmlFor='passwordconf'>Mot de passe conf:</label>
          <input defaultValue={updateEmployer.User.passwordconf}  onChange={handleChange} type="password"  class="form-control" name="passwordconf" /><br></br>
          </div>
          <div class="col-md-6">
          <label htmlFor='email'>Email:</label>
          <input defaultValue={updateEmployer.User.email}  onChange={handleChange} class="form-control" type="email"   name="email" /><br></br>
          </div>
          <label htmlFor='phone'>Numéro de téléphone:</label>
          <input defaultValue={updateEmployer.User.phone}  onChange={handleChange} class="form-control" type="tel"   name="phone" /><br></br>
          <div class="col-12"> 
          <label htmlFor='address'>Adresse de l'entreprise:</label>
          <input defaultValue={updateEmployer.User.Localisation.address}  onChange={handleChange} class="form-control" type="text"   name="address" /><br></br>
          </div>
          <div class="col-md-2">
          <label htmlFor='zipCode'>Code postal de l'entreprise:</label>
          <input defaultValue={updateEmployer.User.Localisation.zipCode}  onChange={handleChange} class="form-control" type="text"   name="zipCode" /><br></br>
          </div>
          <div class="col-md-4">
          <label htmlFor='city'>Ville:</label>
          <input defaultValue={updateEmployer.User.Localisation.city}  onChange={handleChange} class="form-control" type="text"   name="city" /><br></br>
          </div>
          <fieldset name="periods"id='periods'> 
          
          <legend >Périodes de disponibilités</legend>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="1" name="periods" value='1' checked={(period.find((period) => period == '1'))? true: false}/>
            <label htmlFor="1">Vacances de février</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="2" name="periods" value='2' checked={(period.find((period) => period == '2'))? true: false}/>
            <label htmlFor="2">Vacances d’avril</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="3" name="periods" value='3' checked={(period.find((period) => period == '3'))? true: false}/>
            <label htmlFor="3">Vacances juillet</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="4" name="periods" value='4' checked={(period.find((period) => period == '4'))? true: false}/>
            <label htmlFor="4">Vacances Août</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="5" name="periods" value="5" checked={(period.find((period) => period == '5'))? true: false}/>
            <label htmlFor="5">Vacances Octobre</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="6" name="periods" value="6" checked={(period.find((period) => period == '6'))? true: false}/>
            <label htmlFor="6">Vacances Noël</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="7" name="periods" value="7" checked={(period.find((period) => period == '7'))? true: false}/>
            <label htmlFor="7">Mercredi</label>
          </div>
          <div class="form-check form-check-inline">
            <input  onChange={handleChange} type="checkbox" id="8" name="periods" value="8" checked={(period.find((period) => period == '8'))? true: false}/>
            <label htmlFor="8">Samedi</label>
          </div>
      </fieldset>
      <input  value="Envoyer" class="btn btn-success" type="submit"/> <br></br>
         </form> */}



        {/* <h1>Formulaire d'Inscription ADMIN</h1>
        <form class="row g-3"  id="register_form"  onSubmit={dashboardCreateAdmin} action='' method="post">
       
            <div class="col-md-6">
                <label htmlFor='password'>password:</label>
                <input onChange={handleChange} type="password"  class="form-control" name="password" /><br></br>
            </div>
            <div class="col-md-6">
                <label htmlFor='email'>email:</label>
                <input onChange={handleChange} type="email"  class="form-control" name="email" /><br></br>
            </div>
            <div class="col-md-6">
                <label htmlFor='phone'>phone:</label>
                <input onChange={handleChange} type="tel"  class="form-control" name="phone" /><br></br>
            </div>
            <input  value="Submit"className={styles.inputsubmit} type="submit"/> <br></br>
         </form> */}







</div>
</div>
      </>
    );
}