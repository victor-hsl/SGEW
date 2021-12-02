import {Link} from 'react-router-dom'
import Breadcrumbitem from './Breadcrumbitem'

export default props =>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
             <li class="breadcrumb-item active" aria-current="page"><Link to='/'>Home</Link></li>
             <Breadcrumbitem {...props}/>
        </ol>
    </nav>