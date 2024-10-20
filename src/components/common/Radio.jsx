import * as React from 'react';
import MRadio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { InputLabel } from '@mui/material';

const toCamelCase = (str) => {
  return str
    ?.split(" ")
    ?.map((word) =>
      word === word?.toUpperCase()
        ? word
        : word?.charAt(0)?.toUpperCase() + word?.slice(1)?.toLowerCase()
    )
    ?.join(" ");
};

const Radio = (props) => {
    const { labelSx, label, name, value, options, handleChange,group } = props;

    const onChange = ({ name, value,group }) => {

        if(["true","false"].includes(value)){
            const parsedValue = ["true", "false"].includes(value) ? JSON.parse(value) : value;
            handleChange({ name, value: parsedValue, group });
            return;
        }
        handleChange({ name, value,group })
    }

    return (
        <div>
            <InputLabel sx={{ ...labelSx, fontSize: "15px", fontWeight: 400 }}>{toCamelCase(label)}</InputLabel>

            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                {
                    options.map((item, idx) => {
                        const { radioValue, label } = item
                        const parsedValue = ["true", "false"].includes(radioValue) ? JSON.parse(radioValue) : radioValue;
                        return (
                          <FormControlLabel
                            key={`radio_${idx}`}
                            value={radioValue}
                            control={
                              <MRadio
                                style={{ fontSize: "small" }}
                                checked={value == parsedValue}
                                onChange={(e) =>
                                  onChange({
                                    name,
                                    value: e.target.value,
                                    group,
                                  })
                                }
                              />
                            }
                            label={
                              <span
                                style={{ fontSize: "16px", display: "flex" }}
                              >
                                {toCamelCase(label)}
                              </span>
                            }
                          />
                        );
                    })
                }

            </RadioGroup>
        </div>
    );
}

export default Radio;
