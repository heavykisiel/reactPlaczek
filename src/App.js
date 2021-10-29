import wydawcy from "./wydawcy.json";
import Wydawca from "./Wydawca";
import Cities from "./Cities";
import React,{ Component } from 'react';


class App extends Component {
	constructor(props){
		super(props);
	this.state = {
	 sortType: 'none',
	 records: 10,
	 startIndex : 0,
	 endIndex : 10,
	 filter: 'none',
	};
	this.changeRecords = this.changeRecords.bind(this);
	this.changeFilter= this.changeFilter.bind(this);
	this.sort = this.sort.bind(this);
}
	
	changeFilter(event){
		this.setState({
			filter: event.target.value,
			startIndex: 0,
			endIndex: this.state.records,
		});
	}
	changeRecords(event){
		if(event.target.value>0){
		this.setState({
			records: event.target.value,
			endIndex:parseFloat(this.state.startIndex) + parseFloat(event.target.value),
		});}
		else{
			alert("number of records must be positive");
		}
	}
	
	increment = (pages,filtered)=>{
		if(filtered>0){
			pages=Math.ceil(filtered/this.state.records);
		}
		if(this.state.endIndex<pages*this.state.records){
		this.setState({
			startIndex: parseFloat(this.state.startIndex) + parseFloat(this.state.records),
			endIndex: parseFloat(this.state.endIndex) + parseFloat(this.state.records),
		})}
		else{
			alert("There is no next page")
		}
	}
	setPage = (i)=>{
		
		this.setState({
			startIndex: i * this.state.records,
			endIndex: i * parseFloat(this.state.records) + parseFloat(this.state.records),
		})
	}
	listPages = (pages,filtered)=>{
		var list=[];
		if(filtered>0){
			pages=Math.ceil(filtered/this.state.records);
		}
		for(let i=0;i<pages;i++){
			list.push(<input type="button" value={i} onClick={()=>this.setPage(i)}/>);}
			return list
		
	}
	sort (event){
		
		
		if(event.target.value==='asc'){
			wydawcy.sort((a, b) => (a[["Pełna nazwa wydawcy"]] > b[["Pełna nazwa wydawcy"]] ? 1 : -1));
		}
		if(event.target.value==='desc'){
			wydawcy.sort((a, b) => (a[["Pełna nazwa wydawcy"]] < b[["Pełna nazwa wydawcy"]] ? 1 : -1));
		}
		
		this.setState({
			sortType: event.target.value,
		})
	}

	
render(){
	var i=0;
	var filteredNumber = 0; 
	var pages = Math.ceil(wydawcy.length/this.state.records);
	
  return (
    <main>
		<div>{this.state.endIndex}</div>
		<input type="number" value={this.state.records} onChange = {this.changeRecords} />
		<select name="sortingType" id="sorting"  onChange = {this.sort}>
			<option value="Sort">Sort</option>
			<option value="asc">asc</option>
			<option value="desc">desc</option>
		</select>

		<select name="City" id="city" value={this.state.filter}  onChange={this.changeFilter}>
			<option value="none">none</option>
			{wydawcy.map((val,key)=>{
				return <Cities key={key} City={val.Miejscowość}/>
			})}

		</select>
				
	{wydawcy.filter((val)=>{
		if (this.state.filter==="none"){
			return {val}
		}
		else if((val.Miejscowość!==null)&&(val.Miejscowość.toLowerCase().includes(this.state.filter.toLowerCase()))){
			filteredNumber++;
			return {val}
		} else{
			return null;
		}
	}).slice(this.state.startIndex,this.state.endIndex).map((val,key) => {
		i++;	
		return <Wydawca key={key} index={i} {...val} />
		
			})}

			<input type="button" onClick={()=>this.increment(pages,filteredNumber)} value="next" />
			
			{this.listPages(pages,filteredNumber)}
			
	</main>
  )
};}

export default App;
