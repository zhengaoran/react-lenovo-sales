import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Input } from 'antd';

const Search = Input.Search;

class LenovoSalesSearch extends React.Component {
    render() {
        return (
            <Row>
                <Col span={6} offset={18}>
                    <Search
                        placeholder="Search..."
                        onChange={event => this.props.applySearch(event.target.value)}
                        style={{maxWidth: 300, paddingRight: 1, float: "right"}}
                    />
                </Col>
            </Row>
        )
    }
}

LenovoSalesSearch.propTypes = {
    applySearch: PropTypes.func.isRequired
};

export default LenovoSalesSearch;