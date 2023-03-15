import { Component } from "react"

class First extends Component {

    state={
        count:0
    };

    render() {
        return <> yes I am here{this.state.count}
        <button onClick={()=>this.setState({count:this.state.count+1})}>++</button>
        <button onClick={()=>this.setState({count:0})}>reset</button></>
    }
}
export default First