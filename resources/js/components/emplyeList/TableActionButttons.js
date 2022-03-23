import React, { Component } from "react";
import Model from "./Models/Model";

export default class TableActionButttons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emplyee: {},
            type: "",
        };
    }

    getemplouyeeinfo = (id) => {
        let emplyeefilter = this.props.datas.filter(
            (emplyee) => emplyee.id == id
        );

        this.setState({
            emplyee: emplyeefilter,
            type: "view",
        });
    };

    UpdatEmplouyee = (id) => {
        let emplyeefilter = this.props.datas.filter(
            (emplyee) => emplyee.id == id
        );

        this.setState({
            emplyee: emplyeefilter,
            type: "update",
        });
    };
    DeleteEmplouyee = (id) => {
        let emplyeefilter = this.props.datas.filter(
            (emplyee) => emplyee.id == id
        );

        this.setState({
            emplyee: emplyeefilter,
            type: "delete",
        });
    };

    render() {
        return (
            <div className="btn-group" role="group" aria-label="Basic example">
                <button
                    type="button"
                    className="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target={"#staticBackdrop" + this.props.id}
                    onClick={() => {
                        this.getemplouyeeinfo(this.props.id);
                    }}
                >
                    View
                </button>
                <Model
                    Modelid={this.props.id}
                    type={this.state.type}
                    emplyee={this.state.emplyee}
                />
                <button
                    type="button"
                    className="btn btn-info"
                    data-bs-toggle="modal"
                    data-bs-target={"#staticBackdrop" + this.props.id}
                    onClick={() => this.UpdatEmplouyee(this.props.id)}
                >
                    UpDate
                </button>
                <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target={"#staticBackdrop" + this.props.id}
                    onClick={() => this.DeleteEmplouyee(this.props.id)}
                    className="btn btn-danger"
                >
                    Delete
                </button>
            </div>
        );
    }
}
