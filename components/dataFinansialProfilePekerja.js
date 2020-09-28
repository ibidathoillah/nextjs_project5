import React from 'react'
import TextField from '@material-ui/core/TextField';

export default function dataFinansialProfilePekerja(props) {
    return (
        <>
            <TextField
                id="txtNomorRekeningBankTujuanRedemption"
                label="Nomor Rekening Bank Tujuan"
                value={props.data.bank_item.account_number}
                disabled
            >
            </TextField>
            <TextField
                id="txtNamaPemilikRekeningBankTujuanRedemption"
                label="Nama Pemilik Rekening Bank Tujuan"
                value={props.data.bank_item.name}
                disabled
            >
            </TextField>
            <TextField
                id="txtKodeBankTujuanRedemption"
                label="Nama Bank Tujuan"
                value={props.data.bank_item.bank_name}
                disabled
            >
            </TextField>
            <TextField
                id="txtCabangRekeningBankTujuanRedemption"
                label="Cabang Bank Tujuan"
                value={props.data.bank_item.branch}
                disabled
            >
            </TextField>
            <TextField
                id="txtNegaraKorespondensiBankTujuan"
                label="Negara Korespondensi Bank Tujuan"
                disabled
            >
            </TextField>
        </>
    )
}
