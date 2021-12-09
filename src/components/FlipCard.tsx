import { makeStyles } from "@mui/styles";
import React, { ReactNode } from "react";

const useStyles = makeStyles({
  flipCard: {
    backgroundColor: "transparent",
    perspective: "1000px",
    width: "100%",
    height: "100%",
    // "&:hover": {
    //   transform: "rotateY(180deg)",
    // },
  },
  flipCardInner: {
    position: "relative",
    width: "100%",
    height: "100%",
    textAlign: "center",
    transition: "transform 0.8s",
    transformStyle: "preserve-3d",
    "&:hover": {
      transform: "rotateY(180deg)",
    },
  },
  flipCardFront: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    backgroundColor: "#bbb",
    color: "black",
  },
  flipCardBack: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    // backgroundColor: "dodgerblue",
    color: "black",
    transform: "rotateY(180deg)",
  },
});

interface FlipCardProps {
  front: ReactNode;
  back: ReactNode;
}

const FlipCard: React.FC<FlipCardProps> = (props) => {
  const classes = useStyles();

  console.log(props);
  return (
    <div className={classes.flipCard}>
      <div className={classes.flipCardInner}>
        <div className={classes.flipCardFront}>{props.front}</div>
        <div className={classes.flipCardBack}>{props.back}</div>
      </div>
    </div>
  );
};

export default FlipCard;
