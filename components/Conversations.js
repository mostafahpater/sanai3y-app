import { 
    StyleSheet, 
    Text, View, 
    Image,
    TouchableOpacity
} from 'react-native'
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { pathUrl } from '../Config/env';
import { getImageUrl } from '../Config/imageUrl';





const Conversations = ({conversation, currentSender}) => {

// The current Reciever
const [currentReciever, setCurrentReciever] = useState(null); 
// The image Url
// const [currentRecieverImage, setCurrentRecieverImage] = useState("");

// Getting the data of the current reciever
useEffect(() => {
    const currentRecieverId = conversation.members.find((id) => id !== currentSender?._id);
    // console.log(currentRecieverId);
    const getRecieverData = async () => {
        const res = await axios.get(`${pathUrl}/client/users/${currentRecieverId}`);
        let dataImage = getImageUrl(res.data.data.img)
        // console.log(res.data.data)
        setCurrentReciever({...res.data.data, newImage: dataImage})
        // console.log(dataImage)
    }

    getRecieverData();

}, []);

console.log(currentReciever)

    return (
        <>
            <TouchableOpacity style={styles.conv}>
                <Image source={require("../assets/noAvatar.png")} style={styles.image} />
                <Text style={styles.recieverName}> محمد</Text>
            </TouchableOpacity>
            <Text>tdrtd</Text>
        </>
    )
}

export default Conversations

const styles = StyleSheet.create({
    conv: {
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 60,
        margin: 10

    },
    recieverName: {
        fontSize: 20,
        backgroundColor: "green",
    }
})