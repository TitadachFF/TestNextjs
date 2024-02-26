import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

//เรียกใช้API
async function getData() {
  const res = await fetch(`https://www.melivecode.com/api/attractions`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

//ประกาศType
interface attraction {
  id: number;
  name: string;
  detail: string;
  coverimage: string;
  latitude: number;
  longitude: number;
}

export default async function Page() {
  const data = await getData();
  //เรียกดูDataในAPI
  console.log(data);
  return (
    <Container maxWidth="md">
      <h1>Hello World</h1>
      <Grid container spacing={2}>
        {/* Loop data ที่ประกาศไว้ */}
        {/* จะกำหนดอะไรก็ได้เช่น aหรือb ให้มีค่าตรงกับ interface ที่กำหนดไว้ */}
        {data.map((a: attraction) => (
          <Grid item xs={12} md={4} key={a.id}>
            <Card className="h-[430px] ">
              <CardMedia
                sx={{ height: 140 }}
                image={a.coverimage}
                title={a.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {a.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {a.detail}
                </Typography>
              </CardContent>
              <CardActions>
                <Link
                  className="font-bold hover:text-blue-500 "
                  href={"/" + a.id}
                >
                  Learn more{" "}
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
