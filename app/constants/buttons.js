import React from 'react';
import R from 'ramda';
import SVG from 'react-inlinesvg';

/* eslint-disable global-require */
export const ARROWS = {
  b: <SVG src={require('images/buttons/b.svg')} />,
  f: <SVG src={require('images/buttons/f.svg')} />,
  d: <SVG src={require('images/buttons/d.svg')} />,
  db: <SVG src={require('images/buttons/db.svg')} />,
  df: <SVG src={require('images/buttons/df.svg')} />,
  u: <SVG src={require('images/buttons/u.svg')} />,
  uf: <SVG src={require('images/buttons/uf.svg')} />,
  ub: <SVG src={require('images/buttons/ub.svg')} />,
};

export const BUTTONS = {
  '1': <SVG src={require('images/buttons/1.svg')} />,
  '1+2': <SVG src={require('images/buttons/1+2.svg')} />,
  '1+2+3': <SVG src={require('images/buttons/1+2+3.svg')} />,
  '1+2+3+4': <SVG src={require('images/buttons/1+2+3+4.svg')} />,
  '1+2+4': <SVG src={require('images/buttons/1+2+4.svg')} />,
  '1+3': <SVG src={require('images/buttons/1.svg')} />,
  '1+3+4': <SVG src={require('images/buttons/1+3+4.svg')} />,
  '1+4': <SVG src={require('images/buttons/1+4.svg')} />,
  '2': <SVG src={require('images/buttons/2.svg')} />,
  '2+3': <SVG src={require('images/buttons/2+3.svg')} />,
  '2+3+4': <SVG src={require('images/buttons/2+3+4.svg')} />,
  '2+4': <SVG src={require('images/buttons/2+4.svg')} />,
  '3': <SVG src={require('images/buttons/3.svg')} />,
  '3+4': <SVG src={require('images/buttons/3+4.svg')} />,
  '4': <SVG src={require('images/buttons/4.svg')} />,
};

export const SeparatorIcon = (
  <SVG src={require('images/buttons/separator.svg')} className="separator" />
);

export const ARROW_KEYS = R.keys(ARROWS);
export const BUTTONS_KEYS = R.keys(BUTTONS);
