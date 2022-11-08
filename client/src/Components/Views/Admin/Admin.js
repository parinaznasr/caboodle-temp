import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Layout from "../../UtilComponents/Layout";

const submitGrant = async(e , grant) => {
    e.preventDefault();
    await axios.post('/api/data/grants/add', {grantObj: grant})
}

export default class AddGrants extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onChangeStartDate = this.onChangeStartDate.bind(this);
        this.onChangeDeadline = this.onChangeDeadline.bind(this);
        this.onChangeFundingAmount = this.onChangeFundingAmount.bind(this);
        this.onSubmit = this.onSubmit.bind(this);



        this.state = {
            name: '',
            status: '',
            startDate: new Date(),
            deadline: new Date(),
            fundingAmount: 0
        }
    }


    componentDidMount() {
        this.setState({
            status: ["Active", "Completed"],
            name: 'grant name'
        });
    }


    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeStatus(e) {
        this.setState({
            status: e.target.value
        });
    }

    onChangeStartDate(date) {
        this.setState({
            startDate: date
        });
    }

    onChangeDeadline(date) {
        this.setState({
            deadline: date
        });
    }

    onChangeFundingAmount(e) {
        this.setState({
            fundingAmount: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const grant = {
            name: this.state.name,
            status: this.state.status,
            startDate: this.state.startDate,
            deadline: this.state.deadline,
            fundingAmount: this.state.fundingAmount
        }
        submitGrant(e, grant).then();
        console.log(grant);


        // window.location = '/admin';
    }

    render() {
        return (
            <Layout>
            <div>
                <h3>Add New Grant</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Grant name:</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>


                    <div className="form-group">
                        <label>Grant status:</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.status}
                            onChange={this.onChangeStatus}
                        />
                    </div>


                    <div className="form-group">
                        <label>Start Date:</label>
                        <div>
                            <DatePicker
                                selected={this.state.startDate}
                                onChange={this.onChangeStartDate}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Deadline:</label>
                        <div>
                            <DatePicker
                                selected={this.state.deadline}
                                onChange={this.onChangeDeadline}
                            />
                        </div>
                    </div>


                    <div className="form-group">
                        <label>Funding Amount:</label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.fundingAmount}
                            onChange={this.onChangeFundingAmount}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Add New Grant" className="btn btn-primary" />
                    </div>

                </form>
            </div>
            </Layout>
        );
    }
}
