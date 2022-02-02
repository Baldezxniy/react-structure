import { View, Text, TextInput, Modal, Pressable, TouchableHighlight } from 'react-native'
import { Ionicons } from 'react-native-vector-icons'
import React, { memo, useState } from 'react'
import { Formik } from 'formik'
import { modalStyle } from '../../styles/modalStyle'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { getUserName } from './profileSelector'
import { editUserNameTC } from './profileSlice'


const ModalUserName = memo(({ openEditUserName, closeEditUserNameHandler }) => {

    const userName = useSelector(getUserName)

    const [isFocus, setIsFocus] = useState(false)

    const validationsSchema = yup.object().shape({
        userName: yup.string()
            .matches(/[^!@#$%^&*()_./][A-Za-z]/ig, 'Такое имя пользователя недоступно')
            .min(5, 'Минимальная длина 5 символов')
            .max(20, 'максимальная длина 20 символов')

    })
    const dispatch = useDispatch()


    return (
        <Modal
            transparent={true}
            visible={openEditUserName}

        >
            <Formik
                initialValues={{
                    userName
                }}

                onSubmit={values => {
                    dispatch(editUserNameTC({ userName: values.userName }))
                    closeEditUserNameHandler()

                }}
                validationSchema={validationsSchema}
            >
                {({ errors, handleChange, handleBlur, handleSubmit, values }) => (
                    <View style={modalStyle.container}>
                        <View style={modalStyle.header}>
                            <View style={modalStyle.header__arrow}>
                                <Pressable
                                    onPress={closeEditUserNameHandler}
                                >
                                    <Ionicons name='arrow-back' style={{ fontSize: 22, color: '#fff' }} />
                                </Pressable>
                            </View>
                            <View style={modalStyle.header__param}>
                                <Text style={{ fontSize: 18 }}>
                                    Имя пользователя
                                </Text>
                            </View>
                            <TouchableHighlight onPress={handleSubmit} style={modalStyle.header__button}>
                                <Ionicons name='checkmark' style={{ color: '#fff', fontSize: 22 }} />
                            </TouchableHighlight>
                        </View>
                        <View style={modalStyle.main__container}>
                            <View>
                                <TextInput
                                    autoFocus
                                    style={[modalStyle.input, { borderBottomColor: isFocus ? 'blue' : 'grey' }]}
                                    value={values.userName}
                                    onChangeText={handleChange('userName')}
                                    onFocus={() => setIsFocus(true)}
                                    onBlur={() => setIsFocus(false)}
                                    placeholder='Ваше имя пользователя' />
                            </View>
                            {errors.userName && <View style={{ marginBottom: 10 }}><Text style={{ color: 'red', fontSize: 17 }}>{errors.userName}</Text></View>}
                            <View >
                                <Text style={{ color: 'rgba(0, 0, 0, 0.3)', fontSize: 17 }}>
                                    Вы можете выбрать публичное имя пользователя в <Text style={{ fontWeight: '700' }}>
                                        Telegram</Text>. В этом случае другие люди найти Вас по такому имени и связаться, не зная Вашего телефона.
                                </Text>
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <Text style={{ color: 'rgba(0, 0, 0, 0.3)', fontSize: 17 }}>
                                    Вы можете использовать символы a-z, 0-9 и подчёркивания, минимальная длина 5 символов.
                                </Text>
                            </View>
                        </View>
                    </View>
                )}
            </Formik>

        </Modal>
    )
})

export default ModalUserName