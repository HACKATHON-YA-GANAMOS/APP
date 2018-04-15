import React, { Component } from 'react';
import {StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native';
import {FileSystem} from "expo";
import { Icon } from 'react-native-elements'
import MyPicker from '../components/picker';
import OwnButton from "../components/button";
let index=0;
const pictureSize = 150;
export default class Ingredientes extends Component {
  static navigationOptions = {
    tabBarLabel: 'Search',
    tabBarIcon: () => <Icon name='search' type='fontawesome' />
  };
  state = {
    data: [
      { key: index++, label: "abalone"},
      { key: index++, label: "shrimp"},
      { key: index++, label: "brown rice"},
      { key: index++, label: "splenda calorie"},
      { key: index++, label: "gravy"},
      { key: index++, label: "egg yellow"},
      { key: index++, label: "chicken ground"},
      { key: index++, label: "fren broccoli"},
      { key: index++, label: "radishes"},
      { key: index++, label: "cornmeal"},
      { key: index++, label: "halves strawberries"},
      { key: index++, label: "vanilla extract"},
      { key: index++, label: "soda baking"},
      { key: index++, label: "chicken breast"},
      { key: index++, label: "tomato passata"},
      { key: index++, label: "splenda sugar"},
      { key: index++, label: "rice"},
      { key: index++, label: "seeds cardamom"},
      { key: index++, label: "mushrooms"},
      { key: index++, label: "dijion mustard"},
      { key: index++, label: "seasonings desired"},
      { key: index++, label: "seaweed kelp"},
      { key: index++, label: "milk"},
      { key: index++, label: "pinch salt"},
      { key: index++, label: "celery raw"},
      { key: index++, label: "marshmallow mini"},
      { key: index++, label: "cheese mascarpone"},
      { key: index++, label: "ground beef"},
      { key: index++, label: "boullion chicken"},
      { key: index++, label: "wine red"},
      { key: index++, label: "cheese provolone"},
      { key: index++, label: "aacore tuna"},
      { key: index++, label: "cinnamon ground"},
      { key: index++, label: "corriander"},
      { key: index++, label: "fren corn"},
      { key: index++, label: "spinach package"},
      { key: index++, label: "parmesan"},
      { key: index++, label: "celery"},
      { key: index++, label: "white egg"},
      { key: index++, label: "whip cool"},
      { key: index++, label: "thin beef"},
      { key: index++, label: "asparagus"},
      { key: index++, label: "krispies rice"},
      { key: index++, label: "tomato plum"},
      { key: index++, label: "capsicums red"},
      { key: index++, label: "bread flour"},
      { key: index++, label: "apple"},
      { key: index++, label: "kale"},
      { key: index++, label: "bean black"},
      { key: index++, label: "pita wheat"},
      { key: index++, label: "parsley"},
      { key: index++, label: "seasoning italian"},
      { key: index++, label: "parsley finely"},
      { key: index++, label: "hours soaked"},
      { key: index++, label: "eggs extra"},
      { key: index++, label: "rosemary leaves"},
      { key: index++, label: "flour soy"},
      { key: index++, label: "tap water"},
      { key: index++, label: "pita breads"},
      { key: index++, label: "champagne"},
      { key: index++, label: "pepper bell"},
      { key: index++, label: "sauce hot"},
      { key: index++, label: "sweet onion"},
      { key: index++, label: "spinach baby"},
      { key: index++, label: "shabbat"},
      { key: index++, label: "fren cauliflower"},
      { key: index++, label: "vodka"},
      { key: index++, label: "fren onion"},
      { key: index++, label: "allpurpose flour"},
      { key: index++, label: "israeli couscous"},
      { key: index++, label: "rosemary"},
      { key: index++, label: "shopping list"},
      { key: index++, label: "sugar granulated"},
      { key: index++, label: "rice short"},
      { key: index++, label: "cucumber stick"},
      { key: index++, label: "corn creamed"},
      { key: index++, label: "potato"},
      { key: index++, label: "dash oregano"},
      { key: index++, label: "nuts macadamian"},
      { key: index++, label: "olive oil"},
      { key: index++, label: "lentils"},
      { key: index++, label: "flank steak"},
      { key: index++, label: "bacon"},
      { key: index++, label: "chees provolone"},
      { key: index++, label: "sauce soya"},
      { key: index++, label: "dates"},
      { key: index++, label: "shallot"},
      { key: index++, label: "salmon"},
      { key: index++, label: "corn syrup"},
      { key: index++, label: "egg"},
      { key: index++, label: "mustard"},
      { key: index++, label: "zest orange"},
      { key: index++, label: "potato raw"},
      { key: index++, label: "pepper ground"},
      { key: index++, label: "garlic clove"},
      { key: index++, label: "vegitable oil"},
      { key: index++, label: "cheese"},
      { key: index++, label: "dark chocolate"},
      { key: index++, label: "peppers banana"},
      { key: index++, label: "dash paprika"},
      { key: index++, label: "potato sweet"},
      { key: index++, label: "seasoning creole"},
      { key: index++, label: "milk warm"},
      { key: index++, label: "cinnaman spice"},
      { key: index++, label: "oat bran"},
      { key: index++, label: "tomato thick"},
      { key: index++, label: "mushroom gravy"},
      { key: index++, label: "limes juice"},
      { key: index++, label: "breasts"},
      { key: index++, label: "vinegar balsamic"},
      { key: index++, label: "porridgte oats"},
      { key: index++, label: "salt seal"},
      { key: index++, label: "egg eggs"},
      { key: index++, label: "broccoli"},
      { key: index++, label: "pinch saffron"},
      { key: index++, label: "butter peanut"},
      { key: index++, label: "breadcrumbs"},
      { key: index++, label: "oyster sauce"},
      { key: index++, label: "celery finely"},
      { key: index++, label: "cranberries craisins"},
      { key: index++, label: "lime"},
      { key: index++, label: "sauce tonkatsu"},
      { key: index++, label: "mayonnaise fat"},
      { key: index++, label: "lean beef"},
      { key: index++, label: "dill weed"},
      { key: index++, label: "ginger root"},
      { key: index++, label: "asparagus spears"},
      { key: index++, label: "celery stalk"},
      { key: index++, label: "dashes salt"},
      { key: index++, label: "cashews"},
      { key: index++, label: "butternut"},
      { key: index++, label: "paprika"},
      { key: index++, label: "many how"},
      { key: index++, label: "water oil"},
      { key: index++, label: "garnish cilantro"},
      { key: index++, label: "potatoe"},
      { key: index++, label: "sauerkraut"},
      { key: index++, label: "daikon"},
      { key: index++, label: "egg whites"},
      { key: index++, label: "hazelnuts ground"},
      { key: index++, label: "tumeric"},
      { key: index++, label: "fruit mixed"},
      { key: index++, label: "crab immitation"},
      { key: index++, label: "scallion"},
      { key: index++, label: "ground sage"},
      { key: index++, label: "rose water"},
      { key: index++, label: "hazelnuts"},
      { key: index++, label: "walnuts"},
      { key: index++, label: "coriander seeds"},
      { key: index++, label: "chilli powder"},
      { key: index++, label: "watermelon seeded"},
      { key: index++, label: "mint"},
      { key: index++, label: "gochujang blasianbeauty"},
      { key: index++, label: "carrots cut"},
      { key: index++, label: "dumpling"},
      { key: index++, label: "parmesan kraft"},
      { key: index++, label: "adian bacon"},
      { key: index++, label: "coriander ground"},
      { key: index++, label: "crab"},
      { key: index++, label: "cream cheese"},
      { key: index++, label: "fish snapper"},
      { key: index++, label: "clementines"},
      { key: index++, label: "cornmeal blue"},
      { key: index++, label: "vegetable oil"},
      { key: index++, label: "basil"},
      { key: index++, label: "clove"},
      { key: index++, label: "tobasco original"},
      { key: index++, label: "splenda optional"},
      { key: index++, label: "oregano ground"},
      { key: index++, label: "snap peas"},
      { key: index++, label: "roasted cashews"},
      { key: index++, label: "hot rice"},
      { key: index++, label: "pitted dates"},
      { key: index++, label: "parsnip"},
      { key: index++, label: "stuffing"},
      { key: index++, label: "salt"},
      { key: index++, label: "sashimi tuna"},
      { key: index++, label: "tomatoes ripe"},
      { key: index++, label: "stock vegetable"},
      { key: index++, label: "garnishes"},
      { key: index++, label: "white rice"},
      { key: index++, label: "coffee regular"},
      { key: index++, label: "skim marella"},
      { key: index++, label: "bread old"},
      { key: index++, label: "tarragondivided"},
      { key: index++, label: "squid raw"},
      { key: index++, label: "rump steaks"},
      { key: index++, label: "fruit papaya"},
      { key: index++, label: "meal flax"},
      { key: index++, label: "vinegar rice"},
      { key: index++, label: "mangoes mango"},
      { key: index++, label: "olives kalmata"},
      { key: index++, label: "ground cardamom"},
      { key: index++, label: "vinegar white"},
      { key: index++, label: "cinnamon"},
      { key: index++, label: "raw onion"},
      { key: index++, label: "garlic"},
      { key: index++, label: "tomato halved"},
      { key: index++, label: "water cold"},
      { key: index++, label: "ginger"},
      { key: index++, label: "grapes red"},
      { key: index++, label: "oats"},
      { key: index++, label: "cut beef"},
      { key: index++, label: "mediumsize tomatoes"},
      { key: index++, label: "potatoes"},
      { key: index++, label: "yeast"},
      { key: index++, label: "walnuts crushed"},
      { key: index++, label: "lard"},
      { key: index++, label: "peached"},
      { key: index++, label: "soft tofu"},
      { key: index++, label: "olives black"},
      { key: index++, label: "chicken breasts"},
      { key: index++, label: "purpose flour"},
      { key: index++, label: "taloupe ripe"},
      { key: index++, label: "raspberries"},
      { key: index++, label: "beans coffee"},
      { key: index++, label: "sauce soy"},
      { key: index++, label: "mzarella shredded"},
      { key: index++, label: "pear"},
      { key: index++, label: "milk nonfat"},
      { key: index++, label: "rose wine"},
      { key: index++, label: "sugar powdered"},
      { key: index++, label: "okra thin"},
      { key: index++, label: "chives"},
      { key: index++, label: "butter whipped"},
      { key: index++, label: "green onions"},
      { key: index++, label: "pineapple"},
      { key: index++, label: "quartered apples"},
      { key: index++, label: "flour rye"},
      { key: index++, label: "taloupe balls"},
      { key: index++, label: "dice onion"},
      { key: index++, label: "egg beaters"},
      { key: index++, label: "copped onion"},
      { key: index++, label: "pepper red"},
      { key: index++, label: "figs"},
      { key: index++, label: "shrimp salad"},
      { key: index++, label: "serves"},
      { key: index++, label: "splenda"},
      { key: index++, label: "batter"},
      { key: index++, label: "avocado ripe"},
      { key: index++, label: "almonds"},
      { key: index++, label: "med peach"},
      { key: index++, label: "blackberries"},
      { key: index++, label: "cream corn"},
      { key: index++, label: "unsweetened cocoa"},
      { key: index++, label: "personal note"},
      { key: index++, label: "chicken legs"},
      { key: index++, label: "bread wheat"},
      { key: index++, label: "broccoli bunches"},
      { key: index++, label: "crispyfried onions"},
      { key: index++, label: "sour pickles"},
      { key: index++, label: "egg extra"},
      { key: index++, label: "margarine light"},
      { key: index++, label: "unsweetened coconut"},
      { key: index++, label: "onions finely"},
      { key: index++, label: "sandwich"},
      { key: index++, label: "cake"},
      { key: index++, label: "french beans"},
      { key: index++, label: "blueberries"},
      { key: index++, label: "mango"},
      { key: index++, label: "roasting chicken"},
      { key: index++, label: "ricotta"},
      { key: index++, label: "vanilla"},
      { key: index++, label: "potatoes mini"},
      { key: index++, label: "mix salad"},
      { key: index++, label: "cayenne powder"},
      { key: index++, label: "marshmallows"},
      { key: index++, label: "wine rice"},
      { key: index++, label: "cooking oil"},
      { key: index++, label: "photos"},
      { key: index++, label: "pre rice"},
      { key: index++, label: "grapes seedless"},
      { key: index++, label: "feta fat"},
      { key: index++, label: "lion salsa"},
      { key: index++, label: "vegetable flakes"},
      { key: index++, label: "mayounaise"},
      { key: index++, label: "tea"},
      { key: index++, label: "sauce"},
      { key: index++, label: "makes servings"},
      { key: index++, label: "green cabbage"},
      { key: index++, label: "flour"},
      { key: index++, label: "garlic salt"},
      { key: index++, label: "sweet potatoes"},
      { key: index++, label: "quinoa"},
      { key: index++, label: "yogurt fat"},
      { key: index++, label: "pasta"},
      { key: index++, label: "fren mangos"},
      { key: index++, label: "ginger liquid"},
      { key: index++, label: "marinate bottle"},
      { key: index++, label: "green onion"},
      { key: index++, label: "cream"},
      { key: index++, label: "sweet basil"},
      { key: index++, label: "pancake mix"},
      { key: index++, label: "landolakes fat"},
      { key: index++, label: "leaves bay"},
      { key: index++, label: "leaves tarragon"},
      { key: index++, label: "sugar"},
      { key: index++, label: "peppers"},
      { key: index++, label: "mix spinachkale"},
      { key: index++, label: "honey raw"},
      { key: index++, label: "strawberries"},
      { key: index++, label: "amaretto"},
      { key: index++, label: "size ned"},
      { key: index++, label: "sugar brown"},
      { key: index++, label: "juiced lime"},
      { key: index++, label: "vermicelli"},
      { key: index++, label: "rocket"},
      { key: index++, label: "roast beef"},
      { key: index++, label: "yogurt plain"},
      { key: index++, label: "size onion"},
      { key: index++, label: "tomatoes ground"},
      { key: index++, label: "vinegar cider"},
      { key: index++, label: "powder cumin"},
      { key: index++, label: "ginger ground"},
      { key: index++, label: "spinach"},
      { key: index++, label: "cucumber"},
      { key: index++, label: "olives"},
      { key: index++, label: "container coolwhipfat"},
      { key: index++, label: "phyllo dough"},
      { key: index++, label: "herbs mixed"},
      { key: index++, label: "salt season"},
      { key: index++, label: "fingers sponge"},
      { key: index++, label: "poblano pepper"},
      { key: index++, label: "musubi maker"},
      { key: index++, label: "butter knob"},
      { key: index++, label: "corn oil"},
      { key: index++, label: "milk soy"},
      { key: index++, label: "flavor vodka"},
      { key: index++, label: "browning"},
      { key: index++, label: "white wine"},
      { key: index++, label: "fish"},
      { key: index++, label: "cheese ricotta"},
      { key: index++, label: "shrimp"},
      { key: index++, label: "husk psyllium"},
      { key: index++, label: "avacadoabout"},
      { key: index++, label: "dijon mustard"},
      { key: index++, label: "cook shrimp"},
      { key: index++, label: "spice"},
      { key: index++, label: "cayenne pepper"},
      { key: index++, label: "jalapeno pepper"},
      { key: index++, label: "flour garbanzo"},
      { key: index++, label: "water"},
      { key: index++, label: "tahini"},
      { key: index++, label: "toasted coconut"},
      { key: index++, label: "sugar teaspons"},
      { key: index++, label: "wisked eggs"},
      { key: index++, label: "mint leave"},
      { key: index++, label: "leaf bay"},
      { key: index++, label: "leaves curry"},
      { key: index++, label: "mascarpone"},
      { key: index++, label: "pepper orange"},
      { key: index++, label: "water hot"},
      { key: index++, label: "quinoa dry"},
      { key: index++, label: "butter margarine"},
      { key: index++, label: "tortillas"},
      { key: index++, label: "pinch oregano"},
      { key: index++, label: "pinchoptional salt"},
      { key: index++, label: "pepper black"},
      { key: index++, label: "plain gelatin"},
      { key: index++, label: "seed flax"},
      { key: index++, label: "fat"},
      { key: index++, label: "criander"},
      { key: index++, label: "water warm"},
      { key: index++, label: "sage ground"},
      { key: index++, label: "ghee"},
      { key: index++, label: "pepper"},
      { key: index++, label: "salmon drained"},
      { key: index++, label: "chips chocolate"},
      { key: index++, label: "honey"},
      { key: index++, label: "duck eggs"},
      { key: index++, label: "dash mrs"},
      { key: index++, label: "ripcurlgirl aubergine"},
      { key: index++, label: "chestnuts"},
      { key: index++, label: "salsa"},
      { key: index++, label: "panko"},
      { key: index++, label: "tomato"},
      { key: index++, label: "potatoes red"},
      { key: index++, label: "paremsan cheese"},
      { key: index++, label: "katch"},
      { key: index++, label: "lemons"},
      { key: index++, label: "mayo"},
      { key: index++, label: "shallots"},
      { key: index++, label: "yolk egg"},
      { key: index++, label: "jointed chisken"},
      { key: index++, label: "coconut oil"},
      { key: index++, label: "buttermilk"},
      { key: index++, label: "dressed quail"},
      { key: index++, label: "ola oil"},
      { key: index++, label: "pine nuts"},
      { key: index++, label: "parmesean cheese"},
    ],
    i1: "spice",
    i2: "spice",
    i3: "spice",
    loading: false,
    name: null,
    path: this.props.imagePath,
    url: this.props.url,
  };
  constructor(props){
    super(props);
    this.postRequest = this.postRequest.bind(this);
    this.sendData = this.sendData.bind(this);
  }


  pressFunction(navigation, link){
    return(
      () => {navigation.navigate(link, {path: this.state.path})}
    );
  }

  async postRequest(){
    const sendData = {"ingredientes":
        [this.state.i1,this.state.i2,this.state.i3]
    };
    let data = new FormData();
    data.append('json',
      JSON.stringify(sendData));
    const config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      json: JSON.stringify(data),
    };
    return await fetch("http://172.20.10.6:5002/tagfilter", config)
      .then((res) => {return res.json();})
      .then((data) => {
        //console.log(data);
        console.log( JSON.stringify( data ) );
        return JSON.stringify( data );
      })
      .catch(err => {
        console.log(err);
      });
  }

  async sendData() {
    let info = await this.postRequest();
    info = JSON.parse(info);
    this.props.navigation.navigate("RecipesList", {recipes: info});
  }

  render() {
    return (
        <View style={styles.column}>
          <MyPicker data={this.state.data} initValue={"Select your ingredient"} callback={option=>this.setState({i1: option})}/>
          <MyPicker data={this.state.data} initValue={"Select your ingredient"} callback={option=>this.setState({i2: option})}/>
          <MyPicker data={this.state.data} initValue={"Select your ingredient"} callback={option=>this.setState({i3: option})}/>
          <OwnButton text={"Search"} green={true} onPress={this.sendData} />
        </View>
      );
    }
}

const maxHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  row: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ffffff',
  },
  column: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    margin: '5%',
    alignSelf: 'center',
    borderColor: '#ffffff',
  },
  insideColumn: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 15,
    color: '#ffffff'
  },
  cell:{
    flex: 1,
    borderRightWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ffffff',
  },

  picture: {
    // position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    resizeMode: 'contain',
    width: pictureSize,
    height: pictureSize,
  },
  pictureWrapper: {
    // width: Dimensions.get("window").width,
    // height: pictureSize,

    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    borderColor: "#37474F",
  },
  textImage: {
    color: 'black',
    // paddingLeft: 0,
    fontSize: 40,
    paddingTop: 40,
    // textAlign: 'rigth',

  }
});
