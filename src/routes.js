import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BooksListView from "views/Dashboard";

const dashboardRoutes = [
  {
    path: "/home",
    name: "Book",
    icon: LibraryBooks,
    component: BooksListView,
    layout: "/"
  }
];

export default dashboardRoutes;
