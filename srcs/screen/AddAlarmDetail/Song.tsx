import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {MD2Colors as Colors} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ModalStackParamList} from '../StackNavigator';
import {styles} from './ButtonList.styles';
type songScreenProps = StackNavigationProp<ModalStackParamList, 'Song'>;
// type songRouteProps = RouteProp<ModalStackParamList, 'Song'>;

const Song = () => {
  const navigation = useNavigation<songScreenProps>();
  const optionData = [
    {
      title: 'Rooster',
      value: 'assets/sounds/rooster.mp3',
    },
    {title: 'Lttle Bird', value: 'assets/sounds/little-birds.mp3'},
  ];
  return (
    <View style={[styles.tapListView]}>
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
              <Text style={[{fontSize: 20, color: Colors.grey600}]}>
                {item.value}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
export default Song;
