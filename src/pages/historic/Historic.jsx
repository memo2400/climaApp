import { Form } from "react-router"


export const HistoricPage = () => {


    return(
        <>
            <div className="box">
                <h1 className="title has-text-centered">Historical climate</h1>

                <form>
                    <p className="control has-icons-left has-icons-right">
                        <span className="icon is-small is-left"><i className="fas fa-city"></i></span>
                        <input className="input" type="text" placeholder="Write your city"></input>
                        <span className="icon is-right"><i className="fas fa-check"></i></span>
                    </p>
                </form>

            </div>
        </>
    )

}