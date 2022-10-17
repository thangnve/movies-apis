import { View, Text, StyleSheet, Image, ImageBackground, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, {useState, useEffect, useCallback} from 'react'
import axios from 'axios'


const Movieid = ({route, navigation}) => {
    const {id, release_date} = route.params

    const [data, setData] = useState({ movieDetails: [], similarMovies: [], castCrew: [] });
    const apiKey = '4c1c4651b470f738873f80310325d848'
    const apiReq = useCallback(async () => {
        const [resp, similarResp, castCrew] = await Promise.all([
            axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`),
            axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${apiKey}&language=en-US`),
            axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`)
        ])
        setData({ movieDetails: resp.data, similarMovies: similarResp.data.results, castCrew: castCrew.data.cast })
    }, [id, apiKey])

    useEffect(() => {
        apiReq();
    }, [apiReq]);

    let hours = Math.trunc(data.movieDetails.runtime/60);
    let minutes = data.movieDetails.runtime % 60;   

  return (
    <ScrollView style={styles.mainBg}
    showsVerticalScrollIndicator={false}>
        <View>
        <ImageBackground
            style={{width: '100%', height: 240, resizeMode: 'cover', position: 'absolute'}}
            imageStyle={{ opacity: 0.4}}
            source={{
                uri: `https://image.tmdb.org/t/p/w500${data.movieDetails.backdrop_path}`,
            }}
        />
        <View style={{paddingTop: 180}}>
        <Image
            style={{width: 150, height: 200, resizeMode: 'cover', position: 'relative', alignSelf: 'center', borderRadius: 5}}
            source={{
                uri: `https://image.tmdb.org/t/p/w500${data.movieDetails.poster_path}`,
            }}
        /> 
        </View>                 
        </View>
        <View style={{alignSelf: 'center', paddingTop: 20}}>
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>{data.movieDetails.title} 
            <Text style={{fontWeight: 'normal'}}></Text>
            </Text>
        </View>
        <View style={{alignSelf: 'center', paddingTop: 5, paddingBottom: 10}}>
            <Text>★ {Number(data.movieDetails.vote_average).toFixed(1)} | {data.movieDetails.release_date} | {`${hours} hr ${minutes} min`}</Text>
        </View>
        <View style={{paddingTop: 10, marginLeft: 25, marginRight: 25}}>
            <Text style={{backgroundColor: 'rgba(55, 65, 81, 0.3)', padding: 10, borderRadius: 5}}>{data.movieDetails.overview}</Text>
        </View>
        <View style={{marginTop: 20, marginBottom: 10}}>
            <Text style={{fontSize: 20, color: '#7DD329', marginLeft: 20, fontWeight: 'bold'}}>Cast</Text>
        </View>
        <View>
        <FlatList
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 10, marginLeft: 20}}
            data={data.castCrew}
            horizontal
            renderItem={(element) => {
                return (
                    <TouchableOpacity
                    onPress={() => {
                    navigation.navigate('Movieid', {
                        id: element.item.id,
                        cast_id: element.item.cast_id,
                        name: element.item.name,
                        profile_path: `https://image.tmdb.org/t/p/w500${element.item.profile_path}`,
                        credit_id: element.item.credit_id
                    });
                    }}>
                    <Image
                        style={{width: 120, height: 180, resizeMode: 'cover', borderRadius: 5, marginRight: 8}}
                        source={{
                            uri: `https://image.tmdb.org/t/p/w500${element.item.profile_path}`,
                        }}
                    />
                    </TouchableOpacity>
                )
            }}
            keyExtractor={item => item.id}
        />
      </View>
        <View style={{marginTop: 30, marginBottom: 10}}>
            <Text style={{fontSize: 20, color: '#f4f4f5', marginLeft: 20, fontWeight: 'bold'}}>Recommended 
            <Text style={{color: '#7DD329'}}> Movies</Text>
            </Text>
        </View>
        <View style={{paddingBottom: 20}}>
        <FlatList
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 10, marginLeft: 20}}
            data={data.similarMovies}
            horizontal
            renderItem={(element) => {
                return (
                    <TouchableOpacity
                    onPress={() => {
                    navigation.navigate('Movieid', {
                        id: element.item.id,
                        title: element.item.title,
                        poster_path: `https://image.tmdb.org/t/p/w500${element.item.poster_path}`,
                        backdrop_path: `https://image.tmdb.org/t/p/w500${element.item.backdrop_path}`,
                        overview: element.item.overview,
                        release_date: element.item.release_date,
                        vote_average: element.item.vote_average
                    });
                    }}>
                    <Image
                        style={{width: 120, height: 180, resizeMode: 'cover', borderRadius: 5, marginRight: 8}}
                        source={{
                            uri: `https://image.tmdb.org/t/p/w500${element.item.poster_path}`,
                        }}
                    />
                    </TouchableOpacity>
                )
            }}
            keyExtractor={item => item.id}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    mainBg: {
      backgroundColor: '#18181B',
      height: '100%',
    }
  })

export default Movieid











// import {Image, View, Text, SafeAreaView, StyleSheet, ScrollView,  Dimensions, StatusBar, TouchableOpacity } from 'react-native';
// import * as React from 'react';
// import { TabView, SceneMap, TabBar } from 'react-native-tab-view';


// const FirstRoute = () => (
//   <View  style={[styles.scene, { backgroundColor: '#04103A' }]} >
//       <ScrollView>
//         <Text style={{color: '#FFFFFF', fontSize: 18, padding: 10}}>Synopsis</Text>
//      <View style={{display: 'flex', alignItems: 'center'}}>
//      <Text style={{color: '#FFFFFF', padding: 10, fontSize: 14  }}>Wreck-It Ralph wants to be loved by many people like his kind friend, Fix-It Felix. But no one likes evil characters like Ralph.</Text>
//      <Text style={{color: '#FFFFFF', padding: 10, fontSize: 14, top: -15, width: 330 }}>Ralph's goal was simple, wanting to win and get a medal to be considered a hero. But without realizing Ralph instead paved the way for criminals who can kill all the games in the game complex.<TouchableOpacity><Text style={{color: 'blue', fontSize: 10 }}>Read more</Text></TouchableOpacity></Text>
     
     
//      </View>

//      <View>
//      <Text style={{color: '#FFFFFF', fontSize: 18, padding: 10}}>Cast & Crew</Text>
//      <View>

//      <ScrollView horizontal={true}>

    
//      <View style={{padding: 10, justifyContent: 'center', alignItems: 'center'}}>
//      <Image  style={{height: 75, width: 75, borderRadius: 10}} source={require('./Image/No1.jpg')} />
//      <Text style={{color: '#ffffff', width: 50, textAlign: 'center'}}>John C. Reilly</Text>
//      </View>
//      <View style={{padding: 10, justifyContent: 'center', alignItems: 'center'}}>
//      <Image  style={{height: 75, width: 75, borderRadius: 10}} source={require('./Image/No2.jpg')} />
//      <Text style={{color: '#ffffff', width: 65, textAlign: 'center'}}>Sarah Silverman</Text>
//      </View>
//      <View style={{padding: 10, justifyContent: 'center', alignItems: 'center'}}>
//      <Image  style={{height: 75, width: 75, borderRadius: 10}} source={require('./Image/No3.jpg')} />
//      <Text style={{color: '#ffffff', width: 60, textAlign: 'center'}}>Jack McBrayer</Text>
//      </View>
//      <View style={{padding: 10, justifyContent: 'center', alignItems: 'center'}}>
//      <Image  style={{height: 75, width: 75, borderRadius: 10}} source={require('./Image/No4.jpg')} />
//      <Text style={{color: '#ffffff', width: 50, textAlign: 'center'}}>Taraji P. Henson</Text>
//      </View>
//      <View style={{padding: 10, justifyContent: 'center', alignItems: 'center'}}>
//      <Image  style={{height: 75, width: 75, borderRadius: 10}} source={require('./Image/No5.jpg')} />
//      <Text style={{color: '#ffffff', width: 50, textAlign: 'center'}}>John C. Reilly</Text>
//      </View>
//      </ScrollView>
//      </View>

//      <View>
//      <Text style={{color: '#FFFFFF', fontSize: 18, padding: 10}}>Trailer and song</Text>
//      <View>
//         <ScrollView horizontal={true}>
//           <View style={{padding: 10, flexDirection: 'row'}}>
//           <Image  style={{width: 247, height: 144, borderRadius: 10}} source={require('./Image/trailler1.jpg')}   />
//           </View>
//           <View style={{padding: 10, flexDirection: 'row'}}>
//           <Image  style={{width: 247, height: 144, borderRadius: 10}} source={require('./Image/trailler2.jpg')}   />
//           </View>
//         </ScrollView>
//      </View>
//      </View>

//      </View>
//       </ScrollView>
//   </View>
  
// );

// const SecondRoute = () => (
//   <View style={[styles.scene, { backgroundColor: '#04103A' }]} />
// );

// const initialLayout = { width: Dimensions.get('window').width };

// const renderScene = SceneMap({
//   first: FirstRoute,
//   second: SecondRoute,
// });
// export default function Infomation() {
//     const [index, setIndex] = React.useState(0);
//     const [routes] = React.useState([
//       { key: 'first', title: 'About Movie' },
//       { key: 'second', title: 'Review' },
//     ]);



    
//    return(
    
//      <View style={{backgroundColor: '#04103A' }}>
//         <ScrollView>
//             <View>
//       <Image blurRadius={3} style={styles.banner}source={require('./Image/banner.jpg')}     resizeMode='cover'/>
//       </View>

//       <View style={{backgroundColor: '#04103A', flexDirection: 'row', padding: 20, justifyContent: 'space-around', height: 185}}>
      
//       <Image style={styles.banner2}source={require('./Image/LogoFrim.jpg')}     resizeMode='cover'/>
//     <View style={{justifyContent: 'space-around', height: 100, top: 30}}>

   
//        <Text style={{fontSize: 16, color: '#FFFFFF'}}>Ralph Breaks the Internet</Text>
 
//        <View style={{flexDirection: 'row'}}>
//        <Image style={{width: 15, height: 15}} source={require('./Image/staric.png')} />
//        <Image style={{width: 15, height: 15}} source={require('./Image/staric.png')} />
//        <Image style={{width: 15, height: 15}} source={require('./Image/staric.png')} />
//        <Image style={{width: 15, height: 15}} source={require('./Image/staric.png')} />
//        <Image style={{width: 15, height: 15}} source={require('./Image/staric.png')} />
//        <Text style={{color: '#FFFFFF', top: -1.5}}>(5.0)</Text>
//        </View>
//        <View>
//         <Text style={{fontSize: 14,  color: 'rgba(255, 255, 255, 0.7)'}}>Action adventure, Comedy</Text>
//         <Text style={{fontSize: 14,  color: 'rgba(255, 255, 255, 0.7)'}}>1h 41min</Text>
//        </View>
//        </View>
       
//       </View>
//     <View style={{height: 700, width: '100%'}}>
    

    
//     <TabView
//       navigationState={{ index, routes }}
//       renderScene={renderScene}
//       renderTabBar={props => <TabBar {...props} style={{backgroundColor: '#04103A'}}/>}
//       onIndexChange={setIndex}
//       initialLayout={initialLayout}

     
//     />
       
//     </View>
//       </ScrollView>
    
//       </View>


   
//    );
// };

// const styles = StyleSheet.create({
//    banner: {
  
//     width: '100%',
//     height: 200,

//    },
//    banner2: {
//       width: 124,
//       height: 191,
//       top: -60,
      
//    },
//    container: {
    
//   },
//   scene: {
//     flex: 1,
 
//   },

// })



