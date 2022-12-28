import AppsTwoToneIcon from '@mui/icons-material/AppsTwoTone';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { AppRoutesNames, AppRoutesPaths } from 'modules/common/types/CommonTypes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

interface IProps {
  showAccounts: boolean | null;
}

const AppMenu: React.FC<IProps> = () => {
  const { pathname } = useRouter();

  const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);
  const open = Boolean(anchorEl);

  const menu = [
    {
      name: AppRoutesNames.Home,
      path: AppRoutesPaths.Home,
      icon: <HomeOutlinedIcon fontSize="small" sx={{ mr: 1 }} />,
      show: true,
      active: pathname === AppRoutesPaths.Home,
    },
    {
      name: AppRoutesNames.History,
      path: AppRoutesPaths.History,
      icon: <HistoryOutlinedIcon fontSize="small" sx={{ mr: 1 }} />,
      show: true,
      active: pathname === AppRoutesPaths.History,
    },
  ];

  // Handlers
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Renders
  return (
    <>
      <IconButton onClick={handleOpen}>
        <AppsTwoToneIcon />
      </IconButton>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {menu.map(
          ({ path, icon, name, show, active }, index) =>
            show && (
              <Link key={index} href={path}>
                <MenuItem onClick={handleClose} sx={{ minWidth: 100 }} selected={active}>
                  {icon}
                  {name}
                </MenuItem>
              </Link>
            ),
        )}
      </Menu>
    </>
  );
};

export default AppMenu;
