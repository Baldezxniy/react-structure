import { Formik } from "formik";
import { Text, TextInput, TouchableHighlight, View } from "react-native";
import { chatStyles } from "../../styles/chatStyles";
import { MaterialCommunityIcons, SimpleLineIcons, AntDesign, Ionicons, Octicons } from 'react-native-vector-icons'
import { useDispatch } from "react-redux";
import { addMessageTC, redactMessageTC } from "../chatMessage/chatMessageSlice";
import { useTranslation } from 'react-i18next';


const FormChatInput = ({showRedactMode, cleanAddCheckArr, pintMessage, setPintMessage, redactMode, setRedactMode, chatMode, addCheckArr }) => {

    const { t } = useTranslation();

    const dispatch = useDispatch()


    //const startREdactText = addCheckArr.length === 1 ? addCheckArr[0].text : ''

    return (

        <>

            {chatMode === 'chat' ?

                < Formik
                    initialValues={{ text: '', redactText: addCheckArr.length === 1 ? addCheckArr[0].text : '' }}

                    onSubmit={(values, { setSubmitting }) => {
                        if (redactMode && values.redactText) {
                            dispatch(redactMessageTC({ text: values.redactText, messageId: addCheckArr[0].messageId, }))
                            setRedactMode(false)
                            cleanAddCheckArr()
                        } else if (values.text) {

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
                    {({ handleChange, handleSubmit, values }) => (
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
                                        <TouchableHighlight onPress={() => setPintMessage(null)}>
                                            <AntDesign name='close' style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: 22 }} />
                                        </TouchableHighlight>
                                    </View>
                                </View>}
                            {
                                // redact message and my id 
                                redactMode &&
                                <View style={{ flexDirection: "row", paddingHorizontal: 15, backgroundColor: '#282045', borderBottomColor: '#000', borderBottomWidth: 0.2, height: 50 }}>
                                    <View style={{ marginRight: 10, justifyContent: "center" }}>
                                        <Octicons name='pencil' style={{ color: '#000', fontSize: 22 }} />
                                    </View>
                                    <View style={{ justifyContent: "center", flexGrow: 1, marginTop: 0 }}>
                                        <View>
                                            <Text style={{ color: '#189fed', fontSize: 17, fontWeight: '700' }}>
                                                Редактирование
                                            </Text>
                                        </View>
                                        <View style={{ marginTop: 0, }}>
                                            <Text style={{ color: 'rgba(0, 0, 0, 0.5)' }}>
                                                {addCheckArr[0].text}
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={{ justifyContent: "center" }}>
                                        <TouchableHighlight onPress={() => { setRedactMode(false) }}>
                                            <AntDesign name='close' style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: 22 }} />
                                        </TouchableHighlight>
                                    </View>
                                </View>
                            }
                            <View style={chatStyles.input__container} >
                                <View style={chatStyles.input__button}>
                                    <MaterialCommunityIcons name='sticker-emoji' style={{ fontSize: 22, color: 'rgba(0, 0, 0, 0.5)' }} />

                                </View>
                                <View style={{ justifyContent: 'center', flexGrow: 1, flexShrink: 1, flexBasis: 1 }}>
                                    {!redactMode ? <TextInput

                                        style={{ height: 'auto', fontSize: 22 }}
                                        multiline={true}
                                        placeholder={t("chat.placeholder")}
                                        contentetable={true}
                                        onChangeText={e => {
                                            
                                            if (e !== " ") {
                                                handleChange('text')(e)
                                            }
                                        }}
                                        value={values.text}
                                    /> :
                                        <TextInput
                                            autoFocus
                                            style={{ height: 'auto', fontSize: 22 }}
                                            multiline={true}
                                            placeholder={t("chat.placeholder")}
                                            contenteditable={true}
                                            onChangeText={e => {

                                                if (e !== " ") {
                                                    handleChange('redactText')(e)
                                                }
                                            }}
                                            value={values.redactText}
                                        />
                                    }
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                    {!values.text && !redactMode && <View style={chatStyles.input__button}>
                                        <SimpleLineIcons name='paper-clip' style={{ fontSize: 22, color: 'rgba(0, 0, 0, 0.5)' }} />
                                    </View>}
                                    <View style={{ justifyContent: 'flex-end', paddingLeft: 15 }}>
                                        {
                                            !redactMode ? !!values.text ?
                                                <TouchableHighlight onPress={handleSubmit}>
                                                    <Ionicons name='send' style={{ color: 'blue', fontSize: 22 }} />
                                                </TouchableHighlight>
                                                :
                                                <TouchableHighlight onPress={() => alert('голосовые')}>
                                                    <SimpleLineIcons name='microphone' style={{ fontSize: 22, color: 'rgba(0, 0, 0, 0.5)' }} />
                                                </TouchableHighlight>
                                                :
                                                <TouchableHighlight onPress={handleSubmit}>
                                                    <View style={{ backgroundColor: '#6c91f0', borderRadius: 50, padding: 2 }}>
                                                        <Ionicons name='checkmark-outline' style={{ color: '#fff', fontSize: 22 }} />
                                                    </View>
                                                </TouchableHighlight>
                                        }
                                    </View>
                                </View>
                            </View >
                        </>

                    )}
                </Formik>
                :

                <>
                    <View style={[chatStyles.input__container, { height: 50 }]}>
                        <View style={{ flexDirection: "row", width: '50%' }}>
                            {
                                addCheckArr.length === 1 &&
                                <TouchableHighlight style={{ width: '100%' }} onPress={() => {
                                    showRedactMode()
                                    setPintMessage(addCheckArr[0]);
                                    setRedactMode(false)
                                    cleanAddCheckArr()
                                }}>
                                    <View style={{ flexDirection: "row", width: '100%' }}>
                                        <View style={{ justifyContent: "center", marginRight: 10 }}>
                                            <AntDesign name='back' style={{ fontSize: 20 }} />
                                        </View>
                                        <View style={{ justifyContent: "center" }}>
                                            <Text style={{ fontSize: 17 }}>
                                                Ответить
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableHighlight>
                            }
                        </View>
                        <View style={{ flexDirection: "row", width: '50%', justifyContent: 'flex-end' }}>
                            <View style={{ justifyContent: "center", marginRight: 10 }}>
                                <Text style={{ fontSize: 17 }}>
                                    Переслать
                                </Text>
                            </View>
                            <View style={{ justifyContent: "center" }}>
                                <AntDesign name='back' style={{ fontSize: 20, transform: [{ rotateY: '180deg' }] }} />
                            </View>
                        </View>
                    </View>
                </>

            }
        </>
    )
}

export default FormChatInput


