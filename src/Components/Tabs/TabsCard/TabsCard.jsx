import React from 'react';
import Card from '../../Card/Card';

const TabsCard = ({item, title}) => {
    return (
        <div className='mainContainer '>
            <div className='grid grid-cols-4 gap-5 mt-10 '>
            {
                item.map(product => <Card key={product._id} product={product}></Card>)
            }
        </div>
        </div>
    );
};

export default TabsCard;