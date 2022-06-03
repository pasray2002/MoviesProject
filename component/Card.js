import React from 'react';

import {
    View,
    Text,
    TouchableOpacity,Image,Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeBaseProvider, Button } from 'native-base';
//uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa9ccsrS24RIKnzGuzw4MkPu2jYCREFQZqbA&usqp=CAU"
const Card = (props) => {
    const navigation = useNavigation()
    return (
        <View pointerEvents="none">
            <TouchableOpacity  onPress={()=>navigation.navigate('VideoPlayer', { name: 'VideoPlayer',videoId:props.videoId,title:props.title,chanel:props.chanel })}>
            
            <View style={{ marginBottom:15}} disabled={true}>
            <Image style={{ width: "100%", height: 200 }}
                source={{ uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}} />
            <View style={{flexDirection:'row',margin:5}}>
                <Image style={{tintColor:'#212121'}} size={10}   source={require('../asset/circle2.png')} alt="Alternate Text" />
                <View style={{marginLeft:10}}>
                    
                    <Text style={{fontSize:18,fontWeight:'bold',width:Dimensions.get("screen").width-50}}
                    ellipsizeMode="tail"
                    numberOfLines={2}
                    >{props.title}</Text>
                    <Text>{props.chanel}</Text>
                </View>

            </View>
        </View>
        </TouchableOpacity>
            <Text>Paye via OM</Text>
        </View>
    )
}

export default Card;