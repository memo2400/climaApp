import { Background } from "victory";
import "./BasePagestyles.css";

export const Footer = () => {
    return (
        <footer className="footer is-align-content-flex-end">
          <div className="content is-flex is-justify-content-center">

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
                                <li> <a href="https://sweet-youtiao-f80deb.netlify.app/">Halo</a></li>
                                <li> <a href="https://app-usuarios-10.netlify.app/">Ususarios App </a></li>
                                <li> <a href="https://climaapp-mouc.onrender.com/">Clima app </a></li>
                            </ul>
                        </td>
                        <td className="is-one-fifth"></td>
                        <td></td>
                        <td></td>
                    </tr>                    
                </tbody>

            </table>

          </div>
          
          <div className="is-flex is-justify-content-center my-5">
            <p>
                <strong>Clima app </strong>
                All rights reserve &copy;
                <a href="https://opensource.org/license/mit">MIT</a>. The
                website content is licensed
            </p>
          </div>

        </footer>
    );
}