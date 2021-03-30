import React from 'react'
import propTypes from 'prop-types'

const Profile = (props) => {
    console.log(props)
    return (
        <div>
           <h1>Hi my name is : {props.fullName}</h1> 
         <h2> i am {props.bio} </h2>
          <h2> and i'm a {props.profession} </h2>
          {props.handleName()}
          {props.children}
          
        </div>
    )
}

export default Profile

Profile.propTypes={
    fullName: propTypes.string ,
    bio: propTypes.string,
    prosession: propTypes.string,
};