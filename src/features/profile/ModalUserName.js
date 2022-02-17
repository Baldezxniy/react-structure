import { View, Text, TextInput, Modal, Pressable, TouchableHighlight } from 'react-native'
import { Ionicons } from 'react-native-vector-icons'
import React, { memo, useState } from 'react'
import { Formik } from 'formik'
import { modalStyle } from '../../styles/modalStyle'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { getUserName } from './profileSelector'
import { editUserNameTC } from './profileSlice'
import { useTranslation } from 'react-i18next';


const ModalUserName = memo(({ openEditUserName, closeEditUserNameHandler }) => {

    const userName = useSelector(getUserName)

    const [isFocus, setIsFocus] = useState(false)
    const { t } = useTranslation();
    const validationsSchema = yup.object().shape({
        userName: yup.string()
            .matches(/[A-Za-z][^!@#$%^&*()_./]/ig, t("setting.modal.username.errors.invalid"))
            .min(5, t("setting.modal.username.errors.minLength"))
            .max(20, t("setting.modal.username.errors.maxLength"))

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
                {({ errors, handleChange, handleSubmit, values }) => (
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
                                    {t("setting.modal.username.title")}
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
                                    placeholder={t("setting.modal.username.placeholder")} />
                            </View>
                            {errors.userName && <View style={{ marginBottom: 10 }}><Text style={{ color: 'red', fontSize: 17 }}>{errors.userName}</Text></View>}
                            <View >
                                <Text style={{ color: 'rgba(0, 0, 0, 0.3)', fontSize: 17 }}>
                                    {t("setting.modal.username.text.first")}
                                </Text>
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <Text style={{ color: 'rgba(0, 0, 0, 0.3)', fontSize: 17 }}>
                                    {t("setting.modal.username.text.last")}
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