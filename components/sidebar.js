import { List, ListItemText, ListItemIcon, ListItem, Divider, } from '@material-ui/core';


export default function SideBar (){
   return (
    <List>
    <ListItem button>
      <ListItemText primary="Panduan Pengguna" />
    </ListItem>
    <Divider />
    <ListItem button>
      <ListItemText primary="FAQ" />
    </ListItem>
    <Divider />
    <ListItem button>
      <ListItemText primary="Contact Center" />
    </ListItem>
    <Divider />
  </List>
   )
}