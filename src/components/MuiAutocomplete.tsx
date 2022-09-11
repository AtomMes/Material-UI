import { Stack, Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";

type Skill = {
  id: number;
  label: string;
};

const skills = ["HTML", "Css", "JS", "TS", "React"];

const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));
export const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null);

  const [skill, setSkill] = useState<Skill | null>(null)

  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}//te ira mej incheren eli, vor yntrum enq
        renderInput={(params) => (
          <TextField {...params} label="Skill" color="secondary" />
        )}
        value={value}
        onChange={(event: any, newValue: string | null) => setValue(newValue)}
        freeSolo //nra hamara vor karenanq lyuboy ban grenq prosty, ete chexni menak skillseri bareric karanq grenq yntrenq
      />
      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => (
          <TextField {...params} label="Skill" color="secondary" />
        )}
        value={skill}
        onChange={(event: any, newValue: Skill | null) => setSkill(newValue)}
      />
    </Stack>
  );
};
