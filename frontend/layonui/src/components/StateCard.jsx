import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import stateAbbr from "../data/stateAbbr"; //to get the full state name from the two-letter code
import pics from "../data/pics"; //for state flag images

export default function StateCard(props) {
  const { selectedState, data, month } = props;

  const [totalLayoffs, setTotalLayoffs] = React.useState(0);

  React.useEffect(() => {
    if (data[month] != null && selectedState != null) {
      if (data[month][selectedState] != null) {
        setTotalLayoffs(data[month][selectedState].layoffs);
      }
    }
  }, [month, selectedState]);

  return (
    <Card sx={{ width: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        // image="/static/images/cards/contemplative-reptile.jpg"
        image={selectedState != null ? pics[selectedState] : ""}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {selectedState == null ? "" : stateAbbr[selectedState]}
        </Typography>
        <Typography variant="body2s" color="text.primary">
          Total Layoffs: {`${totalLayoffs}`}
        </Typography>
      </CardContent>
      <CardActions>
        <a
          target="_blank"
          href={
            "https://www.linkedin.com/jobs/search/?location=" +
            stateAbbr[selectedState]
          }
        >
          <Button size="small">Apply</Button>
        </a>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}
