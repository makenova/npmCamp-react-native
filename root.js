import React, { Component } from 'react';
import { TabBarIOS } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScheduleNav } from './ScheduleNav';
import { SpeakersNav } from './SpeakersNav';
import { colors } from './constants';

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
          <ScheduleNav />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="Speakers"
          iconName="ios-contact"
          selectedIconName="ios-contact"
          selected={this.state.selectedTab === 'speakers'}
          onPress={() => this.setState({ selectedTab: 'speakers' })}
        >
          <SpeakersNav />
        </Icon.TabBarItemIOS>
      </TabBarIOS>
    );
  }
}
