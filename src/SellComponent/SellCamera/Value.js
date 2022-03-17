import React from 'react';

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Value = (props) => {

    const deleteBlog = id => {
        fetch(`https://arcane-thicket-06182.herokuapp.com/deleteValue/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // console.log("data");
                // Do some stuff...
            })
            // .catch(err => console.log(err));

    }

    const { number, newPrice,_id,newMname } = props.val

    return (
        <div className="container">
            <div className="col mt-5">
                <div className="container">
                    Name: {newMname}
                    <br />
                Customer's Number: {number}
                <br />
                Approximate-Price: {newPrice}
                <br />
                {_id}
                
                    <DeleteOutlineIcon className="click" onClick={() => deleteBlog(_id)}></DeleteOutlineIcon>
                
                </div>
            </div>
        </div>
    );
};

export default Value;