// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
    <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle2" component={Link} href="https://ditpa.kemenkeu.go.id" target="_blank" underline="hover">
            SINTESA V.4
        </Typography>
        <Typography variant="subtitle2" component={Link} href="https://ditpa.kemenkeu.go.id" target="_blank" underline="hover">
            &copy; Direktorat Pelaksanaan Anggaran
        </Typography>
    </Stack>
);

export default AuthFooter;
