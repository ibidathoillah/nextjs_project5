import React from 'react'
import { TextField, Button, MenuItem, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useFormik } from 'formik'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { DatePicker } from "@material-ui/pickers"
import DateFnsUtils from '@date-io/date-fns';
import InputMask from 'react-input-mask';
import moment from 'moment';
import * as Yup from 'yup'
import {listStatusPernikahan, listAgama, listInfoKepemilikanRumah, listJenisInvestasi} from './listISOCode';
import { styled } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '50ch',
    },
  },
  judul: {
    margin: theme.spacing(1),
  },
  judul2: {
    marginTop: theme.spacing(4),
    margin: theme.spacing(1),
  },
  tombol: {
    direction: "row",
    alignItems: "center",
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(4),
  },
  tombolconfig: {
    marginRight: theme.spacing(3),
    margin: theme.spacing(1, 0, 1),
    borderRadius: 15,
    marginTop: 5,
    width: 110,
    backgroundColor: '#008F4C',
    justify: 'center',
  },
}));

const Typograph = styled(Typography)({
  // fontStyle: 'normal',
  // fontWeight: '600',
  // lineHeight: '39px',
  color: '#008F4C'
});

export const initialValues = {
  selectWarganegara: 'DE',
  txtKartuKeluarga: '0098123890841234',
  selectStatusHubungan: '3',
  txtEktpIbu: '8192736912363782',
  tanggalPernikahan: '2021-12-21',
  ktp: '8917234129123874',
  txtPaspor: '98678576',
  txtKITAS:'0912839164712',
  tglExpPaspor: 'selamanya',
  namaLengkap: 'Jerry Niu',
  selectJenisKelamin: '1',
  tempatLahir: 'Rumah Sakit',
  negaraKelahiran: 'DE',
  tglLahir: '1996-02-21',
  selectPendidikan: '8',
  gelarDepan: 'dr',
  gelarBelakang: 'phd',
  noHp: '0918236412',
  email: 'jerry@gmail.com',
  Agama: '5',
  namaIbuKandung: 'Isthar',
  namaPasangan: 'Cecilia',
  namaAhliWaris: 'Tom',
  statusAhliWaris:'3',
  noHpAhliWaris: '09128364123',
  npwp: '1892738164',
  tanggalDaftarNPWP: '01-01-2001',
  kepemilikanRumah: '1',
  statusPernikahan: '1',
  jenisInvestasi: '1',
  tglPerceraian: 'tidak ada',
  telepon:'9182731624',
}

const onSubmit = values => {
  // console.log('form data', values);
  alert("data berhasil diperbarui")
  
}
export const validationSchema = Yup.object({
  selectWarganegara: Yup.string().required("harus diisi"),
  ktp: Yup.string().required('harus diisi').max(16, 'lebih dari 16 digit').min(16, 'kurang dari 16 digit').matches(/^[0-9]+$/, 'hanya angka'),
  txtPaspor: Yup.mixed().when('selectWarganegara', {
    is: 'ID' || '',
    then: Yup.string().nullable(true),
    otherwise: Yup.string().required("Wajib Diisi Untuk WNA").max(50, 'Maksimal 50 karakter')
  }),
  txtKITAS: Yup.mixed().when('selectWarganegara', {
    is: 'ID' || '',
    then: Yup.string().nullable(true),
    otherwise: Yup.string().required("Wajib Diisi Untuk WNA").max(50, 'Maksimal 50 karakter')
  }),
  tglExpPaspor: Yup.mixed().when('selectWarganegara', {
    is: 'ID' || '',
    then: Yup.string().nullable(true),
    otherwise: Yup.string().required("Wajib Diisi Untuk WNA")
  }),

  namaLengkap: Yup.string().required('harus diisi').matches(/^[a-zA-Z.,' ]+$/, 'Hanya Karakter, titik, petik atau koma').max(100, 'Maksimal 100 Karakter'),
  selectJenisKelamin: Yup.string().required('harus diisi'),
  tempatLahir: Yup.string().required('harus diisi').max(100, 'Maksimal 100 Karakter'),
  negaraKelahiran: Yup.string().required('harus diisi'),
  tglLahir: Yup.string().required('harus diisi'),
  statusAhliWaris: Yup.string().required('harus diisi'),
  selectPendidikan: Yup.string().required('harus diisi'),
  gelarDepan: Yup.string().nullable(true).matches(/^[a-zA-Z.,' ]+$/, 'Hanya Karakter, titik, petik atau koma').max(50, 'lebih dari 50 karakter'),
  gelarBelakang: Yup.string().nullable(true).matches(/^[a-zA-Z.,' ]+$/, 'Hanya Karakter, titik, petik atau koma').max(50, 'lebih dari 50 karakter'),
  telepon: Yup.string().nullable(true).max(30, 'Maksimal 30 Karakter').matches(/^[0-9]+$/, 'hanya angka'),
  noHp: Yup.string().required('harus diisi').max(30, 'Maksimal 30 Karakter').matches(/^[0-9]+$/, 'hanya angka'),
  email: Yup.string().required('harus diisi').email('email tidak valid').max(255, 'Maksimal 255 Karakter'),
  Agama: Yup.string().required('harus diisi'),
  namaIbuKandung: Yup.string().required('harus diisi').matches(/^[a-zA-Z.,' ]+$/, 'Hanya Karakter, titik, petik atau koma').max(100, 'Maksimal 100 Karakter'),
  statusPernikahan: Yup.string().required('harus diisi'),
  namaPasangan: Yup.mixed().when('statusPernikahan', {
    is: '2',
    then: Yup.string().required('harus diisi jika sudah menikah').matches(/^[a-zA-Z.,' ]+$/, 'Hanya Karakter, titik, petik atau koma').max(100, 'Maksimal 100 Karakter'),
    otherwise: Yup.string().nullable(true)
  }),
  namaAhliWaris: Yup.string().required('harus diisi').matches(/^[a-zA-Z.,' ]+$/, 'Hanya Karakter, titik, petik atau koma').max(100, 'Maksimal 100 Karakter'),
  noHpAhliWaris: Yup.string().required('harus diisi').matches(/^[0-9]+$/, 'hanya angka').max(30, 'Maksimal 30 Karakter'),
  jenisInvestasi: Yup.string().required('harus diisi'),
  kepemilikanRumah: Yup.string().required('harus diisi'),
  txtKartuKeluarga: Yup.string().required('harus diisi').matches(/^[0-9]+$/, 'hanya angka').max(16, 'Nomor KK harus 16 digit').min(16, 'Nomor KK harus 16 digit'),
  selectStatusHubungan: Yup.string().required("harus diisi"),
  txtEktpIbu: Yup.string().nullable().matches(/^[0-9]+$/, 'hanya angka').max(16, 'lebih dari 16 digit').min(16, 'harus 16 digit'),
  tanggalPernikahan: Yup.mixed().when('statusPernikahan', {
    is: '2',
    then: Yup.string().required('harus diisi'),
    otherwise: Yup.string().nullable(true)
  }),
  tglPerceraian: Yup.mixed().when('statusPernikahan', {
    is: '3',
    then: Yup.string().required('harus diisi'),
    otherwise: Yup.string().nullable(true)
  }),
  npwp: Yup.string().nullable(true).matches(/^[0-9.-]+$/, 'hanya angka').max(20, 'Nomor NPWP harus 16 karakter').min(20, 'Nomor NPWP harus 16 karakter'),
  tanggalDaftarNPWP: Yup.string().nullable(true),
})

export default function formdatapribadi(props) {
  const classes = useStyles();
  const [selectedTglExpPasporPekerja, handleDateChange1] = React.useState(20200220);
  const [selectedTglLahirPekerja, handleDateChange2] = React.useState(7);
  const [selectedTglMenikahPekerja, handleDateChange3] = React.useState(7);
  const [selectedTglBerceraiPekerja, handleDateChange4] = React.useState(7);
  const [selectedTglDaftarNpwpPekerja, handleDateChange5] = React.useState(7);

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  })
  const [value, setValue] = React.useState(true)

  const handleChange = () => {
    // console.log(false)
    alert("data berhasil disimpan.")
    return setValue(false);
    
  };

  // console.log(value)
  // console.log('form errors', formik.errors)
  return (
    <div className={classes.root} noValidate autoComplete="off">
      <Typograph className={classes.judul}>Informasi Pribadi</Typograph>
      <form onSubmit={formik.handleSubmit} >
      <div>
        <TextField
          id="txtNamaLengkap"
          label="Nama Lengkap *"
          type="input"
          name="namaLengkap"
          disabled
          helperText={formik.touched.namaLengkap && formik.errors.namaLengkap ? formik.errors.namaLengkap : null}
          error={formik.touched.namaLengkap && formik.errors.namaLengkap ? true : false}
          {...formik.getFieldProps('namaLengkap')}
        //value={formik.values.namaLengkap}
        //onChange={formik.handleChange}
        //onBlur={formik.handleBlur}
        >
        </TextField>
        <TextField
          id="txtEktp"
          label="Nomor E-KTP *"
          name="ktp"
          disabled
          helperText={formik.touched.ktp && formik.errors.ktp ? formik.errors.ktp : null}
          error={formik.touched.ktp && formik.errors.ktp ? true : false}
          {...formik.getFieldProps('ktp')}
        //value={formik.values.ktp}
        //onChange={formik.handleChange}
        //onBlur={formik.handleBlur}
        //style={{ display: `${displayktp}` }}
        >
        </TextField>
        <TextField
          id="standard-select-tempatLahir"
          label="Tempat Lahir *"
          name="tempatLahir"
          disabled
          helperText={formik.touched.tempatLahir && formik.errors.tempatLahir ? formik.errors.tempatLahir : null}
          error={formik.touched.tempatLahir && formik.errors.tempatLahir ? true : false}
          value={formik.values.tempatLahir}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
        </TextField>
        <TextField
          select
          id="negaraKelahiran"
          label="Negara Kelahiran *"
          name="negaraKelahiran"
          disabled
          helperText={formik.touched.negaraKelahiran && formik.errors.negaraKelahiran ? formik.errors.negaraKelahiran : null}
          error={formik.touched.negaraKelahiran && formik.errors.negaraKelahiran ? true : false}
          {...formik.getFieldProps('negaraKelahiran')}
        >
          {props.listdata.listISOCodeCountry.map((option) => (
            <MenuItem key={option.value} value={option.ISOCode}>
              {option.Country}
            </MenuItem>
          ))}
        </TextField>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            id="tglLahir"
            label="Tanggal Lahir *"
            name="tglLahir"
            disabled
            helperText={formik.touched.tglLahir && formik.errors.tglLahir ? formik.errors.tglLahir : null}
            error={formik.touched.tglLahir && formik.errors.tglLahir ? true : false}
            value={selectedTglLahirPekerja}
            onChange={(handleTglLahir) => {
              formik.setFieldValue("tglLahir", moment(handleTglLahir).format('YYYYMMDD'));
              handleDateChange2(handleTglLahir);
            }}
            onBlur={formik.handleBlur}
            maxDate={new Date()}
            format="yyyy-MM-dd"
          />
        </MuiPickersUtilsProvider>
        <TextField
          select
          id="selectJenisKelamin"
          label="Jenis Kelamin *"
          name="selectJenisKelamin"
          disabled
          helperText={formik.touched.selectJenisKelamin && formik.errors.selectJenisKelamin ? formik.errors.selectJenisKelamin : null}
          error={formik.touched.selectJenisKelamin && formik.errors.selectJenisKelamin ? true : false}
          {...formik.getFieldProps('selectJenisKelamin')}
        >
          <MenuItem key=" " value="">Pilih Jenis Kelamin</MenuItem>
          <MenuItem key="1" value="1">Pria</MenuItem>
          <MenuItem key="2" value="2">Wanita</MenuItem>
        </TextField>
        <TextField
          select
          id="txtAgama"
          label="Agama *"
          disabled
          name="Agama"
          helperText={formik.touched.Agama && formik.errors.Agama ? formik.errors.Agama : null}
          error={formik.touched.Agama && formik.errors.Agama ? true : false}
          {...formik.getFieldProps('Agama')}
        >
          {listAgama.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="telepon"
          label="Nomor Telepon "
          type="input"
          name="telepon"
          disabled
          helperText={formik.touched.telepon && formik.errors.telepon ? formik.errors.telepon : null}
          error={formik.touched.telepon && formik.errors.telepon ? true : false}
          value={formik.values.telepon}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></TextField>
        <TextField
          id="standard-select-hp"
          label="Nomor Ponsel *"
          disabled
          type="input"
          name="noHp"
          helperText={formik.touched.noHp && formik.errors.noHp ? formik.errors.noHp : null}
          error={formik.touched.noHp && formik.errors.noHp ? true : false}
          value={formik.values.noHp}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></TextField>
        <TextField
          id="standard-select-email"
          label="Email *"
          type="input"
          disabled
          name="email"
          helperText={formik.touched.email && formik.errors.email ? formik.errors.email : null}
          error={formik.touched.email && formik.errors.email ? true : false}
          value={formik.values.email || ''}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></TextField>
        </div>
        <Typograph className={classes.judul2}>Informasi Kewarganegaraan</Typograph>
        <div>
        <TextField
          select
          id="selectWarganegara"
          label="Kewarganegaraan *"
          name="selectWarganegara"
          disabled
          helperText={formik.touched.selectWarganegara && formik.errors.selectWarganegara ? formik.errors.selectWarganegara : null}
          error={formik.touched.selectWarganegara && formik.errors.selectWarganegara ? true : false}
          {...formik.getFieldProps('selectWarganegara')}
        >
          {props.listdata.listISOCodeCountry.map((option) => (
            <MenuItem key={option.value} value={option.ISOCode}>
              {option.Country}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="txtPaspor"
          label="Nomor Paspor **"
          name="txtPaspor"
          disabled
          helperText={formik.touched.txtPaspor && formik.errors.txtPaspor ? formik.errors.txtPaspor : null}
          error={formik.touched.txtPaspor && formik.errors.txtPaspor ? true : false}
          {...formik.getFieldProps('txtPaspor')}
        //style={{ display: `${displaypasspor}` }}
        >
        </TextField>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
           id="tglExpPaspor"
           label="Tanggal Kadaluarsa Paspor **"
           name="tglExpPaspor"
           disabled
           helperText={formik.touched.tglExpPaspor && formik.errors.tglExpPaspor ? formik.errors.tglExpPaspor : null}
            error={formik.touched.tglExpPaspor && formik.errors.tglExpPaspor ? true : false}
            value={selectedTglExpPasporPekerja}
            minDate={new Date()}
            onChange={(handleTglExpPaspor) => {
              formik.setFieldValue("tglExpPaspor", moment(handleTglExpPaspor).format('YYYYMMDD'));
              handleDateChange1(handleTglExpPaspor);
            }}
            onBlur={formik.handleBlur}
            format="yyyy-MM-dd"
          />
        </MuiPickersUtilsProvider>
        <TextField
          id="txtKITAS"
          label="Nomor KITAS/KITAP **"
          name="txtKITAS"
          disabled
          helperText={formik.touched.txtKITAS && formik.errors.txtKITAS ? formik.errors.txtKITAS : null}
          error={formik.touched.txtKITAS && formik.errors.txtKITAS ? true : false}
          {...formik.getFieldProps('txtKITAS')}
        //style={{ display: `${displaypasspor}` }}
        ></TextField>
        </div>
        <Typograph className={classes.judul2}>Informasi Pendidikan</Typograph>
        <div>
        <TextField
          select
          id="selectPendidikan"
          label="Pendidikan *"
          name="selectPendidikan"
          disabled
          helperText={formik.touched.selectPendidikan && formik.errors.selectPendidikan ? formik.errors.selectPendidikan : null}
          error={formik.touched.selectPendidikan && formik.errors.selectPendidikan ? true : false}
          {...formik.getFieldProps('selectPendidikan')}
        >
          <MenuItem key=" " value="">Pilih Pendidikan</MenuItem>
          <MenuItem key="1" value="1">SD</MenuItem>
          <MenuItem key="2" value="2">SMP</MenuItem>
          <MenuItem key="3" value="3">SMU</MenuItem>
          <MenuItem key="4" value="4">Diploma</MenuItem>
          <MenuItem key="5" value="5">S1</MenuItem>
          <MenuItem key="6" value="6">S2</MenuItem>
          <MenuItem key="7" value="7">Doktor</MenuItem>
          <MenuItem key="8" value="8">Lainnya</MenuItem>
        </TextField>
        <TextField
          id="standard-select-gelardepan"
          label="Gelar Depan"
          type="input"
          name="gelarDepan"
          disabled
          helperText={formik.touched.gelarDepan && formik.errors.gelarDepan ? formik.errors.gelarDepan : null}
          error={formik.touched.gelarDepan && formik.errors.gelarDepan ? true : false}
          value={formik.values.gelarDepan || ''}
          onChange={formik.handleChange}
        >
        </TextField>
        <TextField
          id="standard-select-gelarbelakang"
          label="Gelar Belakang"
          type="input"
          disabled
          name="gelarBelakang"
          helperText={formik.touched.gelarBelakang && formik.errors.gelarBelakang ? formik.errors.gelarBelakang : null}
          error={formik.touched.gelarBelakang && formik.errors.gelarBelakang ? true : false}
          value={formik.values.gelarBelakang}
          onChange={formik.handleChange}
        >
        </TextField>
        </div>
        <Typograph className={classes.judul2}>Informasi Pajak Pribadi</Typograph>
        <div>
        <InputMask
        mask={"99.999.999.9-999.999"}
        disabled
        maskChar=""
        helperText={formik.touched.npwp && formik.errors.npwp ? formik.errors.npwp : null}
        error={formik.touched.npwp && formik.errors.npwp ? true : false}
        value={formik.values.npwp || ''}
        onChange={formik.handleChange}
      >
        {() => (
        <TextField
          id="npwp"
          label="NPWP"
          type="input"
          name="npwp"
          disabled
        >
        </TextField> )}
         </InputMask>

        <MuiPickersUtilsProvider utils={DateFnsUtils} >
          <DatePicker
            id="tanggalDaftarNPWP"
            label="Tanggal Daftar NPWP"
            disableFuture={true}
            disabled
            name="tanggalDaftarNPWP"
            value={selectedTglDaftarNpwpPekerja}
            onChange={(handleTglDaftarNpwp) => {
              formik.setFieldValue("tanggalDaftarNPWP", moment(handleTglDaftarNpwp).format('YYYYMMDD'));
              handleDateChange5(handleTglDaftarNpwp);
            }}
            onBlur={formik.handleBlur}
            maxDate={new Date()}
            format="yyyy-MM-dd"
          />
        </MuiPickersUtilsProvider>
        </div>
        <Typograph className={classes.judul2}>Informasi Keluarga</Typograph>
        <div>
        <TextField
          id="txtKartuKeluarga"
          label="Nomor Kartu Keluarga *"
          disabled
          name="txtKartuKeluarga"
          helperText={formik.touched.txtKartuKeluarga && formik.errors.txtKartuKeluarga ? formik.errors.txtKartuKeluarga : null}
          error={formik.touched.txtKartuKeluarga && formik.errors.txtKartuKeluarga ? true : false}
          {...formik.getFieldProps('txtKartuKeluarga')}
        >
        </TextField>
        <TextField
          select
          id="selectStatusHubungan"
          label="Status Hubungan Dalam KK *"
          disabled
          name="selectStatusHubungan"
          helperText={formik.touched.selectStatusHubungan && formik.errors.selectStatusHubungan ? formik.errors.selectStatusHubungan : null}
          error={formik.touched.selectStatusHubungan && formik.errors.selectStatusHubungan ? true : false}
          {...formik.getFieldProps('selectStatusHubungan')}
        >
          <MenuItem key=" " value="">Pilih Status Hubungan</MenuItem>
          <MenuItem key="1" value="1">Kepala Keluarga</MenuItem>
          <MenuItem key="2" value="2">Pasangan Kepala Keluarga</MenuItem>
          <MenuItem key="3" value="3">Anak</MenuItem>
          <MenuItem key="4" value="4">Cucu</MenuItem>
          <MenuItem key="5" value="5">Menantu</MenuItem>
          <MenuItem key="6" value="6">Orang Tua</MenuItem>
          <MenuItem key="7" value="7">Mertua</MenuItem>
          <MenuItem key="8" value="8">Famili Lain</MenuItem>
          <MenuItem key="9" value="9">Lainnya</MenuItem>
        </TextField>
        <TextField
          select
          id="statusPernikahan"
          label="Status Pernikahan *"
          disabled
          name="statusPernikahan"
          helperText={formik.touched.statusPernikahan && formik.errors.statusPernikahan ? formik.errors.statusPernikahan : null}
          error={formik.touched.statusPernikahan && formik.errors.statusPernikahan ? true : false}
          {...formik.getFieldProps('statusPernikahan')}
        >
          {listStatusPernikahan.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-select-pasangan"
          label="Nama Pasangan **"
          disabled
          type="input"
          name="namaPasangan"
          helperText={formik.touched.namaPasangan && formik.errors.namaPasangan ? formik.errors.namaPasangan : null}
          error={formik.touched.namaPasangan && formik.errors.namaPasangan ? true : false}
          value={formik.values.namaPasangan}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
        </TextField>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            id="tanggalPernikahan"
            label="Tanggal Pernikahan **"
            disabled
            disableFuture={true}
            name="tanggalPernikahan"
            helperText={formik.touched.tanggalPernikahan && formik.errors.tanggalPernikahan ? formik.errors.tanggalPernikahan : null}
            error={formik.touched.tanggalPernikahan && formik.errors.tanggalPernikahan ? true : false}
            value={selectedTglMenikahPekerja}
            onChange={(handleTglMenikah) => {
              formik.setFieldValue("tanggalPernikahan", moment(handleTglMenikah).format('YYYYMMDD'));
              handleDateChange3(handleTglMenikah);
            }}
            onBlur={formik.handleBlur}
            maxDate={new Date()}
            format="yyyy-MM-dd"
          />
        </MuiPickersUtilsProvider>
        <MuiPickersUtilsProvider utils={DateFnsUtils} >
          <DatePicker
            id="tglPerceraian"
            label="Tanggal Perceraian **"
            disabled
            disableFuture={true}
            name="tglPerceraian"
            helperText={formik.touched.tglPerceraian && formik.errors.tglPerceraian ? formik.errors.tglPerceraian : null}
            error={formik.touched.tglPerceraian && formik.errors.tglPerceraian ? true : false}
            value={selectedTglBerceraiPekerja}
            onChange={(handleTglBercerai) => {
              formik.setFieldValue("tglPerceraian", moment(handleTglBercerai).format('YYYYMMDD'));
              handleDateChange4(handleTglBercerai);
            }}
            onBlur={formik.handleBlur}
            maxDate={new Date()}
            format="yyyy-MM-dd"
          />
        </MuiPickersUtilsProvider>
        <TextField
          id="standard-select-ibu"
          label="Nama Gadis Ibu Kandung *"
          type="input"
          disabled
          name="namaIbuKandung"
          helperText={formik.touched.namaIbuKandung && formik.errors.namaIbuKandung ? formik.errors.namaIbuKandung : null}
          error={formik.touched.namaIbuKandung && formik.errors.namaIbuKandung ? true : false}
          value={formik.values.namaIbuKandung}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
        </TextField>
        </div>
        <Typograph className={classes.judul2}>Informasi Ahli Waris</Typograph>
        <div>
        <TextField
          id="txtEktpIbu"
          label="Nomor E-KTP Ibu Kandung "
          name="txtEktpIbu"
          disabled
          helperText={formik.touched.txtEktpIbu && formik.errors.txtEktpIbu ? formik.errors.txtEktpIbu : null}
          error={formik.touched.txtEktpIbu && formik.errors.txtEktpIbu ? true : false}
          {...formik.getFieldProps('txtEktpIbu')}
        ><InputMask mask="999.999.999" maskChar="" />
        </TextField>
        
        <TextField
          id="namaAhliWaris"
          label="Nama Ahli Waris *"
          type="input"
          disabled
          name="namaAhliWaris"
          helperText={formik.touched.namaAhliWaris && formik.errors.namaAhliWaris ? formik.errors.namaAhliWaris : null}
          error={formik.touched.namaAhliWaris && formik.errors.namaAhliWaris ? true : false}
          value={formik.values.namaAhliWaris}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
        </TextField>
        <TextField
          select
          id="statusAhliWaris"
          label="Status Ahli Waris *"
          disabled
          name="statusAhliWaris"
          helperText={formik.touched.statusAhliWaris && formik.errors.statusAhliWaris ? formik.errors.statusAhliWaris : null}
          error={formik.touched.statusAhliWaris && formik.errors.statusAhliWaris ? true : false}
          {...formik.getFieldProps('statusAhliWaris')}
        >
          <MenuItem key=" " value="">Pilih Status Hubungan</MenuItem>
          <MenuItem key="1" value="1">Kepala Keluarga</MenuItem>
          <MenuItem key="2" value="2">Pasangan Kepala Keluarga</MenuItem>
          <MenuItem key="3" value="3">Anak</MenuItem>
          <MenuItem key="4" value="4">Cucu</MenuItem>
          <MenuItem key="5" value="5">Menantu</MenuItem>
          <MenuItem key="6" value="6">Orang Tua</MenuItem>
          <MenuItem key="7" value="7">Mertua</MenuItem>
          <MenuItem key="8" value="8">Famili Lain</MenuItem>
          <MenuItem key="9" value="9">Lainnya</MenuItem>
        </TextField>
        <TextField
          id="noHpAhliWaris"
          label="Ponsel Ahli Waris *"
          type="input"
          disabled
          name="noHpAhliWaris"
          helperText={formik.touched.noHpAhliWaris && formik.errors.noHpAhliWaris ? formik.errors.noHpAhliWaris : null}
          error={formik.touched.noHpAhliWaris && formik.errors.noHpAhliWaris ? true : false}
          value={formik.values.noHpAhliWaris}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
        </TextField>
        </div>
        <Typograph className={classes.judul2}>Informasi Investasi dan Kepemilikan Rumah</Typograph>
        <div>
        <TextField
          select
          id="jenisInvestasi"
          label="Jenis Pilihan Investasi *"
          disabled
          name="jenisInvestasi"
          helperText={formik.touched.jenisInvestasi && formik.errors.jenisInvestasi ? formik.errors.jenisInvestasi : null}
          error={formik.touched.jenisInvestasi && formik.errors.jenisInvestasi ? true : false}
          {...formik.getFieldProps('jenisInvestasi')}
        >
          {listJenisInvestasi.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          id="kepemilikanRumah"
          disabled
          label="Kepemilikan Rumah *"
          name="kepemilikanRumah"
          helperText={formik.touched.kepemilikanRumah && formik.errors.kepemilikanRumah ? formik.errors.kepemilikanRumah : null}
          error={formik.touched.kepemilikanRumah && formik.errors.kepemilikanRumah ? true : false}
          {...formik.getFieldProps('kepemilikanRumah')}
        >
          {listInfoKepemilikanRumah.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>

        <div className={classes.tombol} style={{ width: '100%' }}>
            <Button type="button" onClick={() => formik.resetForm()} className={classes.tombolconfig} fullWidth variant="contained" color="primary">Batal</Button>
            <Button type="button" onClick={(e) => { props.handleNext(e, 0) }} className={classes.tombolconfig} fullWidth variant="contained" color="primary">Sebelumnya</Button>
            <Button type="button" onClick={(e) => { props.handleNext(e, 2) }} className={classes.tombolconfig} fullWidth variant="contained" color="primary">Selanjutnya</Button>
            {/* <Button className={classes.tombolconfig} type="submit" onClick={handleChange} fullWidth variant="contained" color="primary" disabled="True" >Simpan</Button> */}
            
        </div>
      </form>
    </div>
  )
}

