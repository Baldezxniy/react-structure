import { View, Text, TextInput, Modal, Pressable, TouchableHighlight } from 'react-native'
import { Ionicons } from 'react-native-vector-icons'
import React, { memo, useState } from 'react'
import { Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { getFirstName, getLastName } from './profileSelector'
import { modalStyle } from '../../styles/modalStyle'
import { editName } from './profileSlice'
import { useTranslation } from 'react-i18next';

const ModalName = memo(({ closeEditNameHeandler, openEditName }) => {

    const firstName = useSelector(getFirstName)
    const lastName = useSelector(getLastName)

    const [isFocusFirst, setIsFocusFirst] = useState(false)
    const [isFocusSecond, setIsFocusSecond] = useState(false)

    const { t } = useTranslation()

    const dispatch = useDispatch()

    return (
        <Modal
            transparent={true}
            visible={openEditName}
        >
            <Formik
                initialValues={{ firstName, lastName }}

                onSubmit={values => {
                    if (values.firstName) {
                        dispatch(editName({ firstName: values.firstName, lastName: values.lastName }))
                        closeEditNameHeandler()
                    }
                }}
            >
                {({ handleChange, handleSubmit, values }) => (
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
                                    {t("setting.modal.editName.title")}
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
                                    placeholder={t("setting.modal.editName.placeholder.firstName")} />
                            </View>
                            <View>
                                <TextInput
                                    style={[modalStyle.input, { borderBottomColor: isFocusSecond ? 'blue' : 'grey' }]}
                                    value={values.lastName}
                                    onChangeText={handleChange('lastName')}
                                    onFocus={() => setIsFocusSecond(true)}
                                    onBlur={() => setIsFocusSecond(false)}
                                    placeholder={t("setting.modal.editName.placeholder.lastName")} />
                            </View>
                        </View>
                    </View>
                )}
            </Formik>
        </Modal>
    )
})

export default ModalName