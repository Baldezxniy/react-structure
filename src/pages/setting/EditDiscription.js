import { View, Text, StyleSheet, TextInput, Modal, Pressable } from 'react-native'
import { Ionicons } from 'react-native-vector-icons'

import React, { useState } from 'react'

const EditDiscription = React.memo(({ setOpenEditDiscription, openEditDiscription }) => {

    const [isFocus, setIsFocus] = useState(false)

    return (
        <Modal
            transparent={true}
            visible={openEditDiscription}

        >
            <View style={styles.modal__Container}>
                <View style={styles.header}>
                    <View style={styles.header__arrow}>
                        <Pressable
                            onPress={() => setOpenEditDiscription(false)}
                        >
                            <Ionicons name='arrow-back' style={{ fontSize: 22, color: '#fff' }} />
                        </Pressable>
                    </View>
                    <View style={styles.header__param}>
                        <Text style={{ fontSize: 18 }}>
                            О себе
                        </Text>
                    </View>
                    <View style={styles.header__container__close}>
                        <Ionicons name='checkmark' style={{ color: '#fff', fontSize: 22 }} />
                    </View>
                </View>
                <View style={styles.main__container}>
                    <View>
                        <TextInput autoFocus style={[styles.input, { borderBottomColor: isFocus ? 'blue' : 'grey' }]}
                            onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)} placeholder='О себе' />
                    </View>
                    <View >
                        <Text style={{ color: 'rgba(0, 0, 0, 0.3)', fontSize: 17 }}>
                            Вы можете добавить несколько строк о себе. Они будут видны кто откроет Ваш профиль.
                        </Text>
                    </View>
                </View>
            </View>
        </Modal>
    )
})


const styles = StyleSheet.create({
    modal__Container: {
        flex: 1,

        backgroundColor: '#28282b'
    },
    header: {
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
        height: 50,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.6)',
        borderStyle: 'solid'

    },
    header__arrow: {
        justifyContent: 'center',
        marginRight: 20
    },
    header__param: {
        flexGrow: 1
    },
    main__container: {
        paddingHorizontal: 15,
        marginTop: 30
    },
    input: {
        height: 40,
        fontSize: 20,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderStyle: 'solid'

    },

})
export default EditDiscription