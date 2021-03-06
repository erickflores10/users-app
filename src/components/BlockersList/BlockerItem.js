import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { ButtonSelected } from "./ButtomSelected";

const Blocker = ({ nombres, apellidos, avatar, reputacion, profileData, serviceId }) => (
    <View style={ styles.blockerContainer }>
        <Image
            style={ styles.userAvatar } 
            source={{ uri: avatar }}
        />
        <View style={ styles.infoContainer }>
            <Text style={ styles.fullName }>{ nombres } { apellidos }</Text>
            <View style={[ styles.subContainer, styles.separatorContainer ]}>
                <View style={ styles.subContainer }>
                    <Text style={{ color: "#ffffff" }}>{ reputacion }</Text>
                    <Icon 
                        name="md-star-sharp"
                        size={ 20 }
                        color="#ffb552"
                    />
                </View>
            </View>
            <ButtonSelected profileData={profileData} avatar={avatar} serviceId={serviceId}/>
        </View>
    </View>
);

export const BlockerItem = ({blockersList, serviceId}) => {

    const hostUrl = "https://pasteblockbucket.s3.amazonaws.com/uploads/";

    const renderBlocker = ({ item }) => {
        const imgUrl = hostUrl + item.foto;
        return(
            <Blocker 
                nombres={ item.usuario.nombre }
                apellidos={ item.usuario.apellido }
                avatar={ imgUrl }
                reputacion={ item.reputacion }
                profileData = { item }
                serviceId={serviceId}
            />
        );
    }


    return(
        <FlatList 
            data={ blockersList }
            renderItem={ renderBlocker }
            keyExtractor={ item => item.id }
        />
    );
}

const styles = StyleSheet.create({
    blockerContainer: {
        backgroundColor: "#004aad",
        marginHorizontal: 20,
        marginBottom: 20,
        width: "90%",
        height: 150,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    fullName: {
        color: "#ffffff",
        fontSize: 18
    },
    userAvatar: {
        width: 100,
        height: 100,
        borderRadius: 100
    },
    infoContainer: {
        width: 200,
        marginLeft: 20
    },
    subContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    separatorContainer: {
        justifyContent: "space-between"
    }
});