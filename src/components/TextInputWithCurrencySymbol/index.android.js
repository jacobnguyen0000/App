import React, {useState, useEffect} from 'react';
import BaseTextInputWithCurrencySymbol from './BaseTextInputWithCurrencySymbol';
import * as textInputWithCurrencySymbolPropTypes from './textInputWithCurrencySymbolPropTypes';

function TextInputWithCurrencySymbol(props) {
    const [skipNextSelectionChange, setSkipNextSelectionChange] = useState(false);

    useEffect(() => {
        setSkipNextSelectionChange(true);
    }, [props.formattedAmount]);

    const onSelectionChange = (e) => {
        if (skipNextSelectionChange) {
            setSkipNextSelectionChange(false);
            return;
        }
        props.onSelectionChange(e);
    };

    return (
        <BaseTextInputWithCurrencySymbol
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
            onSelectionChange={onSelectionChange}
        />
    );
}

TextInputWithCurrencySymbol.propTypes = textInputWithCurrencySymbolPropTypes.propTypes;
TextInputWithCurrencySymbol.defaultProps = textInputWithCurrencySymbolPropTypes.defaultProps;
TextInputWithCurrencySymbol.displayName = 'TextInputWithCurrencySymbol';

export default React.forwardRef((props, ref) => (
    <TextInputWithCurrencySymbol
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        forwardedRef={ref}
    />
));
