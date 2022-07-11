import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "../containers/articles/articlesSlice";
import reportsReducer from "../containers/reports/reportsSlice";
import blogsReducer from "../containers/blogs/blogsSlice";

export default configureStore({
  reducer: {
    articles: articlesReducer,
    reports: reportsReducer,
    blogs: blogsReducer,
  },
});
