import moment from 'moment';

export function sumNumbers(...val) {
    var idx, res = 0;
    for (idx = 0; idx < val.length; idx++) {
        if((typeof val[idx]) == 'number') {
            res += val[idx];
        }
    }
    return res;
}

export function hitungDurasi(tglAwal, tglAkhir, dateAdd = 0, dateUnit = 'd') {
    var awal = moment(tglAwal);
    var akhir = moment(tglAkhir);

    var diff = awal.diff(akhir);
    var delta = moment.duration(diff).add(dateAdd, dateUnit);
    var deltaHari = delta.days();
    var deltaBulan = delta.months();
    var deltaTahun = delta.years();

    if(deltaHari < 1) deltaHari = '';
    else deltaHari += ' hari ';

    if(deltaBulan < 1) deltaBulan = '';
    else deltaBulan += ' bulan ';

    if(deltaTahun < 1) deltaTahun = '';
    else deltaTahun += ' tahun ';

    var totalDelta = deltaTahun + deltaBulan + deltaHari;
    if(totalDelta == '') totalDelta = '0 hari';

    return totalDelta.trim();
}
