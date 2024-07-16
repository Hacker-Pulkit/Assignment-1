'use client'
import { Box, MenuItem, TextField, Snackbar, createTheme, ThemeProvider } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import { Button } from "./ui/moving-border";
import { AuroraBackground } from "./ui/aurora-background";

const schema = yup.object().shape({
  fullName: yup.string().required('Full Name is required'),
  age: yup
    .number()
    .typeError('Age must be a number')
    .required('Age is required')
    .positive('Age must be a positive number')
    .integer('Age must be an integer'),
  gender: yup.string().required('Gender is required'),
  city: yup.string().required('City is required'),
  state: yup.string().required('State is required'),
  pincode: yup
    .string()
    .required('Pincode is required')
    .matches(/^\d{6}$/, 'Pincode must be 6 digits'),
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    background: {
      default: '#121212',
      paper: '#121212',
    },
    text: {
      primary: '#ffffff',
    },
  },
});

const ApplicationForm = () => {
  const { control, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: '',
      age: 0,
      gender: '',
      city: '',
      state: '',
      pincode: '',
    },
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const onSubmit = (data: any) => {
    console.log(data);
    reset();
    setOpenSnackbar(true);
  };
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const textFieldStyles = {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
    '& .MuiInputLabel-root': {
      color: 'white',
    },
    '& .MuiInputBase-input': {
      color: 'white',
    },
    '& .MuiFormHelperText-root': {
      color: 'white',
    },
    '& .MuiSelect-select': {
      backgroundColor: 'black',
      color: 'white',
    },
  };

  const menuItemStyles = {
    backgroundColor: 'black',
    color: 'white',
    '&:hover': {
      backgroundColor: 'grey',
    },
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AuroraBackground>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
          <Box 
            component="form" 
            onSubmit={handleSubmit(onSubmit)} 
            noValidate 
            sx={{ 
              width: '100%', 
              maxWidth: '500px', 
              backgroundColor: 'black', 
              padding: 3, 
              borderRadius: '1.75rem', 
              border: '1px solid white',
            }}
          >
            <div className='text-center'>
              <p className="h4 mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Application Form</p>
              <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Please fill the form below:</h2>
            </div>

            <Controller
              name="fullName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!errors.fullName}
                  helperText={errors.fullName?.message}
                  sx={textFieldStyles}
                />
              )}
            />
            <Controller
              name="age"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Age"
                  type="number"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!errors.age}
                  helperText={errors.age?.message}
                  sx={textFieldStyles}
                />
              )}
            />
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Gender"
                  select
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!errors.gender}
                  helperText={errors.gender?.message}
                  sx={textFieldStyles}
                >
                  <MenuItem value="male" sx={menuItemStyles}>Male</MenuItem>
                  <MenuItem value="female" sx={menuItemStyles}>Female</MenuItem>
                  <MenuItem value="other" sx={menuItemStyles}>Other</MenuItem>
                </TextField>
              )}
            />
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="City"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!errors.city}
                  helperText={errors.city?.message}
                  sx={textFieldStyles}
                />
              )}
            />
            <Controller
              name="state"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="State"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!errors.state}
                  helperText={errors.state?.message}
                  sx={textFieldStyles}
                />
              )}
            />
            <Controller
              name="pincode"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Pincode"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={!!errors.pincode}
                  helperText={errors.pincode?.message}
                  sx={textFieldStyles}
                />
              )}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
              style={{ borderRadius: '1.75rem' }}
            >
              Submit
            </Button>
            <Snackbar
              open={openSnackbar}
              autoHideDuration={1000}
              onClose={handleCloseSnackbar}
              message="Form submitted successfully!"
              action={
                <Button
                  borderRadius="1.75rem"
                  className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                  onClick={handleCloseSnackbar}
                >
                  Close
                </Button>
              }
            />
          </Box>
        </div>
      </AuroraBackground>
    </ThemeProvider>
  );
};

export default ApplicationForm;
