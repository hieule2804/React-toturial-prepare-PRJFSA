import React, { useState } from "react";

// class AddUserInfor extends React.Component {
//     //state la 1 object , state là cách để kiểm soát data của Component
//     //JSX cho phép viết code js trong html
//     state = {
//         name: 'Ziwlle',
//         address: 'HN',
//         age: 26
//     };

//     handleOnChange = (event) => {
//         this.setState({
//             name: event.target.value
//         })
//     }
//     handleOnChangeAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })
//     }
//     handleOnSubmit = (event) => {
//         event.preventDefault(); //làm cho trang web không bị load lại
//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random() * 100) + 1) + '-random',
//             name: this.state.name,
//             age: this.state.age
//         })

//     }
//     render() {
//         return (
//             <div>  My Name is {this.state.name} and I'm  {this.state.age}
//                 <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
//                     <label>Your Name</label>
//                     <input
//                         value={this.state.name}
//                         type="text" onChange={(event) => { this.handleOnChange(event) }} />
//                     <label>Your Age</label>
//                     <input
//                         value={this.state.age}
//                         type="text" onChange={(event) => { this.handleOnChangeAge(event) }} />
//                     <button>Submit</button>
//                 </form></div>
//         )
//     }
// }
const AddUserInfor = (props) => {
    const [name, setName] = useState('Ziwlle')
    const [address, setAdress] = useState('HN')
    const [age, setAge] = useState('26')


    const handleOnChange = (event) => {
        setName(event.target.value)
    }
    const handleOnChangeAge = (event) => {
        setAge(event.target.value)
    }
    const handleOnSubmit = (event) => {
        event.preventDefault(); //làm cho trang web không bị load lại
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: name,
            age: age
        })
    }
    return (
        <div>  My Name is {name} and I'm  {age}
            <form onSubmit={(event) => { handleOnSubmit(event) }}>
                <label>Your Name</label>
                <input
                    value={name}
                    type="text" onChange={(event) => { handleOnChange(event) }} />
                <label>Your Age</label>
                <input
                    value={age}
                    type="text" onChange={(event) => { handleOnChangeAge(event) }} />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default AddUserInfor;