import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Avatar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../navigation/Routes';

import {useSelector} from 'react-redux';

const UserAvatar = () => {
  const navigation = useNavigation();
  const {theme} = useSelector(state => state.theme);
  const {user} = useSelector(state => state.user);
  const [avatar, setAvatar] = useState(
    require('../../../assets/images/avatar/avatar2.png'),
  );

  useEffect(() => {
    const myAvatar =
      user?.picture === ''
        ? require('../../../assets/images/avatar/avatar2.png')
        : {
            uri: `https://appso.id/schools/${user?.set_school_id}/users/parents/${user?.picture}`,
          };
    setAvatar(myAvatar);
  }, [user?.picture, user?.set_school_id]);

  return (
    <TouchableOpacity onPress={() => navigation.navigate(Routes.Menu)}>
      <Avatar.Image
        source={avatar}
        size={38}
        style={{backgroundColor: theme.bg}}
      />
    </TouchableOpacity>
  );
};

export default UserAvatar;
