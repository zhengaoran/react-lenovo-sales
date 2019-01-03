import React from 'react';
import { Button } from 'antd';

const mobileColumns = [
    {
        title: 'Model',
        dataIndex: 'model',
        width: 150,
        sorter: (a, b) => a.model > b.model ? -1 : 1,
    }, 
    {
        title: 'Condition',
        dataIndex: 'condition',
        width: 110,
        widthToHide: 950
    }, 
    {
        title: 'Price',
        dataIndex: 'price',
        width: 105,
        sorter: (a, b) => {
            try{
                const priceA = parseFloat(a.price.substring(1).replace(/,/g, ''));
                const priceB = parseFloat(b.price.substring(1).replace(/,/g, ''));
    
                return priceA - priceB;
            }
            catch(error){
                return a.price - b.price;
            }
        }
    },
    {
        title: 'Discount',
        dataIndex: 'discount',
        width: 105,
        sorter: (a, b) => {
            try{
                const discountA = parseFloat(a.discount.substring(1).replace(/,/g, ''));
                const discountB = parseFloat(b.discount.substring(1).replace(/,/g, ''));
    
                return discountA - discountB;
            }
            catch(error){
                return a.discount - b.discount;
            }
        },
        widthToHide: 1024
    },
    {
        title: 'Availability',
        dataIndex: 'availability',
        width: 120
    },
    {
        title: 'Processor',
        dataIndex: 'processor',
        width: 210,
        widthToHide: 700
    },
    {
        title: 'Memory',
        dataIndex: 'memory',
        width: 150,
        widthToHide: 775
    },
    {
        title: 'Hard Drive',
        dataIndex: 'drive',
        width: 170,
        widthToHide: 850
    },
    {
        title: 'Order',
        dataIndex: 'url',
        width: 100,
        render: url => <Button type="primary" key={"btn-"+url} href={url}>Order</Button>,
    },
];

export default mobileColumns;