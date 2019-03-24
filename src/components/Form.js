import React , {Component} from 'react';
// import {Button} from 'antd-mobile';

class From extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: 'coconut',
            value1: 'write some thing '
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleChange1(event){
        console.log(event.target.value)
        this.setState({value1: event.target.valve})
        // console.log(this.state.name);
    }

    handleSubmit(event){
        console.log(`A name was submitted: ${this.state.value} `);
        event.preventDefault();
    }

    render(){
        return (

        <form onSubmit={this.handleSubmit}>
            <div className="formControll">
                <label>
                    Name:
                    <textarea placeholder={this.state.valye1}  onChange={this.handleChange1} />
                </label>
            </div>
            <div className="formControll">
                <label>
                    Pick your favorite La Croix flavor:
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
              </label>
            </div>
            <div className="submit-btn">
                <input type="submit" value="Submit"/>
            </div>
        </form>
        );
    }
}

export default From;