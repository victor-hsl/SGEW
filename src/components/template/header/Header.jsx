import './Header.css'
import Breadcrumb from '../breadcrumb/Breadcrumb'

export default props =>
    <header className='header'>
        <h1 className="mt-3">
            <i className={`fa fa-${props.icon}`} /> {props.title}
        </h1>
        <Breadcrumb {...props}/>
    </header>