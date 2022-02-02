import { memo } from "react";
import { View } from "react-native";
import UserProfileImg from "./UserProfileImg";

const UserProfileImgList = memo((props) => {
    const imge = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoiJ6m6tZBcv9FLCkSh7pHAmpRLREJa8SiOw&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTypxsrtqObGcqWOXZRnd-BwqwELAhrkrkrTg&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoCPLVi2j4vWi0TUVJA7RvJs6n9c-KmKKeSw&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUCuJXGsRkBqgYNs27e5MrFpjKtYMpIiyQTA&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShCVFzi8eJ5RTCOBmqmjw9hj6e2GxtiODG3w&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfmOl_xMxnnxhFc7u5tbFpq9u0_1XPdcfpOw&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqJgSWxgzai-B3e4-ATBcj0LCH-hvNX4lN6w&usqp=CAU'
    ]

    return (
        <View style={[{ flexDirection: 'row', flexWrap: 'wrap' }]}>
            {imge.map(i => {
                return (
                    <UserProfileImg img={i} />
                )
            })}
        </View>

    )
})

export default UserProfileImgList