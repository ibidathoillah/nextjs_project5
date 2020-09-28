import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { MenuItem, Grid, Button, Typography } from '@material-ui/core';
import { useFormik, setNestedObjectValues } from 'formik'
import * as Yup from 'yup';
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { DatePicker } from "@material-ui/pickers"
import DateFnsUtils from '@date-io/date-fns';
import moment from 'moment';
import NumberFormat from "react-number-format";
// import DatePicker from "react-datepicker"
// require('react-datepicker/dist/react-datepicker.css')
import { styled } from '@material-ui/core/styles';
import { DisplayFormikState } from './helper';
import * as Svc from '../services/formdatapekerjaanSvc';

const MyTypography = styled(Typography)({
  // fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '600',
  // fontSize: '32px',
  lineHeight: '39px',
  color: '#008F4C'
});

const MyTextField = styled(TextField)({
  margin: 2,
  width: '47ch',
});

const listPekerjan = [
  {
    value: '',
    label: 'Pilih Pekerjaan ',
  },
  {
    value: '1',
    label: 'ASN',
  },
  {
    value: '2',
    label: 'TNI',
  },
  {
    value: '3',
    label: 'POLRI',
  },
  {
    value: '4',
    label: 'BUMN',
  },
  {
    value: '5',
    label: 'BUMD',
  },
  {
    value: '6',
    label: 'BUMDES',
  },
  {
    value: '7',
    label: 'SWASTA',
  },
  {
    value: '8',
    label: 'MANDIRI',
  },
];

const listKedudukanHukum = [
  {
    kode: '',
    nama: 'Pilih Kedudukan Hukum',
    keterangan: '',
    aturan: ''
  },
  {
    kode: '101',
    nama: 'AKTIF',
    keterangan: '',
    aturan: ''
  },
  {
    kode: '102',
    nama: 'CTLN',
    keterangan: '',
    aturan: ''
  },
]

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

const initialValues = {
  selectPekerjaan: '1',
  txtNip: '901823123901823123',
  txtInstitusi: 'Kepolisian',
  txtJabatan: 'Mayor Jenderal',
  txtPangkat: 'Bintang 1',
  selectGolongan: '1',
  selectRuang: '2',
  tglMulaikerja: '2020-07-07',
  tglPensiun: '2020-07-07',
  txtBatasUsiaPensiun: '70',
  txtMasaKerja: '21',
  txtTotalMasaKerja: '21',
  txtSisaMasaKerja: '2',
  txtGajiPokok: '7000000000',
  selectTunjanganKeluarga: '6',
  // txtPersentaseTunjanganKeluarga: '',
  txtNilaiTunjanganKeluarga: '700000000',
  txtIdPns: '012398124',
  tglTmt: '2020-12-12',
  txtIdInstansiInduk: '7',
  txtIdSatuanKerjaInduk: '7',
  txtIdLokasiKerja: '77',
  selectStatus: '1',
  txtIdKedudukanHukum: '101',
  txtTotalPenghasilan: '7',
  txtNilaiTunjanganJabatan:'7',
  txtNilaiTunjanganProfesi:'7',
  txtNilaiTunjanganKinerja: '7',
  txtTunjanganLain3:'7',
  txtTunjanganLain2:'7',
  txtTunjanganLain1:'7',
  txtNipLama: '777777777',
  tglTmtPNS:'7',
  txtIdInstansiKerja:'7',
  txtIdUnitKerja:'7',
  txtIdJenisJabatan:'7',
  txtIdJabatanFungsional:'7',
  txtIdJabatanStruktural:'7',
  txtIdJabatanFungsionalUmum:'7',
  txtIdGolonganTerakhir:'7',
  txtIdGolongan:'7',
  noSK:'7',
  tglSK:'7',
  tmtGolongan:'7',
  masaKerjaGolonganTahun:'77',
  masaKerjaGolonganBulan:'77',
  
}

const onSubmit = values => {
  console.log('form data', values);
  alert("Data Berhasil disimpan");
}

const validationSchema = Yup.object({
  selectPekerjaan: Yup.string().required("harus diisi"),
  txtInstitusi: Yup.mixed().when('selectPekerjaan', {
    is: '1',
    then: Yup.string().required('wajib diisi').max(255, 'maksimal 255 karakter'),
    otherwise: Yup.string().nullable(true).max(255, 'maksimal 255 karakter')
  }),
  txtJabatan: Yup.mixed().when('selectPekerjaan', {
    is: '1',
    then: Yup.string().required("harus diisi").max(255, 'maksimal 255 karakter'),
    otherwise: Yup.string().nullable(true).max(255, 'maksimal 255 karakter')
  }),
  txtNip: Yup.string().nullable(true).matches(/^[0-9]+$/, 'hanya angka').max(18, 'NIP 18 karakter').min(18, 'NIP 18 karakter'),
  txtNipLama: Yup.string().nullable(true).matches(/^[0-9]+$/, 'hanya angka').max(9, 'NIP Lama 9 harus karakter').min(9, 'NIP Lama harus 9 karakter'),
  txtPangkat: Yup.mixed().when('selectPekerjaan', {
    is: '1',
    then: Yup.string().nullable(true).max(255, 'maksimal 255 karakter'),
    otherwise: Yup.string().when('selectPekerjaan', {
      is: '2',
      then: Yup.string().required("harus diisi").max(255, 'maksimal 255 karakter'),
      otherwise: Yup.string().when('selectPekerjaan', {
        is: '3',
        then: Yup.string().required("harus diisi").max(255, 'maksimal 255 karakter'),
        otherwise: Yup.string().nullable(true).max(255, 'maksimal 255 karakter')
      })
    })
  }),
  selectGolongan: Yup.mixed().when('selectPekerjaan', {
    is: '1',
    then: Yup.string().required("harus diisi"),
    otherwise: Yup.string().nullable(true)
  }),
  noSK: Yup.mixed().when('selectPekerjaan', {
    is: '1',
    then: Yup.string().required("harus diisi"),
    otherwise: Yup.string().nullable(true)
  }),
  masaKerjaGolonganBulan: Yup.mixed().when('selectPekerjaan', {
    is: '1',
    then: Yup.string().required("harus diisi"),
    otherwise: Yup.string().nullable(true)
  }),
  masaKerjaGolonganTahun: Yup.mixed().when('selectPekerjaan', {
    is: '1',
    then: Yup.string().required("harus diisi"),
    otherwise: Yup.string().nullable(true)
  }),
  tglSK: Yup.mixed().when('selectPekerjaan', {
    is: '1',
    then: Yup.string().required("harus diisi"),
    otherwise: Yup.string().nullable(true)
  }),
  tmtGolongan: Yup.mixed().when('selectPekerjaan', {
    is: '1',
    then: Yup.string().required("harus diisi"),
    otherwise: Yup.string().nullable(true)
  }),
  selectRuang: Yup.mixed().when('selectPekerjaan', {
    is: '1',
    then: Yup.string().required("harus diisi"),
    otherwise: Yup.string().nullable(true)
  }),
  tglMulaikerja: Yup.mixed().when('selectPekerjaan', {
    is: '8',
    then: Yup.string().nullable(true),
    otherwise: Yup.string().required("harus diisi")
  }),
  tglPensiun: Yup.mixed().when('selectPekerjaan', {
    is: '8',
    then: Yup.string().nullable(true),
    otherwise: Yup.string().required("harus diisi")
  }),
  txtBatasUsiaPensiun: Yup.mixed().when('selectPekerjaan', {
    is: '8',
    then: Yup.string().nullable(true).matches(/^[0-9]+$/, 'hanya angka').max(2, 'diisi 2 digit').min(2, 'diisi 2 digit'),
    otherwise: Yup.string().required("harus diisi").matches(/^[0-9]+$/, 'hanya angka').max(2, 'diisi 2 digit').min(2, 'diisi 2 digit')
  }),
  txtMasaKerja: Yup.mixed().when('selectPekerjaan', {
    is: '8',
    then: Yup.string().nullable(true).matches(/^[0-9]+$/, 'hanya angka').max(50, "Maksimal 50 Karakter"),
    otherwise: Yup.string().required("harus diisi").matches(/^[0-9]+$/, 'hanya angka').max(50, "Maksimal 50 Karakter")
  }),
  txtTotalMasaKerja: Yup.mixed().when('selectPekerjaan', {
    is: '8',
    then: Yup.string().nullable(true).matches(/^[0-9 a-zA-Z]+$/, 'format input tidak sesuai').max(50, "Maksimal 50 Karakter"),
    otherwise: Yup.string().required("harus diisi").matches(/^[0-9 a-zA-Z]+$/, 'format input tidak sesuai').max(50, "Maksimal 50 Karakter")
  }),
  txtSisaMasaKerja: Yup.mixed().when('selectPekerjaan', {
    is: '8',
    then: Yup.string().nullable(true).matches(/^[0-9 a-zA-Z]+$/, 'format input tidak sesuai').max(25, "Maksimal 25 Karakter"),
    otherwise: Yup.string().required("harus diisi").matches(/^[0-9 a-zA-Z]+$/, 'format input tidak sesuai').max(25, "Maksimal 25 Karakter")
  }),
  txtTotalPenghasilan: Yup.string().required("harus diisi").matches(/^[0-9.]+$/, 'hanya angka').max(40, "Total penghasilan maksimal 30 karakter"),
  txtGajiPokok: Yup.mixed().when('selectPekerjaan', {
    is: '1',
    then: Yup.string().required("harus diisi").matches(/^[0-9.]+$/, 'hanya angka').max(40, "Gaji maksimal 30 karakter"),
    otherwise: Yup.string().nullable(true).matches(/^[0-9.]+$/, 'hanya angka').max(40, "Gaji maksimal 30 karakter")
  }),
  selectTunjanganKeluarga: Yup.mixed().when('selectPekerjaan', {
    is: '1',
    then: Yup.string().required('harus diisi'),
    otherwise: Yup.string().nullable(true)
  }),
  // txtPersentaseTunjanganKeluarga: Yup.mixed().when('selectPekerjaan', {
  //   is: '8',
  //   then: Yup.string().nullable(true).max(4, "Maksimal 4 Karakter"),
  //   otherwise: Yup.string().required("harus diisi").max(4, "Maksimal 4 Karakter")
  // }),
  txtNilaiTunjanganKeluarga: Yup.mixed().when('selectPekerjaan', {
    is: '1',
    then: Yup.string().required("harus diisi").matches(/^[0-9.]+$/, 'hanya angka').max(40, "Maksimal 30 Karakter"),
    otherwise: Yup.string().nullable(true).matches(/^[0-9.]+$/, 'hanya angka').max(40, "Maksimal 30 Karakter")
  }),
  txtNilaiTunjanganJabatan: Yup.mixed().when('selectPekerjaan', {
    is: '1',
    then: Yup.string().required("harus diisi").matches(/^[0-9.]+$/, 'hanya angka').max(40, "Maksimal 30 Karakter"),
    otherwise: Yup.string().nullable(true).matches(/^[0-9.]+$/, 'hanya angka').max(40, "Maksimal 30 Karakter")
  }),
  txtNilaiTunjanganProfesi: Yup.mixed().when('selectPekerjaan', {
    is: '1',
    then: Yup.string().required("harus diisi").matches(/^[0-9.]+$/, 'hanya angka').max(40, "Maksimal 30 Karakter"),
    otherwise: Yup.string().nullable(true).matches(/^[0-9.]+$/, 'hanya angka').max(40, "Maksimal 30 Karakter")
  }),
  txtNilaiTunjanganKinerja: Yup.mixed().when('selectPekerjaan', {
    is: '1',
    then: Yup.string().required("harus diisi").matches(/^[0-9.]+$/, 'hanya angka').max(40, "Maksimal 30 Karakter"),
    otherwise: Yup.string().nullable(true).matches(/^[0-9.]+$/, 'hanya angka').max(40, "Maksimal 30 Karakter")
  }),
  txtTunjanganLain1: Yup.string().nullable(true).matches(/^[0-9.]+$/, 'hanya angka').max(40, "Maksimal 30 Karakter"),
  txtTunjanganLain2: Yup.string().nullable(true).matches(/^[0-9.]+$/, 'hanya angka').max(40, "Maksimal 30 Karakter"),
  txtTunjanganLain3: Yup.string().nullable(true).matches(/^[0-9.]+$/, 'hanya angka').max(40, "Maksimal 30 Karakter"),
  //Mixed validation rules (belum selesai)
  txtIdPns: Yup.mixed().when('selectPekerjaan', {
    is: '1',
    then: Yup.string().required('harus diisi').matches(/^[0-9]+$/, 'hanya angka').max(32, 'maksimal 32 karakter'),
    otherwise: Yup.string().nullable(true).matches(/^[0-9]+$/, 'hanya angka').max(32, 'maksimal 32 karakter')
  }),
  tglTmt: Yup.mixed().when('selectPekerjaan', {
    is: '1',
    then: Yup.string().required("harus diisi"),
    otherwise: Yup.string().nullable(true)
  }),
  tglTmtPNS: Yup.mixed().when('selectPekerjaan', {
    is: '1',
    then: Yup.string().required("harus diisi"),
    otherwise: Yup.string().nullable(true)
  }),
  txtIdInstansiInduk: Yup.mixed().when('selectPekerjaan', {
    is: '1',
    then: Yup.string().required('harus diisi'),
    otherwise: Yup.string().nullable(true)
  }),
  txtIdGolonganTerakhir: Yup.mixed().when('selectPekerjaan', {
    is: '1',
    then: Yup.string().required('harus diisi'),
    otherwise: Yup.string().nullable(true)
  }),
  txtIdGolongan: Yup.mixed().when('selectPekerjaan', {
    is: '1',
    then: Yup.string().required('harus diisi'),
    otherwise: Yup.string().nullable(true)
  }),
  txtIdJenisJabatan: Yup.mixed().when('selectPekerjaan', {
    is: '1',
    then: Yup.string().required('harus diisi'),
    otherwise: Yup.string().nullable(true)
  }),
  txtIdJabatanFungsional: Yup.mixed().when('selectPekerjaan', {
    is: '1',
    then: Yup.string().required('harus diisi'),
    otherwise: Yup.string().nullable(true)
  }),
  txtIdJabatanStruktural: Yup.mixed().when('selectPekerjaan', {
    is: '1',
    then: Yup.string().required('harus diisi'),
    otherwise: Yup.string().nullable(true)
  }),
  txtIdJabatanFungsionalUmum: Yup.mixed().when('selectPekerjaan', {
    is: '1',
    then: Yup.string().required('harus diisi'),
    otherwise: Yup.string().nullable(true)
  }),
  txtIdInstansiKerja: Yup.mixed().when('selectPekerjaan', {
    is: '1',
    then: Yup.string().required('harus diisi'),
    otherwise: Yup.string().nullable(true)
  }),
  txtIdUnitKerja: Yup.mixed().when('selectPekerjaan', {
    is: '1',
    then: Yup.string().required('harus diisi'),
    otherwise: Yup.string().nullable(true)
  }),
  txtIdSatuanKerjaInduk: Yup.mixed().when('selectPekerjaan', {
    is: '1',
    then: Yup.string().required('harus diisi'),
    otherwise: Yup.string().nullable(true)
  }),
  txtIdLokasiKerja: Yup.mixed().when('selectPekerjaan', {
    is: '1',
    then: Yup.string().required('harus diisi'),
    otherwise: Yup.string().nullable(true)
  }),
  selectStatus: Yup.mixed().when('selectPekerjaan', {
    is: '1',
    then: Yup.string().required('harus diisi'),
    otherwise: Yup.string().nullable(true)
  }),
  txtIdKedudukanHukum: Yup.mixed().when('selectPekerjaan', {
    is: '1',
    then: Yup.string().required('harus diisi').max(3, 'maksimal 3 karakter'),
    otherwise: Yup.string().nullable(true)
  }),
  
})

export default function Formdatapekerjaan(props) {
  const classes = useStyles();
  const [selectedTglMulaiKerja, handleDateChange1] = React.useState(20200220);
  const [selectedTglPensiun, handleDateChange2] = React.useState(20200220);
  const [selectedTMT, handleDateChange3] = React.useState(20200220);
  const [selectedTMTPNS, handleDateChange4] = React.useState(20200220);
  const [selectedTglSK, handleDateChange5] = React.useState(20200220);

  // const [selectedTglMulaiKerja, handleDateChange1] = React.useState(null);
  // const [selectedTglPensiun, handleDateChange2] = React.useState(null);
  // const [selectedTMT, handleDateChange3] = React.useState(null);
  // const [selectedTMTPNS, handleDateChange4] = React.useState(null);
  // const [selectedTglSK, handleDateChange5] = React.useState(null);
  
  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      handleSave()
    },
    validationSchema
  })
  const handleSave = () => {
    return handleChange();
  };
  const [value, setValue] = React.useState(true)
  const handleChange = () => {
    return setValue(false);
  };

  const sumTotalPenghasilan = () => {
    formik.setFieldValue("txtTotalPenghasilan", Svc.sumNumbers(
      formik.values.txtGajiPokok,
      formik.values.txtNilaiTunjanganKeluarga,
      formik.values.txtNilaiTunjanganJabatan,
      formik.values.txtNilaiTunjanganProfesi,
      formik.values.txtNilaiTunjanganKinerja,
      formik.values.txtTunjanganLain1,
      formik.values.txtTunjanganLain2,
      formik.values.txtTunjanganLain3
    ));
  };

  return (
    <div className={classes.root}>
      <form onSubmit={formik.handleSubmit}>
        {/* <DisplayFormikState {...formik.values} /> */}
        <MyTypography className={classes.subtitle}>Informasi Pekerjaan</MyTypography>
        <div>
          <TextField
            select
            id="selectPekerjaan"
            label="Pekerjaan *"
            name="selectPekerjaan"
            helperText={formik.touched.selectPekerjaan && formik.errors.selectPekerjaan ? formik.errors.selectPekerjaan : null}
            error={formik.touched.selectPekerjaan && formik.errors.selectPekerjaan ? true : false}
            {...formik.getFieldProps('selectPekerjaan')}
          >
            {listPekerjan.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="txtNip"
            label="Nomor Identitas Pegawai"
            name="txtNip"
            helperText={formik.touched.txtNip && formik.errors.txtNip ? formik.errors.txtNip : null}
            error={formik.touched.txtNip && formik.errors.txtNip ? true : false}
            {...formik.getFieldProps('txtNip')}
          >
          </TextField>
          <TextField
            id="txtInstitusi"
            label="Nama Institusi **"
            name="txtInstitusi"
            helperText={formik.touched.txtInstitusi && formik.errors.txtInstitusi ? formik.errors.txtInstitusi : null}
            error={formik.touched.txtInstitusi && formik.errors.txtInstitusi ? true : false}
            // {...formik.getFieldProps('txtInstitusi')}
            value={formik.values.txtInstitusi.toUpperCase()}
            onChange={formik.handleChange}
          >
          </TextField>
          <TextField
            id="txtJabatan"
            label="Jabatan **"
            name="txtJabatan"
            helperText={formik.touched.txtJabatan && formik.errors.txtJabatan ? formik.errors.txtJabatan : null}
            error={formik.touched.txtJabatan && formik.errors.txtJabatan ? true : false}
            // {...formik.getFieldProps('txtJabatan')}
            value={formik.values.txtJabatan.toUpperCase()}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
          </TextField>
          <TextField
            id="txtPangkat"
            label="Pangkat **"
            name="txtPangkat"
            helperText={formik.touched.txtPangkat && formik.errors.txtPangkat ? formik.errors.txtPangkat : null}
            error={formik.touched.txtPangkat && formik.errors.txtPangkat ? true : false}
            // {...formik.getFieldProps('txtPangkat')}
            value={formik.values.txtPangkat.toUpperCase()}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
          </TextField>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              cancelLabel="Batal"
              okLabel="Pilih"
              id="tglMulaikerja"
              label="Tanggal Mulai Kerja (dd-mm-yyyy)**"
              name="tglMulaikerja"
              helperText={formik.touched.tglMulaikerja && formik.errors.tglMulaikerja ? formik.errors.tglMulaikerja : null}
              error={formik.touched.tglMulaikerja && formik.errors.tglMulaikerja ? true : false}
              value={selectedTglMulaiKerja}
              onChange={(handleTglMulaiKerja) => {
                var tglMulai = moment(handleTglMulaiKerja);
                //formik.setFieldValue("tglMulaikerja", moment(handleTglMulaiKerja).format('YYYYMMDD'));
                formik.setFieldValue("tglMulaikerja", tglMulai.format('YYYYMMDD'));
                handleDateChange1(handleTglMulaiKerja);

                formik.setFieldValue("txtTotalMasaKerja", Svc.hitungDurasi(moment(), tglMulai));
              }}
               onBlur={formik.handleBlur}
              maxDate={new Date()}
              format="dd-MM-yyyy"
            />
          </MuiPickersUtilsProvider>

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              cancelLabel="Batal"
              okLabel="Pilih"
              id="tglPensiun"
              label="Tanggal Pensiun (dd-mm-yyyy)**"
              name="tglPensiun"
              helperText={formik.touched.tglPensiun && formik.errors.tglPensiun ? formik.errors.tglPensiun : null}
              error={formik.touched.tglPensiun && formik.errors.tglPensiun ? true : false}
              value={selectedTglPensiun}
              onChange={(handleTglPensiun) => {
                var tglPensi = moment(handleTglPensiun);
                formik.setFieldValue("tglPensiun", tglPensi.format('YYYYMMDD'));
                handleDateChange2(handleTglPensiun);

                formik.setFieldValue("txtSisaMasaKerja", Svc.hitungDurasi(tglPensi, moment(), 1));
              }}
              onBlur={formik.handleBlur}
              minDate={new Date()}
              format="dd-MM-yyyy"
            />
          </MuiPickersUtilsProvider>
          <TextField
            id="txtBatasUsiaPensiun"
            label="Batas Usia Pensiun **"
            name="txtBatasUsiaPensiun"
            helperText={formik.touched.txtBatasUsiaPensiun && formik.errors.txtBatasUsiaPensiun ? formik.errors.txtBatasUsiaPensiun : null}
            error={formik.touched.txtBatasUsiaPensiun && formik.errors.txtBatasUsiaPensiun ? true : false}
            {...formik.getFieldProps('txtBatasUsiaPensiun')}
          >
          </TextField>
          <TextField
            id="txtMasaKerja"
            label="Masa Kerja Golongan/Jabatan **"
            name="txtMasaKerja"
            helperText={formik.touched.txtMasaKerja && formik.errors.txtMasaKerja ? formik.errors.txtMasaKerja : null}
            error={formik.touched.txtMasaKerja && formik.errors.txtMasaKerja ? true : false}
            {...formik.getFieldProps('txtMasaKerja')}
          >
          </TextField>
          <TextField
            id="txtTotalMasaKerja"
            label="Total Masa Kerja **"
            name="txtTotalMasaKerja"
            helperText={formik.touched.txtTotalMasaKerja && formik.errors.txtTotalMasaKerja ? formik.errors.txtTotalMasaKerja : null}
            error={formik.touched.txtTotalMasaKerja && formik.errors.txtTotalMasaKerja ? true : false}
            {...formik.getFieldProps('txtTotalMasaKerja')}
          >
          </TextField>
          <TextField
            id="txtSisaMasaKerja"
            label="Sisa Masa Kerja **"
            name="txtSisaMasaKerja"
            helperText={formik.touched.txtSisaMasaKerja && formik.errors.txtSisaMasaKerja ? formik.errors.txtSisaMasaKerja : null}
            error={formik.touched.txtSisaMasaKerja && formik.errors.txtSisaMasaKerja ? true : false}
            {...formik.getFieldProps('txtSisaMasaKerja')}
          // disabled
          >
          </TextField>
        </div>
        <MyTypography className={classes.subtitle2}>Informasi Penghasilan dan Tunjangan Penghasilan</MyTypography>
        <div>
          <NumberFormat
            // allowedDecimalSeparators={["."]}
            decimalSeparator=","
            isNumericString
            thousandSeparator="."
            // {...formik.getFieldProps('txtGajiPokok')}
            value={formik.values.txtGajiPokok}
            onValueChange={(values) => {
              // formik.setFieldValue("txtGajiPokok", values.floatValue);
              formik.values.txtGajiPokok = values.floatValue;
              // formik.values.txtTotalPenghasilan = formik.values.txtGajiPokok + formik.values.txtNilaiTunjanganJabatan;
            }}
            onBlur={sumTotalPenghasilan}
            customInput={MyTextField}
            id="txtGajiPokok"
            label="Gaji Pokok **"
            name="txtGajiPokok"
            helperText={formik.touched.txtGajiPokok && formik.errors.txtGajiPokok ? formik.errors.txtGajiPokok : null}
            error={formik.touched.txtGajiPokok && formik.errors.txtGajiPokok ? true : false}
            >
            </NumberFormat>
          {/* informasi tunjangan */}

          <TextField
            select
            id="selectTunjanganKeluarga"
            label="Jenis Tunjangan Keluarga **"
            name="selectTunjanganKeluarga"
            helperText={formik.touched.selectTunjanganKeluarga && formik.errors.selectTunjanganKeluarga ? formik.errors.selectTunjanganKeluarga : null}
            error={formik.touched.selectTunjanganKeluarga && formik.errors.selectTunjanganKeluarga ? true : false}
            {...formik.getFieldProps('selectTunjanganKeluarga')}
          >
            <MenuItem key=" " value="">Pilih Jenis Tunjangan Keluarga</MenuItem>
            <MenuItem key="1" value="1">TUNJANGAN PASANGAN</MenuItem>
            <MenuItem key="2" value="2">TUNJANGAN PASANGAN DAN 1 ANAK</MenuItem>
            <MenuItem key="3" value="3">TUNJANGAN PASANGAN DAN 2 ANAK</MenuItem>
            <MenuItem key="4" value="4">TUNJANGAN 1 ANAK TANPA PASANGAN</MenuItem>
            <MenuItem key="5" value="5">TUNJANGAN 2 ANAK TANPA PASANGAN</MenuItem>
            <MenuItem key="6" value="6">TUNJANGAN LAINNYA</MenuItem>
          </TextField>

          <NumberFormat
            allowedDecimalSeparators={["."]}
            decimalSeparator=","
            isNumericString
            thousandSeparator="."
            // {...formik.getFieldProps('txtGajiPokok')}
            value={formik.values.txtNilaiTunjanganKeluarga}
            onValueChange={(values) => {
              // formik.setFieldValue("txtNilaiTunjanganJabatan", values.floatValue);
              formik.values.txtNilaiTunjanganKeluarga = values.floatValue;
              // formik.values.txtTotalPenghasilan = formik.values.txtGajiPokok + formik.values.txtNilaiTunjanganJabatan;
            }}
            onBlur={sumTotalPenghasilan}

            customInput={MyTextField}


            id="txtNilaiTunjanganKeluarga"
            label="Nilai Tunjangan Keluarga **"
            name="txtNilaiTunjanganKeluarga"
            helperText={formik.touched.txtNilaiTunjanganKeluarga && formik.errors.txtNilaiTunjanganKeluarga ? formik.errors.txtNilaiTunjanganKeluarga : null}
            error={formik.touched.txtNilaiTunjanganKeluarga && formik.errors.txtNilaiTunjanganKeluarga ? true : false}
          >
          </NumberFormat>

          <NumberFormat
            // allowedDecimalSeparators={["."]}
            decimalSeparator=","
            isNumericString
            thousandSeparator="."
            value={formik.values.txtNilaiTunjanganJabatan}
            onValueChange={(values) => {
              // formik.setFieldValue("txtNilaiTunjanganJabatan", values.floatValue);
              formik.values.txtNilaiTunjanganJabatan = values.floatValue;
              // formik.values.txtTotalPenghasilan = formik.values.txtGajiPokok + formik.values.txtNilaiTunjanganJabatan;
            }}
            onBlur={sumTotalPenghasilan}
            // validateOnChange={true}
            // validateOnBlur={true}
            customInput={MyTextField}


            id="txtNilaiTunjanganJabatan"
            label="Nilai Tunjangan Jabatan/Umum **"
            name="txtNilaiTunjanganJabatan"
            helperText={formik.touched.txtNilaiTunjanganJabatan && formik.errors.txtNilaiTunjanganJabatan ? formik.errors.txtNilaiTunjanganJabatan : null}
            error={formik.touched.txtNilaiTunjanganJabatan && formik.errors.txtNilaiTunjanganJabatan ? true : false}
          >
          </NumberFormat>

          <NumberFormat
            allowedDecimalSeparators={["."]}
            decimalSeparator=","
            isNumericString
            thousandSeparator="."
            // {...formik.getFieldProps('txtGajiPokok')}
            value={formik.values.txtNilaiTunjanganProfesi}
            onValueChange={(values) => {
              // formik.setFieldValue("txtNilaiTunjanganJabatan", values.floatValue);
              formik.values.txtNilaiTunjanganProfesi = values.floatValue;
              // formik.values.txtTotalPenghasilan = formik.values.txtGajiPokok + formik.values.txtNilaiTunjanganJabatan;
            }}
            onBlur={sumTotalPenghasilan}
            customInput={MyTextField}


            id="txtNilaiTunjanganProfesi"
            label="Nilai Tunjangan Profesi **"
            name="txtNilaiTunjanganProfesi"
            helperText={formik.touched.txtNilaiTunjanganProfesi && formik.errors.txtNilaiTunjanganProfesi ? formik.errors.txtNilaiTunjanganProfesi : null}
            error={formik.touched.txtNilaiTunjanganProfesi && formik.errors.txtNilaiTunjanganProfesi ? true : false}
          >
          </NumberFormat>
          <NumberFormat
            allowedDecimalSeparators={["."]}
            decimalSeparator=","
            isNumericString
            thousandSeparator="."
            // {...formik.getFieldProps('txtGajiPokok')}
            value={formik.values.txtNilaiTunjanganKinerja}
            onValueChange={(values) => {
              // formik.setFieldValue("txtNilaiTunjanganJabatan", values.floatValue);
              formik.values.txtNilaiTunjanganKinerja = values.floatValue;
              // formik.values.txtTotalPenghasilan = formik.values.txtGajiPokok + formik.values.txtNilaiTunjanganJabatan;
            }}
            onBlur={sumTotalPenghasilan}
            customInput={MyTextField}
            id="txtNilaiTunjanganKinerja"
            label="Nilai Tunjangan Kinerja **"
            name="txtNilaiTunjanganKinerja"
            helperText={formik.touched.txtNilaiTunjanganKinerja && formik.errors.txtNilaiTunjanganKinerja ? formik.errors.txtNilaiTunjanganKinerja : null}
            error={formik.touched.txtNilaiTunjanganKinerja && formik.errors.txtNilaiTunjanganKinerja ? true : false}

          >
          </NumberFormat>

          <NumberFormat
            allowedDecimalSeparators={["."]}
            decimalSeparator=","
            isNumericString
            thousandSeparator="."
            // {...formik.getFieldProps('txtGajiPokok')}
            value={formik.values.txtTunjanganLain1}
            onValueChange={(values) => {
              // formik.setFieldValue("txtNilaiTunjanganJabatan", values.floatValue);
              formik.values.txtTunjanganLain1 = values.floatValue;
              // formik.values.txtTotalPenghasilan = formik.values.txtGajiPokok + formik.values.txtNilaiTunjanganJabatan;
            }}
            onBlur={sumTotalPenghasilan}
            customInput={MyTextField}
            id="txtTunjanganLain1"
            label="Tunjangan Lainnya 1"
            name="txtTunjanganLain1"
            helperText={formik.touched.txtTunjanganLain1 && formik.errors.txtTunjanganLain1 ? formik.errors.txtTunjanganLain1 : null}
            error={formik.touched.txtTunjanganLain1 && formik.errors.txtTunjanganLain1 ? true : false}

          >
          </NumberFormat>

          <NumberFormat
            allowedDecimalSeparators={["."]}
            decimalSeparator=","
            isNumericString
            thousandSeparator="."
            value={formik.values.txtTunjanganLain2}
            onValueChange={(values) => {
              // formik.setFieldValue("txtNilaiTunjanganJabatan", values.floatValue);
              formik.values.txtTunjanganLain2 = values.floatValue;
              // formik.values.txtTotalPenghasilan = formik.values.txtGajiPokok + formik.values.txtNilaiTunjanganJabatan;
            }}
            onBlur={sumTotalPenghasilan}
            customInput={MyTextField}
            id="txtTunjanganLain2"
            label="Tunjangan Lainnya 2"
            name="txtTunjanganLain2"
            helperText={formik.touched.txtTunjanganLain2 && formik.errors.txtTunjanganLain2 ? formik.errors.txtTunjanganLain2 : null}
            error={formik.touched.txtTunjanganLain2 && formik.errors.txtTunjanganLain2 ? true : false}

          >
          </NumberFormat>

          <NumberFormat
            allowedDecimalSeparators={["."]}
            decimalSeparator=","
            isNumericString
            thousandSeparator="."
            value={formik.values.txtTunjanganLain3}
            onValueChange={(values) => {
              // formik.setFieldValue("txtNilaiTunjanganJabatan", values.floatValue);
              formik.values.txtTunjanganLain3 = values.floatValue;
              // formik.values.txtTotalPenghasilan = formik.values.txtGajiPokok + formik.values.txtNilaiTunjanganJabatan;
            }}
            onBlur={sumTotalPenghasilan}
            customInput={MyTextField}
            id="txtTunjanganLain3"
            label="Tunjangan Lainnya 3"
            name="txtTunjanganLain3"
            helperText={formik.touched.txtTunjanganLain3 && formik.errors.txtTunjanganLain3 ? formik.errors.txtTunjanganLain3 : null}
            error={formik.touched.txtTunjanganLain3 && formik.errors.txtTunjanganLain3 ? true : false}

          >
          </NumberFormat>
          <NumberFormat
            decimalSeparator=","
            isNumericString
            thousandSeparator="."
            value={formik.values.txtTotalPenghasilan}
            onValueChange={(values) => {
              // formik.values.txtTotalPenghasilan = values.floatValue;
              formik.setFieldValue("txtTotalPenghasilan", values.floatValue);
            }}
            // validateOnChange={true}
            // validateOnBlur={true}
            customInput={MyTextField}
            id="txtTotalPenghasilan"
            label="Total Penghasilan *"
            name="txtTotalPenghasilan"
            helperText={formik.touched.txtTotalPenghasilan && formik.errors.txtTotalPenghasilan ? formik.errors.txtTotalPenghasilan : null}
            error={formik.touched.txtTotalPenghasilan && formik.errors.txtTotalPenghasilan ? true : false}
          >
          </NumberFormat>

        </div>

        <MyTypography className={classes.subtitle2}>Informasi Kepegawaian</MyTypography>

        <div>

          {/* informasi administratif */}

          <TextField
            id="txtIdPns"
            label="ID PNS **"
            name="txtIdPns"
            helperText={formik.touched.txtIdPns && formik.errors.txtIdPns ? formik.errors.txtIdPns : null}
            error={formik.touched.txtIdPns && formik.errors.txtIdPns ? true : false}
            value={formik.values.txtIdPns.toUpperCase()}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          >
          </TextField>
          <TextField
            id="txtNipLama"
            label="NIP Lama"
            name="txtNipLama"
            helperText={formik.touched.txtNipLama && formik.errors.txtNipLama ? formik.errors.txtNipLama : null}
            error={formik.touched.txtNipLama && formik.errors.txtNipLama ? true : false}
            value={formik.values.txtNipLama.toUpperCase()}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
          </TextField>
          <TextField
            id="noSK"
            label="Nomor SK **"
            name="noSK"
            helperText={formik.touched.noSK && formik.errors.noSK ? formik.errors.noSK : null}
            error={formik.touched.noSK && formik.errors.noSK ? true : false}
            //{...formik.getFieldProps('noSK')}
            value={formik.values.noSK.toUpperCase()}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
          </TextField>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              cancelLabel="Batal"
              okLabel="Pilih"
              id="tglSK"
              label="Tanggal SK (dd-mm-yyyy)**"
              name="tglSK"
              helperText={formik.touched.tglSK && formik.errors.tglSK ? formik.errors.tglSK : null}
              error={formik.touched.tglSK && formik.errors.tglSK ? true : false}
              value={selectedTglSK}
              onChange={(handleTglSK) => {
                formik.setFieldValue("tglSK", moment(handleTglSK).format('YYYYMMDD'));
                handleDateChange5(handleTglSK);
              }}
             onBlur={formik.handleBlur}
              maxDate={new Date()}
              format="dd-MM-yyyy"
            />
          </MuiPickersUtilsProvider>
          <TextField
            select
            id="selectStatus"
            label="Status CPNS/PNS **"
            name="selectStatus"
            helperText={formik.touched.selectStatus && formik.errors.selectStatus ? formik.errors.selectStatus : null}
            error={formik.touched.selectStatus && formik.errors.selectStatus ? true : false}
            {...formik.getFieldProps('selectStatus')}
          >
            <MenuItem key=" " value="">Pilih Status CPNS/PNS</MenuItem>
            <MenuItem key="1" value="1">CPNS</MenuItem>
            <MenuItem key="2" value="2">PNS</MenuItem>
          </TextField>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              cancelLabel="Batal"
              okLabel="Pilih"
              id="tglTmt"
              label="TMT CPNS (dd-mm-yyyy)**"
              name="tglTmt"
              helperText={formik.touched.tglTmt && formik.errors.tglTmt ? formik.errors.tglTmt : null}
              error={formik.touched.tglTmt && formik.errors.tglTmt ? true : false}
              value={selectedTMT}
              onChange={(handleTMT) => {
                formik.setFieldValue("tglTmt", moment(handleTMT).format('YYYYMMDD'));
                handleDateChange3(handleTMT);
              }}
              onBlur={formik.handleBlur}
              maxDate={new Date()}
              format="dd-MM-yyyy"
            />
          </MuiPickersUtilsProvider>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              cancelLabel="Batal"
              okLabel="Pilih"
              id="tglTmtPNS"
              label="TMT PNS (dd-mm-yyyy)**"
              name="tglTmtPNS"
              helperText={formik.touched.tglTmtPNS && formik.errors.tglTmtPNS ? formik.errors.tglTmtPNS : null}
              error={formik.touched.tglTmtPNS && formik.errors.tglTmtPNS ? true : false}
              value={selectedTMTPNS}
              onChange={(handleTMTPNS) => {
                formik.setFieldValue("tglTmtPNS", moment(handleTMTPNS).format('YYYYMMDD'));
                handleDateChange4(handleTMTPNS);
              }}
              onBlur={formik.handleBlur}
              maxDate={new Date()}
              format="dd-MM-yyyy"
            />
          </MuiPickersUtilsProvider>
          {/* </div>
         informasi pekerjaan
        <div> */}
          <TextField
            id="txtIdUnitKerja"
            label="ID Unit Kerja **"
            name="txtIdUnitKerja"
            helperText={formik.touched.txtIdUnitKerja && formik.errors.txtIdUnitKerja ? formik.errors.txtIdUnitKerja : null}
            error={formik.touched.txtIdUnitKerja && formik.errors.txtIdUnitKerja ? true : false}
            //{...formik.getFieldProps('txtIdUnitKerja')}
            value ={formik.values.txtIdUnitKerja.toUpperCase()}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          >
          </TextField>
          <TextField
            id="txtIdLokasiKerja"
            label="ID Lokasi Kerja **"
            name="txtIdLokasiKerja"
            helperText={formik.touched.txtIdLokasiKerja && formik.errors.txtIdLokasiKerja ? formik.errors.txtIdLokasiKerja : null}
            error={formik.touched.txtIdLokasiKerja && formik.errors.txtIdLokasiKerja ? true : false}
            //{...formik.getFieldProps('txtIdLokasiKerja')}
            value ={formik.values.txtIdLokasiKerja.toUpperCase()}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          >
          </TextField>
          <TextField
            id="txtIdInstansiInduk"
            label="ID Instansi Induk **"
            name="txtIdInstansiInduk"
            helperText={formik.touched.txtIdInstansiInduk && formik.errors.txtIdInstansiInduk ? formik.errors.txtIdInstansiInduk : null}
            error={formik.touched.txtIdInstansiInduk && formik.errors.txtIdInstansiInduk ? true : false}
            //{...formik.getFieldProps('txtIdInstansiInduk')}
            value ={formik.values.txtIdInstansiInduk.toUpperCase()}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          >
          </TextField>
          <TextField
            id="txtIdInstansiKerja"
            label="ID Instansi Kerja **"
            name="txtIdInstansiKerja"
            helperText={formik.touched.txtIdInstansiKerja && formik.errors.txtIdInstansiKerja ? formik.errors.txtIdInstansiKerja : null}
            error={formik.touched.txtIdInstansiKerja && formik.errors.txtIdInstansiKerja ? true : false}
            //{...formik.getFieldProps('txtIdInstansiKerja')}
            value ={formik.values.txtIdInstansiKerja.toUpperCase()}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          >
          </TextField>
          <TextField
            id="txtIdSatuanKerjaInduk"
            label="ID Satuan Kerja Induk **"
            name="txtIdSatuanKerjaInduk"
            helperText={formik.touched.txtIdSatuanKerjaInduk && formik.errors.txtIdSatuanKerjaInduk ? formik.errors.txtIdSatuanKerjaInduk : null}
            error={formik.touched.txtIdSatuanKerjaInduk && formik.errors.txtIdSatuanKerjaInduk ? true : false}
           // {...formik.getFieldProps('txtIdSatuanKerjaInduk')}
            value ={formik.values.txtIdSatuanKerjaInduk.toUpperCase()}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          >
          </TextField>


          <TextField
            id="txtIdJenisJabatan"
            label="ID Jenis Jabatan **"
            name="txtIdJenisJabatan"
            helperText={formik.touched.txtIdJenisJabatan && formik.errors.txtIdJenisJabatan ? formik.errors.txtIdJenisJabatan : null}
            error={formik.touched.txtIdJenisJabatan && formik.errors.txtIdJenisJabatan ? true : false}
            //{...formik.getFieldProps('txtIdJenisJabatan')}
            value ={formik.values.txtIdJenisJabatan.toUpperCase()}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          >
          </TextField>
          <TextField
            id="txtIdJabatanFungsional"
            label="ID Jabatan Fungsional **"
            name="txtIdJabatanFungsional"
            helperText={formik.touched.txtIdJabatanFungsional && formik.errors.txtIdJabatanFungsional ? formik.errors.txtIdJabatanFungsional : null}
            error={formik.touched.txtIdJabatanFungsional && formik.errors.txtIdJabatanFungsional ? true : false}
            //{...formik.getFieldProps('txtIdJabatanFungsional')}
            value ={formik.values.txtIdJabatanFungsional.toUpperCase()}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          >
          </TextField>
          <TextField
            id="txtIdJabatanStruktural"
            label="ID Jabatan Struktural **"
            name="txtIdJabatanStruktural"
            helperText={formik.touched.txtIdJabatanStruktural && formik.errors.txtIdJabatanStruktural ? formik.errors.txtIdJabatanStruktural : null}
            error={formik.touched.txtIdJabatanStruktural && formik.errors.txtIdJabatanStruktural ? true : false}
            //{...formik.getFieldProps('txtIdJabatanStruktural')}
            value ={formik.values.txtIdJabatanStruktural.toUpperCase()}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          >
          </TextField>
          <TextField
            id="txtIdJabatanFungsionalUmum"
            label="ID Jabatan Fungsional Umum**"
            name="txtIdJabatanFungsionalUmum"
            helperText={formik.touched.txtIdJabatanFungsionalUmum && formik.errors.txtIdJabatanFungsionalUmum ? formik.errors.txtIdJabatanFungsionalUmum : null}
            error={formik.touched.txtIdJabatanFungsionalUmum && formik.errors.txtIdJabatanFungsionalUmum ? true : false}
            //{...formik.getFieldProps('txtIdJabatanFungsionalUmum')}
            value ={formik.values.txtIdJabatanFungsionalUmum.toUpperCase()}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          >
          </TextField>
          <TextField
            select
            id="selectGolongan"
            label="Golongan **"
            name="selectGolongan"
            helperText={formik.touched.selectGolongan && formik.errors.selectGolongan ? formik.errors.selectGolongan : null}
            error={formik.touched.selectGolongan && formik.errors.selectGolongan ? true : false}
            {...formik.getFieldProps('selectGolongan')}
          >
            <MenuItem key=" " value="">Pilih Golongan</MenuItem>
            <MenuItem key="1" value="1">GOLONGAN SATU</MenuItem>
            <MenuItem key="2" value="2">GOLONGAN DUA</MenuItem>
            <MenuItem key="3" value="3">GOLONGAN TIGA</MenuItem>
            <MenuItem key="4" value="4">GOLONGAN EMPAT</MenuItem>
          </TextField>
          <TextField
            id="txtIdGolongan"
            label="ID Golongan **"
            name="txtIdGolongan"
            helperText={formik.touched.txtIdGolongan && formik.errors.txtIdGolongan ? formik.errors.txtIdGolongan : null}
            error={formik.touched.txtIdGolongan && formik.errors.txtIdGolongan ? true : false}
            //{...formik.getFieldProps('txtIdGolongan')}
            value ={formik.values.txtIdGolongan.toUpperCase()}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          >
          </TextField>
          <TextField
            id="txtIdGolonganTerakhir"
            label="ID Golongan Terakhir **"
            name="txtIdGolonganTerakhir"
            helperText={formik.touched.txtIdGolonganTerakhir && formik.errors.txtIdGolonganTerakhir ? formik.errors.txtIdGolonganTerakhir : null}
            error={formik.touched.txtIdGolonganTerakhir && formik.errors.txtIdGolonganTerakhir ? true : false}
            //{...formik.getFieldProps('txtIdGolonganTerakhir')}
            value ={formik.values.txtIdGolonganTerakhir.toUpperCase()}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          >
          </TextField>
          <TextField
            id="tmtGolongan"
            label="TMT Golongan **"
            name="tmtGolongan"
            helperText={formik.touched.tmtGolongan && formik.errors.tmtGolongan ? formik.errors.tmtGolongan : null}
            error={formik.touched.tmtGolongan && formik.errors.tmtGolongan ? true : false}
            //{...formik.getFieldProps('tmtGolongan')}
            value ={formik.values.tmtGolongan.toUpperCase()}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          >
          </TextField>
          <TextField
            id="masaKerjaGolonganBulan"
            label="Masa Kerja Golongan Bulan **"
            name="masaKerjaGolonganBulan"
            helperText={formik.touched.masaKerjaGolonganBulan && formik.errors.masaKerjaGolonganBulan ? formik.errors.masaKerjaGolonganBulan : null}
            error={formik.touched.masaKerjaGolonganBulan && formik.errors.masaKerjaGolonganBulan ? true : false}
            //{...formik.getFieldProps('masaKerjaGolonganBulan')}
            value ={formik.values.masaKerjaGolonganBulan.toUpperCase()}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          >
          </TextField>
          <TextField
            id="masaKerjaGolonganTahun"
            label="Masa Kerja Golongan Tahun **"
            name="masaKerjaGolonganTahun"
            helperText={formik.touched.masaKerjaGolonganTahun && formik.errors.masaKerjaGolonganTahun ? formik.errors.masaKerjaGolonganTahun : null}
            error={formik.touched.masaKerjaGolonganTahun && formik.errors.masaKerjaGolonganTahun ? true : false}
            //{...formik.getFieldProps('masaKerjaGolonganTahun')}
            value ={formik.values.masaKerjaGolonganTahun.toUpperCase()}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          >
          </TextField>
          <TextField
            select
            id="selectRuang"
            label="Ruang **"
            name="selectRuang"
            helperText={formik.touched.selectRuang && formik.errors.selectRuang ? formik.errors.selectRuang : null}
            error={formik.touched.selectRuang && formik.errors.selectRuang ? true : false}
            {...formik.getFieldProps('selectRuang')}
          >
            <MenuItem key=" " value="">Pilih Opsi Ruang</MenuItem>
            <MenuItem key="1" value="1">A</MenuItem>
            <MenuItem key="2" value="2">B</MenuItem>
            <MenuItem key="3" value="3">C</MenuItem>
            <MenuItem key="4" value="4">D</MenuItem>
            <MenuItem key="5" value="5">E</MenuItem>
          </TextField>
          <TextField
            select
            id="txtIdKedudukanHukum"
            label="ID Kedudukan Hukum **"
            name="txtIdKedudukanHukum"
            helperText={formik.touched.txtIdKedudukanHukum && formik.errors.txtIdKedudukanHukum ? formik.errors.txtIdKedudukanHukum : null}
            error={formik.touched.txtIdKedudukanHukum && formik.errors.txtIdKedudukanHukum ? true : false}
            {...formik.getFieldProps('txtIdKedudukanHukum')}
          >
            {listKedudukanHukum.map((option) => (
              <MenuItem key={option.kode} value={option.kode}>
                {option.nama}
              </MenuItem>
            ))}
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
                className={classes.buttonconfig}
                fullWidth
                variant="contained"
                color="primary"
                type="button"
                onClick={() => formik.resetForm()}
              >Batal</Button>
              <Button
                className={classes.buttonconfig}
                fullWidth
                variant="contained"
                color="primary"
                type="button"
                onClick={(e) => { props.handleNext(e, 2) }}
              >Sebelumnya</Button>
              <Button
                className={classes.buttonconfig}
                disabled={value}
                onClick={(e) => { props.handleNext(e, 4) }}
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
              justify="flex-end">
              <Button
                className={classes.buttonsimpan}
                type="submit"
                //  onClick={handleChange} 
                fullWidth
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
