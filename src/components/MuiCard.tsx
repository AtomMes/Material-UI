import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

export const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>{/*paperi nman bana, cartochkaya sarqum */}
        <CardMedia //cartMediana, nkary eli
          component="img"
          height="140"
          image='https://pixabay.com/images/search/nature/'//petqa nkar drver chi exnum heto knayem xi
          alt="image"
        />
        <CardContent>{/*contentna, meji gracnery ev ayln */}
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil esse
            unde enim dolorem?
          </Typography>
        </CardContent>
        <CardActions>{/*actionnerna, aysinqn knopkeqy */}
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
