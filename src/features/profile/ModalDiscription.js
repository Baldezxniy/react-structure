import { View, Text, TextInput, Modal, Pressable, TouchableHighlight } from 'react-native'
import { Ionicons } from 'react-native-vector-icons'
import React, { memo, useState } from 'react'
import { Formik } from 'formik'
import { modalStyle } from '../../styles/modalStyle'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { getDiscription } from './profileSelector'
import { editDiscriptionTC } from './profileSlice'
import { useTranslation } from 'react-i18next';




const ModalDiscription = memo(({ openEditDiscription, closeEditDiscriptionHandler }) => {
    const { t } = useTranslation()

    const discription = useSelector(getDiscription)

    const [isFocus, setIsFocus] = useState(false)

    const validationsSchema = yup.object().shape({
        discription: yup.string()
            .max(70, t("setting.modal.bio.errors.maxLength"))
    })

    const diapatch = useDispatch()
    return (
        <Modal
            transparent={true}
            visible={openEditDiscription}

        >
            <Formik
                initialValues={{
                    discription: discription
                }}

                onSubmit={values => {
                    diapatch(editDiscriptionTC({ discription: values.discription }))
                    closeEditDiscriptionHandler()
                }}
                validationSchema={validationsSchema}
            >

                {({ errors, handleChange, handleSubmit, values }) => (
                    <View style={modalStyle.container}>
                        <View style={modalStyle.header}>
                            <View style={modalStyle.header__arrow}>
                                <Pressable
                                    onPress={closeEditDiscriptionHandler}
                                >
                                    <Ionicons name='arrow-back' style={{ fontSize: 22, color: '#fff' }} />
                                </Pressable>
                            </View>
                            <View style={modalStyle.header__param}>
                                <Text style={{ fontSize: 18 }}>
                                    {t("setting.modal.bio.title")}
                                </Text>
                            </View>
                            <TouchableHighlight onPress={handleSubmit} style={modalStyle.header__button}>
                                <Ionicons name='checkmark' style={{ color: '#fff', fontSize: 22 }} />
                            </TouchableHighlight>
                        </View>
                        <View style={modalStyle.main__container}>
                            <View>
                                <TextInput
                                    multiline
                                    autoFocus
                                    style={[modalStyle.textarea, { borderBottomColor: isFocus ? 'blue' : 'grey' }]}
                                    value={values.discription}
                                    onChangeText={handleChange('discription')}
                                    onFocus={() => setIsFocus(true)}
                                    onBlur={() => setIsFocus(false)}
                                    placeholder={t("setting.modal.bio.placeholder")} />
                            </View>
                            {errors.discription && <View style={{ marginBottom: 10 }}>
                                <Text style={{ color: 'red', fontSize: 17 }}>{errors.discription}</Text></View>}
                            <View >
                                <Text style={{ color: 'rgba(0, 0, 0, 0.3)', fontSize: 17 }}>
                                    {t("setting.modal.bio.text")}
                                </Text>
                            </View>
                        </View>
                    </View>
                )}
            </Formik>
        </Modal>
    )
})

export default ModalDiscription