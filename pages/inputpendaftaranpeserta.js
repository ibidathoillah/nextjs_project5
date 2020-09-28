import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Formdatapeserta from '../components/formdatapeserta';
import Formdatapribadi from '../components/formdatapribadi';
import Formdataalamat from '../components/formdataalamat';
import Formdatapekerjaan from '../components/formdatapekerjaan';
import Formdatafinansial from '../components/formdatafinansial';
import Layout from "../components/layout";
import Dashboard from './Dashboard'
import {listISOCodeCountry, listProvinsi, listKabupatenKota} from '../components/listISOCode';


const listdata = {listISOCodeCountry:listISOCodeCountry, listProvinsi:listProvinsi, listKabupatenKota:listKabupatenKota}


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function inputpendaftaranpeserta() {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);
  const [namaLengkap, setNamaLengkap] = React.useState();
  console.log(listISOCodeCountry);
  const handleChange = (event, newValue) => {
    // console.log("Navigate to Tab" + newValue)
    setValue(newValue);
  };

  const handleNamaLengkap = (event, newValue) => {
    console.log("nama lengap" + newValue)
    setNamaLengkap(newValue);
  };



  return (
    <div className={classes.root}>
        <Layout>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Data Kepesertaan" {...a11yProps(0)} disabled />
          <Tab label="Data Pribadi" {...a11yProps(1)} />
          <Tab label="Data Alamat" {...a11yProps(2)}  />
          <Tab label="Data Pekerjaan" {...a11yProps(3)}  />
          <Tab label="Data Finansial" {...a11yProps(4)}  />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Formdatapeserta handleNext={handleChange}></Formdatapeserta>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Formdatapribadi handleNext={handleChange} listdata= {listdata} handleNamaLengkap={handleNamaLengkap}></Formdatapribadi>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Formdataalamat handleNext={handleChange} listdata= {listdata}></Formdataalamat>
      </TabPanel>
      <TabPanel value={value} index={3}>
       <Formdatapekerjaan handleNext={handleChange} listdata= {listdata}></Formdatapekerjaan>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Formdatafinansial handleNext={handleChange} listdata= {listdata} namaLengkap={namaLengkap}></Formdatafinansial>
      </TabPanel>
     </Layout>
    </div>
  );
}
inputpendaftaranpeserta.Layout = Dashboard;