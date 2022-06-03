import React from 'react';
import { WebView } from 'react-native-webview';
import {
    View,
    Text,Image,
    TouchableOpacity,TextInput,Dimensions,FlatList
} from 'react-native';
import { NativeBaseProvider,Button} from 'native-base';
import { useSelector } from 'react-redux';
import Card from './Card';


const VideoPlayer = ({route})=>{
    const cardData = useSelector(state =>{
        return state
    })
    const {videoId,title,chanel} = route.params
    console.log(route.params)
    return(
        <View style={{flex:1}}>
            <View style={{width:"100%",height:200}} >
                <WebView
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri:`https://www.youtube.com/embed/${videoId}`}}
                />
            </View>
            <Text style={{fontSize:20,
                          width:Dimensions.get("screen").width-50,
                          margin:9}} 
                          numberOfLines={2}
                          ellipsizeMode="tail">
                            {title}

            </Text>
            <View  style={{borderBottomWidth:1}}/>
             <FlatList
                keyExtractor={(item) => item.id.videoId}
                data={cardData}
                renderItem={({ item }) => {
                    return <Card
                        videoId={videoId}
                        title={title}
                        chanel={chanel}

                    />
                }}
            />
        </View>
    )
}

export default VideoPlayer