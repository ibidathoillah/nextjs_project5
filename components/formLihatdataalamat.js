import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextField, MenuItem, Button, Typography} from '@material-ui/core';
import { useFormik} from 'formik'
import * as Yup from 'yup'
import { styled } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '50ch',
    },
  },
  judul1: {
    margin: theme.spacing(1),
  },
  judul12: {
    marginTop: theme.spacing(4),
    margin: theme.spacing(1),
  },
  tombol1: {
    direction: "row",
    alignItems: "center",
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(4),
  },
  tombolconfig1: {
    marginRight: theme.spacing(3),
    margin: theme.spacing(1, 0, 1),
    borderRadius: 15,
    marginTop: 5,
    width: 110,
    backgroundColor: '#008F4C',
    justify: 'center',
  },
}));

const TypographAlamat = styled(Typography)({
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: '39px',
  color: '#008F4C'
});

const initialValues = {
  txtAlamat:'Tengah Jalan Raya',
  txtRt:'007',
  txtRw:'007',
  txtKelurahan:'Mulyaharja',
  txtKecamatan:'Cirebon',
  txtKabupaten:'7101',
  txtKodePos:'77777',
  txtProvinsi:'71',
  selectNegara:'DE',

  txtAlamatDomisili:'Cibubur',
  txtRtDomisili:'007',
  txtRwDomisili:'007',
  txtKelurahanDomisili:'Ciapus',
  txtKecamatanDomisili:'Munchen',
  txtKabDomisili:'7410',
  txtKodeposDomisili:'77777',
  txtProvinsiDomisili:'BENGKULU',
  selectNegaraDomisili:'ET',

  txtAlamatKerja:'Apl Tower lt. 70',
  txtRtKerja:'007',
  txtRwKerja:'007',
  txtKelurahanKerja:'Penjaringan',
  txtKecamatanKerja:'Grogol',
  txtKabKerja:'3301',
  txtKodePosKerja:'77777',
  txtProvinsiKerja:'71',
  selectNegaraKerja:'IN',

  txtAlamatAhliWaris:'White House',
}

const onSubmit = values => {
  // console.log('form data', values);
  alert("data berhasil disimpan.")

}
const validationSchema = Yup.object({

  //Alamat Utama
  txtAlamat: Yup.string().required('wajib diisi').matches(/^[a-zA-Z0-9.,':/; ]+$/, 'format alamat tidak sesuai').max(100, 'maksimal 100 karakter'),
  txtRt: Yup.string().required('wajib diisi').matches(/^[a-zA-Z0-9.:/ ]+$/, 'format alamat tidak sesuai').max(3, 'Nomor RT harus 3 karakter').min(3,'Nomor RT harus 3 karakter'),
  txtRw: Yup.string().required('wajib diisi').matches(/^[a-zA-Z0-9.:/ ]+$/, 'format alamat tidak sesuai').max(3, 'Nomor RW harus 3 karakter').min(3, 'Nomor RW harus 3 karakter'),
  txtKelurahan: Yup.string().required('wajib diisi').max(100, 'maksimal 100 karakter'),
  txtKecamatan: Yup.string().required('wajib diisi').max(100, 'maksimal 100 karakter'),
  txtKabupaten: Yup.string().required('wajib diisi'),
  txtKodePos: Yup.string().required('wajib diisi').matches(/^[0-9]+$/, 'hanya angka').max(5, 'Kode Pos harus terdiri dari 5 karakter').min(5,'Kode Pos harus terdiri dari 5 karakter'),
  txtProvinsi: Yup.string().required('wajib diisi'),
  selectNegara: Yup.string().required('wajib diisi'),
  txtAlamatAhliWaris: Yup.string().required('wajib diisi').max(255,'maksimal 255 karakter'),

  //Alamat Domisili
  txtAlamatDomisili: Yup.string().required('wajib diisi').matches(/^[a-zA-Z0-9.,':/; ]+$/, 'format alamat tidak sesuai').max(100, 'maksimal 100 karakter'),
  txtRtDomisili: Yup.string().required('wajib diisi').matches(/^[a-zA-Z0-9.:/ ]+$/, 'format alamat tidak sesuai').max(3, 'Nomor RT Harus 3 karakter').min(3, 'Nomor RT Harus 3 karakter'),
  txtRwDomisili: Yup.string().required('wajib diisi').matches(/^[a-zA-Z0-9.:/ ]+$/, 'format alamat tidak sesuai').max(3, 'Nomor RW Harus 3 karakter').min(3,'Nomor RW Harus 3 karakter'),
  txtKelurahanDomisili: Yup.string().required('wajib diisi').max(100, 'maksimal 100 karakter'),
  txtKecamatanDomisili: Yup.string().required('wajib diisi').max(100, 'maksimal 100 karakter'),
  txtKodeposDomisili: Yup.string().required('wajib diisi').matches(/^[0-9]+$/, 'hanya angka').max(5, 'Kode Pos harus terdiri dari 5 karakter').min(5,'Kode Pos harus terdiri dari 5 karakter'),
  txtKabDomisili: Yup.string().required('wajib diisi'),
  txtProvinsiDomisili: Yup.string().required('wajib diisi'),

  //Alamat Kantor
  txtAlamatKerja: Yup.string().nullable(true).matches(/^[a-zA-Z0-9.,':/; ]+$/, 'format alamat tidak sesuai').max(100, 'maksimal 100 karakter'),
  txtRtKerja: Yup.string().nullable(true).matches(/^[a-zA-Z0-9.:/ ]+$/, 'format alamat tidak sesuai').max(3, 'Nomor RT Harus 3 karakter').min(3, 'Nomor RT Harus 3 karakter'),
  txtRwKerja: Yup.string().nullable(true).matches(/^[a-zA-Z0-9.:/ ]+$/, 'format alamat tidak sesuai').max(3, 'Nomor RW Harus 3 karakter').min(3,'Nomor RW Harus 3 karakter'),
  txtKelurahanKerja: Yup.string().nullable(true).max(100, 'maksimal 100 karakter'),
  txtKecamatanKerja: Yup.string().nullable(true).max(100, 'maksimal 100 karakter'),
  txtKodePosKerja: Yup.string().nullable(true).matches(/^[0-9]+$/, 'hanya angka').max(5, 'Kode Pos harus terdiri dari 5 karakter').min(5,'Kode Pos harus terdiri dari 5 karakter'),
})

export default function formdataalamat(props) {
  const classes = useStyles();
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  })
  
  const [value, setValue] = React.useState(true)
  const handleChange = () => {
    // console.log(false)
    return setValue(false);
  };
// console.log(props.listdata.listISOCodeCountry)
  return (
    <div className={classes.root}>
      <form onSubmit={formik.handleSubmit} >
      <TypographAlamat className={classes.judul12}>Informasi Alamat Peserta</TypographAlamat>
    <div>
        <TextField
          id="txtAlamat"
          label="Alamat KTP/Paspor *"
          disabled
          name="txtAlamat"
          helperText={formik.touched.txtAlamat && formik.errors.txtAlamat ? formik.errors.txtAlamat : null}
          error={formik.touched.txtAlamat && formik.errors.txtAlamat ? true : false}
          {...formik.getFieldProps('txtAlamat')}
          //required
        >
        </TextField>
        <TextField
          id="txtRt"
          disabled
          label="Nomor RT *"
          name="txtRt"
          helperText={formik.touched.txtRt && formik.errors.txtRt ? formik.errors.txtRt : null}
          error={formik.touched.txtRt && formik.errors.txtRt ? true : false}
          {...formik.getFieldProps('txtRt')}
          //required
        >
        </TextField>
        <TextField
          id="txtRw"
          label="Nomor RW *"
          name="txtRw"
          disabled
          helperText={formik.touched.txtRw && formik.errors.txtRw ? formik.errors.txtRw : null}
          error={formik.touched.txtRw && formik.errors.txtRw ? true : false}
          {...formik.getFieldProps('txtRw')}
          //required
        >
        </TextField>
     
      <TextField
          id="txtKelurahan"
          label="Kelurahan *"
          name="txtKelurahan"
          disabled
          helperText={formik.touched.txtKelurahan && formik.errors.txtKelurahan ? formik.errors.txtKelurahan : null}
          error={formik.touched.txtKelurahan && formik.errors.txtKelurahan ? true : false}
          {...formik.getFieldProps('txtKelurahan')}
          //required
        >
        </TextField>

        <TextField
          id="txtKecamatan"
          label="Kecamatan *"
          disabled
          name="txtKecamatan"
          helperText={formik.touched.txtKecamatan && formik.errors.txtKecamatan ? formik.errors.txtKecamatan : null}
          error={formik.touched.txtKecamatan && formik.errors.txtKecamatan ? true : false}
          {...formik.getFieldProps('txtKecamatan')}
          //required
        >
        </TextField>
        <TextField
          select 
          id="txtKabupaten"
          label="Kabupaten/Kota *"
          disabled
          name="txtKabupaten"
          helperText={formik.touched.txtKabupaten && formik.errors.txtKabupaten ? formik.errors.txtKabupaten : null}
          error={formik.touched.txtKabupaten && formik.errors.txtKabupaten ? true : false}
          {...formik.getFieldProps('txtKabupaten')}
         // required
        >
          {props.listdata.listKabupatenKota.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.nama}
            </MenuItem>
          ))}
        </TextField>
     
      <TextField
          id="txtKodePos"
          disabled
          label="Kode Pos *"
          name="txtKodePos"
          helperText={formik.touched.txtKodePos && formik.errors.txtKodePos ? formik.errors.txtKodePos : null}
          error={formik.touched.txtKodePos && formik.errors.txtKodePos ? true : false}
          {...formik.getFieldProps('txtKodePos')}
         // required
        >
        </TextField>
        <TextField
          select
          id="txtProvinsi"
          disabled
          label="Provinsi *"
          name="txtProvinsi"
          helperText={formik.touched.txtProvinsi && formik.errors.txtProvinsi ? formik.errors.txtProvinsi : null}
          error={formik.touched.txtProvinsi && formik.errors.txtProvinsi?true:false}
          {... formik.getFieldProps('txtProvinsi')}
         // required
          
        >
          {props.listdata.listProvinsi.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.nama}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          id="selectNegara"
          disabled
          label="Negara *"
          name="selectNegara"
          helperText={formik.touched.selectNegara && formik.errors.selectNegara ? formik.errors.selectNegara : null}
          error={formik.touched.selectNegara && formik.errors.selectNegara ? true : false}
          {...formik.getFieldProps('selectNegara')}
          //required
        >
          {props.listdata.listISOCodeCountry.map((option) => (
            <MenuItem key={option.value} value={option.ISOCode}>
              {option.Country}
            </MenuItem>
          ))}
        </TextField>
        </div>
        <TypographAlamat className={classes.judul12}>Informasi Alamat Domisili</TypographAlamat>
        <div>
        <TextField
          id="txtAlamatDomisili"
          label="Alamat Domisili *"
          disabled
          name="txtAlamatDomisili"
          helperText={formik.touched.txtAlamatDomisili && formik.errors.txtAlamatDomisili ? formik.errors.txtAlamatDomisili : null}
          error={formik.touched.txtAlamatDomisili && formik.errors.txtAlamatDomisili?true:false}
          {...formik.getFieldProps('txtAlamatDomisili')}
          //helperText="Opsional"
        >
        </TextField>
        <TextField
          id="txtRtDomisili"
          label="Nomor RT Domisili *"
          disabled
          name="txtRtDomisili"
          helperText={formik.touched.txtRtDomisili && formik.errors.txtRtDomisili ? formik.errors.txtRtDomisili : null}
          error={formik.touched.txtRtDomisili && formik.errors.txtRtDomisili ? true : false}
          {...formik.getFieldProps('txtRtDomisili')}
        >
        </TextField>
        <TextField
          id="txtRwDomisili"
          label="Nomor RW Domisili *"
          disabled
          name="txtRwDomisili"
          helperText={formik.touched.txtRwDomisili && formik.errors.txtRwDomisili ? formik.errors.txtRwDomisili : null}
          error={formik.touched.txtRwDomisili && formik.errors.txtRwDomisili ? true : false}
          {...formik.getFieldProps('txtRwDomisili')}
        >
        </TextField>
  
      <TextField
          id="txtKelurahanDomisili"
          label="Kelurahan Domisili *"
          name="txtKelurahanDomisili"
          disabled
          helperText={formik.touched.txtKelurahanDomisili && formik.errors.txtKelurahanDomisili ? formik.errors.txtKelurahanDomisili : null}
          error={formik.touched.txtKelurahanDomisili && formik.errors.txtKelurahanDomisili ? true : false}
          {...formik.getFieldProps('txtKelurahanDomisili')}
        >
        </TextField>
        <TextField
          id="txtKecamatanDomisili"
          label="Kecamatan Domisili *"
          disabled
          name="txtKecamatanDomisili"
          helperText={formik.touched.txtKecamatanDomisili && formik.errors.txtKecamatanDomisili ? formik.errors.txtKecamatanDomisili : null}
          error={formik.touched.txtKecamatanDomisili && formik.errors.txtKecamatanDomisili ? true : false}
          {...formik.getFieldProps('txtKecamatanDomisili')}
        >
        </TextField>
        <TextField
          select
          id="txtKabDomisili"
          disabled
          label="Kabupaten/Kota Domisili *"
          name="txtKabDomisili"
          helperText={formik.touched.txtKabDomisili && formik.errors.txtKabDomisili ? formik.errors.txtKabDomisili : null}
          error={formik.touched.txtKabDomisili && formik.errors.txtKabDomisili ? true : false}
          {...formik.getFieldProps('txtKabDomisili')}
        >
           {props.listdata.listKabupatenKota.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.nama}
            </MenuItem>
          ))}
        </TextField>
  
      <TextField
          id="txtKodeposDomisili"
          disabled
          label="Kode Pos Domisili *"
          name="txtKodeposDomisili"
          helperText={formik.touched.txtKodeposDomisili && formik.errors.txtKodeposDomisili ? formik.errors.txtKodeposDomisili : null}
          error={formik.touched.txtKodeposDomisili && formik.errors.txtKodeposDomisili ? true : false}
          {...formik.getFieldProps('txtKodeposDomisili')}
        >
        </TextField>
       
        <TextField
          select
          id="txtProvinsiDomisili"
          disabled
          label="Provinsi Domisili *"
          name="txtProvinsiDomisili"
          helperText={formik.touched.txtProvinsiDomisili && formik.errors.txtProvinsiDomisili ? formik.errors.txtProvinsiDomisili : null}
          error={formik.touched.txtProvinsiDomisili && formik.errors.txtProvinsiDomisili?true:false}
          {... formik.getFieldProps('txtProvinsiDomisili')}
          
        >
          {props.listdata.listProvinsi.map((option) => (
            <MenuItem key={option.id} value={option.nama}>
              {option.nama}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          id="selectNegaraDomisili"
          disabled
          label="Negara Domisili *"
          name="selectNegaraDomisili"
          helperText={formik.touched.selectNegaraDomisili && formik.errors.selectNegaraDomisili ? formik.errors.selectNegaraDomisili : null}
          error={formik.touched.selectNegaraDomisili && formik.errors.selectNegaraDomisili?true:false}
          {...formik.getFieldProps('selectNegaraDomisili')}
        >
          {props.listdata.listISOCodeCountry.map((option) => (
            <MenuItem key={option.value} value={option.ISOCode}>
              {option.Country}
            </MenuItem>
          ))}
        </TextField>
        </div>
        <TypographAlamat className={classes.subtitle2}>Informasi Alamat Kantor</TypographAlamat>
        <div>
        <TextField
          id="txtAlamatKerja"
          label="Alamat Kantor"
          disabled
          name="txtAlamatKerja"
          helperText={formik.touched.txtAlamatKerja && formik.errors.txtAlamatKerja ? formik.errors.txtAlamatKerja : null}
          error={formik.touched.txtAlamatKerja && formik.errors.txtAlamatKerja?true:false}
          {...formik.getFieldProps('txtAlamatKerja')}
        >
        </TextField>
        <TextField
          id="txtRtkerja"
          label="Nomor RT Kantor"
          name="txtRtKerja"
          disabled
          helperText={formik.touched.txtRtKerja && formik.errors.txtRtKerja ? formik.errors.txtRtKerja : null}
          error={formik.touched.txtRtKerja && formik.errors.txtRtKerja?true:false}
          {...formik.getFieldProps('txtRtKerja')}
        >
        </TextField>
        <TextField
          id="txtRwKerja"
          label="Nomor RW Kantor"
          name="txtRwKerja"
          disabled
          helperText={formik.touched.txtRwKerja && formik.errors.txtRwKerja ? formik.errors.txtRwKerja : null}
          error={formik.touched.txtRwKerja && formik.errors.txtRwKerja?true:false}
          {...formik.getFieldProps('txtRwKerja')}
        >
        </TextField>
    
      <TextField
          id="txtKelurahanKerja"
          disabled
          label="Kelurahan Kantor"
          name="txtKelurahanKerja"
          helperText={formik.touched.txtKelurahanKerja && formik.errors.txtKelurahanKerja ? formik.errors.txtKelurahanKerja : null}
          error={formik.touched.txtKelurahanKerja && formik.errors.txtKelurahanKerja?true:false}
          {...formik.getFieldProps('txtKelurahanKerja')}
        >
        </TextField>
        <TextField
          id="txtKecamatanKerja"
          disabled
          label="Kecamatan Kantor"
          name="txtKecamatanKerja"
          helperText={formik.touched.txtKecamatanKerja && formik.errors.txtKecamatanKerja ? formik.errors.txtKecamatanKerja : null}
          error={formik.touched.txtKecamatanKerja && formik.errors.txtKecamatanKerja?true:false}
          {...formik.getFieldProps('txtKecamatanKerja')}
        >
        </TextField>
        <TextField
          select
          id="txtKabKerja"
          label="Kabupaten/Kota Kantor"
          disabled
          name="txtKabKerja"
          helperText={formik.touched.txtKabKerja && formik.errors.txtKabKerja ? formik.errors.txtKabKerja : null}
          error={formik.touched.txtKabKerja && formik.errors.txtKabKerja?true:false}
          {...formik.getFieldProps('txtKabKerja')}
        >
           {props.listdata.listKabupatenKota.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.nama}
            </MenuItem>
          ))}
        </TextField>
     
      <TextField
          id="txtKodePosKerja"
          label="Kode Pos Kantor"
          disabled
          name="txtKodePosKerja"
          helperText={formik.touched.txtKodePosKerja && formik.errors.txtKodePosKerja ? formik.errors.txtKodePosKerja : null}
          error={formik.touched.txtKodePosKerja && formik.errors.txtKodePosKerja?true:false}
          {...formik.getFieldProps('txtKodePosKerja')}
        >
        </TextField>
        <TextField
          select
          id="txtProvinsiKerja"
          label="Provinsi Kantor"
          disabled
          name="ProvinsiKerja"
          {...formik.getFieldProps('txtProvinsiKerja')}
        >
          {props.listdata.listProvinsi.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.nama}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          disabled
          id="selectNegaraKerja"
          label="Negara Kantor"
          name="selectNegaraKerja"
          {...formik.getFieldProps('selectNegaraKerja')}
        >
          {props.listdata.listISOCodeCountry.map((option) => (
            <MenuItem key={option.value} value={option.ISOCode}>
              {option.Country}
            </MenuItem>
          ))}
        </TextField>
        </div>
        <TypographAlamat className={classes.judul12}>Informasi Alamat Ahli Waris</TypographAlamat>

        <div>
        <TextField
          id="txtAlamatAhliWaris"
          disabled
          label="Alamat Lengkap Ahli Waris *"
          name="txtAlamatAhliWaris"
          helperText={formik.touched.txtAlamatAhliWaris && formik.errors.txtAlamatAhliWaris ? formik.errors.txtAlamatAhliWaris : null}
          error={formik.touched.txtAlamatAhliWaris && formik.errors.txtAlamatAhliWaris?true:false}
          {...formik.getFieldProps('txtAlamatAhliWaris')}>
        </TextField>
        </div>
      <Button type="button" onClick={() => formik.resetForm()} className={classes.tombolconfig1} fullWidth variant="contained" color="primary"  >Batal</Button>
	    <Button onClick={(e) => {props.handleNext(e, 1)}} className={classes.tombolconfig1} fullWidth variant="contained" color="primary"  type="button">Sebelumnya</Button>
	    <Button onClick={(e) => {props.handleNext(e, 3)}} className={classes.tombolconfig1} fullWidth variant="contained" color="primary"  type="button">Selanjutnya</Button>
      {/* <Button type="submit" onClick={handleChange} className={classes.tombolconfig1} fullWidth variant="contained" color="primary" >Simpan</Button> */}
    </form>
    </div>
  );
}
