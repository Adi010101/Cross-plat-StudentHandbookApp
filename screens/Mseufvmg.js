import React, {Component} from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
  } from 'react-native';

export default class Mseufvmg extends Component {
    render (){
      return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.box}>
          <Text style={styles.sectionTitle}>Our Vision</Text>
          </View>
          <Text style={styles.sectionDescription}>"In 2030, the Manuel S. Enverga University Foundation is a 
          globally competitive university with high concentrations of talent, excellent teaching environment, 
          rigorous program quality, sufficient resources, and a culture of collaboration."
          </Text>
          <View style={styles.box}>
          <Text style={styles.sectionTitle}>Our Mission</Text>
          </View>
          <Text style={styles.sectionDescription}>"The University is a private non-stock non-profit non-sectarian 
          educational foundation with a three-fold function - instruction, research, and community service - 
          offering responsive and alternative programs supportive of national development and standards of 
          global excellence."
          </Text>
          <View style={styles.box}>
          <Text style={styles.sectionTitle}>Our Goal</Text>
          </View>
          <Text style={styles.sectionDescription}>"MSEUF shall produce graduates who have research-based knowledge, 
          leadership and management skills, and professionalism."
          </Text>
        </ScrollView>
      </View>
      );
    }
}

  const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      flex: 1,
    },
    box:{
      marginRight: 20,
      backgroundColor: '#7c0607',
      flex: 1,
    },
    sectionTitle: {
      alignSelf: 'center',
      fontSize: 25,
      margin: 10,
      fontWeight: '800',
      color: 'white',
    },
    sectionDescription: {
      fontStyle: 'italic',
      alignSelf: 'center',
      fontSize: 20,
      fontWeight: '600',
      padding: 30,
      textAlign: 'center',
      color: 'black',
    },
});
  