import { View, Text, StyleSheet, TextInput, Modal, Pressable, Clipboard, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'

export const CopyUserName = ({ openCopy, setOpenCopy }) => {
    return (
        <Modal
            transparent={true}
            visible={openCopy}

        >
            <TouchableHighlight underlayColor='none' onPressOut={() => setOpenCopy(false)} style={stylesCopy.modal__container}>

                <View style={stylesCopy.copy__block}>
                    <Pressable style={{ width: '100%', height: '100%', justifyContent: 'center', paddingLeft: 20 }}
                        onPress={() => {
                            Clipboard.setString('@vova228');
                            setOpenCopy(false)
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



