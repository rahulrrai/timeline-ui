import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./TimelineCard.css";
import EditIcon from "@material-ui/icons/Edit";

function TimelineCard() {
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
    <Card className={classes.root}>
      <CardActionArea>
        <Typography className="timeline-header">29-March-2020</Typography>
        <CardMedia
          className={classes.media}
          image="https://sn3302files.storage.live.com/y4mSj-9wUYuOtvBtoa4TyetmmcmluPYhrE6-V3qzUKP6lbsjYH-DI7B_IRwB_XtC3n9DN7IlyPBSJ2ko8IDyJrY50gcKaZM7HgNFPwGIDijdHHYhLNLOGVLGxdIqOVlRAUX8DPgz2ekDXAa2p2qaTGyXX-ME601E8oj268nNPat2yRmrLiWgESOSq_BEDMQUqQ8?width=660&height=495&cropmode=none"
          title="Gang of Four"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            First Day - Gang of 4
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            We joined IRIS as a Fresher in Year 2012. Eknath and Dipak joined
            first, then Deepak, and Rahul was the last one to join. and we all
            will always agree that the year 2012 to 2014 was one of the best
            years of our life
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button size="small" color="primary">
          More..
        </Button>
        <Button size="small" color="primary">
          <EditIcon />
        </Button>
      </CardActions>
    </Card>
  );
}

export default TimelineCard;
