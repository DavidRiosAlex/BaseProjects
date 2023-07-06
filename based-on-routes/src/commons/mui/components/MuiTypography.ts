import { Components, Theme } from "@mui/material"

export default {
    styleOverrides: {
        root: ({ theme }) => ({
            color: theme.palette.info.dark,
            fontFamily: '"Montserrat", sans-serif'
        })
    }
} as Components<Omit<Theme, "components">>['MuiTypography']