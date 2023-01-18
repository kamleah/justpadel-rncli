import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BottomTabBar = ({ state, descriptors, navigation }) => {
    const insets = useSafeAreaInsets();
    const paddingBottom = {
        paddingBottom: insets.bottom
    }
    return (
        <View style={[styles.bottomBar, paddingBottom]}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                    ? options.tabBarLabel
                    : options.title !== undefined
                    ? options.title
                    : route.name;        
                const isFocused = state.index === index;
        
                const onPress = () => {
                    if(options.disabled) {
                        return false;
                    }
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });
        
                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };
        
                const onLongPress = () => {
                    navigation.emit({
                    type: 'tabLongPress',
                    target: route.key,
                    });
                };
    
                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={[styles.tabItem]}
                        >
                            {options.tabBarIcon && options.tabBarIcon({isFocused})}
                            <Text style={isFocused ?  styles.labelActive : styles.label}>
                                {label}
                            </Text>
                    </TouchableOpacity>
                );
            })}
      </View>
    );
}

export default BottomTabBar;

const styles = StyleSheet.create({
    bottomBar: {
        flexDirection: 'row',
        paddingTop: 12,
    },
    tabItem: {
        flex: 1,
        paddingHorizontal: 8,
        alignItems: 'center'
    },
    label: {
        // fontFamily: 'Lato-Regular',
        fontSize: 11,
        paddingTop: 8,
        color: `#b5b5b5`,
        textAlign: 'center'
    },
    labelActive: {
        // fontFamily: 'Lato-Regular',
        fontSize: 11,
        paddingTop: 8,
        color: '#000000',
        textAlign: 'center'
    }
});