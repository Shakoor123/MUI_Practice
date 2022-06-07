import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 700 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="data:image/jpeg;base64,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"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
       more
      </Collapse>
    </Card>
    
  );
}
