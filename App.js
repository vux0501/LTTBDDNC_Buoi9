import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableOpacityBase, TextInput, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FlatList } from 'react-native-web';

function HomeScreen({ navigation}) {
  return (
    <View style={styles.container}>
    <Image source={require("./assets/home.png")} style={{width: '100vw', height: '100vh', resizeMode: 'stretch'}}/>
    <TouchableOpacity style={styles.btnHome} onPress={() => navigation.navigate("Order")}>
      Get Started
    </TouchableOpacity>
</View>
  );
}

function OrderScreen() {

  const listItem = [
    {
      img: "https://f8-zpcloud.zdn.vn/5029508850145404548/42ddef039fcc599200dd.jpg",
      name: 'Capochi ro',
      des: 'hahaa',
      price: '10 $',
    },
    {
      img: "https://f8-zpcloud.zdn.vn/5029508850145404548/42ddef039fcc599200dd.jpg",
      name: 'Capochi ro',
      des: 'hahaa',
      price: '10 $',
    },
    {
      img: "https://f8-zpcloud.zdn.vn/5029508850145404548/42ddef039fcc599200dd.jpg",
      name: 'Capochi ro',
      des: 'hahaa',
      price: '10 $',
    },
    {
      img: "https://f8-zpcloud.zdn.vn/5029508850145404548/42ddef039fcc599200dd.jpg",
      name: 'Capochi ro',
      des: 'hahaa',
      price: '10 $',
    },
  ]

  return (
    <View style={{position: 'relative' }}>
      <View style={styles.header}>
          <View style={{
            height: '100px',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
              <View>
                <Text style={{color: '#acacac'}}>Location</Text>
                <Text  style={{color: '#fff'}}>To ku da, Tokyo ^</Text>
              </View>
              <View>
                <Image source={{uri: 'https://f50-zpg-r.zdn.vn/6242433245689307370/99622f68d1a417fa4eb5.jpg'}}  style={{width: '50px', height: '50px', resizeMode: 'stretch'}}/>
              </View>
          </View>

          <View style={{position: 'relative'}}>
              <Image style={{position: 'absolute', left: 5, top: 5, width: 40, height: 40}}  source={{uri: 'https://f50-zpg-r.zdn.vn/3376817211445233761/b41304b1067ec020996f.jpg'}}/>
              <TextInput 
            style={{
              padding: 15,
              paddingLeft: 50,
              backgroundColor: '#313131',
              borderRadius: 10,
              color: '#5d5c5c',
              fontSize: '17px'
            }}
            placeholder="Search coffee"
        />  
          <Image style={{position: 'absolute', right: 5, top: 5, width: 40, height: 40}}  source={{uri: 'https://f47-zpg-r.zdn.vn/734550350446216167/ae10f6a0c46f02315b7e.jpg'}} />
          </View>
      </View> 
      <View style={{ padding: 30, position: 'relative', right: 5, top: -100, height: 100}}>
          <Image style={{ borderRadius: 20 , width: '100%', height: 170, resizeMode: 'cover'}}  source={{uri: 'https://f56-zpg-r.zdn.vn/8520203468422076241/abbef729c0e606b85ff7.jpg'}} />
      </View>
      <View style={{padding: 30}}> 
          <ScrollView horizontal>
              <TouchableOpacity style={{marginRight: 10, backgroundColor: '#c67c4e', borderRadius: 10, width: 'fit-content', padding: 10, color: '#fff'}}>
                Capochino
              </TouchableOpacity>
              <TouchableOpacity style={{marginRight: 10, backgroundColor: '#c67c4e', borderRadius: 10, width: 'fit-content', padding: 10, color: '#fff'}}>
                Capochino
              </TouchableOpacity>
              <TouchableOpacity style={{marginRight: 10, backgroundColor: '#c67c4e', borderRadius: 10, width: 'fit-content', padding: 10, color: '#fff'}}>
                Capochino
              </TouchableOpacity>
              <TouchableOpacity style={{marginRight: 10, backgroundColor: '#c67c4e', borderRadius: 10, width: 'fit-content', padding: 10, color: '#fff'}}>
                Capochino
              </TouchableOpacity>
              <TouchableOpacity style={{marginRight: 10, backgroundColor: '#c67c4e', borderRadius: 10, width: 'fit-content', padding: 10, color: '#fff'}}>
                Capochino
              </TouchableOpacity>
          </ScrollView>
      </View>
      <View style={{padding: 30}}>
        {/* <ScrollView>
          {
            listItem.map(item => <ItemView {...item} />)
          }
        </ScrollView> */}
        <FlatList
          data={listItem}
          numColumns={2}
          renderItem={({ item }) => <ItemView {...item}/>}
          />
      </View>
    </View>
  );
}

const ItemView = ({name, price, des, img}) => {

  return <View style={{width: '50%',padding: 10, alignItems: 'center',}}>
      <Image style={{width: '100%', height: 150}} source={img}/>
      <View style={{width: '100%'}}>
        <Text style={{fontSize: '16px', fontWeight: '700'}}>{name}</Text>
        <Text>{des}  </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: '16px', fontWeight: '700'}}>{price}  </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Order")} style={{borderRadius: 10, color: '#fff',width: 30, height: 30, backgroundColor: '#c67c4e', justifyContent: 'center', alignItems: 'center',}}>+</TouchableOpacity>
        </View>
      </View>
  </View>
}



export default function App() {
  const Stack = createNativeStackNavigator();

  return (
     <NavigationContainer>
     <Stack.Navigator >
       <Stack.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }}/>
       <Stack.Screen name="Order" component={OrderScreen}  options={{ headerShown: false }}/>
     </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative'
  },
  btnHome: {
    position: 'absolute',
    left: '25px',
    bottom: '45px',
    width: '90%',
    backgroundColor: '#c67c4e',
    color: 'white',
    fontSize: '20px',
    height: '70px',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#181818',
    height: '300px',
    padding: 30,
  }
});
