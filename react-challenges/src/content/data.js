// primary key is id
import progImg from "../assets/images/prog-bar.png";
export const tasks = [
  {
    id: 0,
    title: "Progress-Bar",
    description:
      "Create a component called ProgressBar which displays a progress bar. The progress bar should have the following styling applied:  A width of 100% A height of 20px A border radius of 5px The completed bit should be green The remaining bit should be lightgrey You add the CSS to the component using Styled Components or using Inline CSS or adding identifiers and using the App.css file. It's totally up to yoU The component should accept a percent prop which is used to determine how many percentage of the progress bar to fill with green colour.",
    img: progImg,
    extras:
      "Do not edit the data-testid attributes that are present in the component, these are used for testing your code",
  },
  {
    id: 1,
    title: "",
    description: "",
    img: "",
    extras: "",
  },
];

// foreign key is id
// this array is linked by the id's whereby if challenge id = 0 the task id is id = 0
export const challengeList = [
  {
    id: 0,
    challenges:
      "Render the ProgressBar component in the react app , Render with a height of 20px, Render with a border radius of 5px, Render the remaining part of the bar with lightgrey background color ,Render the filled part of the bar with green background color, Render the filled part of the bar with a border radius of 5px, Render the filled part of the bar with the correct width (use the percent prop passed to the react component), Render the filled part of the bar with the correct width, when percent is greater than 100",
  },
  {
    id: 1,
    challenges:
      "Render the ProgressBar component in the react app , Render with a height of 20px, Render with a border radius of 5px, Render the remaining part of the bar with lightgrey background color ,Render the filled part of the bar with green background color, Render the filled part of the bar with a border radius of 5px, Render the filled part of the bar with the correct width (use the percent prop passed to the react component), Render the filled part of the bar with the correct width, when percent is greater than 100",
  },
];
