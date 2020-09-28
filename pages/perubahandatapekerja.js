import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Formdatapeserta from '../components/formdatapeserta';
import FormEditdatapribadi from '../components/formEditdatapribadi';
import FormEditdataalamat from '../components/formEditdataalamat';
import FormEditdatapekerjaan from '../components/formEditdatapekerjaan';
import FormEditdatafinansial from '../components/formEditdatafinansial';
import Layout from "../components/layout";
import {listISOCodeCountry, listProvinsi, listKabupatenKota} from '../components/listISOCode';
import Dashboard from './Dashboard';


const listdataPekerja = {listISOCodeCountry:listISOCodeCountry, listProvinsi:listProvinsi, listKabupatenKota:listKabupatenKota}


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

function p11yProps(index) {
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

export default function perubahandatapekerja() {
  const classes = useStyles();
  const [valueP, setValue] = React.useState(1);
  const [editnamaLengkap, setEditNamaLengkap] = React.useState();
  const handleChange = (event, newValue) => {
    // console.log("Navigate to Tab" + newValue)
    setValue(newValue);
  };

  const handleEditNamaLengkap = (event, newValue) => {
    setEditNamaLengkap(newValue);
  };


  return (
    <div className={classes.root}>
        <Layout>
      <AppBar position="static" color="default">
        <Tabs
          value={valueP}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Data Kepesertaan" {...p11yProps(0)} disabled />
          <Tab label="Data Pribadi" {...p11yProps(1)}  />
          <Tab label="Data Alamat" {...p11yProps(2)}  />
          <Tab label="Data Pekerjaan" {...p11yProps(3)}  />
          <Tab label="Data Finansial" {...p11yProps(4)}  />
        </Tabs>
      </AppBar>
      <TabPanel value={valueP} index={0}>
        <Formdatapeserta handleNext={handleChange}></Formdatapeserta>
      </TabPanel>
      <TabPanel value={valueP} index={1}>
        <FormEditdatapribadi handleNext={handleChange} listdata= {listdataPekerja} handleEditNamaLengkap={handleEditNamaLengkap}></FormEditdatapribadi>
      </TabPanel>
      <TabPanel value={valueP} index={2}>
      <FormEditdataalamat handleNext={handleChange} listdata= {listdataPekerja}></FormEditdataalamat>
      </TabPanel>
      <TabPanel value={valueP} index={3}>
       <FormEditdatapekerjaan handleNext={handleChange} listdata= {listdataPekerja}></FormEditdatapekerjaan>
      </TabPanel>
      <TabPanel value={valueP} index={4}>
        <FormEditdatafinansial handleNext={handleChange} listdata= {listdataPekerja} editnamaLengkap={editnamaLengkap}></FormEditdatafinansial>
      </TabPanel>
     </Layout>
    </div>
  );
}
perubahandatapekerja.Layout=Dashboard;