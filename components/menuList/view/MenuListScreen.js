import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from '../style/MenuListStyle'

const MenuListScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Company Name
                </Text>
            </View>
            <ScrollView style={styles.body}>
                <View style={styles.bodyHeader}>
                    <Text style={styles.bodyHeaderText}>Menu List</Text>
                </View>
                <View style={styles.categoryWrapper}>
                    <Text style={styles.categoryWrapperHeader}>Morning Break fast</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.categoryBulletStyle}>{'\u2022'}</Text>
                        <Text style={styles.categoryListStyle}>Coffee/Tea/Milk</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.categoryBulletStyle}>{'\u2022'}</Text>
                        <Text style={styles.categoryListStyle}>Idly</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.categoryBulletStyle}>{'\u2022'}</Text>
                        <Text style={styles.categoryListStyle}>Dosa</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.categoryBulletStyle}>{'\u2022'}</Text>
                        <Text style={styles.categoryListStyle}>Vada</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.categoryBulletStyle}>{'\u2022'}</Text>
                        <Text style={styles.categoryListStyle}>Bun</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.categoryBulletStyle}>{'\u2022'}</Text>
                        <Text style={styles.categoryListStyle}>Bread</Text>
                    </View>
                </View>
                <View style={styles.categoryWrapper}>
                    <Text style={styles.categoryWrapperHeader}>Afternoon Lunch</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.categoryBulletStyle}>{'\u2022'}</Text>
                        <Text style={styles.categoryListStyle}>Coffee/Tea/Milk</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.categoryBulletStyle}>{'\u2022'}</Text>
                        <Text style={styles.categoryListStyle}>Lunch</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.categoryBulletStyle}>{'\u2022'}</Text>
                        <Text style={styles.categoryListStyle}>Spl. Lunch</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.categoryBulletStyle}>{'\u2022'}</Text>
                        <Text style={styles.categoryListStyle}>North Meals</Text>
                    </View>
                </View>
                <View style={styles.categoryWrapper}>
                    <Text style={styles.categoryWrapperHeader}>Evening Snacks</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.categoryBulletStyle}>{'\u2022'}</Text>
                        <Text style={styles.categoryListStyle}>Coffee/Tea/Milk</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.categoryBulletStyle}>{'\u2022'}</Text>
                        <Text style={styles.categoryListStyle}>Bonda</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.categoryBulletStyle}>{'\u2022'}</Text>
                        <Text style={styles.categoryListStyle}>Biscuits</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.categoryBulletStyle}>{'\u2022'}</Text>
                        <Text style={styles.categoryListStyle}>Soup</Text>
                    </View>
                </View>
                <View style={styles.categoryWrapper}>
                    <Text style={styles.categoryWrapperHeader}>Night</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.categoryBulletStyle}>{'\u2022'}</Text>
                        <Text style={styles.categoryListStyle}>Coffee/Tea/Milk</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.categoryBulletStyle}>{'\u2022'}</Text>
                        <Text style={styles.categoryListStyle}>Meals</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.categoryBulletStyle}>{'\u2022'}</Text>
                        <Text style={styles.categoryListStyle}>Spl. Lunch</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.categoryBulletStyle}>{'\u2022'}</Text>
                        <Text style={styles.categoryListStyle}>North Meals</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.categoryBulletStyle}>{'\u2022'}</Text>
                        <Text style={styles.categoryListStyle}>Extra Chapathi</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.categoryBulletStyle}>{'\u2022'}</Text>
                        <Text style={styles.categoryListStyle}>Extra Pav</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default MenuListScreen;