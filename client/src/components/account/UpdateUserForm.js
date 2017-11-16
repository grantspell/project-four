import React from 'react';
import styled from 'styled-components';

// STYLES
const UpdateWrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    margin: 10px;

    label{
        float: left;
        margin-right: 25px;
    }

    input{
        float: right;
    }
`

const UpdateUserForm = (props) => {

    const handleChange = (event) => {
        props.handleChange(event, props.userId)
    }

    const updateUser = () => {
        props.updateUser(props.userId)
    }
    
    return (
        <UpdateWrapper>
            <div>
                <label htmlFor="name">Name</label>
                <input onBlur={updateUser} onChange={handleChange} name="name" value={props.user} />
            </div>
            <div>
                <label htmlFor="name">Username</label>
                <input onBlur={updateUser} onChange={handleChange} name="username" value={props.userName} />
            </div>
            <div>
                <label htmlFor="name">Password</label>
                <input onBlur={updateUser} onChange={handleChange} type="password" name="password" value={props.password} />
            </div>
        </UpdateWrapper>
    );
};

export default UpdateUserForm;