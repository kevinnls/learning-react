import React from "react"
import ReactDOM from "react-dom"


const myPropObj = {
    a:"a",
    b:"b",
    c:"c"
}

const App = () => {
return (
<div>
<Rows x="value" y="y" z="z"/>
<hr/>
<Rows {...myPropObj}/>
</div>
)

}

class Rows extends React.Component {
render(){
    let rows=[]
    for( let key in this.props)
        rows.push(<li key={key}>{`${key} --- {value}`}</li>)
    console.log(rows)
    return <ul>{rows}</ul>
    }
}

ReactDOM.render(<App/>, document.getElementById("root"))
