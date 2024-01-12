import React from 'react'
import Layout from '../../components/Layout/Layout'
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material'

function Notes() {
  return (
    <Layout>
      <Grid container xs={12} direction={'row'} sx={{height: '100%'}}>
        <Grid container xs={10} direction={'column'}>
        <Typography variant={'h3'} sx={
        {margin: '6rem 0 0 6rem', color: 'rgba(51, 51, 51, 0.20)', fontFamily: 'Nunito', fontWeight: '700', wordWrap: 'break-word'}
        }>Untitled
        </Typography>
        <Typography variant={'body1'} sx={
        {margin: '1.5rem 0 0 6.25rem', color: '#333333', fontSize: 24, fontFamily: 'Nunito', fontWeight: '500', wordWrap: 'break-word'}
        }>Banger
        </Typography>
        <Typography variant={'body1'} sx={
        {margin: '.5rem 0 0 6.25rem', color: '#333333', fontSize: 24, fontFamily: 'Nunito', fontWeight: '500', wordWrap: 'break-word'}
        }>Hustle
        </Typography>
        <Typography variant={'body1'} sx={
        {margin: '.5rem 0 0 6.25rem', color: 'rgba(51, 51, 51, 0.30)', fontSize: 24, fontFamily: 'Nunito', fontWeight: '500', wordWrap: 'break-word'}
        }>+ New Note
        </Typography>
        </Grid>
        <Grid container xs={2} direction={'column'} sx={
          {
            height: '100%',
            backgroundColor: 'red'
          }
        } >

        </Grid>
      </Grid>
      </Layout>
  )
}

export default Notes