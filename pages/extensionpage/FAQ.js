import Dashboard from '../Dashboard'
import { TextField,Grid, FormControlLabel, Checkbox, Box, Button, Card, CardContent, Avatar, Typography, CardActions, Divider } from '@material-ui/core';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import PropTypes from "prop-types";
import { makeStyles ,withStyles} from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";  
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import MuiTableCell from "@material-ui/core/TableCell";

const useRowStyles = makeStyles({
    root: {
      "& > *": {
        borderBottom: "none"
      }
    }
  });
  const TableCell = withStyles({
    root: {
      borderBottom: "none"
    }
  })(MuiTableCell);
  
  function createData(name, calories, fat, carbs, protein, price) {
    return {
      name,
      calories,
      fat,
      carbs,
      protein,
      price,
      history: [
        { date: "2020-01-05", customerId: "11091700", amount: 3 },
        { date: "2020-01-02", customerId: "Anonymous", amount: 1 }
      ]
    };
  }

  function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();
  
    return (
      <React.Fragment>
        <TableRow className={classes.root}>
          <TableCell align="left">{row.name}</TableCell>
          <TableCell align="right">
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
               <TextField 
             
               style={{paddingRight:'50px'}}
               fullWidth="true"
                  id="outlined-multiline-flexible"
                  label="Jawaban"
                  multiline
                  rowsMax={4}
               variant="outlined"  InputProps={{ classes: { input: {height: 200} } }}/>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  
  Row.propTypes = {
    row: PropTypes.shape({
      calories: PropTypes.number.isRequired,
      carbs: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      history: PropTypes.arrayOf(
        PropTypes.shape({
          amount: PropTypes.number.isRequired,
          customerId: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired
        })
      ).isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      protein: PropTypes.number.isRequired
    }).isRequired
  };
  
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
    createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
    createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
    createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5)
  ];
export default function FAQ() {

    
    return <div style={{ margin: '50px' }} >
        <Grid container
            spacing={2}
            direction="column"
            justify="flex-start"
            alignItems="stretch"
        >
            <Grid item >
                <Typography variant="h4" style={{color:'green'}}>FAQ</Typography>
            </Grid> 
            <Grid item  xs={6} >
                <TextField
                  margin="dense"
                  
                    variant="outlined"
                    fullWidth="true"
                    style={{borderRadius:'10px'}}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment>
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </Grid>
            <Grid item xs={8}>
            <Table aria-label="collapsible table">
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
            </Grid>
            
            
        </Grid>
    </div>
}


FAQ.Layout = Dashboard;