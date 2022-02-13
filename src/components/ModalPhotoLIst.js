import { memo, useEffect, useState } from "react";
import React, { useRef } from "react";
import {
    ScrollView,
    Text,
    StyleSheet,
    View,
    ImageBackground,
    Animated,
    useWindowDimensions,
    Modal,
    Pressable,
    TouchableHighlight
} from "react-native";
import { modalStyle } from "../styles/modalStyle";
import { Ionicons } from 'react-native-vector-icons'



const images = [
    'https://avatarko.ru/img/kartinka/2/cherep_kapyushon_uzhasy_1606.jpg',
    "https://telemetr.me/photos/b540bf9a2b124b280dc14add13f47f4a.jpg",
    "https://i.ytimg.com/vi/IyhxbXKi5mM/maxresdefault.jpg",
    "https://bygaga.com.ua/uploads/posts/1344777337_milie_kartinki_pro_lyubov-42.jpg"
]

export const ModalPhotoList = memo(({ photoModal, closeModal }) => {

    const { width: windowWidth } = useWindowDimensions();

    const scrollX = useRef(new Animated.Value(0)).current;

    // const header = useRef(new Animated.Value(-56)).current
    // const headerHandler = (top) => {
    //     Animated.timing(top, {
    //         toValue: top,
    //         duration: 500,
    //         useNativeDriver: false
    //     }).start();
    // }
    const [openShow, setOpenShow] = useState(false)
    // useEffect(() => {
    //     if (openShow) {
    //         headerHandler(0)
    //     } else if (!openShow) {
    //         headerHandler(-56)
    //     }
    // }, [openShow])


    return (
        <Modal
            transparent={true}
            visible={photoModal}

        >
            <View style={{ flex: 1, backgroundColor: '#000', alignItems: "center", justifyContent: "center" }}>
                <View style={styles.scrollContainer}>

                    <ScrollView
                        contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}
                        horizontal={true}
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        onScroll={Animated.event([
                            {
                                nativeEvent: {
                                    contentOffset: {
                                        x: scrollX
                                    }
                                }
                            }
                        ],
                            { useNativeDriver: false }
                        )}
                        scrollEventThrottle={1}
                    >
                        {images.map((image, imageIndex) => {
                            return (
                                <View key={imageIndex}
                                    style={{ width: windowWidth, height: 'auto' }} >
                                    <ImageBackground source={{ uri: image }} style={styles.card}>
                                        <TouchableHighlight underlayColor='red'
                                            onPress={() => setOpenShow(!openShow)} style={{ flex: 1 }}>
                                            <>
                                            </>
                                        </TouchableHighlight>
                                    </ImageBackground>
                                </View>
                            );
                        })}
                    </ScrollView>
                    <Animated.View style={[modalStyle.header, { position: "absolute", top: 0, left: 0, right: 0, backgroundColor: 'rgba(0, 0, 0, 0.8)' }]}>
                        <View style={modalStyle.header__arrow}>
                            <Pressable
                                onPress={closeModal}
                            >
                                <Ionicons name='arrow-back' style={{ fontSize: 22, color: '#fff' }} />
                            </Pressable>
                        </View>
                        <View style={modalStyle.header__param}>
                            <Text style={{ fontSize: 18 }}>
                                Vovik
                            </Text>
                        </View>
                        <TouchableHighlight onPress={''} style={modalStyle.header__button}>
                            <Ionicons name='checkmark' style={{ color: '#fff', fontSize: 22 }} />
                        </TouchableHighlight>
                    </Animated.View>
                </View>
            </View>
        </Modal >
    )
})







const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    scrollContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    card: {
        flex: 1,
        marginHorizontal: 5,
        alignItems: "center",
        justifyContent: "center"
    },
});