import React from 'react'

const AddUser = (props) => {
    return (
        <div className="add-user">
            <button disabled={props.isEmpty} value="Add User">Add User</button>
        </div>
    )
};

export default AddUser