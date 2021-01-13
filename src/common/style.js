import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container:{
        alignSelf:'center',
        //flexDirection:'row',
        borderWidth:2,
        padding:20,
        marginTop:20
        
    },
})

const btnstyle =StyleSheet.create({
    style1:{
        marginTop: 10, marginLeft: 120, marginRight: 120,
        alignItems: 'center', borderRadius: 100,
        backgroundColor: 'white', padding: 10
    }
})

const buttons = StyleSheet.create({ 
    primary: { 
        flexDirection:'row',
        borderWidth:2,
        borderColor:'white',
        padding:10,
        marginTop:10,
        borderRadius:100,
        color:'white',
        alignSelf:'center'

    }
  })

const textinput = StyleSheet.create({
    textinput1:{
        paddingHorizontal: 10,
        marginLeft: 10,
        borderWidth: 1.5,
        borderColor: "#00716F",
        borderRadius: 23,
        paddingVertical: 3,
        fontSize: 15
    }

    }
)
const heading = StyleSheet.create({
    heading1:{
        alignSelf:'center', padding:30,
    },
    heading2:{
        fontSize:25,fontWeight:'bold', color:'white', alignSelf:'center',
        padding:20
    }
})
const imageStyle = StyleSheet.create({
    profileImage:{
        width: 170,
        height: 170,
        alignSelf: 'center',
        borderRadius:100,
    },
    profIcon:{

    }
})
 
export {styles, buttons, textinput, heading, imageStyle};