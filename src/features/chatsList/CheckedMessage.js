import { MaterialCommunityIcons } from 'react-native-vector-icons'

const CheckedMessage = ({ checked }) => {
    return (
        <>
            {
                checked ?
                    <MaterialCommunityIcons name='check-all' style={{ fontSize: 18, justifyContent: 'center', marginRight: 5 }} />

                    :
                    <MaterialCommunityIcons name='check' style={{ fontSize: 18, justifyContent: 'center', marginRight: 5 }} />

            }

        </>

    )
}

export default CheckedMessage