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

    this.state = {users: props.users[0].users, rev: false};
  }
  filter(users,row,typeFilter){
    if(typeFilter == '123'){
      users.sort((a,b)=>{
        return a[row] - b[row];
      });
    }
    else if('ABC'){
      users.sort((a,b)=>{
        if (a[row] > b[row]) {
          return 1;
        }
        if (a[row] < b[row]) {
          return -1;
        }
        return 0;
      });
    }

    let rev = this.state.rev;
    if(rev){
      users.reverse();
      this.setState({
        rev: false
      })
    }else{
      this.setState({
        rev: true
      })
    }
    return users;
  }
  handleFilterRow123(row) {
    let users = this.state.users;
    let result = this.filter(users,row,'123');
    this.setState({
      users: result
    })

  }
  handleFilterRowABC(row) {
    let users = this.state.users;
    let result = this.filter(users,row,'ABC');
    this.setState({
      users: result
    })

  }
  render() {
    let rows = [];
    let lastUser = null;
    let list = this.state.users;
    for(let x in list ){
    rows.push(<UserCol user={list[x]} key={x} />);
    }
    return(
      <table>
      <tbody>
        <tr>
          <td className="td-head" onClick={this.handleFilterRow123.bind(this,'status')} >status</td>
          <td className="td-head" onClick={this.handleFilterRowABC.bind(this,'username')} >Имя</td>
          <td className="td-head" onClick={this.handleFilterRowABC.bind(this,'ip')} >Ip</td>
          <td className="td-head" onClick={this.handleFilterRowABC.bind(this,'city')} >Город</td>
          <td className="td-head" onClick={this.handleFilterRowABC.bind(this,'title')} >Страница</td>
          <td className="td-head" onClick={this.handleFilterRowABC.bind(this,'sreferer')} >Источник перехода</td>
          <td className="td-head" onClick={this.handleFilterRowABC.bind(this,'sreferer')} >Ключево слово</td>
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