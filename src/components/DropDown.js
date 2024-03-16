import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";

const selectStyle = {
  color: "white", // Text color
  "&:before": {
    borderColor: "white", // Underline color when not focused
  },
  "&:after": {
    borderColor: "white", // Underline color when focused
  },
  "&:hover:not(.Mui-disabled):before": {
    borderColor: "white", // Underline color on hover
  },
};

const menuStyle = {
  color: "white", // Text color
  backgroundColor: "#333", // Dropdown background color
  display: "flex", // Flex display for vertical alignment
  flexDirection: "column", // Align items vertically
};

export default function DropDown() {
  return (
    <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
      <InputLabel id="demo-select-small-label" style={{ color: "white" }}>
        Omar Khan
      </InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        style={selectStyle}
        MenuProps={{ PaperProps: { style: menuStyle } }}
      >
        <MenuItem value="">
          <em>Home</em>
        </MenuItem>
        <MenuItem>
          <Link
            to="/profile"
            style={{ color: "white", textDecoration: "none" }}
          >
            Profile
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to="/edit-email"
            style={{ color: "white", textDecoration: "none" }}
          >
            Edit Email
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Logout
          </Link>
        </MenuItem>
        <MenuItem>
          <Link style={{ color: "white", textDecoration: "none" }}>
            Delete User
          </Link>
        </MenuItem>
      </Select>
    </FormControl>
  );
}
