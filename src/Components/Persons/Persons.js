import React,{Component} from 'react'
import Person from './Person/Person'
class Persons extends Component {
    constructor(props){
        super(props);
        console.log('[Persons.js] constructor');
    }

     shouldComponentUpdate(nextProps, nextState){
         
        console.log('[Persons.js] should component update',nextProps,nextState);    
        return true;
     }

    render(){
    return this.props.persons.map( (person,index) => {
            return ( 
                <Person
                    name={person.name}
                    age={person.age}
                    key = {person.id}
                    click = { () => this.props.click(person.id) }
                    changed = { (event) => this.props.changed( event, person.id)}>
                </Person>
            )
        })
    }
 getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons.js] should component update'+prevProps+' '+prevState);   
    return 'Rohan';
 }   

 componentDidUpdate(nextProps, prevProps, snapshot){
    console.log('[Persons.js] component did update',snapshot);   
 }

}


export default Persons