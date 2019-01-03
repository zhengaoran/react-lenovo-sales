import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'antd';

const FormItem = Form.Item;
const filters = {
    condition: ["All", "New", "Refurbished", "Scratch And Dent"],
    model: ["All", "ThinkPad X", "ThinkPad T", "ThinkPad P", "ThinkPad E", "ThinkPad L"],
    processor: ["All", "Core™ i3", "Core™ i5", "Core™ i7"],
    memory: ["All", "4GB", "8GB", "16GB", "32GB", "64GB"],
    drive: ["All", "eMMC", "Hard Drive", "Solid State Drive"]
}

class LenovoSalesFilter extends React.Component {
    render() {
        return (
            <Form>
                {
                    Object.entries(filters).map(([key, values]) => {
                        return (
                            <FormItem key={"filter"+key}>
                                {
                                    values.map(filter => {
                                        return (
                                            <Button
                                                key={"filter"+key+filter}
                                                className={this.props.selectedFilters[key] === filter ? "btn-selected" : ""}
                                                style={{marginRight: 2}}
                                                onClick={() => this.props.applyFilter(key, filter)}
                                            >{filter}</Button>
                                        )
                                    })
                                } 
                            </FormItem>
                        )
                    })
                }
            </Form>
        )
    }
}

LenovoSalesFilter.propTypes = {
    selectedFilters: PropTypes.object.isRequired,
    applyFilter: PropTypes.func.isRequired
};

export default LenovoSalesFilter;