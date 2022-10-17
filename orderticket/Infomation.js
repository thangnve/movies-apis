import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView, FlatList, TouchableOpacity,  Dimensions } from 'react-native'
import React, {useState, useEffect, useCallback} from 'react'
import axios from 'axios'



const FirstRoute = ({route, navigation}) => {
 
    return(
<View  style={[styles.scene, { backgroundColor: '#04103A' }]} >
      <ScrollView>
        <Text style={{color: '#FFFFFF', fontSize: 18, padding: 10}}>Synopsis</Text>
     <View style={{display: 'flex', alignItems: 'center'}}>
     <View style={{paddingTop: 10, marginLeft: 25, marginRight: 25}}>
            <Text style={{backgroundColor: 'rgba(55, 65, 81, 0.3)', padding: 10, borderRadius: 5}}>{}</Text>
        </View>
     
     </View>

     <View>
     <Text style={{color: '#FFFFFF', fontSize: 18, padding: 10}}>Cast & Crew</Text>
     <View>

     <ScrollView horizontal={true}>

    
     <View style={{padding: 10, justifyContent: 'center', alignItems: 'center'}}>
     <Image  style={{height: 75, width: 75, borderRadius: 10}} source={require('./Image/No1.jpg')} />
     <Text style={{color: '#ffffff', width: 50, textAlign: 'center'}}>John C. Reilly</Text>
     </View>
     <View style={{padding: 10, justifyContent: 'center', alignItems: 'center'}}>
     <Image  style={{height: 75, width: 75, borderRadius: 10}} source={require('./Image/No2.jpg')} />
     <Text style={{color: '#ffffff', width: 65, textAlign: 'center'}}>Sarah Silverman</Text>
     </View>
     <View style={{padding: 10, justifyContent: 'center', alignItems: 'center'}}>
     <Image  style={{height: 75, width: 75, borderRadius: 10}} source={require('./Image/No3.jpg')} />
     <Text style={{color: '#ffffff', width: 60, textAlign: 'center'}}>Jack McBrayer</Text>
     </View>
     <View style={{padding: 10, justifyContent: 'center', alignItems: 'center'}}>
     <Image  style={{height: 75, width: 75, borderRadius: 10}} source={require('./Image/No4.jpg')} />
     <Text style={{color: '#ffffff', width: 50, textAlign: 'center'}}>Taraji P. Henson</Text>
     </View>
     <View style={{padding: 10, justifyContent: 'center', alignItems: 'center'}}>
     <Image  style={{height: 75, width: 75, borderRadius: 10}} source={require('./Image/No5.jpg')} />
     <Text style={{color: '#ffffff', width: 50, textAlign: 'center'}}>John C. Reilly</Text>
     </View>
     </ScrollView>
     </View>

     <View>
     <Text style={{color: '#FFFFFF', fontSize: 18, padding: 10}}>Trailer and song</Text>
     <View>
        <ScrollView horizontal={true}>
          <View style={{padding: 10, flexDirection: 'row'}}>
          <Image  style={{width: 247, height: 144, borderRadius: 10}} source={require('./Image/trailler1.jpg')}   />
          </View>
          <View style={{padding: 10, flexDirection: 'row'}}>
          <Image  style={{width: 247, height: 144, borderRadius: 10}} source={require('./Image/trailler2.jpg')}   />
          </View>
        </ScrollView>
     </View>
     </View>

     </View>
      </ScrollView>
  </View>
    )
}

  
  
  
  


const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#04103A' }]} />
);

const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});
export default function Infomation({route, navigation}) {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'first', title: 'About Movie',  },
      { key: 'second', title: 'Review' },
    ]);


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
    let view = data.movieDetails.overview;
   return(
    
     <View style={{backgroundColor: '#04103A' }}>
        <ScrollView>
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
            style={{width:130, height: 200, resizeMode: 'cover', position: 'relative', alignSelf: 'center', borderRadius: 5, marginLeft: -190}}
            source={{
                uri: `https://image.tmdb.org/t/p/w500${data.movieDetails.poster_path}`,
            }}
        /> 
        </View>                 
        </View>

      <View style={{backgroundColor: '#04103A', flexDirection: 'row', padding: 20, justifyContent: 'space-around', height: 185}}>
      
     
    <View style={{ height: 100, top: -150, left: 70, justifyContent: 'space-around'}}>

   
 
       <View >
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#FFFFFF'}}>{data.movieDetails.title} 
            <Text style={{fontWeight: 'normal',  color: '#FFFFFF'}}> ({release_date.substr(0,4)})</Text>
            </Text>
        </View>
        <View style={{ paddingTop: 0, paddingBottom: 10, height: 50}}>
            <Text style={{ color: 'yellow'}}>★ ★ ★ ★ ★ / {Number(data.movieDetails.vote_average).toFixed(1)}</Text>
            <Text style={{ color: 'yellow'}}>{data.movieDetails.release_date}</Text>
            <Text style={{ color: 'yellow'}}>{`${hours} hr ${minutes} min`}</Text>
        </View>
       </View>
      </View>
    <View style={{height: 900, width: '100%', top: -150}}>
    <Text style={{color: 'yellow', padding: 10, fontSize: 14}}>{view}</Text>
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
                    <Text style={{color: '#FFFFFF', textAlign: 'center'}}>{element.item.name}</Text>
                    
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
                    navigation.navigate('Infomation', {
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
                          <Text style={{color: '#FFFFFF', textAlign: 'center'}}>{element.item.title}</Text>
                    </TouchableOpacity>
                )
            }}
            keyExtractor={item => item.id}
        />
      </View>
    
    {/* <TabView
      navigationState={{ index, routes, route }}
      renderScene={renderScene}
      
      renderTabBar={props => <TabBar {...props} style={{backgroundColor: '#04103A'}}/>}
      onIndexChange={setIndex}
      initialLayout={initialLayout}

     
    /> */}
       
    </View>
      </ScrollView>
    
      </View>


   
   );
};

const styles = StyleSheet.create({
   banner: {
  
    width: '100%',
    height: 200,

   },
   banner2: {
      width: 124,
      height: 191,
      top: -60,
      
   },
   container: {
    
  },
  scene: {
    flex: 1,
 
  },

})



