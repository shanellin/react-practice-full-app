import React from 'react'

const Introduce = ({ introduces, deleteIntroduce }) => {
    const introduceList = introduces.map(introduce => {
        if (introduce.age > 20) {
            return (
                <div className="shanelin" key={introduce.id}>
                    <div>Name: {introduce.name}</div>
                    <div>age: {introduce.age}</div>
                    <div>belt: {introduce.belt}</div>
                    <button onClick={() => {deleteIntroduce(introduce.id)}}>delete</button>
                </div>
            )
        } else {
            return null
        }
    })
    return (
        <div className="introduce-list">
            {introduceList}
        </div>
    )
    // return (
    //     <div className="introduce-list">
    //         {
    //             introduces.map(introduce => {
    //                 return introduce.age > 20 ? (
    //                     <div className="shanelin" key={introduce.id}>
    //                         <div>Name: {introduce.name}</div>
    //                         <div>age: {introduce.age}</div>
    //                         <div>belt: {introduce.belt}</div>
    //                     </div>
    //                 ) : null
    //             })
    //         }
    //     </div>
    // )
}

export default Introduce;