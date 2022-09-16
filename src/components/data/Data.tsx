import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Grid, useTheme} from '@mui/material';
import {useTypedSelector} from '../../actions/useTypedSelector';
import {useActions} from '../../actions/useActions';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

export default function DataComponent() {
  Dayjs.extend(isBetween);
  const {result, limit, page, loading, error} = useTypedSelector(state => state.result);
  const filterState = useTypedSelector(state => state.filter);
  const {fetchResult, setPage} = useActions();

  React.useEffect(() => {
    fetchResult(filterState, limit, page);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterState, limit, page]);

  const nextPage = () => {
    if (result.length === limit) {
      setPage(page + 1);
    }
  }

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  }
  
  let data = result;
  if (filterState?.uuid?.length !== 36 && filterState?.createRange[0]?.isValid && filterState?.createRange[1]?.isValid) {
    data = data.filter((item) => (Dayjs(item.createdAt).isBetween(filterState?.createRange[0], filterState?.createRange[1])));
  }

  const boxEmptySx = { minHeight: "50vh", display: "flex", justifyContent: "center" };

  const theme = useTheme();
  return (
    <div>
      {loading ? (
          <Box sx={boxEmptySx}>
            <CircularProgress size={80} />
          </Box>
        ) : error
        ? (
          <Box sx={boxEmptySx}>
            <Typography variant='h4'>
              {error}
            </Typography>
          </Box>
        ) : data.length === 0 ? (
          <Box sx={boxEmptySx}>
            <Typography variant='h4'>
              {'Не найдено'}
            </Typography>
          </Box>
        ) : (
          <Box>
            {data.map((item) => (
              <Accordion key={item.uuid} sx={{marginBottom: 1}}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  sx={{background: theme.palette.success.main, color: theme.palette.info.main, borderRadius: 1}}
                  id={item.uuid.toString()}
                >
                  <Typography>{item.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography>
                        {item.desc}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container spacing={2}>
                        <Grid item sm={12} md={6}>
                          <Typography>
                            {Dayjs(item.createdAt).format('MM/DD/YYYY')}
                          </Typography>
                        </Grid>
                        <Grid item sm={12} md={6} sx={{textAlign: 'right'}}>
                          <Typography>
                            {item.uuid}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  
                </AccordionDetails>
              </Accordion>
            ))}
            {!filterState?.createRange[0]?.isValid && !filterState?.createRange[1]?.isValid && (<Box sx={{margin: '0 auto', maxWidth: '250px'}}>
              <Box sx={{display: "flex", justifyContent: 'space-between' }}>
                <Fab disabled={page === 1} onClick={prevPage} size="small" color={"primary"} aria-label="back">
                  <KeyboardArrowLeftIcon />
                </Fab>
                <Fab size="small" color="info" aria-label="back">
                  {page}
                </Fab>
                <Fab disabled={result.length !== limit} onClick={nextPage} size="small" color={"primary"} aria-label="next">
                  <KeyboardArrowRightIcon />
                </Fab>
              </Box>
            </Box>)}
          </Box>
        )}
    </div>
  );
}
