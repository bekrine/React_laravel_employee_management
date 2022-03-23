import axios from "axios";
import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class Model extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newname:
                Object.keys(props.emplyee).length === 0
                    ? ""
                    : this.props.emplyee[0].name,
            newsalary:
                Object.keys(props.emplyee).length === 0
                    ? ""
                    : this.props.emplyee[0].salary,
        };
    }
    //name value
    GetNewNameValue = (e) => {
        this.setState({
            newname: e.target.value,
            newsalary: this.state.newsalary,
        });
    };
    //salary value
    GetNewSalaryValue = (e) => {
        this.setState({
            newname: this.state.newname,
            newsalary: e.target.value,
        });
    };
    //updating data

    UpdateData = () => {
        axios
            .post("update/employee/list", {
                emplouyeeid: this.props.emplyee[0].id,
                emplyeename: this.state.newname,
                emplyeesalary: this.state.newsalary,
            })
            .then(() => {
                toast.success("info has updating with success");
            })
            .then(() => {
                location.reload();
            });
    };
    //delet emplouyee
    deleteData = (id) => {
        axios
            .delete(`delete/emplouyee/data/${id}`)
            .then(() => {
                toast.error("emplouyee deleted with success");
            })
            .then(() => {
                location.reload();
            });
    };
    render() {
        return (
            <div
                className="modal fade"
                id={"staticBackdrop" + this.props.Modelid}
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
                                {this.props.emplyee[0]
                                    ? this.props.emplyee[0].name
                                    : "nothing"}
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        {this.props.type == "update" ? (
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
                                        placeholder={this.props.emplyee[0].name}
                                        value={this.state.newname}
                                        onChange={this.GetNewNameValue}
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
                                        placeholder={
                                            this.props.emplyee[0].salary
                                        }
                                        value={this.state.newsalary}
                                        onChange={this.GetNewSalaryValue}
                                    />
                                </div>
                            </form>
                        ) : (
                            <div className="modal-body">
                                Salary :
                                {this.props.emplyee[0]
                                    ? this.props.emplyee[0].salary
                                    : "nothing"}
                            </div>
                        )}

                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-info"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            {this.props.type == "update" && (
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    onClick={() => this.UpdateData()}
                                >
                                    Update
                                </button>
                            )}
                            {this.props.type == "delete" && (
                                <button
                                    type="submit"
                                    className="btn btn-danger"
                                    onClick={() =>
                                        this.deleteData(
                                            this.props.emplyee[0].id
                                        )
                                    }
                                >
                                    delete
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
