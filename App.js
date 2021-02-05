import React from 'react';
import {
  FlatList,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import FastImage from 'react-native-fast-image';

const fullWidth = Dimensions.get('window').width;
const fullHeight = Dimensions.get('window').height;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        [
          'The Danish Alphabet',
          'Hygge/images/danish_abc.gif',
          'descrip',
          1,
          false,
        ],
        [
          'Danish Architecture',
          'Hygge/images/dan.jpeg',
          '',
          2,
          false,
        ],
        [
          'Danish Nationalism',
          'Hygge/images/images.jpeg',
          '',
          3,
          false,
        ],
        [
          'Shared History',
          'Hygge/images/Schalburgerblegdamsvej.jpg',
          '',
          4,
          false,
        ],
        [
          'Love for Nature',
          'Hygge/images/SvanningeBakker_Photo Lars_skaaning_GuideDenmark Faaburg Turistbureau.jpg',
          '',
          5,
          false,
        ],
        [
          'Vikings',
          'Hygge/images/vikings-S6-desktop-2048x1152.jpg',
          '',
          6,
          false,
        ],
        [
          'Bicycling',
          'Hygge/images/Cyclists_at_red_2.jpg',
          '',
          7,
          false,
        ],
        [
          'Hygge',
          'Hygge/images/11_scandinavian_lighting_tips_4.jpg',
          '',
          8,
          false,
        ],
        [
          'Travelling',
          'Hygge/images/84a1f6ab07b2a95c58267a4a39aaafad.png',
          '',
          9,
          false,
        ],
        [
          'Christian Tradition',
          'Hygge/images/4aa55159632045.5a29455276851-800x554.jpg',
          '',
          10,
          false,
        ],
      ],
      got: 0,
    }
  }

  componentDidMount() { 

  }

  flipCard = () => {

  }



  render() {
    return (
    <View>
      <View
        style={{
          width: '100%',
          height: fullHeight*0.15,
          backgroundColor: 'black',
          justifyContent: 'center',
          flexDirection: 'row',
        }}
      >
        <View style={{flex: 1}}>
          <View style={{flex: 1.25}}/>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}/>
            <FastImage
              style={{
                height: 40,
                width: 70,
                paddingRight: '5%',
                paddingTop: '5%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              source={require('Hygge/images/download.png')}
              resizeMode={FastImage.resizeMode.cover}
            />
            <View style={{flex: 1}}/>
          </View>
          <View style={{flex: 1}}/>
        </View>
          <View>
          <View style={{flex: 1}}/>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 30,
              fontWeight: '700',
            }}
          >{this.state.got} / 10</Text>
          <View style={{flex: 1}}/>
          </View>
        <View style={{flex: 1}}>
          <View style={{flex: 1}}/>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 15,
              fontWeight: '700',
            }}
          >+1 Hygge</Text>
          <View style={{flex: 0.5}}/>
        </View>
      </View>
      <ImageBackground
        resizeMode={'cover'}
        style={{
          width: '100%',
          height: '90%',
          justifyContent: 'flex-end'
        }}
        source={require('Hygge/images/country-flag-scandinavian-patriotic-danish-denmark-flag-nationalism-gift-thomas-larch.jpg')}
      >
        <FlatList
          windowSize={20}
          style={{ height: '85%', width: '100%' }}
          initialNumToRender={5}
          maxToRenderPerBatch={10}
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
          data={this.state.data}
          keyboardShouldPersistTaps='handled'
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => {}}
              style={{
                width: '33.3333%',
                height: fullHeight / 4, 
                paddingLeft: 10,
                paddingBottom: 10
              }}
            >
              <FastImage
                onLayout={ () => {console.log(this.state.data[index][1])}}
                style={{
                  borderRadius: 10,
                  width: '95%',
                  height: '95%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: index % 2 == 0 ? 'green' : 'blue',
                }}
                source={{ uri: this.state.data[index][1] }}
                resizeMode={FastImage.resizeMode.cover}
              />
              <View
                style={{
                  flex: 1,
                  width: '100%',
                  alignItems: 'center',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  paddingBottom: 10
                }}
              />
            </TouchableOpacity>
          )}
        />
      </ImageBackground>
    </View>    
    );
  }
}

