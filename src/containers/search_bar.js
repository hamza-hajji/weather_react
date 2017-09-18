import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {searchTerm: ''};

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.fetchWeather(this.state.searchTerm);
    this.setState({searchTerm: ''});
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className='input-group'>
        <input
          className='form-control'
          placeholder='Get the weather forecast for your area'
          value={this.state.searchTerm}
          onChange={e => this.setState({searchTerm: e.target.value})}
        />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-default'>Get Forecast</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
