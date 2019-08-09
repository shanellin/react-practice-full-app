import React, { Component } from 'react'

class Introduce extends Component{
    render(){
        const {introduces} = this.props;
        const introduceList = introduces.map(introduce => {
            return (
                <div className="shanelin" key={ introduce.id }>
                    <div>Name: { introduce.name }</div>
                    <div>age: { introduce.age }</div>
                    <div>belt: { introduce.belt }</div>
                </div>
            )
        })
        return (
            <div className="introduce-list">
                { introduceList }
            </div>
        )
    }
}

export default Introduce;