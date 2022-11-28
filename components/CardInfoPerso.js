import styles from '../styles/Home.module.css'
export default function CardInfoPerso()
{
    return(
        <>
        <h1>/////////////////////////////////////// EN COURS DE DEV ///////////////</h1>
<div class="col py-1">
            <div class="container">
<section>
  <div class="row g-3">
    <div class="col-md-8 mb-4">
      <div class="card mb-4">
        <div class="card-header py-3">
          <h5 class="mb-0">Formulaire d'Inscriptions candidats</h5>
        </div>
        <div class="card-body">
          <form >
          <h5 class="mb-4">Informations personnelles</h5>
          <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                <label class="form-label" for="form6Example1">Prenom</label>
                  <input type="text" id="form6Example1" class="form-control" />
                  
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                <label class="form-label" for="form6Example2">Nom</label>
                  <input type="text" id="form6Example2" class="form-control" />
                  
                </div>
              </div>
        </div>
        <div class="row mb-4">
           <div class="col"> 
                <div class="form-outline">
                  
                  <label htmlFor='birthday'>Date de naissance:</label>
                  <input  type="date"  class="form-control" name="birthday" />
                
            </div>

          </div>
          <div class="col">
            <div class="form-outline">
          
             <label htmlFor='wantToBe'>Souhaite devenir:</label>
             <select   class="form-control" name="wantToBe" >
             <option value="">Choisissez une option</option>
             <option value="animateur">animateur</option>
             <option value="directeur">directeur</option>
             </select>
          
           </div>
          </div>
          </div>
          
          <div class="row mb-4">
           <div class="col"> 
                <div class="form-outline">
                  
                <label htmlFor='password'>Mot de passe:</label>
                <input  type="password"  class="form-control" name="password" />
                
            </div>

          </div>
          <div class="col">
            <div class="form-outline">
          
            <label htmlFor='passwordconf'>Mot de passe conf:</label>
          <input  type="password"  class="form-control" name="passwordconf" />
          
           </div>
          </div>
          </div>  
          <hr class="my-4" />
          <h5 class="mb-4">Localisation</h5>
            
            <div class="form-outline mb-4">
            <label htmlFor='email'>Email:</label>
          <input  type="email"  class="form-control" name="email" />
            </div>

            
            <div class="form-outline mb-4">
            <label htmlFor='phone'>Numéro de téléphone:</label>
          <input  type="tel" maxLength={9} placeholder='ex: 782361188'  class="form-control" name="phone" />
            </div>

           
            <div class="form-outline mb-4">
            <label htmlFor='address'>Adresse:</label>
          <input  type="text"  class="form-control" name="address" />
            </div>

            
            <div class="form-outline mb-4">
            <label htmlFor='city'>Ville:</label>
          <input type="text"  class="form-control" name="city" maxLength={20}/>
            </div>
            <div class="form-outline mb-4">
            <label htmlFor='zipCode'>Code Postal:</label>
          <input  type="text"  class="form-control" name="zipCode" maxLength={5}/>
            </div>

            <hr class="my-4" />
            <div class="row mb-4">
              <div class="col">
              <h5 class="mb-4">Périodes disponibles</h5>
                <div class="form-outline">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="1" name="periods" value="1"/>
                  <label htmlFor="1">Vacances de Février</label>
              </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="2" name="periods" value="2"/>
                  <label htmlFor="2">Vacances d’avril</label>
              </div>
              <div class="form-check">
                <input  class="form-check-input" type="checkbox" id="3" name="periods" value="3"/>
                <label htmlFor="3">Vacances juillet</label>
              </div>
              <div class="form-check">
                <input  class="form-check-input" type="checkbox" id="4" name="periods" value="4"/>
                <label htmlFor="4">Vacances Août</label>
              </div>
              <div class="form-check">
                <input   class="form-check-input" type="checkbox" id="5" name="periods" value="5"/>
                <label htmlFor="5">Vacances Octobre</label>
              </div>
              <div class="form-check">
                <input  class="form-check-input" type="checkbox" id="6" name="periods" value="6"/>
                <label htmlFor="6">Vacances Noël</label>
              </div>
              <div class="form-check">
                <input   class="form-check-input" type="checkbox" id="7" name="periods" value="7"/>
                <label htmlFor="7">Mercredi</label>
              </div>
              <div class="form-check">
                <input   class="form-check-input" type="checkbox" id="8" name="periods" value="8"/>
                <label htmlFor="8">Samedi</label>
              </div>
                </div>
              </div>
              <div class="col">
              <h5 class="mb-4">Diplômes</h5>
                <div class="form-outline">
                <div class="form-check">
                <input   class="form-check-input" type="checkbox" id="9" name="degrees" value="1" />
            <label htmlFor="9">BAFD</label>
              </div>
              <div class="form-check">
              <input   class="form-check-input" type="checkbox" id="10" name="degrees" value="2"/>
            <label htmlFor="10">BAFD en cours</label>
              </div>
              <div class="form-check">
              <input   class="form-check-input" type="checkbox" id="11" name="degrees" value="3"/>
            <label htmlFor="11">BAFA</label>
              </div>
              <div class="form-check">
              <input  class="form-check-input" type="checkbox" id="12" name="degrees" value="4"/>
            <label htmlFor="12">stage pratique</label>
              </div>
              <div class="form-check">
              <input   class="form-check-input" type="checkbox" id="13" name="degrees"value="5"/>
            <label htmlFor="13">Non diplome</label>
              </div>
              <div class="form-check">
              <input  class="form-check-input" type="checkbox" id="14" name="degrees" value="6"/>
                <label htmlFor="14">BPJEPS</label>
              </div>
                </div>
              </div>
        </div>
            
        <input  value="Envoyer" class="btn btn-success" type="submit"/> 
          </form>
        </div>
      </div>
    </div>

    </div>
</section>
</div>
</div>


      </>
    );
}