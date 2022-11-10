
export default function disconnect()
{
    return(
        <section class="vh-100">
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6 text-black">

        <div class="px-5 ms-xl-4">
          <i class="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{color: '#709085'}}></i>
          <span class="h1 fw-bold mb-0">Formulaire de connexion Administrateur</span>
        </div>

        <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

          <form style={{width: '23rem'}}>

            

            <div class="form-outline mb-4">
              <input type="email" id="form2Example18" class="form-control form-control-lg" />
              <label class="form-label" for="form2Example18">Adresse mail</label>
            </div>

            <div class="form-outline mb-4">
              <input type="password" id="form2Example28" class="form-control form-control-lg" />
              <label class="form-label" for="form2Example28">Mot de passe</label>
            </div>

            <div class="pt-1 mb-4">
              <button class="btn btn-info btn-lg btn-block" type="button">Se connecter</button>
            </div>

          </form>

        </div>

      </div>
      <div class="col-sm-6 px-0 d-none d-sm-block">
        <img src="/logo_cse.jpg"
          alt="Login image" class="w-100 vh-100" style={{objectfit: 'cover', objectposition: 'left', position:'relative', overflow:"hidden", backgroundRepeat:"no-repeat", backgroundPosition:'right center', backgroundSize:"auto 100%"}}/>
      </div>
    </div>
  </div>
</section>
    )
}