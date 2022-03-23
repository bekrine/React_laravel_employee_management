import axios from "axios";
import React, { Component } from "react";
import { ReactDOM } from "react";
import TabelRow from "./TabelRow";
import Model from "./Models/Model";
import NewModel from "./Models/NewModel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emplyees: [],
            type: "add",
        };
    }

    componentDidMount() {
        this.GetEmplyeeList();
    }

    GetEmplyeeList = async () => {
        let responce = await axios.get("get/employees/list");
        this.setState({
            emplyees: responce.data,
        });
    };

    render() {
        return (
            <>
                <ToastContainer />
                <div>
                    <button
                        scope="col"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        className="btn btn-info m-3"
                    >
                        Add new emplouyee
                    </button>
                    <NewModel />
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Salary</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.emplyees.map((emplyee, index) => {
                            return (
                                <TabelRow
                                    key={index}
                                    data={emplyee}
                                    datas={this.state.emplyees}
                                />
                            );
                        })}
                    </tbody>
                </table>
            </>
        );
    }
}

export default Table;
