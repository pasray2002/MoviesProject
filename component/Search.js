import React, { useState, Component } from 'react';

import {
    View,
    Text, Image,
    ScrollView, TextInput, FlatList, TouchableOpacity,ActivityIndicator
} from 'react-native';
import { NativeBaseProvider, Button } from 'native-base';
import MinCard from './MinCard';
import { useSelector,useDispatch } from 'react-redux';

const Search =({navigation})=>  {
        const dispatch = useDispatch()
        const [value, setValue] = useState("");
        //const [miniCardData, setMiniCardData] = useState([]);
        const miniCardData = useSelector(state=>{
            return state
        })
        const [loading,setLoading] = useState(false)
         const fetchData = () => {
             setLoading(true)
             //setMiniCardData([])
             dispatch({type:"add",payload:[]})
            fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1000&q=${value}&type=video&key=AIzaSyBl1aK3rbU6YKk8C9wYJQXn1EJ7McozClM`)
                .then(res => res.json())
                .then(data => {
                   // console.log(data)
                    // setMiniCardData(data.items)
                    // miniCardData = data.items;
                    // console.log(miniCardData)
                    setLoading(false)
                    //setMiniCardData(data.items)
                    dispatch({type:"add",payload:data.items})
                    console.log(miniCardData)
                 
                })
        }


        return (
            <View style={{ flex: 1 }}>
                <View style={{ padding: 5, flexDirection: 'row', justifyContent: 'space-around', elevation: 5, backgroundColor: 'white' }}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Image style={{ marginTop: 7,width:32,height:32 }} source={{uri:'https://cdn-icons-png.flaticon.com/128/93/93634.png'}} />
                    </TouchableOpacity>
                    <TextInput onSubmitEditing={()=>fetchData()}
                        style={{ width: "70%", backgroundColor: '#e6e6e6' }}
                        value={value}
                        onChangeText={(text) => setValue(text)} />
                    <TouchableOpacity onPress={() => fetchData()}>
                        <Image style={{ marginTop: 7 ,height:32,width:32}} source={{uri:'https://cdn-icons-png.flaticon.com/128/876/876777.png'}} />
                    </TouchableOpacity>
                </View>
              {loading ? <ActivityIndicator style={{marginTop:3}} size="large" color="skyblue" /> : null}
                <FlatList

                    data={miniCardData}
                    keyExtractor={(item) => item.id.videoId}
                    renderItem={({ item }) => 
                        
                            <MinCard
                            videoId={item.id.videoId}
                            title={item.snippet.title}
                            chanel={item.snippet.chanelTitle}
                          
                        />
                   

                    }

                />


            </View>
        );
}
export default Search;