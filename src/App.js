import "./App.css";
import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";

const menuOptions = [
  {
    value: 1,
    text: "Poor",
  },
  {
    value: 2,
    text: "Good",
  },
  {
    value: 3,
    text: "Excellent",
  },
];

function App() {
  const [requirements, setRequirements] = React.useState("");

  const handleChange = (event) => {
    setRequirements(event.target.value);
  };

  return (
    <div className="App">
      <Container sx={{ textAlign: "left" }}>
        <Typography
          sx={{ textAlign: "center" }}
          variant="h4"
          gutterBottom
          mt={5}
          mb={10}
        >
          Comparitive Study Of SDLC Models
        </Typography>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Requirement Clarity</InputLabel>
          <Select
            value={requirements}
            label="Requirement Clarity"
            onChange={handleChange}
          >
            {menuOptions.map((ele, id) => (
              <MenuItem key={`Requirement-${id}`} value={ele.value}>
                {ele.text}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Technology</InputLabel>
          <Select
            value={requirements}
            label="Technology"
            onChange={handleChange}
          >
            {menuOptions.map((ele, id) => (
              <MenuItem key={`Texhno-${id}`} value={ele.value}>
                {ele.text}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Complexity</InputLabel>
          <Select
            value={requirements}
            label="Complexity"
            onChange={handleChange}
          >
            {menuOptions.map((ele, id) => (
              <MenuItem key={`complex-${id}`} value={ele.value}>
                {ele.text}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Time Limit</InputLabel>
          <Select
            value={requirements}
            label="Time Limit"
            onChange={handleChange}
          >
            {menuOptions.map((ele, id) => (
              <MenuItem key={`time-${id}`} value={ele.value}>
                {ele.text}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Cost Expense</InputLabel>
          <Select
            value={requirements}
            label="Cost Expense"
            onChange={handleChange}
          >
            {menuOptions.map((ele, id) => (
              <MenuItem key={`cost-${id}`} value={ele.value}>
                {ele.text}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Skills</InputLabel>
          <Select value={requirements} label="Skills" onChange={handleChange}>
            {menuOptions.map((ele, id) => (
              <MenuItem key={`skill-${id}`} value={ele.value}>
                {ele.text}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Typography
          sx={{ textAlign: "center" }}
          variant="h6"
          gutterBottom
          mt={5}
          mb={2}
        >
          Best Suited Model
        </Typography>
        <Typography
          sx={{ textAlign: "center" }}
          variant="h2"
          gutterBottom
          mt={2}
          mb={10}
        >
          Trst
        </Typography>
      </Container>
    </div>
  );
}

export default App;
