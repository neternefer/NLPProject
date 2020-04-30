import React from 'react'

const AddUser = (props) => {
    return (
        <div className="add-user">
            <button disabled={props.isEmpty}></button>
        </div>
    )
};

export default AddUser