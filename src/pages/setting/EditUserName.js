import { View, Text, StyleSheet, TextInput, Modal, Pressable, Clipboard, TouchableHighlight } from 'react-native'
import { Ionicons } from 'react-native-vector-icons'

import React, { useState } from 'react'

const EditUserName = React.memo(({ openEditUserName, setOpenEditUserName }) => {

    const [isFocus, setIsFocus] = useState(false)

    return (
        <Modal
            transparent={true}
            visible={openEditUserName}

        >
            <View style={styles.modal__Container}>
                <View style={styles.header}>
                    <View style={styles.header__arrow}>
                        <Pressable
                            onPress={() => setOpenEditUserName(false)}
                        >
                            <Ionicons name='arrow-back' style={{ fontSize: 22, color: '#fff' }} />
                        </Pressable>
                    </View>
                    <View style={styles.header__param}>
                        <Text style={{ fontSize: 18 }}>
                            Имя пользователя
                        </Text>
                    </View>
                    <View style={styles.header__container__close}>
                        <Ionicons name='checkmark' style={{ color: '#fff', fontSize: 22 }} />
                    </View>
                </View>
                <View style={styles.main__container}>
                    <View>
                        <TextInput autoFocus style={[styles.input, { borderBottomColor: isFocus ? 'blue' : 'grey' }]}
                            onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)} placeholder='Ваше имя пользователя' />
                    </View>
                    <View >
                        <Text style={{ color: 'rgba(0, 0, 0, 0.3)', fontSize: 17 }}>
                            Вы можете выбрать публичное имя пользователя в <Text style={{ fontWeight: '700' }}>Telegram</Text>. В этом случае другие люди найти Вас по такому имени и связаться, не зная Вашего телефона.
                        </Text>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ color: 'rgba(0, 0, 0, 0.3)', fontSize: 17 }}>
                            Вы можете использовать символы a-z, 0-9 и подчёркивания, минимальная длина 5 символов.
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


export const CopyUserName = ({ openCopy, setOpenCopy }) => {
    return (
        <Modal
            transparent={true}
            visible={openCopy}

        >
            <TouchableHighlight underlayColor='none' onPressOut={() => setOpenCopy(false)} style={stylesCopy.modal__container}>

                <View style={stylesCopy.copy__block}>
                    <Pressable style={{width:'100%', height:'100%', justifyContent:'center', paddingLeft:20}}
                        onPress={() => {
                            Clipboard.setString('@vova228');
                            setOpenCopy(false)
                        }
                        }
                    >
                        <Text style={{fontSize:16}}>
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
        flexDirection:'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    copy__block: {
        flexGrow:1,
        backgroundColor: '#47464f',
        height:55,
        alignItems:'center',
        marginHorizontal: 15,
        borderRadius:5
    }
})



export default EditUserName