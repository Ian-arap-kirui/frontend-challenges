// primary key is id
import progImg from "../assets/images/prog-bar.png";
import tabsImg from "../assets/images/tabs-img.gif";
import hoverImg from "../assets/images/hover-counter.gif";
export const tasks = [
  {
    id: 0,
    title: "Progress-Bar",
    description:
      "Create a component called ProgressBar which displays a progress bar. The progress bar should have the following styling applied:  A width of 100% A height of 20px A border radius of 5px The completed bit should be green The remaining bit should be lightgrey You add the CSS to the component using Styled Components or using Inline CSS or adding identifiers and using the App.css file. It's totally up to yoU The component should accept a percent prop which is used to determine how many percentage of the progress bar to fill with green colour.",
    img: progImg,
    link: "/progress-bar",
    extras:
      "Do not edit the data-testid attributes that are present in the component, these are used for testing your code",
    challenges:
      "Render the ProgressBar component in the react app , Render with a height of 20px, Render with a border radius of 5px, Render the remaining part of the bar with lightgrey background color ,Render the filled part of the bar with green background color, Render the filled part of the bar with a border radius of 5px, Render the filled part of the bar with the correct width (use the percent prop passed to the react component), Render the filled part of the bar with the correct width, when percent is greater than 100",
  },
  {
    id: 1,
    title: "Tabs Component",
    description:
      "Build a component Tabs that displays a list of tabs for either viewing information about a person or viewing information about an address.You should make the tab functional so that when the tab Person is active then return the PersonContainer with all its children. Implement the same logic for the Address tab. We have already written some starting code along with styles for you. Your code should work as shown in the below GIF.",
    img: tabsImg,
    link: "/tabs",
    extras:
      "Do not edit the data-testid attributes, Only one Tab can be active at a time.",
    challenges:
      "Renders the person tab and its content by default, Renders the address tab and its content when it is clicked, Switches between the person and address tabs when they are clicked",
  },
  {
    id: 2,
    title: "Hover Counter",
    description:
      "Create a component called App that displays the number of times the user has hovered a button with the text “Hover Me”. The count should be displayed in an h1 element and updated each time the user hovers over the button. The initial value of the count should be set to 0. We have already written some starting code for you.",
    img: hoverImg,
    link: "/hover-counter",
    extras:
      "Set the initial value of the hover count to 0. Return a button element with the text Hover Me. Do not edit the data-testid attributes.",
    challenges:
      "Renders the -Hover Me- button and h1 count element, Starts with a count of 0, Increments the count when the button is hovered over",
  },
];
