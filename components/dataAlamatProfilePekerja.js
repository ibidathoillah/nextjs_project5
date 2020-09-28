import React from 'react'
import TextField from '@material-ui/core/TextField';

export default function dataAlamatProfilePekerja(props) {
    return (
        <div>
            <TextField
                id="txtAlamat"
                label={"Alamat " + props.type}
                value={props.address.address}
                disabled
            >
            </TextField>
            <TextField
                id="txtRt"
                label={"Nomor RT " + props.type}
                value={props.address.rt_number}
                disabled
            >
            </TextField>
            <TextField
                id="txtRw"
                label={"Nomor RW " + props.type}
                value={props.address.rw_number}
                disabled
            >
            </TextField>
            <TextField
                id="txtKelurahan"
                label={"Kelurahan " + props.type}
                value={props.address.village}
                disabled
            >
            </TextField>
            <TextField
                id="txtKecamatan"
                label={"Kecamatan " + props.type}
                value={props.address.sub_distinct}
                disabled
            >
            </TextField>
            <TextField
                id="txtKabupaten"
                label={"Kabupaten/Kota " + props.type}
                value={props.address.city}
                disabled
            >
            </TextField>
            <TextField
                id="txtKodePos"
                label={"Kode Pos " + props.type}
                value={props.address.postal_code}
                disabled
            >
            </TextField>
            <TextField
                id="txtProvinsi"
                label={"Provinsi " + props.type}
                value={props.address.province}
                disabled

            >
            </TextField>
            <TextField
                id="selectNegara"
                label={"Negara " + props.type}
                value={props.address.country}
                disabled
            >
            </TextField>
            <br></br>
        </div>
    )
}
