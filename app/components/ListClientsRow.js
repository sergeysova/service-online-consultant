import React,{Component} from "react";

export default class ListClientsRow extends Component {
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
