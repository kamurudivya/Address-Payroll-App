import React from 'react'
import Box from '@mui/material/Box';
import './books.css';
import bookimage from '../../assets/bookimage.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import { useHistory } from 'react-router-dom';

function Books(props) {

    const history = useHistory()

    // const getBooksList = (obj) => {
    //     props.listentoBooks()
    //     console.log(obj)
    // }

    const bookDesc = (book) => {
        props.listentoBooks(book)
        // history.push('/bookDescription')
    }

    return (

        <div>
            <Box className='image-container'>

                <Card sx={{ width: '100%' }} onClick={() =>bookDesc(props.book)}>
                    <img className='BookImage' src={bookimage} style={{paddingLeft: '3rem', width: '120px', height: '140px'}} alt="bookimage"></img>
                    <CardContent>
                        <Typography className='book-name'>
                            {props.book.bookName}
                        </Typography>
                        <Typography className='book-author'>
                            {props.book.author}
                        </Typography>
                        <Typography variant="body2" className='book-rating'>
                            4.5*(20)
                        </Typography>
                        <Typography >
                            Quantity:{props.book.quantity}
                        </Typography>
                        <Typography className='book-price'>
                            Rs:{props.book.price}
                        </Typography>
                    </CardContent>

                </Card>
            </Box>

        </div>

    ) 
} 
 
export default Books