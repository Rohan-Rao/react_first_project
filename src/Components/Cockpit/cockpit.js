import React,{ useEffect } from 'react';
import classes from './cockpit';
const Cockpit = ( props ) => {

    useEffect(() => {
        console.log('[cockpit.js] rendering cockpit');
      });

    const assignedClasses = [];
    if ( props.length <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.length <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return(
        <div>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
            className={props.btnClass}
            onClick={props.click}>Toggle Persons
            </button>
        </div>
    );
  
}

export default Cockpit;