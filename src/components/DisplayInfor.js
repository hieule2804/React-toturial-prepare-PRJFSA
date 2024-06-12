import { colors } from "@mui/material";
import React, { useEffect, useState } from "react";
import './DisplayInfor.scss'
// class DisplayInfor extends React.Component {
//     // constructor(props) {
//     //     console.log('con-0')
//     //     super(props)
//     //     this.state = {
//     //         isShowList: true
//     //     }
//     // }

//     // componentDidMount() {
//     //     console.log('me')
//     //     setTimeout(() => {
//     //         document.title = "Ziwllw"
//     //     }, 100);
//     // }
//     // componentDidUpdate(prevProps, prevState, snapshot) {
//     //     console.log('DidUpdate', this.props, prevProps)
//     //     if (this.props.listUser !== prevProps.listUser) {
//     //         if (this.props.listUser.length === 5) {
//     //             alert("du 5")
//     //         }
//     //     }
//     // }
//     // handleShowHided = () => {
//     //     this.setState({
//     //         isShowList: !this.state.isShowList
//     //     })
//     // }
//     render() {
//         console.log("render")
//         //destructuring array/object
//         const { listUser } = this.props; //object
//         // console.log(this.props)
//         //props => viet tat properties
//         return (
//             <div className='display-infor-container'>
//                 {/* <div>
//                     <span onClick={(event) => { this.handleShowHided(event) }}>{this.state.isShowList ? "Hide list User" : "Show List User"}</span>
//                 </div> */}
//                 {true &&
//                     <div>
//                         {listUser.map((user) => {
//                             return (
//                                 <div key={user.id} className={+user.age > 18 ? "green" : "red"} >
//                                     <div style={{ color: 'blue' }}>My Name is {user.name}</div>
//                                     <div>My Age is {user.age}</div>
//                                     <button onClick={() => { this.props.handleDeleteUser(user.id) }}>Delete</button>
//                                     <hr />
//                                 </div>
//                             )
//                         })}
//                     </div>
//                 }
//             </div>
//         )
//     }
// }

const DisplayInfor = (props) => {
    const { listUser } = props; //object
    const [isTheShowHide, setShowHide] = useState(true);
    const handleShowHide = () => {
        setShowHide(!isTheShowHide)
    }

    useEffect(
        () => {
            if (listUser.length === 0) {
                alert("trong")
            }
            console.log("useEffect")
        }, [listUser])
    useEffect(
        () => {
            setTimeout(() => {
                document.title = "Ziwllw"
            }, 100)
        }, [])
    return (
        <div className='display-infor-container'>
            <div>
                <span onClick={() => { handleShowHide() }}>
                    {isTheShowHide === true ? " Hide List User" : "Show List User"}
                </span>
            </div>
            {isTheShowHide &&
                <div>
                    {listUser.map((user) => {
                        return (
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"} >
                                <div style={{ color: 'blue' }}>My Name is {user.name}</div>
                                <div>My Age is {user.age}</div>
                                <button onClick={() => { props.handleDeleteUser(user.id) }}>Delete</button>
                                <hr />
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default DisplayInfor;