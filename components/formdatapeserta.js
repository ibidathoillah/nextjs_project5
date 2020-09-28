import React from 'react'
import { TextField, Button, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';


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
            margin: theme.spacing(1),
            width: '48ch',
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
}));

const initialValues = {
    standardselectnopesertatapera:'0129312364',
    standardselecttgldaftarpeserta:'09-07-2019',
    standardselectalamatkorespondensi:'JALAN MAWAR NO.72',
    standardselectsid:'IDD060612886730',
    standardselectstatusPeserta:'AKTIF',
    standardselectstatuspendaftaran:'PEKERJA AKTIF',
    standardselectifua:'BPTRAFY7629F0100',
    standardselectresikopeserta:'RENDAH',
    standardselectunitpenyertaan:'3000',
    standardbankpenyalur:'PT. BANK TABUNGAN NEGARA (PERSERO),TBK',
    standardselectsaldotabungan:'3.650.000',
    standardselectsaldosimpanan:'3.000.000',
    standardselectjenismanfaat:'KREDIT PEMILIKAN RUMAH',
    standardjumlahmanfaat:'150.000.000',
    standardtglrealisasimanfaat:'09-07-2020',
    standardmanfaatprogramlain:'FLPP'
    
  }

export default function formdatapeserta(props) {
    const classes = useStyles();
    
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <MyTypography className={classes.subtitle}>Informasi Peserta (Diisi oleh BP Tapera)</MyTypography>
        <div>
        <TextField
                id="standardselectnopesertatapera"
                label="Nomor Peserta Tapera"
                helperText="Diisi Oleh Tapera"
                disabled
                defaultValue={initialValues.standardselectnopesertatapera}
            >
            </TextField>
            <TextField
                id="standardselecttgldaftarpeserta"
                label="Tanggal Daftar Peserta"
                helperText="Diisi Oleh Tapera"
                disabled
                defaultValue={initialValues.standardselecttgldaftarpeserta}
            >
            </TextField>
            <TextField
                id="standardselectalamatkorespondensi"
                label="Alamat Korespondensi"
                helperText="Diisi Oleh Tapera"
                disabled
                defaultValue={initialValues.standardselectalamatkorespondensi}
            >
            </TextField>
          
        <TextField
                id="standardselectsid"
                label="SID"
                helperText="Diisi Oleh Tapera"
                disabled
                defaultValue={initialValues.standardselectsid}
            >
            </TextField>
        <TextField
                id="standardselectstatusPeserta"
                label="Status Peserta"
                helperText="Diisi Oleh Tapera"
                disabled
                defaultValue={initialValues.standardselectstatusPeserta}
            >
            </TextField>
            
            <TextField
                id="standardselectstatuspendaftaran"
                label="Status Pendaftaran"
                helperText="Diisi Oleh Tapera"
                disabled
                defaultValue={initialValues.standardselectstatuspendaftaran}
            >
            </TextField>
            
        
        <TextField
                id="standardselectifua"
                label="IFUA"
                helperText="Diisi Oleh Tapera"
                disabled
                defaultValue={initialValues.standardselectifua}
            >
            </TextField>
            <TextField
                id="standardselectresikopeserta"
                label="Profil Resiko Peserta"
                helperText="Diisi Oleh Tapera"
                disabled
                defaultValue={initialValues.standardselectresikopeserta}
            >
            </TextField>
            <TextField
                id="standardselectunitpenyertaan"
                label="Unit Penyertaan"
                helperText="Diisi Oleh Tapera"
                disabled
                defaultValue={initialValues.standardselectunitpenyertaan}
            >
            </TextField>
            <TextField
                id="standardbankpenyalur"
                label="Bank Penyalur"
                helperText="Diisi Oleh Tapera"
                disabled
                defaultValue={initialValues.standardbankpenyalur}
            >
            </TextField>
            <TextField
                id="standardselectsaldotabungan"
                label="Saldo Tabungan"
                helperText="Diisi Oleh Tapera"
                disabled
                defaultValue={initialValues.standardselectsaldotabungan}
            >
            </TextField>
            <TextField
                id="standardselectsaldosimpanan"
                label="Saldo Simpanan"
                helperText="Diisi Oleh Tapera"
                disabled
                defaultValue={initialValues.standardselectsaldosimpanan}
            >
            </TextField>
        
           
            <TextField
                id="standardselectjenismanfaat"
                label="Jenis Manfaat"
                helperText="Diisi Oleh Tapera"
                disabled
                defaultValue={initialValues.standardselectjenismanfaat}
            >
            </TextField>
            <TextField
                id="standardjumlahmanfaat"
                label="Jumlah Manfaat"
                helperText="Diisi Oleh Tapera"
                disabled
                defaultValue={initialValues.standardjumlahmanfaat}
            >
            </TextField>
            <TextField
                id="standardtglrealisasimanfaat"
                label="Tanggal Realisasi Manfaat"
                helperText="Diisi Oleh Tapera"
                disabled
                defaultValue={initialValues.standardtglrealisasimanfaat}
            >
            </TextField>
            <TextField
                id="standardmanfaatprogramlain"
                label="Manfaat Program Lain Yang Sudah Didapatkan"
                helperText="Diisi Oleh Tapera"
                disabled
                defaultValue={initialValues.standardmanfaatprogramlain}
            >
            </TextField>
        </div>
        <div className={classes.button}>
        <Button 
        onClick={(e) => {props.handleNext(e, 1)}}
        type="button"
        className={classes.buttonconfig}
         fullWidth
         variant="contained"
         color="primary" 
        >Selanjutnya</Button>
        </div>
        </form>
    )
}

