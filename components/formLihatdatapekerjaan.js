import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { MenuItem, Button, Typography } from '@material-ui/core';
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { DatePicker } from "@material-ui/pickers"
import DateFnsUtils from '@date-io/date-fns';
import moment from 'moment';
import InputMask from 'react-input-mask'
import { styled } from '@material-ui/core/styles';

// import DatePicker from "react-datepicker"
// require('react-datepicker/dist/react-datepicker.css')

const TypographPekerjaan = styled(Typography)({
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: '39px',
  color: '#008F4C'
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
    label: 'BUMDes',
  },
  {
    value: '7',
    label: 'Swasta',
  },
  {
    value: '8',
    label: 'Mandiri',
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
    nama: 'Aktif',
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
      width: '50ch',
    },
  },
  judul2: {
    margin: theme.spacing(1),
  },
  judul22: {
    marginTop: theme.spacing(4),
    margin: theme.spacing(1),
  },
  tombol2: {
    marginTop: theme.spacing(4),
    direction: "row",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  tombolconfig2: {
    marginRight: theme.spacing(3),
    margin: theme.spacing(1, 0, 1),
    borderRadius: 15,
    justify: 'center',
    marginTop: 5,
    width: 110,
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
  // console.log('form data', values);
  alert("data berhasil disimpan.")
}

const validationSchema = Yup.object({
  selectPekerjaan: Yup.string().required("harus diisi"),
  txtInstitusi: Yup.mixed().when('selectPekerjaan', {
    is: '1',
    then: Yup.string().required('wajib diisi').max(255, 'maksimal 255 karakter'),
    otherwise: Yup.string().nullable(true).max(255, 'maksimal 255 karakter')
  }),
  txtJabatan: Yup.mixed().when('selectPekerjaan',{
    is: '1',
    then: Yup.string().required("harus diisi").max(255,'maksimal 255 karakter'),
    otherwise: Yup.string().nullable(true).max(255,'maksimal 255 karakter')
  }),
  txtNip: Yup.string().nullable(true).matches(/^[0-9]+$/, 'hanya angka').max(18,'NIP 18 karakter').min(18,'NIP 18 karakter'),
  txtNipLama: Yup.string().nullable(true).matches(/^[0-9]+$/, 'hanya angka').max(9,'NIP Lama 9 harus karakter').min(9,'NIP Lama harus 9 karakter'),
  txtPangkat: Yup.mixed().when('selectPekerjaan', {
    is: '1',
    then: Yup.string().nullable(true).max(255,'maksimal 255 karakter'),
    otherwise: Yup.string().when('selectPekerjaan', {
      is: '2',
      then: Yup.string().required("harus diisi").max(255,'maksimal 255 karakter'),
      otherwise: Yup.string().when('selectPekerjaan', {
        is: '3',
        then: Yup.string().required("harus diisi").max(255,'maksimal 255 karakter'),
        otherwise: Yup.string().nullable(true).max(255,'maksimal 255 karakter')
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
    then: Yup.string().nullable(true).matches(/^[0-9]+$/, 'hanya angka').max(2,'diisi 2 digit').min(2,'diisi 2 digit'),
    otherwise: Yup.string().required("harus diisi").matches(/^[0-9]+$/, 'hanya angka').max(2,'diisi 2 digit').min(2,'diisi 2 digit')
  }),
  txtMasaKerja: Yup.mixed().when('selectPekerjaan', {
    is: '8',
    then: Yup.string().nullable(true).matches(/^[0-9]+$/, 'hanya angka').max(50, "Maksimal 50 Karakter"),
    otherwise: Yup.string().required("harus diisi").matches(/^[0-9]+$/, 'hanya angka').max(50, "Maksimal 50 Karakter")
  }),
  txtTotalMasaKerja: Yup.mixed().when('selectPekerjaan', {
    is: '8',
    then: Yup.string().nullable(true).matches(/^[0-9]+$/, 'hanya angka').max(50, "Maksimal 50 Karakter"),
    otherwise: Yup.string().required("harus diisi").matches(/^[0-9]+$/, 'hanya angka').max(50, "Maksimal 50 Karakter")
  }),
  txtSisaMasaKerja: Yup.mixed().when('selectPekerjaan', {
    is: '8',
    then: Yup.string().nullable(true).max(25, "Maksimal 25 Karakter"),
    otherwise: Yup.string().required("harus diisi").max(25, "Maksimal 25 Karakter")
  }),
  txtTotalPenghasilan: Yup.string().required("harus diisi").matches(/^[0-9.]+$/, 'hanya angka').max(40, "Total penghasilan maksimal 30 karakter"),
  txtGajiPokok: Yup.mixed().when('selectPekerjaan',{
    is:'1',
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
    otherwise:Yup.string().nullable(true).matches(/^[0-9.]+$/, 'hanya angka').max(40, "Maksimal 30 Karakter")
  }),
  txtNilaiTunjanganJabatan: Yup.mixed().when('selectPekerjaan', {
    is: '1',
    then: Yup.string().required("harus diisi").matches(/^[0-9.]+$/, 'hanya angka').max(40, "Maksimal 30 Karakter"),
    otherwise:Yup.string().nullable(true).matches(/^[0-9.]+$/, 'hanya angka').max(40, "Maksimal 30 Karakter")
  }),
  txtNilaiTunjanganProfesi: Yup.mixed().when('selectPekerjaan', {
    is: '1',
    then: Yup.string().required("harus diisi").matches(/^[0-9.]+$/, 'hanya angka').max(40, "Maksimal 30 Karakter"),
    otherwise:Yup.string().nullable(true).matches(/^[0-9.]+$/, 'hanya angka').max(40, "Maksimal 30 Karakter")
  }),
  txtNilaiTunjanganKinerja: Yup.mixed().when('selectPekerjaan', {
    is: '1',
    then: Yup.string().required("harus diisi").matches(/^[0-9.]+$/, 'hanya angka').max(40, "Maksimal 30 Karakter"),
    otherwise:Yup.string().nullable(true).matches(/^[0-9.]+$/, 'hanya angka').max(40, "Maksimal 30 Karakter")
  }),
  txtTunjanganLain1: Yup.string().nullable(true).matches(/^[0-9.]+$/, 'hanya angka').max(40, "Maksimal 30 Karakter"),
  txtTunjanganLain2: Yup.string().nullable(true).matches(/^[0-9.]+$/, 'hanya angka').max(40, "Maksimal 30 Karakter"),
  txtTunjanganLain3: Yup.string().nullable(true).matches(/^[0-9.]+$/, 'hanya angka').max(40, "Maksimal 30 Karakter"),
  //Mixed validation rules (belum selesai)
  txtIdPns:Yup.mixed().when('selectPekerjaan', {
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

export default function formdatapekerjaan(props) {
  const classes = useStyles();
  const [selectedTglMulaiKerja, handleDateChange1] = React.useState(20200220);
  const [selectedTglPensiun, handleDateChange2] = React.useState(20200220);
  const [selectedTMT, handleDateChange3] = React.useState(20200220);
  const [selectedTMTPNS, handleDateChange4] = React.useState(20200220);
  const [selectedTglSK, handleDateChange5] = React.useState(20200220);
  
  
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
  

  return (
    <div className={classes.root}>
      <form onSubmit={formik.handleSubmit}>
      <TypographPekerjaan className={classes.judul2}>Informasi Pekerjaan</TypographPekerjaan>
        <div>
          <TextField
            select
            id="selectPekerjaan"
            label="Pekerjaan *"
            disabled
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
            disabled
            helperText={formik.touched.txtNip && formik.errors.txtNip ? formik.errors.txtNip : null}
            error={formik.touched.txtNip && formik.errors.txtNip ? true : false}
            {...formik.getFieldProps('txtNip')}
          >
          </TextField>
          <TextField
            id="txtInstitusi"
            label="Nama Institusi **"
            name="txtInstitusi"
            disabled
            helperText={formik.touched.txtInstitusi && formik.errors.txtInstitusi ? formik.errors.txtInstitusi : null}
            error={formik.touched.txtInstitusi && formik.errors.txtInstitusi ? true : false}
            {...formik.getFieldProps('txtInstitusi')}
          >
          </TextField>
          <TextField
            id="txtJabatan"
            label="Jabatan **"
            name="txtJabatan"
            disabled
            helperText={formik.touched.txtJabatan && formik.errors.txtJabatan ? formik.errors.txtJabatan : null}
            error={formik.touched.txtJabatan && formik.errors.txtJabatan ? true : false}
            {...formik.getFieldProps('txtJabatan')}
          >
          </TextField>
          <TextField
            id="txtPangkat"
            label="Pangkat **"
            disabled
            name="txtPangkat"
            helperText={formik.touched.txtPangkat && formik.errors.txtPangkat ? formik.errors.txtPangkat : null}
            error={formik.touched.txtPangkat && formik.errors.txtPangkat ? true : false}
            {...formik.getFieldProps('txtPangkat')}
          >
          </TextField>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            id="tglMulaikerja"
            label="Tanggal Mulai Kerja **"
            name="tglMulaikerja"
            disabled
            helperText={formik.touched.tglMulaikerja && formik.errors.tglMulaikerja ? formik.errors.tglMulaikerja : null}
            error={formik.touched.tglMulaikerja && formik.errors.tglMulaikerja ? true : false}
            value={selectedTglMulaiKerja}
            onChange={(handleTglMulaiKerja) => {
              formik.setFieldValue("tglMulaikerja", moment(handleTglMulaiKerja).format('YYYYMMDD'));
              handleDateChange1(handleTglMulaiKerja);
            }}
            onBlur={formik.handleBlur}
            maxDate={new Date()}
            format="yyyy-MM-dd"
            />
          </MuiPickersUtilsProvider>
        
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                id="tglPensiun"
                label="Tanggal Pensiun **"
                name="tglPensiun"
                disabled
                helperText={formik.touched.tglPensiun && formik.errors.tglPensiun ? formik.errors.tglPensiun : null}
                error={formik.touched.tglPensiun && formik.errors.tglPensiun ? true : false}
                value={selectedTglPensiun}
                onChange={(handleTglPensiun) => {
                  formik.setFieldValue("tglPensiun", moment(handleTglPensiun).format('YYYYMMDD'));
                  handleDateChange2(handleTglPensiun);
                }}
                onBlur={formik.handleBlur}
                minDate={new Date()}
                format="yyyy-MM-dd"
              />
            </MuiPickersUtilsProvider>
            <TextField
              id="txtBatasUsiaPensiun"
              label="Batas Usia Pensiun **"
              name="txtBatasUsiaPensiun"
              disabled
              helperText={formik.touched.txtBatasUsiaPensiun && formik.errors.txtBatasUsiaPensiun ? formik.errors.txtBatasUsiaPensiun : null}
              error={formik.touched.txtBatasUsiaPensiun && formik.errors.txtBatasUsiaPensiun ? true : false}
              {...formik.getFieldProps('txtBatasUsiaPensiun')}
            >
            </TextField>
            <TextField
              id="txtSisaMasaKerja"
              label="Sisa Masa Kerja **"
              name="txtSisaMasaKerja"
              disabled
              helperText={formik.touched.txtSisaMasaKerja && formik.errors.txtSisaMasaKerja ? formik.errors.txtSisaMasaKerja : null}
              error={formik.touched.txtSisaMasaKerja && formik.errors.txtSisaMasaKerja ? true : false}
              {...formik.getFieldProps('txtSisaMasaKerja')}
              // disabled
            >
            </TextField>
            <TypographPekerjaan className={classes.judul22}>Informasi Penghasilan dan Tunjangan Penghasilan</TypographPekerjaan>
            <InputMask
              mask={"999.999.999.999.999.999.999.999.999.999"}
              disabled
              maskChar=""
              helperText={formik.touched.txtTotalPenghasilan && formik.errors.txtTotalPenghasilan ? formik.errors.txtTotalPenghasilan : null}
              error={formik.touched.txtTotalPenghasilan && formik.errors.txtTotalPenghasilan ? true : false}
              {...formik.getFieldProps('txtTotalPenghasilan')}
            >
              {() => (
                <TextField
                  id="txtTotalPenghasilan"
                  label="Total Penghasilan *"
                  name="txtTotalPenghasilan"
                >
                  </TextField>
              )}
              </InputMask>
                <InputMask
              mask={"999.999.999.999.999.999.999.999.999.999"}
              disabled
              maskChar=""
              helperText={formik.touched.txtGajiPokok && formik.errors.txtGajiPokok ? formik.errors.txtGajiPokok : null}
                  error={formik.touched.txtGajiPokok && formik.errors.txtGajiPokok ? true : false}
                  {...formik.getFieldProps('txtGajiPokok')}
            >
              {() => (
                <TextField
                  id="txtGajiPokok"
                  label="Gaji Pokok **"
                  name="txtGajiPokok"
                >
                </TextField>
              )}
              </InputMask>
              <div>
              </div>
              <InputMask
                mask={"999.999.999.999.999.999.999.999.999.999"}
                disabled
                maskChar=""
                helperText={formik.touched.txtNilaiTunjanganKeluarga && formik.errors.txtNilaiTunjanganKeluarga ? formik.errors.txtNilaiTunjanganKeluarga : null}
                error={formik.touched.txtNilaiTunjanganKeluarga && formik.errors.txtNilaiTunjanganKeluarga ? true : false}
                {...formik.getFieldProps('txtNilaiTunjanganKeluarga')}
              >
                {() => (
                  <TextField
                    id="txtNilaiTunjanganKeluarga"
                    label="Nilai Tunjangan Keluarga **"
                    name="txtNilaiTunjanganKeluarga"
                  >
                  </TextField>
                )}
                </InputMask>
                <InputMask
                mask={"999.999.999.999.999.999.999.999.999.999"}
                maskChar=""
                disabled
                helperText={formik.touched.txtNilaiTunjanganJabatan && formik.errors.txtNilaiTunjanganJabatan ? formik.errors.txtNilaiTunjanganJabatan : null}
                error={formik.touched.txtNilaiTunjanganJabatan && formik.errors.txtNilaiTunjanganJabatan ? true : false}
                {...formik.getFieldProps('txtNilaiTunjanganJabatan')}
              >
                {() => (
                  <TextField
                    id="txtNilaiTunjanganJabatan"
                    label="Nilai Tunjangan Jabatan/Umum **"
                    name="txtNilaiTunjanganJabatan"
                  >
                  </TextField>)}
                  </InputMask>
                  <InputMask
                mask={"999.999.999.999.999.999.999.999.999.999"}
                disabled
                maskChar=""
                helperText={formik.touched.txtNilaiTunjanganProfesi && formik.errors.txtNilaiTunjanganProfesi ? formik.errors.txtNilaiTunjanganProfesi : null}
                error={formik.touched.txtNilaiTunjanganProfesi && formik.errors.txtNilaiTunjanganProfesi ? true : false}
                {...formik.getFieldProps('txtNilaiTunjanganProfesi')}
              >
                {() => (
                  <TextField
                    id="txtNilaiTunjanganProfesi"
                    label="Nilai Tunjangan Profesi **"
                    name="txtNilaiTunjanganProfesi"
                  >
                  </TextField>)}
                  </InputMask>
                  <InputMask
                mask={"999.999.999.999.999.999.999.999.999.999"}
                disabled
                maskChar=""
                helperText={formik.touched.txtNilaiTunjanganKinerja && formik.errors.txtNilaiTunjanganKinerja ? formik.errors.txtNilaiTunjanganKinerja : null}
                error={formik.touched.txtNilaiTunjanganKinerja && formik.errors.txtNilaiTunjanganKinerja ? true : false}
                {...formik.getFieldProps('txtNilaiTunjanganKinerja')}
              >
                {() => (
                  <TextField
                    id="txtNilaiTunjanganKinerja"
                    label="Nilai Tunjangan Kinerja **"
                    name="txtNilaiTunjanganKinerja"
                  >
                  </TextField>)}
                  </InputMask>
                  <InputMask
                mask={"999.999.999.999.999.999.999.999.999.999"}
                disabled
                maskChar=""
                helperText={formik.touched.txtTunjanganLain1 && formik.errors.txtTunjanganLain1 ? formik.errors.txtTunjanganLain1 : null}
                error={formik.touched.txtTunjanganLain1 && formik.errors.txtTunjanganLain1 ? true : false}
                {...formik.getFieldProps('txtTunjanganLain1')}
              >
                {() => (
                  <TextField
                  id="txtTunjanganLain1"
                  label="Tunjangan Lainnya 1"
                  name="txtTunjanganLain1"
                  >
                  </TextField>)}
                  </InputMask>
                  <InputMask
                mask={"999.999.999.999.999.999.999.999.999.999"}
                disabled
                maskChar=""
                helperText={formik.touched.txtTunjanganLain2 && formik.errors.txtTunjanganLain2 ? formik.errors.txtTunjanganLain2 : null}
                error={formik.touched.txtTunjanganLain2 && formik.errors.txtTunjanganLain2 ? true : false}
                {...formik.getFieldProps('txtTunjanganLain2')}
              >
                {() => (
                  <TextField
                  id="txtTunjanganLain2"
                  label="Tunjangan Lainnya 2"
                  name="txtTunjanganLain2"
                  >
                  </TextField>)}
                  </InputMask>
                  <InputMask
                mask={"999.999.999.999.999.999.999.999.999.999"}
                disabled
                maskChar=""
                helperText={formik.touched.txtTunjanganLain3 && formik.errors.txtTunjanganLain3 ? formik.errors.txtTunjanganLain3 : null}
                error={formik.touched.txtTunjanganLain3 && formik.errors.txtTunjanganLain3 ? true : false}
                {...formik.getFieldProps('txtTunjanganLain3')}
              >
                {() => (
                  <TextField
                  id="txtTunjanganLain3"
                  label="Tunjangan Lainnya 3"
                  name="txtTunjanganLain3"
                  >
              </TextField>)}
              </InputMask>
              <TypographPekerjaan className={classes.judul22}>Informasi Kepegawaian</TypographPekerjaan>
              <TextField
                select
                id="selectTunjanganKeluarga"
                disabled
                label="Jenis Tunjangan Keluarga **"
                name="selectTunjanganKeluarga"
                helperText={formik.touched.selectTunjanganKeluarga && formik.errors.selectTunjanganKeluarga ? formik.errors.selectTunjanganKeluarga : null}
                error={formik.touched.selectTunjanganKeluarga && formik.errors.selectTunjanganKeluarga ? true : false}
                {...formik.getFieldProps('selectTunjanganKeluarga')}
              >
                <MenuItem key=" " value="">Pilih Jenis Tunjangan Keluarga</MenuItem>
                <MenuItem key="1" value="1">Tunjangan Pasangan</MenuItem>
                <MenuItem key="2" value="2">Tunjangan Pasangan dan 1 Anak</MenuItem>
                <MenuItem key="3" value="3">Tunjangan Pasangan dan 2 Anak</MenuItem>
                <MenuItem key="4" value="4">Tunjangan 1 Anak Tanpa Pasangan</MenuItem>
                <MenuItem key="5" value="5">Tunjangan 2 Anak Tanpa Pasangan</MenuItem>
                <MenuItem key="6" value="6">Tunjangan Lainnya</MenuItem>
              </TextField>
              <TextField
                select
                id="selectRuang"
                label="Ruang **"
                disabled
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
                  id="txtMasaKerja"
                  disabled
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
                  disabled
                  helperText={formik.touched.txtTotalMasaKerja && formik.errors.txtTotalMasaKerja ? formik.errors.txtTotalMasaKerja : null}
                  error={formik.touched.txtTotalMasaKerja && formik.errors.txtTotalMasaKerja ? true : false}
                  {...formik.getFieldProps('txtTotalMasaKerja')}
                >
                </TextField>
              <div>
              </div>
              <TextField
                id="txtIdPns"
                label="ID PNS **"
                disabled
                name="txtIdPns"
                helperText={formik.touched.txtIdPns && formik.errors.txtIdPns ? formik.errors.txtIdPns : null}
                error={formik.touched.txtIdPns && formik.errors.txtIdPns ? true : false}
                {...formik.getFieldProps('txtIdPns')}
              >
              </TextField>
              <TextField
                id="txtNipLama"
                label="NIP Lama"
                disabled
                name="txtNipLama"
                helperText={formik.touched.txtNipLama && formik.errors.txtNipLama ? formik.errors.txtNipLama : null}
                error={formik.touched.txtNipLama && formik.errors.txtNipLama ? true : false}
                {...formik.getFieldProps('txtNipLama')}
              >
              </TextField>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                id="tglTmt"
                label="TMT CPNS **"
                disabled
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
                format="yyyy-MM-dd"
              />
            </MuiPickersUtilsProvider>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                id="tglTmtPNS"
                disabled
                label="TMT PNS **"
                name="tglTmtPNS"
                helperText={formik.touched.tglTmtPNS && formik.errors.tglTmtPNS ? formik.errors.tglTmtPNS : null}
                error={formik.touched.tglTmtPNS && formik.errors.tglTmtPNS ? true : false}
                value={selectedTMTPNS}
                onChange={(handleTMTPNS) => {
                  formik.setFieldValue("tglTmtPNS", moment(handleTMTPNS).format('YYYYMMDD'));
                  handleDateChange3(handleTMTPNS);
                }}
                onBlur={formik.handleBlur}
                maxDate={new Date()}
                format="yyyy-MM-dd"
              />
            </MuiPickersUtilsProvider>
            <TextField
              id="txtIdSatuanKerjaInduk"
              label="ID Satuan Kerja Induk **"
              disabled
              name="txtIdSatuanKerjaInduk"
              helperText={formik.touched.txtIdSatuanKerjaInduk && formik.errors.txtIdSatuanKerjaInduk ? formik.errors.txtIdSatuanKerjaInduk : null}
              error={formik.touched.txtIdSatuanKerjaInduk && formik.errors.txtIdSatuanKerjaInduk ? true : false}
              {...formik.getFieldProps('txtIdSatuanKerjaInduk')}
            >
            </TextField>
            <TextField
              id="txtIdInstansiInduk"
              label="ID Instansi Induk **"
              name="txtIdInstansiInduk"
              disabled
              helperText={formik.touched.txtIdInstansiInduk && formik.errors.txtIdInstansiInduk ? formik.errors.txtIdInstansiInduk : null}
              error={formik.touched.txtIdInstansiInduk && formik.errors.txtIdInstansiInduk ? true : false}
              {...formik.getFieldProps('txtIdInstansiInduk')}
            >
            </TextField>
            
            <TextField
              id="txtIdInstansiKerja"
              label="ID Instansi Kerja **"
              name="txtIdInstansiKerja"
              disabled
              helperText={formik.touched.txtIdInstansiKerja && formik.errors.txtIdInstansiKerja ? formik.errors.txtIdInstansiKerja : null}
              error={formik.touched.txtIdInstansiKerja && formik.errors.txtIdInstansiKerja ? true : false}
              {...formik.getFieldProps('txtIdInstansiKerja')}
            >
            </TextField>
            <TextField
              id="txtIdUnitKerja"
              label="ID Unit Kerja **"
              disabled
              name="txtIdUnitKerja"
              helperText={formik.touched.txtIdUnitKerja && formik.errors.txtIdUnitKerja ? formik.errors.txtIdUnitKerja : null}
              error={formik.touched.txtIdUnitKerja && formik.errors.txtIdUnitKerja ? true : false}
              {...formik.getFieldProps('txtIdUnitKerja')}
            >
            </TextField>
            <TextField
              id="txtIdJenisJabatan"
              label="ID Jenis Jabatan **"
              disabled
              name="txtIdJenisJabatan"
              helperText={formik.touched.txtIdJenisJabatan && formik.errors.txtIdJenisJabatan ? formik.errors.txtIdJenisJabatan : null}
              error={formik.touched.txtIdJenisJabatan && formik.errors.txtIdJenisJabatan ? true : false}
              {...formik.getFieldProps('txtIdJenisJabatan')}
            >
            </TextField>
            <TextField
              id="txtIdJabatanFungsional"
              label="ID Jabatan Fungsional **"
              name="txtIdJabatanFungsional"
              disabled
              helperText={formik.touched.txtIdJabatanFungsional && formik.errors.txtIdJabatanFungsional ? formik.errors.txtIdJabatanFungsional : null}
              error={formik.touched.txtIdJabatanFungsional && formik.errors.txtIdJabatanFungsional ? true : false}
              {...formik.getFieldProps('txtIdJabatanFungsional')}
            >
            </TextField>
            <TextField
              id="txtIdJabatanStruktural"
              label="ID Jabatan Struktural **"
              disabled
              name="txtIdJabatanStruktural"
              helperText={formik.touched.txtIdJabatanStruktural && formik.errors.txtIdJabatanStruktural ? formik.errors.txtIdJabatanStruktural : null}
              error={formik.touched.txtIdJabatanStruktural && formik.errors.txtIdJabatanStruktural ? true : false}
              {...formik.getFieldProps('txtIdJabatanStruktural')}
            >
            </TextField>
            <TextField
              id="txtIdJabatanFungsionalUmum"
              label="ID Jabatan Fungsional Umum**"
              disabled
              name="txtIdJabatanFungsionalUmum"
              helperText={formik.touched.txtIdJabatanFungsionalUmum && formik.errors.txtIdJabatanFungsionalUmum ? formik.errors.txtIdJabatanFungsionalUmum : null}
              error={formik.touched.txtIdJabatanFungsionalUmum && formik.errors.txtIdJabatanFungsionalUmum ? true : false}
              {...formik.getFieldProps('txtIdJabatanFungsionalUmum')}
            >
            </TextField>
            <TextField
              id="txtIdLokasiKerja"
              disabled
              label="ID Lokasi Kerja **"
              name="txtIdLokasiKerja"
              helperText={formik.touched.txtIdLokasiKerja && formik.errors.txtIdLokasiKerja ? formik.errors.txtIdLokasiKerja : null}
              error={formik.touched.txtIdLokasiKerja && formik.errors.txtIdLokasiKerja ? true : false}
              {...formik.getFieldProps('txtIdLokasiKerja')}
            >
            </TextField>
            <TextField
              id="txtIdGolonganTerakhir"
              label="ID Golongan Terakhir **"
              disabled
              name="txtIdGolonganTerakhir"
              helperText={formik.touched.txtIdGolonganTerakhir && formik.errors.txtIdGolonganTerakhir ? formik.errors.txtIdGolonganTerakhir : null}
              error={formik.touched.txtIdGolonganTerakhir && formik.errors.txtIdGolonganTerakhir ? true : false}
              {...formik.getFieldProps('txtIdGolonganTerakhir')}
            >
            </TextField>
            <TextField
              select
              id="txtIdKedudukanHukum"
              label="ID Kedudukan Hukum **"
              disabled
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
            <TextField
              select
              id="selectStatus"
              label="Status CPNS/PNS **"
              disabled
              name="selectStatus"
              helperText={formik.touched.selectStatus && formik.errors.selectStatus ? formik.errors.selectStatus : null}
              error={formik.touched.selectStatus && formik.errors.selectStatus ? true : false}
              {...formik.getFieldProps('selectStatus')}
            >
              <MenuItem key=" " value="">Pilih Status CPNS/PNS</MenuItem>
              <MenuItem key="1" value="1">CPNS</MenuItem>
              <MenuItem key="2" value="2">PNS</MenuItem>
            </TextField>
            <TextField
              id="txtIdGolongan"
              label="ID Golongan **"
              disabled
              name="txtIdGolongan"
              helperText={formik.touched.txtIdGolongan && formik.errors.txtIdGolongan ? formik.errors.txtIdGolongan : null}
              error={formik.touched.txtIdGolongan && formik.errors.txtIdGolongan ? true : false}
              {...formik.getFieldProps('txtIdGolongan')}
            >
            </TextField>
            <TextField
              select
              id="selectGolongan"
              disabled
              label="Golongan **"
              name="selectGolongan"
              helperText={formik.touched.selectGolongan && formik.errors.selectGolongan ? formik.errors.selectGolongan : null}
              error={formik.touched.selectGolongan && formik.errors.selectGolongan ? true : false}
              {...formik.getFieldProps('selectGolongan')}
            >
              <MenuItem key=" " value="">Pilih Golongan</MenuItem>
              <MenuItem key="1" value="1">Golongan Satu</MenuItem>
              <MenuItem key="2" value="2">Golongan Dua</MenuItem>
              <MenuItem key="3" value="3">Golongan Tiga</MenuItem>
              <MenuItem key="4" value="4">Golongan Empat</MenuItem>
            </TextField>
            <TextField
              id="noSK"
              label="Nomor SK **"
              disabled
              name="noSK"
              helperText={formik.touched.noSK && formik.errors.noSK ? formik.errors.noSK : null}
              error={formik.touched.noSK && formik.errors.noSK ? true : false}
              {...formik.getFieldProps('noSK')}
            >
            </TextField>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              id="tglSK"
              label="Tanggal SK **"
              disabled
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
              format="yyyy-MM-dd"
            />
            </MuiPickersUtilsProvider>
            <TextField
              id="tmtGolongan"
              label="TMT Golongan **"
              disabled
              name="tmtGolongan"
              helperText={formik.touched.tmtGolongan && formik.errors.tmtGolongan ? formik.errors.tmtGolongan : null}
              error={formik.touched.tmtGolongan && formik.errors.tmtGolongan ? true : false}
              {...formik.getFieldProps('tmtGolongan')}
            >
            </TextField>
            <TextField
              id="masaKerjaGolonganTahun"
              label="Masa Kerja Golongan Tahun **"
              name="masaKerjaGolonganTahun"
              disabled
              helperText={formik.touched.masaKerjaGolonganTahun && formik.errors.masaKerjaGolonganTahun ? formik.errors.masaKerjaGolonganTahun : null}
              error={formik.touched.masaKerjaGolonganTahun && formik.errors.masaKerjaGolonganTahun ? true : false}
              {...formik.getFieldProps('masaKerjaGolonganTahun')}
            >
            </TextField>
            <TextField
              id="masaKerjaGolonganBulan"
              label="Masa Kerja Golongan Bulan **"
              disabled
              name="masaKerjaGolonganBulan"
              helperText={formik.touched.masaKerjaGolonganBulan && formik.errors.masaKerjaGolonganBulan ? formik.errors.masaKerjaGolonganBulan : null}
              error={formik.touched.masaKerjaGolonganBulan && formik.errors.masaKerjaGolonganBulan ? true : false}
              {...formik.getFieldProps('masaKerjaGolonganBulan')}
            >
            </TextField>
        </div>
        <Button type="button" onClick={() => formik.resetForm()} className={classes.tombolconfig2} fullWidth variant="contained" color="primary"  >Batal</Button>
        <Button onClick={(e) => { props.handleNext(e, 2) }} className={classes.tombolconfig2} fullWidth variant="contained" color="primary" >Sebelumnya</Button>
        <Button onClick={(e) => { props.handleNext(e, 4) }} className={classes.tombolconfig2} fullWidth variant="contained" color="primary" >Selanjutnya</Button>
        {/* <Button type="submit" onClick={handleChange} className={classes.tombolconfig2} fullWidth variant="contained" color="primary" >Simpan</Button> */}
      </form>
    </div>
  );
}
