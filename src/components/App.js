import React from 'react';


class Header extends React.Component {
    render(){
        return (
            <h1>Header</h1>
        );
    }
}

class Body extends React.Component {
    render(){
        return (
            <h1>Body</h1>
        );
    }
}

class TableData extends React.Component {
    render(){
        return(
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.description}</td>
            </tr>
        );

    }
}

class App extends React.Component {  // React.Component를 상속받음.
   
    constructor(){
        super(); // 생성자에서 다른 생성자를 호출.
        this.state = {  
            data : [
                {
                    "id":1,
                    "name":"test01",
                    "description":"desc01"     
                }, {
                    "id":2,
                    "name":"test02",
                    "description":"desc02" 
                }, {
                    "id":3,
                    "name":"test03",
                    "description":"desc03" 
                }
            ]
        }
    }
    
    render() {
        var style_test = {
            fontSize:"50px",
            color:"#f00"
        }
        return (
            <div style={style_test}>
                <Header/>
                <table>
                    <tbody>
                        { this.state.data.map( (person,i) => <TableData key={i} data={person} /> )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;  // App으로 도출