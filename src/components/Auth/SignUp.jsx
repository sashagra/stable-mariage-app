import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import {useState} from "react";

// TODO make inner registration form and move input name and surname to it


export default function SignUp() {
    const [formType, setFormType] = useState('login')

    const formTexts = {
        login: {
            formName: 'Вход',
            submitButtonText: 'Войти',
            changeFormTextLink: 'Еще не зарегистрированы? Зарегистрироваться'
        },
        signUp: {
            formName: 'Регистрация',
            submitButtonText: 'Зарегистрироваться',
            changeFormTextLink: 'Уже зарегистрированы? Войти'
        }
    }

    const handleFormType = (event) => {
        event.preventDefault()
        setFormType((type) => type === 'login' ? 'signUp' : 'login')
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const sFunc = formType === 'login' ? 'Входим' : 'Регистрируем'
        console.log({
            email: data.get('email'),
            password: data.get('password'),
            action: sFunc
        })
    }

    return (
            <>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        { formTexts[formType].formName }
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    type="email"
                                    label="Email адрес"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Пароль"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            {formType === 'signUp' && <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="repeat-password"
                                    label="Еще раз пароль"
                                    type="password"
                                    id="repeat-password"
                                    autoComplete="new-password"
                                />
                            </Grid>}
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            { formTexts[formType].submitButtonText }
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" onClick={handleFormType} variant="body2">
                                    { formTexts[formType].changeFormTextLink }
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </>
    )
}