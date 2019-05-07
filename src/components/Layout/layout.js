import React from 'react';
import Auxiliary from './../../hoc/auxiliary';
import classes from './layout.module.css';
const layout = ( props ) => {
    return(
        <Auxiliary>
            <div>Toolbar, Sidebar, Backdrop</div>
            <main className={classes.content}>{props.children}</main>    
        </Auxiliary>
    )
}

export default layout;