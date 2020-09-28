import React from 'react';
import { Container, Typography, Button, Grid, Card, CardHeader, CardContent, CardActions, CardActionArea } from '@material-ui/core';


export default function PendaftaranPemberiKerja() {
    return (
        <div>
            <Card>
                <CardHeader title="Pendaftaran Pemberi Kerja" titleTypographyProps={{ align: 'center' }}>
                </CardHeader>
                <CardContent>
                </CardContent>

                <CardActions>
                    <Button variant="outlined" style={{ backgroundColor: '#E2E2E2', color: '#008F4C' }}>Pelajari Lebih Lanjut </Button>
                </CardActions>
                <CardActions>
                    <Button variant="outlined" style={{ backgroundColor: '#008F4C', color: '#fff' }}>Daftar</Button>
                </CardActions>

            </Card>
        </div>
    )
}