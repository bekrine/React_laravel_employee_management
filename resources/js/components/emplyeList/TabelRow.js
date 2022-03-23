import React, { Component } from "react";
import { ReactDOM } from "react";
import TableActionButttons from "./TableActionButttons";

export default class TabelRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <th scope="row">{this.props.data.id}</th>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.salary}</td>
                <td>
                    <TableActionButttons
                        datas={this.props.datas}
                        id={this.props.data.id}
                    />
                </td>
            </tr>
        );
    }
}
