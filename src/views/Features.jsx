import SectionTitle from '@/components/SectionTitle';
import navs from '@/utils/navigations';
import { Box, Container, Stack, Tab, Tabs, Typography } from '@mui/material';
import React from 'react';
import SectionDescription from '../components/SectionDescription';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Features = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Container sx={{ pt: '150px' }} id={navs.features} className="features">
            <SectionTitle>
                Features
            </SectionTitle>
            <SectionDescription>
                Multifunctional Amazon Relay refresher and auto booker. <br /> Unlike other auto bookers, SwiftRelay gives you more options,
            </SectionDescription>
            <Stack justifyContent={'center'}>
                <Box sx={{
                    mt: '55px',
                    border: '1px solid #F3F3F3',
                    borderRadius: '100px',
                    padding: '4px'
                }} >
                    <Tabs value={value} onChange={handleChange}
                        sx={{

                        }}
                        TabIndicatorProps={{
                            style: {
                                backgroundColor: 'transparent'
                            }
                        }}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        <Tab sx={{ textTransform: 'none' }} label="Refresh" {...a11yProps(0)} />
                        <Tab sx={{ textTransform: 'none' }} label="Randomizer" {...a11yProps(1)} />
                        <Tab sx={{ textTransform: 'none' }} label="Min payout" {...a11yProps(2)} />
                        <Tab sx={{ textTransform: 'none' }} label="Min rate" {...a11yProps(0)} />
                        <Tab sx={{ textTransform: 'none' }} label="Max stops" {...a11yProps(1)} />
                        <Tab sx={{ textTransform: 'none' }} label="Exclude" {...a11yProps(2)} />
                        <Tab sx={{ textTransform: 'none' }} label="Range" {...a11yProps(0)} />
                        <Tab sx={{ textTransform: 'none' }} label="Auto book" {...a11yProps(1)} />
                        <Tab sx={{ textTransform: 'none' }} label="How many" {...a11yProps(2)} />
                    </Tabs>
                </Box>
            </Stack>
            <TabPanel value={value} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </Container>
    );
}

export default Features;
