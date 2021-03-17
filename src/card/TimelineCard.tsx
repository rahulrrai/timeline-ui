import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./TimelineCard.css";
import EditIcon from "@material-ui/icons/Edit";

function TimelineCard({ cardData }: { cardData: any }) {
  const useStyles = makeStyles({
    root: {
      maxWidth: 400,
    },
    media: {
      height: 150,
    },
  });
  const classes = useStyles();
  return (
    <Card className={classes.root} style={{ textAlign: "left" }}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={cardData.headerImageUrl}
          title="Gang of Four"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {cardData.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {cardData.description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <div className="card-bottom-section-container">
        <div className="timelineCard-more-button">
          <Button size="small" color="primary">
            More..
          </Button>
        </div>
        <div className="timelineCard-edit-icon">
          <Button size="small" color="primary">
            <EditIcon />
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default TimelineCard;
