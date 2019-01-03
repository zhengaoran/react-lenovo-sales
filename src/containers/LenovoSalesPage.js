import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Layout, Icon, BackTop } from 'antd';
import dateFormat  from 'dateFormat';

import * as actions from '../actions/lenovoSalesActions';
import LenovoSalesTable from '../components/LenovoSalesTable';
import LenovoSalesSearch from '../components/LenovoSalesSearch';
import LenovoSalesFilter from '../components/LenovoSalesFilter';

const { Header, Footer, Content } = Layout;
const format = "dddd, mmmm dS, yyyy, h:MM:ss TT";

class LenovoSalesPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchToken: '',
            selectedFilters: {
                condition: "All",
                model: "All",
                processor: "All",
                memory: "All",
                drive: "All"
            }
        };
    }

    applyFilter = (key, filter) => {
        let selectedFilters = {...this.state.selectedFilters};

        selectedFilters[key] = filter;

        this.setState({...this.state, selectedFilters: selectedFilters});
    }

    applySearch = searchToken => {
        this.setState({...this.state, searchToken: searchToken});
    }

    render() {
        return (
            <Layout theme="light" style={{width: "90%", margin: "0 auto"}}>
                <Header style={{height: 110, background: "white"}}>
                    <Icon type="laptop" style={{display: "inline-block", marginRight: 5, paddingTop: 10, fontSize: 25}}/>
                    <div style={{display: "inline-block", marginTop: 10, fontSize: 30, fontWeight: 500, lineHeight: "40px"}}>Lenovo Watch</div>
                    <div style={{fontSize: 15, fontWeight: 300, lineHeight: "20px"}}>Great deals on 1561 discounted laptops at Lenovo US Outlet</div>
                </Header>
                <Content style={{background: "white"}}>
                    <LenovoSalesFilter selectedFilters={this.state.selectedFilters} applyFilter={this.applyFilter}/>
                    <div style={{margin: "20px auto", borderBottom: "1px solid black", background: "white"}}/>
                    <LenovoSalesSearch applySearch={this.applySearch}/>
                    <div style={{margin: "20px auto", borderBottom: "1px solid black", background: "white"}}/>
                    <LenovoSalesTable
                        ref={table => this.table = table}
                        startLoading={this.props.actions.startLoading}
                        fetchSales={this.props.actions.fetchSales}
                        lenovoSales={this.props.lenovoSales.data}
                        isLoading={this.props.lenovoSales.isLoading}
                        searchToken={this.state.searchToken}
                        selectedFilters={this.state.selectedFilters}
                    />
                </Content>
                <Footer style={{padding: "24px 0", background: "white"}}>
                    Prices refreshed on {dateFormat(new Date(), format)}
                </Footer>
                <BackTop style={{right: 17}}/>
            </Layout>
        )
    }
}

LenovoSalesPage.propTypes = {
    actions: PropTypes.object.isRequired,
    lenovoSales: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        lenovoSales: state.lenovoSales
    };
}
  
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LenovoSalesPage);