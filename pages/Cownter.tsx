import React, { useState } from 'react';
import { Text, FlatList, StyleSheet, Image, View } from 'react-native';
import FkaButton from '../components/Button';
import FkaContainer from '../components/ui/FkaContainer';

const Cownter = () => {
    const [counter, setCounter] = useState(0);
    
    const onButtonClick = () => {
        setCounter(counter+1);
    }
    const onButtonResetClick = () => {
        setCounter(0);
    }

    return (
    <FkaContainer>
        <Text style={styles.headline}>Cownting</Text>
        <FkaButton label="+" onClick={onButtonClick}/>
        <FkaButton label="reset" onClick={onButtonResetClick}/>

        <View style={styles.cowContainer}>
        { counter > 0 && <Image source={require('../assets/farming/cow.png')} style={styles.cow}></Image>} 
        { counter > 1 && <Image source={require('../assets/farming/cow.png')} style={styles.cow}></Image>}
        { counter > 2 && <Image source={require('../assets/farming/cow.png')} style={styles.cow}></Image>}
        { counter > 3 && <Image source={require('../assets/farming/cow.png')} style={styles.cow}></Image>}
        { counter > 4 && <Image source={require('../assets/farming/cow.png')} style={styles.cow}></Image>}
        { counter > 5 && <Image source={require('../assets/farming/cow.png')} style={styles.cow}></Image>}
        { counter > 6 && <Image source={require('../assets/farming/cow.png')} style={styles.cow}></Image>}
        { counter > 7 && <Image source={require('../assets/farming/cow.png')} style={styles.cow}></Image>} 
        { counter > 8 && <Image source={require('../assets/farming/cow.png')} style={styles.cow}></Image>}
        { counter > 9 && <Image source={require('../assets/farming/cow.png')} style={styles.cow}></Image>}
        { counter > 10 && <Image source={require('../assets/farming/cow.png')} style={styles.cow}></Image>}
        { counter > 11 && <Image source={require('../assets/farming/cow.png')} style={styles.cow}></Image>}
        { counter > 12 && <Image source={require('../assets/farming/cow.png')} style={styles.cow}></Image>}
        { counter > 13 && <Image source={require('../assets/farming/cow.png')} style={styles.cow}></Image>}
        { counter > 14 && <Image source={require('../assets/farming/cow.png')} style={styles.cow}></Image>} 
        { counter > 15 && <Image source={require('../assets/farming/cow.png')} style={styles.cow}></Image>}
        { counter > 16 && <Image source={require('../assets/farming/cow.png')} style={styles.cow}></Image>}
        { counter > 17 && <Image source={require('../assets/farming/cow.png')} style={styles.cow}></Image>}
        { counter > 18 && <Image source={require('../assets/farming/cow.png')} style={styles.cow}></Image>}
        { counter > 19 && <Image source={require('../assets/farming/cow.png')} style={styles.cow}></Image>}
        { counter > 20 && <Image source={require('../assets/farming/cow.png')} style={styles.cow}></Image>}
        { counter > 21 && <Image source={require('../assets/farming/cow.png')} style={styles.cow}></Image>} 
        { counter > 22 && <Image source={require('../assets/farming/cow.png')} style={styles.cow}></Image>}
        { counter > 23 && <Image source={require('../assets/farming/cow.png')} style={styles.cow}></Image>}
        { counter > 24 && <Image source={require('../assets/farming/cow.png')} style={styles.cow}></Image>}
        </View>
       
    </FkaContainer>
    )
}

const styles = StyleSheet.create({
    headline: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: '700',
    },
    cow:{
        height:40,
        width:40,
        marginRight:10,
        marginTop:15,
        resizeMode: "contain",
    },
    cowContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
    
});
export default Cownter;