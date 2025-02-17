import { globalStyle, keyframes, style } from '@vanilla-extract/css';

export const label = style({
  selectors: {
    '&[data-untitled="true"]': {
      opacity: 0.6,
    },
  },
});

export const favItemWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  selectors: {
    '&[data-nested="true"]': {
      marginLeft: '20px',
      width: 'calc(100% - 20px)',
    },
    '&:not(:first-of-type)': {
      marginTop: '4px',
    },
  },
});

const slideDown = keyframes({
  '0%': {
    height: '0px',
  },
  '100%': {
    height: 'var(--radix-collapsible-content-height)',
  },
});

const slideUp = keyframes({
  '0%': {
    height: 'var(--radix-collapsible-content-height)',
  },
  '100%': {
    height: '0px',
  },
});

export const collapsibleContent = style({
  overflow: 'hidden',
  marginTop: '4px',
  selectors: {
    '&[data-state="open"]': {
      animation: `${slideDown} 0.2s ease-out`,
    },
    '&[data-state="closed"]': {
      animation: `${slideUp} 0.2s ease-out`,
    },
  },
});

export const collapsibleContentInner = style({
  display: 'flex',
  flexDirection: 'column',
});

export const favItem = style({});

globalStyle(`[data-draggable=true] ${favItem}:before`, {
  content: '""',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  left: 0,
  width: 4,
  height: 4,
  transition: 'height 0.2s, opacity 0.2s',
  backgroundColor: 'var(--affine-placeholder-color)',
  borderRadius: '2px',
  opacity: 0,
  willChange: 'height, opacity',
});

globalStyle(`[data-draggable=true] ${favItem}:hover:before`, {
  height: 12,
  opacity: 1,
});

globalStyle(`[data-draggable=true][data-dragging=true] ${favItem}`, {
  opacity: 0.5,
});

globalStyle(`[data-draggable=true][data-dragging=true] ${favItem}:before`, {
  height: 32,
  width: 2,
  opacity: 1,
});

export const dragPageItemOverlay = style({
  display: 'flex',
  alignItems: 'center',
  background: 'var(--affine-hover-color-filled)',
  boxShadow: 'var(--affine-menu-shadow)',
  minHeight: '30px',
  maxWidth: '360px',
  width: '100%',
  fontSize: 'var(--affine-font-sm)',
  gap: '8px',
  padding: '4px',
  borderRadius: '4px',
  cursor: 'grabbing',
});

globalStyle(`${dragPageItemOverlay} svg`, {
  width: '20px',
  height: '20px',
  color: 'var(--affine-icon-color)',
});

globalStyle(`${dragPageItemOverlay} span`, {
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
});

export const favoriteList = style({
  selectors: {
    '&[data-over="true"]': {
      background: 'var(--affine-hover-color-filled)',
      borderRadius: '4px',
    },
  },
});

export const favoritePostfixItem = style({
  display: 'flex',
  alignItems: 'center',
});

export const menuItem = style({
  gap: '8px',
});

globalStyle(`${menuItem} svg`, {
  width: '20px',
  height: '20px',
  color: 'var(--affine-icon-color)',
});
globalStyle(`${menuItem}.danger:hover svg`, {
  color: 'var(--affine-error-color)',
});
