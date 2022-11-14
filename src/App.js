import "./App.css";
import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";

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

const modelList = [
  {
    name: "V-shaped Model",
    req: 1,
    tech: 1,
    complex: 2,
    time: 1,
    cost: 1,
    skill: 2,
  },
  {
    name: "Waterfall Model",
    req: 1,
    tech: 1,
    complex: 2,
    time: 1,
    cost: 1,
    skill: 2,
  },
  {
    name: "Incremental Model",
    req: 2,
    tech: 2,
    complex: 2,
    time: 3,
    cost: 3,
    skill: 2,
  },
  {
    name: "Spiral Model",
    req: 3,
    tech: 3,
    complex: 3,
    time: 1,
    cost: 3,
    skill: 1,
  },
  {
    name: "Evolutionary Prototyping",
    req: 2,
    tech: 3,
    complex: 1,
    time: 2,
    cost: 1,
    skill: 1,
  },
  {
    name: "RAD Model",
    req: 3,
    tech: 2,
    complex: 2,
    time: 3,
    cost: 3,
    skill: 1,
  },
  {
    name: "Agile Model",
    req: 3,
    tech: 1,
    complex: 2,
    time: 3,
    cost: 3,
    skill: 1,
  },
];

function App() {
  const [requirements, setRequirements] = React.useState("");
  const [technology, setTechnology] = React.useState("");
  const [complexity, setComplexity] = React.useState("");
  const [timeLimit, setTimeLimit] = React.useState("");
  const [costExpense, setCostExpense] = React.useState("");
  const [skills, setSkills] = React.useState("");
  const [model, setModel] = React.useState(["-"]);

  const handleReqChange = (event) => {
    setRequirements(event.target.value);
  };
  const handleTechChange = (event) => {
    setTechnology(event.target.value);
  };
  const handleComplexChange = (event) => {
    setComplexity(event.target.value);
  };
  const handleTimeChange = (event) => {
    setTimeLimit(event.target.value);
  };
  const handleCostChange = (event) => {
    setCostExpense(event.target.value);
  };
  const handleSkillChange = (event) => {
    setSkills(event.target.value);
  };

  useEffect(() => {
    let modelArr = [
      ...modelList.filter(
        (ele) =>
          ele.req == requirements &&
          ele.tech == technology &&
          ele.complex == complexity &&
          ele.time == timeLimit &&
          ele.cost == costExpense &&
          ele.skill == skills
      ),
    ];
    if (modelArr.length == 0) {
      setModel([{ name: "-" }]);
    } else {
      setModel(modelArr);
    }
  }, [requirements, technology, complexity, timeLimit, costExpense, skills]);

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
            onChange={handleReqChange}
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
            value={technology}
            label="Technology"
            onChange={handleTechChange}
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
            value={complexity}
            label="Complexity"
            onChange={handleComplexChange}
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
            value={timeLimit}
            label="Time Limit"
            onChange={handleTimeChange}
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
            value={costExpense}
            label="Cost Expense"
            onChange={handleCostChange}
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
          <Select value={skills} label="Skills" onChange={handleSkillChange}>
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
          {model.map((ele) =>
            model.length == 1 ? (
              <span>{ele.name}</span>
            ) : (
              <span>{ele.name}, </span>
            )
          )}
        </Typography>
      </Container>
    </div>
  );
}

export default App;
