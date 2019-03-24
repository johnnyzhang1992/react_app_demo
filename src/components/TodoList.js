import React, { Component } from 'react';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            lists: [
                {
                    id:1,
                    text: 'item1'
                },
                {id: 2,text: 'iten2'}
            ]
        }
    }
    render(){
        let style = {
            listStyle: 'none',
            lineHeight: '10vh',
            fontSize: '7vh'
        }
        return(
            <div>
                <h1 className='textCenter'>This is a list.</h1>
                 <ul className="lists" style={style}>
                    {
                        this.state.lists.map((item) => 
                            <li key={item.id}>
                                {`${item.id} : item.text`}
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}
export default TodoList;