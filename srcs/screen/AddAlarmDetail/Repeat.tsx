import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {MD2Colors as Colors} from 'react-native-paper';
import {styles} from './ButtonList.styles';

//  repeatType?: 'week' | 'day' | 'hour' | 'minute' | 'time' | undefined; 뭐야...

const Repeat = () => {
  const navigation = useNavigation();
  const optionData = [
    {title: 'Week', value: 'week'},
    {title: 'Day', value: 'day'},
    {title: 'Hour', value: 'hour'},
    {title: 'Minute', value: 'minute'},
  ];
  return (
    <View style={[styles.view]}>
      <View style={[styles.tapItemView]}>
        <FlatList
          data={optionData}
          ItemSeparatorComponent={() => {
            return <View style={[styles.separator]} />;
          }}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <View style={[styles.tapItemView]}>
                <Text style={[{fontSize: 20, color: Colors.grey600}]}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Repeat;
