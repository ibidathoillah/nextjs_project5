import React from 'react'
import TextField from '@material-ui/core/TextField';

export default function dataPesertaProfilePekerja(props) {
    return (
        <>
            <TextField
                id="txtNoIdentitasPeserta"
                label="Nomor Identitas Peserta"
                value={props.data.identityNumber}
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-tgldaftarpeserta"
                label="Tanggal Daftar Peserta"
                value={props.data.registrationDate}
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-statusPeserta"
                label="Status Peserta"
                value={(()=>{
                    switch (props.data.participantStatus) {
                        case 1: return "Aktif";
                        case 2: return "Tidak Aktif";
                        case 3: return "Berhenti";
                        case 4: return "Passif";
                        default: return "Tidak Diketahui";
                    }
                })}
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-statuspendaftaran"
                label="Status Pendaftaran"
                value={(()=>{
                    switch (props.data.registrationStatus) {
                        case 1: return "New";
                        case 2: return "Data Ok";
                        case 3: return "Data Not Ok";
                        case 4: return "NIK Inprogress";
                        case 5: return "NIK Ok";
                        case 6: return "NIK Not Ok";
                        case 7: return "NIP Inprogress";
                        case 8: return "NIP Ok";
                        case 9: return "NIP Not Ok";
                        case 10: return "SID Inprogress";
                        case 11: return "SID Ok";
                        case 12: return "SID Not Ok";
                        case 13: return "IFUA Inprogress";
                        case 14: return "IFUA Ok";
                        case 15: return "IFUA Not Ok";
                        case 16: return "BK Inprogress";
                        case 17: return "BK Ok";
                        case 18: return "BK Not Ok";
                        case 19: return "Actice Inprogress";
                        case 20: return "Active Ok";
                        case 21: return "Active Not Ok";
                        default: return "Tidak Diketahui";
                    }
                })}
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-nopesertatapera"
                label="Nomor Peserta Tapera"
                value=""
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-sid"
                label="SID"
                value={props.data.SID}
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-ifua"
                label="IFUA"
                value={props.data.IFUA}
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-alamatkorespondensi"
                label="Alamat Korespondensi"
                value={props.data.correspondence_address}
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-resikopeserta"
                label="Profil Resiko Peserta"
                value={props.data.info.risk}
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-unitpenyertaan"
                label="Unit Penyertaan"
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-saldosimpanan"
                label="Saldo Simpanan"
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-saldotabungan"
                label="Saldo Tabungan"
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-jenismanfaat"
                label="Jenis Manfaat"
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-jumlahManfaat"
                label="Jumlah Manfaat"
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-bankPenyalur"
                label="Bank Penyalur"
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-tglRealisasiManfaat"
                label="Tanggal Realisasi Manfaat"
                disabled
            >
            </TextField>
        </>
    )
}
