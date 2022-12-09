import MusicMatchimg from "../Assets/image/Music-Match.png";
import PasswordGenerator from "../Assets/image/PasswordGenerator.png";
import DailyPlanner from "../Assets/image/DailyPlanner.png";
import BookSearch from "../Assets/image/BookSearch.png";
import NoteTaker from "../Assets/image/NoteTaker.png";
import TravelMoney from "../Assets/image/TravelMoney.png";

const data = [
    {
      id: 1,
      title: "Book Search",
      description:
        "This is an application that utilizes an google Api to allow the user to search any book title.",
      image: BookSearch,
      repository: "https://github.com/Grady253/book-search",
      url: "https://ag-book-search.herokuapp.com/",
    },
    {
      id: 2,
      title: "Daily Planner",
      description:
        "This is an application that allows the user to plan out their daily task with a color coordination of time to keep them on track.",
      image: DailyPlanner,
      repository: "https://github.com/Grady253/daily_planner",
      url: "https://grady253.github.io/daily_planner/",
    },
    {
      id: 3,
      title: "Music Match",
      description:
        "This is an app that built to allow musicians and artist make connections. ",
      image: MusicMatchimg,
      repository: "https://github.com/KarlOL82/music-match",
      url: "https://groove-connection.herokuapp.com/",
    },
    {
      id: 4,
      title: "Note Taker",
      description:
        "This is application that allows users to dot down notes and save them as reminders. Users are also able to delete them once they've completed it.",
      image: NoteTaker,
      repository: "https://github.com/Grady253/note-taker",
      url: "https://ag-note-taker.herokuapp.com/",
    },
    {
      id: 5,
      title: "Password Generator",
      description:
        "This is an appllication that allows the user to generate a random password.",
      image: PasswordGenerator,
      repository: "https://github.com/Grady253/generate-password",
      url: "https://grady253.github.io/generate-password/",
    },
    {
      id: 6,
      title: "Travel & Money",
      description:
        "This application was built for users that are planning to travel. The user will be allowed to search different locations and find things to do within the area. Also, they'll be given the opportunity to check the currency rates between countries.",
      image: TravelMoney,
      repository: "https://github.com/KarlOL82/travel_money",
      url: "https://karlol82.github.io/travel_money/index.html",
    },
];
export default data;


