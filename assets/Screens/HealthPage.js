import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
import NavigationIcon from './NavigationIcon';

const HealthPage = (p) => {

  const stack = p.navigation;

  return (
    <View style={{flex:1, backgroundColor:'#01796F', width:responsiveWidth(100), height:responsiveHeight(100), }}>
      <View style={{backgroundColor:'#4da19a', flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingLeft:responsiveWidth(3), paddingRight:responsiveWidth(3), marginTop:responsiveHeight(0), height:responsiveHeight(12), paddingTop:responsiveHeight(5)}}>
      <Text style={{color:'white', fontSize:responsiveFontSize(3)}}>Healthy</Text>
        <View style={{backgroundColor:'#01796F', height:responsiveHeight(5), width:responsiveWidth(10), borderRadius:100, alignItems:'center', justifyContent:'center'}}>
       <TouchableOpacity><Ionicons name="md-notifications"  color="white" style={{fontSize:responsiveFontSize(4)}}/></TouchableOpacity> 
        </View>
      </View>
      <PresentBar/>
      <Middle/>
      <NavigationIcon stack={stack}/>
    </View>
  )
}

export default HealthPage

function PresentBar(){
    return(
    <View style={{marginTop:responsiveHeight(2), marginLeft:responsiveWidth(2), marginRight:responsiveWidth(2)}}>
       <Text style={{color:'white', fontSize:responsiveFontSize(3),}}>80%</Text>
       <Progress.Bar progress={0.8} size={40} width={360} color={'white'}  style={{marginTop:responsiveHeight(1), width:responsiveWidth(90)}}  />
    </View>
    );
   }
   
   
   function Middle(){
   
       const currentDate = new Date();
       const day = currentDate.getDate();
       const month = currentDate.getMonth() + 1; 
       const year = currentDate.getFullYear();
     
       return(
            <View style={{marginTop:responsiveHeight(3), justifyContent:'center', alignItems:'center'}}>
               <View style={{backgroundColor:'#80Bcb7', borderRadius:15, height:responsiveHeight(10), justifyContent:'center', alignItems:'center', width:responsiveWidth(70)}}>
                   <Text style={{fontSize:responsiveFontSize(4), color:'black', fontWeight:'bold', }}>Healthy</Text>
                   <Text style={{ color:'black', fontSize:responsiveFontSize(2),fontWeight:'bold'}}>100% of charged completely</Text>
               </View>
   
               <View style={{backgroundColor:'#80Bcb7', marginTop:responsiveHeight(5), borderRadius:15, height:responsiveHeight(10), justifyContent:'center', alignItems:'center', width:responsiveWidth(70)}}>
                   <Text style={{fontSize:responsiveFontSize(4), color:'black', fontWeight:'bold', }}>167</Text>
                   <Text style={{ color:'black', fontSize:responsiveFontSize(2),fontWeight:'bold'}}>charge cycles</Text>
               </View>
   
               <View style={{backgroundColor:'#80Bcb7', marginTop:responsiveHeight(5), borderRadius:15, height:responsiveHeight(10), justifyContent:'center', alignItems:'center', width:responsiveWidth(70)}}>
                   <Text style={{fontSize:responsiveFontSize(3), color:'black', fontWeight:'bold', }}>{`${day}/${month}/${year}`}</Text>
                   <Text style={{ color:'black', fontSize:responsiveFontSize(2),fontWeight:'bold'}}>Manufacturing date</Text>
               </View>
   
               <View style={{backgroundColor:'#80Bcb7', marginTop:responsiveHeight(5), borderRadius:15, height:responsiveHeight(22), justifyContent:'center', alignItems:'center', width:responsiveWidth(70)}}>
                   <Text style={{fontSize:responsiveFontSize(3), color:'black', fontWeight:'bold', }}>Missing something?</Text>
                   <Text style={{ color:'black', fontSize:responsiveFontSize(2),fontWeight:'bold'}}>Your device didn’t report everything correctly. the incorrect options have been hidden. if you still want to see them, tap the button below.</Text>
                   <TouchableOpacity style={{backgroundColor:'#043927', marginTop:responsiveHeight(1), width:responsiveWidth(50), height:responsiveHeight(4),  justifyContent:'center', alignItems:'center', borderRadius:15}}>
           <View>
               <Text style={{color:'white', fontSize:responsiveFontSize(2), fontWeight:'bold'}}> GET STARTED</Text>
           </View>
         </TouchableOpacity>
               </View>
            </View>
   
       )
   }
   