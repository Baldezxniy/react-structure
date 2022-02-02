import { Formik } from "formik";
import { TextInput, TouchableHighlight, View } from "react-native";
import { chatStyles } from "../../styles/chatStyles";
import { MaterialCommunityIcons, SimpleLineIcons, Ionicons } from 'react-native-vector-icons'


const FormChatInput = (props) => {

    return (

        <Formik
            initialValues={{ text: '' }}

            onSubmit={(values) => {
                alert(values.text)
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                < View style={chatStyles.input__container} >
                    <View style={chatStyles.input__button}>
                        <MaterialCommunityIcons name='sticker-emoji' style={{ fontSize: 22, color: 'rgba(0, 0, 0, 0.5)' }} />

                    </View>
                    <View style={{ justifyContent: 'center', flexGrow: 1 }}>
                        <TextInput
                            autoFocus
                            style={{ height: 20, resize: 'none', fontSize: 16 }}
                            multiline={true}
                            placeholder='Сообщение'

                            contenteditable={true}

                            onChangeText={handleChange('text')}
                            onBlur={handleBlur('text')}
                            value={values.text}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={chatStyles.input__button}>
                            <SimpleLineIcons name='paper-clip' style={{ fontSize: 22, color: 'rgba(0, 0, 0, 0.5)' }} />
                        </View>
                        <View style={{ justifyContent: 'flex-end', paddingBottom: 12 }}>
                            {
                                values.text ?
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
            )}
        </Formik>

    )
}

export default FormChatInput


