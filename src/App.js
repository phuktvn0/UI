import './App.css';
import Header from './components/Header';
import CardJob from './components/CardJob';
import PageNumber from './components/PageNumber';
import Box from '@mui/material/Box';
import datas from './data.json'
import { useState } from 'react';
function App() {
  const [cardNumber, setCardNumber] = useState(0)
  const pageNumber = (page) => {
    if (page === 1) {
      setCardNumber(0)
    } else if (page === 2) {
      setCardNumber(5)
    } else {
      setCardNumber(10)
    }
  }

  return (
    <div>
      <Header />
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 500,
          height: 300,
        },
      }}>
        {datas.slice(cardNumber,cardNumber + 5).map((data) =>
      <CardJob data={data} />
      )}
      </Box>
      <PageNumber pageNumber={pageNumber} />
    </div>
  );
}

export default App;
