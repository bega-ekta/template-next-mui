import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useTheme from '@mui/material/styles/useTheme';
import StringHelper from 'helpers/StringHelper';
import React from 'react';

interface IProps {
  label?: string;
  link: string;
  linkName?: string | undefined | null;
}

const ExternalLink: React.FC<IProps> = props => {
  const { label, link, linkName } = props;
  const { palette } = useTheme();

  return (
    <Box sx={{ mb: 2 }}>
      {!!label && !!linkName && (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body1" sx={{ mb: 0.5 }}>
            {label}
          </Typography>
        </Box>
      )}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          color: palette.info.main,
          '&:hover': { color: palette.primary.main },
        }}
        component="a"
        href={link}
        target="_blank"
        rel="noreferrer noopener"
      >
        {!!linkName && (
          <Typography variant="body2" fontWeight="bold" sx={{ mr: 1 }}>
            {StringHelper.shortStringOnCenter(linkName, 6)}
          </Typography>
        )}

        {!!label && !linkName && (
          <Typography variant="body1" sx={{ mr: 1 }}>
            {label}
          </Typography>
        )}

        <OpenInNewOutlinedIcon fontSize="small" color="inherit" />
      </Box>
    </Box>
  );
};

export default ExternalLink;
