import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import prismTheme from 'prism-react-renderer/themes/oceanicNext';
import Highlight, { defaultProps } from 'prism-react-renderer';

const useStyles = makeStyles(() => ({
  root: {
    padding: '1.5em !important',
    margin: '0 !important',
  },
}));

const Prism = ({ code }) => {
  const classes = useStyles();
  return (
    <Highlight
      {...defaultProps}
      theme={{
        ...prismTheme,
        plain: { ...prismTheme.plain, color: '#e5e5e5', fontSize: 14 },
      }}
      code={code}
      language="jsx"
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} ${classes.root}`} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

Prism.propTypes = {
  code: PropTypes.string.isRequired,
};
Prism.defaultProps = {};

export default Prism;
