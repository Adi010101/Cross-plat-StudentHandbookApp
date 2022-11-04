import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';




export default class HandbookApp extends Component {
  render (){
    return (
    <LinearGradient start = {{x: 0.0, y: 0.0}} end={{x: 1.0, y:0.0}} 
      colors={['#7c0607','#000000']} style={styles.container}> 
        <View style={styles.header}>
          <Image style = {styles.logo} source = {require('./mseuf-logo.png')}/>
          <Text style={styles.sectionTitle}>Manuel S. Enverga University Foundation</Text>
          <Text style={styles.sectionDescription}>Student Handbook</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.button}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Mseufvmg')}}>
                <Text style={styles.page}>MSEUF Vision, Mission and Goal</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('MseufStory')}}>
                <Text style={styles.page}>The MSEUF Story</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    width: '100%',
    height: '55%',
  },
  body:{
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'white',
    flex: 1,
  },
  logo:{
    marginTop: 50,
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  sectionTitle: {
    alignSelf: 'center',
    fontSize: 19,
    marginTop: 20,
    fontWeight: '600',
    color: '#fff',
  },
  sectionDescription: {
    alignSelf: 'center',
    marginTop: -0,
    fontSize: 16,
    fontWeight: '800',
    color: '#fff',
  },
  button:{
    marginTop: 50,
  },
  page: {
    fontWeight: '700',
    fontSize: 20,
    margin: 20,
    padding: 20,
    backgroundColor: '#7c0607',
    color: '#fff',
    borderRadius: 10,
  },
});
