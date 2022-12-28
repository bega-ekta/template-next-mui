import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DownloadIcon from '@mui/icons-material/Download';
import UploadIcon from '@mui/icons-material/Upload';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import StringHelper from 'helpers/StringHelper';
import { ICsvUploadData } from 'modules/common/types/CommonTypes';
import { useEffect } from 'react';
import { formatFileSize, useCSVDownloader, useCSVReader } from 'react-papaparse';

interface IProps {
  onUpload: (csvData: ICsvUploadData) => void;
  onRemove: () => void;
  template: any[];
  data: any | null;
}

const CSVUploader: React.FC<IProps> = props => {
  const { onUpload, template, onRemove, data } = props;
  const { CSVReader } = useCSVReader();
  const { CSVDownloader, Type } = useCSVDownloader();

  useEffect(() => {
    // CSVReader()
  }, []);

  // Renders
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', justifyContent: 'center' }}>
      <CSVDownloader type={Type.Link} filename="Template" data={template}>
        <Button
          type="button"
          size="small"
          color="inherit"
          startIcon={<DownloadIcon />}
          sx={{ mr: 1 }}
          title="Download template"
          aria-label="Download template"
        >
          Template
        </Button>
      </CSVDownloader>

      <CSVReader onUploadAccepted={onUpload} config={{ header: true }}>
        {({ getRootProps, acceptedFile, getRemoveFileProps }: any) => (
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {(!acceptedFile || data === null) && (
              <Button
                type="button"
                {...getRootProps()}
                variant="outlined"
                size="small"
                color="info"
                title="Upload csv file"
                aria-label="Upload csv file"
                startIcon={<UploadIcon />}
              >
                Upload CSV
              </Button>
            )}

            {acceptedFile && data && (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="body2" sx={{ mr: 1 }}>
                  {StringHelper.shortString(acceptedFile.name, 15)}
                </Typography>
                <Typography variant="body2" fontWeight="bold">
                  {formatFileSize(acceptedFile.size)}
                </Typography>

                <IconButton
                  {...getRemoveFileProps()}
                  color="error"
                  type="button"
                  size="small"
                  sx={{ ml: 1 }}
                  title="Remove csv file"
                  aria-label="Remove csv file"
                  onClick={(event: Event) => {
                    getRemoveFileProps().onClick(event);
                    onRemove();
                  }}
                >
                  <DeleteForeverIcon />
                </IconButton>
              </Box>
            )}
          </Box>
        )}
      </CSVReader>
    </Box>
  );
};

export default CSVUploader;
