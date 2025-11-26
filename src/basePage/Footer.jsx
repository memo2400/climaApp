import { Background } from "victory";
import "./BasePageStyles.css";

export const Footer = () => {
    return (
        <footer className="footer is-align-content-flex-end">
          <div className="content is-flex is-justify-content-center">
            {/* <p>
              <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>.
              The source code is licensed
              <a href="https://opensource.org/license/mit">MIT</a>. The
              website content is licensed
              <a href="https://creativecommons.org/licenses/by-nc-sa/4.0//"
                >CC BY NC SA 4.0</a
              >.
            </p> */}

            <table className="table is-fullwidth is-transparent">
                <tbody>
                    <tr>
                        <td>Linkedin</td><td>Link</td>
                        <td className="is-one-fifth"></td>
                        <td>Redes sociales</td><td>Red</td>
                    </tr>
                    
                    <tr>
                        <td>Otros proyectos</td>
                        <td><ul >
                                <li>Halo</li>
                                <li>Ususarios App</li>
                                <li>Clima app</li>
                            </ul>
                        </td>
                        <td className="is-one-fifth"></td>
                        <td></td>
                        <td></td>
                    </tr>                    
                </tbody>

            </table>

          </div>
        </footer>
    );
}