import { TextField, MenuItem, Button, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography } from '@material-ui/core';
import Layout from '../components/layout';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Formik, Form, Field, useFormik } from 'formik';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { DatePicker } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import * as Yup from 'yup';
import moment from 'moment';
import InputMask from 'react-input-mask'
import { styled } from '@material-ui/core/styles';
import Dashboard from './Dashboard';
//import { linkVertical } from 'd3';


const MyTypography = styled(Typography)({
  // fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '600',
  // fontSize: '32px',
  lineHeight: '39px',
  color: '#008F4C'
});
const listISOCodeCountry = [
    {
        value: '',
        ISOCode: '',
        Country: 'Pilih Negara'
    },
    {
        value: '1',
        ISOCode: 'AF',
        Country: 'Afghanistan'
    },
    {
        value: '2',
        ISOCode: 'AX',
        Country: 'Åland Islands'
    }
]

const listProvinsi = [
    {id:"",nama:"Pilih Provinsi"},
	{id:"11",nama:"ACEH"},
	{id:"12",nama:"SUMATERA UTARA"},
	{id:"13",nama:"SUMATERA BARAT"},
]

const listKabupatenKota = 
[
{id:'',nama:'Pilih Kab/Kota'},
{id:'3301',nama:'KAB. CILACAP'},
{id:'3302',nama:'KAB. BANYUMAS'},
{id:'3303',nama:'KAB. PURBALINGGA'},
]
var HanyaAngka = /^[0-9]+$/;
const useStyles = makeStyles((theme) => ({
    myGrid: {
        //width: '100%',
        //maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        flexGrow: 1,
        height: '150%',
    },
    expand: {
        width: 900,
        flexGrow: 1,
        marginTop: 10,
    },
    expand2: {
        width: 900,
        marginTop: 0,
    },
    expand3: {
        marginLeft: 10,
        width: 900,
        marginTop: 30,
    },
    expandx: {
        marginLeft: 25,
        width: 900,
        marginTop: 0,
    },
    penanggungjawabpertama: {
        width: 900,
        marginTop: 30,
    },
    buttonGrid: {
        width: 900,
        marginTop: 5,
        direction: "row",
        alignItems: "center",
        marginBottom: theme.spacing(2),
    },
    button: {
        margin: theme.spacing(1, 0, 1),
       // borderRadius: 15,
        justify: 'center',
        marginTop: 5,
        width: 100,
        backgroundColor: '#008F4C',
    },
    profilePaper: {
        flexGrow: 1,
        letterSpacing: '1px',
        borderRadius: '0px',
        border: 'none',
        width: '100%',
    },

    ProfilePicture: {
        // marginRight: theme.spacing(0),
        // marginLeft: theme.spacing(0),
        justify: 'center',
        alignItems: 'stretch',
        height: 200,
        width: 200,
    },
    field: {
        marginLeft: theme.spacing(0),
        '& .MuiTextField-root': {
            justify: "space-between",
            margin: theme.spacing(1.5),
            width: '34ch',
        },
    },

}));
const initialValues = {
    namaInstansiPemberiKerja: '',
    nomorIdentitasPemberiKerja: '',
    tanggalDaftarPemberiKerja: '',
    klasifikasiBakuLapanganUsaha: '',
    skalaUsaha: '',
    jumlahPekerja: '',
    tanggalPendirianPerusahaan: '',
    tempatPendirianPerusahaan: '',
    kelompokPemberiKerja: '',
    npwp: '',
    noTelp: '',
    alamatEmail: '',
    statusPendaftaranPemberiKerja: '',
    statusPemberiKerja: '',
    statusInstansiPemberiKerja: '',
    statusBadanUsaha: '',

    //alamat domisili
    alamatDomisili: '',
    kabupatenKota: '',
    provinsiDomisili: '',
    kodePosDomisili: '',
    negaraDomisili: '',

    //alamat korespondensi
    alamatKorespondensi: '',
    kabupatenKorespondensi: '',
    provinsiKorespondensi: '',
    kodePosKorespondensi: '',
    negaraKorespondensi: '',

    //penanggungjawab utama
    namaPenanggungJawab1: '',
    jabatanPenanggungJawab1: '',
    noSelulerPenanggungJawab1: '',
    alamatEmailPenanggungJawab1: '',
    noTelpPenanggungJawab1: '',

    //penanggungjawab kedua
    namaPenanggungJawab2: '',
    jabatanPenanggungJawab2: '',
    noSelulerPenanggungJawab2: '',
    alamatEmailPenanggungJawab2: '',
    noTelpPenanggungJawab2: '',

    //pengelola pembayaran
    namaPengelolaPembayaran: '',
    jabatanPengelolaPembayaran: '',
    nomorSelulerPengelolaPembayaran: '',
    emailPengelolaPembayaran: '',
    nomorTeleponPengelolaPembayaran: '',


}

/*const onSubmit = values => {
    console.log('form data', values);
    alert("Berhasil Menyimpan Data")
}*/
//validasi
const validationSchema = Yup.object({
    namaInstansiPemberiKerja: Yup.string().required('harus diisi').max(255, 'maksimal 255 karakter'),
    nomorIdentitasPemberiKerja: Yup.string().nullable(true).matches(HanyaAngka, 'hanya angka').max(11, 'identitas pemberi kerja harus 11 karakter').min(11, 'identitas pemberi kerja harus 11 karakter'),
    tanggalDaftarPemberiKerja: Yup.string().nullable(true),
    tanggalPendirianPerusahaan: Yup.string().required('harus diisi'),
    klasifikasiBakuLapanganUsaha: Yup.string().nullable(true),
    skalaUsaha: Yup.string().required('harus diisi'),
    jumlahPekerja: Yup.string().required('harus diisi').matches(HanyaAngka, 'hanya angka').max(7, 'maksimal 7 digit angka'),
    tempatPendirianPerusahaan: Yup.string().required('harus diisi').max(100, 'maksimal 100 karakter'),
    kelompokPemberiKerja: Yup.string().required('harus diisi'),
    npwp: Yup.string().required('harus diisi').matches(/^[0-9.-]+$/, 'hanya angka').max(20, 'Nomor NPWP harus 15 karakter').min(20, 'Nomor NPWP harus 15 karakter'),
    noTelp: Yup.string().required('harus diisi').matches(HanyaAngka,'hanya angka').max(50, 'nomor telepon maksimal 50 karakter'),
    alamatEmail: Yup.string().required('harus diisi').email('email tidak valid').max(255, 'Maksimal 255 Karakter'),
    statusPendaftaranPemberiKerja: Yup.string().nullable(true),
    statusPemberiKerja: Yup.string().nullable(true),
    //ini conditional tapi ga ada keterangan syaratnya jadi saya buat mandatory
    statusInstansiPemberiKerja: Yup.string().required('harus diisi'),
    //sampe sini aja sih
    statusBadanUsaha: Yup.string().required('harus diisi'),

    //alamat domisili
    alamatDomisili: Yup.string().required('harus diisi').max(100, 'maksimal 100 karakter'),
    kabupatenKota: Yup.string().required('harus diisi'),
    provinsiDomisili: Yup.string().required('harus diisi'),
    kodePosDomisili: Yup.string().required('harus diisi').max(5, 'kode pos harus 5 karakter').min(5, 'kode pos harus 5 karakter'),
    negaraDomisili: Yup.string().required('harus diisi'),

    //alamat korespondensi
    alamatKorespondensi: Yup.string().nullable(true).max(100, 'maksimal 100 karakter'),
    kabupatenKorespondensi: Yup.string().nullable(true),
    provinsiKorespondensi: Yup.string().nullable(true),
    kodePosKorespondensi: Yup.string().nullable(true).max(5, 'kode pos harus 5 karakter').min(5, 'kode pos harus 5 karakter'),
    negaraKorespondensi: Yup.string().nullable(true),

    //penanggungjawab utama
    namaPenanggungJawab1: Yup.string().required('harus diisi').max(100, 'maksimal 100 karakter'),
    jabatanPenanggungJawab1: Yup.string().required('harus diisi').max(100, 'maksimal 100 karakter'),
    noSelulerPenanggungJawab1: Yup.string().required('harus diisi').matches(HanyaAngka,'hanya angka').max(30, 'maksimal 30 karakter'),
    alamatEmailPenanggungJawab1: Yup.string().required('harus diisi').email('Email tidak valid').max(255, 'panjang e-mail maksimal 255 karakter'),
    noTelpPenanggungJawab1: Yup.string().required('harus diisi').matches(HanyaAngka,'hanya angka').max(30, 'maksimal 30 karakter'),

    //penanggungjawab kedua
    namaPenanggungJawab2: Yup.string().required('harus diisi').max(100, 'maksimal 100 karakter'),
    jabatanPenanggungJawab2: Yup.string().required('harus diisi').max(100, 'maksimal 100 karakter'),
    noSelulerPenanggungJawab2: Yup.string().required('harus diisi').matches(HanyaAngka,'hanya angka').max(30, 'maksimal 30 karakter'),
    alamatEmailPenanggungJawab2: Yup.string().required('harus diisi').email('Email tidak valid').max(255, 'panjang e-mail maksimal 255 karakter'),
    noTelpPenanggungJawab2: Yup.string().required('harus diisi').matches(HanyaAngka,'hanya angka').max(30, 'maksimal 30 karakter'),

    //pengelola pembayaran
    namaPengelolaPembayaran: Yup.string().required('harus diisi').max(100,'maksimal 100 karakter'),
    jabatanPengelolaPembayaran: Yup.string().required('harus diisi').max(100,'maksimal 100 karakter'),
    nomorSelulerPengelolaPembayaran: Yup.string().required('harus diisi').matches(HanyaAngka,'hanya angka').max(30,'maksimal 30 karakter'),
    emailPengelolaPembayaran: Yup.string().required('harus diisi').email('Email tidak valid').max(255,'panjang e-mail maksimal 255 karakter'),
    nomorTeleponPengelolaPembayaran: Yup.string().required('harus diisi').matches(HanyaAngka,'hanya angka').max(30,'maksimal 30 karakter'),

})


export default function profilepemberikerja() {
    const [mode, setMode] = React.useState(false)
    const classes = useStyles();
    const formik = useFormik({
        initialValues,
        onSubmit: values => {
            console.log(values)
            handleSave()
        },
        validationSchema
    })
    //const [value, setValue] = React.useState(true)
    const handleSave = () => {
        alert("Data Berhasil Disimpan");
        return setMode(true);
    };

    const handleEdit = () => {
        return setMode(false)
    }

    //console.log(value)
    console.log('form errors', formik.errors)
    const [tanggalPendirianPerusahaan, handleDateChange5] = React.useState(null);
    return (
        <Layout>
            <div style={{backgroundColor:'white'}}> 
                <Grid container 
                    maxwidth="xl" className={classes.myGrid} spacing={0} xs={5} sm={5} md={5} justify="space-between"
                >
                    <Grid container item spacing={0} xs={1} sm={1} md={1}  direction="column">
                     <Grid item>   <Paper className={classes.profilePaper} elevation={0}>
                            <img src="assets/img/profileicon.png" className={classes.ProfilePicture} />
                            {/* <h6 className={classes.expandx} justify="flex-end" >keterangan:</h6>
                            <h6 className={classes.expandx} justify="flex-end" >field bertanda bintang (*) wajib diisi</h6> */}
                        </Paper></Grid>
                        <Grid item> <Typography align="center">Admin</Typography></Grid>

                    </Grid>
                    <Grid container item spacing={2} xs={7} sm={7} md={7}>
                            <Formik
                            initialValues={initialValues}
                            //validationSchema={validationSchema}
                            onSubmit={values => {
                                alert("Berhasil Menyimpan Data");
                            }}
                            >
                        <Form className={classes.field}
                        >
                            <div>
                               
                             <Grid item xs={12} style={{backgroundColor:'#BDBDBD'}}>   <MyTypography className={classes.expand3}>Informasi Pemberi Kerja</MyTypography></Grid>

                                <Field
                                    id="namaInstansiPemberiKerja"
                                    label="Nama Instansi Pemberi Kerja *"
                                    name="namaInstansiPemberiKerja"
                                    type="input"
                                    render={({field}) => <TextField {...field} />}
                                    helperText={formik.touched.namaInstansiPemberiKerja && formik.errors.namaInstansiPemberiKerja ? formik.errors.namaInstansiPemberiKerja : null}
                                    error={formik.touched.namaInstansiPemberiKerja && formik.errors.namaInstansiPemberiKerja ? true : false}
                                    {...formik.getFieldProps('namaInstansiPemberiKerja')}
                                disabled={mode}
                                >
                                </Field>
                                <TextField
                                    id="nomorIdentitasPemberiKerja"
                                    label="Nomor Identitas Pemberi Kerja"
                                    name="nomorIdentitasPemberiKerja"
                                    defaultValue="Diisi oleh Tapera"
                                    disabled='true'
                                >
                                </TextField>

                                <TextField
                                    id="tanggalDaftarPemberiKerja"
                                    label="Tanggal Daftar Pemberi Kerja"
                                    name="tanggalDaftarPemberiKerja"
                                    defaultValue="Diisi oleh Tapera"
                                    disabled='true'
                                >
                                </TextField>
                                <TextField
                                    id="klasifikasiBakuLapanganUsaha"
                                    label="Klasifikasi Baku Lapangan Usaha"
                                    name="klasifikasiBakuLapanganUsaha"
                                    helperText={formik.touched.klasifikasiBakuLapanganUsaha && formik.errors.klasifikasiBakuLapanganUsaha ? formik.errors.klasifikasiBakuLapanganUsaha : null}
                                    error={formik.touched.klasifikasiBakuLapanganUsaha && formik.errors.klasifikasiBakuLapanganUsaha ? true : false}
                                    {...formik.getFieldProps('klasifikasiBakuLapanganUsaha')}
                                disabled={mode}
                                >
                                </TextField>
                                <TextField
                                    select
                                    id="skalaUsaha"
                                    label="Skala Usaha (Berdasarkan Aset) *"
                                    name="skalaUsaha"
                                    helperText={formik.touched.skalaUsaha && formik.errors.skalaUsaha ? formik.errors.skalaUsaha : null}
                                    error={formik.touched.skalaUsaha && formik.errors.skalaUsaha ? true : false}
                                    {...formik.getFieldProps('skalaUsaha')}
                                disabled={mode}
                                >
                                    <MenuItem key=" " value="">Pilih Skala Usaha</MenuItem>
                                    <MenuItem key="1" value="1">Besar (lebih dari Rp.10 Milyar)</MenuItem>
                                    <MenuItem key="2" value="2">Menengah (Rp. 500 Juta s.d. 10 Milyar)</MenuItem>
                                    <MenuItem key="3" value="3">Kecil (Rp. 50 Juta s.d. 500 Juta)</MenuItem>
                                    <MenuItem key="4" value="4">Mikro (kurang dari Rp. 50 Juta)</MenuItem>
                                </TextField>
                                <TextField
                                    id="jumlahPekerja"
                                    label="Jumlah Pekerja *"
                                    name="jumlahPekerja"
                                    disabled={mode}
                                    helperText={formik.touched.jumlahPekerja && formik.errors.jumlahPekerja ? formik.errors.jumlahPekerja : null}
                                    error={formik.touched.jumlahPekerja && formik.errors.jumlahPekerja ? true : false}
                                    {...formik.getFieldProps('jumlahPekerja')}
                                >
                                </TextField>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <DatePicker
                                    
                                        id="tanggalPendirianPerusahaan"
                                        label="Tanggal Pendirian Perusahaan *"
                                        name="tanggalPendirianPerusahaan"
                                        disabled={mode}
                                        helperText={formik.touched.tanggalPendirianPerusahaan && formik.errors.tanggalPendirianPerusahaan ? formik.errors.tanggalPendirianPerusahaan : null}
                                        error={formik.touched.tanggalPendirianPerusahaan && formik.errors.tanggalPendirianPerusahaan ? true : false}
                                        {...formik.getFieldProps('tanggalPendirianPerusahaan')}
                                        value={tanggalPendirianPerusahaan}
                                        onChange={(handleTanggalPendirianPerusahaan) => {
                                            formik.setFieldValue("tanggalPendirianPerusahaan", moment(handleTanggalPendirianPerusahaan).format('YYYYMMDD'));
                                            handleDateChange5(handleTanggalPendirianPerusahaan);
                                        }}
                                        onBlur={formik.handleBlur}
                                        maxDate={new Date()}
                                        format="yyyy-MM-dd"
                                    />
                                </MuiPickersUtilsProvider>

                                <TextField
                                    id="tempatPendirianPerusahaan"
                                    label="Tempat Pendirian Perusahaan *"
                                    name="tempatPendirianPerusahaan"
                                    disabled={mode}
                                    helperText={formik.touched.tempatPendirianPerusahaan && formik.errors.tempatPendirianPerusahaan ? formik.errors.tempatPendirianPerusahaan : null}
                                    error={formik.touched.tempatPendirianPerusahaan && formik.errors.tempatPendirianPerusahaan ? true : false}
                                    {...formik.getFieldProps('tempatPendirianPerusahaan')}
                                >
                                </TextField>
                                <TextField
                                    id="kelompokPemberiKerja"
                                    label="Kelompok Pemberi Kerja *"
                                    name="kelompokPemberiKerja"
                                    disabled={mode}
                                    helperText={formik.touched.kelompokPemberiKerja && formik.errors.kelompokPemberiKerja ? formik.errors.kelompokPemberiKerja : null}
                                    error={formik.touched.kelompokPemberiKerja && formik.errors.kelompokPemberiKerja ? true : false}
                                    {...formik.getFieldProps('kelompokPemberiKerja')}
                                >
                                    <MenuItem key=" " value="">Pilih Kelompok Pemberi Kerja</MenuItem>
                                    <MenuItem key="1" value="1">Penyelenggara Negara</MenuItem>
                                    <MenuItem key="2" value="2">Bukan Penyelenggara Negara</MenuItem>
                                </TextField>
                                <InputMask
        mask={"99.999.999.9-999.999"}
        maskChar=""
        onChange={formik.handleChange}
        value={formik.values.npwp || ''}
        disabled={mode}
      >
        {() => (
                                <TextField
                                    id="npwp"
                                    label="NPWP *"
                                    name="npwp"
                                    type="input"
                                    
                                    helperText={formik.touched.npwp && formik.errors.npwp ? formik.errors.npwp : null}
                                    error={formik.touched.npwp && formik.errors.npwp ? true : false}
                                   
                                >
                                </TextField>
                                )}
                                </InputMask>
                                <TextField
                                    id="noTelp"
                                    label="Nomor Telepon *"
                                    name="noTelp"
                                    disabled={mode}
                                    helperText={formik.touched.noTelp && formik.errors.noTelp ? formik.errors.noTelp : null}
                                    error={formik.touched.noTelp && formik.errors.noTelp ? true : false}
                                    {...formik.getFieldProps('noTelp')}
                                >
                                </TextField>
                                <TextField
                                    id="alamatEmail"
                                    label="Alamat E-Mail *"
                                    name="alamatEmail"
                                    disabled={mode}
                                    helperText={formik.touched.alamatEmail && formik.errors.alamatEmail ? formik.errors.alamatEmail : null}
                                    error={formik.touched.alamatEmail && formik.errors.alamatEmail ? true : false}
                                    {...formik.getFieldProps('alamatEmail')}
                                >
                                </TextField>

                                <TextField
                                    id="statusPendaftaranPemberiKerja"
                                    label="Status Pendaftaran Pemberi Kerja *"
                                    name="statusPendaftaranPemberiKerja"
                                    disabled='true'
                                    defaultValue="Diisi oleh Tapera"
                                // helperText={formik.touched.statusPendaftaranPemberiKerja && formik.errors.statusPendaftaranPemberiKerja ? formik.errors.statusPendaftaranPemberiKerja : null}
                                // error={formik.touched.statusPendaftaranPemberiKerja && formik.errors.statusPendaftaranPemberiKerja ? true : false}
                                // {...formik.getFieldProps('statusPendaftaranPemberiKerja')}
                                >
                                </TextField>
                                <TextField
                                    id="statusPemberiKerja"
                                    label="Status Pemberi Kerja *"
                                    name="statusPemberiKerja"
                                    disabled='true'
                                    defaultValue="Diisi oleh Tapera"
                                // helperText={formik.touched.statusPemberiKerja && formik.errors.statusPemberiKerja ? formik.errors.statusPemberiKerja : null}
                                // error={formik.touched.statusPemberiKerja && formik.errors.statusPemberiKerja ? true : false}
                                // {...formik.getFieldProps('statusPemberiKerja')}
                                >
                                </TextField>
                                <TextField
                                    select
                                    id="statusInstansiPemberiKerja"
                                    label="Status Instansi Pemberi Kerja *"
                                    name="statusInstansiPemberiKerja"
                                    disabled={mode}
                                    helperText={formik.touched.statusInstansiPemberiKerja && formik.errors.statusInstansiPemberiKerja ? formik.errors.statusInstansiPemberiKerja : null}
                                    error={formik.touched.statusInstansiPemberiKerja && formik.errors.statusInstansiPemberiKerja ? true : false}
                                    {...formik.getFieldProps('statusInstansiPemberiKerja')}
                                >
                                    <MenuItem key=" " value="">Pilih Status Instansi Pemberi Kerja</MenuItem>
                                    <MenuItem key="1" value="1">Pusat</MenuItem>
                                    <MenuItem key="2" value="2">Cabang/Daerah</MenuItem>
                                    <MenuItem key="3" value="3">Anak Perusahaan</MenuItem>
                                    <MenuItem key="4" value="4">Cabang Anak Perusahaan</MenuItem>

                                </TextField>
                                <TextField
                                    select
                                    id="statusBadanUsaha"
                                    label="Status Badan Usaha *"
                                    name="statusBadanUsaha"
                                    disabled={mode}
                                    helperText={formik.touched.statusBadanUsaha && formik.errors.statusBadanUsaha ? formik.errors.statusBadanUsaha : null}
                                    error={formik.touched.statusBadanUsaha && formik.errors.statusBadanUsaha ? true : false}
                                    {...formik.getFieldProps('statusBadanUsaha')}
                                >
                                    <MenuItem key=" " value="">Pilih Status Badan Usaha</MenuItem>
                                    <MenuItem key="1" value="1">Badan Usaha Milik Negara</MenuItem>
                                    <MenuItem key="2" value="2">Badan Usaha Milik Daerah</MenuItem>
                                    <MenuItem key="3" value="3">Swasta Nasional</MenuItem>
                                    <MenuItem key="4" value="4">Swasta Asing</MenuItem>
                                    <MenuItem key="5" value="5">Perorangan</MenuItem>
                                    <MenuItem key="6" value="6">Firma</MenuItem>
                                    <MenuItem key="7" value="7">Persekutuan Komanditer (CV)</MenuItem>
                                    <MenuItem key="8" value="8">Yayasan</MenuItem>
                                    <MenuItem key="9" value="9">Koperasi</MenuItem>
                                    <MenuItem key="10" value="10">Lainnya</MenuItem>

                                </TextField>

                                {/* <Typography id='titleAlamatDomisili'>
                                            Alamat Domisili
                                        </Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <div>
                                        <TextField
                                        id="alamatDomisili"
                                        label="Alamat Domisili"
                                        name="alamatDomisili"
                                        //disabled={mode}
                                    >
                                    </TextField>
                                    <TextField
                                        id="kodePosDomisili"
                                        label="Kode Pos Domisili"
                                        name="kodePosDomisili"
                                        //disabled={mode}
                                    >
                                    </TextField>
                                    </div>
                                    <div>
                                    <TextField
                                        id="kabupatenKotaDomisili"
                                        label="Kabupaten/Kota Domisili"
                                        name="kabupatenKota"
                                        //disabled={mode}
                                    >
                                    </TextField>
                                    <TextField
                                        id="negaraDomisili"
                                        label="Negara Domisili"
                                        name="negaraDomisili"
                                        //disabled={mode}
                                    >
                                    </TextField>
                                    
                                    
                                    </div>
                                    <div>
                                    <TextField
                                        id="provinsiDomisili"
                                        label="Provinsi Domisili"
                                        name="provinsiDomisili"
                                        //disabled={mode}
                                    >
                                    </TextField>
                                        </div>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel> */}


                                <div className={classes.expand2}>
                                
                                  <Grid item xs={12} style={{backgroundColor:'#BDBDBD'}}>  <MyTypography className={classes.expand3}>Alamat Domisili</MyTypography></Grid>
                                    <TextField
                                        id="alamatDomisili"
                                        label="Alamat Domisili *"
                                        name="alamatDomisili"
                                        disabled={mode}
                                        helperText={formik.touched.alamatDomisili && formik.errors.alamatDomisili ? formik.errors.alamatDomisili : null}
                                        error={formik.touched.alamatDomisili && formik.errors.alamatDomisili ? true : false}
                                        {...formik.getFieldProps('alamatDomisili')}
                                    >
                                    </TextField>
                                    <TextField
                                    select
                                        id="kabupatenKotaDomisili"
                                        label="Kabupaten/Kota Domisili *"
                                        name="kabupatenKota"
                                        disabled={mode}
                                        helperText={formik.touched.kabupatenKota && formik.errors.kabupatenKota ? formik.errors.kabupatenKota : null}
                                        error={formik.touched.kabupatenKota && formik.errors.kabupatenKota ? true : false}
                                        {...formik.getFieldProps('kabupatenKota')}
                                    >
                                         {listKabupatenKota.map((option) => (
                                            <MenuItem key={option.id} value={option.nama}  >
                                                {option.nama}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        id="kodePosDomisili"
                                        label="Kode Pos Domisili *"
                                        name="kodePosDomisili"
                                        disabled={mode}
                                        helperText={formik.touched.kodePosDomisili && formik.errors.kodePosDomisili ? formik.errors.kodePosDomisili : null}
                                        error={formik.touched.kodePosDomisili && formik.errors.kodePosDomisili ? true : false}
                                        {...formik.getFieldProps('kodePosDomisili')}
                                    >
                                    </TextField>
                                    <TextField
                                    select
                                        id="provinsiDomisili"
                                        label="Provinsi Domisili *"
                                        name="provinsiDomisili"
                                        disabled={mode}
                                        helperText={formik.touched.provinsiDomisili && formik.errors.provinsiDomisili ? formik.errors.provinsiDomisili : null}
                                        error={formik.touched.provinsiDomisili && formik.errors.provinsiDomisili ? true : false}
                                        {...formik.getFieldProps('provinsiDomisili')}
                                    >
                                         {listProvinsi.map((option) => (
                                            <MenuItem key={option.id} value={option.nama}  >
                                                {option.nama}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        select
                                        id="negaraDomisili"
                                        label="Negara Domisili *"
                                        name="negaraDomisili"
                                        disabled={mode}
                                        helperText={formik.touched.negaraDomisili && formik.errors.negaraDomisili ? formik.errors.negaraDomisili : null}
                                        error={formik.touched.negaraDomisili && formik.errors.negaraDomisili ? true : false}
                                        {...formik.getFieldProps('negaraDomisili')}
                                    >
                                        {listISOCodeCountry.map((option) => (
                                            <MenuItem key={option.value} value={option.ISOCode}  >
                                                {option.Country}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </div>
                                <ExpansionPanel className={classes.expand}>
                                    <ExpansionPanelSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="expandIcon"

                                    >
                                        <MyTypography id='titleAlamatKorespondensi'>
                                            Alamat Korespondensi
                                        </MyTypography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <div>
                                            <TextField
                                                id="alamatKorespondensi"
                                                label="Alamat Korespondensi"
                                                name="alamatKorespondensi"
                                                disabled={mode}
                                                helperText={formik.touched.alamatKorespondensi && formik.errors.alamatKorespondensi ? formik.errors.alamatKorespondensi : null}
                                                error={formik.touched.alamatKorespondensi && formik.errors.alamatKorespondensi ? true : false}
                                                {...formik.getFieldProps('alamatKorespondensi')}
                                            >
                                            </TextField>
                                            <TextField
                                                id="kodePosKorespondensi"
                                                label="Kode Pos Korespondensi"
                                                name="kodePosKorespondensi"
                                                disabled={mode}
                                                helperText={formik.touched.kodePosKorespondensi && formik.errors.kodePosKorespondensi ? formik.errors.kodePosKorespondensi : null}
                                                error={formik.touched.kodePosKorespondensi && formik.errors.kodePosKorespondensi ? true : false}
                                                {...formik.getFieldProps('kodePosKorespondensi')}
                                            >
                                            </TextField>
                                        </div>
                                        <div>
                                            <TextField
                                            select
                                                id="kabupatenKorespondensi"
                                                label="Kabupaten/Kota Korespondensi"
                                                name="kabupatenKotaKorespondensi"
                                                disabled={mode}
                                                helperText={formik.touched.kabupatenKotaKorespondensi && formik.errors.kabupatenKotaKorespondensi ? formik.errors.kabupatenKotaKorespondensi : null}
                                                error={formik.touched.kabupatenKotaKorespondensi && formik.errors.kabupatenKotaKorespondensi ? true : false}
                                                {...formik.getFieldProps('kabupatenKotaKorespondensi')}
                                            >
                                                 {listKabupatenKota.map((option) => (
                                                <MenuItem key={option.id} value={option.nama}  >
                                                {option.nama}
                                                </MenuItem>
                                        ))}
                                            </TextField>
                                            <TextField
                                            select
                                                id="negaraKorespondensi"
                                                label="Negara Korespondensi"
                                                name="negaraKorespondensi"
                                                disabled={mode}
                                                helperText={formik.touched.negaraKorespondensi && formik.errors.negaraKorespondensi ? formik.errors.negaraKorespondensi : null}
                                                error={formik.touched.negaraKorespondensi && formik.errors.negaraKorespondensi ? true : false}
                                                {...formik.getFieldProps('negaraKorespondensi')}
                                            >
                                                 {listISOCodeCountry.map((option) => (
                                            <MenuItem key={option.value} value={option.ISOCode}  >
                                                {option.Country}
                                            </MenuItem>
                                        ))}
                                            </TextField>


                                        </div>
                                        <div>
                                            <TextField
                                            select
                                                id="provinsiKorespondensi"
                                                label="Provinsi Korespondensi"
                                                name="provinsiKorespondensi"
                                                disabled={mode}
                                                helperText={formik.touched.provinsiKorespondensi && formik.errors.provinsiKorespondensi ? formik.errors.provinsiKorespondensi : null}
                                                error={formik.touched.provinsiKorespondensi && formik.errors.provinsiKorespondensi ? true : false}
                                                {...formik.getFieldProps('provinsiKorespondensi')}
                                            >
                                                 {listProvinsi.map((option) => (
                                            <MenuItem key={option.id} value={option.nama}  >
                                                {option.nama}
                                            </MenuItem>
                                        ))}
                                            </TextField>
                                        </div>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>

                                <ExpansionPanel className={classes.expand}>
                                    <ExpansionPanelSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="expandIcon"

                                    >
                                        <MyTypography id='titlePenanggungJawabPertama'>
                                            Penanggung Jawab Pertama
                                        </MyTypography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <div>
                                            <TextField
                                                id="namaPenanggungJawab1"
                                                label="Nama Lengkap *"
                                                name="namaPenanggungJawab1"
                                                disabled={mode}
                                                helperText={formik.touched.namaPenanggungJawab1 && formik.errors.namaPenanggungJawab1 ? formik.errors.namaPenanggungJawab1 : null}
                                                error={formik.touched.namaPenanggungJawab1 && formik.errors.namaPenanggungJawab1 ? true : false}
                                                {...formik.getFieldProps('namaPenanggungJawab1')}
                                            >
                                            </TextField>
                                            <TextField
                                                id="noSelulerPenanggungJawab1"
                                                label="Nomor Seluler *"
                                                name="noSelulerPenanggungJawab1"
                                                disabled={mode}
                                                helperText={formik.touched.noSelulerPenanggungJawab1 && formik.errors.noSelulerPenanggungJawab1 ? formik.errors.noSelulerPenanggungJawab1 : null}
                                                error={formik.touched.noSelulerPenanggungJawab1 && formik.errors.noSelulerPenanggungJawab1 ? true : false}
                                                {...formik.getFieldProps('noSelulerPenanggungJawab1')}
                                            >
                                            </TextField>

                                        </div>
                                        <div>
                                            <TextField
                                                id="jabatanPenanggungJawab1"
                                                label="Jabatan *"
                                                name="jabatanPenanggungJawab1"
                                                disabled={mode}
                                                helperText={formik.touched.jabatanPenanggungJawab1 && formik.errors.jabatanPenanggungJawab1 ? formik.errors.jabatanPenanggungJawab1 : null}
                                                error={formik.touched.jabatanPenanggungJawab1 && formik.errors.jabatanPenanggungJawab1 ? true : false}
                                                {...formik.getFieldProps('jabatanPenanggungJawab1')}
                                            >
                                            </TextField>
                                            <TextField
                                                id="alamatEmailPenanggungJawab1"
                                                label="Alamat E-Mail *"
                                                name="alamatEmailPenanggungJawab1"
                                                disabled={mode}
                                                helperText={formik.touched.alamatEmailPenanggungJawab1 && formik.errors.alamatEmailPenanggungJawab1 ? formik.errors.alamatEmailPenanggungJawab1 : null}
                                                error={formik.touched.alamatEmailPenanggungJawab1 && formik.errors.alamatEmailPenanggungJawab1 ? true : false}
                                                {...formik.getFieldProps('alamatEmailPenanggungJawab1')}
                                            >
                                            </TextField>


                                        </div>
                                        <div>
                                            <TextField
                                                id="noTelpPenanggungJawab1"
                                                label="Nomor Telepon *"
                                                name="noTelpPenanggungJawab1"
                                                disabled={mode}
                                                helperText={formik.touched.noTelpPenanggungJawab1 && formik.errors.noTelpPenanggungJawab1 ? formik.errors.noTelpPenanggungJawab1 : null}
                                                error={formik.touched.noTelpPenanggungJawab1 && formik.errors.noTelpPenanggungJawab1 ? true : false}
                                                {...formik.getFieldProps('noTelpPenanggungJawab1')}
                                            >
                                            </TextField>

                                        </div>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>

                            </div>

                            
                            <ExpansionPanel className={classes.expand}>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="expandIcon"

                                >
                                    <MyTypography id='titlePenanggungJawabKedua'>
                                        Penanggung Jawab Kedua
                                        </MyTypography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <div>
                                        <TextField
                                            id="namaPenanggungJawab2"
                                            label="Nama Lengkap *"
                                            name="namaPenanggungJawab2"
                                            disabled={mode}
                                            type="input"
                                            helperText={formik.touched.namaPenanggungJawab2 && formik.errors.namaPenanggungJawab2 ? formik.errors.namaPenanggungJawab2 : null}
                                            error={formik.touched.namaPenanggungJawab2 && formik.errors.namaPenanggungJawab2 ? true : false}
                                            {...formik.getFieldProps('namaPenanggungJawab2')}
                                        >
                                        </TextField>
                                        <TextField
                                            id="noSelulerPenanggungJawab2"
                                            label="Nomor Seluler *"
                                            name="noSelulerPenanggungJawab2"
                                            disabled={mode}
                                            type="input"
                                            helperText={formik.touched.noSelulerPenanggungJawab2 && formik.errors.noSelulerPenanggungJawab2 ? formik.errors.noSelulerPenanggungJawab2 : null}
                                            error={formik.touched.noSelulerPenanggungJawab2 && formik.errors.noSelulerPenanggungJawab2 ? true : false}
                                            {...formik.getFieldProps('noSelulerPenanggungJawab2')}
                                        >
                                        </TextField>

                                    </div>
                                    <div>
                                        <TextField
                                            id="jabatanPenanggungJawab2"
                                            label="Jabatan *"
                                            name="jabatanPenanggungJawab2"
                                            disabled={mode}
                                            type="input"
                                            helperText={formik.touched.jabatanPenanggungJawab2 && formik.errors.jabatanPenanggungJawab2 ? formik.errors.jabatanPenanggungJawab2 : null}
                                            error={formik.touched.jabatanPenanggungJawab2 && formik.errors.jabatanPenanggungJawab2 ? true : false}
                                            {...formik.getFieldProps('jabatanPenanggungJawab2')}
                                        >
                                        </TextField>
                                        <TextField
                                            id="alamatEmailPenanggungJawab2"
                                            label="Alamat E-Mail *"
                                            name="alamatEmailPenanggungJawab2"
                                            disabled={mode}
                                            type="input"
                                            helperText={formik.touched.alamatEmailPenanggungJawab2 && formik.errors.alamatEmailPenanggungJawab2 ? formik.errors.alamatEmailPenanggungJawab2 : null}
                                            error={formik.touched.alamatEmailPenanggungJawab2 && formik.errors.alamatEmailPenanggungJawab2 ? true : false}
                                            {...formik.getFieldProps('alamatEmailPenanggungJawab2')}
                                        >
                                        </TextField>
                                    </div>
                                    <div>
                                        <TextField
                                            id="noTelpPenanggungJawab2"
                                            label="Nomor Telepon *"
                                            name="noTelpPenanggungJawab2"
                                            disabled={mode}
                                            type="input"
                                            helperText={formik.touched.noTelpPenanggungJawab2 && formik.errors.noTelpPenanggungJawab2 ? formik.errors.noTelpPenanggungJawab2 : null}
                                            error={formik.touched.noTelpPenanggungJawab2 && formik.errors.noTelpPenanggungJawab2 ? true : false}
                                            {...formik.getFieldProps('noTelpPenanggungJawab2')}
                                        >
                                        </TextField>


                                    </div>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel className={classes.expand}>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="expandIcon"

                                >
                                    <MyTypography id='titlePengelolaPembayaranSimpananPeserta'>
                                        Pengelola Pembayaran Simpanan Peserta
                                        </MyTypography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <div>
                                        <TextField
                                            id="namaPengelolaPembayaran"
                                            label="Nama Lengkap *"
                                            name="namaPengelolaPembayaran"
                                            disabled={mode}
                                            type="input"
                                            helperText={formik.touched.namaPengelolaPembayaran && formik.errors.namaPengelolaPembayaran ? formik.errors.namaPengelolaPembayaran : null}
                                            error={formik.touched.namaPengelolaPembayaran && formik.errors.namaPengelolaPembayaran ? true : false}
                                            {...formik.getFieldProps('namaPengelolaPembayaran')}
                                        >
                                        </TextField>
                                        <TextField
                                            id="nomorSelulerPengelolaPembayaran"
                                            label="Nomor Seluler *"
                                            name="nomorSelulerPengelolaPembayaran"
                                            disabled={mode}
                                            type="input"
                                            helperText={formik.touched.nomorSelulerPengelolaPembayaran && formik.errors.nomorSelulerPengelolaPembayaran ? formik.errors.nomorSelulerPengelolaPembayaran : null}
                                            error={formik.touched.nomorSelulerPengelolaPembayaran && formik.errors.nomorSelulerPengelolaPembayaran ? true : false}
                                            {...formik.getFieldProps('nomorSelulerPengelolaPembayaran')}
                                        >
                                        </TextField>
                                    </div>
                                    <div>
                                        <TextField
                                            id="jabatanPengelolaPembayaran"
                                            label="Jabatan *"
                                            name="jabatanPengelolaPembayaran"
                                            disabled={mode}
                                            type="input"
                                            helperText={formik.touched.jabatanPengelolaPembayaran && formik.errors.jabatanPengelolaPembayaran ? formik.errors.jabatanPengelolaPembayaran : null}
                                            error={formik.touched.jabatanPengelolaPembayaran && formik.errors.jabatanPengelolaPembayaran ? true : false}
                                            {...formik.getFieldProps('jabatanPengelolaPembayaran')}
                                        >
                                        </TextField>
                                        <TextField
                                            id="emailPengelolaPembayaran"
                                            label="Alamat E-Mail *"
                                            name="emailPengelolaPembayaran"
                                            disabled={mode}
                                            type="input"
                                            helperText={formik.touched.emailPengelolaPembayaran && formik.errors.emailPengelolaPembayaran ? formik.errors.emailPengelolaPembayaran : null}
                                            error={formik.touched.emailPengelolaPembayaran && formik.errors.emailPengelolaPembayaran ? true : false}
                                            {...formik.getFieldProps('emailPengelolaPembayaran')}
                                        >
                                        </TextField>
                                    </div>
                                    <div>
                                        <TextField
                                            id="nomorTeleponPengelolaPembayaran"
                                            label="Nomor Telepon *"
                                            name="nomorTeleponPengelolaPembayaran"
                                            disabled={mode}
                                            type="input"
                                            helperText={formik.touched.nomorTeleponPengelolaPembayaran && formik.errors.nomorTeleponPengelolaPembayaran ? formik.errors.nomorTeleponPengelolaPembayaran : null}
                                            error={formik.touched.nomorTeleponPengelolaPembayaran && formik.errors.nomorTeleponPengelolaPembayaran ? true : false}
                                            {...formik.getFieldProps('nomorTeleponPengelolaPembayaran')}
                                        >
                                        </TextField>

                                    </div>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <div>
                                <Grid container justify="space-between" className={classes.buttonGrid}>
                                    <Grid container item spacing={0} xs={3} sm={3} md={3} justify="space-between" marginRight={10} className={classes.buttonGrid}>
                                         <Button
                                            className={classes.button}
                                            id="btnEdit"
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                            onClick={handleEdit}
                                            disabled={mode == false ? true : false}
                                        > Ubah </Button>
                                        <Button
                                            type="button"
                                            onClick={() => formik.resetForm()}
                                            className={classes.button}
                                            id="btnCancel"
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                            disabled={mode}
                                        > Batal </Button>
                                    </Grid>
                                    <Grid container item spacing={0} xs={4} sm={4} md={4} justify="flex-start" className={classes.buttonGrid}>
                                    </Grid>
                                    <Grid container item spacing={0} xs={3} sm={3} md={3} justify="flex-end" className={classes.buttonGrid}>
                                        <Button
                                            type="submit"
                                            className={classes.button}
                                            id="btnSimpan"
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                            disabled={mode}
                                        > Simpan </Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </Form>
                        </Formik>
                    </Grid>
                </Grid>
            </div>
        </Layout>
    )
}

profilepemberikerja.Layout=Dashboard;