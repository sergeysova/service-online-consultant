import React, { Component } from "react";
/*
class UserRow extends Component {
	render(){
		return (<tr></tr>)
	}
}
*/

class UserCol extends Component {
  render(){
  	let el = this.props.user;
    return (
      <tr>
		  <td>{el.status} </td>
      <td>{el.username} </td>
		  <td>{el.ip} </td>
		  <td>{el.city} </td>
		  <td>{el.title} </td>
		  <td>{el.sreferer} </td>
		  <td>{el.sreferer} </td>
		  <td>{el.brouser} </td>
		  <td>{el.parakey} </td>
		  <td>{el.dopinfo} </td>
		  <td>{el.times} </td>
		  <td>0</td>
      </tr>
    )
  }
}

export default class ListClients extends Component {
  
  constructor(props){
    super();

    this.state = {users: props.users[0].users, row: []};
  }
  handleFilterRow123(row) {
    let o = this.state.users;
    let rowsCity = [];
    let city = [];
    for(let x in o){
      buf[x] = o[x][row];
    }
    buf.sort((a,b)=>{
        if (a > b) return 1;
        if (a < b) return -1;
    });
    for(let y in city){
      for(let x in o){
        if(buf[y] == o[x][row]){
          rowsCity.push(o[x]);
          break;
        }
      }

    }
    this.setState({
      users: rowsCity
    });
  }
  handleFilterRowABC(row) {
    let o = this.state.users;
    let rowsCity = [];
    let city = [];
    for(let x in o){
      buf[x] = o[x][row];
    }
    buf.sort();
    for(let y in city){
      for(let x in o){
        if(buf[y] == o[x][row]){
          rowsCity.push(o[x]);
          break;
        }
      }

    }
    this.setState({
      users: rowsCity
    });
  }
  handleFilterRow(row) {
    let users = this.state.users;
    this.filterABC(users,row);
  }
  render() {
    let rows = [];
    let lastUser = null;
    this.state.users.forEach( el=>{
      rows.push(<UserCol user={el} key={el.sid} />);
      //console.log(el);
    });
  	return(
  	  <table>
  	  <tbody>
  	    <tr>
          <td className="td-head" onClick={this.handleFilterRow123.bind(this,'status')} >status</td>
          <td className="td-head" onClick={this.handleFilterRowABC.bind(this,'username')} >Имя</td>
          <td className="td-head" onClick={this.handleFilterRowABC.bind(this,'ip')} >Ip</td>
          <td className="td-head" onClick={this.handleFilterRowABC.bind(this,'city')} >Город</td>
          <td className="td-head" onClick={this.handleFilterRowABC.bind(this,'title')} >Страница</td>
          <td className="td-head" onClick={this.handleFilterRowABC.bind(this,'title')} >Источник перехода</td>
          <td className="td-head" onClick={this.handleFilterRowABC.bind(this,'title')} >Ключево слово</td>
          <td className="td-head" onClick={this.handleFilterRowABC.bind(this,'brouser')} >Браузер</td>
          <td className="td-head" onClick={this.handleFilterRowABC.bind(this,'title')} >Оператор</td>
          <td className="td-head" onClick={this.handleFilterRowABC.bind(this,'dopinfo')} >Доп.</td>
          <td className="td-head" onClick={this.handleFilterRow123.bind(this,'times')} >Время</td>
          <td className="td-head" onClick={this.handleFilterRow123.bind(this,'title')} >Микр</td>
  	    </tr>
  	    {rows}
  	  </tbody>
  	  </table>
  	);
  }
}