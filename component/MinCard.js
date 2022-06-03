import React from 'react';

import {
    View,
    Text,Image,
    TouchableOpacity,TextInput,Dimensions
} from 'react-native';
import { NativeBaseProvider,Button} from 'native-base';
import { useNavigation } from '@react-navigation/native';

const MinCard = (props) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={()=>navigation.navigate('VideoPlayer', { name: 'VideoPlayer',videoId:props.videoId,title:props.title })}>
            <View style={{flexDirection:'row',margin:10,marginBottom:0}}>
            <Image style={{ width: "45%", height: 100}}
                source={{ uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}} />
                <View style={{marginLeft:9}}>
                    <Text
                    style={{fontSize:17 ,fontWeight:'bold',
                    width:Dimensions.get("screen").width/2}}
                    ellipsizeMode="tail"
                    numberOfLines={3}
                    >{props.title}</Text>
                    <Text style={{fontSize:12}}>{props.chanel}</Text>
                </View>
        </View>
        </TouchableOpacity>
    );
}

export default MinCard; 