import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Typography, MenuItem, Button, Grid} from '@material-ui/core';
import { useFormik} from 'formik'
import * as Yup from 'yup'
import { styled } from '@material-ui/core/styles';


const TypographAlamat = styled(Typography)({
  // fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '600',
  // fontSize: '32px',
  lineHeight: '39px',
  color: '#008F4C'
});
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '47ch',
    },
  },
  root2: {
    flexGrow: 1,
    display: 'flex',
  },
  subtitle: {
    margin: theme.spacing(1),
  },
  subtitle2: {
    marginTop: theme.spacing(4),
    margin: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(4),
    direction: "row",
    alignItems: "center",
    marginBottom: theme.spacing(2),
},
buttonconfig: {
  marginRight: theme.spacing(3),
  margin: theme.spacing(1, 0, 1),
  borderRadius: 15,
  justify: 'center',
  marginTop: 5,
  width: 110,
  backgroundColor: '#008F4C',
},
buttonsimpan: {
  margin: theme.spacing(1, -1, 1),
  borderRadius: 15,
  marginTop: 5,
  width: 180,
  backgroundColor: '#008F4C',
},
btnSalin: {
  margin: theme.spacing(0, 2, 1),
  backgroundColor: '#008F4C',
  borderRadius: 30,
  fontSize: 12,
  width: '21ch',
  height: '5ch' 
},
}));

const initialValues = {
  txtAlamat:'CENGKARENG INDAH BLOK PC 9',
  txtRt:'007',
  txtRw:'007',
  txtKelurahan:'CGKB',
  txtKecamatan:'CGK',
  txtKabupaten:'JAKBAR',
  txtKodePos:'PCGKB',
  txtProvinsi:'DKI',
  selectNegara:'ID',

  txtAlamatDomisili:'Cibubur',
  txtRtDomisili:'007',
  txtRwDomisili:'007',
  txtKelurahanDomisili:'CGKB',
  txtKecamatanDomisili:'CGK',
  txtKabDomisili:'JAKBAR',
  txtKodeposDomisili:'PCGKB',
  txtProvinsiDomisili:'DKI',
  selectNegaraDomisili:'ID',

  txtAlamatKerja:'Apl Tower lt. 70',
  txtRtKerja:'007',
  txtRwKerja:'007',
  txtKelurahanKerja:'CGKB',
  txtKecamatanKerja:'CGK',
  txtKabKerja:'JAKBAR',
  txtKodePosKerja:'PCGKB',
  txtProvinsiKerja:'DKI',
  selectNegaraKerja:'ID',

  txtAlamatAhliWaris:'White House',
}

// const onSubmit = values => {
//   console.log('form data', values);
//   alert("Data Berhasil disimpan")
// }
const validationSchema = Yup.object({

  //Alamat Utama
  txtAlamat: Yup.string().required('wajib diisi').matches(/^[a-zA-Z0-9.,':/; ]+$/, 'format alamat tidak sesuai').max(100, 'maksimal 100 karakter'),
  txtRt: Yup.string().required('wajib diisi').matches(/^[0-9]+$/, 'hanya angka').max(3, 'Nomor RT harus 3 karakter').min(3,'Nomor RT harus 3 karakter'),
  txtRw: Yup.string().required('wajib diisi').matches(/^[0-9]+$/, 'hanya angka').max(3, 'Nomor RW harus 3 karakter').min(3, 'Nomor RW harus 3 karakter'),
  txtKelurahan: Yup.string().required('wajib diisi').max(100, 'maksimal 100 karakter'),
  txtKecamatan: Yup.string().required('wajib diisi').max(100, 'maksimal 100 karakter'),
  txtKabupaten: Yup.string().required('wajib diisi'),
  txtKodePos: Yup.string().required('wajib diisi'),
  txtProvinsi: Yup.string().required('wajib diisi'),
  selectNegara: Yup.string().required('wajib diisi'),
  txtAlamatAhliWaris: Yup.string().required('wajib diisi').max(255,'maksimal 255 karakter'),

  //Alamat Domisili
  txtAlamatDomisili: Yup.string().required('wajib diisi').matches(/^[a-zA-Z0-9.,':/; ]+$/, 'format alamat tidak sesuai').max(100, 'maksimal 100 karakter'),
  txtRtDomisili: Yup.string().required('wajib diisi').matches(/^[0-9]+$/, 'hanya angka').max(3, 'Nomor RT Harus 3 karakter').min(3, 'Nomor RT Harus 3 karakter'),
  txtRwDomisili: Yup.string().required('wajib diisi').matches(/^[0-9]+$/, 'hanya angka').max(3, 'Nomor RW Harus 3 karakter').min(3,'Nomor RW Harus 3 karakter'),
  txtKelurahanDomisili: Yup.string().required('wajib diisi').max(100, 'maksimal 100 karakter'),
  txtKecamatanDomisili: Yup.string().required('wajib diisi').max(100, 'maksimal 100 karakter'),
  txtKodeposDomisili: Yup.string().required('wajib diisi'),
  txtKabDomisili: Yup.string().required('wajib diisi'),
  txtProvinsiDomisili: Yup.string().required('wajib diisi'),

  //Alamat Kantor
  txtAlamatKerja: Yup.string().nullable(true).matches(/^[a-zA-Z0-9.,':/; ]+$/, 'format alamat tidak sesuai').max(100, 'maksimal 100 karakter'),
  txtRtKerja: Yup.string().nullable(true).matches(/^[0-9]+$/, 'hanya angka').max(3, 'Nomor RT Harus 3 karakter').min(3, 'Nomor RT Harus 3 karakter'),
  txtRwKerja: Yup.string().nullable(true).matches(/^[0-9]+$/, 'hanya angka').max(3, 'Nomor RW Harus 3 karakter').min(3,'Nomor RW Harus 3 karakter'),
  txtKelurahanKerja: Yup.string().nullable(true).max(100, 'maksimal 100 karakter'),
  txtKecamatanKerja: Yup.string().nullable(true).max(100, 'maksimal 100 karakter'),
  txtKodePosKerja: Yup.string().nullable(true),
})

export default function formdataalamat(props) {
  
  const classes = useStyles();
  const [countryData, setCountryData] = React.useState([])
  const [provinsiData, setProvinsiData] = React.useState([])
  const [kabupatenData, setKabupatenData] = React.useState([])
  const [kecamatanData, setKecamatanData] = React.useState([])
  const [kelurahanData, setKelurahanData] = React.useState([])
  const [kodeposData, setKodePosData] = React.useState([])

  const [countryDomData, setCountryDomData] = React.useState([])
  const [provinsiDomData, setProvinsiDomData] = React.useState([])
  const [kabupatenDomData, setKabupatenDomData] = React.useState([])
  const [kecamatanDomData, setKecamatanDomData] = React.useState([])
  const [kelurahanDomData, setKelurahanDomData] = React.useState([])
  const [kodeposDomData, setKodePosDomData] = React.useState([])

  const [countryWorkData, setCountryWorkData] = React.useState([])
  const [provinsiWorkData, setProvinsiWorkData] = React.useState([])
  const [kabupatenWorkData, setKabupatenWorkData] = React.useState([])
  const [kecamatanWorkData, setKecamatanWorkData] = React.useState([])
  const [kelurahanWorkData, setKelurahanWorkData] = React.useState([])
  const [kodeposWorkData, setKodePosWorkData] = React.useState([])

  const [countryValue, setcountryValue] = React.useState('ID')
  const [provValue, setprovValue] = React.useState('DKI')
  const [kabValue, setkabValue] = React.useState('JAKBAR')
  const [kecValue, setkecValue] = React.useState('CGK')

  // const [countryDomValue, setcountryDomValue] = React.useState('ID')
  // const [provDomValue, setprovDomValue] = React.useState('')
  // const [kabDomValue, setkabDomValue] = React.useState('')
  // const [kecDomValue, setkecDomValue] = React.useState('')


  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      handleSave()
  },
    validationSchema
  })


  React.useEffect(() => {
    GetCountry();
    handleProvinsi();
    handleKabupaten();
    handleKecamatan();
    handleKelurahan();
    handleKodePos();
    GetCountryDom();
    handleProvinsiDom();
    handleKabupatenDom();
    handleKecamatanDom();
    handleKelurahanDom();
    handleKodePosDom();
    GetCountryWork();
    handleProvinsiWork();
    handleKabupatenWork();
    handleKecamatanWork();
    handleKelurahanWork();
    handleKodePosWork();
  }, []);

  async function GetCountry() {
    await fetch('http://devsitara.tapera.go.id/redis/country')
        .then((r) => {
            return r.json();
        })
        .then((data) => {
            setCountryData(data);
        })
    }
  async function handleProvinsi(provValue) {
    if ( !provValue ){
    await fetch('http://devsitara.tapera.go.id/redis/ID')
        .then((r) => {
          return r.json();
        })
        .then((data) => {
          setProvinsiData(data);
        })
    }else {
      await fetch('http://devsitara.tapera.go.id/redis/'+ provValue)
        .then((r) => {
          return r.json();
        })
        .then((data) => {
          setProvinsiData(data);
        })
    }
  }
  async function handleKabupaten(kabValue) {
    console.log('http://devsitara.tapera.go.id/redis/'+ countryValue + '/' + kabValue)
    if ( !kabValue ){
    await fetch('http://devsitara.tapera.go.id/redis/initvalue')
        .then((r) => {
          return r.json();
        })
        .then((data) => {
          setKabupatenData(data);
        })
    }else {
      await fetch('http://devsitara.tapera.go.id/redis/'+ countryValue + '/' + kabValue)
        .then((r) => {
          return r.json();
        })
        .then((data) => {
          setKabupatenData(data);
        })
    }
  }

  async function handleKecamatan(kecValue) {
    console.log('http://devsitara.tapera.go.id/redis/'+ countryValue + '/' + provValue + '/' + kecValue)
    if ( !kecValue ){
    await fetch('http://devsitara.tapera.go.id/redis/initvalue')
        .then((r) => {
          return r.json();
        })
        .then((data) => {
          setKecamatanData(data);
        })
    }else {
      await fetch('http://devsitara.tapera.go.id/redis/'+ countryValue + '/' + provValue + '/' + kecValue)
        .then((r) => {
          return r.json();
        })
        .then((data) => {
          setKecamatanData(data);
        })
    }
  }

  async function handleKelurahan(kelValue) {
    if ( !kelValue ){
    await fetch('http://devsitara.tapera.go.id/redis/initvalue')
        .then((r) => {
          return r.json();
        })
        .then((data) => {
          setKelurahanData(data);
        })
    }else {
      await fetch('http://devsitara.tapera.go.id/redis/'+ countryValue + '/' + provValue + '/' + kabValue + '/' + kelValue)
        .then((r) => {
          return r.json();
        })
        .then((data) => {
          setKelurahanData(data);
        })
    }
  }

  async function handleKodePos(kodeposValue) {
    if ( !kodeposValue ){
    await fetch('http://devsitara.tapera.go.id/redis/initvalue')
        .then((r) => {
          return r.json();
        })
        .then((data) => {
          setKodePosData(data);
        })
    }else {
      await fetch('http://devsitara.tapera.go.id/redis/'+ countryValue + '/' + provValue + '/' + kabValue + '/' + kecValue + '/' + kodeposValue)
        .then((r) => {
          return r.json();
        })
        .then((data) => {
          setKodePosData(data);
        })
    }
  }

  async function GetCountryDom() {
    await fetch('http://devsitara.tapera.go.id/redis/country')
        .then((r) => {
            return r.json();
        })
        .then((data) => {
            setCountryDomData(data);
        })
    }
  async function handleProvinsiDom(provValue) {
    if ( !provValue ){
    await fetch('http://devsitara.tapera.go.id/redis/ID')
        .then((r) => {
          return r.json();
        })
        .then((data) => {
          setProvinsiDomData(data);
        })
    }else {
      await fetch('http://devsitara.tapera.go.id/redis/'+ provValue)
        .then((r) => {
          return r.json();
        })
        .then((data) => {
          setProvinsiDomData(data);
        })
    }
  }
  async function handleKabupatenDom(kabValue, countryDomValue) {
    if ( !kabValue ){
    await fetch('http://devsitara.tapera.go.id/redis/initvalue')
        .then((r) => {
          return r.json();
        })
        .then((data) => {
          setKabupatenDomData(data);
        })
    }else {
      await fetch('http://devsitara.tapera.go.id/redis/'+ countryDomValue + '/' + kabValue)
        .then((r) => {
          return r.json();
        })
        .then((data) => {
          setKabupatenDomData(data);
        })
    }
  }

  async function handleKecamatanDom(kecValue, countryDomValue, provDomValue) {
    if ( !kecValue ){
    await fetch('http://devsitara.tapera.go.id/redis/initvalue')
        .then((r) => {
          return r.json();
        })
        .then((data) => {
          setKecamatanDomData(data);
        })
    }else {
      await fetch('http://devsitara.tapera.go.id/redis/'+ countryDomValue + '/' + provDomValue + '/' + kecValue)
        .then((r) => {
          return r.json();
        })
        .then((data) => {
          setKecamatanDomData(data);
        })
    }
  }

  async function handleKelurahanDom(kelValue, countryDomValue, provDomValue, kabDomValue) {
    if ( !kelValue ){
    await fetch('http://devsitara.tapera.go.id/redis/initvalue')
        .then((r) => {
          return r.json();
        })
        .then((data) => {
          setKelurahanDomData(data);
        })
    }else {
      await fetch('http://devsitara.tapera.go.id/redis/'+ countryDomValue + '/' + provDomValue + '/' + kabDomValue + '/' + kelValue)
        .then((r) => {
          return r.json();
        })
        .then((data) => {
          setKelurahanDomData(data);
        })
    }
  }

  async function handleKodePosDom(kodeposValue, countryDomValue, provDomValue, kabDomValue, kecDomValue) {
    if ( !kodeposValue ){
    await fetch('http://devsitara.tapera.go.id/redis/initvalue')
        .then((r) => {
          return r.json();
        })
        .then((data) => {
          setKodePosDomData(data);
        })
    }else {
      await fetch('http://devsitara.tapera.go.id/redis/'+ countryDomValue + '/' + provDomValue + '/' + kabDomValue + '/' + kecDomValue + '/' + kodeposValue)
        .then((r) => {
          return r.json();
        })
        .then((data) => {
          setKodePosDomData(data);
        })
    }
  }

  async function GetCountryWork() {
    await fetch('http://devsitara.tapera.go.id/redis/country')
        .then((r) => {
            return r.json();
        })
        .then((data) => {
            setCountryWorkData(data);
        })
    }
  async function handleProvinsiWork(provValue) {
    if ( !provValue ){
    await fetch('http://devsitara.tapera.go.id/redis/ID')
        .then((r) => {
          return r.json();
        })
        .then((data) => {
          setProvinsiWorkData(data);
        })
    }else {
      await fetch('http://devsitara.tapera.go.id/redis/'+ provValue)
        .then((r) => {
          return r.json();
        })
        .then((data) => {
          setProvinsiWorkData(data);
        })
    }
  }
  async function handleKabupatenWork(kabValue, countryWorkValue) {
    if ( !kabValue ){
    await fetch('http://devsitara.tapera.go.id/redis/initvalue')
        .then((r) => {
          return r.json();
        })
        .then((data) => {
          setKabupatenWorkData(data);
        })
    }else {
      await fetch('http://devsitara.tapera.go.id/redis/'+ countryWorkValue + '/' + kabValue)
        .then((r) => {
          return r.json();
        })
        .then((data) => {
          setKabupatenWorkData(data);
        })
    }
  }

  async function handleKecamatanWork(kecValue, countryWorkValue, provWorkValue) {
    if ( !kecValue ){
    await fetch('http://devsitara.tapera.go.id/redis/initvalue')
        .then((r) => {
          return r.json();
        })
        .then((data) => {
          setKecamatanWorkData(data);
        })
    }else {
      await fetch('http://devsitara.tapera.go.id/redis/'+ countryWorkValue + '/' + provWorkValue + '/' + kecValue)
        .then((r) => {
          return r.json();
        })
        .then((data) => {
          setKecamatanWorkData(data);
        })
    }
  }

  async function handleKelurahanWork(kelValue, countryWorkValue, provWorkValue, kabWorkValue) {
    if ( !kelValue ){
    await fetch('http://devsitara.tapera.go.id/redis/initvalue')
        .then((r) => {
          return r.json();
        })
        .then((data) => {
          setKelurahanWorkData(data);
        })
    }else {
      await fetch('http://devsitara.tapera.go.id/redis/'+ countryWorkValue + '/' + provWorkValue + '/' + kabWorkValue + '/' + kelValue)
        .then((r) => {
          return r.json();
        })
        .then((data) => {
          setKelurahanWorkData(data);
        })
    }
  }

  async function handleKodePosWork(kodeposValue, countryWorkValue, provWorkValue, kabWorkValue, kecWorkValue) {
    if ( !kodeposValue ){
    await fetch('http://devsitara.tapera.go.id/redis/initvalue')
        .then((r) => {
          return r.json();
        })
        .then((data) => {
          setKodePosWorkData(data);
        })
    }else {
      await fetch('http://devsitara.tapera.go.id/redis/'+ countryWorkValue + '/' + provWorkValue + '/' + kabWorkValue + '/' + kecWorkValue + '/' + kodeposValue)
        .then((r) => {
          return r.json();
        })
        .then((data) => {
          setKodePosWorkData(data);
        })
    }
  }


  function salinAlamatDomisili(){
    // setcountryDomValue(JSON.stringify(formik.values.selectNegara))
    // setprovDomValue(JSON.stringify(formik.values.txtProvinsi))
    // setkabDomValue(JSON.stringify(formik.values.txtKabupaten))
    // setkecDomValue(JSON.stringify(formik.values.txtKecamatan))
    // console.log(formik.values.selectNegara + " " + formik.values.txtProvinsi + ' '  + formik.values.txtKabupaten + ' ' + formik.values.txtKecamatan)
    // console.log(countryDomValue + " prov " + provDomValue + ' kab '  + kabDomValue + ' kec ' + kecDomValue)
    formik.setFieldValue("txtAlamatDomisili", formik.values.txtAlamat)
    formik.setFieldValue("selectNegaraDomisili", formik.values.selectNegara)
    handleProvinsiDom(formik.values.selectNegara)
    formik.setFieldValue("txtProvinsiDomisili", formik.values.txtProvinsi)
    handleKabupatenDom(formik.values.txtProvinsi, formik.values.selectNegara)
    formik.setFieldValue("txtKabDomisili", formik.values.txtKabupaten)
    handleKecamatanDom(formik.values.txtKabupaten, formik.values.selectNegara, formik.values.txtProvinsi)
    formik.setFieldValue("txtKecamatanDomisili", formik.values.txtKecamatan)
    handleKelurahanDom(formik.values.txtKecamatan, formik.values.selectNegara, formik.values.txtProvinsi, formik.values.txtKabupaten)
    formik.setFieldValue("txtKelurahanDomisili", formik.values.txtKelurahan)
    handleKodePosDom(formik.values.txtKelurahan, formik.values.selectNegara, formik.values.txtProvinsi, formik.values.txtKabupaten, formik.values.txtKecamatan)
    formik.setFieldValue("txtRwDomisili", formik.values.txtRw)
    formik.setFieldValue("txtRtDomisili", formik.values.txtRt)
    formik.setFieldValue("txtKodeposDomisili", formik.values.txtKodePos)
  }

  function salinAlamatKantor(){
    formik.setFieldValue("txtAlamatKerja", formik.values.txtAlamat)
    formik.setFieldValue("selectNegaraKerja", formik.values.selectNegara)
    handleProvinsiWork(formik.values.selectNegara)
    formik.setFieldValue("txtProvinsiKerja", formik.values.txtProvinsi)
    handleKabupatenWork(formik.values.txtProvinsi, formik.values.selectNegara)
    formik.setFieldValue("txtKabKerja", formik.values.txtKabupaten)
    handleKecamatanWork(formik.values.txtKabupaten, formik.values.selectNegara, formik.values.txtProvinsi)
    formik.setFieldValue("txtKecamatanKerja", formik.values.txtKecamatan)
    handleKelurahanWork(formik.values.txtKecamatan, formik.values.selectNegara, formik.values.txtProvinsi, formik.values.txtKabupaten)
    formik.setFieldValue("txtKelurahanKerja", formik.values.txtKelurahan)
    handleKodePosWork(formik.values.txtKelurahan, formik.values.selectNegara, formik.values.txtProvinsi, formik.values.txtKabupaten, formik.values.txtKecamatan)
    formik.setFieldValue("txtRwKerja", formik.values.txtRw)
    formik.setFieldValue("txtRtKerja", formik.values.txtRt)
    formik.setFieldValue("txtKodePosKerja", formik.values.txtKodePos)
  }


  const handleSave = () => {
    return handleChange();
    // alert("Data Berhasil Disimpan")
};

  const [value, setValue] = React.useState(true)
  const handleChange = () => {
    return setValue(false);
  };
  
  async function initValue() {
    console.log('masuk init' + countryValue + provValue + kabValue)
    GetCountry()
    handleProvinsi('ID')
    handleKabupaten('DKI')
    handleKecamatan('JAKBAR')
    handleKelurahan('CGK')
    handleKodePos('CGKB')
    handleProvinsiDom(formik.values.selectNegara)
    handleKabupatenDom(formik.values.txtProvinsi, formik.values.selectNegara)
    handleKecamatanDom(formik.values.txtKabupaten, formik.values.selectNegara, formik.values.txtProvinsi)
    handleKelurahanDom(formik.values.txtKecamatan, formik.values.selectNegara, formik.values.txtProvinsi, formik.values.txtKabupaten)
    handleKodePosDom(formik.values.txtKelurahan, formik.values.selectNegara, formik.values.txtProvinsi, formik.values.txtKabupaten, formik.values.txtKecamatan)
    handleProvinsiWork(formik.values.selectNegara)
    handleKabupatenWork(formik.values.txtProvinsi, formik.values.selectNegara)
    handleKecamatanWork(formik.values.txtKabupaten, formik.values.selectNegara, formik.values.txtProvinsi)
    handleKelurahanWork(formik.values.txtKecamatan, formik.values.selectNegara, formik.values.txtProvinsi, formik.values.txtKabupaten)
    handleKodePosWork(formik.values.txtKelurahan, formik.values.selectNegara, formik.values.txtProvinsi, formik.values.txtKabupaten, formik.values.txtKecamatan);
    };

  // console.log(countryValue)
  
  return (

    <div className={classes.root}>
      <form  onSubmit={formik.handleSubmit} >
      <TypographAlamat onClick={initValue}
          className={classes.subtitle2}>Informasi Alamat Peserta</TypographAlamat>
    <div>
    
        <TextField
          id="txtAlamat"
          label="Alamat KTP/Paspor *"
          name="txtAlamat"
          helperText={formik.touched.txtAlamat && formik.errors.txtAlamat ? formik.errors.txtAlamat : null}
          error={formik.touched.txtAlamat && formik.errors.txtAlamat ? true : false}
          {...formik.getFieldProps('txtAlamat')}
          value={formik.values.txtAlamat.toUpperCase()}
          onChange={formik.handleChange}
          //required
        >
        </TextField>
        <TextField
          select
          id="selectNegara"
          label="Negara *"
          value={formik.values.selectNegara}

          name="selectNegara"
          
          onChange={(event) => {
            formik.setFieldValue('selectNegara', event.target.value);
            formik.setFieldValue('txtProvinsi', '');
            formik.setFieldValue('txtKabupaten', '');
            formik.setFieldValue('txtKecamatan', '');
            formik.setFieldValue('txtKelurahan', '');
            formik.setFieldValue('txtKodePos', '');
            setprovValue('');
            setkabValue('');
            setkecValue('');
            setcountryValue(event.target.value);
            handleProvinsi(event.target.value);
            // console.log('http://devsitara.tapera.go.id/redis/'+ countryValue + '/' + provValue + '/' + kabValue);
          }}
          onBlur={formik.handleBlur}
          helperText={formik.touched.selectNegara && formik.errors.selectNegara ? formik.errors.selectNegara : null}
          error={formik.touched.selectNegara && formik.errors.selectNegara ? true : false}
          // {...formik.getFieldProps('selectNegara')}
          //required
        >
          {countryData.map((country, index) => (
            <MenuItem key={index} value={country.Kode}>
              {country.Nilai}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          id="txtProvinsi"
          label="Provinsi *"
          name="txtProvinsi"
          value={formik.values.txtProvinsi}
          onChange={(e) => {
            formik.setFieldValue('txtProvinsi', e.target.value);
            formik.setFieldValue('txtKabupaten', '');
            formik.setFieldValue('txtKecamatan', '');
            formik.setFieldValue('txtKelurahan', '');
            formik.setFieldValue('txtKodePos', '');
            setkabValue('');
            setkecValue('');
            setprovValue(e.target.value);
            handleKabupaten(e.target.value);
          }}
          helperText={formik.touched.txtProvinsi && formik.errors.txtProvinsi ? formik.errors.txtProvinsi : null}
          error={formik.touched.txtProvinsi && formik.errors.txtProvinsi?true:false}
          // {... formik.getFieldProps('txtProvinsi')}
        >
          {provinsiData.map((prov, index) => (
            <MenuItem key={index} value={prov.Kode}>
              {prov.Nilai}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select 
          id="txtKabupaten"
          label="Kabupaten/Kota *"
          name="txtKabupaten"
          value={formik.values.txtKabupaten}
          onChange={(e) => {
            formik.setFieldValue('txtKabupaten', e.target.value);
            formik.setFieldValue('txtKecamatan', '');
            formik.setFieldValue('txtKelurahan', '');
            formik.setFieldValue('txtKodePos', '');
            setkecValue('');
            setkabValue(e.target.value);
            handleKecamatan(e.target.value);
          }}
          helperText={formik.touched.txtKabupaten && formik.errors.txtKabupaten ? formik.errors.txtKabupaten : null}
          error={formik.touched.txtKabupaten && formik.errors.txtKabupaten ? true : false}
          // {...formik.getFieldProps('txtKabupaten')}
         // required
        >
          {kabupatenData.map((kab, index) => (
            <MenuItem key={index} value={kab.Kode}>
              {kab.Nilai}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          id="txtKecamatan"
          label="Kecamatan *"
          name="txtKecamatan"
          value={formik.values.txtKecamatan}
          onChange={(e) => {
            formik.setFieldValue('txtKecamatan', e.target.value);
            formik.setFieldValue('txtKelurahan', '');
            formik.setFieldValue('txtKodePos', '');
            setkecValue(e.target.value);
            handleKelurahan(e.target.value);
          }}
          helperText={formik.touched.txtKecamatan && formik.errors.txtKecamatan ? formik.errors.txtKecamatan : null}
          error={formik.touched.txtKecamatan && formik.errors.txtKecamatan ? true : false}
          // {...formik.getFieldProps('txtKecamatan')}
          //required
        >
          {kecamatanData.map((kec, index) => (
            <MenuItem key={index} value={kec.Kode}>
              {kec.Nilai}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          id="txtKelurahan"
          label="Kelurahan *"
          name="txtKelurahan"
          value={formik.values.txtKelurahan}
          onChange={(e) => {
            formik.setFieldValue('txtKelurahan', e.target.value);
            formik.setFieldValue('txtKodePos', '');
            handleKodePos(e.target.value);
          }}
          helperText={formik.touched.txtKelurahan && formik.errors.txtKelurahan ? formik.errors.txtKelurahan : null}
          error={formik.touched.txtKelurahan && formik.errors.txtKelurahan ? true : false}
          // {...formik.getFieldProps('txtKelurahan')}
          //required
        >
          {kelurahanData.map((kel, index) => (
            <MenuItem key={index} value={kel.Kode}>
              {kel.Nilai}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="txtRw"
          label="Nomor RW *"
          name="txtRw"
          helperText={formik.touched.txtRw && formik.errors.txtRw ? formik.errors.txtRw : null}
          error={formik.touched.txtRw && formik.errors.txtRw ? true : false}
          {...formik.getFieldProps('txtRw')}
          //required
        >
        </TextField>
        <TextField
          id="txtRt"
          label="Nomor RT *"
          name="txtRt"
          helperText={formik.touched.txtRt && formik.errors.txtRt ? formik.errors.txtRt : null}
          error={formik.touched.txtRt && formik.errors.txtRt ? true : false}
          {...formik.getFieldProps('txtRt')}
          //required
        >
        </TextField>
        <TextField
          select
          id="txtKodePos"
          label="Kode Pos *"
          name="txtKodePos"
          value={formik.values.txtKodePos}
          onChange={(e) => {
            formik.setFieldValue('txtKodePos', e.target.value);
          }}
          helperText={formik.touched.txtKodePos && formik.errors.txtKodePos ? formik.errors.txtKodePos : null}
          error={formik.touched.txtKodePos && formik.errors.txtKodePos ? true : false}
          // {...formik.getFieldProps('txtKodePos')}
         // required
        >
          {kodeposData.map((kp, index) => (
            <MenuItem key={index} value={kp.Kode}>
              {kp.Nilai}
            </MenuItem>
          ))}
        </TextField>
        </div>
        <TypographAlamat className={classes.subtitle2}>Informasi Alamat Domisili</TypographAlamat>
        <Grid container className={classes.root2} >
        <Button 
          type="button" 
          fullWidth
          onClick={salinAlamatDomisili}
          variant="contained"
          color="primary"  
          className={classes.btnSalin}
        >Salin
        </Button>
        <p>*Salin dari alamat KTP</p>
        </Grid>
        <div>
        
        <TextField
          id="txtAlamatDomisili"
          label="Alamat Domisili *"
          name="txtAlamatDomisili"
          helperText={formik.touched.txtAlamatDomisili && formik.errors.txtAlamatDomisili ? formik.errors.txtAlamatDomisili : null}
          error={formik.touched.txtAlamatDomisili && formik.errors.txtAlamatDomisili?true:false}
          //{...formik.getFieldProps('txtAlamatDomisili')}
          value={formik.values.txtAlamatDomisili.toUpperCase()}
          onChange={formik.handleChange}
          //helperText="Opsional"
        >
        </TextField>
        <TextField
          select
          id="selectNegaraDomisili"
          label="Negara Domisili *"
          name="selectNegaraDomisili"
          onChange={(e) => {
            formik.setFieldValue('selectNegaraDomisili', e.target.value);
            formik.setFieldValue('txtProvinsiDomisili', '');
            formik.setFieldValue('txtKabDomisili', '');
            formik.setFieldValue('txtKecamatanDomisili', '');
            formik.setFieldValue('txtKelurahanDomisili', '');
            formik.setFieldValue('txtKodeposDomisili', '');
            // setprovDomValue('');
            // setkabDomValue('');
            // setkecDomValue('');
            // setcountryDomValue(e.target.value);
            handleProvinsiDom(e.target.value);
          }}
          onBlur={formik.handleBlur}
          value={formik.values.selectNegaraDomisili}
          helperText={formik.touched.selectNegaraDomisili && formik.errors.selectNegaraDomisili ? formik.errors.selectNegaraDomisili : null}
          error={formik.touched.selectNegaraDomisili && formik.errors.selectNegaraDomisili?true:false}
          // {...formik.getFieldProps('selectNegaraDomisili')}
        >
          {countryDomData.map((country, index) => (
            <MenuItem key={index} value={country.Kode}>
              {country.Nilai}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          id="txtProvinsiDomisili"
          label="Provinsi Domisili *"
          name="txtProvinsiDomisili"
          value={formik.values.txtProvinsiDomisili}
          onChange={(e) => {
            formik.setFieldValue('txtProvinsiDomisili', e.target.value);
            formik.setFieldValue('txtKabDomisili', '');
            formik.setFieldValue('txtKecamatanDomisili', '');
            formik.setFieldValue('txtKelurahanDomisili', '');
            formik.setFieldValue('txtKodeposDomisili', '');
            // setkabDomValue('');
            // setkecDomValue('');
            // setprovDomValue(e.target.value);
            handleKabupatenDom(e.target.value, formik.values.selectNegaraDomisili);
          }}
          helperText={formik.touched.txtProvinsiDomisili && formik.errors.txtProvinsiDomisili ? formik.errors.txtProvinsiDomisili : null}
          error={formik.touched.txtProvinsiDomisili && formik.errors.txtProvinsiDomisili?true:false}
          // {... formik.getFieldProps('txtProvinsiDomisili')}
        >
          {provinsiDomData.map((prov, index) => (
            <MenuItem key={index} value={prov.Kode}>
              {prov.Nilai}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          id="txtKabDomisili"
          label="Kabupaten/Kota Domisili *"
          name="txtKabDomisili"
          value={formik.values.txtKabDomisili}
          onChange={(e) => {
            formik.setFieldValue('txtKabDomisili', e.target.value);
            formik.setFieldValue('txtKecamatanDomisili', '');
            formik.setFieldValue('txtKelurahanDomisili', '');
            formik.setFieldValue('txtKodeposDomisili', '');
            // setkecDomValue('');
            // setkabDomValue(e.target.value);
            handleKecamatanDom(e.target.value, formik.values.selectNegaraDomisili, formik.values.txtProvinsiDomisili);
          }}
          helperText={formik.touched.txtKabDomisili && formik.errors.txtKabDomisili ? formik.errors.txtKabDomisili : null}
          error={formik.touched.txtKabDomisili && formik.errors.txtKabDomisili ? true : false}
          // {...formik.getFieldProps('txtKabDomisili')}
        >
           {kabupatenDomData.map((kab, index) => (
            <MenuItem key={index} value={kab.Kode}>
              {kab.Nilai}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          id="txtKecamatanDomisili"
          label="Kecamatan Domisili *"
          name="txtKecamatanDomisili"
          value={formik.values.txtKecamatanDomisili}
          onChange={(e) => {
            formik.setFieldValue('txtKecamatanDomisili', e.target.value);
            formik.setFieldValue('txtKelurahanDomisili', '');
            formik.setFieldValue('txtKodeposDomisili', '');
            // setkecDomValue(e.target.value);
            handleKelurahanDom(e.target.value, formik.values.selectNegaraDomisili, formik.values.txtProvinsiDomisili, formik.values.txtKabDomisili);
          }}
          helperText={formik.touched.txtKecamatanDomisili && formik.errors.txtKecamatanDomisili ? formik.errors.txtKecamatanDomisili : null}
          error={formik.touched.txtKecamatanDomisili && formik.errors.txtKecamatanDomisili ? true : false}
          // {...formik.getFieldProps('txtKecamatanDomisili')}
        >
          {kecamatanDomData.map((kec, index) => (
            <MenuItem key={index} value={kec.Kode}>
              {kec.Nilai}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          id="txtKelurahanDomisili"
          label="Kelurahan Domisili *"
          name="txtKelurahanDomisili"
          value={formik.values.txtKelurahanDomisili}
          onChange={(e) => {
            formik.setFieldValue('txtKelurahanDomisili', e.target.value);
            formik.setFieldValue('txtKodeposDomisili', '');
            handleKodePosDom(e.target.value, formik.values.selectNegaraDomisili, formik.values.txtProvinsiDomisili, formik.values.txtKabDomisili, formik.values.txtKecamatanDomisili);
          }}
          helperText={formik.touched.txtKelurahanDomisili && formik.errors.txtKelurahanDomisili ? formik.errors.txtKelurahanDomisili : null}
          error={formik.touched.txtKelurahanDomisili && formik.errors.txtKelurahanDomisili ? true : false}
          // {...formik.getFieldProps('txtKelurahanDomisili')}
        >
          {kelurahanDomData.map((kel, index) => (
            <MenuItem key={index} value={kel.Kode}>
              {kel.Nilai}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="txtRwDomisili"
          label="Nomor RW Domisili *"
          name="txtRwDomisili"
          helperText={formik.touched.txtRwDomisili && formik.errors.txtRwDomisili ? formik.errors.txtRwDomisili : null}
          error={formik.touched.txtRwDomisili && formik.errors.txtRwDomisili ? true : false}
          {...formik.getFieldProps('txtRwDomisili')}
        >
        </TextField>
        <TextField
          id="txtRtDomisili"
          label="Nomor RT Domisili *"
          name="txtRtDomisili"
          helperText={formik.touched.txtRtDomisili && formik.errors.txtRtDomisili ? formik.errors.txtRtDomisili : null}
          error={formik.touched.txtRtDomisili && formik.errors.txtRtDomisili ? true : false}
          {...formik.getFieldProps('txtRtDomisili')}
        >
        </TextField>
        <TextField
          select
          id="txtKodeposDomisili"
          label="Kode Pos Domisili *"
          name="txtKodeposDomisili"
          value={formik.values.txtKodeposDomisili}
          onChange={(e) => {
            formik.setFieldValue('txtKodeposDomisili', e.target.value);
          }}
          helperText={formik.touched.txtKodeposDomisili && formik.errors.txtKodeposDomisili ? formik.errors.txtKodeposDomisili : null}
          error={formik.touched.txtKodeposDomisili && formik.errors.txtKodeposDomisili ? true : false}
          // {...formik.getFieldProps('txtKodeposDomisili')}
        >
          {kodeposDomData.map((kp, index) => (
            <MenuItem key={index} value={kp.Kode}>
              {kp.Nilai}
            </MenuItem>
          ))}
        </TextField>
        </div>
        <TypographAlamat className={classes.subtitle2}>Informasi Alamat Kantor</TypographAlamat>
        <Grid container className={classes.root2} >
        <Button 
          type="button" 
          fullWidth
          variant="contained"
          color="primary"  
          onClick={salinAlamatKantor}
          className={classes.btnSalin}
        >Salin
        </Button>
        <p>*Salin dari alamat KTP</p>
        </Grid>
        
        <div>
        <TextField
          id="txtAlamatKerja"
          label="Alamat Kantor"
          name="txtAlamatKerja"
          helperText={formik.touched.txtAlamatKerja && formik.errors.txtAlamatKerja ? formik.errors.txtAlamatKerja : null}
          error={formik.touched.txtAlamatKerja && formik.errors.txtAlamatKerja?true:false}
          {...formik.getFieldProps('txtAlamatKerja')}
          value={formik.values.txtAlamatKerja.toUpperCase()}
          onChange={formik.handleChange}
        >
        </TextField>
        <TextField
          select
          id="selectNegaraKerja"
          label="Negara Kantor"
          name="selectNegaraKerja"
          onChange={(e) => {
            formik.setFieldValue('selectNegaraKerja', e.target.value);
            formik.setFieldValue('txtProvinsiKerja', '');
            formik.setFieldValue('txtKabKerja', '');
            formik.setFieldValue('txtKecamatanKerja', '');
            formik.setFieldValue('txtKelurahanKerja', '');
            formik.setFieldValue('txtKodePosKerja', '');
            handleProvinsiWork(e.target.value);
          }}
          onBlur={formik.handleBlur}
          value={formik.values.selectNegaraKerja}
          // {...formik.getFieldProps('selectNegaraKerja')}
        >
          {countryWorkData.map((country, index) => (
            <MenuItem key={index} value={country.Kode}>
              {country.Nilai}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          id="txtProvinsiKerja"
          label="Provinsi Kantor"
          name="txtProvinsiKerja"
          value={formik.values.txtProvinsiKerja}
          onChange={(e) => {
            formik.setFieldValue('txtProvinsiKerja', e.target.value);
            formik.setFieldValue('txtKabKerja', '');
            formik.setFieldValue('txtKecamatanKerja', '');
            formik.setFieldValue('txtKelurahanKerja', '');
            formik.setFieldValue('txtKodePosKerja', '');
            handleKabupatenWork(e.target.value, formik.values.selectNegaraKerja);
          }}
          // {...formik.getFieldProps('txtProvinsiKerja')}
        >
          {provinsiWorkData.map((prov, index) => (
            <MenuItem key={index} value={prov.Kode}>
              {prov.Nilai}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          id="txtKabKerja"
          label="Kabupaten/Kota Kantor"
          name="txtKabKerja"
          value={formik.values.txtKabKerja}
          onChange={(e) => {
            formik.setFieldValue('txtKabKerja', e.target.value);
            formik.setFieldValue('txtKecamatanKerja', '');
            formik.setFieldValue('txtKelurahanKerja', '');
            formik.setFieldValue('txtKodePosKerja', '');
            // setkecDomValue('');
            // setkabDomValue(e.target.value);
            handleKecamatanWork(e.target.value, formik.values.selectNegaraKerja, formik.values.txtProvinsiKerja);
          }}
          helperText={formik.touched.txtKabKerja && formik.errors.txtKabKerja ? formik.errors.txtKabKerja : null}
          error={formik.touched.txtKabKerja && formik.errors.txtKabKerja?true:false}
          // {...formik.getFieldProps('txtKabKerja')}
        >
           {kabupatenWorkData.map((kab, index) => (
            <MenuItem key={index} value={kab.Kode}>
            {kab.Nilai}
          </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          id="txtKecamatanKerja"
          label="Kecamatan Kantor"
          name="txtKecamatanKerja"
          value={formik.values.txtKecamatanKerja}
          onChange={(e) => {
            formik.setFieldValue('txtKecamatanKerja', e.target.value);
            formik.setFieldValue('txtKelurahanKerja', '');
            formik.setFieldValue('txtKodePosKerja', '');
            // setkecDomValue(e.target.value);
            handleKelurahanWork(e.target.value, formik.values.selectNegaraKerja, formik.values.txtProvinsiKerja, formik.values.txtKabKerja);
          }}
          helperText={formik.touched.txtKecamatanKerja && formik.errors.txtKecamatanKerja ? formik.errors.txtKecamatanKerja : null}
          error={formik.touched.txtKecamatanKerja && formik.errors.txtKecamatanKerja?true:false}
          // {...formik.getFieldProps('txtKecamatanKerja')}
        >
          {kecamatanWorkData.map((kec, index) => (
            <MenuItem key={index} value={kec.Kode}>
              {kec.Nilai}
            </MenuItem>
          ))} 
        </TextField>
        <TextField
          select
          id="txtKelurahanKerja"
          label="Kelurahan Kantor"
          name="txtKelurahanKerja"
          value={formik.values.txtKelurahanKerja}
          onChange={(e) => {
            formik.setFieldValue('txtKelurahanKerja', e.target.value);
            formik.setFieldValue('txtKodePosKerja', '');
            handleKodePosDom(e.target.value, formik.values.selectNegaraKerja, formik.values.txtProvinsiKerja, formik.values.txtKabKerja, formik.values.txtKecamatanKerja);
          }}
          helperText={formik.touched.txtKelurahanKerja && formik.errors.txtKelurahanKerja ? formik.errors.txtKelurahanKerja : null}
          error={formik.touched.txtKelurahanKerja && formik.errors.txtKelurahanKerja?true:false}
          // {...formik.getFieldProps('txtKelurahanKerja')}
        >
          {kelurahanWorkData.map((kel, index) => (
            <MenuItem key={index} value={kel.Kode}>
              {kel.Nilai}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="txtRwKerja"
          label="Nomor RW Kantor"
          name="txtRwKerja"
          helperText={formik.touched.txtRwKerja && formik.errors.txtRwKerja ? formik.errors.txtRwKerja : null}
          error={formik.touched.txtRwKerja && formik.errors.txtRwKerja?true:false}
          {...formik.getFieldProps('txtRwKerja')}
        >
        </TextField>
        <TextField
          id="txtRtkerja"
          label="Nomor RT Kantor"
          name="txtRtKerja"
          helperText={formik.touched.txtRtKerja && formik.errors.txtRtKerja ? formik.errors.txtRtKerja : null}
          error={formik.touched.txtRtKerja && formik.errors.txtRtKerja?true:false}
          {...formik.getFieldProps('txtRtKerja')}
        >
        </TextField>
        <TextField
          select
          id="txtKodePosKerja"
          label="Kode Pos Kantor"
          name="txtKodePosKerja"
          value={formik.values.txtKodePosKerja}
          onChange={(e) => {
            formik.setFieldValue('txtKodePosKerja', e.target.value);
          }}
          helperText={formik.touched.txtKodePosKerja && formik.errors.txtKodePosKerja ? formik.errors.txtKodePosKerja : null}
          error={formik.touched.txtKodePosKerja && formik.errors.txtKodePosKerja?true:false}
          // {...formik.getFieldProps('txtKodePosKerja')}
        >
          {kodeposWorkData.map((kp, index) => (
            <MenuItem key={index} value={kp.Kode}>
              {kp.Nilai}
            </MenuItem>
          ))}
        </TextField>
        </div>
        <TypographAlamat className={classes.subtitle2}>Informasi Alamat Ahli Waris</TypographAlamat>

        <div>
          <TextField
          id="txtAlamatAhliWaris"
          label="Alamat Lengkap Ahli Waris *"
          name="txtAlamatAhliWaris"
          helperText={formik.touched.txtAlamatAhliWaris && formik.errors.txtAlamatAhliWaris ? formik.errors.txtAlamatAhliWaris : null}
          error={formik.touched.txtAlamatAhliWaris && formik.errors.txtAlamatAhliWaris?true:false}
          //{...formik.getFieldProps('txtAlamatAhliWaris')}
          value={formik.values.txtAlamatAhliWaris.toUpperCase()}
          onChange={formik.handleChange}
          >
          </TextField>
        </div>
        <div className={classes.button}>
        <Grid container spacing={0}>
          <Grid 
          direction="row"
          item
          maxwidth="xl" 
          // className={classes.myGrid} 
          spacing={0} 
          xs={10} sm={10} md={10} 
          justify="space-between">
      <Button 
      type="button" 
      onClick={() => formik.resetForm()} 
      className={classes.buttonconfig}
         fullWidth
         variant="contained"
         color="primary"  
      >Batal</Button>
      <Button 
      onClick={(e) => {props.handleNext(e, 1)}}
      className={classes.buttonconfig}
         fullWidth
         variant="contained"
         color="primary" 
         type="button"
         >Sebelumnya</Button>
      <Button 
      disabled={value}
      onClick={(e) => {props.handleNext(e, 3)}}
      className={classes.buttonconfig}
         fullWidth
         variant="contained"
         color="primary" 
         type="button"
      >Selanjutnya</Button>
       </Grid>

<Grid 
direction="row"
item
maxwidth="xl" 
// className={classes.myGrid} 
spacing={0} 
xs={1} sm={1} md={1} 
justify="space-between"
>
      <Button 
      type="submit"
      //onClick={handleChange} 
      className={classes.buttonsimpan}
         fullWidth
         justifyContent="flex-end"
         variant="contained"
         color="primary" 
      >Simpan Sementara</Button>
      </Grid>
      </Grid>
      </div>
    </form>
    </div>
  );
}