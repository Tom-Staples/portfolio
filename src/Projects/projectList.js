import connect4 from '../Images/connect4.png';
import calorieCounter from '../Images/calorieCounter.png';
import memoryMatch from '../Images/memoryMatch.png';
import todoList from '../Images/todoList.png';
import starStylists from '../Images/starStylists.png';
import connect4Vid from '../Videos/connect4.mp4';
import calorieCounterVid from '../Videos/calorieCounterVid.mp4'; 
import memoryMatchVid from '../Videos/memoryMatchVid.mp4';
import todoListVid from '../Videos/todoListVid.mp4';
import starStylistsVid from '../Videos/starStylistsVid.mp4'; 

const projectList = 
[
    {
        id: "01",
        name: "Connect 4",
        img: connect4,
        description: "The classic game of connect 4. Made with HTML, CSS, JS, and React.js",
        vid: connect4Vid,
        message: "This is the classic game of connect 4. Made with HTML, CSS, JS and React.js. Check out the video to see it in action. Make sure to click the link below for the GitHub Repository.",
        gitRepo: "https://github.com/Tom-Staples/connect4"
    },
    {
        id: "02",
        name: "Calorie Counter",
        img: calorieCounter,
        description: "An app to track your calories and macros. Enter your meals throughout the day to update your progress. Made with HTML, CSS, JS, and React.js.",
        vid: calorieCounterVid,
        message: "This is an app that calculates your target calories and macros based on your metrics and goals. You can keep track of your daily progress by entering the meals you eat during the day. " + 
        "The app will respond with personalised messages to help you reach your nutritional targets. Made with HTML, CSS, JS and React.js. Check out the video to see it in action. " +
        "Make sure to click the link below for the GitHub repository.",
        gitRepo: "https://github.com/Tom-Staples/calorieCounter"
    },
    {
        id: "03",
        name: "Memory Match",
        img: memoryMatch,
        description: "How fast can you match the colours? This game times how fast you can match 10 pairs. Made with HTML, CSS, and JS.",
        vid: memoryMatchVid,
        message: "This game tests your memory and speed! How fast can you match 10 pairs of colours? Made with HTML, CSS, and JS. Check out the video to see it in action. Make sure to click the link below for the GiHhub repository.",
        gitRepo: "https://github.com/Tom-Staples/memoryMatch"
    },
    {
        id: "04",
        name: "To-Do List",
        img: todoList,
        description: "The classic to-do list. Add your tasks for the day. Built with filter functionality to find specific tasks. Remove items when you're done! Made with HTML, CSS, JS, and React.js.",
        vid: todoListVid,
        message: "The to-do list app allows your to make a list of your tasks for the day. It contains a filter function in order to find specific tasks on your list. Once a task is finished, simply click the remove item button. " + 
        "Made with HTML, CSS, JS and React.js. Check out the video to see it in action. Make sure to click the link below for the GitHub repository.",
        gitRepo: "https://github.com/Tom-Staples/todoList"
    },
    {
        id: "05",
        name: "Star Stylists",
        img: starStylists,
        description: "My very first project! A webpage for 'Star Stylists'. The make-believe hairdressers who can give you a super trim, just don't try to book with them! Made with HTML and CSS.",
        vid: starStylistsVid,
        message: "This is the website for the fictional 'Star Stylists'. Features include a landing page, about section, meet the stylist, gallery, and a page to book apppointments. Made with HTML and CSS. " +
        "Check out the video to see it in action. Make sure to click the link below for the GitHub repository.",
        gitRepo: "https://github.com/Tom-Staples/starStylists"
    }
];

export default projectList;