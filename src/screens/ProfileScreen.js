import React, {useState, useEffect} from 'react';
import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {ScrollView} from 'react-native-gesture-handler';

const ProfileScreen = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  useEffect(() => {
    if (value === 'upload') {
      navigation.navgate('upload');
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
            marginHorizontal: 5,
          }}>
          <Text> </Text>
          <Text style={{fontSize: 24, paddingVertical: 5}}>Profile</Text>
          <DropDownPicker
            style={{width: 100, marginLeft: 180}}
            open={open}
            value={value}
            items={[
              {
                label: 'Home ',
                value: 'home',
                icon: () => (
                  <Image
                    source={require('../images/home.png')}
                    style={{width: 20, height: 20}}
                  />
                ),
              },
              {
                label: 'My Uploade ',
                value: 'upload',
                icon: () => (
                  <Image
                    source={require('../images/user.png')}
                    style={{width: 20, height: 20}}
                  />
                ),
              },
              {
                label: 'Rank',
                value: 'rank',
                icon: () => (
                  <Image
                    source={require('../images/bar-chart.png')}
                    style={{width: 20, height: 20}}
                  />
                ),
              },
            ]}
            setOpen={setOpen}
            setValue={setValue}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 20,
          }}>
          <Image
            source={require('../images/user-profile.png')}
            style={{
              height: 200,
              width: 200,
              paddingHorizontal: 30,
            }}
          />
        </View>

        <View
          style={{
            paddingVertical: 20,
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
                124
              </Text>
            </View>
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
              paddingVertical: 10,
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
              64
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 20,
          }}>
          <Text
            style={{
              fontSize: 20,
              marginRight: 5,
            }}>
            Motto
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              fontSize: 20,
              paddingVertical: 1,
              paddingHorizontal: 40,
            }}
            placeholder="Hi , everyone"
          />
          <Text
            style={{
              backgroundColor: 'lightblue',
              fontSize: 15,
              textAlignVertical: 'center',
              paddingHorizontal: 10,
              marginLeft: 10,
            }}>
            Update
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingVertical: 20,
          }}>
          <TouchableOpacity>
            <Image
              source={require('../images/user.png')}
              style={{width: 70, height: 70}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Rank')}>
            <Image
              source={require('../images/bar-chart.png')}
              style={{width: 70, height: 70}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Upload New')}>
            <Image
              source={require('../images/add.png')}
              style={{width: 70, height: 70}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
