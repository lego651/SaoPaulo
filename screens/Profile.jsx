import React from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux'

// common
import { Text, View } from 'react-native';

// styles
import styles from '../styles';

class Profile extends React.Component {
  state = {}

  render() {
    console.dir(this.props.user)
    return (
      <View>
        <Text> Profile Page </Text>
        {/* {this.props.user.email} */}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(Profile)