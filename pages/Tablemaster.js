import React from 'react';
import MaterialTable, { MTableToolbar, MTablePagination, TablePagination } from 'material-table';
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import { Chip, Typography, Grid, TextField, InputAdornment, Tooltip, IconButton, Card, Paper, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import PersonAdd from '@material-ui/icons/PersonAdd';
import Create from '@material-ui/icons/Create';
import RemoveCircle from '@material-ui/icons/RemoveCircle';
import Publish from '@material-ui/icons/Publish';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import CloudUpload from '@material-ui/icons/CloudUpload'
import ViewColumn from '@material-ui/icons/ViewColumn';
import Button from '@material-ui/core/Button';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import Dashboard from './Dashboard'
import Visibility from '@material-ui/icons/Visibility';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Router from 'next/router'



export default function Tablemaster() {
  const { useState } = React;
  const page = false;
  const [selectedRow, setSelectedRow] = useState(null);
  const [nama, setNama] = React.useState(null);
  const [selectedStatusPekerja, setSelectedStatusPekerja] = React.useState("0");
  const [selectedGolongan, setSelectedGolongan] = React.useState(" ");
  const [selectedTglCpnsStartDate, setSelectedTglCpnsStartDate] = React.useState(null);
  const [selectedTglCpnsEndDate, setSelectedTglCpnsEndDate] = React.useState(null);
  const [selectedTglPensiunStartDate, setSelectedTglPensiunStartDate] = React.useState(null);
  const [selectedTglPensiunEndDate, setSelectedTglPensiunEndDate] = React.useState(null);
  const [selectedTglLahirStartDate, setSelectedTglLahirStartDate] = React.useState(null);
  const [selectedTglLahirEndDate, setSelectedTglLahirEndDate] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    //setOpen(true);
    Router.push(`/inputpendaftaranpeserta`);
  };
  const handleUbahdata = () => {
    //setOpen(true);
    Router.push(`/perubahandatapekerja`);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function tambahdata() {
    dataPesertaSlice.push(name = 'akmal');
  }
  const Tableicons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };
  const dataPeserta2 = [
    { nip: '100000001', nik: '3171020609710001', nama: 'Rudi', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000002', nik: '3171020609710002', nama: 'Budi', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "1", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000003', nik: '3171020609710003', nama: 'Sella', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "2", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000004', nik: '3171020609710004', nama: 'Eka', tglLahir: "02-12-1993", tglCpns: "01-11-2018", golongan: "2", ruang: "d", tglPensiun: "01-11-2038", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000005', nik: '3171020609710005', nama: 'Eko', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000006', nik: '3171020609710006', nama: 'Rini', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "3", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000007', nik: '3171020609710007', nama: 'Reisya', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "2", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000008', nik: '3171020609710008', nama: 'Eri', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "2", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000009', nik: '3171020609710009', nama: 'Michel', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000010', nik: '3171020609710010', nama: 'Adit', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "3", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000011', nik: '3171020609710011', nama: 'Andre', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "4", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000012', nik: '3171020609710012', nama: 'Faiq', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "4", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000013', nik: '3171020609710013', nama: 'Dodi', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "3", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000014', nik: '3171020609710014', nama: 'Dini', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "1", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000015', nik: '3171020609710015', nama: 'Sarah', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "2", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000016', nik: '3171020609710016', nama: 'Dina', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "3", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000017', nik: '3171020609710017', nama: 'Putri', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000018', nik: '3171020609710018', nama: 'Risa', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "1", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000019', nik: '3171020609710019', nama: 'Rosa', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "2", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000020', nik: '3171020609710020', nama: 'Jaena', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "4", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000021', nik: '3171020609710021', nama: 'Ari', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000022', nik: '3171020609710022', nama: 'Boby', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "3", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000023', nik: '3171020609710023', nama: 'Bella', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "3", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "5", link: '/profilepekerja' },
    { nip: '100000024', nik: '3171020609710024', nama: 'Cila', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "2", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000025', nik: '3171020609710025', nama: 'Cindy', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "5", link: '/profilepekerja' },
    { nip: '100000026', nik: '3171020609710026', nama: 'Feriandi', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "1", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000027', nik: '3171020609710027', nama: 'Gisella', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "2", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000028', nik: '3171020609710028', nama: 'Heri', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "2", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000029', nik: '3171020609710029', nama: 'Heru', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "2", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000030', nik: '3171020609710030', nama: 'Gina', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "3", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000031', nik: '3171020609710031', nama: 'Indri', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "2", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "5", link: '/profilepekerja' },
    { nip: '100000032', nik: '3171020609710032', nama: 'Indra', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "2", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "5", link: '/profilepekerja' },
    { nip: '100000033', nik: '3171020609710033', nama: 'Januar', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "4", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000034', nik: '3171020609710034', nama: 'Keyla', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "1", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000035', nik: '3171020609710035', nama: 'Aira', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "2", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000036', nik: '3171020609710036', nama: 'Arsila', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "2", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000037', nik: '3171020609710037', nama: 'Kirana', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000038', nik: '3171020609710038', nama: 'Lusi', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "3", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000039', nik: '3171020609710039', nama: 'Lona', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "2", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000040', nik: '3171020609710040', nama: 'Maemunah', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "2", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000041', nik: '3171020609710041', nama: 'Moh', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000042', nik: '3171020609710042', nama: 'Nurul', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "4", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000043', nik: '3171020609710043', nama: 'Nurdi', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "4", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "5", link: '/profilepekerja' },
    { nip: '100000044', nik: '3171020609710044', nama: 'Nur', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "2", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "5", link: '/profilepekerja' },
    { nip: '100000045', nik: '3171020609710045', nama: 'Putra', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000046', nik: '3171020609710046', nama: 'Opik', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "1", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000047', nik: '3171020609710047', nama: 'Ola', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "2", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "1", link: '/profilepekerja' },
    { nip: '100000048', nik: '3171020609710048', nama: 'Puspita', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "2", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "1", link: '/profilepekerja' },
    { nip: '100000049', nik: '3171020609710049', nama: 'Reina', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "1", link: '/profilepekerja' },
    { nip: '100000050', nik: '3171020609710050', nama: 'Siti', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "3", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "1", link: '/profilepekerja' },
    { nip: '100000051', nik: '3171020609710051', nama: 'Susilo', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "3", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000052', nik: '3171020609710052', nama: 'Tia', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "2", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000053', nik: '3171020609710053', nama: 'Tika', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000054', nik: '3171020609710054', nama: 'Riandy', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "1", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000055', nik: '3171020609710055', nama: 'Rian', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "2", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000056', nik: '3171020609710056', nama: 'Sasa', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "2", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "0", link: '/profilepekerja' },
    { nip: '100000057', nik: '3171020609710057', nama: 'Ubai', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "0", link: '/profilepekerja' },
    { nip: '100000058', nik: '3171020609710058', nama: 'Uci', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "1", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000059', nik: '3171020609710059', nama: 'Uca', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "2", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000060', nik: '3171020609710060', nama: 'Utari', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "2", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000061', nik: '3171020609710061', nama: 'Victoria', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000062', nik: '3171020609710062', nama: 'Vicky', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "1", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000063', nik: '3171020609710063', nama: 'Willy', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "2", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000064', nik: '3171020609710064', nama: 'Winarti', tglLahir: "02-12-1993", tglCpns: "01-11-2018", golongan: "2", ruang: "d", tglPensiun: "01-11-2038", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000065', nik: '3171020609710065', nama: 'Yono', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000066', nik: '3171020609710066', nama: 'Yogo', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "1", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "0", link: '/profilepekerja' },
    { nip: '100000067', nik: '3171020609710067', nama: 'Yoyo', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "2", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "0", link: '/profilepekerja' },
    { nip: '100000068', nik: '3171020609710068', nama: 'Zainal', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "2", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "5", link: '/profilepekerja' },
    { nip: '100000069', nik: '3171020609710069', nama: 'Zidan', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000070', nik: '3171020609710070', nama: 'Zulaiha', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "1", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000071', nik: '3171020609710071', nama: 'Zaenab', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "2", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000072', nik: '3171020609710072', nama: 'Ana', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "2", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000073', nik: '3171020609710073', nama: 'Dimas', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "1", link: '/profilepekerja' },
    { nip: '100000074', nik: '3171020609710074', nama: 'Yosua', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "1", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "1", link: '/profilepekerja' },
    { nip: '100000075', nik: '3171020609710075', nama: 'Dwi', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "2", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000076', nik: '3171020609710076', nama: 'Dina', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "2", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000077', nik: '3171020609710077', nama: 'Bunga', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000078', nik: '3171020609710078', nama: 'Billy', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "1", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000079', nik: '3171020609710079', nama: 'Boy', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "2", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "0", link: '/profilepekerja' },
    { nip: '100000080', nik: '3171020609710080', nama: 'Deny', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "2", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "0", link: '/profilepekerja' },
    { nip: '100000081', nik: '3171020609710081', nama: 'Didi', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000082', nik: '3171020609710082', nama: 'Dona', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "1", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000083', nik: '3171020609710083', nama: 'Fahri', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "1", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000084', nik: '3171020609710084', nama: 'Farah', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "1", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000085', nik: '3171020609710085', nama: 'Fina', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "2", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000086', nik: '3171020609710086', nama: 'Filda', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "1", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000087', nik: '3171020609710087', nama: 'Gita', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "2", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000088', nik: '3171020609710088', nama: 'Ganes', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "2", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "5", link: '/profilepekerja' },
    { nip: '100000089', nik: '3171020609710089', nama: 'Iwan', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "3", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000090', nik: '3171020609710090', nama: 'Irwan', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "3", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000091', nik: '3171020609710091', nama: 'Shintia', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "2", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000092', nik: '3171020609710092', nama: 'Joko', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "2", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000093', nik: '3171020609710093', nama: 'Josua', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000094', nik: '3171020609710094', nama: 'Kia', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "1", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000095', nik: '3171020609710095', nama: 'Listy', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "4", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000096', nik: '3171020609710096', nama: 'Lala', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "2", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000097', nik: '3171020609710097', nama: 'Lintang', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000098', nik: '3171020609710098', nama: 'Indah', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "1", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000099', nik: '3171020609710099', nama: 'Maria', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "4", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "5", link: '/profilepekerja' },
    { nip: '100000100', nik: '3171020609710100', nama: 'Mira', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "2", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "0", link: '/profilepekerja' },
    { nip: '100000101', nik: '3171020609710101', nama: 'Yolanda', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "0", link: '/profilepekerja' },
    { nip: '100000102', nik: '3171020609710102', nama: 'Rahman', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "1", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "5", link: '/profilepekerja' },
    { nip: '100000103', nik: '3171020609710103', nama: 'Steven', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "2", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000104', nik: '3171020609710104', nama: 'Siska', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "3", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000105', nik: '3171020609710105', nama: 'Halimah', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000106', nik: '3171020609710106', nama: 'Hendrik', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "4", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000107', nik: '3171020609710107', nama: 'Asih', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000108', nik: '3171020609710108', nama: 'Loli', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "4", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000100', nik: '3171020609710109', nama: 'Maya', tglLahir: "05-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "0", link: '/profilepekerja' },
    { nip: '100000110', nik: '3171020609710110', nama: 'Luna', tglLahir: "03-12-1991", tglCpns: "01-11-2016", golongan: "1", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "5", link: '/profilepekerja' },
    { nip: '100000111', nik: '3171020609710111', nama: 'Abizar', tglLahir: "09-11-1992", tglCpns: "01-11-2017", golongan: "2", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "1", link: '/profilepekerja' },
    { nip: '100000112', nik: '3171020609710112', nama: 'Putu', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "3", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000113', nik: '3171020609710113', nama: 'Fahmi', tglLahir: "11-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000115', nik: '3171020609710114', nama: 'Andreas', tglLahir: "12-12-1991", tglCpns: "01-11-2016", golongan: "4", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000116', nik: '3171020609710115', nama: 'Alana', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000117', nik: '3171020609710116', nama: 'Kana', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "4", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
  ]
  let dataPesertaSlice = dataPeserta2.slice()
  if (nama) {
    dataPesertaSlice = dataPesertaSlice.filter(item => item.nama.toLowerCase().match(nama.toLowerCase()) || item.nip.match(nama) || item.nik.match(nama))
  }
  const [state, setState] = React.useState({
    columns: [
      { title: 'NIP', field: 'nip' },
      { title: 'NIK', field: 'nik' },
      { title: 'Nama', field: 'nama', defaultSort: "asc" },
      {
        title: 'Status Pekerja', field: 'statusPekerja',
        //  lookup: { 0: 'Belum Dikonfirmasi', 1: 'Pekerja Aktif', 2: 'Mutasi', 3: 'Pensiun', 4: 'Meninggal', 5: 'Tidak Dikenali' },
        // render: rowData => {
        //     if (rowData.statusPekerja == "0") {
        //         return "Belum Dikonfirmasi"
        //     } else if (rowData.statusPekerja == "1") {
        //         return "Pekerja Aktif"
        //     } else if (rowData.statusPekerja == "2") {
        //         return "Mutasi"
        //     } else if (rowData.statusPekerja == "3") {
        //         return "Pensiun"
        //     } else if (rowData.statusPekerja == "4") {
        //         return "Meninggal"
        //     } else if (rowData.statusPekerja == "5") {
        //         return "Tidak Dikenali"
        //     }
        // },
      },

    ],
    data: { dataPesertaSlice }
  });

  const useStyles = makeStyles((theme) => ({

    roottextfield: {
      background: "#f2e6b7"
    },

    button: {
      margin: theme.spacing(1),
    },
    chipcolorgreen: {
      width: '130px',
      backgroundColor: 'green',
      color: 'white'
    },
    chipwidth:
    {
      width: '130px',
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,

    },
    paperborder: {
      padding: '10px',
      boxShadow: 'none',
      width: '100px',
      height: '100px',
      '&:hover':{
        backgroundColor:'grey'
    }


    },
    rootg: {
      flexGrow: 1,
    },
    resize: {
      fontSize: 10
    },
  }));
  const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });
  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);

  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);
  const classes = useStyles();
  return (
    <>

      <div style={{ backgroundColor: 'white' }}>
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Tambah Data
        </DialogTitle>
          <DialogContent dividers>
            <Grid container direction="column" >
              <Grid item>
                <Grid container direction="rows" spacing={2} fullWidth>
                  <Grid item>
                    <TextField
                      margin="dense"
                      value="NIP"
                      disabled="true"
                      className={classes.roottextfield}
                      inputProps={{ min: 0, style: { textAlign: 'center' } }}
                      variant="outlined"
                      fullWidth
                    /></Grid>
                  <Grid item >
                    <TextField
                      autoFocus
                      margin="dense"
                      id="NIP"
                      type="NIP"
                      variant="outlined"
                      fullWidth
                    /></Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container direction="rows" spacing={2} fullWidth>
                  <Grid item>
                    <TextField
                      margin="dense"
                      value="NIK"
                      disabled="true"
                      className={classes.roottextfield}
                      inputProps={{ min: 0, style: { textAlign: 'center' } }}
                      variant="outlined"
                      fullWidth
                    /></Grid>
                  <Grid item >
                    <TextField
                      autoFocus
                      margin="dense"
                      id="NIK"
                      type="NIK"
                      variant="outlined"
                      fullWidth
                    /></Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container direction="rows" spacing={2} fullWidth>
                  <Grid item>
                    <TextField
                      margin="dense"
                      value="NAMA"
                      disabled="true"
                      className={classes.roottextfield}
                      inputProps={{ min: 0, style: { textAlign: 'center' } }}
                      variant="outlined"
                      fullWidth
                    /></Grid>
                  <Grid item >
                    <TextField
                      autoFocus
                      margin="dense"
                      id="Nama"
                      type="Nama"
                      variant="outlined"
                      fullWidth
                    /></Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container direction="rows" spacing={2} fullWidth>
                  <Grid item>
                    <TextField
                      margin="dense"
                      value="STATUS PEKERJA"
                      disabled="true"
                      className={classes.roottextfield}
                      inputProps={{ min: 0, style: { textAlign: 'center' } }}
                      variant="outlined"
                      fullWidth
                    /></Grid>
                  <Grid item >
                    <TextField
                      autoFocus
                      margin="dense"
                      id="Status"
                      type="Status"
                      variant="outlined"
                      fullWidth
                    /></Grid>
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={tambahdata} color="primary">
              Save changes
          </Button>
          </DialogActions>
        </Dialog>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="stretch"

        >
          <div className={classes.root}>
            <Paper className={classes.paper} style={{ margin: 10 }}>
              <Grid container spacing={2} direction="row" >
                <Grid item xs={4}>
                  <Grid item xs container direction="column" spacing={1} alignItems="flex-start" >
                    <Grid item>
                      <TextField
                        margin="dense"
                        variant="outlined"
                        size="small"
                      />
                    </Grid>
                    <Grid item>
                      <Typography variant="caption" align="left">
                        Tanggal CPNS
                </Typography>

                    </Grid>

                  </Grid>

                </Grid>
               
                  <Grid item xs={4} container direction="column" spacing={1} alignItems="flex-start" >
                    <Grid item container direction="row">
                    <Grid item>   <Typography variant="caption" align="left" >
                       <Box style={{paddingRight:'15px',marginTop:'15px'}}> Status Pekerja</Box>
                </Typography>
</Grid>
                      <Grid item>   <TextField
                        margin="dense"
                        variant="outlined"
                        size="small"
                      /></Grid>
                    </Grid>
                    <Grid item >
                      <Typography variant="caption" align="left">
                        Tanggal Pensiun
                </Typography>

                    </Grid>

                  </Grid>
                  <Grid item xs={4} container direction="column" spacing={1} alignItems="flex-start" >
                    <Grid item>
                      <TextField
                        margin="dense"
                        variant="outlined"
                        size="small"
                      />
                    </Grid>
                    <Grid item>
                      <Typography variant="caption" align="left">
                        Tanggal Pensiun
                </Typography>

                    </Grid>

                  </Grid>
              
              </Grid>
            </Paper>
          </div>
          <Paper className={classes.paper} style={{ boxShadow: 'none', backgroundColor: '#d7efd7' }}>
            <Grid container
              justify="flex-start"
              alignItems="center"
            >

              <Grid item >
                <Box border={1} borderColor="#b5afb3">
                  <Paper className={classes.paperborder} onClick={handleClickOpen} >
                    <Grid container direction="column">
                      <Grid item>
                        <PersonAdd style={{ fontSize: 40, color: 'lightblue' }} />
                      </Grid>
                      <Grid item>  <Typography align="center" variant="caption" style={{ color: 'grey' }} > Tambah Data</Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                </Box>
              </Grid>
              <Grid item >
                <Box borderTop={1} borderBottom={1} borderRight={1} borderColor="#b5afb3">
                  <Paper className={classes.paperborder } onClick={handleUbahdata} >
                    <Grid container direction="column">
                      <Grid item>
                        <Create style={{ fontSize: 40, color: 'lightblue' }} />
                      </Grid>
                      <Grid item>  <Typography align="center" variant="caption" style={{ color: 'grey' }} >Ubah Data</Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                </Box>
              </Grid>
              <Grid item >
                <Box borderTop={1} borderBottom={1} borderColor="#b5afb3">
                  <Paper className={classes.paperborder} >
                    <Grid container direction="column">
                      <Grid item>
                        <SearchIcon style={{ fontSize: 40, color: 'lightblue' }} />
                      </Grid>
                      <Grid item>  <Typography align="center" variant="caption" style={{ color: 'grey' }} >Lihat Data</Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                </Box>
              </Grid>
              <Grid item >
                <Box border={1} borderColor="#b5afb3">
                  <Paper className={classes.paperborder} >
                    <Grid container direction="column">
                      <Grid item>
                        <RemoveCircle style={{ fontSize: 40, color: '#f5a623' }} />
                      </Grid>
                      <Grid item>  <Typography align="center" variant="caption" style={{ color: 'grey' }} > Pengakhiran Kepersetaan</Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                </Box>
              </Grid>
              <Grid item >
                <Box borderTop={1} borderBottom={1} borderRight={1} borderColor="#b5afb3">
                  <Paper className={classes.paperborder} >
                    <Grid container direction="column">
                      <Grid item>
                        <Publish style={{ fontSize: 40, color: 'grey' }} />
                      </Grid>
                      <Grid item>  <Typography align="center" variant="caption" style={{ color: 'grey' }} > Upload Data Pekerja</Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                </Box>
              </Grid>


            </Grid>
          </Paper>
          <Grid item
            maxwidth="xl"

            xs={12} sm={12} md={12}
            justify="space-between">
            <div style={{ margin: '20px' }}>
              <MaterialTable
                icons={Tableicons}

                columns={[
                  { title: 'NIP', field: 'nip' },
                  { title: 'NIK', field: 'nik' },
                  { title: 'Nama', field: 'nama', defaultSort: "asc" },
                  /*{ title: 'Tanggal Lahir', field: 'tglLahir', render: rowData => {
                    return moment(rowData.tglLahir).format("DD-MM-YYYY")
                  } },
                  { title: 'Tanggal CPNS', field: 'tglCpns', render: rowData=>{
                    return moment(rowData.tglCpns).format("DD-MM-YYYY")
                  } },
                  { title: 'Golongan', field: 'golongan' },
                  { title: 'Ruang', field: 'ruang' },
                  { title: 'Tanggal Pensiun', field: 'tglPensiun', render: rowData=>{
                    return moment(rowData.tglPensiun).format("DD-MM-YYYY")
                  } },*/
                  {
                    title: 'Status Pekerja', field: 'statusPekerja',
                    lookup: { 0: 'Belum Dikonfirmasi', 1: 'Pekerja Aktif', 2: 'Mutasi', 3: 'Pensiun', 4: 'Meninggal', 5: 'Tidak Dikenali' },
                    render: rowData => {
                      if (rowData.statusPekerja == "0") {
                        return "Belum Dikonfirmasi"
                      } else if (rowData.statusPekerja == "1") {
                        return "Pekerja Aktif"
                      } else if (rowData.statusPekerja == "2") {
                        return "Mutasi"
                      } else if (rowData.statusPekerja == "3") {
                        return "Pensiun"
                      } else if (rowData.statusPekerja == "4") {
                        return "Meninggal"
                      } else if (rowData.statusPekerja == "5") {
                        return "Tidak Dikenali"
                      }
                    },
                  },

                ]}
                data={dataPesertaSlice}
                options={{
                  toolbar: false,
                  rowStyle: (rowData, index) => {
                    if (index % 2) {
                      return { backgroundColor: "#f2f2f2" }
                    }
                  },
                  padding: 'dense',
                  showTitle: false,
                  // filtering: true,

                  search: false,
                  selection: true,
                  pageSize: 8,
                  pageSizeOptions: [10, 50, 100],
                  emptyRowsWhenPaging: false,
                  filterCellStyle: {
                    alignContent: 'center'
                  },
                  headerStyle: {
                    backgroundColor: '#b5afb3',
                    color: '#FFF'
                  }
                }}


                localization={{
                  pagination: {
                    labelRowsSelect: 'Baris',
                    firstTooltip: 'Halaman Pertama',
                    lastTooltip: 'Halaman Terakhir',
                    nextTooltip: 'Halaman Selanjutnya',
                    previousTooltip: 'Halaman Sebelumnya',
                    labelDisplayedRows: '{from}-{to} dari {count}'
                  },
                  toolbar: {
                    nRowsSelected: '{0} Baris Dipilih',
                    showColumnsTitle: 'Status Pekerja'
                  }
                }}
                components={{

                }}
              />
            </div>
          </Grid>
        </Grid>
      </div>
      {/*  <Footer /> */}
    </>
  );
}
Tablemaster.Layout = Dashboard;