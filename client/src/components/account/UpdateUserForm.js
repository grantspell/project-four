import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// STYLES
const UpdateWrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 10px;

    label{
        float: left;
        margin-right: 25px;
    }

    input{
        float: right;
    }
    .buttonLogOut {
        text-decoration: none;
        margin-top: 10px;
        float: left;
    }
    .buttonDelete {
        float:right;
        margin-top: 10px;
    }
`

const UpdateUserForm = (props) => {

    const deleteUser = () => {
        props.deleteUser(props.userId)
    }

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
            <div className="buttonLogOut">
                <button><Link to="/account">Log Out</Link></button>
            </div>
            <div className="buttonDelete">
                <button onClick={deleteUser}>Delete Account</button>
            </div>
        </UpdateWrapper>
    );
};

export default UpdateUserForm;