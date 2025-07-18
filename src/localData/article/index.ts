import { articleTree } from "./types";
import { javaBasics } from "./data/javaBasics";
import { nginx } from "./data/nginx";
import { SpringMvcandSpringBoot } from "./data/SpringMvcAndSpringBoot";
/**
 * 文章列表数据源
 */
export const articleData: Array<articleTree> = [
  {
    id: 1,
    articelMain: ``,
    label: "Java",
    children: [
      {
        id: 3,
        articelMain: `1`,
        children: [],
        label: "Java并发编程",
        pid: `1`,
        navId: "",
      },
      {
        id: 4,
        articelMain: javaBasics,
        children: [],
        label: "Java基础",
        pid: `1`,
        navId: "",
      },
    ],
    pid: "",
    navId: 2,
  },
  {
    id: 2,
    articelMain: `springboot`,
    label: "Springboot",
    children: [],
    pid: "",
    navId: 2,
  },
  {
    id: 5,
    articelMain: `网络杂谈正文`,
    label: "网络杂谈1",
    children: [],
    pid: "",
    navId: 4,
  },
    {
    id: 6,
    articelMain: nginx,
    label: "nginx使用",
    children: [],
    pid: "",
    navId: 3,
  },
];
