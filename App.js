import React from 'react';
import {
  FlatList,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import ShakingText from 'react-native-shaking-text';
import Modal from 'react-native-modal';

const fullWidth = Dimensions.get('window').width;
const fullHeight = Dimensions.get('window').height;
const originalSet = [
  [
    'The Danish Alphabet',
    require('Hygge/images/danish_abc.gif'),
    'The Danish and Norwegian alphabet, called the Dano-Norwegian alphabet is based upon the Latin alphabet and has consisted of the following 29 letters since 1917 (Norwegian) and 1948 (Danish).',
    1,
    false,
  ],
  [
    'Danish Architecture',
    require('Hygge/images/dan.jpeg'),
    "Danish architecture traces its roots to Viking military encampments — and through periods of Roman, Gothic, Renaissance and Baroque style. In the 21st century, Danish architecture has become popular all over the world.",
    2,
    false,
  ],
  [
    'Danish Architecture',
    require('Hygge/images/dan.jpeg'),
    "Danish architecture traces its roots to Viking military encampments — and through periods of Roman, Gothic, Renaissance and Baroque style. In the 21st century, Danish architecture has become popular all over the world.",
    2,
    false,
  ],
  [
    'Bicycling',
    require('Hygge/images/Cyclists_at_red_2.jpg'),
    "Cycling in Denmark is both a common and popular recreational and utilitarian activity. Bicycling infrastructure is a dominant feature of both city and countryside infrastructure with segregated dedicated bicycle paths and lanes in many places and the network of 11 Danish National Cycle Routes (along with many regional routes) extends more than 12,000 kilometres (7,500 mi) nationwide",
    7,
    false,
  ],
  [
    'Danish Nationalism',
    require('Hygge/images/images.jpeg'),
    "he Danish People's Party (DPP) (Danish: Dansk Folkeparti, DF) is a political party in Denmark that is generally described as right-wing populist by academics[2][16][17][18][19] and far-right by international media",
    3,
    false,
  ],
  [
    'Shared History',
    require('Hygge/images/Schalburgerblegdamsvej.jpg'),
    'At the outset of World War II in September 1939, Denmark declared itself neutral. For most of the war, the country was a protectorate and then an occupied territory of Germany. The decision to occupy Denmark was taken in Berlin on 17 December 1939',
    4,
    false,
  ],
  [
    'Love for Nature',
    require('Hygge/images/nature.jpg'),
    "Many Danes love exploring nature and they love nature in their food! Changing of the seasons is often reflected in the use of local ingredients that can be found in the wild. During spring, summer and fall the forests are full of delicious delecacies",
    5,
    false,
  ],
  [
    'Love for Nature',
    require('Hygge/images/nature.jpg'),
    "Many Danes love exploring nature and they love nature in their food! Changing of the seasons is often reflected in the use of local ingredients that can be found in the wild. During spring, summer and fall the forests are full of delicious delecacies",
    5,
    false,
  ],
  [
    'Christian Tradition',
    require('Hygge/images/4aa55159632045.5a29455276851-800x554.jpg'),
    `In Denmark, 75 % of the population are registered members of the Evangelical Lutheran Church. But less than a fifth of Danes see themselves as “very religious.”`,
    10,
    false,
  ],
  [
    'Travelling',
    require('Hygge/images/84a1f6ab07b2a95c58267a4a39aaafad.png'),
    "Denmark's culture and society stem from a long history and an ethnically homogeneous people. In Denmark, culture can be described by these three aspects of Danish life: simplicity, politeness, and equality.",
    9,
    false,
  ],
  [
    'Vikings',
    require('Hygge/images/vikings-S6-desktop-2048x1152.jpg'),
    'Vikings[a] were the seafaring Norse people from southern Scandinavia (present-day Denmark, Norway and Sweden)[3][4][5] who from the late 8th to late 11th centuries raided, pirated, traded and settled throughout parts of Europe.',
    6,
    false,
  ],
  [
    'Bicycling',
    require('Hygge/images/Cyclists_at_red_2.jpg'),
    "Cycling in Denmark is both a common and popular recreational and utilitarian activity. Bicycling infrastructure is a dominant feature of both city and countryside infrastructure with segregated dedicated bicycle paths and lanes in many places and the network of 11 Danish National Cycle Routes (along with many regional routes) extends more than 12,000 kilometres (7,500 mi) nationwide",
    7,
    false,
  ],
  [
    'Hygge',
    require('Hygge/images/11_scandinavian_lighting_tips_4.jpg'),
    "Hygge is as Danish as æbleskiver and it goes far in illuminating the Danish soul. In essence, hygge means creating a warm atmosphere and enjoying the good things in life with good people. The warm glow of candlelight is hygge. Cosying up with a loved one for a movie – that’s hygge, too. And there's nothing more hygge than sitting around with friends and family, discussing the big and small things in life. Perhaps hygge explains why the Danes are some of the happiest people in the world.",
    8,
    false,
  ],
  [
    'Shared History',
    require('Hygge/images/Schalburgerblegdamsvej.jpg'),
    'At the outset of World War II in September 1939, Denmark declared itself neutral. For most of the war, the country was a protectorate and then an occupied territory of Germany. The decision to occupy Denmark was taken in Berlin on 17 December 1939',
    4,
    false,
  ],
  [
    'Travelling',
    require('Hygge/images/84a1f6ab07b2a95c58267a4a39aaafad.png'),
    "Denmark's culture and society stem from a long history and an ethnically homogeneous people. In Denmark, culture can be described by these three aspects of Danish life: simplicity, politeness, and equality.",
    9,
    false,
  ],
  [
    'Vikings',
    require('Hygge/images/vikings-S6-desktop-2048x1152.jpg'),
    'Vikings[a] were the seafaring Norse people from southern Scandinavia (present-day Denmark, Norway and Sweden)[3][4][5] who from the late 8th to late 11th centuries raided, pirated, traded and settled throughout parts of Europe.',
    6,
    false,
  ],
  [
    'The Danish Alphabet',
    require('Hygge/images/danish_abc.gif'),
    'The Danish and Norwegian alphabet, called the Dano-Norwegian alphabet is based upon the Latin alphabet and has consisted of the following 29 letters since 1917 (Norwegian) and 1948 (Danish).',
    1,
    false,
  ],
  [
    'Danish Nationalism',
    require('Hygge/images/images.jpeg'),
    "he Danish People's Party (DPP) (Danish: Dansk Folkeparti, DF) is a political party in Denmark that is generally described as right-wing populist by academics[2][16][17][18][19] and far-right by international media",
    3,
    false,
  ],
  [
    'Christian Tradition',
    require('Hygge/images/4aa55159632045.5a29455276851-800x554.jpg'),
    `In Denmark, 75 % of the population are registered members of the Evangelical Lutheran Church. But less than a fifth of Danes see themselves as “very religious.”`,
    10,
    false,
  ],
  [
    'Hygge',
    require('Hygge/images/11_scandinavian_lighting_tips_4.jpg'),
    "Hygge is as Danish as æbleskiver and it goes far in illuminating the Danish soul. In essence, hygge means creating a warm atmosphere and enjoying the good things in life with good people. The warm glow of candlelight is hygge. Cosying up with a loved one for a movie – that’s hygge, too. And there's nothing more hygge than sitting around with friends and family, discussing the big and small things in life. Perhaps hygge explains why the Danes are some of the happiest people in the world.",
    8,
    false,
  ],
]

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false, 
      modalData: '',
      correct: false, 
      hyggeCount: '',
      pressed1: null,
      pressed2: null,
      data: null,
      points: 0,
      hyggeColor: 'white'
    }
  }

  componentDidMount = () => {
    this.setState({data: this.shuffle()})
  }

  shuffle = () => {
    let array = originalSet
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  flipCard = async (index) => {
    // if both selected, unselect
    if(this.state.pressed1 !== null && this.state.pressed2 !== null) {
      await this.setState({pressed1: null, pressed2: null})
    }

    if(this.state.pressed1 !== null && index == this.state.pressed1) return

    // if first is selected, select second, else select first
    await this.setState(this.state.pressed1 == null ? {pressed1: index} : {pressed2: index})

    if(this.state.data[this.state.pressed1][0] == this.state.data[this.state.pressed2][0]) {
      let match = this.state.data[this.state.pressed1]
      await this.setState({ correct: true, hyggeCount: '+1 Hygge', hyggeColor: 'red' });
      await setTimeout(() => {
        this.setState({pressed1: null, pressed2: null, points: this.state.points + 1, correct: false, hyggeColor: 'white'})}, 
        1000
      )

      await setTimeout(() => this.remakeDeck(match), 1100)
    }
  }

  array_equals(a, b){
    return a.length === b.length && a.every((item,idx) => item === b[idx])
  }

  remakeDeck = async (obj) => {
    var arr = this.state.data
    let tag = obj

    let result = arr.filter(a => !a.every((v, i) => v === tag[i]));

    console.log('array' ,result)
    
    this.setState({data: result})
  }
  
  
  render() {
    return (
    <View>
      <Modal
        isVisible={this.state.showModal}
        style={{
          margin: 0,
          height: '100%',
          width: '100%'
        }}
        animation={'slideInUp'}
        animationInTiming={25}
        animationOutTiming={25}
        coverScreen={true}
        hasBackdrop={true}
      >
        <View
          style={{
            height: '100%',
            width: '100%',
          }}
        >
          <TouchableOpacity onPress={() => this.setState({showModal: false})} style={{flex: 0.2}} />
          <View 
            style={{
              flex: 1, 
              flexDirection: 'row'
            }}
          >
            <TouchableOpacity onPress={() => this.setState({showModal: false})} style={{flex: 0.2}} />
            <View 
              style={{
                flex: 0.8, 
                borderRadius: 10,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text
                style={{
                  marginVertical: 20,
                  paddingHorizontal: 10,
                  fontSize: 25, 
                  fontWeight: '800',
                  textAlign: 'center'
                }}
              >
                  {!this.state.showModal ? '' : this.state.data[this.state.modalData][0]}
              </Text>
              <FastImage
                style={{
                  height: 150,
                  width: 200,
                  borderRadius: 10,
                  borderWidth: 0.5, 
                  borderColor: 'red',
                  paddingRight: '5%',
                  paddingTop: '5%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                source={(!this.state.showModal) ? '' : this.state.data[this.state.modalData][1]}
                resizeMode={FastImage.resizeMode.cover}
              />
              <ScrollView>
                <Text
                  style={{
                    marginVertical: 20,
                    paddingHorizontal: 15,
                    fontSize: 15, 
                    fontWeight: '400',
                    textAlign: 'left'
                  }}
                >
                    {!this.state.showModal ? '' : this.state.data[this.state.modalData][2]}
                </Text>
              </ScrollView>
              <View
                style={{flex: 1}}
              >

              </View>
            </View>
            <TouchableOpacity onPress={() => this.setState({showModal: false})} style={{flex: 0.1}} />
          </View>
          <TouchableOpacity onPress={() => this.setState({showModal: false})} style={{flex: 0.2}} />

        </View>
      </Modal>      
      {this.state.correct && (
      <View 
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            zIndex: 5,
          }}
        >
          <View style={{flex: 1}}/>
          <ShakingText
            style={{
              textAlign: 'center',
              color: 'red',
              fontSize: 50,
              fontWeight: '700',
              shadowColor: 'black',
              shadowOffset: { width: 10, height: 15 },
              shadowOpacity: 1,
              shadowRadius: 10,  
            }}
          >
            {this.state.hyggeCount}
          </ShakingText>
          <View style={{flex: 1}}/>
      </View>
      )}
      <View
        style={{
          width: '100%',
          height: fullHeight * 0.15,
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
              fontSize: 10,
              position: 'absolute',
              color: 'white',
              top: 25,
              right: -40,
            }}
          >
            Hygges
          
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 30,
              fontWeight: '700',
            }}
          ><Text style={{color: this.state.hyggeColor}}>{this.state.points}</Text> / 10</Text>
          <View style={{flex: 1}}/>
          </View>
          <View  style={{ flex: 1}}>
          <View style={{flex: 1}}/>
            <TouchableOpacity
              onPress={(() => {
                this.setState({
                  correct: false, 
                  hyggeCount: '',
                  pressed1: null,
                  pressed2: null,
                  data: null,
                  points: 0,
                  hyggeColor: 'white',
                  data: this.shuffle()
                })
              })}
            >
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 15,
                  fontWeight: '700',
                }}
              >
                reset
              </Text>
            </TouchableOpacity>
            <View style={{flex: 0.5}}/>
        </View>
      </View>
      <ImageBackground
        resizeMode={'cover'}
        style={{
          width: '100%',
          height: '100%'

        }}
        source={require('Hygge/images/country-flag-scandinavian-patriotic-danish-denmark-flag-nationalism-gift-thomas-larch.jpg')}
      />
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: '87%',
          bottom: 0, 
          right: 0,
        }}
      >
        <FlatList
          windowSize={200}
          contentContainerStyle={{
            height: (fullHeight / 4) * 8.25,  
            width: '100%',  
          }}
          initialNumToRender={5}
          maxToRenderPerBatch={10}
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
          data={this.state.data}
          keyboardShouldPersistTaps='handled'
          renderItem={({ item, index }) => (
              <TouchableOpacity
                onLongPress={() => {
                  (this.state.pressed1 == index || this.state.pressed2 == index) ? this.setState({showModal: true, modalData: index}) : null
                }}
                onPress={() => this.flipCard(index)}
                style={{
                  width: '33.3333%',
                  height: fullHeight / 4, 
                  paddingLeft: 10,
                  marginBottom: 10
                }}
              >
                <FastImage
                  style={{
                    borderRadius: 10,
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    borderColor: 'white',
                    justifyContent: 'center',
                  }}
                  source={(this.state.pressed1 == index || this.state.pressed2 == index) ? this.state.data[index][1]  : require('Hygge/images/timetohygge.jpg')}
                  resizeMode={FastImage.resizeMode.cover}
                >
                  {(this.state.pressed1 == index || this.state.pressed2 == index) && (
                  <>
                    <Text    
                      style={{
                        fontSize: 10, 
                        backgroundColor: 'white',
                        color: 'black',
                        paddingHorizontal: 5, 
                        width: '100%',
                        textAlign: 'center',
                        fontWeight: '700'
                      }}
                    >
                      {this.state.data[index][0]}
                    </Text>
                    <View style={{flex: 1}}/>
                    </>
                  )}
                </FastImage>
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
      </View>
    </View>    
    );
  }
}

