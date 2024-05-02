import { View, Text, TouchableOpacity , StyleSheet, ActivityIndicator } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import { Ionicons } from '@expo/vector-icons';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
import CircularProgress from 'react-native-circular-progress-indicator';
import NavigationIcon from './NavigationIcon';
import { Svg, Path ,G , Rect} from 'react-native-svg';

const HomePage = (p) => {


   
     
    const stack = p.navigation;

    const[loading,setLoading] = useState(true);

    useEffect(() =>{
        setTimeout(() =>{
            setLoading(!loading);
        },1000)
    },[]);

  return (
    <>
    {loading ? <ActivityIndicator size={'large'}  style={{flex:1, alignItems:'center', justifyContent:'center'}}/> : 
    <View style={{flex:1, backgroundColor:'#01796F', width:responsiveWidth(100), height:responsiveHeight(100), }}>
      <View style={{backgroundColor:'#4da19a', flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingLeft:responsiveWidth(3), paddingRight:responsiveWidth(3), marginTop:responsiveHeight(0), height:responsiveHeight(12), paddingTop:responsiveHeight(5)}}>
      <Text style={{color:'white', fontSize:responsiveFontSize(3)}}>Home</Text>
      <View style={{backgroundColor:'#01796F', height:responsiveHeight(5), width:responsiveWidth(10), borderRadius:100, alignItems:'center', justifyContent:'center'}}>
      <TouchableOpacity><Ionicons name="md-notifications"  color="white" style={{fontSize:responsiveFontSize(4)}}/></TouchableOpacity>
        </View>
      </View>
      <CirclePart/>
      <MiddleCircle/>
      <BatteryStatus/>
      <NavigationIcon stack={stack} />
    </View>
}
    </>
    
  )
}

export default HomePage


function CirclePart(){
   const [Value, SetValue] = useState(0)

   
    return(
        <View style={{alignItems:'center'}}>
            <View style={{marginTop:responsiveHeight(2), marginBottom:responsiveHeight(2)}}>
                <Text style={{color:'white', fontSize:responsiveFontSize(3), fontWeight:'bold'}}>SMART BMS</Text>
               
            </View>
            <View style={{width: responsiveWidth(100), flexDirection:'row', justifyContent:'space-between',  paddingLeft:responsiveWidth(2), paddingRight:responsiveWidth(2)}}>
                <CircularProgress   
                value={Value}
                radius={60}
                duration={3000}
                progressValueColor={'#ecf0f1'}
                titleFontSize={responsiveFontSize(3)}
                titleColor={'white'}
                title={'V'}
                maxValue={5}
                titleStyle={{fontWeight: 'bold'}}
                valueSuffix={'.0'}
                inActiveStrokeColor='#4da19a'
                inActiveStrokeOpacity={0.7}
                inActiveStrokeWidth={responsiveWidth(5)}
                activeStrokeColor='#66FF00'
                activeStrokeWidth={responsiveWidth(5)}
                onAnimationComplete={() => SetValue(4)}
                />    

<CircularProgress   
                value={Value}
                radius={60}
                duration={3000}
                progressValueColor={'#ecf0f1'}
                title={'V'}
                titleFontSize={responsiveFontSize(3)}
                maxValue={5}
                fontSize={20}
                titleColor={'white'}
                titleStyle={{fontWeight: 'bold'}}
                valueSuffix={'.0'}
                inActiveStrokeColor='#4da19a'
                inActiveStrokeOpacity={0.7}
                inActiveStrokeWidth={responsiveWidth(5)}
                activeStrokeColor='#66FF00'
                activeStrokeWidth={responsiveWidth(5)}
                onAnimationComplete={() => SetValue(4)}
                />    
            
            
                <CircularProgress   
                value={Value}
                radius={60}
                duration={3000}
                progressValueColor={'#ecf0f1'}
                title={'V'}
                titleFontSize={responsiveFontSize(3)}
                maxValue={5}
                fontSize={20}
                titleColor={'white'}
                titleStyle={{fontWeight: 'bold'}}
                valueSuffix={'.0'}
                inActiveStrokeColor='#4da19a'
                inActiveStrokeOpacity={0.7}
                inActiveStrokeWidth={responsiveWidth(5)}
                activeStrokeColor='#66FF00'
                activeStrokeWidth={responsiveWidth(5)}
                onAnimationComplete={() => SetValue(4)}
                />    
            
            </View>
            <View style={{flexDirection:'row', marginTop:responsiveHeight(1), marginLeft:responsiveWidth(2), marginLeft:responsiveWidth(2),marginRight:responsiveWidth(2), justifyContent:'space-between', marginLeft:responsiveWidth(4)}}>
                <Text style={{fontSize:responsiveFontSize(3),color:'white', }}>{'Voltage \n Cell 1'}</Text>
                <Text style={{fontSize:responsiveFontSize(3),color:'white', marginLeft:responsiveWidth(10),}}>{'Voltage \n Cell 2'}</Text>
                <Text style={{fontSize:responsiveFontSize(3), color:'white', marginLeft:responsiveWidth(10),}}>{'Voltage \n Cell 3'}</Text>
            </View>
            </View>
            
                
    )
}

function MiddleCircle(){
    const [Value, SetValue] = useState(0)
    const [ValueTwo, SetValueTwo] = useState(0)
    return(
        <View>
            <View style={{flexDirection:'row', marginTop:responsiveHeight(4), justifyContent:'space-between', paddingLeft:responsiveWidth(15), paddingRight:responsiveWidth(15)}}>
            <CircularProgress   
                value={Value}
                radius={60}
                duration={3000}
                progressValueColor={'#ecf0f1'}
                maxValue={5}
                valueSuffix={'A'}
                inActiveStrokeColor='#4da19a'
                inActiveStrokeOpacity={0.7}
                inActiveStrokeWidth={responsiveWidth(5)}
                activeStrokeColor='#66FF00'
                activeStrokeWidth={responsiveWidth(5)}
                onAnimationComplete={() => SetValue(3)}
                />  

<CircularProgress   
                value={ValueTwo}
                radius={60}
                duration={3000}
                progressValueColor={'#ecf0f1'}
                titleFontSize={30}
                fontSize={20}
                titleColor={'white'}
                titleStyle={{fontWeight: 'bold'}}
                valueSuffix={' °C'}
                inActiveStrokeColor='#4da19a'
                inActiveStrokeOpacity={0.7}
                inActiveStrokeWidth={responsiveWidth(5)}
                activeStrokeColor='#66FF00'
                activeStrokeWidth={responsiveWidth(5)}
                onAnimationComplete={() => SetValueTwo(35)}
                />  
        </View>

        <View style={{flexDirection:'row', marginTop:responsiveHeight(1), marginLeft:responsiveWidth(2), marginLeft:responsiveWidth(2),marginRight:responsiveWidth(2), justifyContent:'space-between', marginLeft:responsiveWidth(4)}}>
                <Text style={{fontSize:responsiveFontSize(3),color:'white', marginLeft:responsiveWidth(15), }}>{'Current'}</Text>
                <Text style={{fontSize:responsiveFontSize(3),color:'white', marginRight:responsiveWidth(10),}}>{'Temperature'}</Text>
            </View>
            
        </View>
        
    )
}

function BatteryStatus(){
    

    
    return(
      <View style={{alignItems:'center'}}>
 

<Svg height={responsiveHeight(15)} fill={'#00FF00'} width={responsiveWidth(25)} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  
	 viewBox="0 0 508 508" >
<Path style="fill:#F4EFEF;" fill={'white'} d="M472,222.6c1.2,0,2,0.8,2,2v101.6h2c14.4,0,26-11.6,26-26v-96c0-14.4-12.4-26-26.8-26h-4.4
	c-1.2,0-2-0.8-2-2v-6c0-27.6-22.8-49.2-50-49.2H54c-27.6,0-48,19.6-48,46.8v168.4c0,27.6,21.6,49.6,48.8,49.6H420
	c27.6,0,50-22.4,50-49.6v-8.4V224.2C470,223.4,470.8,222.6,472,222.6z M438,220.2V333c0,14.4-9.2,28-23.6,28h-356
	C44,361,34,347,34,332.6V172.2c0-14.4,10-23.2,24.4-23.2h356c14.4,0,24.8,10.4,24.8,24.4L438,220.2z"/>
<Path style="fill:#54B265;"   d="M414,153H58c-12,0-20.4,7.2-20.4,19.2v160.4c0,12,8,24.4,20.4,24.4h356.4c12,0,21.6-10.8,21.6-22.8
	v-160C436,162.2,426.4,153,414,153z M146,319c0,5.6-4.4,10-10,10h-16c-5.6,0-10-4.4-10-10V191c0-5.6,4.4-10,10-10h16
	c5.6,0,10,4.4,10,10V319z M254,319c0,5.6-4.4,10-10,10h-16c-5.6,0-10-4.4-10-10V191c0-5.6,4.4-10,10-10h16c5.6,0,10,4.4,10,10V319z
	 M362,319c0,5.6-4.4,10-10,10h-16c-5.6,0-10-4.4-10-10V191c0-5.6,4.4-10,10-10h16c5.6,0,10,4.4,10,10V319z"/>
<G>
	<Path style="fill:#F4EFEF;"  fill={'white'} d="M250,191c0-3.2-2.8-6-6-6h-16c-3.2,0-6,2.8-6,6v128c0,3.2,2.8,6,6,6h16c3.2,0,6-2.8,6-6V191z"/>
	<Path style="fill:#F4EFEF;"  fill={'white'} d="M142,191c0-3.2-2.8-6-6-6h-16c-3.2,0-6,2.8-6,6v128c0,3.2,2.8,6,6,6h16c3.2,0,6-2.8,6-6V191z"/>
	<Path style="fill:#F4EFEF;"  fill={'white'} d="M358,191c0-3.2-2.8-6-6-6h-16c-3.2,0-6,2.8-6,6v128c0,3.2,2.8,6,6,6h16c3.2,0,6-2.8,6-6V191z"/>
</G>
<Path d="M56.8,392.2C26,392.2,0,366.6,0,336.6V168.2c0-29.6,25.2-52.8,57.6-52.8h364.8c30.8,0,55.6,24.8,55.6,55.2v2
	c16.8,0.4,30,14.4,30,32v96c0,17.6-14.4,32-32,32l0,0v4.4c0,30.8-24.8,55.6-55.2,55.6L56.8,392.2z M57.6,123
	C29.6,123,8,142.6,8,167.8v168.4c0,26,22.4,47.6,48.8,47.6h364c26,0,47.2-21.6,47.2-47.6v-8.4c0-1.2,0.4-2,1.2-2.8
	c0.8-0.8,2-1.2,2.8-1.2h4c13.2,0,24-10.8,24-24v-96c0-13.2-10-24-23.2-24l0,0H474c-2,0-3.6-1.6-4-3.6l-0.4-6
	c0-26.4-21.2-47.6-47.6-47.6H57.6V123z"/>
<Path d="M472,333c-2.4,0-4-1.6-4-4V225c0-2.4,1.6-4,4-4s4,1.6,4,4v104C476,331.4,474.4,333,472,333z"/>
<Path d="M418,363H62c-15.6,0-30-14.8-30-30.4V172.2c0-16,15.2-25.2,30-25.2h356c15.6,0,27.2,11.6,27.2,26.8c0,2.4-1.6,4-4,4
	s-4-1.6-4-4c0-10.8-8-18.8-19.2-18.8H62c-10.8,0-22,6.4-22,17.2v160.4c0,11.2,11.2,22.4,22,22.4h356.4c11.2,0,18-11.2,18-22V221
	c0-2.4,1.6-4,4-4s4,1.6,4,4v112C444,347.8,434.4,363,418,363z"/>
<Path d="M244,331h-16c-7.2,0-12-6.8-12-13.2v-128c0-6.4,4.8-10.8,12-10.8h16c7.2,0,12,4.4,12,10.8v128C256,324.2,251.2,331,244,331z
	 M228,187c-1.6,0-4,0.4-4,2.8v128c0,2.4,2,5.2,4,5.2h16c2,0,4-2.8,4-5.2v-128c0-2.4-2.4-2.8-4-2.8H228z"/>
<Path d="M136,331h-16c-7.2,0-12-6.8-12-13.2v-128c0-6.4,4.8-10.8,12-10.8h16c7.2,0,12,4.4,12,10.8v128C148,324.2,143.2,331,136,331z
	 M120,187c-1.6,0-4,0.4-4,2.8v128c0,2.4,2,5.2,4,5.2h16c2,0,4-2.8,4-5.2v-128c0-2.4-2.4-2.8-4-2.8H120z"/>
<Path d="M352,331h-16c-7.2,0-12-6.8-12-13.2v-128c0-6.4,4.8-10.8,12-10.8h16c7.2,0,12,4.4,12,10.8v128C364,324.2,359.2,331,352,331z
	 M336,187c-1.6,0-4,0.4-4,2.8v128c0,2.4,2,5.2,4,5.2h16c2,0,4-2.8,4-5.2v-128c0-2.4-2.4-2.8-4-2.8H336z"/>
</Svg>
<Text style={{color:'white',  fontSize:responsiveFontSize(5)}}>94%</Text>
<Text style={{color:'white',  fontSize:responsiveFontSize(3)}}>Stage of Charge</Text>
      </View> 


      
    );
  };
  