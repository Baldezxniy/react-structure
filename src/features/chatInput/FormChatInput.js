import { Formik } from "formik";
import { Text, TextInput, TouchableHighlight, View } from "react-native";
import { chatStyles } from "../../styles/chatStyles";
import { MaterialCommunityIcons, SimpleLineIcons, AntDesign, Ionicons } from 'react-native-vector-icons'
import { useDispatch } from "react-redux";
import { addMessageTC } from "../chatMessage/chatMessageSlice";
import { useTranslation } from 'react-i18next';


const FormChatInput = ({ pintMessage, setPintMessage }) => {

    const { t } = useTranslation();

    const dispatch = useDispatch()

    return (

        <Formik
            initialValues={{ text: '' }}

            onSubmit={(values, { setSubmitting }) => {
                if (values.text) {
                    dispatch(addMessageTC({

                        text: values.text, pinttext: pintMessage != null ? pintMessage.text : null,
                        pintFirstName: pintMessage != null ? pintMessage.firstName : null, firstName: 'БАЛДЁЖНЫЙ', lastName: '', pintMessageId: pintMessage != null ? pintMessage.messageId : null
                    }))
                    setPintMessage(null)
                    values.text = ''
                    setSubmitting(false)
                }
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values, setFieldValue }) => (
                <>
                    {pintMessage &&
                        <View style={{ flexDirection: "row", paddingHorizontal: 15, backgroundColor: '#282045', borderBottomColor: '#000', borderBottomWidth: 0.2, height: 50 }}>
                            <View style={{ marginRight: 10, justifyContent: "center" }}>
                                <MaterialCommunityIcons name='share' style={{ color: '#189fed', fontSize: 27 }} />
                            </View>
                            <View style={{ justifyContent: "center", flexGrow: 1, marginTop: 0 }}>
                                <View>
                                    <Text style={{ color: '#189fed', fontSize: 17 }}>
                                        {pintMessage.firstName}
                                    </Text>
                                </View>
                                <View style={{ marginTop: 0, }}>
                                    <Text style={{ color: 'rgba(0, 0, 0, 0.5)' }}>
                                        {pintMessage.text}
                                    </Text>
                                </View>
                            </View>
                            <View style={{ justifyContent: "center" }}>
                                <TouchableHighlight onPress={() => { setPintMessage(null) }}>
                                    <AntDesign name='close' style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: 22 }} />
                                </TouchableHighlight>
                            </View>
                        </View>}
                    <View style={chatStyles.input__container} >
                        <View style={chatStyles.input__button}>
                            <MaterialCommunityIcons name='sticker-emoji' style={{ fontSize: 22, color: 'rgba(0, 0, 0, 0.5)' }} />

                        </View>
                        <View style={{ justifyContent: 'center', flexGrow: 1, flexShrink: 1, flexBasis: 1 }}>
                            <TextInput
                                autoFocus
                                style={{ height: 'auto', fontSize: 22 }}
                                multiline={true}
                                placeholder={t("chat.placeholder")}
                                contenteditable={true}
                                onChangeText={e => {
                                    if (e !== " ") {
                                        handleChange('text')(e)
                                    }
                                }}
                                value={values.text}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                            {!values.text && <View style={chatStyles.input__button}>
                                <SimpleLineIcons name='paper-clip' style={{ fontSize: 22, color: 'rgba(0, 0, 0, 0.5)' }} />
                            </View>}
                            <View style={{ justifyContent: 'flex-end', paddingLeft: 15 }}>
                                {
                                    !!values.text ?
                                        <TouchableHighlight onPress={handleSubmit}>
                                            <Ionicons name='send' style={{ color: 'blue', fontSize: 22 }} />
                                        </TouchableHighlight>
                                        :
                                        <TouchableHighlight onPress={() => alert('голосовые')}>
                                            <SimpleLineIcons name='microphone' style={{ fontSize: 22, color: 'rgba(0, 0, 0, 0.5)' }} />
                                        </TouchableHighlight>
                                }
                            </View>
                        </View>
                    </View >
                </>

            )}
        </Formik>

    )
}

export default FormChatInput


