import './Content.css'
import {Fragment} from 'react'
import Header from '../header/Header'


export default props =>
    <Fragment>
        <Header {...props}/>
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {props.children}
            </div>
            
        </main>
    </Fragment>