import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneIcon from '@mui/icons-material/Done';
import { Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';

interface IProps {
  copyValue: string | null;
}

const CopyToClipboard: React.FC<IProps> = props => {
  const { copyValue } = props;
  const [isCopied, setIsCopied] = useState(false);

  // Effects
  useEffect(() => {
    const timer = setTimeout(() => setIsCopied(false), 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [isCopied]);

  // Handlers
  const handleCopy = () => {
    if (copyValue) {
      window.navigator.clipboard.writeText(copyValue);
      setIsCopied(true);
    }
  };

  return (
    <Box sx={{ ml: 1 }}>
      <Tooltip title={isCopied ? 'Copied' : 'Copy'}>
        <div>
          {isCopied ? (
            <DoneIcon sx={{ display: 'flex', fontSize: 18 }} color="success" />
          ) : (
            <ContentCopyIcon sx={{ display: 'flex', cursor: 'pointer', fontSize: 18 }} onClick={handleCopy} />
          )}
        </div>
      </Tooltip>
    </Box>
  );
};

export default CopyToClipboard;
