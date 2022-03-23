import axios from "axios";
import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class NewModel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            salary: "",
        };
    }

    GetNameValue = (e) => {
        this.setState({
            name: e.target.value,
            salary: this.state.salary,
        });
    };
    GetSalaryValue = (e) => {
        this.setState({
            name: this.state.name,
            salary: e.target.value,
        });
    };
    AddNewEmplouyee = () => {
        axios
            .post("add/emplyouee/list", {
                emplyeename: this.state.name,
                emplyeesalary: this.state.salary,
            })
            .then(() => {
                toast.success("add seccssefuly");
            })
            .then(() => {
                location.reload();
            });
    };
    render() {
        return (
            <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5
                                className="modal-title"
                                id="staticBackdropLabel"
                            >
                                Add new emplouyee
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="m-3">
                                    <label
                                        htmlFor="name"
                                        className="form-label"
                                    >
                                        name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        placeholder="name"
                                        value={this.state.name}
                                        onChange={this.GetNameValue}
                                    />
                                    <label
                                        htmlFor="salary"
                                        className="form-label"
                                    >
                                        salary
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="salary"
                                        placeholder="salary"
                                        value={this.state.salary}
                                        onChange={this.GetSalaryValue}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={this.AddNewEmplouyee}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
