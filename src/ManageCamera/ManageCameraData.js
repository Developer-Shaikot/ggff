import React from 'react';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const ManageCameraData = (props) => {

    const deleteBlog = id => {
        fetch(`https://arcane-thicket-06182.herokuapp.com/deleteCamera/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log("data");
                // Do some stuff...
            })
            .catch(err => console.log(err));

    }

    const { name, price, _id } = props.manage

    return (
        <div className="container">
            <div className="col mt-5">
                <div className="container">
                {name}
                <br />
                {price}$
                <br />
                {_id}
                
                    <DeleteOutlineIcon className="click" onClick={() => deleteBlog(_id)}></DeleteOutlineIcon>
                
                </div>
            </div>
        </div>
    );
};

export default ManageCameraData;