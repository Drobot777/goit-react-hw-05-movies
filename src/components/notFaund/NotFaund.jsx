import { Link } from "react-router-dom"
import css from './NotFaund.module.css'
 const NotFaund=()=>{
    return(
        <div>
            <h1 className={css.title}>Not Faund. Plise go to the <Link to='/'>home</Link>  page</h1>
        </div>
    )
}
export default NotFaund