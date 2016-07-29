import React, { Component } from 'react';
import { TabBarIOS } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ScheduleContainer from './Schedule/ScheduleContainer';
import SpeakersContainer from './Speakers/SpeakersContainer';
import { colors } from '../constants';

export class npmCampReact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'schedule',
    };
  }
  render() {
    return (
      <TabBarIOS
        tintColor={colors.red}
      >
        <Icon.TabBarItemIOS
          title="Schedule"
          iconName="ios-calendar"
          selectedIconName="ios-calendar"
          selected={this.state.selectedTab === 'schedule'}
          onPress={() => this.setState({ selectedTab: 'schedule' })}
        >
          <ScheduleContainer />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="Speakers"
          iconName="ios-contact"
          selectedIconName="ios-contact"
          selected={this.state.selectedTab === 'speakers'}
          onPress={() => this.setState({ selectedTab: 'speakers' })}
        >
          <SpeakersContainer />
        </Icon.TabBarItemIOS>
      </TabBarIOS>
    );
  }
}
