import {
  UserOutlined,
  FundTwoTone,
  BookTwoTone,
  BulbTwoTone,
  HomeTwoTone,
  ReadOutlined,
} from "@ant-design/icons";
export const menuItems = [
    {
      key: "/",
      icon: <HomeTwoTone twoToneColor={'#3fbb5eff'}/>,
      label: "Главная страница",
      link: "/",
    }, 
    {
      key: "catalog",
      icon: <BookTwoTone twoToneColor={'#3fbb5eff'}/>,
      label: "Каталог",
      link: "/catalog",
    },
    {
      key: "information",
      icon: <BulbTwoTone twoToneColor={'#3fbb5eff'}/>,
      label: "Информация",
      link: "/information",
    },
    {
      key: "theory",
      icon: <ReadOutlined style={{color: '#3fbb5eff'}}/>,
      label: "Теория",
      link: "/theory",
    },
    {
      key: "rating",
      icon: <FundTwoTone twoToneColor={'#3fbb5eff'}/>,
      label: "Рейтинг",
      link: "/rating",
    },
    {
      key: "profile",
      icon: <UserOutlined style={{color: '#3fbb5eff'}}/>,
      label: "Мой профиль",
      link: "/profile",
    },
  ];