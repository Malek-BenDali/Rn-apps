import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, Text, View, Switch} from 'react-native';
import {colors} from '../assets';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {CustomBottonHeader} from '../components';

const FilterSwitch = ({value, onChange, label}) => (
  <View style={styles.filterContainer}>
    <Text> {label} </Text>
    <Switch
      trackColor={{true: colors.primary, false: '#ccc'}}
      thumbColor={colors.primary}
      value={value}
      onValueChange={onChange}
    />
  </View>
);

const FilterScreen = ({navigation}) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  navigation.setOptions({
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomBottonHeader}>
        <Item
          title="Menu"
          iconName="ios-save"
          onPress={() => navigation.openDrawer()}
        />
      </HeaderButtons>
    ),
  });

  const saveFilters = useCallback(
    () => ({
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vagen: isVegan,
      vegetarian: isVegetarian,
    }),
    [isGlutenFree, isLactoseFree, isVegan, isVegetarian],
  );

  // useEffect(() => {
  //   navigation.setParams({
  //     save: saveFilters,
  //   });
  // }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten Free"
        value={isGlutenFree}
        onChange={newValue => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label="Gluten Free"
        value={isLactoseFree}
        onChange={newValue => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label="Gluten Free"
        value={isVegan}
        onChange={newValue => setIsVegan(newValue)}
      />
      <FilterSwitch
        label="Gluten Free"
        value={isVegetarian}
        onChange={newValue => setIsVegetarian(newValue)}
      />
    </View>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15,
  },
});
