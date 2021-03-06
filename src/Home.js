import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import  { connect } from 'react-redux';

import { requestApiData } from './actions';

class Home extends Component {

  componentDidMount() {
    this.props.requestApiData();
  }

  person = (x, i) => (
    <div key={x.id.value} >
      <h1>{x.gender}</h1>
      <h1>{x.name.first}</h1>
      <h1>{x.name.last}</h1>
      <img src={x.picture.medium} />
    </div>
  )

  render(){
    // Add empty array catch
    
    const { results = [] } = this.props.data;
    console.log(results);
    return results.length ? (
      <h1>
        {results.slice(0,5).map(this.person)}
      </h1>
    ) : <h1> loading...</h1>;
  }

}

const mapStateToProps = state => ({data: state.data});

const mapDispatchToProps = dispatch => 
bindActionCreators( {requestApiData} ,dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(Home)
