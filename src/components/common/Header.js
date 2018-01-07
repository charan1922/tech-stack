import React, { Component } from 'react'
import { View,Text,StyleSheet } from 'react-native'


class Header extends Component{
    render(){
        return(
            <View style={styles.header}>
                <Text>{this.props.headerText}</Text>
            </View>

        );

        }
   }

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height:60,
        paddingTop: 15,
        shadowColor:'#000',
        shadowOffset:{width:0,height: 2},
        shadowOpacity:0.2,
        elevation:2,
        position: 'relative',
        

    }
})

export {Header};