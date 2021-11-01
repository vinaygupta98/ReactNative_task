import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  TextInput,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SERVER_API, SERVER} from '../helper';

const ProfileScreen = ({navigation}) => {
  const [userDetail, setUserDetail] = useState({
    name: 'UserName',
    age: 'age',
    phone: 'Phone no',
    email: 'email',
    uploaded: 0,
  });
  useEffect(async () => {
    try {
      const authToken = await AsyncStorage.getItem('authToken');
      const response = await fetch(
        `${SERVER_API}/auth/me?authToken=${authToken}`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      const data = await response.json();
      setUserDetail(data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <ScrollView>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              style={{
                height: 30,
                width: 30,
              }}
              source={require('../images/menu.png')}
            />
          </TouchableOpacity>
          <Image
            style={{
              height: 50,
              width: 140,
            }}
            source={require('../images/logo.png')}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Update')}>
            <Text
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                backgroundColor: 'lightgrey',
                fontSize: 16,
              }}>
              Update
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 20,
          }}>
          {userDetail.profileImage ? (
            <Image
              source={{
                uri: `${SERVER}/${userDetail.profileImage.fileName}`,
              }}
              style={{
                height: 150,
                width: 150,
                paddingHorizontal: 30,
                borderRadius: 100,
              }}
            />
          ) : (
            <Image
              source={require('../images/user-profile.png')}
              style={{
                height: 150,
                width: 150,
                paddingHorizontal: 30,
              }}
            />
          )}
        </View>
        <View
          style={{
            paddingVertical: 10,
            marginLeft: 30,
          }}>
          <Text
            style={{
              fontSize: 20,
            }}>
            Name: {userDetail.name}
          </Text>
          <Text
            style={{
              fontSize: 20,
            }}>
            Age: {userDetail.age}
          </Text>
          <Text
            style={{
              fontSize: 20,
            }}>
            Phone: {userDetail.phone}
          </Text>
          <Text
            style={{
              fontSize: 20,
            }}>
            EMail: {userDetail.email}
          </Text>
        </View>

        <View
          style={{
            paddingVertical: 10,
            marginLeft: 30,
          }}>
          <Text
            style={{
              fontSize: 20,
            }}>
            Total Uploaded
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 10,
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('My Upload')}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 20,
                }}>
                <Image
                  source={require('../images/image.png')}
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
                <Text
                  style={{
                    paddingLeft: 5,
                    fontSize: 20,
                  }}>
                  {userDetail.totalUpload}
                </Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../images/play-button.png')}
                style={{
                  width: 25,
                  height: 25,
                }}
              />
              <Text
                style={{
                  paddingLeft: 5,
                  fontSize: 20,
                }}>
                124
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            paddingVertical: 10,
            marginLeft: 30,
          }}>
          <Text
            style={{
              fontSize: 20,
            }}>
            Total Likes
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 5,
            }}>
            <Image
              source={require('../images/heart.png')}
              style={{
                width: 25,
                height: 25,
              }}
            />
            <Text
              style={{
                paddingLeft: 5,
                fontSize: 20,
                color: 'grey',
              }}>
              {userDetail.totalLikes}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
