import { Container, Typography } from "@mui/material"
import React from "react"
import { useTranslation } from "react-i18next"
import { CommonTranslations, Translations } from "../../app/i18n/i18n"

export default React.memo(function () {
    const { t } = useTranslation([Translations.COMMON])
    return (
        <Container>
            <Typography variant="h1"> {t(CommonTranslations.welcome)} </Typography>
        </Container>
    )
})