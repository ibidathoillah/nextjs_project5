import React from 'react'
import TextField from '@material-ui/core/TextField';

export default function dataPribadiProfilePekerja(props) {
    let jenisKelamin;
    switch (props.data.info.gender) {
        case 1: jenisKelamin = "Laki-Laki";
            break;
        case 2: jenisKelamin = "Wanita";
            break;
        default: jenisKelamin = "Tidak Diketahui";
    }

    let pendidikan;
    switch (props.data.info.degree) {
        case 1: pendidikan = "SD";
            break;
        case 2: pendidikan = "SMP";
            break;
        case 3: pendidikan = "SMA";
            break;
        case 4: pendidikan = "D3";
            break;
        case 5: pendidikan = "S1";
            break;
        case 6: pendidikan = "S2";
            break;
        case 7: pendidikan = "S3";
            break;
        default: pendidikan = "Tidak Diketahui";
    }

    let agama;
    switch (props.data.info.religion) {
        case 1: agama = "Islam";
            break;
        case 2: agama = "Protestan";
            break;
        case 3: agama = "Katolik";
            break;
        case 4: agama = "Hindu";
            break;
        case 5: agama = "Budha";
            break;
        case 6: agama = "Konghucu";
            break;
        case 7: agama = "Lainnya";
            break;
        default: agama = "Tidak Diketahui";
    }

    let jenisInvestasi
    switch (props.data.investation) {
        case 1: jenisInvestasi = "Konvensional";
            break;
        case 2: jenisInvestasi = "Syariah";
            break;
        default: jenisInvestasi = "Tidak Diketahui";
    }

    let kepemilikanRumah
    switch (props.data.info.own_home) {
        case 1: kepemilikanRumah = "Memiliki Rumah";
            break;
        case 2: kepemilikanRumah = "Tidak Memiliki Rumah";
            break;
        default: kepemilikanRumah = "Tidak Diketahui";
    }

    let statusPernikahan
    switch (props.data.info.martial_status) {
            case 1: statusPernikahan = "Belum Menikah";
                break;
            case 2: statusPernikahan = "Menikah";
                break;
            case 3: statusPernikahan = "Bercerai"
                break;
            default: statusPernikahan = "Tidak Diketahui"
        }

    return (
        <>
            <TextField
                id="standard-select-tgldaftarpeserta"
                label="Kewarganegaraan"
                value={props.data.info.nationality}
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-statusPeserta"
                label="Nomor E-KTP"
                value={props.data.info.NIK}
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-statuspendaftaran"
                label="Nomor Paspor"
                value={props.data.info.paspor}
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-nopesertatapera"
                label="Tanggal Kadaluwarsa Paspor"
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-sid"
                label="Nama Lengkap"
                value={props.data.info.fullname}
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-ifua"
                label="Jenis Kelamin"
                value={jenisKelamin}
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-alamatkorespondensi"
                label="Tempat Lahir"
                value={props.data.info.birth_place}
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-resikopeserta"
                label="Negara Kelahiran"
                value={props.data.info.birth_country}
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-unitpenyertaan"
                label="Tanggal Lahir"
                value={props.data.info.birth_date}
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-pendidikan"
                label="Pendidikan"
                value={pendidikan}
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-saldotabungan"
                label="Gelar Depan"
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-jenismanfaat"
                label="Gelar Belakang"
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-noponsel"
                label="Nomor Ponsel"
                value={props.data.info.mobile_number}
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-email"
                label="Email"
                value={props.data.info.email_address}
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-agama"
                label="Agama"
                value={agama}
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-nokk"
                label="Nomor Kartu Keluarga"
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-namaIbu"
                label="Nama Gadis Ibu Kandung"
                value={props.data.info.mother_name}
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-ektpIbu"
                label="Nomor E-KTP Ibu Kandung"
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-statusHubunganKeluarga"
                label="Status Hubungan Dalam KK"
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-statusPernikahan"
                label="Status Pernikahan"
                value={statusPernikahan}
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-namaPasangan"
                label="Nama Pasangan"
                value={props.data.info.spouse_name}
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-tglpernikahan"
                label="Tanggal Pernikahan"
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-tglperceraian"
                label="Tanggal Perceraian"
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-ahliwaris"
                label="Nama Ahli Waris"
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-hpahliwaris"
                label="Ponsel Ahli Waris"
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-npwp"
                label="NPWP"
                value={props.data.items.NPWP}
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-npwp"
                label="Tanggal Daftar NPWP"
                value={props.data.items.register_date}
                disabled
            >
            </TextField>
            <TextField
                id="jenisInvestasi"
                label="Jenis Pilihan Investasi"
                value={jenisInvestasi}
                disabled
            >
            </TextField>
            <TextField
                id="kepemilikanRumah"
                label="Kepemilikan Rumah"
                value={kepemilikanRumah}
                disabled
            >
            </TextField>
        </>
    )
}
