import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Card, CardContent, Typography } from "@mui/material";

export const EmpList=()=> {
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get("https://api.escuelajs.co/api/v1/users");

    setData(result.data.slice(0, 3));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Grid
      align="center"
      container
      spacing={2}
      sx={{ bgcolor: "orange", padding: 2 }}
    >
      {data.map((user) => (
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <img src={user.avatar} alt="" />
              <Typography variant="h4" component="div">
                {user.name.toUpperCase()}
              </Typography>
              <Typography color="textSecondary"> {user.role}</Typography>
              <Typography color="textSecondary"> {user.email}</Typography>
              <Typography color="textSecondary">{user.password}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
