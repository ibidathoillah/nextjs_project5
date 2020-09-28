import React from 'react'
import { TextField, Button, Grid, MenuItem, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useFormik } from 'formik'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { DatePicker } from "@material-ui/pickers"
import DateFnsUtils from '@date-io/date-fns';
import InputMask from 'react-input-mask';
import * as Yup from 'yup'
import moment from 'moment';
import { styled } from '@material-ui/core/styles';
import { MoreResources, DisplayFormikState } from './helper';

const Typograph = styled(Typography)({
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
}));

const listStatusPernikahan =
  [
    { value: '', label: 'Pilih Status Pernikahan' },
    { value: '1', label: 'BELUM MENIKAH/TIDAK MENIKAH' },
    { value: '2', label: 'MENIKAH' },
    { value: '3', label: 'TELAH BERCERAI' },
  ];

const listAgama =
  [
    { value: '', label: 'Pilih Agama' },
    { value: '1', label: 'ISLAM' },
    { value: '2', label: 'PROTESTAN' },
    { value: '3', label: 'KATOLIK' },
    { value: '4', label: 'HINDU' },
    { value: '5', label: 'BUDDHA' },
    { value: '6', label: 'KONGHUCU' },
  ];

const listInfoKepemilikanRumah =
  [
    { value: '', label: 'Pilih Info Kepemilikan Rumah' },
    { value: '1', label: 'MEMILIKI RUMAH' },
    { value: '2', label: 'BELUM MEMILIKI RUMAH' },
  ];

const listJenisInvestasi = [
  { value: '', label: 'Pilih Jenis Investasi' },
  { value: '1', label: 'KONVENSIONAL' },
  { value: '2', label: 'SYARIAH' },
];

const initialValues = {
  selectWarganegara: 'ID',
  txtKartuKeluarga: '0098123890841234',
  selectStatusHubungan: '3',
  txtEktpIbu: '8192736912363782',
  tanggalPernikahan: '2021-12-21',
  ktp: '3171020609710111',
  txtPaspor: '98678576',
  txtKITAS:'0912839164712',
  tglExpPaspor: 'selamanya',
  namaLengkap: 'Abizar',
  selectJenisKelamin: '1',
  tempatLahir: 'Jakarta',
  negaraKelahiran: 'ID',
  tglLahir: '09-11-1992',
  selectPendidikan: '8',
  gelarDepan: 'dr',
  gelarBelakang: 'phd',
  noHp: '0918236412',
  email: 'abizar@gmail.com',
  Agama: '5',
  namaIbuKandung: 'Isthar',
  namaPasangan: 'Cecilia',
  namaAhliWaris: 'Tom',
  statusAhliWaris:'3',
  noHpAhliWaris: '09128364123',
  npwp: '189273816412345',
  tanggalDaftarNPWP: '01-01-2001',
  kepemilikanRumah: '1',
  statusPernikahan: '1',
  jenisInvestasi: '1',
  tglPerceraian: 'tidak ada',
  telepon:'9182731624',
}

// const onSubmit = values => {
//   // console.log('form data', values);
//   alert("data berhasil diperbarui")
  
// }

const validationSchema = Yup.object({
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
  npwp: Yup.string().nullable(true).matches(/^[0-9.-]+$/, 'hanya angka').max(20, 'Nomor NPWP harus 15 karakter').min(20, 'Nomor NPWP harus 15 karakter'),
  tanggalDaftarNPWP: Yup.string().nullable(true),
})

export default function formeditdatapribadi(props) {
  const classes = useStyles();
  const [selectedTglExpPaspor, handleDateChange1] = React.useState(20200220);
  const [selectedTglLahir, handleDateChange2] = React.useState(7);
  const [selectedTglMenikah, handleDateChange3] = React.useState(7);
  const [selectedTglBercerai, handleDateChange4] = React.useState(7);
  const [selectedTglDaftarNpwp, handleDateChange5] = React.useState(7);
  // const [selectedTglExpPaspor, handleDateChange1] = React.useState(null);
  // const [selectedTglLahir, handleDateChange2] = React.useState(null);
  // const [selectedTglMenikah, handleDateChange3] = React.useState(null);
  // const [selectedTglBercerai, handleDateChange4] = React.useState(null);
  // const [selectedTglDaftarNpwp, handleDateChange5] = React.useState(null);

  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      // console.log('form data', values);
      alert("Data Berhasil disimpan")
      handleSave()
    },
    validationSchema
  })
  const [value, setValue] = React.useState(true)
  const handleChange = () => {
    console.log(false)
    return setValue(false);
  };
  const handleSave = () => {
    return handleChange();
  };
  // console.log(value)
  // console.log('form errors', formik.errors)
  return (
    <div className={classes.root}>
      <form onSubmit={formik.handleSubmit} >
        <Typograph className={classes.subtitle}>Informasi Pribadi</Typograph>
        <div>
          <TextField
            id="txtNamaLengkap"
            label="Nama Lengkap *"
            type="input"
            name="namaLengkap"
            helperText={formik.touched.namaLengkap && formik.errors.namaLengkap ? formik.errors.namaLengkap : null}
            error={formik.touched.namaLengkap && formik.errors.namaLengkap ? true : false}
            //{...formik.getFieldProps('namaLengkap')}
            value={formik.values.namaLengkap.toUpperCase()}
            onChange={
              (e) => { 
                formik.setFieldValue("namaLengkap", e.target.value)
                props.handleNamaLengkap(e, event.target.value.toUpperCase())
              }
            }
            onBlur={formik.handleBlur}
          >
          </TextField>
          <TextField
            id="txtEktp"
            label="Nomor E-KTP *"
            name="ktp"
            helperText={formik.touched.ktp && formik.errors.ktp ? formik.errors.ktp : null}
            error={formik.touched.ktp && formik.errors.ktp ? true : false}
            {...formik.getFieldProps('ktp')}


          >
          </TextField>
          <TextField
            id="standard-select-tempatLahir"
            label="Tempat Lahir *"
            name="tempatLahir"
            helperText={formik.touched.tempatLahir && formik.errors.tempatLahir ? formik.errors.tempatLahir : null}
            error={formik.touched.tempatLahir && formik.errors.tempatLahir ? true : false}
            value={formik.values.tempatLahir.toUpperCase()}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
          </TextField>
          <TextField
            select
            id="negaraKelahiran"
            label="Negara Kelahiran *"
            name="negaraKelahiran"
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
              cancelLabel="Batal"
              okLabel="Pilih"
              id="tglLahir"
              label="Tanggal Lahir (dd-mm-yyyy)*"
              name="tglLahir"
              helperText={formik.touched.tglLahir && formik.errors.tglLahir ? formik.errors.tglLahir : null}
              error={formik.touched.tglLahir && formik.errors.tglLahir ? true : false}
              value={selectedTglLahir}
              onChange={(handleTglLahir) => {
                formik.setFieldValue("tglLahir", moment(handleTglLahir).format('YYYYMMDD'));
                handleDateChange2(handleTglLahir);
              }}
              onBlur={formik.handleBlur}
              maxDate={new Date()}
              format="dd-MM-yyyy"
            />
          </MuiPickersUtilsProvider>

          <TextField
            select
            id="selectJenisKelamin"
            label="Jenis Kelamin *"
            name="selectJenisKelamin"
            helperText={formik.touched.selectJenisKelamin && formik.errors.selectJenisKelamin ? formik.errors.selectJenisKelamin : null}
            error={formik.touched.selectJenisKelamin && formik.errors.selectJenisKelamin ? true : false}
            {...formik.getFieldProps('selectJenisKelamin')}
          >
            <MenuItem key=" " value="">Pilih Jenis Kelamin</MenuItem>
            <MenuItem key="1" value="1">PRIA</MenuItem>
            <MenuItem key="2" value="2">WANITA</MenuItem>
          </TextField>
          <TextField
            select
            id="txtAgama"
            label="Agama *"
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
            helperText={formik.touched.telepon && formik.errors.telepon ? formik.errors.telepon : null}
            error={formik.touched.telepon && formik.errors.telepon ? true : false}
            value={formik.values.telepon}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></TextField>
          <TextField
            id="standard-select-hp"
            label="Nomor Ponsel *"
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
            name="email"
            helperText={formik.touched.email && formik.errors.email ? formik.errors.email : null}
            error={formik.touched.email && formik.errors.email ? true : false}
            value={formik.values.email.toUpperCase() || ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></TextField>
        </div>
        {/* informasi terkait WNA */}
        <Typograph className={classes.subtitle2}>Informasi Kewarganegaraan</Typograph>
        <div>
          <TextField
            select
            id="selectWarganegara"
            label="Kewarganegaraan *"
            name="selectWarganegara"
            helperText={formik.touched.selectWarganegara && formik.errors.selectWarganegara ? formik.errors.selectWarganegara : null}
            error={formik.touched.selectWarganegara && formik.errors.selectWarganegara ? true : false}
            // {...formik.getFieldProps('selectWarganegara')}
            value={formik.values.selectWarganegara.toUpperCase()}
            onChange={handleChange}
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
            helperText={formik.touched.txtPaspor && formik.errors.txtPaspor ? formik.errors.txtPaspor : null}
            error={formik.touched.txtPaspor && formik.errors.txtPaspor ? true : false}
            {...formik.getFieldProps('txtPaspor')}
          //style={{ display: `${displaypasspor}` }}
          >
          </TextField>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              cancelLabel="Batal"
              okLabel="Pilih"
              id="tglExpPaspor"
              label="Tanggal Kedaluwarsa Paspor (dd-mm-yyyy)**"
              name="tglExpPaspor"
              helperText={formik.touched.tglExpPaspor && formik.errors.tglExpPaspor ? formik.errors.tglExpPaspor : null}
              error={formik.touched.tglExpPaspor && formik.errors.tglExpPaspor ? true : false}
              value={selectedTglExpPaspor}
              minDate={new Date()}
              onChange={(handleTglExpPaspor) => {
                formik.setFieldValue("tglExpPaspor", moment(handleTglExpPaspor).format('YYYYMMDD'));
                handleDateChange1(handleTglExpPaspor);
              }}
              onBlur={formik.handleBlur}
              format="dd-MM-yyyy"
            />
          </MuiPickersUtilsProvider>
          <TextField
            id="txtKITAS"
            label="Nomor KITAS/KITAP **"
            name="txtKITAS"
            helperText={formik.touched.txtKITAS && formik.errors.txtKITAS ? formik.errors.txtKITAS : null}
            error={formik.touched.txtKITAS && formik.errors.txtKITAS ? true : false}
            {...formik.getFieldProps('txtKITAS')}
          //style={{ display: `${displaypasspor}` }}
          ></TextField>
          {/* <DisplayFormikState {...formik.values} /> */}
        </div>
        {/* informasi terkait pendidikan */}
        <Typograph className={classes.subtitle2}>Informasi Pendidikan</Typograph>
        <div>
          <TextField
            select
            id="selectPendidikan"
            label="Pendidikan *"
            name="selectPendidikan"
            helperText={formik.touched.selectPendidikan && formik.errors.selectPendidikan ? formik.errors.selectPendidikan : null}
            error={formik.touched.selectPendidikan && formik.errors.selectPendidikan ? true : false}
            {...formik.getFieldProps('selectPendidikan')}
          >
            <MenuItem key=" " value="">Pilih Pendidikan</MenuItem>
            <MenuItem key="1" value="1">SD</MenuItem>
            <MenuItem key="2" value="2">SMP</MenuItem>
            <MenuItem key="3" value="3">SMU</MenuItem>
            <MenuItem key="4" value="4">DIPLOMA</MenuItem>
            <MenuItem key="5" value="5">S1</MenuItem>
            <MenuItem key="6" value="6">S2</MenuItem>
            <MenuItem key="7" value="7">DOKTOR</MenuItem>
            <MenuItem key="8" value="8">LAINNYA</MenuItem>
          </TextField>
          <TextField
            id="gelarDepan"
            label="Gelar Depan"
            type="input"
            name="gelarDepan"
            helperText={formik.touched.gelarDepan && formik.errors.gelarDepan ? formik.errors.gelarDepan : null}
            error={formik.touched.gelarDepan && formik.errors.gelarDepan ? true : false}
            value={formik.values.gelarDepan}
            onChange={formik.handleChange}
          >
          </TextField>
          <TextField
            id="gelarBelakang"
            label="Gelar Belakang"
            type="input"
            name="gelarBelakang"
            helperText={formik.touched.gelarBelakang && formik.errors.gelarBelakang ? formik.errors.gelarBelakang : null}
            error={formik.touched.gelarBelakang && formik.errors.gelarBelakang ? true : false}
            value={formik.values.gelarBelakang}
            onChange={formik.handleChange}
          >
          </TextField>
        </div>
        {/* informasi pajak */}
        <Typograph className={classes.subtitle2}>Informasi Pajak Pribadi</Typograph>
        <div>
          <InputMask
            mask={"99.999.999.9-999.999"}
            maskChar=""
            onChange={formik.handleChange}
            value={formik.values.npwp || ''}
          >
            {() => (
              <TextField
                id="npwp"
                label="NPWP"
                type="input"
                name="npwp"
                helperText={formik.touched.npwp && formik.errors.npwp ? formik.errors.npwp : null}
                error={formik.touched.npwp && formik.errors.npwp ? true : false}
              >
              </TextField>)}
          </InputMask>

          <MuiPickersUtilsProvider utils={DateFnsUtils} >
            <DatePicker
              cancelLabel="Batal"
              okLabel="Pilih"
              id="tanggalDaftarNPWP"
              label="Tanggal Daftar NPWP (dd-mm-yyyy)"
              disableFuture={true}
              name="tanggalDaftarNPWP"
              value={selectedTglDaftarNpwp}
              onChange={(handleTglDaftarNpwp) => {
                formik.setFieldValue("tanggalDaftarNPWP", moment(handleTglDaftarNpwp).format('YYYYMMDD'));
                handleDateChange5(handleTglDaftarNpwp);
              }}
              onBlur={formik.handleBlur}
              maxDate={new Date()}
              format="dd-MM-yyyy"
            />
          </MuiPickersUtilsProvider>
        </div>

        {/* informasi keluarga */}
        <Typograph className={classes.subtitle2}>Informasi Keluarga</Typograph>
        <div>
          <TextField
            id="txtKartuKeluarga"
            label="Nomor Kartu Keluarga *"
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
            name="selectStatusHubungan"
            helperText={formik.touched.selectStatusHubungan && formik.errors.selectStatusHubungan ? formik.errors.selectStatusHubungan : null}
            error={formik.touched.selectStatusHubungan && formik.errors.selectStatusHubungan ? true : false}
            {...formik.getFieldProps('selectStatusHubungan')}
          >
            <MenuItem key=" " value="">Pilih Status Hubungan</MenuItem>
            <MenuItem key="1" value="1">KEPALA KELUARGA</MenuItem>
            <MenuItem key="2" value="2">PASANGAN KEPALA KELUARGA</MenuItem>
            <MenuItem key="3" value="3">ANAK</MenuItem>
            <MenuItem key="4" value="4">CUCU</MenuItem>
            <MenuItem key="5" value="5">MENANTU</MenuItem>
            <MenuItem key="6" value="6">ORANG TUA</MenuItem>
            <MenuItem key="7" value="7">MERTUA</MenuItem>
            <MenuItem key="8" value="8">FAMILI LAIN</MenuItem>
            <MenuItem key="9" value="9">LAINNYA</MenuItem>
          </TextField>
          <TextField
            id="standard-select-ibu"
            label="Nama Gadis Ibu Kandung *"
            type="input"
            name="namaIbuKandung"
            helperText={formik.touched.namaIbuKandung && formik.errors.namaIbuKandung ? formik.errors.namaIbuKandung : null}
            error={formik.touched.namaIbuKandung && formik.errors.namaIbuKandung ? true : false}
            value={formik.values.namaIbuKandung.toUpperCase()}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
          </TextField>
          <TextField
            id="txtEktpIbu"
            label="Nomor E-KTP Ibu Kandung "
            name="txtEktpIbu"
            helperText={formik.touched.txtEktpIbu && formik.errors.txtEktpIbu ? formik.errors.txtEktpIbu : null}
            error={formik.touched.txtEktpIbu && formik.errors.txtEktpIbu ? true : false}
            {...formik.getFieldProps('txtEktpIbu')}
          ><InputMask mask="999.999.999" maskChar="" />
          </TextField>
        </div>
        {/* informasi pernikahan */}
        <Typograph className={classes.subtitle2}>Informasi Pernikahan</Typograph>
        <div>
          <TextField
            select
            id="statusPernikahan"
            label="Status Pernikahan *"
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
            type="input"
            name="namaPasangan"
            helperText={formik.touched.namaPasangan && formik.errors.namaPasangan ? formik.errors.namaPasangan : null}
            error={formik.touched.namaPasangan && formik.errors.namaPasangan ? true : false}
            value={formik.values.namaPasangan.toUpperCase()}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
          </TextField>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              cancelLabel="Batal"
              okLabel="Pilih"
              id="tanggalPernikahan"
              label="Tanggal Pernikahan (dd-mm-yyyy)**"
              disableFuture={true}
              name="tanggalPernikahan"
              helperText={formik.touched.tanggalPernikahan && formik.errors.tanggalPernikahan ? formik.errors.tanggalPernikahan : null}
              error={formik.touched.tanggalPernikahan && formik.errors.tanggalPernikahan ? true : false}
              value={selectedTglMenikah}
              onChange={(handleTglMenikah) => {
                formik.setFieldValue("tanggalPernikahan", moment(handleTglMenikah).format('YYYYMMDD'));
                handleDateChange3(handleTglMenikah);
              }}
              onBlur={formik.handleBlur}
              maxDate={new Date()}
              format="dd-MM-yyyy"
            />
          </MuiPickersUtilsProvider>
          <MuiPickersUtilsProvider utils={DateFnsUtils} >
            <DatePicker
              cancelLabel="Batal"
              okLabel="Pilih"
              id="tglPerceraian"
              label="Tanggal Perceraian (dd-mm-yyyy)**"
              disableFuture={true}
              name="tglPerceraian"
              helperText={formik.touched.tglPerceraian && formik.errors.tglPerceraian ? formik.errors.tglPerceraian : null}
              error={formik.touched.tglPerceraian && formik.errors.tglPerceraian ? true : false}
              value={selectedTglBercerai}
              onChange={(handleTglBercerai) => {
                formik.setFieldValue("tglPerceraian", moment(handleTglBercerai).format('YYYYMMDD'));
                handleDateChange4(handleTglBercerai);
              }}
              onBlur={formik.handleBlur}
              maxDate={new Date()}
              format="dd-MM-yyyy"
            />
          </MuiPickersUtilsProvider>
        </div>

        {/* informasi ahli waris */}
        <Typograph className={classes.subtitle2}>Informasi Ahli Waris</Typograph>
        <div>
          <TextField
            id="namaAhliWaris"
            label="Nama Ahli Waris *"
            type="input"
            name="namaAhliWaris"
            helperText={formik.touched.namaAhliWaris && formik.errors.namaAhliWaris ? formik.errors.namaAhliWaris : null}
            error={formik.touched.namaAhliWaris && formik.errors.namaAhliWaris ? true : false}
            value={formik.values.namaAhliWaris.toUpperCase()}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
          </TextField>
          <TextField
            select
            id="statusAhliWaris"
            label="Status Ahli Waris *"
            name="statusAhliWaris"
            helperText={formik.touched.statusAhliWaris && formik.errors.statusAhliWaris ? formik.errors.statusAhliWaris : null}
            error={formik.touched.statusAhliWaris && formik.errors.statusAhliWaris ? true : false}
            {...formik.getFieldProps('statusAhliWaris')}
          >
            <MenuItem key=" " value="">Pilih Status Ahli Waris</MenuItem>
            <MenuItem key="1" value="1">KEPALA KELUARGA</MenuItem>
            <MenuItem key="2" value="2">PASANGAN KEPALA KELUARGA</MenuItem>
            <MenuItem key="3" value="3">ANAK</MenuItem>
            <MenuItem key="4" value="4">CUCU</MenuItem>
            <MenuItem key="5" value="5">MENANTU</MenuItem>
            <MenuItem key="6" value="6">ORANG TUA</MenuItem>
            <MenuItem key="7" value="7">MERTUA</MenuItem>
            <MenuItem key="8" value="8">FAMILI LAIN</MenuItem>
            <MenuItem key="9" value="9">LAINNYA</MenuItem>
          </TextField>
          <TextField
            id="noHpAhliWaris"
            label="Ponsel Ahli Waris *"
            type="input"
            name="noHpAhliWaris"
            helperText={formik.touched.noHpAhliWaris && formik.errors.noHpAhliWaris ? formik.errors.noHpAhliWaris : null}
            error={formik.touched.noHpAhliWaris && formik.errors.noHpAhliWaris ? true : false}
            value={formik.values.noHpAhliWaris}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
          </TextField>
        </div>
        {/* informasi investasi */}
        <Typograph className={classes.subtitle2}>Informasi Investasi dan Kepemilikan Rumah</Typograph>
        <div>
          <TextField
            select
            id="jenisInvestasi"
            label="Jenis Pilihan Investasi *"
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

        <div className={classes.button}>
          <Grid container direction="row" spacing={0}>
            <Grid
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
                onClick={(e) => { props.handleNext(e, 0) }}
                className={classes.buttonconfig}
                fullWidth
                variant="contained"
                color="primary"
                type="button"
              >Sebelumnya</Button>
              <Button
                type="button"
                className={classes.buttonconfig}
                fullWidth
                variant="contained"
                color="primary"
                disabled={value}
                onClick={(e) => { props.handleNext(e, 2) }}
              >Selanjutnya</Button>
            </Grid>

            <Grid
              item
              maxwidth="xl"
              // className={classes.myGrid} 
              spacing={0}
              xs={1} sm={1} md={1}
              justify="flex-end">
              <Button
                type="submit"
                //onClick={handleChange} 
                className={classes.buttonsimpan}
                fullWidth
                variant="contained"
                color="primary"
              >
                Simpan Sementara
          </Button>
            </Grid>
          </Grid>
        </div>
      </form>
    </div>
  )
}