import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabsCard from './TabsCard/TabsCard';
import useProduct from '../../CustomHook/useProducts';

const TabsSection = () => {

    const [tabIndex, setTabIndex] = useState(0);

    const [products] = useProduct()
    const Sport = products.filter(productData => productData.category === 'Sports');
    const Clothing = products.filter(productData => productData.category === 'Clothing');
    const Kitchen = products.filter(productData => productData.category === 'Home & Kitchen');
    const Beauty = products.filter(productData => productData.category === 'Beauty');

    return (
        <div>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>New Arrivals</Tab>
                    <Tab>Best Sellers</Tab>
                    <Tab>Sale Items</Tab>
                    <Tab>Beauty Items</Tab>
                </TabList>
                <TabPanel>
                    <TabsCard item={Sport}></TabsCard>
                </TabPanel>
                <TabPanel>
                    <TabsCard item={Clothing}></TabsCard>
                </TabPanel>
                <TabPanel>
                    <TabsCard item={Kitchen}></TabsCard>
                </TabPanel>
                <TabPanel>
                    <TabsCard item={Beauty}></TabsCard>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabsSection;