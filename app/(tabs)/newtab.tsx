import {StyleSheet, View, Image } from 'react-native';
import React from 'react';

const NewTab = () => {
  return (
    <View style={styles.container}>
      <Image
      source={{uri: 'https://avatar.iran.liara.run/public/55'}}
      style= {styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 70,
    height: 50,
  },
});
export default NewTab;