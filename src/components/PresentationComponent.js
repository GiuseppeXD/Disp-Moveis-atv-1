import React, { Component } from 'react'
import { Text, View } from 'react-native'

import styles from '../styles/ManipulandoStyles'; 

const PresentationComponent = (props) => {
   return (
      <View>

        <Text style={styles.texto3} onPress = {props.updateState}>
            {props.myState}
        </Text>

      </View>
   )
}
export default PresentationComponent