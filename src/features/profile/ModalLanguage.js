import { Modal, Pressable, Text, TouchableHighlight, View } from "react-native"
import { ScrollView } from "react-native"
import { modalStyle } from "../../styles/modalStyle"
import { Ionicons } from 'react-native-vector-icons'
import { useSelector, useDispatch } from "react-redux"
import { getI18nTC } from "../../app/appSlice"
import { useTranslation } from 'react-i18next';
import { TextInput } from "react-native"
import { useState } from "react"

export const ModalLanguage = ({ lngModal, setLngModal }) => {
    ;

    const params = [
        {
            language: 'ru',
            title: 'Русский',
            titleEn: 'Russian'
        },
        {
            language: 'en',
            title: 'English',
            titleEn: 'English'
        }

    ]
    const { t } = useTranslation()

    const dispatch = useDispatch()
    const changeLanguage = (lng) => {
        dispatch(getI18nTC(lng))
        setLngModal(false)
    }
    const activeLanguage = useSelector(state => state.app.i18n)
    const [headerMode, setHeaderMode] = useState('default')

    const [searchText, setSearchText] = useState('')
    const searchParams = params.filter((item) => item.title.includes(searchText))


    const headerSwitch = () => {
        switch (headerMode) {
            case 'default': {
                return (
                    <>
                        <View style={modalStyle.header__arrow}>
                            <Pressable
                                onPress={() => setLngModal(false)}
                            >
                                <Ionicons name='arrow-back' style={{ fontSize: 22, color: '#fff' }} />
                            </Pressable>
                        </View>
                        <View style={modalStyle.header__param}>
                            <Text style={{ fontSize: 18 }}>
                                {t("setting.modal.changeLanguage.title")}
                            </Text>
                        </View>
                        <TouchableHighlight onPress={() => setHeaderMode('search')} style={modalStyle.header__button}>
                            <Ionicons name='ios-search-outline' style={{ color: '#fff', fontSize: 22 }} />
                        </TouchableHighlight>
                    </>
                )
            } case 'search': {
                return (
                    <>
                        <View style={modalStyle.header__arrow}>
                            <Pressable
                                onPress={() => {
                                    setHeaderMode('default')
                                    setSearchText('')
                                }}
                            >
                                <Ionicons name='arrow-back' style={{ fontSize: 22, color: '#fff' }} />
                            </Pressable>
                        </View>
                        <View style={{ justifyContent: 'center', flexGrow: 1, flexShrink: 1, flexBasis: 1 }}>
                            <TextInput
                                placeholder='Поиск'
                                style={{ fontSize: 18 }}
                                onChangeText={(e) => setSearchText(e)}
                                value={searchText}
                            />
                        </View>
                        <TouchableHighlight onPress={() => setSearchText('')} style={modalStyle.header__button}>
                            <Ionicons name='close' style={{ color: '#fff', fontSize: 22 }} />
                        </TouchableHighlight>
                    </>
                )
            }
        }
    }
    return (
        <Modal
            transparent={true}
            visible={lngModal}
        >

            <View style={modalStyle.container}>

                <View style={modalStyle.header}>
                    {
                        headerSwitch()
                    }
                </View>
                <View style={{ flexGrow: 1 }}>

                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <>
                            {
                                headerMode === 'default' &&
                                <View style={{ paddingHorizontal: 15, height: 40, justifyContent: "center" }}>
                                    <Text style={{ color: '#4169E1', fontSize: 17, fontWeight: '700' }}>
                                        {t("setting.modal.changeLanguage.title")}
                                    </Text>
                                </View>
                            }
                            {
                                headerMode === 'default' && params.map((item, index) => {
                                    return (
                                        <RenderLanguageItem
                                            activeLanguage={activeLanguage}
                                            changeLanguage={changeLanguage}
                                            lastItem={index + 1 !== params.length}
                                            language={item.language} title={item.title}
                                            titleEn={item.titleEn} />
                                    )
                                })
                            }
                        </>

                        <>
                            {
                                headerMode === 'search' && searchParams.length > 0 && <View style={{ paddingHorizontal: 15, height: 40, justifyContent: "center" }}>
                                    <Text style={{ color: '#4169E1', fontSize: 17, fontWeight: '700' }}>
                                        {t("setting.modal.changeLanguage.title")}
                                    </Text>
                                </View>
                            }
                            {
                                headerMode === 'search' &&
                                searchParams.map((item, index) => {
                                    return (
                                        <RenderLanguageItem
                                            activeLanguage={activeLanguage}
                                            changeLanguage={changeLanguage}
                                            lastItem={index + 1 !== searchParams.length}
                                            language={item.language} title={item.title}
                                            titleEn={item.titleEn} />
                                    )
                                })
                            }
                        </>
                        {
                            searchParams.length === 0 &&
                            <View style={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }} >
                                <Text style={{ fontSize: 20 }}>
                                    Нет результатов
                                </Text>
                            </View>
                        }
                    </ScrollView>
                </View>
            </View>
        </Modal>
    )
}

export default ModalLanguage

const RenderLanguageItem = ({ activeLanguage, language, title, titleEn, lastItem, changeLanguage }) => {


    const isLanguage = activeLanguage === language ? true : false
    return (
        <TouchableHighlight underlayColor='#a9c0d6' onPress={() => changeLanguage(language)} >
            <View style={{ flexDirection: "row", paddingLeft: 10, height: 65, }}>
                <View style={{ width: 40, justifyContent: "center", alignItems: "center" }}>
                    <View style={{ width: 20, height: 20, borderRadius: 50, borderWidth: 1, justifyContent: 'center', alignItems: "center", borderColor: isLanguage ? '#0084ff' : 'rgba(0, 0, 0, 0.5)' }}>
                        {isLanguage && <View style={{ height: 10, width: 10, backgroundColor: '#0084ff', borderRadius: 50 }} />}
                    </View>
                </View>
                <View style={{ paddingVertical: 10, borderBottomWidth: lastItem ? 0.6 : 0, flexGrow: 1 }}>
                    <Text style={{ fontSize: 18.5 }}>
                        {title}
                    </Text>
                    <Text style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: 14, marginTop: 3 }}>
                        {titleEn}
                    </Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}