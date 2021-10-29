function Cities (props) {
	if(props.City==null){
        return null;
    }
    else{
    return <option  value={props.City}>{props.City}</option>
}}

export default Cities