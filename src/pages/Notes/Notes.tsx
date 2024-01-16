import React from 'react'
import Layout from '../../components/Layout/Layout'
import Typography from '@mui/material/Typography'
import { Grid } from '@mui/material'
import plus from '../../assets/Plus.svg'

function Notes() {
  return (
    <Layout>
      <Grid container xs={12} direction={'row'} sx={{minHeight: 'calc(100% - 64px)'}}>
        <Grid container xs={9} direction={'column'} sx={{}}>
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
        <Grid container xs={3} direction={'column'} sx={
          {
            minHeight: 'calc(100% - 64px)',
            borderLeft: '1px solid rgba(0, 0, 0, 0.12)'
          }
        } >
          <Grid container direction={'row'} alignItems={'center'}  sx={
            {
              marginTop: '3rem',
              gap: '.5rem',
              transition: '200ms',
              padding: '1rem 0rem 1rem 1.5rem',
              cursor: 'pointer',
              userSelect: 'none',
              borderRadius: '.25rem',
              '&:hover': {
                backgroundColor: '#DAFFD9',
                transition: '200ms'
              }
            }
            }>
            <img style={{height: '1.5rem'}} src={plus} alt="" />
            <Typography sx={{color: '#60CC5E', fontSize: '1.3rem'}}>New Page</Typography>
          </Grid>
          <Grid container direction={'column'} sx={{paddingLeft: '1.5rem', marginTop: '2rem', gap: '.5rem'}}>
            <Typography variant='h5'>
              My Pages
            </Typography>
            <Typography>
              Untitled
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      </Layout>
  )
}

export default Notes