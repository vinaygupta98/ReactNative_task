import React from 'react';
import Header from '../../common/Header';
import {View, Text, Image} from 'react-native';
import Card from '../../components/Card';
import BottomBar from '../../components/BottomBar';

const Services = () => {
  const DefaultServices = [
    {title: 'NDIS', link: 'ndis'},
    {title: 'Aged Care', link: 'aged_care'},
    {title: 'Community Hub', link: 'community_hub'},
    {title: 'Port Curtis', link: 'port_cutris'},
    {title: 'Aqua fit', link: 'aqua_fit'},
    {title: 'Ground Control', link: 'ground_control'},
  ];
  return (
    <View style={{height: '100%'}}>
      <Header />
      <Text
        style={{
          backgroundColor: 'lightgreen',
          fontWeight: '700',
          fontSize: 24,
          textAlign: 'center',
          paddingVertical: 20,
        }}>
        Welcome to the Community
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '700',
          fontSize: 18,
          marginVertical: 20,
        }}>
        Please select a service
      </Text>
      <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        {DefaultServices.map((service, i) => (
          <Card {...service} key={i} />
        ))}
      </View>
      <BottomBar />
    </View>
  );
};

export default Services;
