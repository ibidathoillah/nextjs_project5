import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Txtdeskripsi = ()=> {
	return (
		<div>
      <style jsx>{`
        .judul {
          font-family: 'Open Sans', sans-serif;
          font-style: normal;
          color: white;
          font-size: 14px;
          line-height: 10px;
          padding-top: 380px;
          padding-left: 30px;
        }
        }
      `}</style>
      <div className="judul" id="txtDeskripsi">
        <Grid item xs>
          <p>- Lakukan pendaftaran jika belum memiliki akun.</p>
          <p>- Kata sandi akan terkunci secara otomatis apabila telah </p>
          <p>&nbsp;&nbsp;melakukan kesalahan lima (5) kali.</p>
        </Grid>
      </div>
    </div>
	)
}

export default Txtdeskripsi