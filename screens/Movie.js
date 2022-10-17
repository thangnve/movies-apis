import { View, Text, StyleSheet, Image, FlatList, SafeAreaView, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'

import axios from 'axios';


export default function Movie({navigation}) {

    const [data, setData] = useState({ nowPlaying: null, topRatedMovies: null, upcomingMovies: null });
    const [loading, setLoading] = useState(true)
    const apiKey = '4c1c4651b470f738873f80310325d848'
    const apiReq = async () => {
        const respNowPlaying = await axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`);
        const respTopRatedMovies = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US`);
        const respUpcomingMovies = await axios(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US`);
        setData({nowPlaying: respNowPlaying.data.results, topRatedMovies: respTopRatedMovies.data.results, upcomingMovies: respUpcomingMovies.data.results})
        if (loading) {
          setLoading(false)
        }
    }

    useEffect(() => {
        apiReq();
    }, []);

  return (
    <SafeAreaView style={styles.mainBg}>
    <Image
        style={{height: 50 ,width: '100%', resizeMode: 'contain', marginTop: 15}}
        source={require('../assets/img/cinehub-apk.png')}
      />
      {loading ? 
    <View


    backgroundColor={'#18181B'}
    highlightColor={'gray'}>
    <View style={{marginTop: 50}}>
    </View>
    <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 20}}>
    <View style={{width: 120, height: 180, resizeMode: 'cover', borderRadius: 5, marginRight: 8}}></View>
    <View style={{width: 120, height: 180, resizeMode: 'cover', borderRadius: 5, marginRight: 8}}></View>
    <View style={{width: 120, height: 180, resizeMode: 'cover', borderRadius: 5, marginRight: 8}}></View>
    <View style={{width: 120, height: 180, resizeMode: 'cover', borderRadius: 5, marginRight: 8}}></View>
    <View style={{width: 120, height: 180, resizeMode: 'cover', borderRadius: 5, marginRight: 8}}></View>
    </View>
    <View style={{marginTop: 50}}>
    </View>
    <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 20}}>
    <View style={{width: 120, height: 180, resizeMode: 'cover', borderRadius: 5, marginRight: 8}}></View>
    <View style={{width: 120, height: 180, resizeMode: 'cover', borderRadius: 5, marginRight: 8}}></View>
    <View style={{width: 120, height: 180, resizeMode: 'cover', borderRadius: 5, marginRight: 8}}></View>
    <View style={{width: 120, height: 180, resizeMode: 'cover', borderRadius: 5, marginRight: 8}}></View>
    <View style={{width: 120, height: 180, resizeMode: 'cover', borderRadius: 5, marginRight: 8}}></View>
    </View>
    <View style={{marginTop: 50}}>
    </View>
    <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 20}}>
    <View style={{width: 120, height: 180, resizeMode: 'cover', borderRadius: 5, marginRight: 8}}></View>
    <View style={{width: 120, height: 180, resizeMode: 'cover', borderRadius: 5, marginRight: 8}}></View>
    <View style={{width: 120, height: 180, resizeMode: 'cover', borderRadius: 5, marginRight: 8}}></View>
    <View style={{width: 120, height: 180, resizeMode: 'cover', borderRadius: 5, marginRight: 8}}></View>
    <View style={{width: 120, height: 180, resizeMode: 'cover', borderRadius: 5, marginRight: 8}}></View>
    </View>
</View>      
    :
    <View>
      <Text style={{fontSize: 20, color: '#f4f4f5', marginTop: 30, marginLeft: 20, fontWeight: 'bold'}}>Now 
      <Text style={{color: '#7DD329'}}> Playing</Text>
      </Text>
      <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={{marginTop: 20, marginLeft: 20}}
        data={data.nowPlaying}
        horizontal
        renderItem={(element) => {
            return (
                <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Movieid', {
                    id: element.item.id,
                    release_date: element.item.release_date,
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
      <View style={{marginTop: 15}}>
      <Text style={{fontSize: 20, color: '#f4f4f5', marginLeft: 20, fontWeight: 'bold'}}>Top 
      <Text style={{color: '#7DD329'}}> Movies</Text>
      </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={{marginTop: 20, marginLeft: 20}}
        data={data.topRatedMovies}
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
      <View style={{marginTop: 15}}>
      <Text style={{fontSize: 20, color: '#f4f4f5', marginLeft: 20, fontWeight: 'bold'}}>Upcoming 
      <Text style={{color: '#7DD329'}}> Movies</Text>
      </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={{marginTop: 20, marginLeft: 20}}
        data={data.upcomingMovies}
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
      </View>
}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    mainBg: {
      backgroundColor: '#18181B',
      height: '100%',
    }
  })




//   import React, {useState} from 'react';
// import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity, FlatList } from 'react-native';
// import { TextInput } from 'react-native-paper';

// export default function Home({navigation}) {

//   return (
//     <View colors={['#222', '#222', '#111']} style={styles.container}>
    
//       <ScrollView>
//         <View style={styles.title}>
//           <Text style={styles.loginText} >Find Your Best Movie</Text>
//           <TouchableOpacity onPress={() => {navigation.navigate('Profile')}}>
//           <Image style={styles.anh} source={require('./Image/user.png')} />
//           </TouchableOpacity>
//         </View>

   
//         <View style={styles.View}>
//           <TextInput style={styles.textoutline}
//             placeholder='SEARCH'
//             mode='outlined'
      
//             activeOutlineColor="#FFFFFF"
//             theme={{ colors: { text: '#ffffff', placeholder: '#FFFFFF', border: '#FFFFFF', }, roundness: 15, }}
//             outlineColor='#99FFFFFF'
//             direction='rtl'
//             underlineColor='transparent' />
//           <View style={styles.finds}>
//             <TouchableOpacity style={styles.Button} onPress={() => {navigation.navigate('UserProfiling')}}>
//               <Image style={{ width: 20, height: 20, borderRadius: 15 }} source={require('./Image/settings.png')} />
//             </TouchableOpacity>
//           </View>
//         </View>
//         <View >
//           <ScrollView horizontal={true} >
//             <TouchableOpacity  style={{ width: 90, backgroundColor: '#151D3B', alignItems: 'center', borderRadius: 15, height: 35, justifyContent: 'center' }}>
//               <Text style={{ color: '#FFFFFF' }}>All</Text>
//             </TouchableOpacity>
//             <Text>  </Text>
//             <TouchableOpacity style={{ width: 90, backgroundColor: '#151D3B', alignItems: 'center', borderRadius: 15, height: 35, justifyContent: 'center' }}>
//               <Text style={{ color: '#FFFFFF' }}>Action</Text>
//             </TouchableOpacity>
//             <Text>  </Text>
//             <TouchableOpacity style={{ width: 90, backgroundColor: '#151D3B', alignItems: 'center', borderRadius: 15, height: 35, justifyContent: 'center' }}>
//               <Text style={{ color: '#FFFFFF' }}>Drama</Text>
//             </TouchableOpacity>
//             <Text>  </Text>
//             <TouchableOpacity style={{ width: 90, backgroundColor: '#151D3B', alignItems: 'center', borderRadius: 15, height: 35, justifyContent: 'center' }}>
//               <Text style={{ color: '#FFFFFF' }}>Honor</Text>
//             </TouchableOpacity>
//             <Text>  </Text>
//             <TouchableOpacity style={{ width: 90, backgroundColor: '#151D3B', alignItems: 'center', borderRadius: 15, height: 35, justifyContent: 'center' }}>
//               <Text style={{ color: '#FFFFFF' }}>Comedy</Text>
//             </TouchableOpacity>
//           </ScrollView>
//         </View>
//         <Text></Text>
//         <Text style={{ color: '#FFFFFF', fontSize: 20, fontStyle: 'normal' }}>Now Playing</Text>
//         <View>
//           <ScrollView horizontal={true}>
//             <View>
//             <TouchableOpacity onPress={() => {navigation.navigate('Infomation')}} >
//               <Image style={{ width: 299 , height: 205, borderRadius: 14}} source={require('./Image/banner1.jpg')} />
//             </TouchableOpacity>
//             </View>
         
//             <Text>  </Text>
//             <TouchableOpacity onPress={() => {navigation.navigate('Infomation')}}>
//             <Image style={{ width: 299 , height: 205, borderRadius: 14}} source={require('./Image/banner1.jpg')} />
//             </TouchableOpacity>
//             <Text>  </Text>
//             <TouchableOpacity onPress={() => {navigation.navigate('Infomation')}}>
//             <Image style={{ width: 299 , height: 205, borderRadius: 14}} source={require('./Image/banner1.jpg')} />
//             </TouchableOpacity>
//             <Text>  </Text>
//             <TouchableOpacity onPress={() => {navigation.navigate('Infomation')}}>
//             <Image style={{ width: 299 , height: 205, borderRadius: 14}} source={require('./Image/banner1.jpg')} />
//             </TouchableOpacity>
//           </ScrollView>
//         </View>
//         <Text style={{ color: '#FFFFFF', fontSize: 20, fontStyle: 'normal' }}>Coming Soon</Text>
//         <View>
//           <ScrollView horizontal={true}>
//             <TouchableOpacity onPress={() => {navigation.navigate('Infomation')}}>
//               <Image style={{ width: 120, height: 190, borderWidth: 1, borderRadius: 15, borderColor: 'blue' }} source={require('./Image/LogoFrim.jpg')} />
//             </TouchableOpacity>
//             <Text>  </Text>
//             <TouchableOpacity>
//               <Image style={{ width: 120, height: 190, borderWidth: 1, borderRadius: 15, borderColor: 'blue' }} source={require('./Image/Phim2.jpg')} />
//             </TouchableOpacity>
//             <Text>  </Text>
//             <TouchableOpacity>
//               <Image style={{ width: 120, height: 190, borderWidth: 1, borderRadius: 15, borderColor: 'blue' }} source={require('./Image/Phim3.jpg')} />
//             </TouchableOpacity>
//             <Text>  </Text>
//             <TouchableOpacity>
//               <Image style={{ width: 120, height: 190, borderWidth: 1, borderRadius: 15, borderColor: 'blue' }} source={require('./Image/Phim4.jpg')} />
//             </TouchableOpacity>
//             <Text>  </Text>
//             <TouchableOpacity>
//               <Image style={{ width: 120, height: 190, borderWidth: 1, borderRadius: 15, borderColor: 'blue' }} source={require('./Image/Phim5.jpg')} />
//             </TouchableOpacity>
//             <Text>  </Text>
//             <TouchableOpacity>
//               <Image style={{ width: 120, height: 190, borderWidth: 1, borderRadius: 15, borderColor: 'blue' }} source={require('./Image/Phim6.jpg')} />
//             </TouchableOpacity>
//             <Text>  </Text>
//           </ScrollView>
//           <Text>  </Text>
//         </View>
//         <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//           <Text style={{ color: '#FFFFFF', fontSize: 20, fontStyle: 'normal' }}>Promo</Text>
//           <TouchableOpacity>
//             <Text style={{ color: 'blue', top: 5 }}>View all</Text>
//           </TouchableOpacity>
//         </View>
//         <Text>  </Text>
//         <TouchableOpacity style={{
//           flexDirection: 'row',
//           justifyContent: 'space-around', backgroundColor: '#3D54F8',
//           width: 300, height: 74, borderWidth: 1, borderRadius: 15,
//           alignItems: 'center', left: 20
//         }}>
//           <View >
//             <Text style={{ color: '#FFFFFF' }}>Student Holiday</Text>
//             <Text style={{ color: '#FFFFFF' }}>Maximal only for two people</Text>
//           </View>
//           <View>
//             <Text style={{ color: '#FFFFFF' }}>OFF 50%</Text>
//           </View>
//         </TouchableOpacity>
//         <Text></Text>
//         <TouchableOpacity style={{
//           flexDirection: 'row',
//           justifyContent: 'space-around', backgroundColor: '#3D54F8',
//           width: 300, height: 74, borderWidth: 1, borderRadius: 15,
//           alignItems: 'center', left: 20
//         }}>
//           <View >
//             <Text style={{ color: '#FFFFFF' }}>Student Holiday</Text>
//             <Text style={{ color: '#FFFFFF' }}>Maximal only for two people</Text>
//           </View>
//           <View>
//             <Text style={{ color: '#FFFFFF' }}>OFF 50%</Text>
//           </View>
//         </TouchableOpacity>
//         <Text></Text>
//         <TouchableOpacity style={{
//           flexDirection: 'row',
//           justifyContent: 'space-around', backgroundColor: '#3D54F8',
//           width: 300, height: 74, borderWidth: 1, borderRadius: 15,
//           alignItems: 'center', left: 20
//         }}>
//           <View >
//             <Text style={{ color: '#FFFFFF' }}>Student Holiday</Text>
//             <Text style={{ color: '#FFFFFF' }}>Maximal only for two people</Text>
//           </View>
//           <View>
//             <Text style={{ color: '#FFFFFF' }}>OFF 50%</Text>
//           </View>
//         </TouchableOpacity>
//         <Text></Text>
//         <Text></Text>
//         <Text></Text>
//         <Text></Text>
//         <Text></Text>
//         <Text></Text>
//         <Text></Text>
//         <Text></Text>
//       </ScrollView>
//     </View>
//   );

// }
// const styles = StyleSheet.create({
//   vo3: {
//     height: 152,
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignContent: 'space-around',
//   },
//   container: {
//     flex: 1,
//     display: 'flex',
//     padding: 10,
//     backgroundColor: '#051138',
//   },
//   timkiem: {
//   },
//   all: {
//     width: 85,
//     flexDirection: 'row'
//   },
//   Buttonall: {
//   },
//   nhap: {
//     width: 250,
//     backgroundColor: 'blue',
//     borderRadius: 28,
//     height: 42,
//   },
//   View: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   textoutline: {
//     backgroundColor: '#051138',
//     borderRadius: 50,
//     width: 270,
//     height: 50,
//     marginBottom: 20,
//     borderWidth: 0,
//     borderRadius: 60,
//   },
//   anh: {
//     width: 55,
//     height: 55,
//   },
//   anh2: {
//     left: 15,
//     width: 15,
//     top: 20,
//     height: 15,
//   },
//   welcomeText: {
//     fontSize: 30,
//     fontWeight: '900',
//     color: '#fff',
//     alignSelf: 'center',
//   },
//   loginText: {
//     color: '#ffffff',
//     fontSize: 28,
//     width: 200,
//     height: 62,
//     display: 'flex',
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   find: {
//     flexDirection: 'row',
//     justifyContent: 'space-between'
//   }, finds: {
//   },
//   text: {
//     color: '#FFFFFF'
//   },
//   text1: {
//     fontStyle: 'italic',
//     color: '#FFFFFF'
//   },
//   loginTexts: {
//     color: '#ffffff',
//     fontSize: 28,
//     width: 203,
//     height: 72,
//     fontSize: 24,
//   },
//   title: {
//     flexDirection: 'row',
//     display: 'flex',
//     justifyContent: 'space-between',
//   },
//   loginButton: {
//     backgroundColor: '#3D54F8',
//     paddingVertical: 15,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     display: 'flex',
//     borderRadius: 80,
//     width: 54,
//     height: 54,
//   },

//   loginButtonText: {
//     fontSize: 20,
//     fontWeight: '500',
//     color: '#fafafa',
//     alignSelf: 'center',
//   },
//   Button: {
//     backgroundColor: 'blue',
//     borderRadius: 14,
//     shadowRadius: 22,
//     width: 45,
//     height: 45,
//     left: 12,
//     top: -7,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   Image: {
//     width: 150,
//     height: 150,
//   },
// });

