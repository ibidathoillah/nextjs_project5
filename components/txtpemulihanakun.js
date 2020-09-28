import Box from '@material-ui/core/Box';

const Txtpemulihanakun = ()=> {
	return (
		<div>
      <style jsx>{`
        .judul {
          font-family: 'Open Sans', sans-serif;
          font-style: normal;
          font-weight: bold;  
          letter-spacing: 0.05em;
          color: green;
          font-size: 48px;
          line-height: 1px;
          text-align: center;
          width: 100%;
        }
        }
      `}</style>
      <div className="judul">
        {/* <Box display="flex" p={1} justifyContent="center">
          GANTI
        </Box>
        <Box display="flex" p={1} justifyContent="center"> 
          KATA SANDI
        </Box> */}
        
        <Box display="flex" p={1} flexWrap="wrap" flexDirection="row">
          PEMULIHAN AKUN
        </Box>
        {/* <p>KATA SANDI</p> */}
      </div>
    </div>
	)
}

export default Txtpemulihanakun