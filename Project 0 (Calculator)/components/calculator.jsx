
import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { passStateToComp, sentActionToStore } from '../actions/calcAction.js'
// import style from '../css/style.css'

class Calculator extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            val: this.props.value
        }
    }

    setInpValue(eve) {
        var v = eve.target.value;

        this.setState({
            val: v
        })

    }

    isEqual() {
        var inpV = document.getElementById("ScreenView").value;
        var ad = inpV.indexOf("+");
        var sub = inpV.indexOf("-");
        var div = inpV.indexOf("/");
        var mult = inpV.indexOf("*");

        if (ad > -1) {
            const onAdd = this.props.onAdd
            onAdd();
        }
        if (sub > -1) {
            const onSub = this.props.onSub
            onSub();
            console.log("checking");
        }
        if (div > -1) {
            const onDiv = this.props.onDiv
            onDiv();
        }
        if (mult > -1) {
            const onMulti = this.props.onMulti
            onMulti();
        }

    }

    addSign() {
        var inpV = document.getElementById("ScreenView").value;
        this.setState({
            val: inpV + "+"
        })
    }
    subSign() {
        var inpV = document.getElementById("ScreenView").value;
        this.setState({
            val: inpV + "-"
        })
    }
    divSign() {
        var inpV = document.getElementById("ScreenView").value;
        this.setState({
            val: inpV + "/"
        })
    }
    multiSign() {
        var inpV = document.getElementById("ScreenView").value;
        this.setState({
            val: inpV + "*"
        })
    }

    calcBtns(eve) {
        var btnVal = eve.target.value
        var inpV = document.getElementById("ScreenView").value;
        this.setState({
            val: inpV + btnVal
        })
    }

    refresh() {
        document.getElementById("ScreenView").value = '';
    }

    render() {

        return (
            <div>
                
                <div className="main">

                    <form className="forms" name="cform">

                        <div className="mainscreen">

                            <input type="text" onChange={this.setInpValue.bind(this)} name='screen' value={this.state.val} id='ScreenView' />
                            <p id='solscreen'>{this.props.value}</p>

                        </div>

                        <div className="btns">

                            <div className="one">
                                <ul>
                                    <li><input onClick={this.calcBtns.bind(this)} type="button" className="digit" name="btn7" value="7" /></li>
                                    <li><input onClick={this.calcBtns.bind(this)} type="button" className="digit" name="btn8" value="8" /></li>
                                    <li><input onClick={this.calcBtns.bind(this)} type="button" className="digit" name="btn9" value="9" /></li>
                                </ul>
                            </div>

                            <div className="one">
                                <ul>
                                    <li><input onClick={this.calcBtns.bind(this)} type="button" className="digit" name="btn4" value="4" /></li>
                                    <li><input onClick={this.calcBtns.bind(this)} type="button" className="digit" name="btn5" value="5" /></li>
                                    <li><input onClick={this.calcBtns.bind(this)} type="button" className="digit" name="btn6" value="6" /></li>
                                </ul>
                            </div>

                            <div className="one">
                                <ul>
                                    <li><input onClick={this.calcBtns.bind(this)} type="button" className="digit" name="btn1" value="1" /></li>
                                    <li><input onClick={this.calcBtns.bind(this)} type="button" className="digit" name="btn2" value="2" /></li>
                                    <li><input onClick={this.calcBtns.bind(this)} type="button" className="digit" name="btn3" value="3" /></li>
                                </ul>
                            </div>

                            <div className="one">
                                <ul>
                                    <li><input onClick={this.calcBtns.bind(this)} type="button" className="digit" name="btn0" value="0" /></li>
                                    <li><input onClick={this.refresh.bind(this)} type="button" className="res" name="clear" value="C" /></li>
                                    <li><input onClick={this.isEqual.bind(this)} type="button" id="equals" className="result" name="result" value="=" /></li>
                                </ul>
                            </div>

                            <div id="secone" className="one">
                                <ul>
                                    <li><input onClick={this.addSign.bind(this)} type="button" className="opr" name="add" value="+" /></li>
                                    <li><input onClick={this.subSign.bind(this)} type="button" className="opr" name="subs" value="-" /></li>
                                    <li><input onClick={this.multiSign.bind(this)} type="button" className="opr" name="mult" value="*" /></li>
                                    <li><input onClick={this.divSign.bind(this)} type="button" className="opr" name="divide" value="/" /></li>
                                </ul>
                            </div>

                        </div>

                    </form>
                </div>

                <div className="clear"></div>
            </div>
        )
    }
}

export const App = connect(passStateToComp, sentActionToStore)(Calculator)
