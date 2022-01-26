import { View, Text, TextInput, Modal, Pressable, TouchableHighlight } from 'react-native'
import { Ionicons } from 'react-native-vector-icons'
import React, { memo, useState } from 'react'
import { Formik } from 'formik'
import { modalStyle } from '../../assets/modalStyle'

const ModalName = memo(({ closeEditNameHeandler, openEditName }) => {

    const [isFocusFirst, setIsFocusFirst] = useState(false)
    const [isFocusSecond, setIsFocusSecond] = useState(false)

    return (
        <Modal
            transparent={true}
            visible={openEditName}
        >
            <Formik
                initialValues={{ firstName: '', lastName: '' }}

                onSubmit={values => {
                    if (values.firstName) {
                        console.log(values)
                    }
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View style={modalStyle.container}>

                        <View style={modalStyle.header}>
                            <View style={modalStyle.header__arrow}>
                                <Pressable
                                    onPress={closeEditNameHeandler}
                                >
                                    <Ionicons name='arrow-back' style={{ fontSize: 22, color: '#fff' }} />
                                </Pressable>
                            </View>
                            <View style={modalStyle.header__param}>
                                <Text style={{ fontSize: 18 }}>
                                    Изменить имя
                                </Text>
                            </View>
                            <TouchableHighlight onPress={handleSubmit} style={modalStyle.header__button}>
                                <Ionicons name='checkmark' style={{ color: '#fff', fontSize: 22 }} />
                            </TouchableHighlight>
                        </View>
                        <View style={modalStyle.main__container}>
                            <View>
                                <TextInput autoFocus
                                    style={[modalStyle.input, { borderBottomColor: isFocusFirst ? 'blue' : 'grey' }]}
                                    value={values.firstName}
                                    onChangeText={handleChange('firstName')}
                                    onFocus={() => setIsFocusFirst(true)}
                                    onBlur={() => setIsFocusFirst(false)}
                                    placeholder='Имя (обязательно)' />
                            </View>
                            <View>
                                <TextInput
                                    style={[modalStyle.input, { borderBottomColor: isFocusSecond ? 'blue' : 'grey' }]}
                                    value={values.lastName}
                                    onChangeText={handleChange('lastName')}
                                    onFocus={() => setIsFocusSecond(true)}
                                    onBlur={() => setIsFocusSecond(false)}
                                    placeholder='Фамилия (необязательно)' />
                            </View>
                        </View>
                    </View>
                )}
            </Formik>
        </Modal>
    )
})

export default ModalName