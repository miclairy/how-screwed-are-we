import {ReactNode} from "react";
import {Box, Typography} from "@mui/material";

export const IconAndText = ({text, children}: { text: string, children: ReactNode }) =>
    <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
        {children}
        <Typography variant={'subtitle1'}>
            {text}
        </Typography>
    </Box>
