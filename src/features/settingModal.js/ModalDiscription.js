import { View, Text, TextInput, Modal, Pressable, TouchableHighlight } from 'react-native'
import { Ionicons } from 'react-native-vector-icons'
import React, { memo, useState } from 'react'
import { Formik } from 'formik'
import { modalStyle } from '../../assets/modalStyle'
import * as yup from 'yup'

const ModalDiscription = memo(({ openEditDiscription, setOpenEditDiscription }) => {
    const [isFocus, setIsFocus] = useState(false)

    const validationsSchema = yup.object().shape({
        discription: yup.string()
            .max(70, 'максимальная длина 70 символов')
    })
    return (
        <Modal
            transparent={true}
            visible={openEditDiscription}

        >
            <Formik
                initialValues={{
                    discription: ''
                }}

                onSubmit={values => {

                    if (values.discription) {
                        console.log(values)
                    }
                }}
                validationSchema={validationsSchema}
            >

                {({ errors, handleChange, handleBlur, handleSubmit, values }) => (
                    <View style={modalStyle.container}>
                        <View style={modalStyle.header}>
                            <View style={modalStyle.header__arrow}>
                                <Pressable
                                    onPress={() => setOpenEditDiscription(false)}
                                >
                                    <Ionicons name='arrow-back' style={{ fontSize: 22, color: '#fff' }} />
                                </Pressable>
                            </View>
                            <View style={modalStyle.header__param}>
                                <Text style={{ fontSize: 18 }}>
                                    О себе
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
                                    placeholder='О себе' />
                            </View>
                            {errors.discription && <View style={{ marginBottom: 10 }}><Text style={{ color: 'red', fontSize: 17 }}>{errors.discription}</Text></View>}
                            <View >
                                <Text style={{ color: 'rgba(0, 0, 0, 0.3)', fontSize: 17 }}>
                                    Вы можете добавить несколько строк о себе. Они будут видны кто откроет Ваш профиль.
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