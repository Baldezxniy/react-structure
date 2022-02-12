import { View, Text, StyleSheet, Modal, Pressable, Clipboard, TouchableHighlight } from 'react-native'
import React from 'react'

export const ModalCopy = ({ openCopy, setOpenCopy, textCopy, setTextCopy }) => {
    return (
        <Modal 
            transparent={true}
            visible={openCopy}

        >
            <TouchableHighlight underlayColor='none' onPressOut={() => { setOpenCopy(false); setTextCopy('') }} style={stylesCopy.modal__container}>

                <View style={stylesCopy.copy__block}>
                    <Pressable style={{ width: '100%', height: '100%', justifyContent: 'center', paddingLeft: 20 }}
                        onPress={() => {
                            Clipboard.setString(textCopy);
                            setOpenCopy(false)
                            setTextCopy('')
                        }
                        }
                    >
                        <Text style={{ fontSize: 16 }}>
                            Копировать
                        </Text>
                    </Pressable>
                </View>

            </TouchableHighlight>
        </Modal >
    )
}

const stylesCopy = StyleSheet.create({
    modal__container: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    copy__block: {
        flexGrow: 1,
        backgroundColor: '#47464f',
        height: 55,
        alignItems: 'center',
        marginHorizontal: 15,
        borderRadius: 5
    }
})



