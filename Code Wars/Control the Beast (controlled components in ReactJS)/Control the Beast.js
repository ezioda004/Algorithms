const React = require("react");

class Beast extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.name === undefined ? "Yeti" : this.props.name
    }
  }
  inputHandler(e){
    this.setState({
      name: e.target.value
    });
  }
  render(){
    return (
      <input id = "controlledName" onChange = {(e) => this.inputHandler(e)} value = {this.state.name}/>
    )
  }
}