import { styled } from "@material-ui/core";
import SliderMaterial from "@material-ui/core/Slider";

const Slider = styled(SliderMaterial)({
  color: "#769CFF",
  height: 7,

  "& .MuiSlider-thumb": {
    height: 20,
    width: 20,
    backgroundColor: "#FFF",
    boxShadow: "0px 1px 4px rgba(129, 132, 197, 0.25)",
    "&:before": {
      display: "none",
    },
  },

  "& .MuiSlider-rail": {
    height: 7,
    borderRadius: 9999,
  },

  "& .MuiSlider-track": {
    height: 7,
    borderRadius: 9999,
  },
});

export default Slider;
