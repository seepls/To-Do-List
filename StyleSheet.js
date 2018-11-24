
//prop = style 


// inline styles  : defined in markup of your code .

class Tasks extends Component {
render(){
return (
  <View style ={{ 
    flex : 1 ,
    justifyContent: 'center',
    alignItems: 'center' ,
    backgroundColor: '#F5FCFF'
  }}>
  <Text style = {{ fontSize:20 , textAlign: 'center' , margin:10}}>
  Weolcome to react Native !!!!! :D 
  </Text>
  </View>
  )
  }
  }
  
  
  // very convoluted , break apart styles into StyleSheet objects 
  
  
  
  class Tasks extends Component{
  render(){
  return(
  <View style = { styles.container}>
  <Text style = {styles.welcome}>
  Welcome to react native !! have a nice stay ! :D 
  </Text>
  </View>
  )
  }
  }
  
  const styles = StyleSheet.create({
  container : {
  flex : 1 ,
  justifyContent : 'center' ,
  alignItems: ' center',
  backgroundColor:'#F5FCFF'
  },
  welcome:{
  fontSize: 20,
  textAlign: 'center',
  margin: 10 
  }
  )};
  
// here we see into an OBJECT we can reference without having to rewrite the same inline styles .


// now we try to seprate styles into own modules 
// you can import your own style as shown!!!!

import styles from './style.js';
class Tasks extends Component {
render(){
return (
<View style ={styles.container}>
<Text style = {styles.welcome}>
Welcome to react native ! 
</Text>
</View>
)
}
}


// then you can define them in separate file 

const styles = StyleSheet.create({
container : {
flex : 1 , 
justifyContent : 'center',
alignItems: 'center' ,
backgroundColor  : '#F5FCFF'
},
welcome: { 
fontSize : 20 ,
textAlign: 'center',
margin: 10
}
)};

export default styles ;





// hence seprating our concerns . 


