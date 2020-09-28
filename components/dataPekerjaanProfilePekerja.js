import React from 'react'
import TextField from '@material-ui/core/TextField';

export default function dataPekerjaanProfilePekerja(props) {
    return (
        <>
            <TextField
                id="selectPekerjaan"
                label="Pekerjaan"
                value={props.data.items.work}
                disabled
            >
            </TextField>
            <TextField
                id="txtNip"
                label="Nomor Identitas Pegawai"
                value={props.data.items.identity_work_number}
                disabled
            >
            </TextField>
            <TextField
                id="txtInstitusi"
                label="Nama Institusi"
                value={props.data.items.institution_name}
                disabled
            >
            </TextField>
            <TextField
                id="txtJabatan"
                label="Jabatan"
                value={props.data.items.occupation}
                disabled
            >
            </TextField>
            <TextField
                id="txtPangkat"
                label="Pangkat"
                disabled
            >
            </TextField>
            <TextField
                id="selectGolongan"
                label="Golongan"
                value={props.data.items.group}
                disabled
            >
            </TextField>
            <TextField
                id="selectRuang"
                label="Ruang"
                value={props.data.items.room}
                disabled
            >
            </TextField>
            <TextField
                id="tglMulaikerja"
                label="Tanggal Mulai Kerja"
                value={props.data.items.start_time}
                disabled
            >
            </TextField>
            <TextField
                id="tglPensiun"
                label="Tanggal Pensiun"
                value={props.data.items.retirement_time}
                disabled
            >
            </TextField>
            <TextField
                id="txtBatasUsiaPensiun"
                label="Batas Usia Pensiun"
                value={props.data.items.retirement_age}
                disabled
            >
            </TextField>
            <TextField
                id="txtMasaKerja"
                label="Masa Kerja Golongan/Jabatan"
                disabled
            >
            </TextField>
            <TextField
                id="txtTotalMasaKerja"
                label="Total Masa Kerja"
                disabled
            >
            </TextField>
            <TextField
                id="txtSisaMasaKerja"
                label="Sisa Masa Kerja"
                disabled
            >
            </TextField>
            <TextField
                id="txtGajiPokok"
                label="Gaji Pokok"
                value={props.data.items.salary}
                disabled
            >
            </TextField>
            <TextField
                id="selectTunjanganKeluarga"
                label="Jenis Tunjangan Keluarga"
                value={props.data.items.benefits}
                disabled
            >
            </TextField>
            <TextField
                id="txtPersentaseTunjanganKeluarga"
                label="Persentase Tunjangan Keluarga"
                disabled
            >
            </TextField>
            <TextField
                id="txtNilaiTunjanganKeluarga"
                label="Nilai Tunjangan Keluarga"
                disabled
            >
            </TextField>
            <TextField
                id="txtIdPns"
                label="ID PNS"
                disabled
            >
            </TextField>
            <TextField
                id="tglTmt"
                label="TMT CPNS"
                disabled
            >
            </TextField>
            <TextField
                id="txtIdInstansiInduk"
                label="ID Instansi Induk"
                disabled
            >
            </TextField>
            <TextField
                id="txtIdSatuanKerjaInduk"
                label="ID Satuan Kerja Induk"
                disabled
            >
            </TextField>
            <TextField
                id="txtIdLokasiKerja"
                label="ID Lokasi Kerja"
                disabled
            >
            </TextField>
            <TextField
                id="selectStatus"
                label="Status CPNS/PNS"
                value={props.data.items.status}
                disabled
            >
            </TextField>
            <TextField
                id="txtIdKedudukanHukun"
                label="ID Kedudukan Hukum"
                disabled
            >
            </TextField>
        </>
    )
}
