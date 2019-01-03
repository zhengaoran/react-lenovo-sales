import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Table } from 'antd';
import WindowSizeListener from 'react-window-size-listener';

import fullColumns from '../constants/lenovoTableHeader';
import mobileColumns from '../constants/lenovoTableMobileHeader';

const paginationConfig = {
    defaultPageSize: 10,
    showSizeChanger: true,
    pageSizeOptions: ['10', '25', '50', '100'],
    showQuickJumper: true
};

class LenovoSalesTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mobileView: false,
            columns: fullColumns
        };
    }

    componentDidMount(){
        this.props.startLoading();
        axios.get('https://lw.ofwiz.com/parts').then(response => this.props.fetchSales(response));
    }

    changePageView = windowWidth => {
        if(windowWidth <= 1024){
            let columns = mobileColumns.filter(column => {
                return column.widthToHide ? column.widthToHide <= windowWidth : true}
            );

            this.setState({...this.state, columns: columns, mobileView: true});
        }
        else if(windowWidth > 1024 && this.state.mobileView)
            this.setState({...this.state, columns: fullColumns, mobileView: false});
    }

    render() {
        let searchToken = this.props.searchToken.toLowerCase();
        let sales = this.props.lenovoSales.filter(item => {
            let filterNotMatched = Object.entries(this.props.selectedFilters).find(([key, value]) => {
                if(value === "All")
                    return false;
                
                return item[key].toLowerCase().indexOf(value.toLowerCase()) === -1;
            });
            
            let searchNotMatched = searchToken.length > 0 && Object.entries(item).find(([key, value]) => value.toLowerCase().indexOf(searchToken) === -1);

            return !filterNotMatched && !searchNotMatched;
        })
        
        return (
            <div>
                <WindowSizeListener onResize={windowSize => this.changePageView(windowSize.windowWidth)}/>
                <Table
                    columns={this.state.columns}
                    dataSource={sales}
                    rowKey={data => data.partNumber}
                    pagination={paginationConfig}
                    loading={this.props.isLoading}
                />
            </div>
        )
    }
}

LenovoSalesTable.propTypes = {
    startLoading: PropTypes.func.isRequired,
    fetchSales: PropTypes.func.isRequired,
    lenovoSales: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    searchToken: PropTypes.string.isRequired,
    selectedFilters: PropTypes.object.isRequired
};

export default LenovoSalesTable;