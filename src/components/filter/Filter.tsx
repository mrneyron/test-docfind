import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {useTypedSelector} from '../../actions/useTypedSelector';
import {useActions} from '../../actions/useActions';
import Select from '@mui/material/Select';
import {DateRangePicker} from '@mui/x-date-pickers-pro/DateRangePicker';

export default function Filter() {
  const {name, createRange, uuid, order, sort} = useTypedSelector(state => state.filter);
  const {setUuid, setName, setCreateRange, setSort, setOrder} = useActions();

  const gridItemSx = {marginBottom: 2};
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} sx={gridItemSx}>
          <TextField
            fullWidth
            id="outlined-uuid"
            label="ID документа"
            value={uuid}
            error={!(!uuid || (uuid && (uuid.length < 1 || uuid.length === 36)))}
            onChange={(e) => setUuid(e.target.value)}
            helperText={!uuid || (uuid && (uuid.length < 1 || uuid.length === 36))
              ? "Если заполнено поле ID документа все остальные поля будут проигнорированы"
              : "Неверный uuid"}
          />
        </Grid>
        <Grid item xs={12}  sm={12} sx={gridItemSx}>
          <DateRangePicker
            value={createRange}
            startText='Создан с:'
            endText='по:'
            onChange={(newValue) => {
              setCreateRange(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} sx={{width: "100%"}} />
                <Box sx={{mx: 2}}/>
                <TextField {...endProps} sx={{width: "100%"}} />
              </React.Fragment>
            )}
          />
        </Grid>
        <Grid item xs={12} sm={12} sx={gridItemSx}>
          <TextField
            fullWidth
            id="outlined-name"
            label="Наименование"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={12} sx={gridItemSx}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="select-label-sort">Сортировка</InputLabel>
                  <Select
                    labelId="select-label-sort"
                    id="simple-select-sort"
                    value={sort}
                    label="Сортировка"
                    onChange={(e) => setSort(e.target.value)}
                  >
                    <MenuItem value={'name'}>Наименование</MenuItem>
                    <MenuItem value={'uuid'}>Uuid</MenuItem>
                    <MenuItem value={'createdAt'}>Создан</MenuItem>
                    <MenuItem value={'desc'}>Описание</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="select-label-order"></InputLabel>
                  <Select
                    labelId="select-label-order"
                    id="simple-select-order"
                    value={order}
                    label=""
                    onChange={(e) => setOrder(e.target.value)}
                  >
                    <MenuItem value={'desc'}>По убыванию</MenuItem>
                    <MenuItem value={'asc'}>По возрастанию</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}