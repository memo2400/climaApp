

export const ClimaApp = () => {

    return(
        <div className="box">
            <h2 className="title is-2 has-text-centered"> Gordo </h2>

            <form>
                <div class="field">
                    {/* <p class="control has-icons-left has-icons-right"> */}
                        
                        <input class="input" type="text" placeholder="Busque su ciudad"/>
                        
                        {/* <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i class="fas fa-check"></i>
                        </span> */}
                    {/* </p> */}
                    <button className="button is-link">Buscar</button>

                    
{/* <div class="field is-grouped">
  <div class="control">
    <button class="button is-link">Submit</button>
  </div>
</div> */}
                </div>
            </form>
        </div>
    );
}