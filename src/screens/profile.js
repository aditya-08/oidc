//import library
import {View, Text, TextInput} from 'react-native';
import React from 'react';

//create component

const Profile = () => {

    return(
        <View>
            <Text>Create Profile</Text>
            {/* <Text style={styles.textInput}>Name:</Text>
            <TextInput 
                styles={styles.textInput}
                placeholder = 'Enter Name' */}
            />
        </View>
    );
}

const styles = {
    textInput : {
        height : 40,
        borderColor : 'gray'
    },
    text : {
        height : 30,
        color : 'gray'
    }
};

//make the component available
export default Profile;