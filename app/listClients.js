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
      	  <td>{el.username} </td>
		  <td>{el.ip} </td>
		  <td>{el.status} </td>
		  <td>{el.city} </td>
		  <td>{el.url} </td>
		  <td>{el.referer} </td>
		  <td>{el.sendauto} </td>
		  <td>{el.brouser} </td>
		  <td>{el.title} </td>
		  <td>{el.dopinfo} </td>
		  <td>{el.times} </td>
		  <td>{el.histor} </td>
      </tr>
    )
  }
}

export default class ListClients extends Component {
	render() {
		let rows = [];
		let lastUser = null;

		this.props.users.users.forEach( el=>{
			rows.push(<UserCol user={el} key={el.sid} />)
		})
		return(
			<table>
			<tbody>
			  <tr>
	    		<td className="td-head">State</td>
	    		<td className="td-head">Имя</td>
	    		<td className="td-head">Ip</td>
	    		<td className="td-head">Город</td>
	    		<td className="td-head">Страница</td>
	    		<td className="td-head">Источник перехода</td>
	    		<td className="td-head">Ключево слово</td>
	    		<td className="td-head">Браузер</td>
	    		<td className="td-head">Оператор</td>
	    		<td className="td-head">Доп.</td>
	    		<td className="td-head">Время</td>
	    		<td className="td-head">Микр</td>
			</tr>
			{rows}
			</tbody>
			</table>
		);
	}
}