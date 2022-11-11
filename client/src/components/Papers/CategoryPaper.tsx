import {
  Paper,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ImageList,
  ImageListItem,
  Button,
} from "@mui/material";
import { FC } from "react";

interface CategoryPaperProps {
  width: string;
  images: any[];
  catToPick: any[];
  setActiveCat: Function;
  activeCat: number;
}

const CategoryPaper: FC<CategoryPaperProps> = ({
  width,
  images,
  catToPick,
  setActiveCat,
  activeCat,
}) => {
  return (
    <Paper sx={{ width: width }} elevation={3}>
      <Grid>
        <List>
          <ListItem>
            {catToPick.map((item, i) => (
              <ListItemButton
                key={i}
                onClick={() => setActiveCat(i)}
                sx={
                  i === activeCat
                    ? {
                        textAlign: "center",
                        textDecoration: "none",
                        backgroundColor: "rgba(0, 0, 0, 0.1)",
                        borderRadius: "12px",
                        boxShadow: "-1px 0px 8px 1px rgba(34, 60, 80, 0.3)",
                      }
                    : {
                        textAlign: "center",
                      }
                }
              >
                <ListItemText>{item}</ListItemText>
              </ListItemButton>
            ))}
          </ListItem>
        </List>
        <ImageList sx={{ padding: "8px 16px", marginBottom: '4px', marginTop: '4px' }}>
          {images.map((item) => (
            <ImageListItem
              key={item}
              sx={{
                borderRadius: "12px",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              <img
                src="https://i.natgeofe.com/n/16801a8a-0d23-4210-80d5-55b9f83df104/pool-glacier.jpg?w=1260&h=840"
                alt="rnadom img"
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Grid container justifyContent='space-between' sx={{padding: '0 16px 0 16px', mb: 2}}>
          <Button sx={{width: '49%', background: '#E3E9EF', color: '#2A5885'}}>Загрузить</Button>
          <Button sx={{width: '49%', background: '#E3E9EF', color: '#2A5885'}}>Показать все</Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CategoryPaper;
