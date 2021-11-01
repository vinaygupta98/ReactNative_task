import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import SwipeCards from 'react-native-swipe-cards-deck';
import {SERVER_API, SERVER, ShortFormatDate} from '../helper';

function Card({data}) {
  return (
    <View style={[styles.card]}>
      <Image
        style={{width: '100%', height: 400}}
        source={{
          uri: `${SERVER}/${data.fileName}`,
        }}
      />
      <View style={{backgroundColor: 'white'}}>
        <Text style={{fontSize: 20}}>Likes Count: {data.likes}</Text>
        <Text style={{fontSize: 20}}>Tags: {data.tag}</Text>
        <Text style={{fontSize: 20}}>
          Posted AT: {ShortFormatDate(data.updatedAt)}
        </Text>
      </View>
    </View>
  );
}

function StatusCard({text}) {
  return (
    <View>
      <Text style={styles.cardsText}>{text}</Text>
    </View>
  );
}

const Swiper = () => {
  const [cards, setCards] = useState();
  const [posts, setPosts] = useState();
  useEffect(async () => {
    const response = await fetch(`${SERVER_API}/post/all`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    setPosts(data);
  }, []);
  async function handleYup(card) {
    try {
      const response = await fetch(`${SERVER_API}/post?id=${card._id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (data.success) {
        Alert.alert('Success', data.message);
      } else {
        console.log(error);
        Alert.alert('Error', 'Some Error Occured');
      }
    } catch (error) {
      console.log(error);
    }
    return true; // return false if you wish to cancel the action
  }
  function handleNope(card) {
    console.log(`Nope for ${card.text}`);
    return true;
  }
  function handleMaybe(card) {
    // console.log(`Maybe for ${card.text}`);
    return true;
  }

  return (
    <View style={styles.container}>
      {posts ? (
        <SwipeCards
          cards={posts}
          renderCard={cardData => <Card data={cardData} />}
          keyExtractor={cardData => String(cardData._id)}
          renderNoMoreCards={() => <StatusCard text="No more cards..." />}
          actions={{
            nope: {onAction: handleNope},
            yup: {onAction: handleYup},
            maybe: {onAction: handleMaybe},
          }}
          hasMaybeAction={true}
          // If you want a stack of cards instead of one-per-one view, activate stack mode
          // stack={true}
          // // stackDepth={3}
        />
      ) : (
        <StatusCard text="Loading..." />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    justifyContent: 'center',
    // alignItems: 'center',
    borderWidth: 1,
    width: 320,
    height: 480,
  },
  cardsText: {
    fontSize: 22,
  },
});
export default Swiper;
