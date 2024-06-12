//class component


//function component
import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component {

//     state = {
//         ListUser: [
//             { id: 1, name: "HIeu", age: 30 },
//             { id: 2, name: "ziwllw", age: 12 },
//             { id: 3, name: "KIll", age: 18 }
//         ]
//     }
//     handleAddNewUser = (userObj) => {
//         // console.log(userObj)
//         this.setState({
//             ListUser: [userObj, ...this.state.ListUser]
//         })
//     }
//     handleDeleteUser = (userId) => {
//         let listUserClone = this.state.ListUser;
//         listUserClone = listUserClone.filter(item => item.id !== userId)
//         this.setState({
//             ListUser: listUserClone
//         })

//     }
//     render() {
//         //DRY: don't repeat yourself
//         return (
//             <div>
//                 <AddUserInfor handleAddNewUser={this.handleAddNewUser}></AddUserInfor>
//                 <DisplayInfor listUser={this.state.ListUser} handleDeleteUser={this.handleDeleteUser}
//                 ></DisplayInfor>
//             </div>
//         );
//     }
// }
const MyComponent = () => {

    const [ListUSer, setListUser] = useState([
        { id: 1, name: "HIeu", age: 30 },
        { id: 2, name: "ziwllw", age: 12 },
        { id: 3, name: "KIll", age: 18 }
    ])
    const handleAddNewUser = (userObj) => {
        setListUser([userObj, ...ListUSer])
    }
    const handleDeleteUser = (userId) => {
        let listUserClone = ListUSer;
        listUserClone = listUserClone.filter(item => item.id !== userId)
        setListUser(listUserClone)
    }
    return (
        <div>
            <AddUserInfor handleAddNewUser={handleAddNewUser}></AddUserInfor>
            <DisplayInfor listUser={ListUSer} handleDeleteUser={handleDeleteUser}
            ></DisplayInfor>
        </div>
    )
}

export default MyComponent;