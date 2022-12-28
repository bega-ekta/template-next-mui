import '@mui/lab/themeAugmentation';
import { alpha, createTheme, darken, lighten } from '@mui/material';

import { lightColors, lightThemeColors } from './lightColors';

export const lightTheme = createTheme({
  // direction: i18n.dir(),
  colors: {
    gradients: {
      blue1: lightColors.gradients.blue1,
      blue2: lightColors.gradients.blue2,
      blue3: lightColors.gradients.blue3,
      blue4: lightColors.gradients.blue4,
      blue5: lightColors.gradients.blue5,
      orange1: lightColors.gradients.orange1,
      orange2: lightColors.gradients.orange2,
      orange3: lightColors.gradients.orange3,
      purple1: lightColors.gradients.purple1,
      purple3: lightColors.gradients.purple3,
      pink1: lightColors.gradients.pink1,
      pink2: lightColors.gradients.pink2,
      green1: lightColors.gradients.green1,
      green2: lightColors.gradients.green2,
      black1: lightColors.gradients.black1,
      black2: lightColors.gradients.black2,
    },
    shadows: {
      success: lightColors.shadows.success,
      error: lightColors.shadows.error,
      primary: lightColors.shadows.primary,
      info: lightColors.shadows.info,
      warning: lightColors.shadows.warning,
    },
    alpha: {
      white: {
        5: alpha(lightThemeColors.white, 0.02),
        10: alpha(lightThemeColors.white, 0.1),
        30: alpha(lightThemeColors.white, 0.3),
        50: alpha(lightThemeColors.white, 0.5),
        70: alpha(lightThemeColors.white, 0.7),
        100: lightThemeColors.white,
      },
      trueWhite: {
        5: alpha(lightThemeColors.white, 0.02),
        10: alpha(lightThemeColors.white, 0.1),
        30: alpha(lightThemeColors.white, 0.3),
        50: alpha(lightThemeColors.white, 0.5),
        70: alpha(lightThemeColors.white, 0.7),
        100: lightThemeColors.white,
      },
      black: {
        5: alpha(lightThemeColors.black, 0.02),
        10: alpha(lightThemeColors.black, 0.1),
        30: alpha(lightThemeColors.black, 0.3),
        50: alpha(lightThemeColors.black, 0.5),
        70: alpha(lightThemeColors.black, 0.7),
        100: lightThemeColors.black,
      },
    },
    secondary: {
      lighter: alpha(lightThemeColors.secondary, 0.1),
      light: lighten(lightThemeColors.secondary, 0.3),
      main: lightThemeColors.secondary,
      dark: darken(lightThemeColors.secondary, 0.2),
    },
    primary: {
      lighter: alpha(lightThemeColors.primary, 0.1),
      light: lighten(lightThemeColors.primary, 0.3),
      main: lightThemeColors.primary,
      dark: darken(lightThemeColors.primary, 0.2),
    },
    success: {
      lighter: alpha(lightThemeColors.success, 0.1),
      light: lighten(lightThemeColors.success, 0.3),
      main: lightThemeColors.success,
      dark: darken(lightThemeColors.success, 0.2),
    },
    warning: {
      lighter: alpha(lightThemeColors.warning, 0.1),
      light: lighten(lightThemeColors.warning, 0.3),
      main: lightThemeColors.warning,
      dark: darken(lightThemeColors.warning, 0.2),
    },
    error: {
      lighter: alpha(lightThemeColors.error, 0.1),
      light: lighten(lightThemeColors.error, 0.3),
      main: lightThemeColors.error,
      dark: darken(lightThemeColors.error, 0.2),
    },
    info: {
      lighter: alpha(lightThemeColors.info, 0.1),
      light: lighten(lightThemeColors.info, 0.3),
      main: lightThemeColors.info,
      dark: darken(lightThemeColors.info, 0.2),
    },
  },
  general: {
    reactFrameworkColor: '#00D8FF',
    borderRadiusSm: '6px',
    borderRadius: '10px',
    borderRadiusLg: '12px',
    borderRadiusXl: '16px',
  },
  sidebar: {
    background: lightColors.layout.sidebar.background,
    textColor: lightColors.layout.sidebar.textColor,
    dividerBg: lightColors.layout.sidebar.dividerBg,
    menuItemColor: lightColors.layout.sidebar.menuItemColor,
    menuItemColorActive: lightColors.layout.sidebar.menuItemColorActive,
    menuItemBg: lightColors.layout.sidebar.menuItemBg,
    menuItemBgActive: lightColors.layout.sidebar.menuItemBgActive,
    menuItemIconColor: lightColors.layout.sidebar.menuItemIconColor,
    menuItemIconColorActive: lightColors.layout.sidebar.menuItemIconColorActive,
    menuItemHeadingColor: lightColors.layout.sidebar.menuItemHeadingColor,
    boxShadow: '2px 0 3px rgba(159, 162, 191, .18), 1px 0 1px rgba(159, 162, 191, 0.32)',
    width: '290px',
  },
  header: {
    height: '80px',
    background: lightColors.alpha.white[100],
    boxShadow: lightColors.shadows.cardSm,
    textColor: lightColors.secondary.main,
  },
  spacing: 9,
  palette: {
    common: {
      black: lightColors.alpha.black[100],
      white: lightColors.alpha.white[100],
    },
    mode: 'light',
    primary: {
      light: lightColors.primary.light,
      main: lightColors.primary.main,
      dark: lightColors.primary.dark,
    },
    secondary: {
      light: lightColors.secondary.light,
      main: lightColors.secondary.main,
      dark: lightColors.secondary.dark,
    },
    error: {
      light: lightColors.error.light,
      main: lightColors.error.main,
      dark: lightColors.error.dark,
      contrastText: lightColors.alpha.white[100],
    },
    success: {
      light: lightColors.success.light,
      main: lightColors.success.main,
      dark: lightColors.success.dark,
      contrastText: lightColors.alpha.white[100],
    },
    info: {
      light: lightColors.info.light,
      main: lightColors.info.main,
      dark: lightColors.info.dark,
      contrastText: lightColors.alpha.white[100],
    },
    warning: {
      light: lightColors.warning.light,
      main: lightColors.warning.main,
      dark: lightColors.warning.dark,
      contrastText: lightColors.alpha.white[100],
    },
    text: {
      primary: lightColors.alpha.black[100],
      secondary: lightColors.alpha.black[70],
      disabled: lightColors.alpha.black[50],
    },
    background: {
      paper: lightColors.alpha.white[100],
      default: lightColors.layout.general.bodyBg,
    },
    action: {
      active: lightColors.alpha.black[100],
      hover: lightColors.primary.lighter,
      hoverOpacity: 0.1,
      selected: lightColors.alpha.black[10],
      selectedOpacity: 0.1,
      disabled: lightColors.alpha.black[50],
      disabledBackground: lightColors.alpha.black[5],
      disabledOpacity: 0.38,
      focus: lightColors.alpha.black[10],
      focusOpacity: 0.05,
      activatedOpacity: 0.12,
    },
    tonalOffset: 0.5,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1840,
    },
  },
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(darken(lightThemeColors.primaryAlt, 0.4), 0.2),
          backdropFilter: 'blur(2px)',

          '&.MuiBackdrop-invisible': {
            backgroundColor: 'transparent',
            backdropFilter: 'blur(2px)',
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          marginLeft: 8,
          marginRight: 8,
          fontWeight: 'bold',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        'html, body': {
          width: '100%',
          height: '100%',
        },
        body: {
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%',
          flex: 1,
        },
        '#__next': {
          width: '100%',
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
        },
        html: {
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%',
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
        },
        a: {
          textDecoration: 'none',
          color: 'inherit',
        },
        ul: {
          margin: 0,
          padding: 0,
          listStyle: 'none',
        },
        li: {
          listStyle: 'none',
        },
        '.child-popover .MuiPaper-root .MuiList-root': {
          flexDirection: 'column',
        },
        '#nprogress': {
          pointerEvents: 'none',
        },
        '#nprogress .bar': {
          background: lightColors.primary.lighter,
        },
        '#nprogress .spinner-icon': {
          borderTopColor: lightColors.primary.lighter,
          borderLeftColor: lightColors.primary.lighter,
        },
        '#nprogress .peg': {
          boxShadow: '0 0 15px ' + lightColors.primary.lighter + ', 0 0 8px' + lightColors.primary.light,
        },
        ':root': {
          '--swiper-theme-color': lightColors.primary.main,
        },
        code: {
          background: lightColors.info.lighter,
          color: lightColors.info.dark,
          borderRadius: 4,
          padding: 4,
        },
        '@keyframes pulse': {
          '0%': {
            transform: 'scale(.75)',
          },
          '20%': {
            transform: 'scale(1.1)',
          },
          '40%': {
            transform: 'scale(.75)',
          },
          '60%': {
            transform: 'scale(1.05)',
          },
          '80%': {
            transform: 'scale(.75)',
          },
          '100%': {
            transform: 'scale(.75)',
          },
        },
        '@keyframes ripple': {
          '0%': {
            transform: 'scale(.8)',
            opacity: 1,
          },
          '100%': {
            transform: 'scale(2.8)',
            opacity: 0,
          },
        },
        '@keyframes float': {
          '0%': {
            transform: 'translate(0%, 0%)',
          },
          '100%': {
            transform: 'translate(3%, 3%)',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        iconOutlined: {
          color: lightColors.alpha.black[50],
        },
        icon: {
          top: 'calc(50% - 14px)',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiInputAdornment-positionEnd.MuiInputAdornment-outlined': {
            paddingRight: 6,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: lightColors.alpha.black[50],
          },
          '&.Mui-focused:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: lightColors.primary.main,
          },
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        colorPrimary: {
          fontWeight: 'bold',
          lineHeight: '40px',
          fontSize: 13,
          background: lightColors.alpha.black[5],
          color: lightColors.alpha.black[70],
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        action: {
          marginTop: -5,
          marginBottom: -5,
        },
        title: {
          fontSize: 15,
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        colorSecondary: {
          background: lightColors.alpha.black[5],
          color: lightColors.alpha.black[100],

          '&:hover': {
            background: lightColors.alpha.black[10],
          },
        },
        deleteIcon: {
          color: lightColors.error.light,

          '&:hover': {
            color: lightColors.error.main,
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: 'none',

          '&.Mui-expanded': {
            margin: 0,
          },
          '&::before': {
            display: 'none',
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 'bold',
        },
        colorDefault: {
          background: lightColors.alpha.black[30],
          color: lightColors.alpha.white[100],
        },
      },
    },
    MuiAvatarGroup: {
      styleOverrides: {
        root: {
          alignItems: 'center',
        },
        avatar: {
          background: lightColors.alpha.black[10],
          fontSize: 13,
          color: lightColors.alpha.black[70],
          fontWeight: 'bold',

          '&:first-of-type': {
            border: 0,
            background: 'transparent',
          },
        },
      },
    },
    MuiListItemAvatar: {
      styleOverrides: {
        alignItemsFlexStart: {
          marginTop: 0,
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        page: {
          fontSize: 13,
          fontWeight: 'bold',
          transition: 'all .2s',
        },
        textPrimary: {
          '&.Mui-selected': {
            boxShadow: lightColors.shadows.primary,
          },
          '&.MuiButtonBase-root:hover': {
            background: lightColors.alpha.black[5],
          },
          '&.Mui-selected.MuiButtonBase-root:hover': {
            background: lightColors.primary.main,
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          fontWeight: 'bold',
          textTransform: 'none',
          paddingLeft: 16,
          paddingRight: 16,
          transition: 'all 0.3s ease-in-out',

          '.MuiSvgIcon-root': {
            transition: 'all .2s',
          },

          ':active': {
            transform: 'scale(0.97)',
          },
        },
        endIcon: {
          marginRight: -8,
        },
        containedSecondary: {
          backgroundColor: lightColors.secondary.main,
          color: lightColors.alpha.white[100],
          border: '1px solid ' + lightColors.alpha.black[30],
        },
        outlinedSecondary: {
          backgroundColor: lightColors.alpha.white[100],

          '&:hover, &.MuiSelected': {
            backgroundColor: lightColors.alpha.black[5],
            color: lightColors.alpha.black[100],
          },
        },
        sizeSmall: {
          padding: '6px 16px',
          lineHeight: 1.5,
        },
        sizeMedium: {
          padding: '8px 20px',
        },
        sizeLarge: {
          padding: '11px 24px',
        },
        textSizeSmall: {
          padding: '7px 12px',
        },
        textSizeMedium: {
          padding: '9px 16px',
        },
        textSizeLarge: {
          padding: '12px 16px',
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false,
      },
      styleOverrides: {
        root: {
          borderRadius: 6,
        },
      },
    },
    MuiToggleButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          color: lightColors.primary.main,
          background: lightColors.alpha.white[100],
          transition: 'all .2s',

          '&:hover, &.Mui-selected, &.Mui-selected:hover': {
            color: lightColors.alpha.white[100],
            background: lightColors.primary.main,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: 8,

          '& .MuiTouchRipple-root': {
            borderRadius: 8,
          },

          ':active': {
            transform: 'scale(0.97)',
          },
        },
        sizeSmall: {
          padding: 4,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '& .MuiTouchRipple-root': {
            opacity: 0.3,
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          background: lightColors.alpha.black[10],
          border: 0,
          height: 1,
        },
        vertical: {
          height: 'auto',
          width: 1,

          '&.MuiDivider-flexItem.MuiDivider-fullWidth': {
            height: 'auto',
          },
          '&.MuiDivider-absolute.MuiDivider-fullWidth': {
            height: '100%',
          },
        },
        withChildren: {
          '&:before, &:after': {
            border: 0,
          },
        },
        wrapper: {
          background: lightColors.alpha.white[100],
          fontWeight: 'bold',
          height: 24,
          lineHeight: '24px',
          marginTop: -12,
          color: 'inherit',
          textTransform: 'uppercase',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: 0,
        },
        elevation0: {
          boxShadow: 'none',
        },
        elevation: {
          boxShadow: lightColors.shadows.card,
        },
        elevation2: {
          boxShadow: lightColors.shadows.cardSm,
        },
        elevation24: {
          boxShadow: lightColors.shadows.cardLg,
        },
        outlined: {
          boxShadow: lightColors.shadows.card,
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          height: 6,
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          '& .MuiSlider-valueLabelCircle, .MuiSlider-valueLabelLabel': {
            transform: 'none',
          },
          '& .MuiSlider-valueLabel': {
            borderRadius: 6,
            background: lightColors.alpha.black[100],
            color: lightColors.alpha.white[100],
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,

          '& .MuiListItem-button': {
            transition: 'all .2s',

            '& > .MuiSvgIcon-root': {
              minWidth: 34,
            },

            '& .MuiTouchRipple-root': {
              opacity: 0.2,
            },
          },
          '& .MuiListItem-root.MuiButtonBase-root.Mui-selected': {
            backgroundColor: alpha(lightColors.primary.lighter, 0.4),
          },
          '& .MuiMenuItem-root.MuiButtonBase-root:active': {
            backgroundColor: alpha(lightColors.primary.lighter, 0.4),
          },
          '& .MuiMenuItem-root.MuiButtonBase-root .MuiTouchRipple-root': {
            opacity: 0.2,
          },
        },
        padding: {
          padding: '12px',

          '& .MuiListItem-button': {
            borderRadius: 6,
            margin: '1px 0',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          height: 38,
          minHeight: 38,
          overflow: 'visible',
        },
        indicator: {
          height: 38,
          minHeight: 38,
          borderRadius: 6,
          border: '1px solid ' + lightColors.primary.dark,
          boxShadow: 'none',
        },
        scrollableX: {
          overflow: 'visible !important',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          padding: 10,
          height: 38,
          minHeight: 38,
          borderRadius: 6,
          transition: 'color .2s',
          textTransform: 'capitalize',

          '&.MuiButtonBase-root': {
            minWidth: 'auto',
            paddingLeft: 20,
            paddingRight: 20,
            marginRight: 4,
          },
          '&.Mui-selected, &.Mui-selected:hover': {
            color: lightColors.alpha.white[100],
            zIndex: 5,
          },
          '&:hover': {
            color: lightColors.alpha.black[100],
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          padding: 12,
        },
        list: {
          padding: 8,

          '& .MuiMenuItem-root.MuiButtonBase-root': {
            fontSize: 14,
            marginTop: 1,
            marginBottom: 1,
            transition: 'all .2s',
            color: lightColors.alpha.black[70],

            '& .MuiTouchRipple-root': {
              opacity: 0.2,
            },

            '&:hover, &:active, &.active, &.Mui-selected': {
              color: lightColors.alpha.black[100],
              background: alpha(lightColors.primary.lighter, 0.4),
            },
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          background: 'transparent',
          transition: 'all .2s',
          padding: '6px 10px',
          minHeight: 'auto',

          '&:hover, &:active, &.active, &.Mui-selected': {
            color: lightColors.alpha.black[100],
            background: alpha(lightColors.primary.lighter, 0.4),
          },
          '&.Mui-selected:hover': {
            background: alpha(lightColors.primary.lighter, 0.4),
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&.MuiButtonBase-root': {
            color: lightColors.secondary.main,

            '&:hover, &:active, &.active, &.Mui-selected': {
              color: lightColors.alpha.black[100],
              background: lighten(lightColors.primary.lighter, 0.5),
            },
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        tag: {
          margin: 1,
        },
        root: {
          '.MuiAutocomplete-inputRoot.MuiOutlinedInput-root .MuiAutocomplete-endAdornment': {
            right: 14,
          },
        },
        clearIndicator: {
          background: lightColors.error.lighter,
          color: lightColors.error.main,
          marginRight: 8,

          '&:hover': {
            background: lightColors.error.lighter,
            color: lightColors.error.dark,
          },
        },
        popupIndicator: {
          color: lightColors.alpha.black[50],

          '&:hover': {
            background: lightColors.primary.lighter,
            color: lightColors.primary.main,
          },
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        toolbar: {
          '& .MuiIconButton-root': {
            padding: 8,
          },
        },
        select: {
          '&:focus': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '0 !important',
          padding: '0 !important',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        head: {
          background: lightColors.alpha.black[5],
        },
        root: {
          transition: 'background-color .2s',

          '&.MuiTableRow-hover:hover': {
            backgroundColor: lightColors.alpha.black[5],
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottomColor: lightColors.alpha.black[10],
          fontSize: 14,
        },
        head: {
          textTransform: 'uppercase',
          fontSize: 13,
          fontWeight: 'bold',
          color: lightColors.alpha.black[70],
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        message: {
          lineHeight: 1.5,
          fontSize: 14,
        },
        standardInfo: {
          color: lightColors.info.main,
        },
        action: {
          color: lightColors.alpha.black[70],
        },
      },
    },
    MuiTimelineDot: {
      styleOverrides: {
        root: {
          margin: 0,
          zIndex: 5,
          position: 'absolute',
          top: '50%',
          marginTop: -6,
          left: -6,
        },
        outlined: {
          backgroundColor: lightColors.alpha.white[100],
          boxShadow: '0 0 0 6px ' + lightColors.alpha.white[100],
        },
        outlinedPrimary: {
          backgroundColor: lightColors.alpha.white[100],
          boxShadow: '0 0 0 6px ' + lightColors.alpha.white[100],
        },
      },
    },
    MuiTimelineConnector: {
      styleOverrides: {
        root: {
          position: 'absolute',
          height: '100%',
          top: 0,
          borderRadius: 50,
          backgroundColor: lightColors.alpha.black[10],
        },
      },
    },
    MuiTimelineItem: {
      styleOverrides: {
        root: {
          minHeight: 0,
          padding: '8px 0',

          '&:before': {
            display: 'none',
          },
        },
        missingOppositeContent: {
          '&:before': {
            display: 'none',
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: alpha(lightColors.alpha.black['100'], 0.95),
          padding: '5px 10px',
          fontSize: 13,
        },
        arrow: {
          color: alpha(lightColors.alpha.black['100'], 0.95),
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          height: 33,
          overflow: 'visible',

          '& .MuiButtonBase-root': {
            position: 'absolute',
            padding: 6,
            transition: 'left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          },
          '& .MuiIconButton-root': {
            borderRadius: 100,
          },
          '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
            opacity: 0.3,
          },
        },
        thumb: {
          border: '1px solid ' + lightColors.alpha.black[30],
          boxShadow: '0px 9px 14px ' + lightColors.alpha.black[10] + ', 0px 2px 2px ' + lightColors.alpha.black[10],
        },
        track: {
          backgroundColor: lightColors.alpha.black[5],
          border: '1px solid ' + lightColors.alpha.black[10],
          boxShadow: 'inset 0px 1px 1px ' + lightColors.alpha.black[10],
          opacity: 1,
        },
        colorPrimary: {
          '& .MuiSwitch-thumb': {
            backgroundColor: lightColors.alpha.white[100],
          },

          '&.Mui-checked .MuiSwitch-thumb': {
            backgroundColor: lightColors.primary.main,
          },
        },
      },
    },
    MuiStepper: {
      styleOverrides: {
        root: {
          paddingTop: 20,
          paddingBottom: 20,
          background: lightColors.alpha.black[5],
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          '&.MuiStepIcon-completed': {
            color: lightColors.success.main,
          },
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'div',
          h4: 'div',
          h5: 'div',
          h6: 'div',
          subtitle1: 'div',
          subtitle2: 'div',
          body1: 'div',
          body2: 'div',
        },
      },
      styleOverrides: {
        gutterBottom: {
          marginBottom: 4,
        },
        paragraph: {
          fontSize: 17,
          lineHeight: 1.7,
        },
      },
    },
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    h1: {
      fontWeight: 700,
      fontSize: 35,
    },
    h2: {
      fontWeight: 700,
      fontSize: 30,
    },
    h3: {
      fontWeight: 700,
      fontSize: 25,
      lineHeight: 1.4,
      color: lightColors.alpha.black[100],
    },
    h4: {
      fontWeight: 700,
      fontSize: 22,
    },
    h5: {
      fontWeight: 700,
      fontSize: 18,
    },
    h6: {
      fontSize: 16,
    },
    body1: {
      fontSize: 15,
    },
    body2: {
      fontSize: 14,
    },
    button: {
      fontWeight: 600,
    },
    caption: {
      fontSize: 13,
      textTransform: 'uppercase',
      color: lightColors.alpha.black[50],
    },
    subtitle1: {
      fontSize: 14,
      color: lightColors.alpha.black[70],
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: 15,
      color: lightColors.alpha.black[70],
    },
    overline: {
      fontSize: 13,
      fontWeight: 700,
      textTransform: 'uppercase',
    },
  },
  shadows: [
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
  ],
});
