import React from 'react';
import { tabs } from '../constants';
import { getNews } from '../requests';
import Tabs from './Tabs';
import NewsList from './NewsList';


class News extends React.Component {
  state = {
    data: [],
    activeTab: tabs[0]
  }

  componentDidMount() {
    this.setActiveTab(tabs[0])();
  }

  setActiveTab = (activeTab) => () => {
    getNews(activeTab)
      .then(data => this.setState({ data: data.articles, activeTab }));
  }

  render() {
    const { data, activeTab } = this.state;

    return <>
      <Tabs activeTab={activeTab} setActiveTab={this.setActiveTab} />
      <NewsList data={data} />
    </>
  }
}

export default News;