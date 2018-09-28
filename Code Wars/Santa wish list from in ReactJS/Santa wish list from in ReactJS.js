const React = require("react");

class WishlistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      wish: '',
      priority: 1
    }
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.send(this.state);
  }
  handleChangeName(e){
    this.setState({
      name: e.target.value
    });
  }
  handleChangeWish(e){
    this.setState({
      wish: e.target.value
    });
  }
  handleChangePriority(e){
    this.setState({
      priority: +e.target.value
    });
  }
  render() {
    return (
      <form onSubmit = {e => this.handleSubmit(e)} >
        <input value = {this.state.name} id = "name" onChange = {e => this.handleChangeName(e)}/>
        <textarea value = {this.state.wish} id = "wish" onChange = {e => this.handleChangeWish(e)}/>
        <select value = {this.state.priority} id = "priority" onChange = {e => this.handleChangePriority(e)}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </form>
    );
  }
};