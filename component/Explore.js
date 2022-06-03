import React from 'react';
import Header from './Header';
import {
    View,
    Text, Image,
    TouchableOpacity, TextInput, Dimensions,FlatList,ScrollView
} from 'react-native';
import Card from './Card'
import { useSelector } from 'react-redux'

const LittleCard = ({ name }) => {
    return (
        <View style={{ backgroundColor: 'skyblue', width: "45%", borderRadius: 4, height: 50, marginTop: 10 }}>
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 22, marginTop: 5 }}>{name}</Text>
        </View>
    )
}
const Explore = () => {
    const cardData = useSelector(state => {
        return state
    })
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <ScrollView>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                <LittleCard name="Gaming" />
                <LittleCard name="Trending" />
                <LittleCard name="Music" />
                <LittleCard name="News" />
                <LittleCard name="Movies" />
                <LittleCard name="Fashion" />
            </View>
            <Text style={{
                fontSize: 22,
                borderBottomWidth: 1,
                margin: 8, fontWeight: 'bold'
            }}>
                Trending
            </Text>
            <FlatList
                keyExtractor={(item) => item.id.videoId}
                data={cardData}
                renderItem={({ item }) => {
                    return <Card
                        videoId={item.id.videoId}
                        title={item.snippet.title}
                        chanel={item.snippet.chanelTitle}

                    />
                }}
            />
            </ScrollView>
        </View>
    )
}

export default Explore