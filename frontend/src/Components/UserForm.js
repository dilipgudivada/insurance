import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { TextField, InputLabel, Select, Button } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { ServiceCall } from "../Services/Services";
import SaveIcon from "@material-ui/icons/Save";
import { useSelector } from "react-redux";

export default function UserForm(props) {
  const locations = useSelector((state) => state.locationReducer);
  const [userData, setUserData] = useState(props?.props?.allUsers);
  const [type, setType] = React.useState("");
  const [url, seturl] = React.useState("");
  const handleTextChange = (event) => {
    if (event.target.name === "RoleId" && event.target.value !== "2") {
      setUserData({
        ...userData,
        [event.target.name]: event.target.value,
        LocationId: null,
      });
    } else {
      setUserData({ ...userData, [event.target.name]: event.target.value });
    }
  };
  const handlesubmit = () => {
    ServiceCall.postService(url, type, userData).then((data) => alert(data));
  };
  React.useEffect(() => {
    if (props.props.EditUser) {
      setType("put");
      seturl("api/updateuser/" + props.props.allUsers.UserId);
    } else {
      setType("post");
      seturl("api/createuser");
    }
  }, [props]);
  return (
    <React.Fragment>
      <AppBar style={{ backgroundColor: "#3f9fb5" }}>
        <Toolbar>
          <Typography variant="h4" gutterBottom>
            {props.props.EditUser ? "Edit user" : "Add User"}
          </Typography>
          <IconButton
            color="inherit"
            onClick={props.props.handleClose}
            aria-label="close"
            style={{ fontSize: 36, position: "absolute", right: 20 }}
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Grid
        container
        spacing={3}
        style={{ width: "96%", paddingLeft: 40, marginTop: 65 }}
      >
        <Grid item xs={12} sm={6}>
          <TextField
            disabled={props?.props?.EditUser}
            id="UserId"
            label="User Id"
            value={userData["UserId"]}
            fullWidth
            autoComplete="UserId"
            name="UserId"
            onChange={handleTextChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            disabled={props?.props?.EditUser}
            required
            id="Password"
            name="Password"
            label="Password"
            fullWidth
            autoComplete="Password"
            type="password"
            value={userData["Password"]}
            onChange={handleTextChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="FirstName"
            name="FirstName"
            label="First Name"
            fullWidth
            autoComplete="FirstName"
            value={userData["FirstName"]}
            onChange={handleTextChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="LastName"
            name="LastName"
            label="Last Name"
            fullWidth
            autoComplete="LastName"
            value={userData["LastName"]}
            onChange={handleTextChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="MobileNumber"
            name="MobileNumber"
            label="Mobile Number"
            fullWidth
            autoComplete="MobileNumber"
            value={userData["MobileNumber"]}
            onChange={handleTextChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="EmailAddress"
            name="EmailAddress"
            label="Email Address"
            fullWidth
            autoComplete="Email Address"
            value={userData["EmailAddress"]}
            onChange={handleTextChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputLabel htmlFor="Gender">Gender</InputLabel>
          <Select
            name="Gender"
            id="Gender"
            native
            inputProps={{
              name: "Gender",
              id: "Gender",
            }}
            fullWidth
            value={userData["Gender"]}
            onChange={handleTextChange}
          >
            <option aria-label="None" value={null}>
              Select
            </option>
            <option value={"Male"}>Male</option>
            <option value={"Female"}>Female</option>
          </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="DOB"
            name="DOB"
            label="DOB"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            value={userData["DOB"]}
            onChange={handleTextChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputLabel htmlFor="RoleId">Role</InputLabel>
          <Select
            native
            value={userData["RoleId"]}
            inputProps={{
              name: "RoleId",
              id: "RoleId",
            }}
            fullWidth
            required
            name="RoleId"
            autoComplete="RoleId"
            onChange={handleTextChange}
          >
            <option aria-label="None" value={null}>Select</option>
            <option value={"1"}>Administrator</option>
            <option value={"2"}>Dental Office Person</option>
            <option value={"3"}>Agent</option>
          </Select>
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputLabel htmlFor="LocationId">Location</InputLabel>
          <Select
            native
            value={userData["LocationId"]}
            inputProps={{
              name: "LocationId",
              id: "LocationId",
            }}
            fullWidth
            required
            name="LocationId"
            autoComplete="LocationId"
            onChange={handleTextChange}
            disabled={userData["RoleId"] &&  userData["RoleId"].toString() !== "2"}
          >
            <option aria-label="None" value={null}>
              Select
            </option>
            {console.log(locations.data.response)}
            {locations?.data?.response?.length &&
              locations.data.response.map((item, index) => {
                return (
                  <option key={`${item} + ${index}`} value={item.LocationId}>
                    {item.LocationName}
                  </option>
                );
              })}
          </Select>
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputLabel htmlFor="Country">Country</InputLabel>
          <Select
            native
            value={userData["Country"]}
            inputProps={{
              name: "Country",
              id: "Country",
            }}
            fullWidth
            required
            name="Country"
            autoComplete="Country"
            onChange={handleTextChange}
          >
            <option aria-label="None" value={null}>
              Select
            </option>
            <option value={"US"}>US</option>
            <option value={"INDIA"}>INDIA</option>
          </Select>
        </Grid>
      </Grid>

      <br />
      <div style={{ position: "fixed", bottom: 20, right: 20 }}>
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: 20 }}
          onClick={handlesubmit}
        >
          <SaveIcon /> Save
        </Button>

        <Button
          variant="contained"
          color="secondary"
          style={{ marginRight: 20 }}
          onClick={props.props.handleClose}
        >
          <CloseIcon /> Cancel
        </Button>
      </div>
    </React.Fragment>
  );
}
