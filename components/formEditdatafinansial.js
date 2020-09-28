import React from 'react'
import { TextField, Grid, Button, Typography, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useFormik} from 'formik'
import * as Yup from 'yup'
import { styled } from '@material-ui/core/styles';
import { DisplayFormikState } from './helper';

const MyTypography = styled(Typography)({
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
  marginRight: theme.spacing(2),
  margin: theme.spacing(1, 0, 1),
  borderRadius: 15,
  justify: 'center',
  marginTop: 5,
  width: 110,
  backgroundColor: '#008F4C',
},
buttonsimpan: {
  margin: theme.spacing(1, 0, 1),
  marginRight: theme.spacing(0),
  marginLeft: theme.spacing(7),
  borderRadius: 15,
  marginTop: 5,
  width: '100%',
  backgroundColor: '#008F4C',
},
buttonsubmit: {
  margin: theme.spacing(1, 0, 1),
  marginLeft: theme.spacing(7),
  borderRadius: 15,
  marginTop: 5,
  width: 110,
  backgroundColor: '#008F4C',
},
}));

const listBIMemberCode = [
  {
    value: '',
    label: '',
    description: 'Pilih Bank'
  },
  {
    value: '1',
    label: 'ABALIDBS',
    description: 'PT. BPD BALI'
  },
  {
    value: '2',
    label: 'ABNAIDJA',
    description: 'THE ROYAL BANK OF SCOTLAND N.V.'
  },
  {
    value: '3',
    label: 'AGSSIDJA',
    description: 'PT Bank IBK Indonesia Tbk'
  },
  {
    value: '4',
    label: 'AGTBIDJA',
    description: 'PT. BANK RAKYAT INDONESIA AGRONIAGA, TBK'
  },
  {
    value: '5',
    label: 'ANTDIDJD',
    description: 'PT. BANK ANTARDAERAH'
  },
  {
    value: '6',
    label: 'ANZBIDJX',
    description: 'PT. BANK ANZ INDONESIA '
  },
  {
    value: '7',
    label: 'ARFAIDJ1',
    description: 'PT. BANK PANIN DUBAI SYARIAH'
  },
  {
    value: '8',
    label: 'ARTGIDJA',
    description: 'PT. BANK ARTHA GRAHA INTERNASIONAL, TBK'
  },
  {
    value: '9',
    label: 'ATJSIDJ2',
    description: 'PT. ARTAJASA PEMBAYARAN ELEKTRONIK'
  },
  {
    value: '10',
    label: 'ATOSIDJ1',
    description: 'PT. BANK ARTOS INDONESIA'
  },
  {
    value: '11',
    label: 'AWANIDJA',
    description: 'PT. BANK QNB INDONESIA, TBK'
  },
  {
    value: '12',
    label: 'BBAIIDJA',
    description: 'PT. BANK BUMI ARTA'
  },
  {
    value: '13',
    label: 'BBBAIDJA',
    description: 'PT. BANK PERMATA, TBK'
  },
  {
    value: '14',
    label: 'BBIJIDJA',
    description: 'PT. BANK UOB INDONESIA'
  },
  {
    value: '15',
    label: 'BBUKIDJA',
    description: 'PT. BANK BUKOPIN, TBK'
  },
  {
    value: '16',
    label: 'BCIAIDJA',
    description: 'PT. BANK CAPITAL INDONESIA'
  },
  {
    value: '17',
    label: 'BDINIDJA',
    description: 'PT. BANK DANAMON INDONESIA, TBK'
  },
  {
    value: '18',
    label: 'BDIPIDJ1',
    description: 'PT. BANK SAHABAT SAMPOERNA'
  },
  {
    value: '19',
    label: 'BDKIIDJ1',
    description: 'PT. BPD DKI'
  },
  {
    value: '20',
    label: 'BICNIDJA',
    description: 'PT. BANK COMMONWEALTH'
  },
  {
    value: '21',
    label: 'BIDXIDJA',
    description: 'PT. BANK INDEX SELINDO'
  },
  {
    value: '22',
    label: 'BKCHIDJA',
    description: 'BANK OF CHINA (HONG KONG) LIMITED CABANG JAKARTA'
  },
  {
    value: '23',
    label: 'BKKBIDJA',
    description: 'BANGKOK BANK PUBLIC, CO. LTD.'
  },
  {
    value: '24',
    label: 'BMRIIDJA',
    description: 'PT. BANK MANDIRI (PERSERO), TBK'
  },
  {
    value: '25',
    label: 'BNIAIDJA',
    description: 'PT. BANK CIMB NIAGA'
  },
  {
    value: '26',
    label: 'BNINIDJA',
    description: 'PT. BANK NEGARA INDONESIA (PERSERO), TBK'
  },
  {
    value: '27',
    label: 'BNPAIDJA',
    description: 'PT. BANK BNP PARIBAS INDONESIA'
  },
  {
    value: '28',
    label: 'BOFAID2X',
    description: 'BANK OF AMERICA, N.A.'
  },
  {
    value: '29',
    label: 'BOTKIDJX',
    description: 'MUFG Bank, Ltd'
  },
  {
    value: '30',
    label: 'BPIAIDJA',
    description: 'PT. BANK RESONA PERDANIA'
  },
  {
    value: '31',
    label: 'BRINIDJA',
    description: 'PT. BANK RAKYAT INDONESIA (PERSERO), TBK'
  },
  {
    value: '32',
    label: 'BSDRIDJA',
    description: 'PT. BANK WOORI SAUDARA INDONESIA 1906, TBK'
  },
  {
    value: '33',
    label: 'BSMDIDJA',
    description: 'PT. BANK SYARIAH MANDIRI'
  },
  {
    value: '34',
    label: 'BSSPIDSP',
    description: 'PT. BPD SUMATERA SELATAN DAN BANGKA BELITUNG'
  },
  {
    value: '35',
    label: 'BTANIDJA',
    description: 'PT. BANK TABUNGAN NEGARA (PERSERO), TBK'
  },
  {
    value: '36',
    label: 'BUMIIDJA',
    description: 'PT. BANK MNC INTERNASIONAL, TBK'
  },
  {
    value: '37',
    label: 'BUSTIDJ1',
    description: 'PT. BANK BISNIS INTERNASIONAL'
  },
  {
    value: '38',
    label: 'BUTGIDJ1',
    description: 'PT. BANK MEGA SYARIAH'
  },
  {
    value: '39',
    label: 'CENAIDJA',
    description: 'PT. BANK CENTRAL ASIA, TBK'
  },
  {
    value: '40',
    label: 'CHASIDJX',
    description: 'JPMORGAN CHASE BANK, N.A.'
  },
  {
    value: '41',
    label: 'CICTIDJA',
    description: 'PT. BANK JTRUST INDONESIA, TBK'
  },
  {
    value: '42',
    label: 'CITIIDJX',
    description: 'CITIBANK, N.A.'
  },
  {
    value: '43',
    label: 'CNBAIDJ1',
    description: 'PT. CENTRATAMA NASIONAL BANK'
  },
  {
    value: '44',
    label: 'CTCBIDJA',
    description: 'PT. BANK CTBC INDONESIA'
  },
  {
    value: '45',
    label: 'DBSBIDJA',
    description: 'PT. BANK DBS INDONESIA'
  },
  {
    value: '46',
    label: 'DEUTIDJA',
    description: 'DEUTSCHE BANK, A.G.'
  },
  {
    value: '47',
    label: 'DJARIDJ1',
    description: 'PT. BANK SYARIAH BRI'
  },
  {
    value: '48',
    label: 'HSBCIDJA',
    description: 'PT. Bank HSBC Indonesia, Tbk.'
  },
  {
    value: '49',
    label: 'PDBBIDJ1',
    description: 'PT. Bank Pembangunan Daerah Banten, Tbk.'
  },
  {
    value: '50',
    label: 'FAMAIDJ1',
    description: 'PT. BANK FAMA INTERNASIONAL'
  },
  {
    value: '51',
    label: 'FINTIDJ1',
    description: 'PT. FINNET INDONESIA'
  },
  {
    value: '52',
    label: 'GNESIDJA',
    description: 'PT. BANK GANESHA'
  },
  {
    value: '53',
    label: 'HNBNIDJA',
    description: 'PT. BANK KEB HANA INDONESIA'
  },
  {
    value: '54',
    label: 'HRDAIDJ1',
    description: 'PT. BANK HARDA INTERNASIONAL'
  },
  {
    value: '55',
    label: 'IBBKIDJA',
    description: 'PT. BANK MAYBANK INDONESIA, TBK'
  },
  {
    value: '56',
    label: 'ICBKIDJA',
    description: 'PT. BANK ICBC INDONESIA'
  },
  {
    value: '57',
    label: 'IDMOIDJ1',
    description: 'PT. BANK SBI INDONESIA'
  },
  {
    value: '58',
    label: 'INPBIDJ1',
    description: 'PT. BANK INA PERDANA'
  },
  {
    value: '59',
    label: 'JSABIDJ1',
    description: 'PT. BANK JASA JAKARTA'
  },
  {
    value: '60',
    label: 'JSABIDJ1',
    description: 'PT. BANK KESEJAHTERAAN EKONOMI'
  },
  {
    value: '61',
    label: 'KSEIIDJ1',
    description: 'PT. KUSTODIAN SENTRAL EFEK INDONESIA'
  },
  {
    value: '62',
    label: 'LFIBIDJ1',
    description: 'PT. BANK NATIONALNOBU'
  },
  {
    value: '63',
    label: 'LMANIDJ1',
    description: 'PT OKE INDONESIA'
  },
  {
    value: '64',
    label: 'LOMAIDJ1',
    description: 'PT. BANK AMAR INDONESIA'
  },
  {
    value: '65',
    label: 'LPEIIDJ1',
    description: 'INDONESIA EXIMBANK'
  },
  {
    value: '66',
    label: 'BMSEIDJA',
    description: 'PT. BANK MULTI ARTA SENTOSA'
  },
  {
    value: '67',
    label: 'MASDIDJ1',
    description: 'PT. BANK MASPION INDONESIA'
  },
  {
    value: '68',
    label: 'MAYAIDJA',
    description: 'PT. BANK MAYAPADA INTERNASIONAL, TBK'
  },
  {
    value: '69',
    label: 'MAYOIDJA',
    description: 'PT. BANK MAYORA'
  },
  {
    value: '70',
    label: 'MBBEIDJA',
    description: 'PT. BANK MAYBANK SYARIAH INDONESIA'
  },
  {
    value: '71',
    label: 'MCORIDJA',
    description: 'PT. BANK CHINA CONSTRUCTION BANK INDONESIA, TBK. '
  },
  {
    value: '72',
    label: 'MEDHIDS1',
    description: 'PT. BANK MESTIKA DHARMA'
  },
  {
    value: '73',
    label: 'MEEKIDJ1',
    description: 'PT. BANK SHINHAN INDONESIA'
  },
  {
    value: '74',
    label: 'MEGAIDJA',
    description: 'PT. BANK MEGA, TBK'
  },
  {
    value: '75',
    label: 'MHCCIDJA',
    description: 'PT. BANK MIZUHO INDONESIA'
  },
  {
    value: '76',
    label: 'MUABIDJA',
    description: 'PT. BANK MUAMALAT INDONESIA, TBK'
  },
  {
    value: '77',
    label: 'NISPIDJA',
    description: 'PT. BANK OCBC NISP, TBK'
  },
  {
    value: '78',
    label: 'PDACIDJ1',
    description: 'PT. BPD ACEH'
  },
  {
    value: '79',
    label: 'PDBKIDJ1',
    description: 'PT. BPD BENGKULU'
  },
  {
    value: '80',
    label: 'PDIJIDJ1',
    description: 'PT. BPD PAPUA'
  },
  {
    value: '81',
    label: 'PDJBIDJA',
    description: 'PT. BANK JABAR BANTEN, TBK'
  },
  {
    value: '82',
    label: 'PDJGIDJ1',
    description: 'PT. BPD JAWA TENGAH'
  },
  {
    value: '83',
    label: 'PDJMIDJ1',
    description: 'PT. BPD JAMBI'
  },
  {
    value: '84',
    label: 'PDJTIDJ1',
    description: 'PT. BPD JAWA TIMUR'
  },
  {
    value: '85',
    label: 'PDKBIDJ1',
    description: 'PT. BPD KALIMANTAN BARAT'
  },
  {
    value: '86',
    label: 'PDKGIDJ1',
    description: 'PT. BPD KALIMANTAN TENGAH'
  },
  {
    value: '87',
    label: 'PDKSIDJ1',
    description: 'PT. BPD KALIMANTAN SELATAN'
  },
  {
    value: '88',
    label: 'PDKTIDJ1',
    description: 'PT. BPD KALIMANTAN TIMUR DAN KALIMANTAN UTARA '
  },
  {
    value: '89',
    label: 'PDLPIDJ1',
    description: 'PT. BPD LAMPUNG'
  },
  {
    value: '90',
    label: 'PDMLIDJ1',
    description: 'PT. BPD MALUKU'
  },
  {
    value: '91',
    label: 'PDNBIDJ1',
    description: 'PT. BPD NUSA TENGGARA BARAT'
  },
  {
    value: '92',
    label: 'PDNTIDJ1',
    description: 'PT. BPD NUSA TENGGARA TIMUR'
  },
  {
    value: '93',
    label: 'PDRIIDJA',
    description: 'PT. BPD RIAU KEPRI'
  },
  {
    value: '94',
    label: 'PDSBIDJ1',
    description: 'PT. BPD SUMATERA BARAT'
  },
  {
    value: '95',
    label: 'PDSUIDJ1',
    description: 'PT. BANK SUMUT (BPD SUMUT)'
  },
  {
    value: '96',
    label: 'PDWGIDJ1',
    description: 'PT. BPD SULAWESI TENGAH'
  },
  {
    value: '97',
    label: 'PDWRIDJ1',
    description: 'PT. BPD SULAWESI TENGGARA'
  },
  {
    value: '98',
    label: 'PDWSIDJ1',
    description: 'PT. BANK SULSELBAR'
  },
  {
    value: '99',
    label: 'PDWUIDJ1',
    description: 'PT. BANK SULUT '
  },
  {
    value: '100',
    label: 'PDYKIDJ1',
    description: 'PT. BPD YOGYAKARTA'
  },
  {
    value: '101',
    label: 'PINBIDJA',
    description: 'PT. PAN INDONESIA BANK'
  },
  {
    value: '102',
    label: 'PMASIDJ1',
    description: 'PT. BANK PRIMA MASTER'
  },
  {
    value: '103',
    label: 'PUBAIDJ1',
    description: 'PT. BANK TABUNGAN PENSIUNAN NASIONAL SYARIAH'
  },
  {
    value: '104',
    label: 'RABOIDJA',
    description: 'PT. BANK RABOBANK INTERNASIONAL INDONESIA'
  },
  {
    value: '105',
    label: 'ROYBIDJ1',
    description: 'PT. BANK ROYAL INDONESIA'
  },
  {
    value: '106',
    label: 'SBJKIDJA',
    description: 'PT. BANK SINARMAS, TBK'
  },
  {
    value: '107',
    label: 'SCBLIDJX',
    description: 'STANDARD CHARTERED BANK'
  },
  {
    value: '108',
    label: 'SDOBIDJ1',
    description: 'PT. BANK SYARIAH BUKOPIN'
  },
  {
    value: '109',
    label: 'SIHBIDJ1',
    description: 'PT. BANK MANDIRI TASPEN'
  },
  {
    value: '110',
    label: 'SUNIIDJA',
    description: 'PT BANK BTPN, TBK'
  },
  {
    value: '111',
    label: 'SWAGIDJ1',
    description: 'PT. BANK VICTORIA SYARIAH'
  },
  {
    value: '112',
    label: 'SWBAIDJ1',
    description: 'PT. BANK OF INDIA INDONESIA, TBK'
  },
  {
    value: '113',
    label: 'SYACIDJ1',
    description: 'PT. BANK ACEH SYARIAH'
  },
  {
    value: '114',
    label: 'SYBBIDJ1',
    description: 'PT. BANK PERMATA, TBK UNIT USAHA SYARIAH'
  },
  {
    value: '115',
    label: 'SYBDIDJ1',
    description: 'PT. BANK DANAMON INDONESIA UNIT USAHA SYARIAH'
  },
  {
    value: '116',
    label: 'SYBKIDJ1',
    description: 'PT. BANK MAYBANK INDONESIA, TBK UNIT USAHA SYARIAH'
  },
  {
    value: '117',
    label: 'SYBTIDJ1',
    description: 'PT. BANK TABUNGAN NEGARA (PERSERO) UNIT USAHA SYARIAH'
  },
  {
    value: '118',
    label: 'SYCAIDJ1',
    description: 'PT. BANK BCA SYARIAH'
  },
  {
    value: '119',
    label: 'SYDKIDJ1',
    description: 'PT. BANK DKI UNIT USAHA SYARIAH'
  },
  {
    value: '120',
    label: 'SYJBIDJ1',
    description: 'PT. BANK JABAR BANTEN SYARIAH'
  },
  {
    value: '121',
    label: 'SYJGIDJ1',
    description: 'PT. BPD JAWA TENGAH UNIT USAHA SYARIAH'
  },
  {
    value: '122',
    label: 'SYJMIDJ1',
    description: 'PT. BPD JAMBI UNIT USAHA SYARIAH'
  },
  {
    value: '123',
    label: 'SYJTIDJ1',
    description: 'BANK JATIM UNIT USAHA SYARIAH '
  },
  {
    value: '124',
    label: 'SYKBIDJ1',
    description: 'PT. BPD KALIMANTAN BARAT UNIT USAHA SYARIAH'
  },
  {
    value: '125',
    label: 'SYKSIDJ1',
    description: 'PT. BPD KALIMANTAN SELATAN UNIT USAHA SYARIAH'
  },
  {
    value: '126',
    label: 'SYKTIDJ1',
    description: 'PT. BPD KALIMANTAN TIMUR DAN KALIMANTAN UTARA UNIT USAHA SYARIAH '
  },
  {
    value: '127',
    label: 'SYNAIDJ1',
    description: 'PT. BANK CIMB NIAGA, TBK UNIT USAHA SYARIAH'
  },
  {
    value: '128',
    label: 'SYNBIDJ1',
    description: 'PT. BPD NUSA TENGGARA BARAT UNIT USAHA SYARIAH'
  },
  {
    value: '129',
    label: 'SYNBIDJ1',
    description: 'PT. BPD NUSA TENGGARA BARAT UNIT USAHA SYARIAH'
  },
  {
    value: '130',
    label: 'SYONIDJ1',
    description: 'PT. BANK OCBC NISP, TBK UNIT USAHA SYARIAH'
  },
  {
    value: '131',
    label: 'SYRIIDJ1',
    description: 'PT. BPD RIAU UNIT USAHA SYARIAH'
  },
  {
    value: '132',
    label: 'SYSBIDJ1',
    description: 'PT. BPD SUMATERA BARAT UNIT USAHA SYARIAH'
  },
  {
    value: '133',
    label: 'SYSSIDJ1',
    description: 'PT. BPD SUMATERA SELATAN DAN BANGKA BELITUNG UNIT USAHA SYARIAH'
  },
  {
    value: '134',
    label: 'SYSUIDJ1',
    description: 'PT. BANK SUMUT (BPD SUMUT) UNIT USAHA SYARIAH '
  },
  {
    value: '135',
    label: 'SYTBIDJ1',
    description: 'PT. BANK SINARMAS UNIT USAHA SYARIAH'
  },
  {
    value: '136',
    label: 'SYWSIDJ1',
    description: 'PT. BPD SULAWESI SELATAN DAN SULAWESI BARAT UNIT USAHA SYARIAH'
  },
  {
    value: '137',
    label: 'SYYKIDJ1',
    description: 'PT. BPD YOGYAKARTA UNIT USAHA SYARIAH'
  },
  {
    value: '138',
    label: 'VICTIDJ1',
    description: 'PT. BANK VICTORIA INTERNASIONAL'
  },
  {
    value: '139',
    label: 'YUDBIDJ1',
    description: 'PT. BANK YUDHA BHAKTI'
  },
  {
    value: '140',
    label: 'ALTOIDJ1',
    description: 'PT ALTO NETWORK'
  },
  {
    value: '141',
    label: 'JPNAIDJ1',
    description: 'PT JALIN PEMBAYARAN NUSANTARA'
  },
  {
    value: '142',
    label: 'RISJIDJ1',
    description: 'PT RINTIS SEJAHTERA'
  },
];

const onSubmit = values => {
    console.log('form data', values);
    alert("Data Berhasil disimpan")
    
  }

const validationSchema = Yup.object({
  nomorRekeningBankTujuanRedemption: Yup.string().required('harus diisi').matches(/^[0-9]+$/, 'hanya angka').max(25, 'Nomor Rekening Maksimal 25 Karakter'),
  namaPemilikRekeningBankTujuanRedemption: Yup.string().required('harus diisi').matches(/^[a-zA-Z0-9.,': ]+$/, 'Hanya Karakter Alphabet').max(100, 'Nama Maksimal 100 Karakter') ,
  // kodeBankTujuanRedemption: Yup.string().required('harus diisi'),
  namaBankTujuanRedemption: Yup.string().required('harus diisi'),
  cabangRekeningBankTujuanRedemption: Yup.string().required('harus diisi').matches(/^[a-zA-Z0-9.,': ]+$/, 'Hanya Karakter Alphabet').max(100, 'Maksimal 100 Karakter'),
  negaraKorespondensiBankTujuanRedemption: Yup.string().required('harus diisi'),
 })

 
export default function formdatafinansial(props) {
    const classes = useStyles();

    const formik = useFormik({
      //initialValues,
      initialValues: {
        nomorRekeningBankTujuanRedemption: '7812384126',
        namaPemilikRekeningBankTujuanRedemption: 'Abizar',
        kodeBankTujuanRedemption: 'BNIAIDJA',
        namaBankTujuanRedemption:'PT. BANK CIMB NIAGA',
        cabangRekeningBankTujuanRedemption:'007',
        negaraKorespondensiBankTujuanRedemption:'ID',
        // nomorRekeningBankTujuanRedemption: '',
        // namaPemilikRekeningBankTujuanRedemption: props.namaLengkap,
        // kodeBankTujuanRedemption: '',
        // namaBankTujuanRedemption:'',
        // cabangRekeningBankTujuanRedemption:'',
        // negaraKorespondensiBankTujuanRedemption:'ID',
        },
      onSubmit: values => {
        handleSave()
    },
      validationSchema
    })
    const handleSave = () => {
      return handleChange();
      // alert("Data Berhasil Disimpan")
  };
    const [value, setValue] = React.useState(true)
    const handleChange = () => {
    console.log(false)
    return setValue(false);
  };
    // console.log(formik.value.namaBankTujuanRedemption)
    return (
      <form onSubmit={formik.handleSubmit} className={classes.root}>
      <MyTypography className={classes.subtitle2}>Informasi Rekening Bank</MyTypography>

      <div>
      {/* <DisplayFormikState {...formik.values} />  */}
        <TextField
          id="txtNomorRekeningBankTujuanRedemption"
          label="Nomor Rekening Bank Tujuan *"
          type="input"
          name="nomorRekeningBankTujuanRedemption"
          helperText={formik.touched.nomorRekeningBankTujuanRedemption && formik.errors.nomorRekeningBankTujuanRedemption ? formik.errors.nomorRekeningBankTujuanRedemption : null}
          error={formik.touched.nomorRekeningBankTujuanRedemption && formik.errors.nomorRekeningBankTujuanRedemption?true:false}
          {... formik.getFieldProps('nomorRekeningBankTujuanRedemption')}
        >
        </TextField>
        <TextField
          id="txtNamaPemilikRekeningBankTujuanRedemption"
          label="Nama Pemilik Rekening Bank Tujuan *"
          type="input"
          name="namaPemilikRekeningBankTujuanRedemption"
          helperText={formik.touched.namaPemilikRekeningBankTujuanRedemption && formik.errors.namaPemilikRekeningBankTujuanRedemption?formik.errors.namaPemilikRekeningBankTujuanRedemption : null}
          error={formik.touched.namaPemilikRekeningBankTujuanRedemption && formik.errors.namaPemilikRekeningBankTujuanRedemption?true:false}
          //{... formik.getFieldProps('namaPemilikRekeningBankTujuanRedemption')}
          value={formik.values.namaPemilikRekeningBankTujuanRedemption.toUpperCase()}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
        </TextField>
        <TextField
          select
          id="namaBankTujuanRedemption"
          label="Nama Bank Tujuan *"
          name="namaBankTujuanRedemption"
          onBlur={formik.handleBlur}
          value={listBIMemberCode.find(v => v.label == formik.values.kodeBankTujuanRedemption)}
          //value={listBIMemberCode.find(v => v.description == formik.values.namaBankTujuanRedemption)}
          helperText={formik.touched.namaBankTujuanRedemption && formik.errors.namaBankTujuanRedemption ? formik.errors.namaBankTujuanRedemption : null}
          error={formik.touched.namaBankTujuanRedemption && formik.errors.namaBankTujuanRedemption?true:false}
          //{... formik.getFieldProps('namaBankTujuanRedemption')}
          onChange={(event) => {
            formik.setFieldValue("namaBankTujuanRedemption", event.target.value.description);
            formik.setFieldValue("kodeBankTujuanRedemption", event.target.value.label);
          }}
          //  formik.setFieldValue("namaBankTujuanRedemption", event.currentTarget.values);
        >
          {listBIMemberCode.map((option) => (
            <MenuItem key={option.value} value={option}  >
              {option.description}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          // select
          id="txtKodeBankTujuanRedemption"
          label="Kode Bank Tujuan *"
          name="kodeBankTujuanRedemption"
          defaultValue="Diisi oleh Tapera"
          disabled='true'
          value={formik.values.kodeBankTujuanRedemption}
         
        >
         
        </TextField>
        <TextField
          id="txtCabangRekeningBankTujuanRedemption"
          label="Cabang Bank Tujuan *"
          type="input"
          name="cabangRekeningBankTujuanRedemption"
          helperText={formik.touched.cabangRekeningBankTujuanRedemption && formik.errors.cabangRekeningBankTujuanRedemption ? formik.errors.cabangRekeningBankTujuanRedemption : null}
          error={formik.touched.cabangRekeningBankTujuanRedemption && formik.errors.cabangRekeningBankTujuanRedemption?true:false}
          value={formik.values.cabangRekeningBankTujuanRedemption.toUpperCase()}
          onChange={formik.handleChange}
         // onBlur={formik.handleBlur}
        >
        </TextField>
        <TextField
          select
          id="txtNegaraKorespondensiBankTujuan"
          label="Negara Korespondensi Bank Tujuan *"
          type="input"
          name="negaraKorespondensiBankTujuanRedemption"
          helperText={formik.touched.negaraKorespondensiBankTujuanRedemption && formik.errors.negaraKorespondensiBankTujuanRedemption ? formik.errors.negaraKorespondensiBankTujuanRedemption : null}
          error={formik.touched.negaraKorespondensiBankTujuanRedemption && formik.errors.negaraKorespondensiBankTujuanRedemption?true:false}
          {... formik.getFieldProps('negaraKorespondensiBankTujuanRedemption')}
          
        >
          {props.listdata.listISOCodeCountry.map((option) => (
            <MenuItem key={option.value} value={option.ISOCode}>
              {option.Country}
            </MenuItem>
          ))}
        </TextField>
        
      </div>
      <div className={classes.button}>
      <Grid container spacing={1} justify="space-between">
          <Grid 
          direction="row"
          item
          maxwidth="xl" 
          // className={classes.myGrid} 
          spacing={0} 
          xs={5} sm={5} md={8} >
      <Button 
      type="button" 
      onClick={() => formik.resetForm()}  
      className={classes.buttonconfig}
         fullWidth
         variant="contained"
         color="primary" 
      >
        Batal
      </Button>
      <Button 
      onClick={(e) => {props.handleNext(e, 3)}}
      className={classes.buttonconfig}
         fullWidth
         variant="contained"
         color="primary" 
         type="button"
      >
        Sebelumnya
      </Button>
      </Grid>
      
<Grid 
direction="row"
item
maxwidth="xl" 
// className={classes.myGrid} 
spacing={0} 
xs={5} sm={5} md={2} >
      <Button
       type="submit" 
       //onClick={handleChange} 
       className={classes.buttonsimpan}
         fullWidth
         variant="contained"
         color="primary" 
       >Simpan Sementara
       </Button>
       </Grid>
      
      <Grid 
      direction="row"
      item
      maxwidth="xl" 
      // className={classes.myGrid} 
      spacing={0} 
      xs={2} sm={2} md={2} >
      <Button
      className={classes.buttonsubmit}
      fullWidth
      variant="contained"
      color="primary" 
      disabled={value}
       >
         Submit
         </Button>
         </Grid>
         </Grid>
      </div>
    </form>
    )
}